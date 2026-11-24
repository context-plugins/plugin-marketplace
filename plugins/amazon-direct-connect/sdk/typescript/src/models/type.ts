import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of associated gateway. */
export const Type = {
  VirtualPrivateGateway: "virtualPrivateGateway",
  TransitGateway: "transitGateway",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
