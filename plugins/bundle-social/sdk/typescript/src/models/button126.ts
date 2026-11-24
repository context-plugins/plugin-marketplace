import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button126 = {
  id?: string;
  /** @default "POSTBACK" */
  type?: "POSTBACK";
  label: string;
  payload: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button126Properties: s.Shape<Button126> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("POSTBACK"), "POSTBACK"),
  label: s.string(),
  payload: s.string(),
};

export const button126InternalSchema: Schema<Button126> = s.object<Button126>(button126Properties, {
  additionalProperties: s.json(),
});

export const button126Schema: Schema<Button126> = s.lazySchema(() =>
  s.object<Button126>(
    {
      ...button126Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      payload: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
