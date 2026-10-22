import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onDemandAuthorization1Schema, type OnDemandAuthorization1 } from "./on-demand-authorization1.js";

export type Links5 = {
  onDemandAuthorization?: OnDemandAuthorization1;
};

export const links5Schema: Schema<Links5> = s.object<Links5>({
  onDemandAuthorization: s.optional(s.lazy(() => onDemandAuthorization1Schema)),
  _keysMap: {
    onDemandAuthorization: "on-demand-authorization",
  },
});
