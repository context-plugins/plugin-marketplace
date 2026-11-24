import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event2Schema, type Event2 } from "./event2.js";
import { onUndeclaredSchema2Schema, type OnUndeclaredSchema2 } from "./on-undeclared-schema2.js";

/** The input for creating a Contract */
export type EventContractCreate = {
  /** The contract's name */
  name: string;
  /** The contract's slug. If not specified, one will be generated. */
  slug?: string;
  /** The contract's description */
  description?: string;
  /**
   * What happens to events that aren't defined in the contract. One of ALLOW_EVENT or BLOCK_EVENT.
   * Optional, defaults to ALLOW_EVENT.
   */
  onUndeclaredSchema?: OnUndeclaredSchema2;
  /** The definitions for the events in the contract. */
  events?: Event2[];
};

export const eventContractCreateSchema: Schema<EventContractCreate> = s.object<EventContractCreate>({
  name: s.string(),
  slug: s.optional(s.string()),
  description: s.optional(s.string()),
  onUndeclaredSchema: s.optional(s.lazy(() => onUndeclaredSchema2Schema)),
  events: s.optional(s.array(s.lazy(() => event2Schema))),
});
