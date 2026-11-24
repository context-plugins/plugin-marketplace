import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the intent should be fulfilled, either by running a Lambda function or by returning the slot
 * data to the client application.
 */
export const TypeAmazonLexModelBuildingV2VersionsApi = {
  ReturnIntent: "ReturnIntent",
  CodeHook: "CodeHook",
} as const;
export type TypeAmazonLexModelBuildingV2VersionsApi =
  | (typeof TypeAmazonLexModelBuildingV2VersionsApi)[keyof typeof TypeAmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const typeAmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<TypeAmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<TypeAmazonLexModelBuildingV2VersionsApi>(TypeAmazonLexModelBuildingV2VersionsApi);
