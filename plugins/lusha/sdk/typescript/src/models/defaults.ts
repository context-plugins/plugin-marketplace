import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityType2Schema, type EntityType2 } from "./entity-type2.js";

export type Defaults = {
  /** Webhook URL (HTTPS required in production) */
  url: string;
  /** Default entity type for all subscriptions */
  entityType?: EntityType2;
  /** Default signal types for all subscriptions */
  signalTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const defaultsProperties: s.Shape<Defaults> = {
  url: s.string(),
  entityType: s.optional(s.lazy(() => entityType2Schema)),
  signalTypes: s.optional(s.array(s.string())),
};

export const defaultsInternalSchema: Schema<Defaults> = s.object<Defaults>(defaultsProperties, {
  additionalProperties: s.json(),
});

export const defaultsSchema: Schema<Defaults> = s.lazySchema(() =>
  s.object<Defaults>(
    {
      ...defaultsProperties,
      url: s.string().check(s.maxLength(2048), s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
