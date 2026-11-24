import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checks1Schema, type Checks1 } from "./unions/checks1.js";
import { emailMode1Schema, type EmailMode1 } from "./unions/email-mode1.js";
import { emailTo1Schema, type EmailTo1 } from "./unions/email-to1.js";
import { frequency1Schema, type Frequency1 } from "./unions/frequency1.js";
import { name1Schema, type Name1 } from "./unions/name1.js";
import { unsubscribeUrl1Schema, type UnsubscribeUrl1 } from "./unions/unsubscribe-url1.js";

export type PulseCreate = {
  /** Up to 200 EINs to watch. Any format — normalized per EIN. */
  eins: string[];
  /** A label for the digest header. */
  name?: Name1;
  /** hourly | daily | weekly (default) | monthly. */
  frequency?: Frequency1;
  /** Subset of: compliance, filings, grants, gov, people, web. Default all. */
  checks?: Checks1;
  /** Up to 5 addresses for digest delivery. */
  emailTo?: EmailTo1;
  /** activity (default: email only when something changed) | always. */
  emailMode?: EmailMode1;
  /** An https link the digest email carries for recipients to stop it. */
  unsubscribeUrl?: UnsubscribeUrl1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pulseCreateSchema: Schema<PulseCreate> = s.object<PulseCreate>(
  {
    eins: s.array(s.string()),
    name: s.optional(s.lazy(() => name1Schema)),
    frequency: s.optional(s.lazy(() => frequency1Schema)),
    checks: s.optional(s.lazy(() => checks1Schema)),
    emailTo: s.optional(s.lazy(() => emailTo1Schema)),
    emailMode: s.optional(s.lazy(() => emailMode1Schema)),
    unsubscribeUrl: s.optional(s.lazy(() => unsubscribeUrl1Schema)),
    _keysMap: {
      emailTo: "email_to",
      emailMode: "email_mode",
      unsubscribeUrl: "unsubscribe_url",
    },
  },
  { additionalProperties: s.json() },
);
