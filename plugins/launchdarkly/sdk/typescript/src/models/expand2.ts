import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Expand2 = {
  Maintainer: "maintainer",
  ResourceDetails: "resourceDetails",
} as const;
export type Expand2 = (typeof Expand2)[keyof typeof Expand2] | (string & {});

export const expand2Schema: EnumSchema<Expand2> = s.enumOf<Expand2>(Expand2);
