import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  availableExchangeConnections1Schema,
  type AvailableExchangeConnections1,
} from "./available-exchange-connections1.js";

export type Embedded94 = {
  availableExchangeConnections: AvailableExchangeConnections1[];
};

export const embedded94Schema: Schema<Embedded94> = s.object<Embedded94>({
  availableExchangeConnections: s.array(s.lazy(() => availableExchangeConnections1Schema)),
  _keysMap: {
    availableExchangeConnections: "available-exchange-connections",
  },
});
