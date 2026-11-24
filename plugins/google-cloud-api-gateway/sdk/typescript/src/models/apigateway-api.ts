import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/** An API that can be served by one or more Gateways. */
export type ApigatewayApi = {
  /** Output only. Updated time. */
  updateTime?: string;
  /**
   * Optional. Immutable. The name of a Google Managed Service (
   * https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new
   * Service will automatically be created in the same project as this API.
   */
  managedService?: string;
  /** Optional. Display name. */
  displayName?: string;
  /**
   * Identifier. Resource name of the API. Format: projects/{project}/locations/global/apis/{api}
   */
  name?: string;
  /** Output only. State of the API. */
  state?: State;
  /** Output only. Created time. */
  createTime?: string;
  /**
   * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on
   * labels for more details. https://cloud.google.com/compute/docs/labeling-resources
   */
  labels?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayApiSchema: Schema<ApigatewayApi> = s.object<ApigatewayApi>(
  {
    updateTime: s.optional(s.string()),
    managedService: s.optional(s.string()),
    displayName: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    createTime: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
