import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Unconstrained plain-text assistant output. */
export type PlatformChatTextFormat = {
  /** Discriminator. Must be TEXT. @default "TEXT" */
  type?: "TEXT";
};

export const platformChatTextFormatSchema: Schema<PlatformChatTextFormat> = s.object<PlatformChatTextFormat>({
  type: s.defaulted(s.literal("TEXT"), "TEXT"),
});
