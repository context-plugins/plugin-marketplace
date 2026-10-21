import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebSearch2 = {
  provider?: string;
  providerKey?: string;
  providerLabel?: string;
};

export const webSearch2Schema: Schema<WebSearch2> = s.object<WebSearch2>({
  provider: s.optional(s.string()),
  providerKey: s.optional(s.string()),
  providerLabel: s.optional(s.string()),
});
