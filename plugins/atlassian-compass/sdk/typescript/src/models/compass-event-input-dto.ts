import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassCreateAlertEventInputDtoSchema,
  type CompassCreateAlertEventInputDto,
} from "./compass-create-alert-event-input-dto.js";
import {
  compassCreateBuildEventInputDtoSchema,
  type CompassCreateBuildEventInputDto,
} from "./compass-create-build-event-input-dto.js";
import {
  compassCreateCustomEventInputDtoSchema,
  type CompassCreateCustomEventInputDto,
} from "./compass-create-custom-event-input-dto.js";
import {
  compassCreateDeploymentEventInputDtoSchema,
  type CompassCreateDeploymentEventInputDto,
} from "./compass-create-deployment-event-input-dto.js";
import {
  compassCreateFlagEventInputDtoSchema,
  type CompassCreateFlagEventInputDto,
} from "./compass-create-flag-event-input-dto.js";
import {
  compassCreateIncidentEventInputDtoSchema,
  type CompassCreateIncidentEventInputDto,
} from "./compass-create-incident-event-input-dto.js";
import {
  compassCreateLifecycleEventInputDtoSchema,
  type CompassCreateLifecycleEventInputDto,
} from "./compass-create-lifecycle-event-input-dto.js";
import {
  compassCreatePullRequestEventInputDtoSchema,
  type CompassCreatePullRequestEventInputDto,
} from "./compass-create-pull-request-event-input-dto.js";
import {
  compassCreatePushEventInputDtoSchema,
  type CompassCreatePushEventInputDto,
} from "./compass-create-push-event-input-dto.js";
import {
  compassCreateVulnerabilityEventInputDtoSchema,
  type CompassCreateVulnerabilityEventInputDto,
} from "./compass-create-vulnerability-event-input-dto.js";

/** The type of event. One and only one of the fields in this input type must be provided. */
export type CompassEventInputDto = {
  deployment?: CompassCreateDeploymentEventInputDto | null;
  build?: CompassCreateBuildEventInputDto | null;
  incident?: CompassCreateIncidentEventInputDto | null;
  flag?: CompassCreateFlagEventInputDto | null;
  alert?: CompassCreateAlertEventInputDto | null;
  lifecycle?: CompassCreateLifecycleEventInputDto | null;
  custom?: CompassCreateCustomEventInputDto | null;
  push?: CompassCreatePushEventInputDto | null;
  pullRequest?: CompassCreatePullRequestEventInputDto | null;
  vulnerability?: CompassCreateVulnerabilityEventInputDto | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassEventInputDtoSchema: Schema<CompassEventInputDto> = s.object<CompassEventInputDto>(
  {
    deployment: s.optionalNullable(s.lazy(() => compassCreateDeploymentEventInputDtoSchema)),
    build: s.optionalNullable(s.lazy(() => compassCreateBuildEventInputDtoSchema)),
    incident: s.optionalNullable(s.lazy(() => compassCreateIncidentEventInputDtoSchema)),
    flag: s.optionalNullable(s.lazy(() => compassCreateFlagEventInputDtoSchema)),
    alert: s.optionalNullable(s.lazy(() => compassCreateAlertEventInputDtoSchema)),
    lifecycle: s.optionalNullable(s.lazy(() => compassCreateLifecycleEventInputDtoSchema)),
    custom: s.optionalNullable(s.lazy(() => compassCreateCustomEventInputDtoSchema)),
    push: s.optionalNullable(s.lazy(() => compassCreatePushEventInputDtoSchema)),
    pullRequest: s.optionalNullable(s.lazy(() => compassCreatePullRequestEventInputDtoSchema)),
    vulnerability: s.optionalNullable(s.lazy(() => compassCreateVulnerabilityEventInputDtoSchema)),
  },
  { additionalProperties: s.json() },
);
