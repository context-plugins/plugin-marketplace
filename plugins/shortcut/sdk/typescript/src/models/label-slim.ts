import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. A
 * slim Label does not include aggregate stats. Fetch the Label using the labels endpoint to
 * retrieve them.
 */
export type LabelSlim = {
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
  /** The time/date that the Label was created. */
  createdAt: Date | null;
};

const labelSlimProperties: s.Shape<LabelSlim> = {
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

export const labelSlimInternalSchema: Schema<LabelSlim> = s.object<LabelSlim>(labelSlimProperties);

export const labelSlimSchema: Schema<LabelSlim> = s.lazySchema(() =>
  s.object<LabelSlim>({
    ...labelSlimProperties,
    color: s.nullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
