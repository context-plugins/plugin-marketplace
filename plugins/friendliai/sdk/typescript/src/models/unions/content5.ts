import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesContentBlockSchema, type MessagesContentBlock } from "./messages-content-block.js";

/** Message payload. Supports plain string shorthand or a typed block array. */
export type Content5 = string | MessagesContentBlock[];

export const content5Schema: Schema<Content5> = s.of<Content5>(
  s.union([s.string(), s.array(s.lazy(() => messagesContentBlockSchema))]),
);
