import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The class of the event. The class specifies what the event is related to, such as an
 * infrastructure change, a deployment, or a schema change.
 */
export const EventClass = {
  Infrastructure: "INFRASTRUCTURE",
  Deployment: "DEPLOYMENT",
  SecurityChange: "SECURITY_CHANGE",
  ConfigChange: "CONFIG_CHANGE",
  SchemaChange: "SCHEMA_CHANGE",
} as const;
export type EventClass = (typeof EventClass)[keyof typeof EventClass] | (string & {});

export const eventClassSchema: EnumSchema<EventClass> = s.enumOf<EventClass>(EventClass);
