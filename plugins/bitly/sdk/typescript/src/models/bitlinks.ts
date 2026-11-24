import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bitlinkBodySchema, type BitlinkBody } from "./bitlink-body.js";
import { bitlinksPaginationSchema, type BitlinksPagination } from "./bitlinks-pagination.js";

export type Bitlinks = {
  links?: BitlinkBody[];
  pagination?: BitlinksPagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitlinksSchema: Schema<Bitlinks> = s.object<Bitlinks>(
  {
    links: s.optional(s.array(s.lazy(() => bitlinkBodySchema))),
    pagination: s.optional(s.lazy(() => bitlinksPaginationSchema)),
  },
  { additionalProperties: s.json() },
);
