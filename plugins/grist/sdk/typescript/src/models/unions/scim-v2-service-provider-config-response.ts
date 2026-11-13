import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScimV2ServiceProviderConfigResponse =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Record<string, unknown>[]
  | null;

export const scimV2ServiceProviderConfigResponseSchema: Schema<ScimV2ServiceProviderConfigResponse> =
  s.of<ScimV2ServiceProviderConfigResponse>(
    s.nullable(
      s.union([
        s.string(),
        s.float64(),
        s.boolean(),
        s.record(s.string(), s.unknown()),
        s.array(s.record(s.string(), s.unknown())),
      ]),
    ),
  );
