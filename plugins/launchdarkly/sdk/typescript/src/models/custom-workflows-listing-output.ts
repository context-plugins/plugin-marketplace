import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customWorkflowOutputSchema, type CustomWorkflowOutput } from "./custom-workflow-output.js";
import { linkSchema, type Link } from "./link.js";

export type CustomWorkflowsListingOutput = {
  /** An array of workflows */
  items: CustomWorkflowOutput[];
  /** Total number of workflows */
  totalCount: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const customWorkflowsListingOutputSchema: Schema<CustomWorkflowsListingOutput> =
  s.object<CustomWorkflowsListingOutput>({
    items: s.array(s.lazy(() => customWorkflowOutputSchema)),
    totalCount: s.int(),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
