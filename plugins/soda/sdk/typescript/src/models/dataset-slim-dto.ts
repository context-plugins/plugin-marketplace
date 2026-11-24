import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetSlimDto = {
  cloudUrl?: string;
  id?: string;
  name?: string;
  qualifiedName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetSlimDtoSchema: Schema<DatasetSlimDto> = s.object<DatasetSlimDto>(
  {
    cloudUrl: s.optional(s.string()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    qualifiedName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
