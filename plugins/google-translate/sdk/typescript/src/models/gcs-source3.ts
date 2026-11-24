import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. Google Cloud Storage location of glossary data. File format is determined based on the
 * filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file
 * formats. Wildcards are not allowed. This must be a single file in one of the following formats:
 * For unidirectional glossaries: - TSV/CSV (`.tsv`/`.csv`): Two column file, tab- or
 * comma-separated. The first column is source text. The second column is target text. No headers in
 * this file. The first row contains data and not column names. - TMX (`.tmx`): TMX file with
 * parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV
 * (`.csv`): Multi-column CSV file defining equivalent glossary terms in multiple languages. See
 * documentation for more information -
 * [glossaries](https://cloud.google.com/translate/docs/advanced/glossary).
 */
export type GcsSource3 = {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsSource3Schema: Schema<GcsSource3> = s.object<GcsSource3>(
  {
    inputUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
