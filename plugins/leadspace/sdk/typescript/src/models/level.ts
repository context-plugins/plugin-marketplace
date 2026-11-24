import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Level = {
  CLevel: "C Level",
  BoardLevel: "Board Level",
  VpLevel: "VP Level",
  DirectorLevel: "Director Level",
  ManagerLevel: "Manager Level",
  StaffLevel: "Staff Level",
} as const;
export type Level = (typeof Level)[keyof typeof Level] | (string & {});

export const levelSchema: EnumSchema<Level> = s.enumOf<Level>(Level);
