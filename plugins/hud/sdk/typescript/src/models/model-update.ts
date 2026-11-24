import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hiddenSchema, type Hidden } from "./unions/hidden.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";
import { requestDefaultsSchema, type RequestDefaults } from "./unions/request-defaults.js";

/** Editable catalog fields. Admin-only (see ModelService.update). */
export type ModelUpdate = {
  name?: NameHudPlatformJobsApi;
  hidden?: Hidden;
  requestDefaults?: RequestDefaults;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelUpdateSchema: Schema<ModelUpdate> = s.object<ModelUpdate>(
  {
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
    hidden: s.optional(s.lazy(() => hiddenSchema)),
    requestDefaults: s.optional(s.lazy(() => requestDefaultsSchema)),
    _keysMap: {
      requestDefaults: "request_defaults",
    },
  },
  { additionalProperties: s.json() },
);
