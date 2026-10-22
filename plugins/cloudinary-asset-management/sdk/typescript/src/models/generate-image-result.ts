import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { generatedAssetsSchema, type GeneratedAssets } from "./generated-assets.js";
import { limitsSchema, type Limits } from "./limits.js";
import { noticeSchema, type Notice } from "./notice.js";

/** Successful synchronous image-generation response. */
export type GenerateImageResult = {
  /** Wrapper holding the array of generated assets. */
  data?: GeneratedAssets;
  /** Rate limit information for the account's add-on quotas. */
  limits?: Limits;
  /**
   * Tips and guidance attached to the response to help you get the most out of the generation. Each
   * entry is plain text you can show to a user or act on as-is. Omitted when there is nothing to
   * add.
   */
  notices?: Notice[];
  /** Unique identifier for this request, for correlation and support. */
  requestId: string;
};

export const generateImageResultSchema: Schema<GenerateImageResult> = s.object<GenerateImageResult>({
  data: s.optional(s.lazy(() => generatedAssetsSchema)),
  limits: s.optional(s.lazy(() => limitsSchema)),
  notices: s.optional(s.array(s.lazy(() => noticeSchema))),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
