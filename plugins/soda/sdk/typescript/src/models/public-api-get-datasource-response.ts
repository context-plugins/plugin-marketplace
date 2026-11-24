import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiDatasourceDtoSchema, type PublicApiDatasourceDto } from "./public-api-datasource-dto.js";

export type PublicApiGetDatasourceResponse = {
  datasource?: PublicApiDatasourceDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiGetDatasourceResponseSchema: Schema<PublicApiGetDatasourceResponse> =
  s.object<PublicApiGetDatasourceResponse>(
    {
      datasource: s.optional(s.lazy(() => publicApiDatasourceDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
