import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response from setting up organization auth configuration */
export type OrgAuthConfigSetupResponse = {
  message: string;
};

export const orgAuthConfigSetupResponseSchema: Schema<OrgAuthConfigSetupResponse> =
  s.object<OrgAuthConfigSetupResponse>({
    message: s.string(),
  });
