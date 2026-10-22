import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentWaitSoundSchema, type AgentWaitSound } from "../agent-wait-sound.js";

/** Sound to play while waiting for a response from the LLM. */
export type WaitSoundModel = AgentWaitSound;

export const waitSoundModelSchema: Schema<WaitSoundModel> = s.of<WaitSoundModel>(
  s.union([s.lazy(() => agentWaitSoundSchema)]),
);
