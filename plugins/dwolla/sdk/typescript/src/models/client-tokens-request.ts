import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links42Schema, type Links42 } from "./links42.js";

export type ClientTokensRequest = {
  /** A granular permission for the Customer performing an action within a drop-in component */
  action: string;
  links: Links42;
};

export const clientTokensRequestSchema: Schema<ClientTokensRequest> = s.object<ClientTokensRequest>({
  action: s.string(),
  links: links42Schema,
  _keysMap: {
    links: "_links",
  },
});
