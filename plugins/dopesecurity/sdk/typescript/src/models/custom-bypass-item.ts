import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A custom application bypass entry defined by the admin */
export type CustomBypassItem = {
  /** The application name being bypassed */
  name: string;
  /** Note about this bypass entry */
  note: string;
  /** The user who last updated this entry */
  updatedBy?: string;
  /** ISO-8601 timestamp when this entry was last updated */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customBypassItemProperties: s.Shape<CustomBypassItem> = {
  name: s.string(),
  note: s.string(),
  updatedBy: s.optional(s.string()),
  updatedAt: s.optional(s.dateTime()),
};

export const customBypassItemInternalSchema: Schema<CustomBypassItem> = s.object<CustomBypassItem>(
  customBypassItemProperties,
  { additionalProperties: s.json() },
);

export const customBypassItemSchema: Schema<CustomBypassItem> = s.lazySchema(() =>
  s.object<CustomBypassItem>(
    {
      ...customBypassItemProperties,
      note: s.string().check(s.maxLength(256)),
    },
    { additionalProperties: s.json() },
  ),
);
