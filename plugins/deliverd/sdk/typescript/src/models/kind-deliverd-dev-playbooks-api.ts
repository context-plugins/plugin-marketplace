import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** procedure for playbooks of steps, prompt for approved prompts; both when omitted */
export const KindDeliverdDevPlaybooksApi = {
  Procedure: "procedure",
  Prompt: "prompt",
} as const;
export type KindDeliverdDevPlaybooksApi =
  | (typeof KindDeliverdDevPlaybooksApi)[keyof typeof KindDeliverdDevPlaybooksApi]
  | (string & {});

export const kindDeliverdDevPlaybooksApiSchema: EnumSchema<KindDeliverdDevPlaybooksApi> =
  s.enumOf<KindDeliverdDevPlaybooksApi>(KindDeliverdDevPlaybooksApi);
