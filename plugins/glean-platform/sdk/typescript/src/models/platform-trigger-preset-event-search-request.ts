import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformTriggerPresetEventSearchRequest = {
  /** Values for the preset's input fields, keyed by field name. */
  inputs?: Record<string, string>;
  /** Maximum number of events to return. @default 10 */
  pageSize?: number;
};

export const platformTriggerPresetEventSearchRequestSchema: Schema<PlatformTriggerPresetEventSearchRequest> =
  s.object<PlatformTriggerPresetEventSearchRequest>({
    inputs: s.optional(s.record(s.string(), s.string())),
    pageSize: s.defaulted(s.int(), 10),
    _keysMap: {
      pageSize: "page_size",
    },
  });
