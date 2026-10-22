import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the VPC Flow Log events */
export const EventFormat1 = {
  Json: "json",
  CsvRow: "csv_row",
} as const;
export type EventFormat1 = (typeof EventFormat1)[keyof typeof EventFormat1] | (string & {});

export const eventFormat1Schema: EnumSchema<EventFormat1> = s.enumOf<EventFormat1>(EventFormat1);
