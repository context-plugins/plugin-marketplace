import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Dataset = {
  name: string;
  sizeBytes: number;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetSchema: Schema<Dataset> = s.object<Dataset>(
  {
    name: s.string(),
    sizeBytes: s.float64(),
    updatedAt: s.string(),
  },
  { additionalProperties: s.json() },
);
