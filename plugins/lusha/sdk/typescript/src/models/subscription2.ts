import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypeLushaWebhooksApiSchema,
  type EntityTypeLushaWebhooksApi,
} from "./entity-type-lusha-webhooks-api.js";

export type Subscription2 = {
  entityId: string;
  entityType?: EntityTypeLushaWebhooksApi;
  signalTypes?: string[];
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscription2Properties: s.Shape<Subscription2> = {
  entityId: s.string(),
  entityType: s.optional(s.lazy(() => entityTypeLushaWebhooksApiSchema)),
  signalTypes: s.optional(s.array(s.string())),
  name: s.optional(s.string()),
};

export const subscription2InternalSchema: Schema<Subscription2> = s.object<Subscription2>(
  subscription2Properties,
  { additionalProperties: s.json() },
);

export const subscription2Schema: Schema<Subscription2> = s.lazySchema(() =>
  s.object<Subscription2>(
    {
      ...subscription2Properties,
      entityId: s.string().check(s.maxLength(255)),
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
