import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routerTypeSchema, type RouterType } from "./router-type.js";

export type DescribeRouterConfigurationResponse = {
  /** The customer router configuration. */
  customerRouterConfig?: string;
  router?: RouterType;
  /** The ID assigned to the virtual interface. */
  virtualInterfaceId?: string;
  /** Provides the details about a virtual interface's router. */
  virtualInterfaceName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeRouterConfigurationResponseSchema: Schema<DescribeRouterConfigurationResponse> =
  s.object<DescribeRouterConfigurationResponse>(
    {
      customerRouterConfig: s.optional(s.string()),
      router: s.optional(s.lazy(() => routerTypeSchema)),
      virtualInterfaceId: s.optional(s.string()),
      virtualInterfaceName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
