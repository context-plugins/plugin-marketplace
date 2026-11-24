import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button1262 = {
  id?: string;
  /** @default "PHONE" */
  type?: "PHONE";
  label: string;
  phoneNumber: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button1262Properties: s.Shape<Button1262> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("PHONE"), "PHONE"),
  label: s.string(),
  phoneNumber: s.string(),
};

export const button1262InternalSchema: Schema<Button1262> = s.object<Button1262>(button1262Properties, {
  additionalProperties: s.json(),
});

export const button1262Schema: Schema<Button1262> = s.lazySchema(() =>
  s.object<Button1262>(
    {
      ...button1262Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      phoneNumber: s.string().check(s.minLength(3), s.maxLength(30)),
    },
    { additionalProperties: s.json() },
  ),
);
