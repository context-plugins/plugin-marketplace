import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { badRequestDetailSchema, type BadRequestDetail } from "./bad-request-detail.js";
import { reasonSchema, type Reason } from "./reason.js";

export type BadRequestException = {
  message?: string;
  reason?: Reason;
  detail?: BadRequestDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const badRequestExceptionSchema: Schema<BadRequestException> = s.object<BadRequestException>(
  {
    message: s.optional(s.string()),
    reason: s.optional(s.lazy(() => reasonSchema)),
    detail: s.optional(s.lazy(() => badRequestDetailSchema)),
  },
  { additionalProperties: s.json() },
);
