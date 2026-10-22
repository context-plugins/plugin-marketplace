import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentSttProviderSchema, type AgentSttProvider } from "../agent-stt-provider.js";

/** Speech-to-text provider for the agent. */
export type SttProviderModel = AgentSttProvider;

export const sttProviderModelSchema: Schema<SttProviderModel> = s.of<SttProviderModel>(
  s.union([s.lazy(() => agentSttProviderSchema)]),
);
