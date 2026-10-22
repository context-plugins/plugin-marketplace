import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadPackResponse = {
  /**
   * Unique staging source identifier for the uploaded Pack file. Pass this value as the
   * <code>source</code> parameter in a subsequent <code>POST /packs</code> request to install the
   * Pack.
   */
  source: string;
};

export const uploadPackResponseSchema: Schema<UploadPackResponse> = s.object<UploadPackResponse>({
  source: s.string(),
});
