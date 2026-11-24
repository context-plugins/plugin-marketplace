import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";
import {
  decisionEngineVariableVariantSchema,
  type DecisionEngineVariableVariant,
} from "./decision-engine-variable-variant.js";

/** Message variable (Public API) */
export type DecisionEngineVariable = {
  /** The variable name (must be unique within a message) */
  name: string;
  config?: Config;
  variants: DecisionEngineVariableVariant[];
};

export const decisionEngineVariableSchema: Schema<DecisionEngineVariable> = s.object<DecisionEngineVariable>({
  name: s.string(),
  config: s.optional(s.lazy(() => configSchema)),
  variants: s.array(s.lazy(() => decisionEngineVariableVariantSchema)),
});
