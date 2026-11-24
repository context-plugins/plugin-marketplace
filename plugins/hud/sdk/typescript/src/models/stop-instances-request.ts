import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopInstancesRequest = {
  registryId: string;
  instanceIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stopInstancesRequestProperties: s.Shape<StopInstancesRequest> = {
  registryId: s.string(),
  instanceIds: s.array(s.string()),
  _keysMap: {
    registryId: "registry_id",
    instanceIds: "instance_ids",
  },
};

export const stopInstancesRequestInternalSchema: Schema<StopInstancesRequest> =
  s.object<StopInstancesRequest>(stopInstancesRequestProperties, { additionalProperties: s.json() });

export const stopInstancesRequestSchema: Schema<StopInstancesRequest> = s.lazySchema(() =>
  s.object<StopInstancesRequest>(
    {
      ...stopInstancesRequestProperties,
      instanceIds: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
