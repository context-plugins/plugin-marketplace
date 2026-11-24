import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1EventPropertySchema,
  type Clixexternalv1EventProperty,
} from "./clixexternalv1-event-property.js";

export type V1Event = {
  userId?: string;
  deviceId?: string;
  name?: string;
  eventProperty?: Clixexternalv1EventProperty;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1EventSchema: Schema<V1Event> = s.object<V1Event>(
  {
    userId: s.optional(s.string()),
    deviceId: s.optional(s.string()),
    name: s.optional(s.string()),
    eventProperty: s.optional(s.lazy(() => clixexternalv1EventPropertySchema)),
    _keysMap: {
      userId: "user_id",
      deviceId: "device_id",
      eventProperty: "event_property",
    },
  },
  { additionalProperties: s.json() },
);
