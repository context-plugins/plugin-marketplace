import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DialogMessage = {
  /** Dialog message text */
  text: string;
};

export const dialogMessageSchema: Schema<DialogMessage> = s.object<DialogMessage>({
  text: s.string(),
});
