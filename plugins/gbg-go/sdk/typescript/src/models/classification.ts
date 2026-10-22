import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sideSchema, type Side } from "./side.js";

export type Classification = {
  ids?: string[];
  category?: string;
  type?: string;
  subtype?: string;
  isDoubleSided?: boolean;
  hasNfc?: boolean;
  year?: string;
  countryCode?: string;
  countryName?: string;
  stateCode?: string;
  stateName?: string;
  sides?: Side[];
};

export const classificationSchema: Schema<Classification> = s.object<Classification>({
  ids: s.optional(s.array(s.string())),
  category: s.optional(s.string()),
  type: s.optional(s.string()),
  subtype: s.optional(s.string()),
  isDoubleSided: s.optional(s.boolean()),
  hasNfc: s.optional(s.boolean()),
  year: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  countryName: s.optional(s.string()),
  stateCode: s.optional(s.string()),
  stateName: s.optional(s.string()),
  sides: s.optional(s.array(s.lazy(() => sideSchema))),
  _keysMap: {
    hasNfc: "hasNFC",
  },
});
