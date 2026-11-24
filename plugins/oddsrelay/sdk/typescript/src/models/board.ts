import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Board = {
  Filtered: "filtered",
  Partitioned: "partitioned",
} as const;
export type Board = (typeof Board)[keyof typeof Board] | (string & {});

export const boardSchema: EnumSchema<Board> = s.enumOf<Board>(Board);
