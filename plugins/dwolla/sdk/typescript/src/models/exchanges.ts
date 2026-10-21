import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded93Schema, type Embedded93 } from "./embedded93.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Exchanges = {
  links: Record<string, HalLink>;
  embedded: Embedded93;
  total: number;
};

export const exchangesSchema: Schema<Exchanges> = s.object<Exchanges>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  embedded: embedded93Schema,
  total: s.int(),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
