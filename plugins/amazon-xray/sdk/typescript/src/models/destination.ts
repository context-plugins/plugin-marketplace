import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Retrieves the current destination. */
export const Destination = {
  XRay: "XRay",
  CloudWatchLogs: "CloudWatchLogs",
} as const;
export type Destination = (typeof Destination)[keyof typeof Destination] | (string & {});

export const destinationSchema: EnumSchema<Destination> = s.enumOf<Destination>(Destination);
