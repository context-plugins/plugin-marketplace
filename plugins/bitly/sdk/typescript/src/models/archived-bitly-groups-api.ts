import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by archive state. */
export const ArchivedBitlyGroupsApi = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type ArchivedBitlyGroupsApi =
  | (typeof ArchivedBitlyGroupsApi)[keyof typeof ArchivedBitlyGroupsApi]
  | (string & {});

export const archivedBitlyGroupsApiSchema: EnumSchema<ArchivedBitlyGroupsApi> =
  s.enumOf<ArchivedBitlyGroupsApi>(ArchivedBitlyGroupsApi);
