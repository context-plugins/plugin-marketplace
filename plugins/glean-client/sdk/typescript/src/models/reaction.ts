import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type Reaction = {
  type?: string;
  /** The count of the reaction type on the document. */
  count?: number;
  reactors?: Person[];
  /** Whether the user in context reacted with this type to the document. */
  reactedByViewer?: boolean;
};

export const reactionSchema: Schema<Reaction> = s.object<Reaction>({
  type: s.optional(s.string()),
  count: s.optional(s.int()),
  reactors: s.optional(s.array(s.lazy(() => personSchema))),
  reactedByViewer: s.optional(s.boolean()),
});
