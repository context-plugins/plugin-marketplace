import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Web-search provider attachment for this agent, or `null` when none is attached.
 *
 * For `GET /agents`, the response formatter always emits `provider`. It may also emit `providerKey`
 * and `providerLabel` when those values were present on the stored attachment. It does not emit
 * `iconPath` on this response path.
 */
export type WebSearch1 = {
  provider?: string;
  providerKey?: string;
  providerLabel?: string;
};

export const webSearch1Schema: Schema<WebSearch1> = s.object<WebSearch1>({
  provider: s.optional(s.string()),
  providerKey: s.optional(s.string()),
  providerLabel: s.optional(s.string()),
});
