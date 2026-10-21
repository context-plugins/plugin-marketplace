import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MemberTeamsPostInput = {
  /** List of team keys */
  teamKeys: string[];
};

export const memberTeamsPostInputSchema: Schema<MemberTeamsPostInput> = s.object<MemberTeamsPostInput>({
  teamKeys: s.array(s.string()),
});
