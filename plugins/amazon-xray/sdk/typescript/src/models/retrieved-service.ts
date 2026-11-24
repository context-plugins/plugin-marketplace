import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { graphLinkSchema, type GraphLink } from "./graph-link.js";
import { serviceSchema, type Service } from "./service.js";

export type RetrievedService = {
  service?: Service;
  /** Relation between two 2 services. */
  links?: GraphLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retrievedServiceSchema: Schema<RetrievedService> = s.object<RetrievedService>(
  {
    service: s.optional(s.lazy(() => serviceSchema)),
    links: s.optional(s.array(s.lazy(() => graphLinkSchema))),
    _keysMap: {
      service: "Service",
      links: "Links",
    },
  },
  { additionalProperties: s.json() },
);
