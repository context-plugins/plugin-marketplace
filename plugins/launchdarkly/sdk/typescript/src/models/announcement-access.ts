import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  announcementAccessAllowedRepSchema,
  type AnnouncementAccessAllowedRep,
} from "./announcement-access-allowed-rep.js";
import {
  announcementAccessDeniedSchema,
  type AnnouncementAccessDenied,
} from "./announcement-access-denied.js";

export type AnnouncementAccess = {
  denied: AnnouncementAccessDenied[];
  allowed: AnnouncementAccessAllowedRep[];
};

export const announcementAccessSchema: Schema<AnnouncementAccess> = s.object<AnnouncementAccess>({
  denied: s.array(s.lazy(() => announcementAccessDeniedSchema)),
  allowed: s.array(s.lazy(() => announcementAccessAllowedRepSchema)),
});
