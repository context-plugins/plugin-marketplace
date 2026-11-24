import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevGatesApiSchema,
  type KindDeliverdDevGatesApi,
} from "./kind-deliverd-dev-gates-api.js";

export type Artifact1 = {
  kind: KindDeliverdDevGatesApi;
  reportId: string | null;
  versionId: string | null;
  versionNumber: number | null;
  sha256: string | null;
  name: string | null;
  mimeType: string | null;
  size: number | null;
  uri: string | null;
  verified: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const artifact1Schema: Schema<Artifact1> = s.object<Artifact1>(
  {
    kind: kindDeliverdDevGatesApiSchema,
    reportId: s.nullable(s.string()),
    versionId: s.nullable(s.string()),
    versionNumber: s.nullable(s.float64()),
    sha256: s.nullable(s.string()),
    name: s.nullable(s.string()),
    mimeType: s.nullable(s.string()),
    size: s.nullable(s.float64()),
    uri: s.nullable(s.string()),
    verified: s.boolean(),
  },
  { additionalProperties: s.json() },
);
