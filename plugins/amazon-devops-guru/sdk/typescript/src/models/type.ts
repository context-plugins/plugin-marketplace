import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly can
 * cause a new insight. CONTEXTUAL - the anomaly contains additional information about an insight or
 * its causal anomaly.
 */
export const Type = {
  Causal: "CAUSAL",
  Contextual: "CONTEXTUAL",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
