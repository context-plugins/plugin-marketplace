import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { findAllEnrichInputSchema, type FindAllEnrichInput } from "../find-all-enrich-input.js";

/** List of enrichment inputs for the FindAll run. */
export type Enrichments = FindAllEnrichInput[];

export const enrichmentsSchema: Schema<Enrichments> = s.of<Enrichments>(
  s.union([s.array(s.lazy(() => findAllEnrichInputSchema))]),
);
