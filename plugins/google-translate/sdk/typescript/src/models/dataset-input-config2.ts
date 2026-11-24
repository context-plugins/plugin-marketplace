import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputFileSchema, type InputFile } from "./input-file.js";

/** Required. The config for the input content. */
export type DatasetInputConfig2 = {
  /** Files containing the sentence pairs to be imported to the dataset. */
  inputFiles?: InputFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetInputConfig2Schema: Schema<DatasetInputConfig2> = s.object<DatasetInputConfig2>(
  {
    inputFiles: s.optional(s.array(s.lazy(() => inputFileSchema))),
  },
  { additionalProperties: s.json() },
);
