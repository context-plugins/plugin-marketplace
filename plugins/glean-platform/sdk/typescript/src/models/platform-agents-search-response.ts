import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAgentSchema, type PlatformAgent } from "./platform-agent.js";

export type PlatformAgentsSearchResponse = {
  /** Agents matching the search request. */
  agents: PlatformAgent[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformAgentsSearchResponseSchema: Schema<PlatformAgentsSearchResponse> =
  s.object<PlatformAgentsSearchResponse>({
    agents: s.array(s.lazy(() => platformAgentSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
