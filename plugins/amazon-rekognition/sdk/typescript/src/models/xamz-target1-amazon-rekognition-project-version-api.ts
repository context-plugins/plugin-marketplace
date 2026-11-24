import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionProjectVersionApi = {
  RekognitionServiceDeleteProjectVersion: "RekognitionService.DeleteProjectVersion",
} as const;
export type XAmzTarget1AmazonRekognitionProjectVersionApi =
  | (typeof XAmzTarget1AmazonRekognitionProjectVersionApi)[keyof typeof XAmzTarget1AmazonRekognitionProjectVersionApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionProjectVersionApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionProjectVersionApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionProjectVersionApi>(XAmzTarget1AmazonRekognitionProjectVersionApi);
