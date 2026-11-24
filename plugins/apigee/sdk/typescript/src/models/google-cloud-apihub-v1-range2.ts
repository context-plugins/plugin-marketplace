import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Point1Schema,
  type GoogleCloudApihubV1Point1,
} from "./google-cloud-apihub-v1-point1.js";
import {
  googleCloudApihubV1Point3Schema,
  type GoogleCloudApihubV1Point3,
} from "./google-cloud-apihub-v1-point3.js";

/** Required. Object describing where in the file the issue was found. */
export type GoogleCloudApihubV1Range2 = {
  /** Required. Start of the issue. */
  start?: GoogleCloudApihubV1Point3;
  /** Required. End of the issue. */
  end?: GoogleCloudApihubV1Point1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Range2Schema: Schema<GoogleCloudApihubV1Range2> =
  s.object<GoogleCloudApihubV1Range2>(
    {
      start: s.optional(s.lazy(() => googleCloudApihubV1Point3Schema)),
      end: s.optional(s.lazy(() => googleCloudApihubV1Point1Schema)),
    },
    { additionalProperties: s.json() },
  );
