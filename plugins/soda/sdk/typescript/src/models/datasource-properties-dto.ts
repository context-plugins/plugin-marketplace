import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelVersionDtoSchema, type ModelVersionDto } from "./model-version-dto.js";

export type DatasourcePropertiesDto = {
  label?: string;
  name?: string;
  prefix?: string;
  type?: string;
  version?: ModelVersionDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasourcePropertiesDtoSchema: Schema<DatasourcePropertiesDto> =
  s.object<DatasourcePropertiesDto>(
    {
      label: s.optional(s.string()),
      name: s.optional(s.string()),
      prefix: s.optional(s.string()),
      type: s.optional(s.string()),
      version: s.optional(s.lazy(() => modelVersionDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
