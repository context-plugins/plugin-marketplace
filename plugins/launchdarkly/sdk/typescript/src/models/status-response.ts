import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusResponse = {
  integrationId?: string;
  message?: string;
  statusCode?: number;
  timestamp?: number;
};

export const statusResponseSchema: Schema<StatusResponse> = s.object<StatusResponse>({
  integrationId: s.optional(s.string()),
  message: s.optional(s.string()),
  statusCode: s.optional(s.int()),
  timestamp: s.optional(s.int()),
});
