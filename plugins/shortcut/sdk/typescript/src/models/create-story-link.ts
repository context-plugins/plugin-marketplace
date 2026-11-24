import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  verbShortcutStoryLinksApiSchema,
  type VerbShortcutStoryLinksApi,
} from "./verb-shortcut-story-links-api.js";

export type CreateStoryLink = {
  /** The type of link. */
  verb: VerbShortcutStoryLinksApi;
  /** The ID of the subject Story. */
  subjectId: number;
  /** The ID of the object Story. */
  objectId: number;
};

export const createStoryLinkSchema: Schema<CreateStoryLink> = s.object<CreateStoryLink>({
  verb: verbShortcutStoryLinksApiSchema,
  subjectId: s.int(),
  objectId: s.int(),
  _keysMap: {
    subjectId: "subject_id",
    objectId: "object_id",
  },
});
