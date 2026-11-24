import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionProjectVersionApi = {
  RekognitionServiceCreateProjectVersion: "RekognitionService.CreateProjectVersion",
} as const;
export type XAmzTargetAmazonRekognitionProjectVersionApi =
  | (typeof XAmzTargetAmazonRekognitionProjectVersionApi)[keyof typeof XAmzTargetAmazonRekognitionProjectVersionApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionProjectVersionApiSchema: EnumSchema<XAmzTargetAmazonRekognitionProjectVersionApi> =
  s.enumOf<XAmzTargetAmazonRekognitionProjectVersionApi>(XAmzTargetAmazonRekognitionProjectVersionApi);
