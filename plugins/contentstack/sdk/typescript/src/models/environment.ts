import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { urlInternalSchema, urlSchema, type Url } from "./url.js";

/** A deployment environment for publishing content. */
export type Environment = {
  /** Unique identifier of the environment. */
  uid?: string;
  /** Display name of the environment. */
  name?: string;
  /** List of URL configurations for the environment. */
  urls?: Url[];
  /** ISO 8601 timestamp when the environment was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const environmentProperties: s.Shape<Environment> = {
  uid: s.optional(s.string()),
  name: s.optional(s.string()),
  urls: s.optional(s.array(s.lazy(() => urlInternalSchema))),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    createdAt: "created_at",
  },
};

export const environmentInternalSchema: Schema<Environment> = s.object<Environment>(environmentProperties, {
  additionalProperties: s.json(),
});

export const environmentSchema: Schema<Environment> = s.lazySchema(() =>
  s.object<Environment>(
    {
      ...environmentProperties,
      urls: s.optional(s.array(s.lazy(() => urlSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
