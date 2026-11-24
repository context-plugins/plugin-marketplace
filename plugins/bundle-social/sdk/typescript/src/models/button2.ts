import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button2 = {
  id: string;
  /** @default "PHONE" */
  type?: "PHONE";
  label: string;
  phoneNumber: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button2Properties: s.Shape<Button2> = {
  id: s.string(),
  type: s.defaulted(s.literal("PHONE"), "PHONE"),
  label: s.string(),
  phoneNumber: s.string(),
};

export const button2InternalSchema: Schema<Button2> = s.object<Button2>(button2Properties, {
  additionalProperties: s.json(),
});

export const button2Schema: Schema<Button2> = s.lazySchema(() =>
  s.object<Button2>(
    {
      ...button2Properties,
      id: s.string().check(s.minLength(1), s.maxLength(36)),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      phoneNumber: s.string().check(s.minLength(3), s.maxLength(30)),
    },
    { additionalProperties: s.json() },
  ),
);
