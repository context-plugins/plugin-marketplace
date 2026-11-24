import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationDeliverdDevReportsApiSchema,
  type ClassificationDeliverdDevReportsApi,
} from "./classification-deliverd-dev-reports-api.js";
import {
  statusDeliverdDevReportsApiSchema,
  type StatusDeliverdDevReportsApi,
} from "./status-deliverd-dev-reports-api.js";

export type TemplateDeliverdDevTemplatesApi = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  workspaceId: string | null;
  ownerId: string | null;
  classification: ClassificationDeliverdDevReportsApi;
  status: StatusDeliverdDevReportsApi;
  isLiving: boolean;
  currentVersion: number | null;
  sourceTool: string | null;
  taskId: string | null;
  url: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templateDeliverdDevTemplatesApiSchema: Schema<TemplateDeliverdDevTemplatesApi> =
  s.object<TemplateDeliverdDevTemplatesApi>(
    {
      id: s.string(),
      title: s.string(),
      slug: s.string(),
      description: s.nullable(s.string()),
      workspaceId: s.nullable(s.string()),
      ownerId: s.nullable(s.string()),
      classification: classificationDeliverdDevReportsApiSchema,
      status: statusDeliverdDevReportsApiSchema,
      isLiving: s.boolean(),
      currentVersion: s.nullable(s.float64()),
      sourceTool: s.nullable(s.string()),
      taskId: s.nullable(s.string()),
      url: s.string(),
      createdAt: s.string(),
      updatedAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
