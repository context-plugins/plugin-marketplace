import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Self6 = {
  href: string;
  type: string;
  resourceType: string;
};

export const self6Schema: Schema<Self6> = s.object<Self6>({
  href: s.string(),
  type: s.string(),
  resourceType: s.string(),
  _keysMap: {
    resourceType: "resource-type",
  },
});
