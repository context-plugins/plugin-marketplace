import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type RunCreateResponse = {
  id: string;
  status: Status;
  model: string;
  sessionId: string;
  workspaceId: string;
  eventsUrl: string;
  missingFileIds?: string[];
  /**
   * Titles of opVaultId items that hold a credential but no 1Password website, so deriving their
   * domains left them with nowhere to be typed. The run still starts without them; add a website to
   * the item or pass opVaultAllowedDomains.
   */
  skippedVaultItems?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runCreateResponseSchema: Schema<RunCreateResponse> = s.object<RunCreateResponse>(
  {
    id: s.string(),
    status: statusSchema,
    model: s.string(),
    sessionId: s.string(),
    workspaceId: s.string(),
    eventsUrl: s.string(),
    missingFileIds: s.optional(s.array(s.string())),
    skippedVaultItems: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
