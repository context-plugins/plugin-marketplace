import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionTypeSchema, type ActionType } from "./action-type.js";

/**
 * Output only. The configuration of resources created for a given plugin instance action. Note
 * these will be returned only in case of non-Google Cloud plugins like OPDK.
 */
export type GoogleCloudApihubV1ResourceConfig1 = {
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

export const googleCloudApihubV1ResourceConfig1Schema: Schema<GoogleCloudApihubV1ResourceConfig1> =
  s.object<GoogleCloudApihubV1ResourceConfig1>(
    {
      pubsubTopic: s.optional(s.string()),
      actionType: s.optional(s.lazy(() => actionTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
