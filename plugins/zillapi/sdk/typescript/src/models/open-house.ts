import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OpenHouse = {
  startTime?: Date;
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const openHouseSchema: Schema<OpenHouse> = s.object<OpenHouse>(
  {
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
