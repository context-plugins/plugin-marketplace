import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about a team's email */
export type TeamEmail = {
  /** An email address */
  email: string;
  /** An enum of `PRIMARY`, `SECONDARY`, `ONCALL`, `OTHER` @default "OTHER" */
  type?: string;
};

export const teamEmailSchema: Schema<TeamEmail> = s.object<TeamEmail>({
  email: s.string(),
  type: s.defaulted(s.string(), "OTHER"),
});
