import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiMode2Schema, type ApiMode2 } from "./api-mode2.js";
import { testExecutionModality2Schema, type TestExecutionModality2 } from "./test-execution-modality2.js";
import { testExecutionTargetSchema, type TestExecutionTarget } from "./test-execution-target.js";

export type StartTestExecutionRequest = {
  /** The test set Id for the test set execution. */
  testSetId: string;
  target: TestExecutionTarget;
  /**
   * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
   * streaming, StartConversation Runtime API is used. Whereas, for non-streaming,
   * RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
   */
  apiMode: ApiMode2;
  /** Indicates whether audio or text is used. */
  testExecutionModality?: TestExecutionModality2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTestExecutionRequestSchema: Schema<StartTestExecutionRequest> =
  s.object<StartTestExecutionRequest>(
    {
      testSetId: s.string(),
      target: testExecutionTargetSchema,
      apiMode: apiMode2Schema,
      testExecutionModality: s.optional(s.lazy(() => testExecutionModality2Schema)),
    },
    { additionalProperties: s.json() },
  );
