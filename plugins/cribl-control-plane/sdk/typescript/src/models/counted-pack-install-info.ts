import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packInstallInfoSchema, type PackInstallInfo } from "./pack-install-info.js";

export type CountedPackInstallInfo = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: PackInstallInfo[];
};

export const countedPackInstallInfoSchema: Schema<CountedPackInstallInfo> = s.object<CountedPackInstallInfo>({
  count: s.int(),
  items: s.array(s.lazy(() => packInstallInfoSchema)),
});
