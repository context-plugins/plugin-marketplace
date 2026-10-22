import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsFiltersResponse = {
  success: boolean;
  /**
   * Option lists for the connector's filters, keyed by filter name, each a list of `{value, label}`
   * choices. A connector type lists them only for filters whose choices come from the service; none
   * of the current types does, so the object is empty. Filter fields themselves come from the
   * connector's registry schema.
   */
  filterOptions: Record<string, Record<string, unknown>>;
};

export const connectorsFiltersResponseSchema: Schema<ConnectorsFiltersResponse> =
  s.object<ConnectorsFiltersResponse>({
    success: s.boolean(),
    filterOptions: s.record(s.string(), s.record(s.string(), s.unknown())),
  });
