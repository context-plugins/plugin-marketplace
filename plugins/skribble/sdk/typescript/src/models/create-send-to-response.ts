import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSendToResponse = {
  /** URL to claim document to get signed. */
  url: string;
  /** Generated send-to document ID */
  id: string;
  /** Access code to be used in for endpoints. */
  accessCode: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSendToResponseProperties: s.Shape<CreateSendToResponse> = {
  url: s.string(),
  id: s.string(),
  accessCode: s.string(),
  _keysMap: {
    accessCode: "access_code",
  },
};

export const createSendToResponseInternalSchema: Schema<CreateSendToResponse> =
  s.object<CreateSendToResponse>(createSendToResponseProperties, { additionalProperties: s.json() });

export const createSendToResponseSchema: Schema<CreateSendToResponse> = s.lazySchema(() =>
  s.object<CreateSendToResponse>(
    {
      ...createSendToResponseProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
