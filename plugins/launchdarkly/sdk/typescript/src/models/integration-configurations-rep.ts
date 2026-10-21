import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { capabilityConfigRepSchema, type CapabilityConfigRep } from "./capability-config-rep.js";
import { linkSchema, type Link } from "./link.js";

export type IntegrationConfigurationsRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The unique identifier for this integration configuration */
  id: string;
  /** A human-friendly name for the integration */
  name: string;
  createdAt?: number;
  /** The type of integration */
  integrationKey?: string;
  /** An array of tags for this integration */
  tags?: string[];
  /** Whether the integration is currently active */
  enabled?: boolean;
  access?: Access;
  /**
   * Details on configuration for an integration of this type. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code> for a full
   * list of fields for each integration.
   */
  configValues?: Record<string, Record<string, unknown>>;
  capabilityConfig?: CapabilityConfigRep;
};

export const integrationConfigurationsRepSchema: Schema<IntegrationConfigurationsRep> =
  s.object<IntegrationConfigurationsRep>({
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    id: s.string(),
    name: s.string(),
    createdAt: s.optional(s.int()),
    integrationKey: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    enabled: s.optional(s.boolean()),
    access: s.optional(s.lazy(() => accessSchema)),
    configValues: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    capabilityConfig: s.optional(s.lazy(() => capabilityConfigRepSchema)),
    _keysMap: {
      links: "_links",
      id: "_id",
      createdAt: "_createdAt",
      integrationKey: "_integrationKey",
      access: "_access",
    },
  });
