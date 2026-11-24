import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appSyncRuntimeSchema, type AppSyncRuntime } from "./app-sync-runtime.js";

export type V1DataplaneEvaluatecodeRequest = {
  runtime: AppSyncRuntime;
  /**
   * The code definition to be evaluated. Note that code and runtime are both required for this
   * action. The runtime value must be APPSYNC_JS.
   */
  code: string;
  /**
   * The map that holds all of the contextual information for your resolver invocation. A context is
   * required for this action.
   */
  context: string;
  /**
   * The function within the code to be evaluated. If provided, the valid values are request and
   * response.
   */
  function?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DataplaneEvaluatecodeRequestSchema: Schema<V1DataplaneEvaluatecodeRequest> =
  s.object<V1DataplaneEvaluatecodeRequest>(
    {
      runtime: appSyncRuntimeSchema,
      code: s.string(),
      context: s.string(),
      function: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
