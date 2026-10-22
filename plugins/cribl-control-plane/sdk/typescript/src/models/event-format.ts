import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format of individual events */
export const EventFormat = {
  Json: "json",
  Xml: "xml",
} as const;
export type EventFormat = (typeof EventFormat)[keyof typeof EventFormat] | (string & {});

export const eventFormatSchema: EnumSchema<EventFormat> = s.enumOf<EventFormat>(EventFormat);
