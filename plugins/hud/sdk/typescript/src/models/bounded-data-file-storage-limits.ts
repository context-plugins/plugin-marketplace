import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Concrete storage capacity for a metered team. */
export type BoundedDataFileStorageLimits = {
  /** @default "bounded" */
  kind?: "bounded";
  maxFilesPerMember: number;
  maxMemberBytes: number;
  maxSharedFiles: number;
  maxSharedBytes: number;
  maxTeamFiles: number;
  maxTeamBytes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const boundedDataFileStorageLimitsSchema: Schema<BoundedDataFileStorageLimits> =
  s.object<BoundedDataFileStorageLimits>(
    {
      kind: s.defaulted(s.literal("bounded"), "bounded"),
      maxFilesPerMember: s.int(),
      maxMemberBytes: s.int(),
      maxSharedFiles: s.int(),
      maxSharedBytes: s.int(),
      maxTeamFiles: s.int(),
      maxTeamBytes: s.int(),
      _keysMap: {
        maxFilesPerMember: "max_files_per_member",
        maxMemberBytes: "max_member_bytes",
        maxSharedFiles: "max_shared_files",
        maxSharedBytes: "max_shared_bytes",
        maxTeamFiles: "max_team_files",
        maxTeamBytes: "max_team_bytes",
      },
    },
    { additionalProperties: s.json() },
  );
