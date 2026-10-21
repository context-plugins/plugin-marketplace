import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NativeHawaiianOrOtherPacificIslander = {
  True: "true",
  False: "false",
} as const;
export type NativeHawaiianOrOtherPacificIslander =
  | (typeof NativeHawaiianOrOtherPacificIslander)[keyof typeof NativeHawaiianOrOtherPacificIslander]
  | (string & {});

export const nativeHawaiianOrOtherPacificIslanderSchema: EnumSchema<NativeHawaiianOrOtherPacificIslander> =
  s.enumOf<NativeHawaiianOrOtherPacificIslander>(NativeHawaiianOrOtherPacificIslander);
