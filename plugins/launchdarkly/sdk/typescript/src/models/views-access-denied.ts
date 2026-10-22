import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsAccessDeniedReasonSchema, type ViewsAccessDeniedReason } from "./views-access-denied-reason.js";

export type ViewsAccessDenied = {
  action: string;
  reason: ViewsAccessDeniedReason;
};

export const viewsAccessDeniedSchema: Schema<ViewsAccessDenied> = s.object<ViewsAccessDenied>({
  action: s.string(),
  reason: viewsAccessDeniedReasonSchema,
});
