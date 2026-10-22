import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the user generated content (UGC datasource). */
export const UgcType3 = {
  Announcements: "ANNOUNCEMENTS",
  Answers: "ANSWERS",
  Collections: "COLLECTIONS",
  Shortcuts: "SHORTCUTS",
  Chats: "CHATS",
} as const;
export type UgcType3 = (typeof UgcType3)[keyof typeof UgcType3] | (string & {});

export const ugcType3Schema: EnumSchema<UgcType3> = s.enumOf<UgcType3>(UgcType3);
