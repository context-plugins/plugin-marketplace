import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PazeWebSession = {
  /** The Paze merchant data ID. */
  id: string;
  /** The merchant display name. */
  name: string;
  /** The Paze profile ID for the given domain. */
  profileId: string;
};

export const pazeWebSessionSchema: Schema<PazeWebSession> = s.object<PazeWebSession>({
  id: s.string(),
  name: s.string(),
  profileId: s.string(),
});
