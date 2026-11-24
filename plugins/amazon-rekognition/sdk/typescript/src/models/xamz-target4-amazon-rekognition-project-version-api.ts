import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonRekognitionProjectVersionApi = {
  RekognitionServiceStopProjectVersion: "RekognitionService.StopProjectVersion",
} as const;
export type XAmzTarget4AmazonRekognitionProjectVersionApi =
  | (typeof XAmzTarget4AmazonRekognitionProjectVersionApi)[keyof typeof XAmzTarget4AmazonRekognitionProjectVersionApi]
  | (string & {});

export const xAmzTarget4AmazonRekognitionProjectVersionApiSchema: EnumSchema<XAmzTarget4AmazonRekognitionProjectVersionApi> =
  s.enumOf<XAmzTarget4AmazonRekognitionProjectVersionApi>(XAmzTarget4AmazonRekognitionProjectVersionApi);
