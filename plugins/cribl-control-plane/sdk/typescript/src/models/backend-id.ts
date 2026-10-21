import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BackendId = {
  Dynamic: "dynamic",
  Byo: "byo",
} as const;
export type BackendId = (typeof BackendId)[keyof typeof BackendId] | (string & {});

export const backendIdSchema: EnumSchema<BackendId> = s.enumOf<BackendId>(BackendId);
