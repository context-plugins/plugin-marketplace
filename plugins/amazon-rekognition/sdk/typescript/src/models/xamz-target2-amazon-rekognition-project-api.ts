import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionProjectApi = {
  RekognitionServiceDescribeProjects: "RekognitionService.DescribeProjects",
} as const;
export type XAmzTarget2AmazonRekognitionProjectApi =
  | (typeof XAmzTarget2AmazonRekognitionProjectApi)[keyof typeof XAmzTarget2AmazonRekognitionProjectApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionProjectApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionProjectApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionProjectApi>(XAmzTarget2AmazonRekognitionProjectApi);
