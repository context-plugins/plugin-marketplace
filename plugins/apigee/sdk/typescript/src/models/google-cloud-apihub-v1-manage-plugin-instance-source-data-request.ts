import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { dataType4Schema, type DataType4 } from "./data-type4.js";

/** The ManagePluginInstanceSourceData method's request. */
export type GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest = {
  /** Required. Relative path of data being managed for a given plugin instance. */
  relativePath?: string;
  /** Required. Type of data to be managed. */
  dataType?: DataType4;
  /** Required. Data to be managed. */
  data?: string;
  /** Required. Action to be performed. */
  action?: Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ManagePluginInstanceSourceDataRequestSchema: Schema<GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest> =
  s.object<GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest>(
    {
      relativePath: s.optional(s.string()),
      dataType: s.optional(s.lazy(() => dataType4Schema)),
      data: s.optional(s.string()),
      action: s.optional(s.lazy(() => actionSchema)),
    },
    { additionalProperties: s.json() },
  );
