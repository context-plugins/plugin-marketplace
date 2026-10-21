import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type64, type64Schema } from "./type64.js";
import { creatorDisplayNameSchema, type CreatorDisplayName } from "./unions/creator-display-name.js";
import { creatorIdSchema, type CreatorId } from "./unions/creator-id.js";
import { creatorTypeSchema, type CreatorType } from "./unions/creator-type.js";

/** The report this execution belongs to. */
export type ReportSummary2 = {
  /** Always `report`. @default Type64.Report */
  type?: Type64;
  /** The unique ID for the report. */
  id: string;
  /** The merchant account ID this report belongs to. */
  merchantAccountId: string;
  /** The name of the report. */
  name: string;
  /** The ID of the user who created the report. */
  creatorId?: CreatorId;
  /** The display name of the report creator. */
  creatorDisplayName?: CreatorDisplayName;
  /** The type of the report creator. */
  creatorType?: CreatorType;
};

export const reportSummary2Schema: Schema<ReportSummary2> = s.object<ReportSummary2>({
  type: s.defaulted(type64Schema, Type64.Report),
  id: s.string(),
  merchantAccountId: s.string(),
  name: s.string(),
  creatorId: s.optional(s.lazy(() => creatorIdSchema)),
  creatorDisplayName: s.optional(s.lazy(() => creatorDisplayNameSchema)),
  creatorType: s.optional(s.lazy(() => creatorTypeSchema)),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    creatorId: "creator_id",
    creatorDisplayName: "creator_display_name",
    creatorType: "creator_type",
  },
});
