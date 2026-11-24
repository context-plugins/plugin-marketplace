import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionTypeSchema, type ActionType } from "./action-type.js";

/** The configuration of resources created for a given plugin instance action. */
export type GoogleCloudApihubV1ResourceConfig = {
  /**
   * Output only. The pubsub topic to publish the data to. Format is
   * projects/{project}/topics/{topic}
   */
  pubsubTopic?: string;
  /** Output only. The type of the action. */
  actionType?: ActionType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ResourceConfigSchema: Schema<GoogleCloudApihubV1ResourceConfig> =
  s.object<GoogleCloudApihubV1ResourceConfig>(
    {
      pubsubTopic: s.optional(s.string()),
      actionType: s.optional(s.lazy(() => actionTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
