import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DedicatedDetokenizationBody = {
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /** A token sequence to detokenize. */
  tokens: number[];
};

export const dedicatedDetokenizationBodySchema: Schema<DedicatedDetokenizationBody> =
  s.object<DedicatedDetokenizationBody>({
    model: s.string(),
    tokens: s.array(s.int()),
  });
