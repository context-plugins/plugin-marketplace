import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionProjectPolicyApi = {
  RekognitionServiceDeleteProjectPolicy: "RekognitionService.DeleteProjectPolicy",
} as const;
export type XAmzTargetAmazonRekognitionProjectPolicyApi =
  | (typeof XAmzTargetAmazonRekognitionProjectPolicyApi)[keyof typeof XAmzTargetAmazonRekognitionProjectPolicyApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionProjectPolicyApiSchema: EnumSchema<XAmzTargetAmazonRekognitionProjectPolicyApi> =
  s.enumOf<XAmzTargetAmazonRekognitionProjectPolicyApi>(XAmzTargetAmazonRekognitionProjectPolicyApi);
