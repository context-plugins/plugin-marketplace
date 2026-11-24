import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { pageMetaSchema, type PageMeta } from "./page-meta.js";

export type V2EventsResponse = {
  meta: PageMeta;
  data: Event[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2EventsResponseSchema: Schema<V2EventsResponse> = s.object<V2EventsResponse>(
  {
    meta: pageMetaSchema,
    data: s.array(s.lazy(() => eventSchema)),
  },
  { additionalProperties: s.json() },
);
