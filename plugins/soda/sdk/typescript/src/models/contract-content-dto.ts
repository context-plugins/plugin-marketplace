import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContractContentDto = {
  contents?: string;
  created?: Date;
  datasetId?: string;
  datasetQualifiedName?: string;
  id?: string;
  lastUpdated?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractContentDtoSchema: Schema<ContractContentDto> = s.object<ContractContentDto>(
  {
    contents: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    datasetId: s.optional(s.string()),
    datasetQualifiedName: s.optional(s.string()),
    id: s.optional(s.string()),
    lastUpdated: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
