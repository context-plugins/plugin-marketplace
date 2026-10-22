import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformTriggerEventSearchRequest = {
  /** Maximum number of events to return. @default 10 */
  pageSize?: number;
};

export const platformTriggerEventSearchRequestSchema: Schema<PlatformTriggerEventSearchRequest> =
  s.object<PlatformTriggerEventSearchRequest>({
    pageSize: s.defaulted(s.int(), 10),
    _keysMap: {
      pageSize: "page_size",
    },
  });
