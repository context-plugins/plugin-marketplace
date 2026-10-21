import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthTokenModel = {
  /**
   * If <code>true</code>, the user must change their password before accessing the API. Otherwise,
   * <code>false</code>.
   */
  forcePasswordChange: boolean;
  /**
   * Bearer token to include in the <code>Authorization</code> header for subsequent API requests.
   */
  token: string;
};

export const authTokenModelSchema: Schema<AuthTokenModel> = s.object<AuthTokenModel>({
  forcePasswordChange: s.boolean(),
  token: s.string(),
});
