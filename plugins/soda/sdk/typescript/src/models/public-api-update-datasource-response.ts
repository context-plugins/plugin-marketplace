import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiDatasourceDtoSchema, type PublicApiDatasourceDto } from "./public-api-datasource-dto.js";

export type PublicApiUpdateDatasourceResponse = {
  datasource?: PublicApiDatasourceDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasourceResponseSchema: Schema<PublicApiUpdateDatasourceResponse> =
  s.object<PublicApiUpdateDatasourceResponse>(
    {
      datasource: s.optional(s.lazy(() => publicApiDatasourceDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
