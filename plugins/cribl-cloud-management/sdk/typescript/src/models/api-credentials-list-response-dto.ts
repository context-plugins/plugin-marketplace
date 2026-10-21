import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiCredentialResponseSchemaSchema,
  type ApiCredentialResponseSchema,
} from "./api-credential-response-schema.js";

export type ApiCredentialsListResponseDto = {
  /** List of API Credentials. */
  items: ApiCredentialResponseSchema[];
  /** Total number of API Credentials listed in the response. */
  count: number;
};

export const apiCredentialsListResponseDtoSchema: Schema<ApiCredentialsListResponseDto> =
  s.object<ApiCredentialsListResponseDto>({
    items: s.array(s.lazy(() => apiCredentialResponseSchemaSchema)),
    count: s.int(),
  });
