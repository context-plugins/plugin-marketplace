import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exposedCollaboratorInternalSchema,
  exposedCollaboratorSchema,
  type ExposedCollaborator,
} from "./exposed-collaborator.js";
import { folderViewSchema, type FolderView } from "./folder-view.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";
import { projectNoteSyncViewSchema, type ProjectNoteSyncView } from "./project-note-sync-view.js";
import { sectionSyncViewSchema, type SectionSyncView } from "./section-sync-view.js";
import { project6Schema, type Project6 } from "./unions/project6.js";
import { subprojectSchema, type Subproject } from "./unions/subproject.js";

export type GetDataV2Response = {
  /** Project details returned after joining. */
  project: Project6;
  /** Tasks in the joined project. */
  tasks: ItemSyncView[];
  /** Sections in the joined project. */
  sections: SectionSyncView[];
  /** Comments in the joined project. */
  comments: ProjectNoteSyncView[];
  /** Collaborators with access to the joined project. */
  collaborators: ExposedCollaborator[];
  /** Collaborator state records for the joined project. */
  collaboratorStates: Record<string, unknown>[];
  /** Folder containing the project, or `null` when it is not in a folder. */
  folder: FolderView | null;
  /** Subprojects of the joined project. */
  subprojects: Subproject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getDataV2ResponseProperties: s.Shape<GetDataV2Response> = {
  project: project6Schema,
  tasks: s.array(s.lazy(() => itemSyncViewSchema)),
  sections: s.array(s.lazy(() => sectionSyncViewSchema)),
  comments: s.array(s.lazy(() => projectNoteSyncViewSchema)),
  collaborators: s.array(s.lazy(() => exposedCollaboratorInternalSchema)),
  collaboratorStates: s.array(s.record(s.string(), s.unknown())),
  folder: s.nullable(s.lazy(() => folderViewSchema)),
  subprojects: s.array(s.lazy(() => subprojectSchema)),
  _keysMap: {
    collaboratorStates: "collaborator_states",
  },
};

export const getDataV2ResponseInternalSchema: Schema<GetDataV2Response> = s.object<GetDataV2Response>(
  getDataV2ResponseProperties,
  { additionalProperties: s.json() },
);

export const getDataV2ResponseSchema: Schema<GetDataV2Response> = s.lazySchema(() =>
  s.object<GetDataV2Response>(
    {
      ...getDataV2ResponseProperties,
      collaborators: s.array(s.lazy(() => exposedCollaboratorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
