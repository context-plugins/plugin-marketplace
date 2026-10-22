import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type that the access control policy applies to. */
export const RbacResource1 = {
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
export type RbacResource1 = (typeof RbacResource1)[keyof typeof RbacResource1] | (string & {});

export const rbacResource1Schema: EnumSchema<RbacResource1> = s.enumOf<RbacResource1>(RbacResource1);
