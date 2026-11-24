import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collaboratorInternalSchema, collaboratorSchema, type Collaborator } from "./collaborator.js";

export type AutomationsCollaboratorsResponse = {
  collaborators?: Collaborator[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const automationsCollaboratorsResponseProperties: s.Shape<AutomationsCollaboratorsResponse> = {
  collaborators: s.optional(s.array(s.lazy(() => collaboratorInternalSchema))),
};

export const automationsCollaboratorsResponseInternalSchema: Schema<AutomationsCollaboratorsResponse> =
  s.object<AutomationsCollaboratorsResponse>(automationsCollaboratorsResponseProperties, {
    additionalProperties: s.json(),
  });

export const automationsCollaboratorsResponseSchema: Schema<AutomationsCollaboratorsResponse> = s.lazySchema(
  () =>
    s.object<AutomationsCollaboratorsResponse>(
      {
        ...automationsCollaboratorsResponseProperties,
        collaborators: s.optional(s.array(s.lazy(() => collaboratorSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
