import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

/** Create event response object */
export type EventResponse = {
  /** Response metadata */
  meta?: ResponseMeta;
  /** Event status response */
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventResponseSchema: Schema<EventResponse> = s.object<EventResponse>(
  {
    meta: s.optional(s.lazy(() => responseMetaSchema)),
    data: s.optional(s.lazy(() => dataSchema)),
  },
  { additionalProperties: s.json() },
);
