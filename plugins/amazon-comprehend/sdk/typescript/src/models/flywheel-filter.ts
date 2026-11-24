import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status10Schema, type Status10 } from "./status10.js";

export type FlywheelFilter = {
  /** Filter the flywheels based on the flywheel status. */
  status?: Status10;
  /** Filter the flywheels to include flywheels created after the specified time. */
  creationTimeAfter?: Date;
  /** Filter the flywheels to include flywheels created before the specified time. */
  creationTimeBefore?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flywheelFilterSchema: Schema<FlywheelFilter> = s.object<FlywheelFilter>(
  {
    status: s.optional(s.lazy(() => status10Schema)),
    creationTimeAfter: s.optional(s.dateTime()),
    creationTimeBefore: s.optional(s.dateTime()),
    _keysMap: {
      status: "Status",
      creationTimeAfter: "CreationTimeAfter",
      creationTimeBefore: "CreationTimeBefore",
    },
  },
  { additionalProperties: s.json() },
);
