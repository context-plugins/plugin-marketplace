import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateGeographicAccessCustomRegionRequest = {
  name: string;
  countryCodes: string[];
};

const createGeographicAccessCustomRegionRequestProperties: s.Shape<CreateGeographicAccessCustomRegionRequest> =
  {
    name: s.string(),
    countryCodes: s.array(s.string()),
  };

export const createGeographicAccessCustomRegionRequestInternalSchema: Schema<CreateGeographicAccessCustomRegionRequest> =
  s.object<CreateGeographicAccessCustomRegionRequest>(createGeographicAccessCustomRegionRequestProperties);

export const createGeographicAccessCustomRegionRequestSchema: Schema<CreateGeographicAccessCustomRegionRequest> =
  s.lazySchema(() =>
    s.object<CreateGeographicAccessCustomRegionRequest>({
      ...createGeographicAccessCustomRegionRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(200)),
      countryCodes: s.array(s.string().check(s.pattern("^[A-Z]{2}$"))).check(s.minLength(1), s.uniqueItems()),
    }),
  );
