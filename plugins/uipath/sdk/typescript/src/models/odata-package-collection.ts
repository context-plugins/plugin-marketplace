import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorPackagesApiSchema,
  type ValueUiPathOrchestratorPackagesApi,
} from "./value-ui-path-orchestrator-packages-api.js";

/** OData collection response containing packages */
export type ODataPackageCollection = {
  value?: ValueUiPathOrchestratorPackagesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataPackageCollectionSchema: Schema<ODataPackageCollection> = s.object<ODataPackageCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorPackagesApiSchema))),
  },
  { additionalProperties: s.json() },
);
