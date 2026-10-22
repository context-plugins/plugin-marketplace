import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilityConfigPostSchema, type CapabilityConfigPost } from "./capability-config-post.js";

export type IntegrationConfigurationPost = {
  /** The name of the integration configuration */
  name: string;
  /** Whether the integration configuration is enabled. If omitted, defaults to true */
  enabled?: boolean;
  /** Tags for the integration */
  tags?: string[];
  /**
   * The unique set of fields required to configure the integration. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code> at
   * https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of
   * fields for the integration you wish to configure.
   */
  configValues: Record<string, Record<string, unknown>>;
  capabilityConfig?: CapabilityConfigPost;
};

export const integrationConfigurationPostSchema: Schema<IntegrationConfigurationPost> =
  s.object<IntegrationConfigurationPost>({
    name: s.string(),
    enabled: s.optional(s.boolean()),
    tags: s.optional(s.array(s.string())),
    configValues: s.record(s.string(), s.record(s.string(), s.unknown())),
    capabilityConfig: s.optional(s.lazy(() => capabilityConfigPostSchema)),
  });
