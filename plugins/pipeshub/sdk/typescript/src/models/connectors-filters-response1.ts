import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsFiltersResponse1 = {
  success: boolean;
  message: string;
};

export const connectorsFiltersResponse1Schema: Schema<ConnectorsFiltersResponse1> =
  s.object<ConnectorsFiltersResponse1>({
    success: s.boolean(),
    message: s.string(),
  });
