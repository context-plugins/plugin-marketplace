import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contentHudPlatformJobsApiInternalSchema,
  contentHudPlatformJobsApiSchema,
  type ContentHudPlatformJobsApi,
} from "./unions/content-hud-platform-jobs-api.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { sourceCallIdSchema, type SourceCallId } from "./unions/source-call-id.js";
import {
  subagentTrajectoryRefInternalSchema,
  subagentTrajectoryRefSchema,
  type SubagentTrajectoryRef,
} from "./unions/subagent-trajectory-ref.js";

export type AtifObservationResult = {
  sourceCallId?: SourceCallId;
  content?: ContentHudPlatformJobsApi;
  subagentTrajectoryRef?: SubagentTrajectoryRef;
  extra?: Extra;
};

const atifObservationResultProperties: s.Shape<AtifObservationResult> = {
  sourceCallId: s.optional(s.lazy(() => sourceCallIdSchema)),
  content: s.optional(s.lazy(() => contentHudPlatformJobsApiInternalSchema)),
  subagentTrajectoryRef: s.optional(s.lazy(() => subagentTrajectoryRefInternalSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    sourceCallId: "source_call_id",
    subagentTrajectoryRef: "subagent_trajectory_ref",
  },
};

export const atifObservationResultInternalSchema: Schema<AtifObservationResult> =
  s.object<AtifObservationResult>(atifObservationResultProperties);

export const atifObservationResultSchema: Schema<AtifObservationResult> = s.lazySchema(() =>
  s.object<AtifObservationResult>({
    ...atifObservationResultProperties,
    content: s.optional(s.lazy(() => contentHudPlatformJobsApiSchema)),
    subagentTrajectoryRef: s.optional(s.lazy(() => subagentTrajectoryRefSchema)),
  }),
);
