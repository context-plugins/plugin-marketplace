import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item4 = {
  title: string;
  /** @default "POSTBACK" */
  type?: "POSTBACK";
  payload: string;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const item4Properties: s.Shape<Item4> = {
  title: s.string(),
  type: s.defaulted(s.literal("POSTBACK"), "POSTBACK"),
  payload: s.string(),
  url: s.optional(s.string()),
};

export const item4InternalSchema: Schema<Item4> = s.object<Item4>(item4Properties, {
  additionalProperties: s.json(),
});

export const item4Schema: Schema<Item4> = s.lazySchema(() =>
  s.object<Item4>(
    {
      ...item4Properties,
      title: s.string().check(s.minLength(1)),
      payload: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
