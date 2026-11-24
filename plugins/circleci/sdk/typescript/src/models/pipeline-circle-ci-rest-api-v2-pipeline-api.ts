import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { stateSchema, type State } from "./state.js";
import { triggerInternalSchema, triggerSchema, type Trigger } from "./trigger.js";
import { vcsInternalSchema, vcsSchema, type Vcs } from "./vcs.js";

export type PipelineCircleCiRestApiV2PipelineApi = {
  /** The unique identifier of the pipeline */
  id?: string;
  /** Errors that occurred during pipeline setup */
  errors?: Error[];
  /** The project slug */
  projectSlug?: string;
  /** When the pipeline was last updated */
  updatedAt?: Date;
  /** The pipeline number */
  number?: number;
  /** The current state of the pipeline */
  state?: State;
  /** When the pipeline was created */
  createdAt?: Date;
  /** The trigger that started this pipeline */
  trigger?: Trigger;
  /** VCS information for this pipeline */
  vcs?: Vcs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pipelineCircleCiRestApiV2PipelineApiProperties: s.Shape<PipelineCircleCiRestApiV2PipelineApi> = {
  id: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  projectSlug: s.optional(s.string()),
  updatedAt: s.optional(s.dateTime()),
  number: s.optional(s.int()),
  state: s.optional(s.lazy(() => stateSchema)),
  createdAt: s.optional(s.dateTime()),
  trigger: s.optional(s.lazy(() => triggerInternalSchema)),
  vcs: s.optional(s.lazy(() => vcsInternalSchema)),
  _keysMap: {
    projectSlug: "project_slug",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
};

export const pipelineCircleCiRestApiV2PipelineApiInternalSchema: Schema<PipelineCircleCiRestApiV2PipelineApi> =
  s.object<PipelineCircleCiRestApiV2PipelineApi>(pipelineCircleCiRestApiV2PipelineApiProperties, {
    additionalProperties: s.json(),
  });

export const pipelineCircleCiRestApiV2PipelineApiSchema: Schema<PipelineCircleCiRestApiV2PipelineApi> =
  s.lazySchema(() =>
    s.object<PipelineCircleCiRestApiV2PipelineApi>(
      {
        ...pipelineCircleCiRestApiV2PipelineApiProperties,
        trigger: s.optional(s.lazy(() => triggerSchema)),
        vcs: s.optional(s.lazy(() => vcsSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
