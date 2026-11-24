import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { venueSchema, type Venue } from "./venue.js";

export type V2BookmakersResponse = {
  meta: Meta;
  data: Venue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2BookmakersResponseSchema: Schema<V2BookmakersResponse> = s.object<V2BookmakersResponse>(
  {
    meta: metaSchema,
    data: s.array(s.lazy(() => venueSchema)),
  },
  { additionalProperties: s.json() },
);
