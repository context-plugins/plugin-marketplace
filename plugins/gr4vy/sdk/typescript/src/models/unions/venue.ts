import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the venue where the event is hosted. */
export type Venue = string;

export const venueSchema: Schema<Venue> = s.of<Venue>(s.union([s.string()]));
