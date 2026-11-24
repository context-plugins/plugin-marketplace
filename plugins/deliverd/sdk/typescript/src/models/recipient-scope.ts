import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecipientScope = {
  Internal: "internal",
  External: "external",
} as const;
export type RecipientScope = (typeof RecipientScope)[keyof typeof RecipientScope] | (string & {});

export const recipientScopeSchema: EnumSchema<RecipientScope> = s.enumOf<RecipientScope>(RecipientScope);
