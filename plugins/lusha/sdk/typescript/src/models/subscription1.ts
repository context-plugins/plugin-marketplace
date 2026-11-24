import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityType3Schema, type EntityType3 } from "./entity-type3.js";

export type Subscription1 = {
  /** Entity ID (always required per item) */
  entityId: string;
  /** Overrides default entityType */
  entityType?: EntityType3;
  /** Overrides default signalTypes */
  signalTypes?: string[];
  /** Overrides default name */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscription1Properties: s.Shape<Subscription1> = {
  entityId: s.string(),
  entityType: s.optional(s.lazy(() => entityType3Schema)),
  signalTypes: s.optional(s.array(s.string())),
  name: s.optional(s.string()),
};

export const subscription1InternalSchema: Schema<Subscription1> = s.object<Subscription1>(
  subscription1Properties,
  { additionalProperties: s.json() },
);

export const subscription1Schema: Schema<Subscription1> = s.lazySchema(() =>
  s.object<Subscription1>(
    {
      ...subscription1Properties,
      entityId: s.string().check(s.maxLength(255)),
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
