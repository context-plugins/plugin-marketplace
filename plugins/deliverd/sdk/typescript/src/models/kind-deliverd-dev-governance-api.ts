import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** initial, intermediate, final, or reclassification (as non-major) */
export const KindDeliverdDevGovernanceApi = {
  Initial: "initial",
  Intermediate: "intermediate",
  Final: "final",
  Reclassification: "reclassification",
} as const;
export type KindDeliverdDevGovernanceApi =
  | (typeof KindDeliverdDevGovernanceApi)[keyof typeof KindDeliverdDevGovernanceApi]
  | (string & {});

export const kindDeliverdDevGovernanceApiSchema: EnumSchema<KindDeliverdDevGovernanceApi> =
  s.enumOf<KindDeliverdDevGovernanceApi>(KindDeliverdDevGovernanceApi);
