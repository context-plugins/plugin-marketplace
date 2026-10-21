import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatPersonSource = {
  /** @default "PERSON" */
  type?: "PERSON";
  personId: string;
  name?: string;
  url?: string;
};

export const platformChatPersonSourceSchema: Schema<PlatformChatPersonSource> =
  s.object<PlatformChatPersonSource>({
    type: s.defaulted(s.literal("PERSON"), "PERSON"),
    personId: s.string(),
    name: s.optional(s.string()),
    url: s.optional(s.string()),
    _keysMap: {
      personId: "person_id",
    },
  });
