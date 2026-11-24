import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudflowImportCreatedResourceSchema,
  type CloudflowImportCreatedResource,
} from "./cloudflow-import-created-resource.js";
import { flowSchema, type Flow } from "./flow.js";

export type CloudflowImportFlowsResult = {
  flows: Flow[];
  createdTables?: CloudflowImportCreatedResource[];
  createdGlobalVariables?: CloudflowImportCreatedResource[];
  /** Side resources created before a failed import that best-effort rollback could not remove. */
  orphanedResources?: CloudflowImportCreatedResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowImportFlowsResultSchema: Schema<CloudflowImportFlowsResult> =
  s.object<CloudflowImportFlowsResult>(
    {
      flows: s.array(s.lazy(() => flowSchema)),
      createdTables: s.optional(s.array(s.lazy(() => cloudflowImportCreatedResourceSchema))),
      createdGlobalVariables: s.optional(s.array(s.lazy(() => cloudflowImportCreatedResourceSchema))),
      orphanedResources: s.optional(s.array(s.lazy(() => cloudflowImportCreatedResourceSchema))),
    },
    { additionalProperties: s.json() },
  );
