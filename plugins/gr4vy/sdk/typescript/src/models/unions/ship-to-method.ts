import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The shipping method for this transaction. */
export type ShipToMethod = string;

export const shipToMethodSchema: Schema<ShipToMethod> = s.of<ShipToMethod>(s.union([s.string()]));
