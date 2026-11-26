import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appInfoSchema, type AppInfo } from "./app-info.js";

export type ApplicationsEnvironmentsAppsResponse = {
  value?: AppInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsEnvironmentsAppsResponseSchema: Schema<ApplicationsEnvironmentsAppsResponse> =
  s.object<ApplicationsEnvironmentsAppsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => appInfoSchema))),
    },
    { additionalProperties: s.json() },
  );
