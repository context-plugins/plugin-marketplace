import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApplicationsEnvironmentsRenameRequest = {
  /** The new name for the environment */
  newEnvironmentName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsEnvironmentsRenameRequestSchema: Schema<ApplicationsEnvironmentsRenameRequest> =
  s.object<ApplicationsEnvironmentsRenameRequest>(
    {
      newEnvironmentName: s.string(),
      _keysMap: {
        newEnvironmentName: "NewEnvironmentName",
      },
    },
    { additionalProperties: s.json() },
  );
