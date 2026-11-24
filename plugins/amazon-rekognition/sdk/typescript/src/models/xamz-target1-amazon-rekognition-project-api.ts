import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionProjectApi = {
  RekognitionServiceDeleteProject: "RekognitionService.DeleteProject",
} as const;
export type XAmzTarget1AmazonRekognitionProjectApi =
  | (typeof XAmzTarget1AmazonRekognitionProjectApi)[keyof typeof XAmzTarget1AmazonRekognitionProjectApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionProjectApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionProjectApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionProjectApi>(XAmzTarget1AmazonRekognitionProjectApi);
