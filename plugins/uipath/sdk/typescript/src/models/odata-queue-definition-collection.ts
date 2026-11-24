import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  queueDefinitionInternalSchema,
  queueDefinitionSchema,
  type QueueDefinition,
} from "./queue-definition.js";

/** OData collection response containing queue definitions */
export type ODataQueueDefinitionCollection = {
  value?: QueueDefinition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const oDataQueueDefinitionCollectionProperties: s.Shape<ODataQueueDefinitionCollection> = {
  value: s.optional(s.array(s.lazy(() => queueDefinitionInternalSchema))),
};

export const oDataQueueDefinitionCollectionInternalSchema: Schema<ODataQueueDefinitionCollection> =
  s.object<ODataQueueDefinitionCollection>(oDataQueueDefinitionCollectionProperties, {
    additionalProperties: s.json(),
  });

export const oDataQueueDefinitionCollectionSchema: Schema<ODataQueueDefinitionCollection> = s.lazySchema(() =>
  s.object<ODataQueueDefinitionCollection>(
    {
      ...oDataQueueDefinitionCollectionProperties,
      value: s.optional(s.array(s.lazy(() => queueDefinitionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
