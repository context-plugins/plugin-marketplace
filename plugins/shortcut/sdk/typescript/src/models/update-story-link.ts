import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verb1Schema, type Verb1 } from "./verb1.js";

export type UpdateStoryLink = {
  /** The type of link. */
  verb?: Verb1;
  /** The ID of the subject Story. */
  subjectId?: number;
  /** The ID of the object Story. */
  objectId?: number;
};

export const updateStoryLinkSchema: Schema<UpdateStoryLink> = s.object<UpdateStoryLink>({
  verb: s.optional(s.lazy(() => verb1Schema)),
  subjectId: s.optional(s.int()),
  objectId: s.optional(s.int()),
  _keysMap: {
    subjectId: "subject_id",
    objectId: "object_id",
  },
});
