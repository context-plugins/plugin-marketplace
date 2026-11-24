import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An enum of readable instance sizes, with each instance size mapping to a float value (e.g.
 * InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
 */
export const InstanceSize = {
  InstanceSizeUnspecified: "INSTANCE_SIZE_UNSPECIFIED",
  ExtraSmall: "EXTRA_SMALL",
  Small: "SMALL",
  Medium: "MEDIUM",
  Large: "LARGE",
  ExtraLarge: "EXTRA_LARGE",
} as const;
export type InstanceSize = (typeof InstanceSize)[keyof typeof InstanceSize] | (string & {});

export const instanceSizeSchema: EnumSchema<InstanceSize> = s.enumOf<InstanceSize>(InstanceSize);
