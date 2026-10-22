import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { settlementSchema, type Settlement } from "./settlement.js";

/** A list of settlement records for a transaction. */
export type Settlements = {
  /** The list of settlement objects. */
  items: Settlement[];
};

export const settlementsSchema: Schema<Settlements> = s.object<Settlements>({
  items: s.array(s.lazy(() => settlementSchema)),
});
