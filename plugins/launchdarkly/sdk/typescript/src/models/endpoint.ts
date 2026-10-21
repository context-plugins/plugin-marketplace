import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headerItemsSchema, type HeaderItems } from "./header-items.js";
import { hmacSignatureSchema, type HmacSignature } from "./hmac-signature.js";

export type Endpoint = {
  headers?: HeaderItems[];
  hmacSignature?: HmacSignature;
  method?: string;
  url?: string;
};

export const endpointSchema: Schema<Endpoint> = s.object<Endpoint>({
  headers: s.optional(s.array(s.lazy(() => headerItemsSchema))),
  hmacSignature: s.optional(s.lazy(() => hmacSignatureSchema)),
  method: s.optional(s.string()),
  url: s.optional(s.string()),
});
