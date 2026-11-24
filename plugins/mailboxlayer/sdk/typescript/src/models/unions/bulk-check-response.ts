import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../api-error-model.js";
import {
  emailValidationResponseInternalSchema,
  emailValidationResponseSchema,
  type EmailValidationResponse,
} from "../email-validation-response.js";

export type BulkCheckResponse = EmailValidationResponse[] | ApiErrorModel;

export const bulkCheckResponseInternalSchema: Schema<BulkCheckResponse> = s.of<BulkCheckResponse>(
  s.union([s.array(s.lazy(() => emailValidationResponseInternalSchema)), s.lazy(() => apiErrorModelSchema)]),
);

export const bulkCheckResponseSchema: Schema<BulkCheckResponse> = s.lazySchema(() =>
  s.of<BulkCheckResponse>(
    s.union([s.array(s.lazy(() => emailValidationResponseSchema)), s.lazy(() => apiErrorModelSchema)]),
  ),
);
