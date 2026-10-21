import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAgentSchema, type PlatformAgent } from "./platform-agent.js";

export type PlatformAgentGetResponse = {
  agent: PlatformAgent;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformAgentGetResponseSchema: Schema<PlatformAgentGetResponse> =
  s.object<PlatformAgentGetResponse>({
    agent: platformAgentSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
