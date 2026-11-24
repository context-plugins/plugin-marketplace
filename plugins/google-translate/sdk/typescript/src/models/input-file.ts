import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcsInputSource1Schema, type GcsInputSource1 } from "./gcs-input-source1.js";

/** An input file. */
export type InputFile = {
  /** Google Cloud Storage file source. */
  gcsSource?: GcsInputSource1;
  /**
   * Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by
   * default) for auto split.
   */
  usage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputFileSchema: Schema<InputFile> = s.object<InputFile>(
  {
    gcsSource: s.optional(s.lazy(() => gcsInputSource1Schema)),
    usage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
