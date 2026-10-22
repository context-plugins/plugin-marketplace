import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Breadcrumb = {
  id: string;
  name: string;
  /** One of `app`, `recordGroup`, `folder`, `record`. */
  nodeType: string;
  subType?: string | null;
};

export const breadcrumbSchema: Schema<Breadcrumb> = s.object<Breadcrumb>({
  id: s.string(),
  name: s.string(),
  nodeType: s.string(),
  subType: s.optionalNullable(s.string()),
});
