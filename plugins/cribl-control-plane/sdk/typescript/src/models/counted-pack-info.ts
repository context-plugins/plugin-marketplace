import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packInfoSchema, type PackInfo } from "./pack-info.js";

export type CountedPackInfo = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: PackInfo[];
};

export const countedPackInfoSchema: Schema<CountedPackInfo> = s.object<CountedPackInfo>({
  count: s.int(),
  items: s.array(s.lazy(() => packInfoSchema)),
});
