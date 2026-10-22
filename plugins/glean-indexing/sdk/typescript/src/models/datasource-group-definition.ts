import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** describes a group in the datasource */
export type DatasourceGroupDefinition = {
  /**
   * name of the group. Should be unique among all groups for the datasource, and cannot have
   * spaces.
   */
  name: string;
};

export const datasourceGroupDefinitionSchema: Schema<DatasourceGroupDefinition> =
  s.object<DatasourceGroupDefinition>({
    name: s.string(),
  });
