import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformAgentsSearchRequest = {
  /**
   * Case-insensitive substring to match against agent names. If omitted or empty, no name filter is
   * applied.
   */
  name?: string;
};

export const platformAgentsSearchRequestSchema: Schema<PlatformAgentsSearchRequest> =
  s.object<PlatformAgentsSearchRequest>({
    name: s.optional(s.string()),
  });
