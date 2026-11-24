import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Definition of a transaction queue for distributing work items */
export type QueueDefinition = {
  /** Unique integer identifier of the queue */
  id?: number;
  /** Display name of the queue */
  name?: string;
  /** Optional description of the queue's purpose */
  description?: string;
  /** Maximum number of automatic retries for failed transactions */
  maxNumberOfRetries?: number;
  /** Whether failed items are automatically requeued for retry */
  acceptAutomaticallyRetry?: boolean;
  /** Whether each item must have a unique reference string */
  enforceUniqueReference?: boolean;
  /** ID of the folder in which this queue resides */
  organizationUnitId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const queueDefinitionProperties: s.Shape<QueueDefinition> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  maxNumberOfRetries: s.optional(s.int()),
  acceptAutomaticallyRetry: s.optional(s.boolean()),
  enforceUniqueReference: s.optional(s.boolean()),
  organizationUnitId: s.optional(s.int()),
  _keysMap: {
    id: "Id",
    name: "Name",
    description: "Description",
    maxNumberOfRetries: "MaxNumberOfRetries",
    acceptAutomaticallyRetry: "AcceptAutomaticallyRetry",
    enforceUniqueReference: "EnforceUniqueReference",
    organizationUnitId: "OrganizationUnitId",
  },
};

export const queueDefinitionInternalSchema: Schema<QueueDefinition> = s.object<QueueDefinition>(
  queueDefinitionProperties,
  { additionalProperties: s.json() },
);

export const queueDefinitionSchema: Schema<QueueDefinition> = s.lazySchema(() =>
  s.object<QueueDefinition>(
    {
      ...queueDefinitionProperties,
      maxNumberOfRetries: s.optional(s.int().check(s.gte(0), s.lte(10))),
    },
    { additionalProperties: s.json() },
  ),
);
