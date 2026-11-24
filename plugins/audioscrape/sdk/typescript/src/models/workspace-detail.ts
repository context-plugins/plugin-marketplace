import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSummarySchema, type DatasetSummary } from "./dataset-summary.js";

export type WorkspaceDetail = {
  /** ALL of the workspace's datasets — `public`, `workspace`, and `private`. */
  datasets: DatasetSummary[];
  description?: string | null;
  id: number;
  memberCount: number;
  name: string;
  /** The calling user's role in this workspace: `owner`, `admin`, or `member`. */
  role: string;
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceDetailSchema: Schema<WorkspaceDetail> = s.object<WorkspaceDetail>(
  {
    datasets: s.array(s.lazy(() => datasetSummarySchema)),
    description: s.optionalNullable(s.string()),
    id: s.int(),
    memberCount: s.int(),
    name: s.string(),
    role: s.string(),
    slug: s.string(),
    _keysMap: {
      memberCount: "member_count",
    },
  },
  { additionalProperties: s.json() },
);
