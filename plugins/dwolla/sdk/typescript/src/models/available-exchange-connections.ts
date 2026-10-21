import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded94Schema, type Embedded94 } from "./embedded94.js";
import { links27Schema, type Links27 } from "./links27.js";

export type AvailableExchangeConnections = {
  links: Links27;
  embedded: Embedded94;
};

export const availableExchangeConnectionsSchema: Schema<AvailableExchangeConnections> =
  s.object<AvailableExchangeConnections>({
    links: links27Schema,
    embedded: embedded94Schema,
    _keysMap: {
      links: "_links",
      embedded: "_embedded",
    },
  });
