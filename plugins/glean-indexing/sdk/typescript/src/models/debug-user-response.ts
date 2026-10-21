import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceGroupDefinitionSchema,
  type DatasourceGroupDefinition,
} from "./datasource-group-definition.js";
import { userStatusResponseSchema, type UserStatusResponse } from "./user-status-response.js";

/** Describes the response body of the /debug/{datasource}/user API call */
export type DebugUserResponse = {
  /** Describes the user status response body */
  status?: UserStatusResponse;
  /** List of groups the user is a member of, as uploaded via permissions API. */
  uploadedGroups?: DatasourceGroupDefinition[];
};

export const debugUserResponseSchema: Schema<DebugUserResponse> = s.object<DebugUserResponse>({
  status: s.optional(s.lazy(() => userStatusResponseSchema)),
  uploadedGroups: s.optional(s.array(s.lazy(() => datasourceGroupDefinitionSchema))),
});
