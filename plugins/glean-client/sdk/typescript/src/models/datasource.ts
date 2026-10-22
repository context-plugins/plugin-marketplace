import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the data source. */
export const Datasource = {
  Slack: "SLACK",
  Slackentgrid: "SLACKENTGRID",
  Microsoftteams: "MICROSOFTTEAMS",
  Gchat: "GCHAT",
  Facebookworkplace: "FACEBOOKWORKPLACE",
} as const;
export type Datasource = (typeof Datasource)[keyof typeof Datasource] | (string & {});

export const datasourceSchema: EnumSchema<Datasource> = s.enumOf<Datasource>(Datasource);
