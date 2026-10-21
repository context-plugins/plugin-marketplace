import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customers1 = {
  href: string;
  type: string;
  resourceType: string;
};

export const customers1Schema: Schema<Customers1> = s.object<Customers1>({
  href: s.string(),
  type: s.string(),
  resourceType: s.string(),
  _keysMap: {
    resourceType: "resource-type",
  },
});
