import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ISO 3166-1 alpha-2 country codes restricting eligible shipping addresses. Empty list or absence
 * means all countries accepted.
 */
export type Acceptedshippingcountries = string[];

export const acceptedshippingcountriesSchema: Schema<Acceptedshippingcountries> =
  s.of<Acceptedshippingcountries>(s.union([s.array(s.string())]));
