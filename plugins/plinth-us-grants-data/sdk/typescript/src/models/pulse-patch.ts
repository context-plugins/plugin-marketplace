import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./unions/active.js";
import { checksSchema, type Checks } from "./unions/checks.js";
import { einsSchema, type Eins } from "./unions/eins.js";
import { emailModeSchema, type EmailMode } from "./unions/email-mode.js";
import { emailToSchema, type EmailTo } from "./unions/email-to.js";
import { frequencySchema, type Frequency } from "./unions/frequency.js";
import { nameSchema, type Name } from "./unions/name.js";
import { unsubscribeUrlSchema, type UnsubscribeUrl } from "./unions/unsubscribe-url.js";

export type PulsePatch = {
  eins?: Eins;
  name?: Name;
  frequency?: Frequency;
  checks?: Checks;
  emailTo?: EmailTo;
  emailMode?: EmailMode;
  active?: Active;
  unsubscribeUrl?: UnsubscribeUrl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pulsePatchSchema: Schema<PulsePatch> = s.object<PulsePatch>(
  {
    eins: s.optional(s.lazy(() => einsSchema)),
    name: s.optional(s.lazy(() => nameSchema)),
    frequency: s.optional(s.lazy(() => frequencySchema)),
    checks: s.optional(s.lazy(() => checksSchema)),
    emailTo: s.optional(s.lazy(() => emailToSchema)),
    emailMode: s.optional(s.lazy(() => emailModeSchema)),
    active: s.optional(s.lazy(() => activeSchema)),
    unsubscribeUrl: s.optional(s.lazy(() => unsubscribeUrlSchema)),
    _keysMap: {
      emailTo: "email_to",
      emailMode: "email_mode",
      unsubscribeUrl: "unsubscribe_url",
    },
  },
  { additionalProperties: s.json() },
);
