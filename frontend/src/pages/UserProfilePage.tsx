import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserapi'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm'

const UserProfilePage = () => {
    const {currentUser,isLoading:isGetLoading}=useGetMyUser()
    const{updateUser,isLoading:isUpdateLoading}=useUpdateMyUser()
    if (isGetLoading){
        return <span>loading...</span>

    }

    if(!currentUser){
        return <span>unable to load user profile</span>
    }
    return (
        <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading}/>
)
}

export default UserProfilePage