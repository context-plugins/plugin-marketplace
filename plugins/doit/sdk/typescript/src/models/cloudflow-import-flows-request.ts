import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bindingsSchema, type Bindings } from "./bindings.js";
import {
  cloudflowFlowBundleInternalSchema,
  cloudflowFlowBundleSchema,
  type CloudflowFlowBundle,
} from "./cloudflow-flow-bundle.js";
import { optionsSchema, type Options } from "./options.js";

export type CloudflowImportFlowsRequest = {
  /**
   * Portable, tenant-neutral export of one or more flows. Contains no credentials, tenant
   * identifiers, schedules, or execution state; tenant-scoped references are declared under
   * `requirements` and appear inside node parameters as `$req:<section>/<key>` tokens (subflow
   * references as `$bundle:flows/<flowKey>`).
   */
  bundle: CloudflowFlowBundle;
  /**
   * Requirement key → target-tenant resource ID. Keys must be declared in the bundle's
   * requirements. Run with `?dryRun=true` first to list required keys and candidate IDs.
   */
  bindings?: Bindings;
  options?: Options;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowImportFlowsRequestProperties: s.Shape<CloudflowImportFlowsRequest> = {
  bundle: cloudflowFlowBundleInternalSchema,
  bindings: s.optional(s.lazy(() => bindingsSchema)),
  options: s.optional(s.lazy(() => optionsSchema)),
};

export const cloudflowImportFlowsRequestInternalSchema: Schema<CloudflowImportFlowsRequest> =
  s.object<CloudflowImportFlowsRequest>(cloudflowImportFlowsRequestProperties, {
    additionalProperties: s.json(),
  });

export const cloudflowImportFlowsRequestSchema: Schema<CloudflowImportFlowsRequest> = s.lazySchema(() =>
  s.object<CloudflowImportFlowsRequest>(
    {
      ...cloudflowImportFlowsRequestProperties,
      bundle: cloudflowFlowBundleSchema,
    },
    { additionalProperties: s.json() },
  ),
);
