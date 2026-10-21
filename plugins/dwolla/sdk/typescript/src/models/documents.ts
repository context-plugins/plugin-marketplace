import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded9Schema, type Embedded9 } from "./embedded9.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Documents = {
  links: Record<string, HalLink>;
  embedded: Embedded9;
  total: number;
};

export const documentsSchema: Schema<Documents> = s.object<Documents>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  embedded: embedded9Schema,
  total: s.int(),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
