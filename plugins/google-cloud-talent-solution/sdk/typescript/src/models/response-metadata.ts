import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Additional information returned to client, such as debugging information. */
export type ResponseMetadata = {
  /** A unique id associated with this call. This id is logged for tracking purposes. */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseMetadataSchema: Schema<ResponseMetadata> = s.object<ResponseMetadata>(
  {
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
