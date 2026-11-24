import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Message = {
  commentId: string;
  author: string;
  authorType: string;
  body: string;
  createdAt: string;
  retractable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageSchema: Schema<Message> = s.object<Message>(
  {
    commentId: s.string(),
    author: s.string(),
    authorType: s.string(),
    body: s.string(),
    createdAt: s.string(),
    retractable: s.boolean(),
  },
  { additionalProperties: s.json() },
);
