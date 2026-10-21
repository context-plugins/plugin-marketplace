import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AvailableExchangeConnections1 = {
  /** Token representing the external bank account that can be used to create a funding source */
  availableConnectionToken: string;
  /** Name of the external bank account */
  name: string;
};

export const availableExchangeConnections1Schema: Schema<AvailableExchangeConnections1> =
  s.object<AvailableExchangeConnections1>({
    availableConnectionToken: s.string(),
    name: s.string(),
  });
