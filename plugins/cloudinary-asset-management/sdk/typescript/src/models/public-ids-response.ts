import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The result of a bulk operation addressed by public ID. */
export type PublicIdsResponse = {
  /**
   * The public IDs the operation was actually applied to. Shorter than the requested list when
   * assets were missing, unauthorized, or beyond the 1000-asset limit.
   */
  publicIds?: string[];
  /**
   * The public IDs the caller lacks update permission for. Present only when at least one requested
   * asset was unauthorized.
   */
  unauthorized?: string[];
};

export const publicIdsResponseSchema: Schema<PublicIdsResponse> = s.object<PublicIdsResponse>({
  publicIds: s.optional(s.array(s.string())),
  unauthorized: s.optional(s.array(s.string())),
  _keysMap: {
    publicIds: "public_ids",
  },
});
