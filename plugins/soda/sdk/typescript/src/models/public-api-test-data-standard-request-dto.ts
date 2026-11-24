import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiTestDataStandardRequestDto = {
  contents: string;
  datasetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiTestDataStandardRequestDtoSchema: Schema<PublicApiTestDataStandardRequestDto> =
  s.object<PublicApiTestDataStandardRequestDto>(
    {
      contents: s.string(),
      datasetId: s.string(),
    },
    { additionalProperties: s.json() },
  );
