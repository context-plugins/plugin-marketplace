import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lambdaConfigSchema, type LambdaConfig } from "./lambda-config.js";

export type Integration = {
  /** The unique name of the data source that has been configured on the API. */
  dataSourceName: string;
  lambdaConfig?: LambdaConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integrationSchema: Schema<Integration> = s.object<Integration>(
  {
    dataSourceName: s.string(),
    lambdaConfig: s.optional(s.lazy(() => lambdaConfigSchema)),
  },
  { additionalProperties: s.json() },
);
