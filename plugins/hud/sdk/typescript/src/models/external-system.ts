import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A system HUD imports environments and runs from. */
export const ExternalSystem = {
  Harbor: "harbor",
} as const;
export type ExternalSystem = (typeof ExternalSystem)[keyof typeof ExternalSystem] | (string & {});

export const externalSystemSchema: EnumSchema<ExternalSystem> = s.enumOf<ExternalSystem>(ExternalSystem);
