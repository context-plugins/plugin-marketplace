import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { documentSchema, type Document } from "./document.js";
import { personSchema, type Person } from "./person.js";
import { reminderSchema, type Reminder } from "./reminder.js";

export type VerificationMetadata = {
  lastVerifier?: Person;
  /** The unix timestamp of the verification (in seconds since epoch UTC). */
  lastVerificationTs?: number;
  /**
   * The unix timestamp of the verification expiration if applicable (in seconds since epoch UTC).
   */
  expirationTs?: number;
  document?: Document;
  /** Info about all outstanding verification reminders for the document if exists. */
  reminders?: Reminder[];
  lastReminder?: Reminder;
  /** Number of visitors to the document during included time periods. */
  visitorCount?: CountInfo[];
  /**
   * List of potential verifiers for the document e.g. old verifiers and/or users with view/edit
   * permissions.
   */
  candidateVerifiers?: Person[];
};

export const verificationMetadataSchema: Schema<VerificationMetadata> = s.object<VerificationMetadata>({
  lastVerifier: s.optional(s.lazy(() => personSchema)),
  lastVerificationTs: s.optional(s.int()),
  expirationTs: s.optional(s.int()),
  document: s.optional(s.lazy(() => documentSchema)),
  reminders: s.optional(s.array(s.lazy(() => reminderSchema))),
  lastReminder: s.optional(s.lazy(() => reminderSchema)),
  visitorCount: s.optional(s.array(s.lazy(() => countInfoSchema))),
  candidateVerifiers: s.optional(s.array(s.lazy(() => personSchema))),
});
