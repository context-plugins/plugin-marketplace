import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { consentSchema, type Consent } from "./consent.js";
import { documentSchema, type Document } from "./document.js";
import { identitySchema, type Identity } from "./identity.js";
import { sessionSchema, type Session } from "./session.js";
import { biometric4Schema, type Biometric4 } from "./unions/biometric4.js";

export type Subject = {
  identity?: Identity;
  documents?: Document[];
  biometrics?: Biometric4[];
  sessions?: Session[];
  consent?: Consent[];
  accounts?: Account[];
  uid?: string;
};

export const subjectSchema: Schema<Subject> = s.object<Subject>({
  identity: s.optional(s.lazy(() => identitySchema)),
  documents: s.optional(s.array(s.lazy(() => documentSchema))),
  biometrics: s.optional(s.array(s.lazy(() => biometric4Schema))),
  sessions: s.optional(s.array(s.lazy(() => sessionSchema))),
  consent: s.optional(s.array(s.lazy(() => consentSchema))),
  accounts: s.optional(s.array(s.lazy(() => accountSchema))),
  uid: s.optional(s.string()),
});
