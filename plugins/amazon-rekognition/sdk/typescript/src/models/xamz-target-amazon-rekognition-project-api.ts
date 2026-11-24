import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionProjectApi = {
  RekognitionServiceCreateProject: "RekognitionService.CreateProject",
} as const;
export type XAmzTargetAmazonRekognitionProjectApi =
  | (typeof XAmzTargetAmazonRekognitionProjectApi)[keyof typeof XAmzTargetAmazonRekognitionProjectApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionProjectApiSchema: EnumSchema<XAmzTargetAmazonRekognitionProjectApi> =
  s.enumOf<XAmzTargetAmazonRekognitionProjectApi>(XAmzTargetAmazonRekognitionProjectApi);
