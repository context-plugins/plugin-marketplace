import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type EmailRecord = {
  email?: string;
  type?: Type;
  validationStatus?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const emailRecordProperties: s.Shape<EmailRecord> = {
  email: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  validationStatus: s.optional(s.string()),
};

export const emailRecordInternalSchema: Schema<EmailRecord> = s.object<EmailRecord>(emailRecordProperties, {
  additionalProperties: s.json(),
});

export const emailRecordSchema: Schema<EmailRecord> = s.lazySchema(() =>
  s.object<EmailRecord>(
    {
      ...emailRecordProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
