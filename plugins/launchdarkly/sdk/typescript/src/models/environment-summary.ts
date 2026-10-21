import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type EnvironmentSummary = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** A project-unique key for the environment */
  key: string;
  /** A human-friendly name for the environment */
  name: string;
  /** The color used to indicate this environment in the UI */
  color: string;
};

export const environmentSummarySchema: Schema<EnvironmentSummary> = s.object<EnvironmentSummary>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  key: s.string(),
  name: s.string(),
  color: s.string(),
  _keysMap: {
    links: "_links",
  },
});
