import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceTier = {
  Auto: "auto",
  Default: "default",
  Flex: "flex",
  Scale: "scale",
  Priority: "priority",
} as const;
export type ServiceTier = (typeof ServiceTier)[keyof typeof ServiceTier] | (string & {});

export const serviceTierSchema: EnumSchema<ServiceTier> = s.enumOf<ServiceTier>(ServiceTier);
