import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { integrationSchema, type Integration } from "./integration.js";
import { linkSchema, type Link } from "./link.js";

export type Integrations = {
  links?: Record<string, Link>;
  items?: Integration[];
  key?: string;
};

export const integrationsSchema: Schema<Integrations> = s.object<Integrations>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  items: s.optional(s.array(s.lazy(() => integrationSchema))),
  key: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
