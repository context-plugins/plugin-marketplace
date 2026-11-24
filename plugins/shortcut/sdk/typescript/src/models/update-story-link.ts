import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  verbShortcutStoryLinksApiSchema,
  type VerbShortcutStoryLinksApi,
} from "./verb-shortcut-story-links-api.js";

export type UpdateStoryLink = {
  /** The type of link. */
  verb?: VerbShortcutStoryLinksApi;
  /** The ID of the subject Story. */
  subjectId?: number;
  /** The ID of the object Story. */
  objectId?: number;
};

export const updateStoryLinkSchema: Schema<UpdateStoryLink> = s.object<UpdateStoryLink>({
  verb: s.optional(s.lazy(() => verbShortcutStoryLinksApiSchema)),
  subjectId: s.optional(s.int()),
  objectId: s.optional(s.int()),
  _keysMap: {
    subjectId: "subject_id",
    objectId: "object_id",
  },
});
