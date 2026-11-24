import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Include Google AI Overview in the response. Paid add-on: one flat +2 credits covers `aioverview`
 * and `paaAioverview`, alone or together
 * ([pricing](/guides/providers#google-search-multi-page-pricing)).
 */
export type Aioverview1 = {
  /** Include AI Overview formatted as markdown @default false */
  markdown?: boolean;
};

export const aioverview1Schema: Schema<Aioverview1> = s.object<Aioverview1>({
  markdown: s.defaulted(s.boolean(), false),
});
