import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributionSchema, type Attribution } from "./unions/attribution.js";
import { customerAttributionSchema, type CustomerAttribution } from "./unions/customer-attribution.js";

export type Signal = {
  eventName: string;
  customer: CustomerAttribution;
  attribution?: Attribution;
  /** True event timestamp in RFC3339 format with timezone (e.g. 2026-01-31T23:00:00Z) */
  timestamp?: Date;
  data?: Record<string, unknown>;
  idempotencyKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalSchema: Schema<Signal> = s.object<Signal>(
  {
    eventName: s.string(),
    customer: customerAttributionSchema,
    attribution: s.optional(s.lazy(() => attributionSchema)),
    timestamp: s.optional(s.dateTime()),
    data: s.optional(s.record(s.string(), s.unknown())),
    idempotencyKey: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
