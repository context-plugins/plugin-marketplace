import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Legacy sheet metadata, retained for viewing retired workflows */
export type SheetInfo = Record<string, string>;

export const sheetInfoSchema: Schema<SheetInfo> = s.of<SheetInfo>(
  s.union([s.record(s.string(), s.string())]),
);
