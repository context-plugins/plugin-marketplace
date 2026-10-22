import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformPersonReferenceSchema, type PlatformPersonReference } from "./platform-person-reference.js";
import {
  platformSkillSourceProvenanceSchema,
  type PlatformSkillSourceProvenance,
} from "./platform-skill-source-provenance.js";

export type PlatformSkillVersion = {
  /** Glean skill ID. */
  skillId: string;
  /** Major version number. */
  version: number;
  /** Minor version number. */
  minorVersion: number;
  /** Whether this is the latest version of the skill. */
  isLatest: boolean;
  /** A lightweight reference to a person, used where a payload merely points at someone. */
  createdBy: PlatformPersonReference;
  /** Time this version was created. */
  createdAt: Date;
  /** Time this version was last updated. */
  updatedAt: Date;
  sourceProvenance?: PlatformSkillSourceProvenance;
};

export const platformSkillVersionSchema: Schema<PlatformSkillVersion> = s.object<PlatformSkillVersion>({
  skillId: s.string(),
  version: s.int(),
  minorVersion: s.int(),
  isLatest: s.boolean(),
  createdBy: platformPersonReferenceSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  sourceProvenance: s.optional(s.lazy(() => platformSkillSourceProvenanceSchema)),
  _keysMap: {
    skillId: "skill_id",
    minorVersion: "minor_version",
    isLatest: "is_latest",
    createdBy: "created_by",
    createdAt: "created_at",
    updatedAt: "updated_at",
    sourceProvenance: "source_provenance",
  },
});
