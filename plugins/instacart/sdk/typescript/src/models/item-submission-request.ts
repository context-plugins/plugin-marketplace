import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemInternalSchema, itemSchema, type Item } from "./item.js";

export type ItemSubmissionRequest = {
  /** The list of items to create or update at specific store locations. */
  items: Item[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemSubmissionRequestProperties: s.Shape<ItemSubmissionRequest> = {
  items: s.array(s.lazy(() => itemInternalSchema)),
};

export const itemSubmissionRequestInternalSchema: Schema<ItemSubmissionRequest> =
  s.object<ItemSubmissionRequest>(itemSubmissionRequestProperties, { additionalProperties: s.json() });

export const itemSubmissionRequestSchema: Schema<ItemSubmissionRequest> = s.lazySchema(() =>
  s.object<ItemSubmissionRequest>(
    {
      ...itemSubmissionRequestProperties,
      items: s.array(s.lazy(() => itemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
