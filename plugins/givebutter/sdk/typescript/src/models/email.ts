import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Email = {
  value?: string | null;
  type?: string | null;
  isPrimary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const emailProperties: s.Shape<Email> = {
  value: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  isPrimary: s.optional(s.boolean()),
  _keysMap: {
    isPrimary: "is_primary",
  },
};

export const emailInternalSchema: Schema<Email> = s.object<Email>(emailProperties, {
  additionalProperties: s.json(),
});

export const emailSchema: Schema<Email> = s.lazySchema(() =>
  s.object<Email>(
    {
      ...emailProperties,
      value: s.optionalNullable(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
