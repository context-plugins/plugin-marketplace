import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MockErrorOutput = {
  /**
   * A string denoting the error code of the exception thrown when invoking the tested state. This
   * field is required if mock.errorOutput is specified.
   */
  error?: string;
  /** A string containing the cause of the exception thrown when executing the state's logic. */
  cause?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mockErrorOutputSchema: Schema<MockErrorOutput> = s.object<MockErrorOutput>(
  {
    error: s.optional(s.string()),
    cause: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
