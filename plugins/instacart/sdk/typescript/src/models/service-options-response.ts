import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceOptionSchema, type ServiceOption } from "./service-option.js";

export type ServiceOptionsResponse = {
  /** Available service option time slots for the requested fulfillment type. */
  serviceOptions?: ServiceOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceOptionsResponseSchema: Schema<ServiceOptionsResponse> = s.object<ServiceOptionsResponse>(
  {
    serviceOptions: s.optional(s.array(s.lazy(() => serviceOptionSchema))),
    _keysMap: {
      serviceOptions: "service_options",
    },
  },
  { additionalProperties: s.json() },
);
