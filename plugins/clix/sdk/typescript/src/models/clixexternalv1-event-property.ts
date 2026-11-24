import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1EventProperty = {
  messageId?: string;
  customProperties?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1EventPropertySchema: Schema<Clixexternalv1EventProperty> =
  s.object<Clixexternalv1EventProperty>(
    {
      messageId: s.optional(s.string()),
      customProperties: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        messageId: "message_id",
        customProperties: "custom_properties",
      },
    },
    { additionalProperties: s.json() },
  );
