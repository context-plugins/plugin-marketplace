import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiCreateDatasourceRequestDto = {
  configurationFileContents: string;
  label?: string;
  runnerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateDatasourceRequestDtoSchema: Schema<PublicApiCreateDatasourceRequestDto> =
  s.object<PublicApiCreateDatasourceRequestDto>(
    {
      configurationFileContents: s.string(),
      label: s.optional(s.string()),
      runnerId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
