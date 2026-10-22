import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { announcementAccessSchema, type AnnouncementAccess } from "./announcement-access.js";
import {
  announcementResponseLinksSchema,
  type AnnouncementResponseLinks,
} from "./announcement-response-links.js";
import { severitySchema, type Severity } from "./severity.js";
import { status8Schema, type Status8 } from "./status8.js";

/** Announcement response */
export type AnnouncementResponse = {
  /** The ID of the announcement */
  id: string;
  /** true if the announcement is dismissible */
  isDismissible: boolean;
  /** The title of the announcement */
  title: string;
  /** The message of the announcement */
  message: string;
  /** The start time of the announcement. This is a Unix timestamp in milliseconds. */
  startTime: number;
  /** The end time of the announcement. This is a Unix timestamp in milliseconds. */
  endTime?: number;
  /** The severity of the announcement */
  severity: Severity;
  /** The status of the announcement */
  status: Status8;
  access?: AnnouncementAccess;
  links: AnnouncementResponseLinks;
};

export const announcementResponseSchema: Schema<AnnouncementResponse> = s.object<AnnouncementResponse>({
  id: s.string(),
  isDismissible: s.boolean(),
  title: s.string(),
  message: s.string(),
  startTime: s.int(),
  endTime: s.optional(s.int()),
  severity: severitySchema,
  status: status8Schema,
  access: s.optional(s.lazy(() => announcementAccessSchema)),
  links: announcementResponseLinksSchema,
  _keysMap: {
    id: "_id",
    status: "_status",
    access: "_access",
    links: "_links",
  },
});
