import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeDoiTDataHubApiSchema, type TypeDoiTDataHubApi } from "./type-doi-tdata-hub-api.js";
import { valueSchema, type Value } from "./unions/value.js";

export type Dimension = {
  /**
   * If the type is `fixed`, the key must be a valid fixed value. See the [DataHub API
   * Guide](https://developer.doit.com/docs/datahub-api) for more information.
   */
  key?: string;
  /** The dimension type. */
  type?: TypeDoiTDataHubApi;
  value?: Value;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionSchema: Schema<Dimension> = s.object<Dimension>(
  {
    key: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeDoiTDataHubApiSchema)),
    value: s.optional(s.lazy(() => valueSchema)),
  },
  { additionalProperties: s.json() },
);
