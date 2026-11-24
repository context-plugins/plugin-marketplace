import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The default behavior of outgoing traffic. */
export const DefaultBehavior = {
  AllowAll: "ALLOW_ALL",
  DenyAll: "DENY_ALL",
} as const;
export type DefaultBehavior = (typeof DefaultBehavior)[keyof typeof DefaultBehavior] | (string & {});

export const defaultBehaviorSchema: EnumSchema<DefaultBehavior> = s.enumOf<DefaultBehavior>(DefaultBehavior);
