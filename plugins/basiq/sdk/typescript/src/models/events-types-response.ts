import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data8Schema, type Data8 } from "./data8.js";
import { links4Schema, type Links4 } from "./links4.js";

export type EventsTypesResponse = {
  type?: string;
  count?: number;
  size?: number;
  /** one or more events that the webhook would send messages for. */
  data?: Data8[];
  links?: Links4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsTypesResponseSchema: Schema<EventsTypesResponse> = s.object<EventsTypesResponse>(
  {
    type: s.optional(s.string()),
    count: s.optional(s.int()),
    size: s.optional(s.int()),
    data: s.optional(s.array(s.lazy(() => data8Schema))),
    links: s.optional(s.lazy(() => links4Schema)),
  },
  { additionalProperties: s.json() },
);
