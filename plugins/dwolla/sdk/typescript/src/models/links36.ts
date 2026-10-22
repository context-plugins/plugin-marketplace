import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination4Schema, type Destination4 } from "./destination4.js";

export type Links36 = {
  destination?: Destination4;
};

export const links36Schema: Schema<Links36> = s.object<Links36>({
  destination: s.optional(s.lazy(() => destination4Schema)),
});
