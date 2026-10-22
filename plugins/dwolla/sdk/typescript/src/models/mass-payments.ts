import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded3Schema, type Embedded3 } from "./embedded3.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type MassPayments = {
  links?: Record<string, HalLink>;
  embedded?: Embedded3;
  total?: number;
};

export const massPaymentsSchema: Schema<MassPayments> = s.object<MassPayments>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded3Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
