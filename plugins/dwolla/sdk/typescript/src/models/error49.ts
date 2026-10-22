import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error49 = {
  /** @default "NotAllowed" */
  code?: "NotAllowed";
  /** @default "Cards cannot be used as a source for transfers." */
  message?: "Cards cannot be used as a source for transfers.";
  /** @default "/_links/source/href" */
  path?: "/_links/source/href";
  links?: Record<string, unknown>;
};

export const error49Schema: Schema<Error49> = s.object<Error49>({
  code: s.defaulted(s.literal("NotAllowed"), "NotAllowed"),
  message: s.defaulted(
    s.literal("Cards cannot be used as a source for transfers."),
    "Cards cannot be used as a source for transfers.",
  ),
  path: s.defaulted(s.literal("/_links/source/href"), "/_links/source/href"),
  links: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    links: "_links",
  },
});
