import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button = {
  id: string;
  /** @default "POSTBACK" */
  type?: "POSTBACK";
  label: string;
  payload: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buttonProperties: s.Shape<Button> = {
  id: s.string(),
  type: s.defaulted(s.literal("POSTBACK"), "POSTBACK"),
  label: s.string(),
  payload: s.string(),
};

export const buttonInternalSchema: Schema<Button> = s.object<Button>(buttonProperties, {
  additionalProperties: s.json(),
});

export const buttonSchema: Schema<Button> = s.lazySchema(() =>
  s.object<Button>(
    {
      ...buttonProperties,
      id: s.string().check(s.minLength(1), s.maxLength(36)),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      payload: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
