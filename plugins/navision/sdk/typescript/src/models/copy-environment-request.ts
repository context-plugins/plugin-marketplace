import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1BusinessCentralAdministrationCenterEnvironmentsApiSchema,
  type Type1BusinessCentralAdministrationCenterEnvironmentsApi,
} from "./type1-business-central-administration-center-environments-api.js";

export type CopyEnvironmentRequest = {
  /** Name for the new environment */
  environmentName: string;
  /** Type of environment to create */
  type: Type1BusinessCentralAdministrationCenterEnvironmentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const copyEnvironmentRequestSchema: Schema<CopyEnvironmentRequest> = s.object<CopyEnvironmentRequest>(
  {
    environmentName: s.string(),
    type: type1BusinessCentralAdministrationCenterEnvironmentsApiSchema,
  },
  { additionalProperties: s.json() },
);
