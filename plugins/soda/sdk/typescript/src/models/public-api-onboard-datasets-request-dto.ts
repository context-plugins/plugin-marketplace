import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiOnboardDatasetsRequestDto = {
  discoveredDatasetIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiOnboardDatasetsRequestDtoSchema: Schema<PublicApiOnboardDatasetsRequestDto> =
  s.object<PublicApiOnboardDatasetsRequestDto>(
    {
      discoveredDatasetIds: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
