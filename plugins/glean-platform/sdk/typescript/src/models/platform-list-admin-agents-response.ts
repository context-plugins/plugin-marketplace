import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAdminAgentSchema, type PlatformAdminAgent } from "./platform-admin-agent.js";

/** One page of agents. */
export type PlatformListAdminAgentsResponse = {
  /** The agents on this page, ordered by display_name and then by agent_id. */
  results: PlatformAdminAgent[];
  /** Whether more agents are available after this page. */
  hasMore: boolean;
  /** Opaque cursor for the next page; null or absent when has_more is false. */
  nextCursor?: string | null;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformListAdminAgentsResponseSchema: Schema<PlatformListAdminAgentsResponse> =
  s.object<PlatformListAdminAgentsResponse>({
    results: s.array(s.lazy(() => platformAdminAgentSchema)),
    hasMore: s.boolean(),
    nextCursor: s.optionalNullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
