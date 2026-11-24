import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionProjectPolicyApi = {
  RekognitionServicePutProjectPolicy: "RekognitionService.PutProjectPolicy",
} as const;
export type XAmzTarget2AmazonRekognitionProjectPolicyApi =
  | (typeof XAmzTarget2AmazonRekognitionProjectPolicyApi)[keyof typeof XAmzTarget2AmazonRekognitionProjectPolicyApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionProjectPolicyApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionProjectPolicyApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionProjectPolicyApi>(XAmzTarget2AmazonRekognitionProjectPolicyApi);
