import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination7Schema, type Destination7 } from "./destination7.js";

export type AchDetails3 = {
  destination?: Destination7;
};

export const achDetails3Schema: Schema<AchDetails3> = s.object<AchDetails3>({
  destination: s.optional(s.lazy(() => destination7Schema)),
});
