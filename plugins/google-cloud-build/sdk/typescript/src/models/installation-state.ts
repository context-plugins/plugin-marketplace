import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageSchema, type Stage } from "./stage.js";

/**
 * Describes stage and necessary actions to be taken by the user to complete the installation. Used
 * for GitHub and GitHub Enterprise based connections.
 */
export type InstallationState = {
  /**
   * Output only. Message of what the user should do next to continue the installation. Empty string
   * if the installation is already complete.
   */
  message?: string;
  /**
   * Output only. Link to follow for next action. Empty string if the installation is already
   * complete.
   */
  actionUri?: string;
  /** Output only. Current step of the installation process. */
  stage?: Stage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const installationStateSchema: Schema<InstallationState> = s.object<InstallationState>(
  {
    message: s.optional(s.string()),
    actionUri: s.optional(s.string()),
    stage: s.optional(s.lazy(() => stageSchema)),
  },
  { additionalProperties: s.json() },
);
