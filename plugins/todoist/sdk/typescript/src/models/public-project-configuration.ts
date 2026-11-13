import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration specific to public projects. */
export type PublicProjectConfiguration = {
  /** Whether collaborator details are hidden on the public project. */
  hideCollaboratorDetails: boolean;
  /** Whether public project duplication is disabled. */
  disableDuplication: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicProjectConfigurationSchema: Schema<PublicProjectConfiguration> =
  s.object<PublicProjectConfiguration>(
    {
      hideCollaboratorDetails: s.boolean(),
      disableDuplication: s.boolean(),
      _keysMap: {
        hideCollaboratorDetails: "hide_collaborator_details",
        disableDuplication: "disable_duplication",
      },
    },
    { additionalProperties: s.json() },
  );
