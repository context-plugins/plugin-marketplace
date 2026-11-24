import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Retention = {
  resultUntil?: string;
  messageStored?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retentionSchema: Schema<Retention> = s.object<Retention>(
  {
    resultUntil: s.optional(s.string()),
    messageStored: s.optional(s.boolean()),
    _keysMap: {
      resultUntil: "result_until",
      messageStored: "message_stored",
    },
  },
  { additionalProperties: s.json() },
);
