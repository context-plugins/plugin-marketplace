import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonRekognitionProjectVersionApi = {
  RekognitionServiceStartProjectVersion: "RekognitionService.StartProjectVersion",
} as const;
export type XAmzTarget3AmazonRekognitionProjectVersionApi =
  | (typeof XAmzTarget3AmazonRekognitionProjectVersionApi)[keyof typeof XAmzTarget3AmazonRekognitionProjectVersionApi]
  | (string & {});

export const xAmzTarget3AmazonRekognitionProjectVersionApiSchema: EnumSchema<XAmzTarget3AmazonRekognitionProjectVersionApi> =
  s.enumOf<XAmzTarget3AmazonRekognitionProjectVersionApi>(XAmzTarget3AmazonRekognitionProjectVersionApi);
