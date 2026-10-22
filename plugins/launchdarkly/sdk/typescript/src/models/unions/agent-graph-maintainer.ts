import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  aiConfigsMaintainerTeamSchema,
  type AiConfigsMaintainerTeam,
} from "../ai-configs-maintainer-team.js";
import { maintainerMemberSchema, type MaintainerMember } from "../maintainer-member.js";

export type AgentGraphMaintainer = MaintainerMember | AiConfigsMaintainerTeam;

export const agentGraphMaintainerSchema: Schema<AgentGraphMaintainer> = s.of<AgentGraphMaintainer>(
  s.union([s.lazy(() => maintainerMemberSchema), s.lazy(() => aiConfigsMaintainerTeamSchema)]),
);
