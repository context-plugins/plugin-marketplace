import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormSettingsEnvelope = {
  /**
   * A partial FormSettings patch (see \@usefillo/core FormSettings): booleans such as
   * notifyEmailIncludeAnswers, sendReceipt, saveProgress, draftAnswersVisible, resumeEmails, and
   * draftDigest; strings such as notifyEmail, notifyEmailReplyToField, and resumeUrl; an array
   * notifyEmailAnswerFields; and objects such as responseLimit and trust. Any key set to null is
   * cleared. Six of the keys are not operational settings but part of the form's definition —
   * submitMode, submitLabel, successTitle, successMessage, redirectUrl, and showProgress live
   * inside the form schema: patching any of them additionally requires forms:write, and
   * code-managed forms reject them outright.
   */
  settings: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formSettingsEnvelopeSchema: Schema<FormSettingsEnvelope> = s.object<FormSettingsEnvelope>(
  {
    settings: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
