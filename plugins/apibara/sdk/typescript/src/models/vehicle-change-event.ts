import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { vehicleInternalSchema, vehicleSchema, type Vehicle } from "./vehicle.js";
import { vehicle1Schema, type Vehicle1 } from "./vehicle1.js";

export type VehicleChangeEvent = {
  sequence: number;
  eventId: string;
  event: Event;
  /** True only for terminal outcomes such as sold, not sold or removed. */
  terminal: boolean;
  reason?: string | null;
  vehicle: Vehicle1;
  /** Canonical field paths changed by this event. */
  changedFields: string[];
  before: Record<string, unknown>;
  after: Record<string, unknown>;
  vehicleUpdatedAt?: Date | null;
  recordedAt: Date;
  /**
   * Optional current full normalized vehicle record returned when include_record=true. May be null
   * for deleted records.
   */
  record?: Vehicle | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vehicleChangeEventProperties: s.Shape<VehicleChangeEvent> = {
  sequence: s.int(),
  eventId: s.string(),
  event: eventSchema,
  terminal: s.boolean(),
  reason: s.optionalNullable(s.string()),
  vehicle: vehicle1Schema,
  changedFields: s.array(s.string()),
  before: s.record(s.string(), s.unknown()),
  after: s.record(s.string(), s.unknown()),
  vehicleUpdatedAt: s.optionalNullable(s.dateTime()),
  recordedAt: s.dateTime(),
  record: s.optionalNullable(s.lazy(() => vehicleInternalSchema)),
  _keysMap: {
    eventId: "event_id",
    changedFields: "changed_fields",
    vehicleUpdatedAt: "vehicle_updated_at",
    recordedAt: "recorded_at",
  },
};

export const vehicleChangeEventInternalSchema: Schema<VehicleChangeEvent> = s.object<VehicleChangeEvent>(
  vehicleChangeEventProperties,
  { additionalProperties: s.json() },
);

export const vehicleChangeEventSchema: Schema<VehicleChangeEvent> = s.lazySchema(() =>
  s.object<VehicleChangeEvent>(
    {
      ...vehicleChangeEventProperties,
      record: s.optionalNullable(s.lazy(() => vehicleSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
