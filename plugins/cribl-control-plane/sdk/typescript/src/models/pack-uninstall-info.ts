import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PackUninstallInfo = {
  /** Unique identifier for the Pack. */
  id: string;
  /** Source from which the Pack was originally installed. */
  source: string;
};

export const packUninstallInfoSchema: Schema<PackUninstallInfo> = s.object<PackUninstallInfo>({
  id: s.string(),
  source: s.string(),
});
