import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { source1Schema, type Source1 } from "./source1.js";

export type Links35 = {
  source?: Source1;
};

export const links35Schema: Schema<Links35> = s.object<Links35>({
  source: s.optional(s.lazy(() => source1Schema)),
});
