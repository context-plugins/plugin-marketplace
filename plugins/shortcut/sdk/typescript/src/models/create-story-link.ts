import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verb1Schema, type Verb1 } from "./verb1.js";

export type CreateStoryLink = {
  /** The type of link. */
  verb: Verb1;
  /** The ID of the subject Story. */
  subjectId: number;
  /** The ID of the object Story. */
  objectId: number;
};

export const createStoryLinkSchema: Schema<CreateStoryLink> = s.object<CreateStoryLink>({
  verb: verb1Schema,
  subjectId: s.int(),
  objectId: s.int(),
  _keysMap: {
    subjectId: "subject_id",
    objectId: "object_id",
  },
});
