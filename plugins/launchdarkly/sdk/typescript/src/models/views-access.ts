import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsAccessAllowedRepSchema, type ViewsAccessAllowedRep } from "./views-access-allowed-rep.js";
import { viewsAccessDeniedSchema, type ViewsAccessDenied } from "./views-access-denied.js";

export type ViewsAccess = {
  denied: ViewsAccessDenied[];
  allowed: ViewsAccessAllowedRep[];
};

export const viewsAccessSchema: Schema<ViewsAccess> = s.object<ViewsAccess>({
  denied: s.array(s.lazy(() => viewsAccessDeniedSchema)),
  allowed: s.array(s.lazy(() => viewsAccessAllowedRepSchema)),
});
