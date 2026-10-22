import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { announcementLinkSchema, type AnnouncementLink } from "./announcement-link.js";

export type AnnouncementPaginatedLinks = {
  first?: AnnouncementLink;
  last?: AnnouncementLink;
  next?: AnnouncementLink;
  prev?: AnnouncementLink;
  self: AnnouncementLink;
};

export const announcementPaginatedLinksSchema: Schema<AnnouncementPaginatedLinks> =
  s.object<AnnouncementPaginatedLinks>({
    first: s.optional(s.lazy(() => announcementLinkSchema)),
    last: s.optional(s.lazy(() => announcementLinkSchema)),
    next: s.optional(s.lazy(() => announcementLinkSchema)),
    prev: s.optional(s.lazy(() => announcementLinkSchema)),
    self: announcementLinkSchema,
  });
