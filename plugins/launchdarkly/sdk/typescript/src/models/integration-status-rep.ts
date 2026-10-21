import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntegrationStatusRep = {
  statusCode?: number;
  responseBody?: string;
  timestamp?: number;
};

export const integrationStatusRepSchema: Schema<IntegrationStatusRep> = s.object<IntegrationStatusRep>({
  statusCode: s.optional(s.int()),
  responseBody: s.optional(s.string()),
  timestamp: s.optional(s.int()),
});
