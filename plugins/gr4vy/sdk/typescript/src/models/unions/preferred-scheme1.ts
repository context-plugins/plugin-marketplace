import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { preferredSchemeSchema, type PreferredScheme } from "../preferred-scheme.js";

/** The preferred card scheme to use when processing a co-badged card. */
export type PreferredScheme1 = PreferredScheme;

export const preferredScheme1Schema: Schema<PreferredScheme1> = s.of<PreferredScheme1>(
  s.union([s.lazy(() => preferredSchemeSchema)]),
);
