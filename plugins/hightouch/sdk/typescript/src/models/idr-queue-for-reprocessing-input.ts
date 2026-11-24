import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identifierSchema, type Identifier } from "./identifier.js";

export type IdrQueueForReprocessingInput = {
  /**
   * e.g. [{ identifier: "email", value: "a@b.com" }] Identifier values will be queued for
   * reprocessing. Clusters containing these identifiers will be reprocessed on the next run.
   */
  identifiers: Identifier[];
  /**
   * If true, identifier values will also be added to the blocklist and ignored in future runs.
   *
   * @default true
   */
  block?: boolean;
};

const idrQueueForReprocessingInputProperties: s.Shape<IdrQueueForReprocessingInput> = {
  identifiers: s.array(s.lazy(() => identifierSchema)),
  block: s.defaulted(s.boolean(), true),
};

export const idrQueueForReprocessingInputInternalSchema: Schema<IdrQueueForReprocessingInput> =
  s.object<IdrQueueForReprocessingInput>(idrQueueForReprocessingInputProperties);

export const idrQueueForReprocessingInputSchema: Schema<IdrQueueForReprocessingInput> = s.lazySchema(() =>
  s.object<IdrQueueForReprocessingInput>({
    ...idrQueueForReprocessingInputProperties,
    identifiers: s.array(s.lazy(() => identifierSchema)).check(s.maxLength(1000)),
  }),
);
