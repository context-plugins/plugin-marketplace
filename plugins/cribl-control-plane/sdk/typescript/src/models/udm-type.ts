import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the specific format for UDM events sent to Google SecOps. This must match the type of UDM
 * data being sent.
 */
export const UdmType = {
  Entities: "entities",
  Logs: "logs",
} as const;
export type UdmType = (typeof UdmType)[keyof typeof UdmType] | (string & {});

export const udmTypeSchema: EnumSchema<UdmType> = s.enumOf<UdmType>(UdmType);
