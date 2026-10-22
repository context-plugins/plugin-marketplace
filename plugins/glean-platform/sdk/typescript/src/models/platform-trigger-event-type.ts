import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The kind of event. */
export const PlatformTriggerEventType = {
  DocumentChange: "DOCUMENT_CHANGE",
} as const;
export type PlatformTriggerEventType =
  | (typeof PlatformTriggerEventType)[keyof typeof PlatformTriggerEventType]
  | (string & {});

export const platformTriggerEventTypeSchema: EnumSchema<PlatformTriggerEventType> =
  s.enumOf<PlatformTriggerEventType>(PlatformTriggerEventType);
