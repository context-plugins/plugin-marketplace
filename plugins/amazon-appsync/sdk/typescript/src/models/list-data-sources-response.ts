import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";

export type ListDataSourcesResponse = {
  /** The DataSource objects. */
  dataSources?: DataSource[];
  /**
   * An identifier to pass in the next request to this operation to return the next set of items in
   * the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDataSourcesResponseSchema: Schema<ListDataSourcesResponse> =
  s.object<ListDataSourcesResponse>(
    {
      dataSources: s.optional(s.array(s.lazy(() => dataSourceSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
