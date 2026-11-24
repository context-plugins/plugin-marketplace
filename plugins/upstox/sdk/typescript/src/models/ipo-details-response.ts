import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoDetailsDataSchema, type IpoDetailsData } from "./ipo-details-data.js";
import { statusSchema, type Status } from "./status.js";

export type IpoDetailsResponse = {
  status?: Status;
  data?: IpoDetailsData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoDetailsResponseSchema: Schema<IpoDetailsResponse> = s.object<IpoDetailsResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => ipoDetailsDataSchema)),
  },
  { additionalProperties: s.json() },
);
