import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewLinkRequestSegmentIdentifier = {
  environmentId: string;
  segmentKey: string;
};

export const viewLinkRequestSegmentIdentifierSchema: Schema<ViewLinkRequestSegmentIdentifier> =
  s.object<ViewLinkRequestSegmentIdentifier>({
    environmentId: s.string(),
    segmentKey: s.string(),
  });
