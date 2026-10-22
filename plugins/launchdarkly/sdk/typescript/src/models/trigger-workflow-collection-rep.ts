import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { triggerWorkflowRepSchema, type TriggerWorkflowRep } from "./trigger-workflow-rep.js";

export type TriggerWorkflowCollectionRep = {
  /** An array of flag triggers */
  items?: TriggerWorkflowRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const triggerWorkflowCollectionRepSchema: Schema<TriggerWorkflowCollectionRep> =
  s.object<TriggerWorkflowCollectionRep>({
    items: s.optional(s.array(s.lazy(() => triggerWorkflowRepSchema))),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      links: "_links",
    },
  });
