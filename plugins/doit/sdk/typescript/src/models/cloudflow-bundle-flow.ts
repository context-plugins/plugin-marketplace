import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowBundleNodeSchema, type CloudflowBundleNode } from "./cloudflow-bundle-node.js";
import { cloudflowBundleVariableSchema, type CloudflowBundleVariable } from "./cloudflow-bundle-variable.js";
import { unsupportedReferenceSchema, type UnsupportedReference } from "./unsupported-reference.js";

export type CloudflowBundleFlow = {
  /** Bundle-local flow key. Opaque — the server generates new IDs at import. */
  key: string;
  name: string;
  description?: string;
  tags?: Record<string, unknown>;
  triggerType?: string | null;
  /** Key of this flow's entry node. */
  firstNode: string;
  nodes: CloudflowBundleNode[];
  localVariables?: CloudflowBundleVariable[];
  /**
   * Tenant-scoped references removed at export (policy IDs, Slack channels); import flags the
   * affected nodes incomplete.
   */
  unsupportedReferences?: UnsupportedReference[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowBundleFlowProperties: s.Shape<CloudflowBundleFlow> = {
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  tags: s.optional(s.record(s.string(), s.unknown())),
  triggerType: s.optionalNullable(s.string()),
  firstNode: s.string(),
  nodes: s.array(s.lazy(() => cloudflowBundleNodeSchema)),
  localVariables: s.optional(s.array(s.lazy(() => cloudflowBundleVariableSchema))),
  unsupportedReferences: s.optional(s.array(s.lazy(() => unsupportedReferenceSchema))),
};

export const cloudflowBundleFlowInternalSchema: Schema<CloudflowBundleFlow> = s.object<CloudflowBundleFlow>(
  cloudflowBundleFlowProperties,
  { additionalProperties: s.json() },
);

export const cloudflowBundleFlowSchema: Schema<CloudflowBundleFlow> = s.lazySchema(() =>
  s.object<CloudflowBundleFlow>(
    {
      ...cloudflowBundleFlowProperties,
      nodes: s.array(s.lazy(() => cloudflowBundleNodeSchema)).check(s.maxLength(150)),
      localVariables: s.optional(s.array(s.lazy(() => cloudflowBundleVariableSchema)).check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
