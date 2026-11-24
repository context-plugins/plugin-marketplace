import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorProcessesApiSchema,
  type ValueUiPathOrchestratorProcessesApi,
} from "./value-ui-path-orchestrator-processes-api.js";

/** OData collection response containing processes */
export type ODataProcessCollection = {
  value?: ValueUiPathOrchestratorProcessesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataProcessCollectionSchema: Schema<ODataProcessCollection> = s.object<ODataProcessCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorProcessesApiSchema))),
  },
  { additionalProperties: s.json() },
);
