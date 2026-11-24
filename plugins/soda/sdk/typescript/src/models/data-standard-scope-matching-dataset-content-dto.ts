import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataStandardScopeMatchingDatasetContentDto = {
  datasourceId: string;
  id: string;
  label?: string;
  name: string;
  qualifiedName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardScopeMatchingDatasetContentDtoSchema: Schema<DataStandardScopeMatchingDatasetContentDto> =
  s.object<DataStandardScopeMatchingDatasetContentDto>(
    {
      datasourceId: s.string(),
      id: s.string(),
      label: s.optional(s.string()),
      name: s.string(),
      qualifiedName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
