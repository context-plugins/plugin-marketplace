import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Deleted = {
  Deleted: "deleted",
  NotFound: "not_found",
} as const;
export type Deleted = (typeof Deleted)[keyof typeof Deleted] | (string & {});

export const deletedSchema: EnumSchema<Deleted> = s.enumOf<Deleted>(Deleted);
