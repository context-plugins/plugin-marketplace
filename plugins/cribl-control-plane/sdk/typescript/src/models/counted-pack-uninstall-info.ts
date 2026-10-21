import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packUninstallInfoSchema, type PackUninstallInfo } from "./pack-uninstall-info.js";

export type CountedPackUninstallInfo = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: PackUninstallInfo[];
};

export const countedPackUninstallInfoSchema: Schema<CountedPackUninstallInfo> =
  s.object<CountedPackUninstallInfo>({
    count: s.int(),
    items: s.array(s.lazy(() => packUninstallInfoSchema)),
  });
