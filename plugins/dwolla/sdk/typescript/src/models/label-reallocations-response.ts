import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links39Schema, type Links39 } from "./links39.js";

export type LabelReallocationsResponse = {
  links?: Links39;
  created?: Date;
};

export const labelReallocationsResponseSchema: Schema<LabelReallocationsResponse> =
  s.object<LabelReallocationsResponse>({
    links: s.optional(s.lazy(() => links39Schema)),
    created: s.optional(s.dateTime()),
    _keysMap: {
      links: "_links",
    },
  });
