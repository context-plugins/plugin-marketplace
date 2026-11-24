import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Step3 = {
  id?: string;
  /** @default "SEND_PUBLIC_COMMENT_REPLY" */
  type?: "SEND_PUBLIC_COMMENT_REPLY";
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const step3Properties: s.Shape<Step3> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("SEND_PUBLIC_COMMENT_REPLY"), "SEND_PUBLIC_COMMENT_REPLY"),
  text: s.string(),
};

export const step3InternalSchema: Schema<Step3> = s.object<Step3>(step3Properties, {
  additionalProperties: s.json(),
});

export const step3Schema: Schema<Step3> = s.lazySchema(() =>
  s.object<Step3>(
    {
      ...step3Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      text: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
