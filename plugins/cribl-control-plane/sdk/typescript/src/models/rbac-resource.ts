import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RbacResource = {
  Groups: "groups",
  InsightsApps: "insights-apps",
  Datasets: "datasets",
  DatasetProviders: "dataset-providers",
  Projects: "projects",
  Dashboards: "dashboards",
  Macros: "macros",
  Notebooks: "notebooks",
  NotebookTemplates: "notebook-templates",
  Apps: "apps",
  SecretFolders: "secret-folders",
} as const;
export type RbacResource = (typeof RbacResource)[keyof typeof RbacResource] | (string & {});

export const rbacResourceSchema: EnumSchema<RbacResource> = s.enumOf<RbacResource>(RbacResource);
