import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitySchema, type Entity } from "./unions/entity.js";

/** Full payload of the event. */
export type Embedded = {
  entity?: Entity;
};

export const embeddedSchema: Schema<Embedded> = s.object<Embedded>({
  entity: s.optional(s.lazy(() => entitySchema)),
});
