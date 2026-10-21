import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /processallmemberships API call */
export type ProcessAllMembershipsRequest = {
  /**
   * If provided, process group memberships only for this custom datasource. Otherwise all uploaded
   * memberships are processed.
   */
  datasource?: string;
};

export const processAllMembershipsRequestSchema: Schema<ProcessAllMembershipsRequest> =
  s.object<ProcessAllMembershipsRequest>({
    datasource: s.optional(s.string()),
  });
