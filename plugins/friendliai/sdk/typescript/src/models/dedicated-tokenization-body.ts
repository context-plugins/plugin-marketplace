import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DedicatedTokenizationBody = {
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /** Input text prompt to tokenize. */
  prompt: string;
};

export const dedicatedTokenizationBodySchema: Schema<DedicatedTokenizationBody> =
  s.object<DedicatedTokenizationBody>({
    model: s.string(),
    prompt: s.string(),
  });
