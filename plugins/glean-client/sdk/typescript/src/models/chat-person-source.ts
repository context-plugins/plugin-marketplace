import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatPersonSource = {
  /** @default "PERSON" */
  type?: "PERSON";
  personId: string;
  name?: string;
  url?: string;
};

export const chatPersonSourceSchema: Schema<ChatPersonSource> = s.object<ChatPersonSource>({
  type: s.defaulted(s.literal("PERSON"), "PERSON"),
  personId: s.string(),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  _keysMap: {
    personId: "person_id",
  },
});
