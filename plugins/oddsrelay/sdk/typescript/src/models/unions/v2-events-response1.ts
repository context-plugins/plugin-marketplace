import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventSchema, type Event } from "../event.js";
import { v2EventsResponseSchema, type V2EventsResponse } from "../v2-events-response.js";

export type V2EventsResponse1 = V2EventsResponse | Event[];

export const v2EventsResponse1Schema: Schema<V2EventsResponse1> = s.of<V2EventsResponse1>(
  s.union([s.lazy(() => v2EventsResponseSchema), s.array(s.lazy(() => eventSchema))]),
);
