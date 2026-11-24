import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiUpdateDatasourceRequestDto = {
  configurationFileContents?: string;
  label?: string;
  runnerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasourceRequestDtoSchema: Schema<PublicApiUpdateDatasourceRequestDto> =
  s.object<PublicApiUpdateDatasourceRequestDto>(
    {
      configurationFileContents: s.optional(s.string()),
      label: s.optional(s.string()),
      runnerId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
