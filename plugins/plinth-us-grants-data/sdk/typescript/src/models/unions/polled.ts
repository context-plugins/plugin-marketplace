import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** How often we LOOK for a new IRS release, as distinct from how often the IRS publishes one. */
export type Polled = string;

export const polledSchema: Schema<Polled> = s.of<Polled>(s.union([s.string()]));
