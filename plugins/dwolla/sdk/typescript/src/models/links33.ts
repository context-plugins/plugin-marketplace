import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination4Schema, type Destination4 } from "./destination4.js";
import { source1Schema, type Source1 } from "./source1.js";

export type Links33 = {
  source?: Source1;
  destination?: Destination4;
};

export const links33Schema: Schema<Links33> = s.object<Links33>({
  source: s.optional(s.lazy(() => source1Schema)),
  destination: s.optional(s.lazy(() => destination4Schema)),
});
