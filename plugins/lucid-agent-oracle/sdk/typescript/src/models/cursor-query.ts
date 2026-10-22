import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CursorQuery = {
  /** @default 20 */
  limit?: number;
  cursor?: string;
};

export const cursorQuerySchema: Schema<CursorQuery> = s.object<CursorQuery>({
  limit: s.defaulted(s.int(), 20),
  cursor: s.optional(s.string()),
});
