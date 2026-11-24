import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorRobotsApiSchema,
  type ValueUiPathOrchestratorRobotsApi,
} from "./value-ui-path-orchestrator-robots-api.js";

/** OData collection response containing robots */
export type ODataRobotCollection = {
  value?: ValueUiPathOrchestratorRobotsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataRobotCollectionSchema: Schema<ODataRobotCollection> = s.object<ODataRobotCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorRobotsApiSchema))),
  },
  { additionalProperties: s.json() },
);
