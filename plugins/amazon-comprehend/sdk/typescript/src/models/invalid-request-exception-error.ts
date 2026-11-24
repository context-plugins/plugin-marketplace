import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invalidRequestDetailSchema, type InvalidRequestDetail } from "./invalid-request-detail.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type InvalidRequestExceptionError = {
  message?: string;
  reason?: Reason1;
  detail?: InvalidRequestDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidRequestExceptionErrorSchema: Schema<InvalidRequestExceptionError> =
  s.object<InvalidRequestExceptionError>(
    {
      message: s.optional(s.string()),
      reason: s.optional(s.lazy(() => reason1Schema)),
      detail: s.optional(s.lazy(() => invalidRequestDetailSchema)),
      _keysMap: {
        message: "Message",
        reason: "Reason",
        detail: "Detail",
      },
    },
    { additionalProperties: s.json() },
  );
