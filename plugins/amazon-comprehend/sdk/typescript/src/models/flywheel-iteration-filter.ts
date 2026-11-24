import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FlywheelIterationFilter = {
  /** Filter the flywheel iterations to include iterations created after the specified time. */
  creationTimeAfter?: Date;
  /** Filter the flywheel iterations to include iterations created before the specified time. */
  creationTimeBefore?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flywheelIterationFilterSchema: Schema<FlywheelIterationFilter> =
  s.object<FlywheelIterationFilter>(
    {
      creationTimeAfter: s.optional(s.dateTime()),
      creationTimeBefore: s.optional(s.dateTime()),
      _keysMap: {
        creationTimeAfter: "CreationTimeAfter",
        creationTimeBefore: "CreationTimeBefore",
      },
    },
    { additionalProperties: s.json() },
  );
