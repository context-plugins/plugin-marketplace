import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionProjectPolicyApi = {
  RekognitionServiceListProjectPolicies: "RekognitionService.ListProjectPolicies",
} as const;
export type XAmzTarget1AmazonRekognitionProjectPolicyApi =
  | (typeof XAmzTarget1AmazonRekognitionProjectPolicyApi)[keyof typeof XAmzTarget1AmazonRekognitionProjectPolicyApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionProjectPolicyApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionProjectPolicyApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionProjectPolicyApi>(XAmzTarget1AmazonRekognitionProjectPolicyApi);
