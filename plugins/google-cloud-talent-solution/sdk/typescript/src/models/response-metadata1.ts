import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Additional information for the API invocation, such as the request tracking id. */
export type ResponseMetadata1 = {
  /** A unique id associated with this call. This id is logged for tracking purposes. */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseMetadata1Schema: Schema<ResponseMetadata1> = s.object<ResponseMetadata1>(
  {
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
