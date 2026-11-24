import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { levelSchema, type Level } from "./level.js";
import { logDestinationSchema, type LogDestination } from "./log-destination.js";

export type LoggingConfiguration = {
  /** Defines which category of execution history events are logged. */
  level?: Level;
  /**
   * Determines whether execution data is included in your log. When set to false, data is excluded.
   */
  includeExecutionData?: boolean;
  /**
   * An array of objects that describes where your execution history events will be logged. Limited
   * to size 1. Required, if your log level is not set to OFF.
   */
  destinations?: LogDestination[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loggingConfigurationSchema: Schema<LoggingConfiguration> = s.object<LoggingConfiguration>(
  {
    level: s.optional(s.lazy(() => levelSchema)),
    includeExecutionData: s.optional(s.boolean()),
    destinations: s.optional(s.array(s.lazy(() => logDestinationSchema))),
  },
  { additionalProperties: s.json() },
);
