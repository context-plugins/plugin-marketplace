import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message. */
export type Whatsapp = {
  number: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const whatsappProperties: s.Shape<Whatsapp> = {
  number: s.string(),
  message: s.optional(s.string()),
};

export const whatsappInternalSchema: Schema<Whatsapp> = s.object<Whatsapp>(whatsappProperties, {
  additionalProperties: s.json(),
});

export const whatsappSchema: Schema<Whatsapp> = s.lazySchema(() =>
  s.object<Whatsapp>(
    {
      ...whatsappProperties,
      number: s.string().check(s.pattern("^[1-9]\\d{7,14}$")),
      message: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
