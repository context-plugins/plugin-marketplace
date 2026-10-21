import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the user generated content (UGC datasource). */
export const UgcType1 = {
  Announcements: "ANNOUNCEMENTS",
  Answers: "ANSWERS",
  Artifacts: "ARTIFACTS",
  Collections: "COLLECTIONS",
  Shortcuts: "SHORTCUTS",
  Chats: "CHATS",
} as const;
export type UgcType1 = (typeof UgcType1)[keyof typeof UgcType1] | (string & {});

export const ugcType1Schema: EnumSchema<UgcType1> = s.enumOf<UgcType1>(UgcType1);
