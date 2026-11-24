import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcsSource3Schema, type GcsSource3 } from "./gcs-source3.js";

/** Input configuration for glossaries. */
export type GlossaryInputConfig = {
  /**
   * Required. Google Cloud Storage location of glossary data. File format is determined based on
   * the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s
   * and file formats. Wildcards are not allowed. This must be a single file in one of the following
   * formats: For unidirectional glossaries: - TSV/CSV (`.tsv`/`.csv`): Two column file, tab- or
   * comma-separated. The first column is source text. The second column is target text. No headers
   * in this file. The first row contains data and not column names. - TMX (`.tmx`): TMX file with
   * parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV
   * (`.csv`): Multi-column CSV file defining equivalent glossary terms in multiple languages. See
   * documentation for more information -
   * [glossaries](https://cloud.google.com/translate/docs/advanced/glossary).
   */
  gcsSource?: GcsSource3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryInputConfigSchema: Schema<GlossaryInputConfig> = s.object<GlossaryInputConfig>(
  {
    gcsSource: s.optional(s.lazy(() => gcsSource3Schema)),
  },
  { additionalProperties: s.json() },
);
