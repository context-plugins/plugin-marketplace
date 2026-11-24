import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageSchema, type Stage } from "./stage.js";

/** Output only. Installation state of the Connection. */
export type InstallationState1 = {
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

export const installationState1Schema: Schema<InstallationState1> = s.object<InstallationState1>(
  {
    message: s.optional(s.string()),
    actionUri: s.optional(s.string()),
    stage: s.optional(s.lazy(() => stageSchema)),
  },
  { additionalProperties: s.json() },
);
