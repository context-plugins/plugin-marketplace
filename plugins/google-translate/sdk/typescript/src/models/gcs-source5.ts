import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. Google Cloud Storage location for the source input. This can be a single file (for
 * example, `gs://translation-test/input.tsv`) or a wildcard (for example,
 * `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two
 * columns. The first column (optional) is the id of the text request. If the first column is
 * missing, we use the row number (0-based) from the input file as the ID in the output file. The
 * second column is the actual text to be translated. We recommend each row be <= 10K Unicode
 * codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180
 * compliant. You could use https://github.com/Clever/csvlint to check potential formatting errors
 * in your tsv file. csvlint --delimiter='\t' your_input_file.tsv The other supported file
 * extensions are `.txt` or `.html`, which is treated as a single large chunk of text.
 */
export type GcsSource5 = {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsSource5Schema: Schema<GcsSource5> = s.object<GcsSource5>(
  {
    inputUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
