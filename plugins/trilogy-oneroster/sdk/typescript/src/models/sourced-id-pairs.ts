import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SourcedIdPairs = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

export const sourcedIdPairsSchema: Schema<SourcedIdPairs> = s.object<SourcedIdPairs>({
  suppliedSourcedId: s.string(),
  allocatedSourcedId: s.string(),
});
