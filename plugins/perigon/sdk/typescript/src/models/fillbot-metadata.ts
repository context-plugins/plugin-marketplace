import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filledFieldSchema, type FilledField } from "./filled-field.js";

/** Provenance for event fields populated by the enrichment process. */
export type FillbotMetadata = {
  /** Event fields populated by enrichment and the sources used for each field. */
  filledFields?: FilledField[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fillbotMetadataSchema: Schema<FillbotMetadata> = s.object<FillbotMetadata>(
  {
    filledFields: s.optionalNullable(s.array(s.lazy(() => filledFieldSchema))),
  },
  { additionalProperties: s.json() },
);
