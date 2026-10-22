import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfSchema, type Self } from "./self.js";

/** Links to related resources. */
export type Links28 = {
  /** The URL to this draft transfer. */
  self: Self;
};

export const links28Schema: Schema<Links28> = s.object<Links28>({
  self: selfSchema,
});
