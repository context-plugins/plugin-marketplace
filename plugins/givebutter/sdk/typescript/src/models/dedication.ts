import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dedicationTypeSchema, type DedicationType } from "./dedication-type.js";

export type Dedication = {
  type: DedicationType;
  name: string;
  recipientName: string | null;
  recipientEmail: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dedicationProperties: s.Shape<Dedication> = {
  type: dedicationTypeSchema,
  name: s.string(),
  recipientName: s.nullable(s.string()),
  recipientEmail: s.nullable(s.string()),
  _keysMap: {
    recipientName: "recipient_name",
    recipientEmail: "recipient_email",
  },
};

export const dedicationInternalSchema: Schema<Dedication> = s.object<Dedication>(dedicationProperties, {
  additionalProperties: s.json(),
});

export const dedicationSchema: Schema<Dedication> = s.lazySchema(() =>
  s.object<Dedication>(
    {
      ...dedicationProperties,
      name: s.string().check(s.maxLength(255)),
      recipientName: s.nullable(s.string().check(s.maxLength(255))),
      recipientEmail: s.nullable(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
