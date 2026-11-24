import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apiMode1AmazonLexModelBuildingV2TestsetsApiSchema,
  type ApiMode1AmazonLexModelBuildingV2TestsetsApi,
} from "./api-mode1-amazon-lex-model-building-v2-testsets-api.js";
import {
  testExecutionModalityAmazonLexModelBuildingV2TestsetsApiSchema,
  type TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi,
} from "./test-execution-modality-amazon-lex-model-building-v2-testsets-api.js";
import { testExecutionTargetSchema, type TestExecutionTarget } from "./test-execution-target.js";

export type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi = {
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
  apiMode?: ApiMode1AmazonLexModelBuildingV2TestsetsApi;
  /** Indicates whether audio or text is used. */
  testExecutionModality?: TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTestExecutionResponseAmazonLexModelBuildingV2TestsetsApiSchema: Schema<StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi> =
  s.object<StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi>(
    {
      testExecutionId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      testSetId: s.optional(s.string()),
      target: s.optional(s.lazy(() => testExecutionTargetSchema)),
      apiMode: s.optional(s.lazy(() => apiMode1AmazonLexModelBuildingV2TestsetsApiSchema)),
      testExecutionModality: s.optional(
        s.lazy(() => testExecutionModalityAmazonLexModelBuildingV2TestsetsApiSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
