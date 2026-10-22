import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The monitoring metric model type. */
export const Model3 = {
  AuthRate: "auth_rate",
} as const;
export type Model3 = (typeof Model3)[keyof typeof Model3] | (string & {});

export const model3Schema: EnumSchema<Model3> = s.enumOf<Model3>(Model3);
