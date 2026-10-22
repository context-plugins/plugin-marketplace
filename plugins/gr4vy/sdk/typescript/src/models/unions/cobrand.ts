import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeCobrandItemSchema, type PazeCobrandItem } from "../paze-cobrand-item.js";

/** Details for cobranded cards offered by the merchant. */
export type Cobrand = PazeCobrandItem[];

export const cobrandSchema: Schema<Cobrand> = s.of<Cobrand>(
  s.union([s.array(s.lazy(() => pazeCobrandItemSchema))]),
);
