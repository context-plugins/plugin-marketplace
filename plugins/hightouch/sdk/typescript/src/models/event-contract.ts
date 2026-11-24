import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSourceSchema, type EventSource } from "./event-source.js";
import { event2Schema, type Event2 } from "./event2.js";
import { onUndeclaredSchema2Schema, type OnUndeclaredSchema2 } from "./on-undeclared-schema2.js";

/** A collection of schemas that are used for validating your events. */
export type EventContract = {
  /** The contract's id */
  id: string;
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
  /** The id of the workspace that the contract belongs to */
  workspaceId: number;
  /** The timestamp when the contract was created */
  createdAt: Date;
  /** The timestamp when the contract was last updated */
  updatedAt: Date;
  /** The Event Sources linked to the Contract. */
  eventSources: EventSource[];
};

export const eventContractSchema: Schema<EventContract> = s.object<EventContract>({
  id: s.string(),
  name: s.string(),
  slug: s.optional(s.string()),
  description: s.optional(s.string()),
  onUndeclaredSchema: s.optional(s.lazy(() => onUndeclaredSchema2Schema)),
  events: s.optional(s.array(s.lazy(() => event2Schema))),
  workspaceId: s.float64(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  eventSources: s.array(s.lazy(() => eventSourceSchema)),
});
