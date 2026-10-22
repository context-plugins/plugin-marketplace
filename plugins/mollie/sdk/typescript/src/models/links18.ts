import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { url59Schema, type Url59 } from "./url59.js";

export type Links18 = {
  /**
   * If known, a deep link to the Mollie dashboard of the client, where the requirement can be
   * fulfilled. For example, where necessary documents are to be uploaded.
   */
  dashboard?: Url59;
};

export const links18Schema: Schema<Links18> = s.object<Links18>({
  dashboard: s.optional(s.lazy(() => url59Schema)),
});
