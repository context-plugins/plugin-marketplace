import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageIntegrationsConnectionsRequest = {
  connectionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageIntegrationsConnectionsRequestProperties: s.Shape<ApiV1ManageIntegrationsConnectionsRequest> =
  {
    connectionId: s.string(),
  };

export const apiV1ManageIntegrationsConnectionsRequestInternalSchema: Schema<ApiV1ManageIntegrationsConnectionsRequest> =
  s.object<ApiV1ManageIntegrationsConnectionsRequest>(apiV1ManageIntegrationsConnectionsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageIntegrationsConnectionsRequestSchema: Schema<ApiV1ManageIntegrationsConnectionsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ManageIntegrationsConnectionsRequest>(
      {
        ...apiV1ManageIntegrationsConnectionsRequestProperties,
        connectionId: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
