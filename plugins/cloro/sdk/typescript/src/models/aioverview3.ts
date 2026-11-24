import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Include Google AI Overview in the response. `true`, `{}` and `{"markdown": false}` return the AI
 * Overview without `markdown`. Send `{"markdown": true}` to also get `result.aioverview.markdown`.
 * Paid add-on: one flat +2 credits covers `aioverview` and `paaAioverview`, alone or together
 * ([pricing](/guides/providers#google-search-multi-page-pricing)).
 */
export type Aioverview3 = {
  /**
   * Include AI Overview formatted as markdown in `result.aioverview.markdown`. Only `true` turns it
   * on.
   *
   * @default false
   */
  markdown?: boolean;
};

export const aioverview3Schema: Schema<Aioverview3> = s.object<Aioverview3>({
  markdown: s.defaulted(s.boolean(), false),
});
