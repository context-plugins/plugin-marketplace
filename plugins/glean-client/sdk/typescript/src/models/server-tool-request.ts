import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionPreviewSchema, type ActionPreview } from "./action-preview.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";

export type ServerToolRequest = {
  /** The type of request made to the user. */
  requestType: RequestType;
  /** Unique identifier for this request. */
  requestId: string;
  /** Human-readable display name for the tool. */
  toolDisplayName?: string;
  /**
   * Unique identifier of the tool server. Use with GET /tool-servers/{serverId}/auth to resolve
   * display information and authentication status.
   */
  serverId?: string;
  /**
   * Custom call-to-action (CTA) verb for the approval button (e.g., "Create", "Update", "Send").
   */
  toolCta?: string;
  /** Preview information for an action being executed. */
  actionPreview?: ActionPreview;
};

export const serverToolRequestSchema: Schema<ServerToolRequest> = s.object<ServerToolRequest>({
  requestType: requestTypeSchema,
  requestId: s.string(),
  toolDisplayName: s.optional(s.string()),
  serverId: s.optional(s.string()),
  toolCta: s.optional(s.string()),
  actionPreview: s.optional(s.lazy(() => actionPreviewSchema)),
});
