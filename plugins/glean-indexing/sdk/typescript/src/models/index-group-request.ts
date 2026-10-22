import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceGroupDefinitionSchema,
  type DatasourceGroupDefinition,
} from "./datasource-group-definition.js";

/** Describes the request body of the /indexgroup API call */
export type IndexGroupRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** The datasource for which the group is added */
  datasource: string;
  /** describes a group in the datasource */
  group: DatasourceGroupDefinition;
};

export const indexGroupRequestSchema: Schema<IndexGroupRequest> = s.object<IndexGroupRequest>({
  version: s.optional(s.int()),
  datasource: s.string(),
  group: datasourceGroupDefinitionSchema,
});
