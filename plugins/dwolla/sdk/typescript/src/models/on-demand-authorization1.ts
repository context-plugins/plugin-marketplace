import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnDemandAuthorization1 = {
  href: string;
};

export const onDemandAuthorization1Schema: Schema<OnDemandAuthorization1> = s.object<OnDemandAuthorization1>({
  href: s.string(),
});
