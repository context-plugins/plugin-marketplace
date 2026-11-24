import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SupportSettings = {
  appId?: string;
  supportUrl?: string;
  supportEmail?: string;
  supportPhone?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const supportSettingsProperties: s.Shape<SupportSettings> = {
  appId: s.optional(s.string()),
  supportUrl: s.optional(s.string()),
  supportEmail: s.optional(s.string()),
  supportPhone: s.optional(s.string()),
};

export const supportSettingsInternalSchema: Schema<SupportSettings> = s.object<SupportSettings>(
  supportSettingsProperties,
  { additionalProperties: s.json() },
);

export const supportSettingsSchema: Schema<SupportSettings> = s.lazySchema(() =>
  s.object<SupportSettings>(
    {
      ...supportSettingsProperties,
      supportUrl: s.optional(s.string().check(s.url())),
      supportEmail: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
