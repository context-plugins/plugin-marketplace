import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";
import { scopeSchema, type Scope } from "./scope.js";

/**
 * An action for a specific datasource that will show up in autocomplete and app card, e.g. "Create
 * new issue" for jira.
 */
export type Quicklink = {
  /** Full action name. Used in autocomplete. */
  name?: string;
  /** Shortened name. Used in app cards. */
  shortName?: string;
  /** The URL of the action. */
  url?: string;
  /** Defines how to render an icon */
  iconConfig?: IconConfig;
  /** Unique identifier of this quicklink */
  id?: string;
  /** The scopes for which this quicklink is applicable */
  scopes?: Scope[];
};

export const quicklinkSchema: Schema<Quicklink> = s.object<Quicklink>({
  name: s.optional(s.string()),
  shortName: s.optional(s.string()),
  url: s.optional(s.string()),
  iconConfig: s.optional(s.lazy(() => iconConfigSchema)),
  id: s.optional(s.string()),
  scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
});
