import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchAgentsRequest = {
  /**
   * Filters on the name of the agent. The keyword search is case-insensitive. If search string is
   * ommited or empty, acts as no filter.
   */
  name?: string;
};

export const searchAgentsRequestSchema: Schema<SearchAgentsRequest> = s.object<SearchAgentsRequest>({
  name: s.optional(s.string()),
});
