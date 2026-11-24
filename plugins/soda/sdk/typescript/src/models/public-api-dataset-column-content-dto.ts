import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDatasetColumnContentDto = {
  attributes: Record<string, unknown>;
  columnId: string;
  columnName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetColumnContentDtoSchema: Schema<PublicApiDatasetColumnContentDto> =
  s.object<PublicApiDatasetColumnContentDto>(
    {
      attributes: s.record(s.string(), s.unknown()),
      columnId: s.string(),
      columnName: s.string(),
    },
    { additionalProperties: s.json() },
  );
