import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { digestUpdateSchema, type DigestUpdate } from "./digest-update.js";
import { sectionTypeSchema, type SectionType } from "./section-type.js";

export type DigestSection = {
  /** Unique identifier for the digest section. */
  id: string;
  /**
   * Type of the section. This defines how the section should be interpreted and rendered in the
   * digest.
   */
  type: SectionType;
  /** Human-readable name for the digest section. */
  displayName?: string;
  /**
   * Name of the channel (applicable for CHANNEL type sections). Used to display in the frontend.
   */
  channelName?: string;
  /**
   * Channel visibility/type for CHANNEL sections. For Slack this is typically one of PublicChannel,
   * PrivateChannel. Omit if not applicable or unknown.
   */
  channelType?: string;
  /**
   * Instance identifier for the channel or workspace. Used for constructing channel URLs to display
   * in the frontend.
   */
  instanceId?: string;
  /**
   * Optional URL for the digest section. Should be populated only if the section is a CHANNEL type
   * section.
   */
  url?: string;
  /** List of updates within this digest section. */
  updates: DigestUpdate[];
};

export const digestSectionSchema: Schema<DigestSection> = s.object<DigestSection>({
  id: s.string(),
  type: sectionTypeSchema,
  displayName: s.optional(s.string()),
  channelName: s.optional(s.string()),
  channelType: s.optional(s.string()),
  instanceId: s.optional(s.string()),
  url: s.optional(s.string()),
  updates: s.array(s.lazy(() => digestUpdateSchema)),
});
