import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { systemSettingsConfSchema, type SystemSettingsConf } from "./system-settings-conf.js";

export type CountedSystemSettingsConf = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: SystemSettingsConf[];
};

export const countedSystemSettingsConfSchema: Schema<CountedSystemSettingsConf> =
  s.object<CountedSystemSettingsConf>({
    count: s.int(),
    items: s.array(s.lazy(() => systemSettingsConfSchema)),
  });
