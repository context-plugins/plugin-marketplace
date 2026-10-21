import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./resource.js";
import { collect2Schema, type Collect2 } from "./unions/collect2.js";
import { consume2Schema, type Consume2 } from "./unions/consume2.js";

export type Interaction = {
  resource?: Resource;
  collects: Collect2[];
  consumes: Consume2[];
  grId: string;
};

export const interactionSchema: Schema<Interaction> = s.object<Interaction>({
  resource: s.optional(s.lazy(() => resourceSchema)),
  collects: s.array(s.lazy(() => collect2Schema)),
  consumes: s.array(s.lazy(() => consume2Schema)),
  grId: s.string(),
});
