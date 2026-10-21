import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MethodIncludeWalletsParameter = {
  Applepay: "applepay",
  Googlepay: "googlepay",
} as const;
export type MethodIncludeWalletsParameter =
  | (typeof MethodIncludeWalletsParameter)[keyof typeof MethodIncludeWalletsParameter]
  | (string & {});

export const methodIncludeWalletsParameterSchema: EnumSchema<MethodIncludeWalletsParameter> =
  s.enumOf<MethodIncludeWalletsParameter>(MethodIncludeWalletsParameter);
