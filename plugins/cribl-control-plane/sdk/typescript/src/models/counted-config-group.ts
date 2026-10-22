import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configGroupSchema, type ConfigGroup } from "./config-group.js";

export type CountedConfigGroup = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: ConfigGroup[];
};

export const countedConfigGroupSchema: Schema<CountedConfigGroup> = s.object<CountedConfigGroup>({
  count: s.int(),
  items: s.array(s.lazy(() => configGroupSchema)),
});
