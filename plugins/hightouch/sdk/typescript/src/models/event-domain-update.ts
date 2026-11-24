import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventDomainComponentSchema, type EventDomainComponent } from "./event-domain-component.js";
import { eventSchema, type Event } from "./event.js";
import { onUndeclaredSchemaSchema, type OnUndeclaredSchema } from "./on-undeclared-schema.js";

/** The input for updating a Domain */
export type EventDomainUpdate = {
  /** The domain's name */
  name?: string;
  /** The domain's slug. If not specified, one will be generated. */
  slug?: string;
  /** The domain's description */
  description?: string;
  /**
   * What happens to events that aren't defined in the domain. One of ALLOW_EVENT or BLOCK_EVENT.
   * Optional, defaults to ALLOW_EVENT.
   */
  onUndeclaredSchema?: OnUndeclaredSchema;
  /** The definitions for the events in the domain. */
  events?: Event[];
  /** The reusable components defined in the domain. */
  components?: EventDomainComponent[];
};

export const eventDomainUpdateSchema: Schema<EventDomainUpdate> = s.object<EventDomainUpdate>({
  name: s.optional(s.string()),
  slug: s.optional(s.string()),
  description: s.optional(s.string()),
  onUndeclaredSchema: s.optional(s.lazy(() => onUndeclaredSchemaSchema)),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  components: s.optional(s.array(s.lazy(() => eventDomainComponentSchema))),
});
