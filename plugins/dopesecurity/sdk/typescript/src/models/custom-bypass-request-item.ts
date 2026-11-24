import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A custom bypass entry for write operations. */
export type CustomBypassRequestItem = {
  /** The name of the entity to bypass (application name or URL pattern) */
  name: string;
  /** Optional note about this bypass entry */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customBypassRequestItemProperties: s.Shape<CustomBypassRequestItem> = {
  name: s.string(),
  note: s.optional(s.string()),
};

export const customBypassRequestItemInternalSchema: Schema<CustomBypassRequestItem> =
  s.object<CustomBypassRequestItem>(customBypassRequestItemProperties, { additionalProperties: s.json() });

export const customBypassRequestItemSchema: Schema<CustomBypassRequestItem> = s.lazySchema(() =>
  s.object<CustomBypassRequestItem>(
    {
      ...customBypassRequestItemProperties,
      name: s.string().check(s.maxLength(256)),
      note: s.optional(s.string().check(s.maxLength(256))),
    },
    { additionalProperties: s.json() },
  ),
);
