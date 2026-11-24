import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionProjectVersionApi = {
  RekognitionServiceDescribeProjectVersions: "RekognitionService.DescribeProjectVersions",
} as const;
export type XAmzTarget2AmazonRekognitionProjectVersionApi =
  | (typeof XAmzTarget2AmazonRekognitionProjectVersionApi)[keyof typeof XAmzTarget2AmazonRekognitionProjectVersionApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionProjectVersionApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionProjectVersionApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionProjectVersionApi>(XAmzTarget2AmazonRekognitionProjectVersionApi);
