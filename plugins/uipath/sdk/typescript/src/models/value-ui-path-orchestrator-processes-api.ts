import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueUiPathOrchestratorProcessesApi = {
  /** Unique process identifier */
  id?: number;
  /** Process display name */
  name?: string;
  /** Unique GUID key for the process */
  key?: string;
  /** Process description */
  description?: string;
  /** Version of the underlying package */
  processVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorProcessesApiSchema: Schema<ValueUiPathOrchestratorProcessesApi> =
  s.object<ValueUiPathOrchestratorProcessesApi>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      key: s.optional(s.string()),
      description: s.optional(s.string()),
      processVersion: s.optional(s.string()),
      _keysMap: {
        id: "Id",
        name: "Name",
        key: "Key",
        description: "Description",
        processVersion: "ProcessVersion",
      },
    },
    { additionalProperties: s.json() },
  );
