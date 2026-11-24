import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customBypassRequestItemInternalSchema,
  customBypassRequestItemSchema,
  type CustomBypassRequestItem,
} from "./custom-bypass-request-item.js";
import { defaultBypassItemSchema, type DefaultBypassItem } from "./default-bypass-item.js";

/**
 * Payload for upserting URL bypass entries. At least one of `custom` or `default` must be provided.
 * Unmentioned custom entries are preserved. Unknown default entry names are silently ignored.
 */
export type UrlBypassUpdateBody = {
  /** Custom URL entries to upsert (matched by name). */
  custom?: CustomBypassRequestItem[];
  /** Default URL entries with updated toggle states (matched by name). */
  default?: DefaultBypassItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const urlBypassUpdateBodyProperties: s.Shape<UrlBypassUpdateBody> = {
  custom: s.optional(s.array(s.lazy(() => customBypassRequestItemInternalSchema))),
  default: s.optional(s.array(s.lazy(() => defaultBypassItemSchema))),
};

export const urlBypassUpdateBodyInternalSchema: Schema<UrlBypassUpdateBody> = s.object<UrlBypassUpdateBody>(
  urlBypassUpdateBodyProperties,
  { additionalProperties: s.json() },
);

export const urlBypassUpdateBodySchema: Schema<UrlBypassUpdateBody> = s.lazySchema(() =>
  s.object<UrlBypassUpdateBody>(
    {
      ...urlBypassUpdateBodyProperties,
      custom: s.optional(s.array(s.lazy(() => customBypassRequestItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
