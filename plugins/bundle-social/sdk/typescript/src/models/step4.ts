import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Step4 = {
  id?: string;
  /** @default "LIKE_COMMENT" */
  type?: "LIKE_COMMENT";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const step4Properties: s.Shape<Step4> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("LIKE_COMMENT"), "LIKE_COMMENT"),
};

export const step4InternalSchema: Schema<Step4> = s.object<Step4>(step4Properties, {
  additionalProperties: s.json(),
});

export const step4Schema: Schema<Step4> = s.lazySchema(() =>
  s.object<Step4>(
    {
      ...step4Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
    },
    { additionalProperties: s.json() },
  ),
);
