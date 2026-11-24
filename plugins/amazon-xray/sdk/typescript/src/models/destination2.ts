import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The configured destination of trace segments. */
export const Destination2 = {
  XRay: "XRay",
  CloudWatchLogs: "CloudWatchLogs",
} as const;
export type Destination2 = (typeof Destination2)[keyof typeof Destination2] | (string & {});

export const destination2Schema: EnumSchema<Destination2> = s.enumOf<Destination2>(Destination2);
