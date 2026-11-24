import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  atifContentPartInternalSchema,
  atifContentPartSchema,
  type AtifContentPart,
} from "../atif-content-part.js";

export type Message = string | AtifContentPart[];

export const messageInternalSchema: Schema<Message> = s.of<Message>(
  s.union([s.string(), s.array(s.lazy(() => atifContentPartInternalSchema))]),
);

export const messageSchema: Schema<Message> = s.lazySchema(() =>
  s.of<Message>(s.union([s.string(), s.array(s.lazy(() => atifContentPartSchema)).check(s.maxLength(1000))])),
);
