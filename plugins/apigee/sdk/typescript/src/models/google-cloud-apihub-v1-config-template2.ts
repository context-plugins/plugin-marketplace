import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AuthConfigTemplate2Schema,
  type GoogleCloudApihubV1AuthConfigTemplate2,
} from "./google-cloud-apihub-v1-auth-config-template2.js";
import {
  googleCloudApihubV1ConfigVariableTemplateSchema,
  type GoogleCloudApihubV1ConfigVariableTemplate,
} from "./google-cloud-apihub-v1-config-variable-template.js";

/** Optional. The configuration template for the plugin. */
export type GoogleCloudApihubV1ConfigTemplate2 = {
  /** Optional. The list of additional configuration variables for the plugin's configuration. */
  additionalConfigTemplate?: GoogleCloudApihubV1ConfigVariableTemplate[];
  /** Optional. The authentication template for the plugin. */
  authConfigTemplate?: GoogleCloudApihubV1AuthConfigTemplate2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ConfigTemplate2Schema: Schema<GoogleCloudApihubV1ConfigTemplate2> =
  s.object<GoogleCloudApihubV1ConfigTemplate2>(
    {
      additionalConfigTemplate: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1ConfigVariableTemplateSchema)),
      ),
      authConfigTemplate: s.optional(s.lazy(() => googleCloudApihubV1AuthConfigTemplate2Schema)),
    },
    { additionalProperties: s.json() },
  );
