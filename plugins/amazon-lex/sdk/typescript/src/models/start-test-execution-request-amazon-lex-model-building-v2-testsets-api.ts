import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apiModeAmazonLexModelBuildingV2TestsetsApiSchema,
  type ApiModeAmazonLexModelBuildingV2TestsetsApi,
} from "./api-mode-amazon-lex-model-building-v2-testsets-api.js";
import {
  testExecutionModalityAmazonLexModelBuildingV2TestsetsApiSchema,
  type TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi,
} from "./test-execution-modality-amazon-lex-model-building-v2-testsets-api.js";
import { testExecutionTargetSchema, type TestExecutionTarget } from "./test-execution-target.js";

export type StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi = {
  /** The test set Id for the test set execution. */
  testSetId: string;
  target: TestExecutionTarget;
  /**
   * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
   * streaming, StartConversation Runtime API is used. Whereas, for non-streaming,
   * RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
   */
  apiMode: ApiModeAmazonLexModelBuildingV2TestsetsApi;
  /** Indicates whether audio or text is used. */
  testExecutionModality?: TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiSchema: Schema<StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi> =
  s.object<StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi>(
    {
      testSetId: s.string(),
      target: testExecutionTargetSchema,
      apiMode: apiModeAmazonLexModelBuildingV2TestsetsApiSchema,
      testExecutionModality: s.optional(
        s.lazy(() => testExecutionModalityAmazonLexModelBuildingV2TestsetsApiSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
