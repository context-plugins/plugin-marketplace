import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiryDays2Schema, type ExpiryDays2 } from "./unions/expiry-days2.js";

/** Request to create a personal access token (`createPatTokenSchema` in `pat.validators.ts`). */
export type CreatePatRequest = {
  /** Label to help you recognize the token later */
  name: string;
  /**
   * Scopes to grant, validated against the org's configured `MCP_SCOPES` (not the full role-aware
   * OAuth-app scope set). Defaults to every scope in `MCP_SCOPES` if omitted.
   */
  scopes?: string[];
  /**
   * Token lifetime. Defaults to `30` if omitted — a token minted without an explicit choice
   * shouldn't default to the longest lifetime. `"never"` is stored as a ~100-year expiry (the
   * underlying schema field is required and TTL-indexed, so there's no literal null option).
   */
  expiryDays?: ExpiryDays2;
};

export const createPatRequestSchema: Schema<CreatePatRequest> = s.object<CreatePatRequest>({
  name: s.string(),
  scopes: s.optional(s.array(s.string())),
  expiryDays: s.optional(s.lazy(() => expiryDays2Schema)),
});
