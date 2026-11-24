import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiExecuteDataStandardsRequestDto = {
  datasetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiExecuteDataStandardsRequestDtoSchema: Schema<PublicApiExecuteDataStandardsRequestDto> =
  s.object<PublicApiExecuteDataStandardsRequestDto>(
    {
      datasetId: s.string(),
    },
    { additionalProperties: s.json() },
  );
