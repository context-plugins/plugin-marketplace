import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response Status */
export const StatusArchbeePublicFileManagerApi = {
  Ok: "OK",
  NotOk: "Not OK",
} as const;
export type StatusArchbeePublicFileManagerApi =
  | (typeof StatusArchbeePublicFileManagerApi)[keyof typeof StatusArchbeePublicFileManagerApi]
  | (string & {});

export const statusArchbeePublicFileManagerApiSchema: EnumSchema<StatusArchbeePublicFileManagerApi> =
  s.enumOf<StatusArchbeePublicFileManagerApi>(StatusArchbeePublicFileManagerApi);
