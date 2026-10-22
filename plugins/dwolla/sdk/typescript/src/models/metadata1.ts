import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metadata1 = {
  item1?: string;
};

export const metadata1Schema: Schema<Metadata1> = s.object<Metadata1>({
  item1: s.optional(s.string()),
});
