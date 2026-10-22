import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { role1Schema, type Role1 } from "./role1.js";
import { content7Schema, type Content7 } from "./unions/content7.js";
import { type51Schema, type Type51 } from "./unions/type51.js";

export type ResponsesInputMessage = {
  /** The role of the message input. One of `user`, `assistant`, `system`, or `developer`. */
  role: Role1;
  /** Text or image input to the model. Can also contain previous assistant responses. */
  content: Content7;
  /** The type of the message input. Always `message`. */
  type?: Type51;
};

export const responsesInputMessageSchema: Schema<ResponsesInputMessage> = s.object<ResponsesInputMessage>({
  role: role1Schema,
  content: content7Schema,
  type: s.optional(s.lazy(() => type51Schema)),
});
