import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerCodeqrIoTrackApi = {
  id: string;
  name?: string | null;
  email?: string | null;
  avatar?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerCodeqrIoTrackApiSchema: Schema<CustomerCodeqrIoTrackApi> =
  s.object<CustomerCodeqrIoTrackApi>(
    {
      id: s.string(),
      name: s.optionalNullable(s.string()),
      email: s.optionalNullable(s.string()),
      avatar: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
