import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Moderation = {
  kind?: string;
  status?: string;
  updatedAt?: Date;
};

export const moderationSchema: Schema<Moderation> = s.object<Moderation>({
  kind: s.optional(s.string()),
  status: s.optional(s.string()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    updatedAt: "updated_at",
  },
});
