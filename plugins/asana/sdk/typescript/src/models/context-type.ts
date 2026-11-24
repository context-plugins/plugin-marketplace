import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of context. Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`,
 * or `api`.
 */
export const ContextType = {
  Web: "web",
  Desktop: "desktop",
  Mobile: "mobile",
  AsanaSupport: "asana_support",
  Asana: "asana",
  Email: "email",
  Api: "api",
} as const;
export type ContextType = (typeof ContextType)[keyof typeof ContextType] | (string & {});

export const contextTypeSchema: EnumSchema<ContextType> = s.enumOf<ContextType>(ContextType);
