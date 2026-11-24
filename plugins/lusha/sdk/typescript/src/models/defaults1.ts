import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypeLushaWebhooksApiSchema,
  type EntityTypeLushaWebhooksApi,
} from "./entity-type-lusha-webhooks-api.js";

export type Defaults1 = {
  url: string;
  entityType?: EntityTypeLushaWebhooksApi;
  /**
   * Default signal types for all subscriptions. Available signals depend on entity type. Please
   * refer to the Signal Options endpoint for a full list of available signals.
   */
  signalTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const defaults1Properties: s.Shape<Defaults1> = {
  url: s.string(),
  entityType: s.optional(s.lazy(() => entityTypeLushaWebhooksApiSchema)),
  signalTypes: s.optional(s.array(s.string())),
};

export const defaults1InternalSchema: Schema<Defaults1> = s.object<Defaults1>(defaults1Properties, {
  additionalProperties: s.json(),
});

export const defaults1Schema: Schema<Defaults1> = s.lazySchema(() =>
  s.object<Defaults1>(
    {
      ...defaults1Properties,
      url: s.string().check(s.maxLength(2048), s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
