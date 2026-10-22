import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name1Schema, type Name1 } from "./unions/name1.js";

export type SystemMessage = {
  /** The role of the messages author. @default "system" */
  role?: "system";
  /** The content of system message. */
  content: string;
  /** The name for the participant to distinguish between participants with the same role. */
  name?: Name1;
};

export const systemMessageSchema: Schema<SystemMessage> = s.object<SystemMessage>({
  role: s.defaulted(s.literal("system"), "system"),
  content: s.string(),
  name: s.optional(s.lazy(() => name1Schema)),
});
