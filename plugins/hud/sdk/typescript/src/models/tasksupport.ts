import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Tasksupport = {
  Forbidden: "forbidden",
  Optional: "optional",
  Required: "required",
} as const;
export type Tasksupport = (typeof Tasksupport)[keyof typeof Tasksupport] | (string & {});

export const tasksupportSchema: EnumSchema<Tasksupport> = s.enumOf<Tasksupport>(Tasksupport);
