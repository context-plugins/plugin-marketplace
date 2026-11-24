import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ResultSchema,
  type GoogleCloudApigeeV1Result,
} from "./google-cloud-apigee-v1-result.js";

/**
 * Point is a group of information collected by runtime plane at critical points of the message flow
 * of the processed API request. This is a list of supported point IDs, categorized to three major
 * buckets. For each category, debug points that we are currently supporting are listed below: -
 * Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control
 * debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points:
 * ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint
 * RaiseFault NodeJS The detail information of the given debug point is stored in a list of results.
 */
export type GoogleCloudApigeeV1Point = {
  /** Name of a step in the transaction. */
  id?: string;
  /** List of results extracted from a given debug point. */
  results?: GoogleCloudApigeeV1Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PointSchema: Schema<GoogleCloudApigeeV1Point> =
  s.object<GoogleCloudApigeeV1Point>(
    {
      id: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ResultSchema))),
    },
    { additionalProperties: s.json() },
  );
