import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LineItem1 = {
  sourcedId: string;
};

export const lineItem1Schema: Schema<LineItem1> = s.object<LineItem1>({
  sourcedId: s.string(),
});
