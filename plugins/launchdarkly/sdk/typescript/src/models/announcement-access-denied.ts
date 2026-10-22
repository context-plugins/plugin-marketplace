import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  announcementAccessDeniedReasonSchema,
  type AnnouncementAccessDeniedReason,
} from "./announcement-access-denied-reason.js";

export type AnnouncementAccessDenied = {
  action: string;
  reason: AnnouncementAccessDeniedReason;
};

export const announcementAccessDeniedSchema: Schema<AnnouncementAccessDenied> =
  s.object<AnnouncementAccessDenied>({
    action: s.string(),
    reason: announcementAccessDeniedReasonSchema,
  });
