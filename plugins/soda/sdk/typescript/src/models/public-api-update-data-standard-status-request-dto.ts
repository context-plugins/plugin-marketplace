import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataStandardStatusDtoSchema, type DataStandardStatusDto } from "./data-standard-status-dto.js";

export type PublicApiUpdateDataStandardStatusRequestDto = {
  status: DataStandardStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDataStandardStatusRequestDtoSchema: Schema<PublicApiUpdateDataStandardStatusRequestDto> =
  s.object<PublicApiUpdateDataStandardStatusRequestDto>(
    {
      status: dataStandardStatusDtoSchema,
    },
    { additionalProperties: s.json() },
  );
