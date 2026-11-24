import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeRouterConfigurationRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId: string;
  /**
   * Identifies the router by a combination of vendor, platform, and software version. For example,
   * CiscoSystemsInc-2900SeriesRouters-IOS124.
   */
  routerTypeIdentifier?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeRouterConfigurationRequestSchema: Schema<DescribeRouterConfigurationRequest> =
  s.object<DescribeRouterConfigurationRequest>(
    {
      virtualInterfaceId: s.string(),
      routerTypeIdentifier: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
