import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rdsDataApiConfigSchema, type RdsDataApiConfig } from "./rds-data-api-config.js";

export type V1DatasourcesIntrospectionsRequest = {
  rdsDataApiConfig?: RdsDataApiConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DatasourcesIntrospectionsRequestSchema: Schema<V1DatasourcesIntrospectionsRequest> =
  s.object<V1DatasourcesIntrospectionsRequest>(
    {
      rdsDataApiConfig: s.optional(s.lazy(() => rdsDataApiConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
