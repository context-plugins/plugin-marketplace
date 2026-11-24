import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response metadata */
export type ResponseMeta = {
  success?: boolean;
  statusCode?: number;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseMetaSchema: Schema<ResponseMeta> = s.object<ResponseMeta>(
  {
    success: s.optional(s.boolean()),
    statusCode: s.optional(s.int()),
    requestId: s.optional(s.string()),
    _keysMap: {
      statusCode: "status_code",
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
