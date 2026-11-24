import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Email1 = {
  /** The email address. */
  value?: string;
  /** The type of email (e.g., work). */
  type?: string;
  /** Whether this is the primary email. */
  primary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const email1Properties: s.Shape<Email1> = {
  value: s.optional(s.string()),
  type: s.optional(s.string()),
  primary: s.optional(s.boolean()),
};

export const email1InternalSchema: Schema<Email1> = s.object<Email1>(email1Properties, {
  additionalProperties: s.json(),
});

export const email1Schema: Schema<Email1> = s.lazySchema(() =>
  s.object<Email1>(
    {
      ...email1Properties,
      value: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
