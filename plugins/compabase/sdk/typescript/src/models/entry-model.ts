import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { justificationI18NSchema, type JustificationI18N } from "./justification-i18-n.js";
import { measuresI18NSchema, type MeasuresI18N } from "./measures-i18-n.js";

export type EntryModel = {
  source?: string;
  name?: string;
  /** Restrictive measures, Polish source text. Lettered items are separated by newlines. */
  measures?: string | null;
  /** Legal grounds, Polish source text. Paragraphs are separated by a blank line. */
  justification?: string | null;
  measuresI18N?: MeasuresI18N | null;
  justificationI18N?: JustificationI18N | null;
  listedOn?: string | null;
  removedOn?: string | null;
  sourceUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryModelSchema: Schema<EntryModel> = s.object<EntryModel>(
  {
    source: s.optional(s.string()),
    name: s.optional(s.string()),
    measures: s.optionalNullable(s.string()),
    justification: s.optionalNullable(s.string()),
    measuresI18N: s.optionalNullable(s.lazy(() => measuresI18NSchema)),
    justificationI18N: s.optionalNullable(s.lazy(() => justificationI18NSchema)),
    listedOn: s.optionalNullable(s.dateOnly()),
    removedOn: s.optionalNullable(s.dateOnly()),
    sourceUrl: s.optionalNullable(s.string()),
    _keysMap: {
      measuresI18N: "measures_i18n",
      justificationI18N: "justification_i18n",
      listedOn: "listed_on",
      removedOn: "removed_on",
      sourceUrl: "source_url",
    },
  },
  { additionalProperties: s.json() },
);
