import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relatedExperimentRepSchema, type RelatedExperimentRep } from "./related-experiment-rep.js";

export type SimpleHoldoutRep = {
  id?: string;
  key?: string;
  name?: string;
  status?: string;
  createdAt?: number;
  updatedAt?: number;
  experiments?: RelatedExperimentRep[];
};

export const simpleHoldoutRepSchema: Schema<SimpleHoldoutRep> = s.object<SimpleHoldoutRep>({
  id: s.optional(s.string()),
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  updatedAt: s.optional(s.int()),
  experiments: s.optional(s.array(s.lazy(() => relatedExperimentRepSchema))),
  _keysMap: {
    id: "_id",
  },
});
