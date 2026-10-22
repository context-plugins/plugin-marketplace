import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If true, if the caller changes language using the language menu in the custom message, the
 * message will be repeated in the new language (not including the language menu). If omitted or
 * null on create, false is stored. If omitted or null on update, existing value will not be
 * changed.
 */
export type RepeatAfterLanguageChange = boolean;

export const repeatAfterLanguageChangeSchema: Schema<RepeatAfterLanguageChange> =
  s.of<RepeatAfterLanguageChange>(s.union([s.boolean()]));
