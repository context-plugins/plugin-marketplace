import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeHookSchema, type CodeHook } from "./code-hook.js";
import {
  typeAmazonLexModelBuildingV2VersionsApiSchema,
  type TypeAmazonLexModelBuildingV2VersionsApi,
} from "./type-amazon-lex-model-building-v2-versions-api.js";

export type FulfillmentActivity = {
  /**
   * How the intent should be fulfilled, either by running a Lambda function or by returning the
   * slot data to the client application.
   */
  type: TypeAmazonLexModelBuildingV2VersionsApi;
  codeHook?: CodeHook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fulfillmentActivitySchema: Schema<FulfillmentActivity> = s.object<FulfillmentActivity>(
  {
    type: typeAmazonLexModelBuildingV2VersionsApiSchema,
    codeHook: s.optional(s.lazy(() => codeHookSchema)),
  },
  { additionalProperties: s.json() },
);
