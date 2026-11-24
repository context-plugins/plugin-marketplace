import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inspectionDataRequestSchema, type InspectionDataRequest } from "./inspection-data-request.js";
import { inspectionDataResponseSchema, type InspectionDataResponse } from "./inspection-data-response.js";
import { inspectionErrorDetailsSchema, type InspectionErrorDetails } from "./inspection-error-details.js";

export type InspectionData = {
  /** The raw state input. */
  input?: string;
  /**
   * The input after Step Functions applies an Arguments filter. This event will only be present
   * when QueryLanguage for the state machine or individual states is set to JSONata. For more info,
   * see Transforming data with Step Functions.
   */
  afterArguments?: string;
  /**
   * The input after Step Functions applies the InputPath filter. Not populated when QueryLanguage
   * is JSONata.
   */
  afterInputPath?: string;
  /**
   * The effective input after Step Functions applies the Parameters filter. Not populated when
   * QueryLanguage is JSONata.
   */
  afterParameters?: string;
  /** The state's raw result. */
  result?: string;
  /**
   * The effective result after Step Functions applies the ResultSelector filter. Not populated when
   * QueryLanguage is JSONata.
   */
  afterResultSelector?: string;
  /**
   * The effective result combined with the raw state input after Step Functions applies the
   * ResultPath filter. Not populated when QueryLanguage is JSONata.
   */
  afterResultPath?: string;
  request?: InspectionDataRequest;
  response?: InspectionDataResponse;
  /**
   * JSON string that contains the set of workflow variables after execution of the state. The set
   * will include variables assigned in the state and variables set up as test state input.
   */
  variables?: string;
  errorDetails?: InspectionErrorDetails;
  /**
   * The effective input after the ItemsPath filter is applied. Not populated when the QueryLanguage
   * is JSONata.
   */
  afterItemsPath?: string;
  /**
   * An array containing the inputs for each Map iteration, transformed by the ItemSelector
   * specified in a Map state.
   */
  afterItemSelector?: string;
  /** The effective input after the ItemBatcher filter is applied in a Map state. */
  afterItemBatcher?: string;
  /** The effective input after the ItemsPointer filter is applied in a Map state. */
  afterItemsPointer?: string;
  /**
   * The tolerated failure threshold for a Map state as defined in number of Map state iterations.
   */
  toleratedFailureCount?: number;
  /**
   * The tolerated failure threshold for a Map state as defined in percentage of Map state
   * iterations.
   */
  toleratedFailurePercentage?: number;
  /** The max concurrency of the Map state. */
  maxConcurrency?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inspectionDataSchema: Schema<InspectionData> = s.object<InspectionData>(
  {
    input: s.optional(s.string()),
    afterArguments: s.optional(s.string()),
    afterInputPath: s.optional(s.string()),
    afterParameters: s.optional(s.string()),
    result: s.optional(s.string()),
    afterResultSelector: s.optional(s.string()),
    afterResultPath: s.optional(s.string()),
    request: s.optional(s.lazy(() => inspectionDataRequestSchema)),
    response: s.optional(s.lazy(() => inspectionDataResponseSchema)),
    variables: s.optional(s.string()),
    errorDetails: s.optional(s.lazy(() => inspectionErrorDetailsSchema)),
    afterItemsPath: s.optional(s.string()),
    afterItemSelector: s.optional(s.string()),
    afterItemBatcher: s.optional(s.string()),
    afterItemsPointer: s.optional(s.string()),
    toleratedFailureCount: s.optional(s.int()),
    toleratedFailurePercentage: s.optional(s.float64()),
    maxConcurrency: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
