import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Standard error payload returned by Mailboxlayer when a request fails. */
export type ApiErrorModel = {
  /** Always false for error responses. */
  success: boolean;
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  {
    success: s.boolean(),
    error: errorSchema,
  },
  { additionalProperties: s.json() },
);
