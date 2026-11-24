import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response Status */
export const Status1ArchbeePublicApiReferenceApi = {
  Ok: "OK",
  NotOk: "Not OK",
} as const;
export type Status1ArchbeePublicApiReferenceApi =
  | (typeof Status1ArchbeePublicApiReferenceApi)[keyof typeof Status1ArchbeePublicApiReferenceApi]
  | (string & {});

export const status1ArchbeePublicApiReferenceApiSchema: EnumSchema<Status1ArchbeePublicApiReferenceApi> =
  s.enumOf<Status1ArchbeePublicApiReferenceApi>(Status1ArchbeePublicApiReferenceApi);
