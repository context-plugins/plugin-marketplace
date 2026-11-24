import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateGeographicAccessCustomRegionRequest = {
  name?: string;
  countryCodes?: string[];
};

const updateGeographicAccessCustomRegionRequestProperties: s.Shape<UpdateGeographicAccessCustomRegionRequest> =
  {
    name: s.optional(s.string()),
    countryCodes: s.optional(s.array(s.string())),
  };

export const updateGeographicAccessCustomRegionRequestInternalSchema: Schema<UpdateGeographicAccessCustomRegionRequest> =
  s.object<UpdateGeographicAccessCustomRegionRequest>(updateGeographicAccessCustomRegionRequestProperties);

export const updateGeographicAccessCustomRegionRequestSchema: Schema<UpdateGeographicAccessCustomRegionRequest> =
  s.lazySchema(() =>
    s.object<UpdateGeographicAccessCustomRegionRequest>({
      ...updateGeographicAccessCustomRegionRequestProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      countryCodes: s.optional(
        s.array(s.string().check(s.pattern("^[A-Z]{2}$"))).check(s.minLength(1), s.uniqueItems()),
      ),
    }),
  );
