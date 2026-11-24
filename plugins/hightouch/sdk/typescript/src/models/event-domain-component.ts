import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reusable schema fragments that can be imported by event schemas. */
export type EventDomainComponent = {
  /**
   * The component's id. Omit when creating. On update, a component matches an existing one by id
   * when supplied, otherwise by (name, version); include the id to rename a component in place.
   */
  id?: string;
  /**
   * The component's slug. Optional when creating; generated from the name if omitted. Immutable
   * after creation; an update that sends a different slug for an existing component is rejected.
   */
  slug?: string;
  /** The component's name. Required. */
  name: string;
  /**
   * The component's version. Defaults to "default", optional. On update, an omitted version keeps
   * the stored value when the component is matched by id; without an id, an omitted version only
   * matches the stored "default" version, and the request is rejected if the name exists only under
   * other versions.
   */
  version?: string;
  /**
   * The component's description. On update, an omitted description keeps the stored value; send an
   * empty string to clear it.
   */
  description?: string;
  /** The JSON schema fragment the component contributes. Required. */
  schema: Record<string, unknown>;
  /** Read-only: the slugs of the components this component imports (derived from its `$ref`s). */
  imports?: string[];
};

export const eventDomainComponentSchema: Schema<EventDomainComponent> = s.object<EventDomainComponent>({
  id: s.optional(s.string()),
  slug: s.optional(s.string()),
  name: s.string(),
  version: s.optional(s.string()),
  description: s.optional(s.string()),
  schema: s.record(s.string(), s.unknown()),
  imports: s.optional(s.array(s.string())),
});
