import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { userFlagSettingSchema, type UserFlagSetting } from "./user-flag-setting.js";

export type UserFlagSettings = {
  /** An array of flag settings for the user */
  items: Record<string, UserFlagSetting>;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const userFlagSettingsSchema: Schema<UserFlagSettings> = s.object<UserFlagSettings>({
  items: s.record(
    s.string(),
    s.lazy(() => userFlagSettingSchema),
  ),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
