import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformPersonReferenceSchema, type PlatformPersonReference } from "./platform-person-reference.js";
import { platformSkillOriginSchema, type PlatformSkillOrigin } from "./platform-skill-origin.js";
import {
  platformSkillSourceProvenanceSchema,
  type PlatformSkillSourceProvenance,
} from "./platform-skill-source-provenance.js";
import { platformSkillStatusSchema, type PlatformSkillStatus } from "./platform-skill-status.js";

export type PlatformSkill = {
  /** Glean skill ID. */
  skillId: string;
  /** Human-readable skill name. */
  displayName: string;
  /** Human-readable skill description. */
  description: string;
  /** Latest major version number for the skill. */
  latestVersion: number;
  /** Latest minor version number for the skill. */
  latestMinorVersion: number;
  /**
   * The caller's effective activation. The owner sees the skill's stored status. Another caller
   * sees their personal setting, or DISABLED when they have none. DRAFT is the stored draft state
   * and is not set by update. Effective activation may also reflect workspace governance policy.
   */
  status: PlatformSkillStatus;
  /** Source category for the skill. */
  origin: PlatformSkillOrigin;
  sourceProvenance?: PlatformSkillSourceProvenance;
  /** A lightweight reference to a person, used where a payload merely points at someone. */
  owner: PlatformPersonReference;
  /** Time the skill was created. */
  createdAt: Date;
  /** Time the skill was last updated. */
  updatedAt: Date;
};

export const platformSkillSchema: Schema<PlatformSkill> = s.object<PlatformSkill>({
  skillId: s.string(),
  displayName: s.string(),
  description: s.string(),
  latestVersion: s.int(),
  latestMinorVersion: s.int(),
  status: platformSkillStatusSchema,
  origin: platformSkillOriginSchema,
  sourceProvenance: s.optional(s.lazy(() => platformSkillSourceProvenanceSchema)),
  owner: platformPersonReferenceSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    skillId: "skill_id",
    displayName: "display_name",
    latestVersion: "latest_version",
    latestMinorVersion: "latest_minor_version",
    sourceProvenance: "source_provenance",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
