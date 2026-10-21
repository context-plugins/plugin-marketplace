import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Org5 = {
  sourcedId: string;
};

export const org5Schema: Schema<Org5> = s.object<Org5>({
  sourcedId: s.string(),
});
