import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry.
 */
export type GoogleCloudApihubV1AgentRegistrySyncConfig1 = {
  /**
   * Optional. If true, the MCP data sync to the Agent Registry will be disabled. The default value
   * is false.
   */
  disabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AgentRegistrySyncConfig1Schema: Schema<GoogleCloudApihubV1AgentRegistrySyncConfig1> =
  s.object<GoogleCloudApihubV1AgentRegistrySyncConfig1>(
    {
      disabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
