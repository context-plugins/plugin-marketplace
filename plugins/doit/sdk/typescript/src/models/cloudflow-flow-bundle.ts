import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudflowBundleFlowInternalSchema,
  cloudflowBundleFlowSchema,
  type CloudflowBundleFlow,
} from "./cloudflow-bundle-flow.js";
import {
  cloudflowBundleRequirementsInternalSchema,
  cloudflowBundleRequirementsSchema,
  type CloudflowBundleRequirements,
} from "./cloudflow-bundle-requirements.js";

/**
 * Portable, tenant-neutral export of one or more flows. Contains no credentials, tenant
 * identifiers, schedules, or execution state; tenant-scoped references are declared under
 * `requirements` and appear inside node parameters as `$req:<section>/<key>` tokens (subflow
 * references as `$bundle:flows/<flowKey>`).
 */
export type CloudflowFlowBundle = {
  /** @default "cloudflow.doit.com/FlowBundle" */
  kind?: "cloudflow.doit.com/FlowBundle";
  /**
   * Bundle format version. The server exports the newest version and accepts every version it has
   * ever shipped.
   *
   * @default 1
   */
  schemaVersion?: 1;
  /** Informational export timestamp; ignored on import. */
  exportedAt?: Date | null;
  /** Key (into `flows`) of the flow that was exported; the rest are its subflows. */
  rootFlow: string;
  flows: CloudflowBundleFlow[];
  /**
   * Tenant-scoped resources the bundle needs; each is bound to a target-tenant resource at import.
   */
  requirements?: CloudflowBundleRequirements;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowFlowBundleProperties: s.Shape<CloudflowFlowBundle> = {
  kind: s.defaulted(s.literal("cloudflow.doit.com/FlowBundle"), "cloudflow.doit.com/FlowBundle"),
  schemaVersion: s.defaulted(s.literal(1), 1),
  exportedAt: s.optionalNullable(s.dateTime()),
  rootFlow: s.string(),
  flows: s.array(s.lazy(() => cloudflowBundleFlowInternalSchema)),
  requirements: s.optional(s.lazy(() => cloudflowBundleRequirementsInternalSchema)),
};

export const cloudflowFlowBundleInternalSchema: Schema<CloudflowFlowBundle> = s.object<CloudflowFlowBundle>(
  cloudflowFlowBundleProperties,
  { additionalProperties: s.json() },
);

export const cloudflowFlowBundleSchema: Schema<CloudflowFlowBundle> = s.lazySchema(() =>
  s.object<CloudflowFlowBundle>(
    {
      ...cloudflowFlowBundleProperties,
      flows: s.array(s.lazy(() => cloudflowBundleFlowSchema)).check(s.maxLength(20)),
      requirements: s.optional(s.lazy(() => cloudflowBundleRequirementsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
