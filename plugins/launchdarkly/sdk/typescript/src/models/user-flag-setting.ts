import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluationReasonSchema, type EvaluationReason } from "./evaluation-reason.js";
import { linkSchema, type Link } from "./link.js";

export type UserFlagSetting = {
  /** The location and content type of related resources. */
  links: Record<string, Link>;
  /**
   * The value of the flag variation that the user receives. If there is no defined default rule,
   * this is null.
   */
  value: Record<string, unknown>;
  /**
   * Whether the user is explicitly targeted to receive a particular variation. The setting is false
   * if you have turned off a feature flag for a user. It is null if you haven't assigned that user
   * to a specific variation.
   */
  setting: Record<string, unknown>;
  reason?: EvaluationReason;
};

export const userFlagSettingSchema: Schema<UserFlagSetting> = s.object<UserFlagSetting>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  value: s.record(s.string(), s.unknown()),
  setting: s.record(s.string(), s.unknown()),
  reason: s.optional(s.lazy(() => evaluationReasonSchema)),
  _keysMap: {
    links: "_links",
    value: "_value",
  },
});
