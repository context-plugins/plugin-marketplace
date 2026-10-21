import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatFileSource = {
  /** @default "FILE" */
  type?: "FILE";
  fileId: string;
  title?: string;
  url?: string;
  datasource?: string;
};

export const chatFileSourceSchema: Schema<ChatFileSource> = s.object<ChatFileSource>({
  type: s.defaulted(s.literal("FILE"), "FILE"),
  fileId: s.string(),
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  datasource: s.optional(s.string()),
  _keysMap: {
    fileId: "file_id",
  },
});
