import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthResponse5 = {
  success: boolean;
  message: string;
};

export const oauthResponse5Schema: Schema<OauthResponse5> = s.object<OauthResponse5>({
  success: s.boolean(),
  message: s.string(),
});
