import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatFileSchema, type ChatFile } from "./chat-file.js";
import { chatSkillSchema, type ChatSkill } from "./chat-skill.js";
import { customEntitySchema, type CustomEntity } from "./custom-entity.js";
import { documentSchema, type Document } from "./document.js";
import { personSchema, type Person } from "./person.js";
import { referenceRangeSchema, type ReferenceRange } from "./reference-range.js";

/** Information about the source for a ChatMessage. */
export type ChatMessageCitation = {
  /**
   * An opaque token that represents this particular result in this particular ChatMessage. To be
   * used for /feedback reporting.
   */
  trackingToken?: string;
  sourceDocument?: Document;
  /** Structure for file uploaded by a user for Chat. */
  sourceFile?: ChatFile;
  sourcePerson?: Person;
  sourceCustomEntity?: CustomEntity;
  /** A skill cited by Assistant. */
  sourceSkill?: ChatSkill;
  /** Each reference range and its corresponding snippets */
  referenceRanges?: ReferenceRange[];
};

export const chatMessageCitationSchema: Schema<ChatMessageCitation> = s.object<ChatMessageCitation>({
  trackingToken: s.optional(s.string()),
  sourceDocument: s.optional(s.lazy(() => documentSchema)),
  sourceFile: s.optional(s.lazy(() => chatFileSchema)),
  sourcePerson: s.optional(s.lazy(() => personSchema)),
  sourceCustomEntity: s.optional(s.lazy(() => customEntitySchema)),
  sourceSkill: s.optional(s.lazy(() => chatSkillSchema)),
  referenceRanges: s.optional(s.array(s.lazy(() => referenceRangeSchema))),
});
