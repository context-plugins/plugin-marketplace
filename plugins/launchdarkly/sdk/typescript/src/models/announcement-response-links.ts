import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { announcementLinkSchema, type AnnouncementLink } from "./announcement-link.js";

export type AnnouncementResponseLinks = {
  parent: AnnouncementLink;
};

export const announcementResponseLinksSchema: Schema<AnnouncementResponseLinks> =
  s.object<AnnouncementResponseLinks>({
    parent: announcementLinkSchema,
  });
