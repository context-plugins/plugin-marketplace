import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  announcementAccessAllowedReasonSchema,
  type AnnouncementAccessAllowedReason,
} from "./announcement-access-allowed-reason.js";

export type AnnouncementAccessAllowedRep = {
  action: string;
  reason: AnnouncementAccessAllowedReason;
};

export const announcementAccessAllowedRepSchema: Schema<AnnouncementAccessAllowedRep> =
  s.object<AnnouncementAccessAllowedRep>({
    action: s.string(),
    reason: announcementAccessAllowedReasonSchema,
  });
