import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExportType1 = {
  LinkEngagementsBatch: "link_engagements_batch",
  LinksList: "links_list",
  QrCodesList: "qr_codes_list",
} as const;
export type ExportType1 = (typeof ExportType1)[keyof typeof ExportType1] | (string & {});

export const exportType1Schema: EnumSchema<ExportType1> = s.enumOf<ExportType1>(ExportType1);
