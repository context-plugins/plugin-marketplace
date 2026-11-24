import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Which export shape to produce. */
export const ExportType = {
  LinkEngagementsBatch: "link_engagements_batch",
  LinksList: "links_list",
  QrCodesList: "qr_codes_list",
} as const;
export type ExportType = (typeof ExportType)[keyof typeof ExportType] | (string & {});

export const exportTypeSchema: EnumSchema<ExportType> = s.enumOf<ExportType>(ExportType);
