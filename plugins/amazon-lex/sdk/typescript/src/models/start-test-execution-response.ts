import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiMode3Schema, type ApiMode3 } from "./api-mode3.js";
import { testExecutionModality2Schema, type TestExecutionModality2 } from "./test-execution-modality2.js";
import { testExecutionTargetSchema, type TestExecutionTarget } from "./test-execution-target.js";

export type StartTestExecutionResponse = {
  /** The unique identifier of the test set execution. */
  testExecutionId?: string;
  /** The creation date and time for the test set execution. */
  creationDateTime?: Date;
  /** The test set Id for the test set execution. */
  testSetId?: string;
  target?: TestExecutionTarget;
  /**
   * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
   * streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming,
   * RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
   */
  apiMode?: ApiMode3;
  /** Indicates whether audio or text is used. */
  testExecutionModality?: TestExecutionModality2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTestExecutionResponseSchema: Schema<StartTestExecutionResponse> =
  s.object<StartTestExecutionResponse>(
    {
      testExecutionId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      testSetId: s.optional(s.string()),
      target: s.optional(s.lazy(() => testExecutionTargetSchema)),
      apiMode: s.optional(s.lazy(() => apiMode3Schema)),
      testExecutionModality: s.optional(s.lazy(() => testExecutionModality2Schema)),
    },
    { additionalProperties: s.json() },
  );
