import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Link object containing a link to the resource, self reference. */
export type ResourceLink = {
  /** URL of the resource. */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceLinkSchema: Schema<ResourceLink> = s.object<ResourceLink>(
  {
    self: s.string(),
  },
  { additionalProperties: s.json() },
);
