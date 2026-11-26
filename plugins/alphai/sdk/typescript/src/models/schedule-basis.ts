import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `official`: the date is printed on the agency's own schedule page. `inferred`: derived from the
 * documented publication cadence — weekly jobless claims (DOL publishes no forward schedule) and
 * FOMC minutes dates the Fed has not printed yet (three weeks after the meeting). Inferred dates
 * flip to official once the agency lists them.
 */
export const ScheduleBasis = {
  Official: "official",
  Inferred: "inferred",
} as const;
export type ScheduleBasis = (typeof ScheduleBasis)[keyof typeof ScheduleBasis] | (string & {});

export const scheduleBasisSchema: EnumSchema<ScheduleBasis> = s.enumOf<ScheduleBasis>(ScheduleBasis);
