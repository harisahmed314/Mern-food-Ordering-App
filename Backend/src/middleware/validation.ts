import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

// Middleware to handle validation errors
const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validation rules for the user creation request
export const validateMyUserRequest = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name must be a string and cannot be empty"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a string and cannot be empty"),
  body("city")
    .isString()
    .notEmpty()
    .withMessage("City must be a string and cannot be empty"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("Country must be a string and cannot be empty"),
  handleValidationErrors, // This must be called after the validation checks
];
