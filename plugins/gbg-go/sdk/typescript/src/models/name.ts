import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Name = {
  Com: "COM",
  Sod: "SOD",
  Dg1: "DG1",
  Dg2: "DG2",
  Dg3: "DG3",
  Dg4: "DG4",
  Dg5: "DG5",
  Dg6: "DG6",
  Dg7: "DG7",
  Dg8: "DG8",
  Dg9: "DG9",
  Dg10: "DG10",
  Dg11: "DG11",
  Dg12: "DG12",
  Dg13: "DG13",
  Dg14: "DG14",
  Dg15: "DG15",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
