import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  viewsAccessAllowedReasonSchema,
  type ViewsAccessAllowedReason,
} from "./views-access-allowed-reason.js";

export type ViewsAccessAllowedRep = {
  action: string;
  reason: ViewsAccessAllowedReason;
};

export const viewsAccessAllowedRepSchema: Schema<ViewsAccessAllowedRep> = s.object<ViewsAccessAllowedRep>({
  action: s.string(),
  reason: viewsAccessAllowedReasonSchema,
});
