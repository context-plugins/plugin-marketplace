import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewsMaintainerTeam = {
  id: string;
  key: string;
  name: string;
};

export const viewsMaintainerTeamSchema: Schema<ViewsMaintainerTeam> = s.object<ViewsMaintainerTeam>({
  id: s.string(),
  key: s.string(),
  name: s.string(),
});
