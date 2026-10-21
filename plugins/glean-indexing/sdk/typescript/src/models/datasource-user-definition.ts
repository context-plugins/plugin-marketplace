import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** describes a user in the datasource */
export type DatasourceUserDefinition = {
  email: string;
  /** To be supplied if the user id in the datasource is not the email */
  userId?: string;
  name: string;
  /** set to false if the user is a former employee or a bot */
  isActive?: boolean;
};

export const datasourceUserDefinitionSchema: Schema<DatasourceUserDefinition> =
  s.object<DatasourceUserDefinition>({
    email: s.string(),
    userId: s.optional(s.string()),
    name: s.string(),
    isActive: s.optional(s.boolean()),
  });
