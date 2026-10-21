import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to save filter selections for a connector */
export type SaveConnectorFiltersRequest = {
  /** Filter values to save (structure depends on connector's filter schema). Must not be empty. */
  filters: Record<string, unknown>;
};

export const saveConnectorFiltersRequestSchema: Schema<SaveConnectorFiltersRequest> =
  s.object<SaveConnectorFiltersRequest>({
    filters: s.record(s.string(), s.unknown()),
  });
