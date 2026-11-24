import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestStateConfiguration = {
  /**
   * The number of retry attempts that have occurred for the state's Retry that applies to the
   * mocked error.
   */
  retrierRetryCount?: number;
  /**
   * The name of the state from which an error originates when an error is mocked for a Map or
   * Parallel state.
   */
  errorCausedByState?: string;
  /** The number of Map state iterations that failed during the Map state invocation. */
  mapIterationFailureCount?: number;
  /** The data read by ItemReader in Distributed Map states as found in its original source. */
  mapItemReaderData?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testStateConfigurationSchema: Schema<TestStateConfiguration> = s.object<TestStateConfiguration>(
  {
    retrierRetryCount: s.optional(s.int()),
    errorCausedByState: s.optional(s.string()),
    mapIterationFailureCount: s.optional(s.int()),
    mapItemReaderData: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
