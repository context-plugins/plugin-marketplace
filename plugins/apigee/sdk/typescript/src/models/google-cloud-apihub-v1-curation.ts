import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Endpoint1Schema,
  type GoogleCloudApihubV1Endpoint1,
} from "./google-cloud-apihub-v1-endpoint1.js";
import {
  googleCloudApihubV1PluginInstanceActionIdSchema,
  type GoogleCloudApihubV1PluginInstanceActionId,
} from "./google-cloud-apihub-v1-plugin-instance-action-id.js";
import { lastExecutionErrorCodeSchema, type LastExecutionErrorCode } from "./last-execution-error-code.js";
import { lastExecutionStateSchema, type LastExecutionState } from "./last-execution-state.js";

/** A curation resource in the API Hub. */
export type GoogleCloudApihubV1Curation = {
  /**
   * Output only. Error message describing the failure, if any, during the last execution of the
   * curation.
   */
  lastExecutionErrorMessage?: string;
  /** Output only. The last execution state of the curation. */
  lastExecutionState?: LastExecutionState;
  /**
   * Output only. The error code of the last execution of the curation. The error code is populated
   * only when the last execution state is failed.
   */
  lastExecutionErrorCode?: LastExecutionErrorCode;
  /**
   * Identifier. The name of the curation. Format:
   * `projects/{project}/locations/{location}/curations/{curation}`
   */
  name?: string;
  /** Required. The display name of the curation. */
  displayName?: string;
  /** Required. The endpoint to be triggered for curation. */
  endpoint?: GoogleCloudApihubV1Endpoint1;
  /** Output only. The time at which the curation was created. */
  createTime?: string;
  /**
   * Output only. The plugin instances and associated actions that are using the curation. Note: A
   * particular curation could be used by multiple plugin instances or multiple actions in a plugin
   * instance.
   */
  pluginInstanceActions?: GoogleCloudApihubV1PluginInstanceActionId[];
  /** Output only. The time at which the curation was last updated. */
  updateTime?: string;
  /** Optional. The description of the curation. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1CurationSchema: Schema<GoogleCloudApihubV1Curation> =
  s.object<GoogleCloudApihubV1Curation>(
    {
      lastExecutionErrorMessage: s.optional(s.string()),
      lastExecutionState: s.optional(s.lazy(() => lastExecutionStateSchema)),
      lastExecutionErrorCode: s.optional(s.lazy(() => lastExecutionErrorCodeSchema)),
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
      endpoint: s.optional(s.lazy(() => googleCloudApihubV1Endpoint1Schema)),
      createTime: s.optional(s.string()),
      pluginInstanceActions: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1PluginInstanceActionIdSchema)),
      ),
      updateTime: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
