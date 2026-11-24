import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The class of the events you want to filter for, such as an infrastructure change, a deployment,
 * or a schema change.
 */
export const EventClass1 = {
  Infrastructure: "INFRASTRUCTURE",
  Deployment: "DEPLOYMENT",
  SecurityChange: "SECURITY_CHANGE",
  ConfigChange: "CONFIG_CHANGE",
  SchemaChange: "SCHEMA_CHANGE",
} as const;
export type EventClass1 = (typeof EventClass1)[keyof typeof EventClass1] | (string & {});

export const eventClass1Schema: EnumSchema<EventClass1> = s.enumOf<EventClass1>(EventClass1);
