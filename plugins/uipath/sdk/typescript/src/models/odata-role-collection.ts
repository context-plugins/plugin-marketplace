import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorRolesApiSchema,
  type ValueUiPathOrchestratorRolesApi,
} from "./value-ui-path-orchestrator-roles-api.js";

/** OData collection response containing roles */
export type ODataRoleCollection = {
  value?: ValueUiPathOrchestratorRolesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataRoleCollectionSchema: Schema<ODataRoleCollection> = s.object<ODataRoleCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorRolesApiSchema))),
  },
  { additionalProperties: s.json() },
);
