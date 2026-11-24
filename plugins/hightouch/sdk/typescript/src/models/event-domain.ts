import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventDomainComponentSchema, type EventDomainComponent } from "./event-domain-component.js";
import { eventSourceSchema, type EventSource } from "./event-source.js";
import { eventSchema, type Event } from "./event.js";
import { onUndeclaredSchemaSchema, type OnUndeclaredSchema } from "./on-undeclared-schema.js";

/** A collection of event and component schemas used for validating events. */
export type EventDomain = {
  /** The domain's id */
  id: string;
  /** The domain's name */
  name: string;
  /** The domain's slug. If not specified, one will be generated. */
  slug?: string;
  /** The domain's description */
  description?: string;
  /**
   * What happens to events that aren't defined in the domain. One of ALLOW_EVENT or BLOCK_EVENT.
   * Optional, defaults to ALLOW_EVENT.
   */
  onUndeclaredSchema?: OnUndeclaredSchema;
  /**
   * Path into the event payload where the schema version is read/written. Used by codegen wrappers
   * to inject the version they were generated from.
   */
  schemaVersionPath?: string[];
  /** The definitions for the events in the domain. */
  events?: Event[];
  /** The reusable components defined in the domain. */
  components?: EventDomainComponent[];
  /** The id of the workspace that the domain belongs to */
  workspaceId: number;
  /** The timestamp when the domain was created */
  createdAt: Date;
  /** The timestamp when the domain was last updated */
  updatedAt: Date;
  /** The Event Sources linked to the Domain. */
  eventSources: EventSource[];
};

export const eventDomainSchema: Schema<EventDomain> = s.object<EventDomain>({
  id: s.string(),
  name: s.string(),
  slug: s.optional(s.string()),
  description: s.optional(s.string()),
  onUndeclaredSchema: s.optional(s.lazy(() => onUndeclaredSchemaSchema)),
  schemaVersionPath: s.optional(s.array(s.string())),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  components: s.optional(s.array(s.lazy(() => eventDomainComponentSchema))),
  workspaceId: s.float64(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  eventSources: s.array(s.lazy(() => eventSourceSchema)),
});
