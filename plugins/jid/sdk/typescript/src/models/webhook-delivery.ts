import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { fileSchema, type File } from "./file.js";
import { typeSchema, type Type } from "./type.js";

export type WebhookDelivery = {
  type?: Type;
  deliveryId?: string;
  monitorId?: string;
  file?: File;
  events?: Event[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookDeliverySchema: Schema<WebhookDelivery> = s.object<WebhookDelivery>(
  {
    type: s.optional(s.lazy(() => typeSchema)),
    deliveryId: s.optional(s.string()),
    monitorId: s.optional(s.string()),
    file: s.optional(s.lazy(() => fileSchema)),
    events: s.optional(s.array(s.lazy(() => eventSchema))),
    _keysMap: {
      deliveryId: "delivery_id",
      monitorId: "monitor_id",
    },
  },
  { additionalProperties: s.json() },
);
