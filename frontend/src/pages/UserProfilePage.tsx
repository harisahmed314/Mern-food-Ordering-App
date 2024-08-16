import UserProfileForm, { UserFormData } from '@/forms/user-profile-form/UserProfileForm'

const UserProfilePage = () => {
    return (
        <UserProfileForm currentUser={undefined} onSave={function (userProfileData: UserFormData): void {
            throw new Error('Function not implemented.')
        } } isLoading={false} />
)
}

export default UserProfilePage