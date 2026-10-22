import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityTerminalSchema, type ListEntityTerminal } from "./list-entity-terminal.js";

export type Embedded28 = {
  /** An array of terminal objects. */
  terminals?: ListEntityTerminal[];
};

export const embedded28Schema: Schema<Embedded28> = s.object<Embedded28>({
  terminals: s.optional(s.array(s.lazy(() => listEntityTerminalSchema))),
});
