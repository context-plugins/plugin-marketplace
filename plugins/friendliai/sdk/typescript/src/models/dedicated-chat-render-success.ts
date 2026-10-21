import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DedicatedChatRenderSuccess = {
  /** The rendered text. */
  text: string;
};

export const dedicatedChatRenderSuccessSchema: Schema<DedicatedChatRenderSuccess> =
  s.object<DedicatedChatRenderSuccess>({
    text: s.string(),
  });
