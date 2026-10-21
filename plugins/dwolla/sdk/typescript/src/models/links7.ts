import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchange1Schema, type Exchange1 } from "./exchange1.js";
import { onDemandAuthorization1Schema, type OnDemandAuthorization1 } from "./on-demand-authorization1.js";

export type Links7 = {
  exchange: Exchange1;
  onDemandAuthorization?: OnDemandAuthorization1;
};

export const links7Schema: Schema<Links7> = s.object<Links7>({
  exchange: exchange1Schema,
  onDemandAuthorization: s.optional(s.lazy(() => onDemandAuthorization1Schema)),
  _keysMap: {
    onDemandAuthorization: "on-demand-authorization",
  },
});
