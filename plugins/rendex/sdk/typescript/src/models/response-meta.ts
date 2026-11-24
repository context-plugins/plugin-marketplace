import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResponseMeta = {
  /** Unique request identifier */
  requestId?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseMetaSchema: Schema<ResponseMeta> = s.object<ResponseMeta>(
  {
    requestId: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
