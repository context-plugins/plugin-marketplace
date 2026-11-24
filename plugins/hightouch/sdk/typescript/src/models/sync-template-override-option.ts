import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Whether syncs created from a sync template may set a configuration field. */
export type SyncTemplateOverrideOption = {
  /**
   * True when syncs created from the template may set the field through `syncTemplateOverrides`.
   */
  overridable: boolean;
};

export const syncTemplateOverrideOptionSchema: Schema<SyncTemplateOverrideOption> =
  s.object<SyncTemplateOverrideOption>({
    overridable: s.boolean(),
  });
