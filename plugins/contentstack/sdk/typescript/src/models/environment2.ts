import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusContentstackEnvironmentsApiSchema,
  type StatusContentstackEnvironmentsApi,
} from "./status-contentstack-environments-api.js";

/** A deployment environment within a Launch project. */
export type Environment2 = {
  /** Unique identifier of the environment. */
  uid?: string;
  /** Display name of the environment. */
  name?: string;
  /** The custom domain assigned to this environment. */
  domain?: string;
  /** Current status of the environment. */
  status?: StatusContentstackEnvironmentsApi;
  /** ISO 8601 timestamp when the environment was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environment2Schema: Schema<Environment2> = s.object<Environment2>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    domain: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusContentstackEnvironmentsApiSchema)),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
