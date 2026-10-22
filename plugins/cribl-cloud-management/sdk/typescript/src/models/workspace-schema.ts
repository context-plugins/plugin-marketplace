import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { awsRegionsSchema, type AwsRegions } from "./aws-regions.js";
import { workspaceStateSchema, type WorkspaceState } from "./workspace-state.js";

export type WorkspaceSchema = {
  /** Unique identifier for the Workspace. */
  workspaceId: string;
  /** AWS region where the Workspace is deployed. */
  region: AwsRegions;
  /** Fully Qualified Domain Name (FQDN) of the Workspace Leader. */
  leaderFqdn: string;
  /** Current state of the Workspace. */
  state: WorkspaceState;
  /** User-friendly alias for the Workspace. */
  alias?: string;
  /** Brief description of the Workspace. */
  description?: string;
  /** Tags associated with the Workspace. */
  tags?: string[];
};

export const workspaceSchemaSchema: Schema<WorkspaceSchema> = s.object<WorkspaceSchema>({
  workspaceId: s.string(),
  region: awsRegionsSchema,
  leaderFqdn: s.string(),
  state: workspaceStateSchema,
  alias: s.optional(s.string()),
  description: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  _keysMap: {
    leaderFqdn: "leaderFQDN",
  },
});
