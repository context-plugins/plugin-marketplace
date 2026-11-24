import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorSchedulesApiSchema,
  type ValueUiPathOrchestratorSchedulesApi,
} from "./value-ui-path-orchestrator-schedules-api.js";

/** OData collection response containing process schedules */
export type ODataScheduleCollection = {
  value?: ValueUiPathOrchestratorSchedulesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataScheduleCollectionSchema: Schema<ODataScheduleCollection> =
  s.object<ODataScheduleCollection>(
    {
      value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorSchedulesApiSchema))),
    },
    { additionalProperties: s.json() },
  );
