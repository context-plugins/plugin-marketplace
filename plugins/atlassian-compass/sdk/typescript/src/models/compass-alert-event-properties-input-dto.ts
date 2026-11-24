import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prioritySchema, type Priority } from "./priority.js";
import { status1Schema, type Status1 } from "./status1.js";

/** The list of properties of the alert event. */
export type CompassAlertEventPropertiesInputDto = {
  /** The ID of the alert. */
  id: string;
  /** Status of the alert. */
  status?: Status1 | null;
  /** Priority of the alert. */
  priority?: Priority | null;
  /** Timestamp for when the alert was created, when status is set to OPENED. */
  createdAt?: Date | null;
  /** The last time the alert status changed to ACKNOWLEDGED. */
  acknowledgedAt?: Date | null;
  /** The last time the alert status changed to SNOOZED. */
  snoozedAt?: Date | null;
  /** The last time the alert status changed to CLOSED. */
  closedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassAlertEventPropertiesInputDtoSchema: Schema<CompassAlertEventPropertiesInputDto> =
  s.object<CompassAlertEventPropertiesInputDto>(
    {
      id: s.string(),
      status: s.optionalNullable(s.lazy(() => status1Schema)),
      priority: s.optionalNullable(s.lazy(() => prioritySchema)),
      createdAt: s.optionalNullable(s.dateTime()),
      acknowledgedAt: s.optionalNullable(s.dateTime()),
      snoozedAt: s.optionalNullable(s.dateTime()),
      closedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
