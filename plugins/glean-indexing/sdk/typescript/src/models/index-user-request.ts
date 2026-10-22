import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceUserDefinitionSchema,
  type DatasourceUserDefinition,
} from "./datasource-user-definition.js";

/** Describes the request body of the /indexuser API call */
export type IndexUserRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** The datasource for which the user is added */
  datasource: string;
  /** describes a user in the datasource */
  user: DatasourceUserDefinition;
};

export const indexUserRequestSchema: Schema<IndexUserRequest> = s.object<IndexUserRequest>({
  version: s.optional(s.int()),
  datasource: s.string(),
  user: datasourceUserDefinitionSchema,
});
