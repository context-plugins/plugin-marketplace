import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiDatasourceDtoSchema, type PublicApiDatasourceDto } from "./public-api-datasource-dto.js";

export type PublicApiCreateDatasourceResponse = {
  datasource?: PublicApiDatasourceDto;
  discoveryScanId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateDatasourceResponseSchema: Schema<PublicApiCreateDatasourceResponse> =
  s.object<PublicApiCreateDatasourceResponse>(
    {
      datasource: s.optional(s.lazy(() => publicApiDatasourceDtoSchema)),
      discoveryScanId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
