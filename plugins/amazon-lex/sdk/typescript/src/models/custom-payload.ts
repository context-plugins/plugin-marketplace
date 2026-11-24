import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomPayload = {
  /** The string that is sent to your application. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customPayloadSchema: Schema<CustomPayload> = s.object<CustomPayload>(
  {
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
