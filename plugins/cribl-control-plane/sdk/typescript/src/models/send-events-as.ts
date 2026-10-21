import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Send events as */
export const SendEventsAs = {
  Unstructured: "unstructured",
  Udm: "udm",
} as const;
export type SendEventsAs = (typeof SendEventsAs)[keyof typeof SendEventsAs] | (string & {});

export const sendEventsAsSchema: EnumSchema<SendEventsAs> = s.enumOf<SendEventsAs>(SendEventsAs);
