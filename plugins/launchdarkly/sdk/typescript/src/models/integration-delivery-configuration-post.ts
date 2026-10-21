import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntegrationDeliveryConfigurationPost = {
  /** Whether the integration configuration is active. Default value is false. */
  on?: boolean;
  config: Record<string, Record<string, unknown>>;
  /** Tags to associate with the integration */
  tags?: string[];
  /** Name to identify the integration */
  name?: string;
};

export const integrationDeliveryConfigurationPostSchema: Schema<IntegrationDeliveryConfigurationPost> =
  s.object<IntegrationDeliveryConfigurationPost>({
    on: s.optional(s.boolean()),
    config: s.record(s.string(), s.record(s.string(), s.unknown())),
    tags: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
  });
