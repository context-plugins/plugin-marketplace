import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorMachinesApiSchema,
  type ValueUiPathOrchestratorMachinesApi,
} from "./value-ui-path-orchestrator-machines-api.js";

/** OData collection response containing machines */
export type ODataMachineCollection = {
  value?: ValueUiPathOrchestratorMachinesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataMachineCollectionSchema: Schema<ODataMachineCollection> = s.object<ODataMachineCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorMachinesApiSchema))),
  },
  { additionalProperties: s.json() },
);
