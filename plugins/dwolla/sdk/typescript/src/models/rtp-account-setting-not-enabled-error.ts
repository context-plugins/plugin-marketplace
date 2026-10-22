import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RtpAccountSettingNotEnabledError = {
  code: string;
  message: string;
};

export const rtpAccountSettingNotEnabledErrorSchema: Schema<RtpAccountSettingNotEnabledError> =
  s.object<RtpAccountSettingNotEnabledError>({
    code: s.string(),
    message: s.string(),
  });
