import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestrictedModelsRequest = {
  keys: string[];
};

export const restrictedModelsRequestSchema: Schema<RestrictedModelsRequest> =
  s.object<RestrictedModelsRequest>({
    keys: s.array(s.string()),
  });
