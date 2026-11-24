import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Join button text. Max 18 characters. */
export type CustomJoinText = {
  /** @default "custom_join_text" */
  name?: "custom_join_text";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customJoinTextProperties: s.Shape<CustomJoinText> = {
  name: s.defaulted(s.literal("custom_join_text"), "custom_join_text"),
  value: s.optionalNullable(s.string()),
};

export const customJoinTextInternalSchema: Schema<CustomJoinText> = s.object<CustomJoinText>(
  customJoinTextProperties,
  { additionalProperties: s.json() },
);

export const customJoinTextSchema: Schema<CustomJoinText> = s.lazySchema(() =>
  s.object<CustomJoinText>(
    {
      ...customJoinTextProperties,
      value: s.optionalNullable(s.string().check(s.maxLength(18))),
    },
    { additionalProperties: s.json() },
  ),
);
