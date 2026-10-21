import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnnouncementLink = {
  href?: string;
  type?: string;
};

export const announcementLinkSchema: Schema<AnnouncementLink> = s.object<AnnouncementLink>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
