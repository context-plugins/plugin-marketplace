import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Contents = {
  /** Set true only when the contents qualify under USPS Media Mail standards. @default false */
  mediaMailEligible?: boolean;
};

export const contentsSchema: Schema<Contents> = s.object<Contents>({
  mediaMailEligible: s.defaulted(s.boolean(), false),
});
