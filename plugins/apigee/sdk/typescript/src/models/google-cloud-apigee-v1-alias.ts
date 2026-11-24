import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1Certificate2Schema,
  type GoogleCloudApigeeV1Certificate2,
} from "./google-cloud-apigee-v1-certificate2.js";
import { type2Schema, type Type2 } from "./type2.js";

/** Reference to a certificate or key/certificate pair. */
export type GoogleCloudApigeeV1Alias = {
  /** Resource ID for this alias. Values must match the regular expression `[^/]{1,255}`. */
  alias?: string;
  /** Type of alias. */
  type?: Type2;
  /** Chain of certificates under this alias. */
  certsInfo?: GoogleCloudApigeeV1Certificate2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AliasSchema: Schema<GoogleCloudApigeeV1Alias> =
  s.object<GoogleCloudApigeeV1Alias>(
    {
      alias: s.optional(s.string()),
      type: s.optional(s.lazy(() => type2Schema)),
      certsInfo: s.optional(s.lazy(() => googleCloudApigeeV1Certificate2Schema)),
    },
    { additionalProperties: s.json() },
  );
