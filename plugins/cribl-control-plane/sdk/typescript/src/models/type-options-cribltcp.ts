import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsCribltcp = {
  CriblTcp: "cribl_tcp",
} as const;
export type TypeOptionsCribltcp =
  | (typeof TypeOptionsCribltcp)[keyof typeof TypeOptionsCribltcp]
  | (string & {});

export const typeOptionsCribltcpSchema: EnumSchema<TypeOptionsCribltcp> =
  s.enumOf<TypeOptionsCribltcp>(TypeOptionsCribltcp);
