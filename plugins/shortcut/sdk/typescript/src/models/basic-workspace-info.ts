import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BasicWorkspaceInfo = {
  id: string;
  createdAt: Date;
  defaultWorkflowId: number;
  estimateScale: number[];
  name: string;
  urlSlug: string;
  utcOffset: string;
  koreyEnabled?: boolean;
};

export const basicWorkspaceInfoSchema: Schema<BasicWorkspaceInfo> = s.object<BasicWorkspaceInfo>({
  id: s.string(),
  createdAt: s.dateTime(),
  defaultWorkflowId: s.int(),
  estimateScale: s.array(s.int()),
  name: s.string(),
  urlSlug: s.string(),
  utcOffset: s.string(),
  koreyEnabled: s.optional(s.boolean()),
  _keysMap: {
    createdAt: "created_at",
    defaultWorkflowId: "default_workflow_id",
    estimateScale: "estimate_scale",
    urlSlug: "url_slug",
    utcOffset: "utc_offset",
    koreyEnabled: "korey_enabled",
  },
});
