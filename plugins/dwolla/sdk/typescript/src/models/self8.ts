import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Self8 = {
  href?: string;
  type?: string;
  resourceType?: string;
};

export const self8Schema: Schema<Self8> = s.object<Self8>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  _keysMap: {
    resourceType: "resource-type",
  },
});
