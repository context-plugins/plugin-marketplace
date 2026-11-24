import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";

export type GetDataSourceResponse = {
  dataSource?: DataSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getDataSourceResponseSchema: Schema<GetDataSourceResponse> = s.object<GetDataSourceResponse>(
  {
    dataSource: s.optional(s.lazy(() => dataSourceSchema)),
  },
  { additionalProperties: s.json() },
);
