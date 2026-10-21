import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceJwksGetResponse = {
  /** An array of [JWK](https://datatracker.ietf.org/doc/html/rfc7517)s. */
  keys?: Record<string, unknown>[];
};

export const serviceJwksGetResponseSchema: Schema<ServiceJwksGetResponse> = s.object<ServiceJwksGetResponse>({
  keys: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
