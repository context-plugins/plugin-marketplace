import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Card = {
  id: string;
  version?: string;
  config?: Record<string, unknown>;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  id: s.string(),
  version: s.optional(s.string()),
  config: s.optional(s.record(s.string(), s.unknown())),
});
