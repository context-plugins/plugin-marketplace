import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigsMaintainerTeam = {
  key: string;
  name: string;
};

export const aiConfigsMaintainerTeamSchema: Schema<AiConfigsMaintainerTeam> =
  s.object<AiConfigsMaintainerTeam>({
    key: s.string(),
    name: s.string(),
  });
