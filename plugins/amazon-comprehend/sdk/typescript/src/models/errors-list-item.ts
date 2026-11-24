import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

export type ErrorsListItem = {
  /** Page number where the error occurred. */
  page?: number;
  /** Error code for the cause of the error. */
  errorCode?: ErrorCode;
  /** Text message explaining the reason for the error. */
  errorMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorsListItemSchema: Schema<ErrorsListItem> = s.object<ErrorsListItem>(
  {
    page: s.optional(s.int()),
    errorCode: s.optional(s.lazy(() => errorCodeSchema)),
    errorMessage: s.optional(s.string()),
    _keysMap: {
      page: "Page",
      errorCode: "ErrorCode",
      errorMessage: "ErrorMessage",
    },
  },
  { additionalProperties: s.json() },
);
