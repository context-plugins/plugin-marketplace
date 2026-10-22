import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayDateMappingSchema, type DisplayDateMapping } from "./display-date-mapping.js";
import { paramsSchema, type Params } from "./unions/params.js";
import { proseSchema, type Prose } from "./unions/prose.js";

/** A producer-owned localized phrase with per-item dynamic values. */
export type DisplayPhraseMapping = {
  template: string;
  params?: Record<string, Params>;
  prose?: Record<string, Prose>;
  dates?: Record<string, DisplayDateMapping>;
};

export const displayPhraseMappingSchema: Schema<DisplayPhraseMapping> = s.object<DisplayPhraseMapping>({
  template: s.string(),
  params: s.optional(
    s.record(
      s.string(),
      s.lazy(() => paramsSchema),
    ),
  ),
  prose: s.optional(
    s.record(
      s.string(),
      s.lazy(() => proseSchema),
    ),
  ),
  dates: s.optional(
    s.record(
      s.string(),
      s.lazy(() => displayDateMappingSchema),
    ),
  ),
});
