import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The eval expression and the upload parameters to evaluate it against. The `eval` field holds the
 * dynamic expression; any other upload parameters may be supplied alongside it.
 */
export type EvalRequest = {
  /** The dynamic eval expression to evaluate against the upload parameters. */
  eval: string;
  /** The public ID of the asset the eval expression applies to. */
  publicId?: string;
};

export const evalRequestSchema: Schema<EvalRequest> = s.object<EvalRequest>({
  eval: s.string(),
  publicId: s.optional(s.string()),
  _keysMap: {
    publicId: "public_id",
  },
});
