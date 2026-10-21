import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { documentSchema, type Document } from "./document.js";
import { eventStrategyNameSchema, type EventStrategyName } from "./event-strategy-name.js";
import {
  generatedAttachmentContentSchema,
  type GeneratedAttachmentContent,
} from "./generated-attachment-content.js";
import { personSchema, type Person } from "./person.js";
import { structuredLinkSchema, type StructuredLink } from "./structured-link.js";

/**
 * These are attachments that aren't natively present on the event, and have been smartly suggested.
 */
export type GeneratedAttachment = {
  /** The name of method used to surface relevant data for a given calendar event. */
  strategyName?: EventStrategyName;
  documents?: Document[];
  person?: Person;
  customer?: Customer;
  /** A list of links to external sources outside of Glean. */
  externalLinks?: StructuredLink[];
  content?: GeneratedAttachmentContent[];
};

export const generatedAttachmentSchema: Schema<GeneratedAttachment> = s.object<GeneratedAttachment>({
  strategyName: s.optional(s.lazy(() => eventStrategyNameSchema)),
  documents: s.optional(s.array(s.lazy(() => documentSchema))),
  person: s.optional(s.lazy(() => personSchema)),
  customer: s.optional(s.lazy(() => customerSchema)),
  externalLinks: s.optional(s.array(s.lazy(() => structuredLinkSchema))),
  content: s.optional(s.array(s.lazy(() => generatedAttachmentContentSchema))),
});
