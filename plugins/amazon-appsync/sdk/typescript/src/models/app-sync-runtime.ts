import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppSyncRuntime = {
  /**
   * The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.
   *
   * @default "APPSYNC_JS"
   */
  name?: "APPSYNC_JS";
  /** The version of the runtime to use. Currently, the only allowed version is 1.0.0. */
  runtimeVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appSyncRuntimeSchema: Schema<AppSyncRuntime> = s.object<AppSyncRuntime>(
  {
    name: s.defaulted(s.literal("APPSYNC_JS"), "APPSYNC_JS"),
    runtimeVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
