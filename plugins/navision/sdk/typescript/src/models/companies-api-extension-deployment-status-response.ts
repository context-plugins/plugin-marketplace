import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  extensionDeploymentStatusSchema,
  type ExtensionDeploymentStatus,
} from "./extension-deployment-status.js";

export type CompaniesApiExtensionDeploymentStatusResponse = {
  value?: ExtensionDeploymentStatus[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiExtensionDeploymentStatusResponseSchema: Schema<CompaniesApiExtensionDeploymentStatusResponse> =
  s.object<CompaniesApiExtensionDeploymentStatusResponse>(
    {
      value: s.optional(s.array(s.lazy(() => extensionDeploymentStatusSchema))),
    },
    { additionalProperties: s.json() },
  );
