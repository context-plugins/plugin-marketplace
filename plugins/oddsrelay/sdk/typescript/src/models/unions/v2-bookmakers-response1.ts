import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { v2BookmakersResponseSchema, type V2BookmakersResponse } from "../v2-bookmakers-response.js";
import { venueSchema, type Venue } from "../venue.js";

export type V2BookmakersResponse1 = V2BookmakersResponse | Venue[];

export const v2BookmakersResponse1Schema: Schema<V2BookmakersResponse1> = s.of<V2BookmakersResponse1>(
  s.union([s.lazy(() => v2BookmakersResponseSchema), s.array(s.lazy(() => venueSchema))]),
);
