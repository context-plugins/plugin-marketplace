import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verbSchema, type Verb } from "./verb.js";

/** Request parameters for creating a Story Link within a Story. */
export type CreateStoryLinkParams = {
  /** The unique ID of the Story defined as subject. */
  subjectId?: number;
  /**
   * How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates
   * to".
   */
  verb: Verb;
  /** The unique ID of the Story defined as object. */
  objectId?: number;
};

export const createStoryLinkParamsSchema: Schema<CreateStoryLinkParams> = s.object<CreateStoryLinkParams>({
  subjectId: s.optional(s.int()),
  verb: verbSchema,
  objectId: s.optional(s.int()),
  _keysMap: {
    subjectId: "subject_id",
    objectId: "object_id",
  },
});
