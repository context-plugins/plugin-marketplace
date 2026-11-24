import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../api-error-model.js";
import {
  emailValidationResponseInternalSchema,
  emailValidationResponseSchema,
  type EmailValidationResponse,
} from "../email-validation-response.js";

export type CheckResponse = EmailValidationResponse | ApiErrorModel;

export const checkResponseInternalSchema: Schema<CheckResponse> = s.of<CheckResponse>(
  s.union([s.lazy(() => emailValidationResponseInternalSchema), s.lazy(() => apiErrorModelSchema)]),
);

export const checkResponseSchema: Schema<CheckResponse> = s.lazySchema(() =>
  s.of<CheckResponse>(
    s.union([s.lazy(() => emailValidationResponseSchema), s.lazy(() => apiErrorModelSchema)]),
  ),
);
