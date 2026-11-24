import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Adds public seller location, approximate sold-count evidence, and average ship time. Sold date,
 * listed date, colors, description, category, and condition are already returned when present in
 * the native search response. This still uses one CompSniper request.
 */
export const Enrich = {
  True: "true",
  False: "false",
} as const;
export type Enrich = (typeof Enrich)[keyof typeof Enrich] | (string & {});

export const enrichSchema: EnumSchema<Enrich> = s.enumOf<Enrich>(Enrich);
