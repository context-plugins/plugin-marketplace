import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";
import {
  typeAwsCodeBuildFleetApiSchema,
  type TypeAwsCodeBuildFleetApi,
} from "./type-aws-code-build-fleet-api.js";

export type FleetProxyRule = {
  /** The type of proxy rule. */
  type: TypeAwsCodeBuildFleetApi;
  /** The behavior of the proxy rule. */
  effect: Effect;
  /** The destination of the proxy rule. */
  entities: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fleetProxyRuleSchema: Schema<FleetProxyRule> = s.object<FleetProxyRule>(
  {
    type: typeAwsCodeBuildFleetApiSchema,
    effect: effectSchema,
    entities: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
