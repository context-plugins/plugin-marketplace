import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Command = {
  /**
   * Name of the field in which to store the returned value. Leave blank to discard returned value.
   */
  outField?: string;
  /** Redis command to perform. For a complete list visit: https://redis.io/commands */
  command: string;
  /**
   * A JavaScript expression to compute the value of the key to operate on. Can also be a constant
   * such as 'username'.
   */
  keyExpr: string;
  /** A JavaScript expression to compute arguments to the operation. Can return an array. */
  argsExpr?: string;
};

export const commandSchema: Schema<Command> = s.object<Command>({
  outField: s.optional(s.string()),
  command: s.string(),
  keyExpr: s.string(),
  argsExpr: s.optional(s.string()),
});
