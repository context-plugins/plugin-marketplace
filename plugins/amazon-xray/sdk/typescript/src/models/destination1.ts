import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The destination of the trace segments. */
export const Destination1 = {
  XRay: "XRay",
  CloudWatchLogs: "CloudWatchLogs",
} as const;
export type Destination1 = (typeof Destination1)[keyof typeof Destination1] | (string & {});

export const destination1Schema: EnumSchema<Destination1> = s.enumOf<Destination1>(Destination1);
