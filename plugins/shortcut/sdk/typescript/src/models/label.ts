import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelStatsSchema, type LabelStats } from "./label-stats.js";

/**
 * A Label can be used to associate and filter Stories and Epics, and also create new Workspaces.
 */
export type Label = {
  /** The Shortcut application url for the Label. */
  appUrl: string;
  /** The description of the Label. */
  description: string | null;
  /** A true/false boolean indicating if the Label has been archived. */
  archived: boolean;
  /** A string description of this resource. */
  entityType: string;
  /** The hex color to be displayed with the Label (for example, "#ff0000"). */
  color: string | null;
  /** The name of the Label. */
  name: string;
  globalId: string;
  /** The time/date that the Label was updated. */
  updatedAt: Date | null;
  /**
   * This field can be set to another unique ID. In the case that the Label has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Label. */
  id: number;
  /**
   * A group of calculated values for this Label. This is not included if the slim? flag is set to
   * true for the List Labels endpoint.
   */
  stats?: LabelStats;
  /** The time/date that the Label was created. */
  createdAt: Date | null;
};

const labelProperties: s.Shape<Label> = {
  appUrl: s.string(),
  description: s.nullable(s.string()),
  archived: s.boolean(),
  entityType: s.string(),
  color: s.nullable(s.string()),
  name: s.string(),
  globalId: s.string(),
  updatedAt: s.nullable(s.dateTime()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  stats: s.optional(s.lazy(() => labelStatsSchema)),
  createdAt: s.nullable(s.dateTime()),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    globalId: "global_id",
    updatedAt: "updated_at",
    externalId: "external_id",
    createdAt: "created_at",
  },
};

export const labelInternalSchema: Schema<Label> = s.object<Label>(labelProperties);

export const labelSchema: Schema<Label> = s.lazySchema(() =>
  s.object<Label>({
    ...labelProperties,
    color: s.nullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
