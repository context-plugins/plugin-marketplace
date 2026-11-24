import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deletedLinkSchema, type DeletedLink } from "./deleted-link.js";

export type LinkDeletionResponse = {
  linksDeleted?: DeletedLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkDeletionResponseSchema: Schema<LinkDeletionResponse> = s.object<LinkDeletionResponse>(
  {
    linksDeleted: s.optional(s.array(s.lazy(() => deletedLinkSchema))),
    _keysMap: {
      linksDeleted: "links_deleted",
    },
  },
  { additionalProperties: s.json() },
);
