import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputFileSchema, type InputFile } from "./input-file.js";

/** Input configuration for datasets. */
export type DatasetInputConfig = {
  /** Files containing the sentence pairs to be imported to the dataset. */
  inputFiles?: InputFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetInputConfigSchema: Schema<DatasetInputConfig> = s.object<DatasetInputConfig>(
  {
    inputFiles: s.optional(s.array(s.lazy(() => inputFileSchema))),
  },
  { additionalProperties: s.json() },
);
