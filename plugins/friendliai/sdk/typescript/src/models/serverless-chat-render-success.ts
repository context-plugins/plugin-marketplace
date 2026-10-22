import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServerlessChatRenderSuccess = {
  /** The rendered text. */
  text: string;
};

export const serverlessChatRenderSuccessSchema: Schema<ServerlessChatRenderSuccess> =
  s.object<ServerlessChatRenderSuccess>({
    text: s.string(),
  });
