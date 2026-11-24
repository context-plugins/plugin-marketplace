import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What kind of incident it was, which the AI risk scorecard counts: data_disclosure,
 * sensitive_data, prompt_injection, fairness, wrong_output, outage, unauthorised_action or other
 */
export const Category = {
  DataDisclosure: "data_disclosure",
  SensitiveData: "sensitive_data",
  PromptInjection: "prompt_injection",
  Fairness: "fairness",
  WrongOutput: "wrong_output",
  Outage: "outage",
  UnauthorisedAction: "unauthorised_action",
  Other: "other",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
