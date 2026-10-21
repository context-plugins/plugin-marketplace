import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsMaintainerMemberSchema, type ViewsMaintainerMember } from "./views-maintainer-member.js";
import { viewsMaintainerTeamSchema, type ViewsMaintainerTeam } from "./views-maintainer-team.js";

export type Maintainer = {
  id: string;
  kind: string;
  maintainerMember?: ViewsMaintainerMember;
  maintainerTeam?: ViewsMaintainerTeam;
};

export const maintainerSchema: Schema<Maintainer> = s.object<Maintainer>({
  id: s.string(),
  kind: s.string(),
  maintainerMember: s.optional(s.lazy(() => viewsMaintainerMemberSchema)),
  maintainerTeam: s.optional(s.lazy(() => viewsMaintainerTeamSchema)),
});
