import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  announcementPaginatedLinksSchema,
  type AnnouncementPaginatedLinks,
} from "./announcement-paginated-links.js";
import { announcementResponseSchema, type AnnouncementResponse } from "./announcement-response.js";

export type GetAnnouncementsPublic200Response = {
  items: AnnouncementResponse[];
  links: AnnouncementPaginatedLinks;
};

export const getAnnouncementsPublic200ResponseSchema: Schema<GetAnnouncementsPublic200Response> =
  s.object<GetAnnouncementsPublic200Response>({
    items: s.array(s.lazy(() => announcementResponseSchema)),
    links: announcementPaginatedLinksSchema,
    _keysMap: {
      links: "_links",
    },
  });
