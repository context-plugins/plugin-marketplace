import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination7Schema, type Destination7 } from "./destination7.js";
import { source2Schema, type Source2 } from "./source2.js";

export type AchDetails2 = {
  source?: Source2;
  destination?: Destination7;
};

export const achDetails2Schema: Schema<AchDetails2> = s.object<AchDetails2>({
  source: s.optional(s.lazy(() => source2Schema)),
  destination: s.optional(s.lazy(() => destination7Schema)),
});
