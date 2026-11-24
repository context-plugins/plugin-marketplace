import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1CurationConfig2Schema,
  type GoogleCloudApihubV1CurationConfig2,
} from "./google-cloud-apihub-v1-curation-config2.js";
import {
  googleCloudApihubV1ExecutionStatus1Schema,
  type GoogleCloudApihubV1ExecutionStatus1,
} from "./google-cloud-apihub-v1-execution-status1.js";
import {
  googleCloudApihubV1ResourceConfig1Schema,
  type GoogleCloudApihubV1ResourceConfig1,
} from "./google-cloud-apihub-v1-resource-config1.js";
import { state6ApigeeProjectsApiSchema, type State6ApigeeProjectsApi } from "./state6-apigee-projects-api.js";

/** PluginInstanceAction represents an action which can be executed in the plugin instance. */
export type GoogleCloudApihubV1PluginInstanceAction = {
  /**
   * Optional. The time zone for the schedule cron expression. If not provided, UTC will be used.
   */
  scheduleTimeZone?: string;
  /**
   * Required. This should map to one of the action id specified in actions_config in the plugin.
   */
  actionId?: string;
  /**
   * Optional. The schedule for this plugin instance action. This can only be set if the plugin
   * supports API_HUB_SCHEDULE_TRIGGER mode for this action.
   */
  scheduleCronExpression?: string;
  /** Output only. The current state of the plugin action in the plugin instance. */
  state?: State6ApigeeProjectsApi;
  /**
   * Optional. The service account used to publish data. Note, the service account will only be
   * accepted for non-Google Cloud plugins like OPDK.
   */
  serviceAccount?: string;
  /**
   * Optional. This configuration should be provided if the plugin action is publishing data to API
   * hub curate layer.
   */
  curationConfig?: GoogleCloudApihubV1CurationConfig2;
  /**
   * Optional. The execution information for the plugin instance action done corresponding to an API
   * hub instance.
   */
  hubInstanceAction?: GoogleCloudApihubV1ExecutionStatus1;
  /**
   * Output only. The configuration of resources created for a given plugin instance action. Note
   * these will be returned only in case of non-Google Cloud plugins like OPDK.
   */
  resourceConfig?: GoogleCloudApihubV1ResourceConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PluginInstanceActionSchema: Schema<GoogleCloudApihubV1PluginInstanceAction> =
  s.object<GoogleCloudApihubV1PluginInstanceAction>(
    {
      scheduleTimeZone: s.optional(s.string()),
      actionId: s.optional(s.string()),
      scheduleCronExpression: s.optional(s.string()),
      state: s.optional(s.lazy(() => state6ApigeeProjectsApiSchema)),
      serviceAccount: s.optional(s.string()),
      curationConfig: s.optional(s.lazy(() => googleCloudApihubV1CurationConfig2Schema)),
      hubInstanceAction: s.optional(s.lazy(() => googleCloudApihubV1ExecutionStatus1Schema)),
      resourceConfig: s.optional(s.lazy(() => googleCloudApihubV1ResourceConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
