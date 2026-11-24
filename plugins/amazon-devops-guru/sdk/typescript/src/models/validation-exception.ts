import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";
import {
  validationExceptionFieldSchema,
  type ValidationExceptionField,
} from "./validation-exception-field.js";

export type ValidationException = {
  /** A message that describes the validation exception. */
  message: string;
  /** The reason the validation exception was thrown. */
  reason?: Reason;
  fields?: ValidationExceptionField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationExceptionSchema: Schema<ValidationException> = s.object<ValidationException>(
  {
    message: s.string(),
    reason: s.optional(s.lazy(() => reasonSchema)),
    fields: s.optional(s.array(s.lazy(() => validationExceptionFieldSchema))),
    _keysMap: {
      message: "Message",
      reason: "Reason",
      fields: "Fields",
    },
  },
  { additionalProperties: s.json() },
);
