import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { self2Schema, type Self2 } from "./self2.js";

/** Links to related resources. */
export type Links58 = {
  /** The URL to this unmatched credit transfer. */
  self?: Self2;
};

export const links58Schema: Schema<Links58> = s.object<Links58>({
  self: s.optional(s.lazy(() => self2Schema)),
});
