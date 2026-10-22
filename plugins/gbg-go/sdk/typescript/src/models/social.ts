import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Social = {
  /**
   * An agreed standardised name for the social media platform this identity relates to such as
   * Facebook, Twitter, unknown etc
   */
  type: string;
  /** the identity used on this platform */
  identity: string;
};

export const socialSchema: Schema<Social> = s.object<Social>({
  type: s.string(),
  identity: s.string(),
});
