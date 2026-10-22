import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformMessageRoleSchema, type PlatformMessageRole } from "./platform-message-role.js";
import {
  platformMessageTextBlockSchema,
  type PlatformMessageTextBlock,
} from "./platform-message-text-block.js";

export type PlatformMessage = {
  /** Role of the message author. */
  role: PlatformMessageRole;
  /** Content blocks in the message. */
  content: PlatformMessageTextBlock[];
};

export const platformMessageSchema: Schema<PlatformMessage> = s.object<PlatformMessage>({
  role: platformMessageRoleSchema,
  content: s.array(s.lazy(() => platformMessageTextBlockSchema)),
});
