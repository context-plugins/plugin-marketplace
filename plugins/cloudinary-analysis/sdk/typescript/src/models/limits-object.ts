import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { limitSchema, type Limit } from "./limit.js";

export type LimitsObject = {
  items?: Limit[];
};

export const limitsObjectSchema: Schema<LimitsObject> = s.object<LimitsObject>({
  items: s.optional(s.array(s.lazy(() => limitSchema))),
});
