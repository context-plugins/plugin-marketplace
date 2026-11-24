import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Email = {
  value?: string;
  type?: string;
  primary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const emailProperties: s.Shape<Email> = {
  value: s.optional(s.string()),
  type: s.optional(s.string()),
  primary: s.optional(s.boolean()),
};

export const emailInternalSchema: Schema<Email> = s.object<Email>(emailProperties, {
  additionalProperties: s.json(),
});

export const emailSchema: Schema<Email> = s.lazySchema(() =>
  s.object<Email>(
    {
      ...emailProperties,
      value: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
