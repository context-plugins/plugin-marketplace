import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The configuration for Agent Registry sync. */
export type GoogleCloudApihubV1AgentRegistrySyncConfig = {
  /**
   * Optional. If true, the MCP data sync to the Agent Registry will be disabled. The default value
   * is false.
   */
  disabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AgentRegistrySyncConfigSchema: Schema<GoogleCloudApihubV1AgentRegistrySyncConfig> =
  s.object<GoogleCloudApihubV1AgentRegistrySyncConfig>(
    {
      disabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
