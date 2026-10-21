import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Basic request metadata returned by the API. */
export type RequestMeta = {
  requestId?: string;
  timestamp: Date;
  duration: number;
};

export const requestMetaSchema: Schema<RequestMeta> = s.object<RequestMeta>({
  requestId: s.optional(s.string()),
  timestamp: s.dateTime(),
  duration: s.int(),
});
