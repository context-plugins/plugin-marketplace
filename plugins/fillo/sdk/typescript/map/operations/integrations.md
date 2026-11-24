<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.integrations` · Source: `src/resources/integrations.ts` · 11 operations · Request and error types: namespace `Integrations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### detachIntegrationConnection

- **Signature**: `detachIntegrationConnection(request: Integrations.DetachIntegrationConnectionRequest, options?: RequestOptions): ApiPromise<ApiV1ManageIntegrationsConnectionsResponse, Integrations.DetachIntegrationConnectionError>`
- **Wire**: `DELETE /api/v1/manage/integrations/connections/{provider}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageIntegrationsConnectionsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.DetachIntegrationConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.DetachIntegrationConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `provider` | `path` | `Provider1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Provider1` | `provider1Schema` | `src/models/provider1.ts` |
| `ApiV1ManageIntegrationsConnectionsResponse` | `apiV1ManageIntegrationsConnectionsResponseSchema` | `src/models/api-v1-manage-integrations-connections-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### disableFormIntegration

- **Signature**: `disableFormIntegration(request: Integrations.DisableFormIntegrationRequest, options?: RequestOptions): ApiPromise<FormIntegration, Integrations.DisableFormIntegrationError>`
- **Wire**: `DELETE /api/v1/manage/forms/{form}/integrations/{provider}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FormIntegration`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.DisableFormIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.DisableFormIntegrationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `provider` | `path` | `Provider` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Provider` | `providerSchema` | `src/models/provider.ts` |
| `FormIntegration` | `formIntegrationSchema` | `src/models/form-integration.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### disconnectDiscordServer

- **Signature**: `disconnectDiscordServer(request: Integrations.DisconnectDiscordServerRequest, options?: RequestOptions): ApiPromise<ApiV1ManageIntegrationsDiscordServersResponse, Integrations.DisconnectDiscordServerError>`
- **Wire**: `DELETE /api/v1/manage/integrations/discord/servers/{guildId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageIntegrationsDiscordServersResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.DisconnectDiscordServerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.DisconnectDiscordServerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `guildId` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageIntegrationsDiscordServersResponse` | `apiV1ManageIntegrationsDiscordServersResponseSchema` | `src/models/api-v1-manage-integrations-discord-servers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFormIntegration

- **Signature**: `getFormIntegration(request: Integrations.GetFormIntegrationRequest, options?: RequestOptions): ApiPromise<FormIntegration, Integrations.GetFormIntegrationError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/integrations/{provider}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormIntegration`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.GetFormIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.GetFormIntegrationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `provider` | `path` | `Provider` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Provider` | `providerSchema` | `src/models/provider.ts` |
| `FormIntegration` | `formIntegrationSchema` | `src/models/form-integration.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listHubspotPipelines

- **Signature**: `listHubspotPipelines(options?: RequestOptions): ApiPromise<ApiV1ManageIntegrationsHubspotPipelinesResponse, Integrations.ListHubspotPipelinesError>`
- **Wire**: `GET /api/v1/manage/integrations/hubspot/pipelines`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageIntegrationsHubspotPipelinesResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.ListHubspotPipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageIntegrationsHubspotPipelinesResponse` | `apiV1ManageIntegrationsHubspotPipelinesResponseSchema` | `src/models/api-v1-manage-integrations-hubspot-pipelines-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listHubspotProperties

- **Signature**: `listHubspotProperties(options?: RequestOptions): ApiPromise<ApiV1ManageIntegrationsHubspotPropertiesResponse, Integrations.ListHubspotPropertiesError>`
- **Wire**: `GET /api/v1/manage/integrations/hubspot/properties`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageIntegrationsHubspotPropertiesResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.ListHubspotPropertiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageIntegrationsHubspotPropertiesResponse` | `apiV1ManageIntegrationsHubspotPropertiesResponseSchema` | `src/models/api-v1-manage-integrations-hubspot-properties-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listIntegrationConnections

- **Signature**: `listIntegrationConnections(options?: RequestOptions): ApiPromise<IntegrationConnections, Integrations.ListIntegrationConnectionsError>`
- **Wire**: `GET /api/v1/manage/integrations/connections`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationConnections`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.ListIntegrationConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationConnections` | `integrationConnectionsSchema` | `src/models/integration-connections.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeIntegrationAccount

- **Signature**: `removeIntegrationAccount(request: Integrations.RemoveIntegrationAccountRequest, options?: RequestOptions): ApiPromise<ApiV1ManageIntegrationsAccountsResponse, Integrations.RemoveIntegrationAccountError>`
- **Wire**: `DELETE /api/v1/manage/integrations/accounts/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageIntegrationsAccountsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.RemoveIntegrationAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.RemoveIntegrationAccountRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageIntegrationsAccountsResponse` | `apiV1ManageIntegrationsAccountsResponseSchema` | `src/models/api-v1-manage-integrations-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### renameDiscordChannel

- **Signature**: `renameDiscordChannel(request: Integrations.RenameDiscordChannelRequest, options?: RequestOptions): ApiPromise<ApiV1ManageIntegrationsDiscordAccountsResponse, Integrations.RenameDiscordChannelError>`
- **Wire**: `PATCH /api/v1/manage/integrations/discord/accounts/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageIntegrationsDiscordAccountsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.RenameDiscordChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.RenameDiscordChannelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageIntegrationsDiscordAccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageIntegrationsDiscordAccountsRequest` | `apiV1ManageIntegrationsDiscordAccountsRequestSchema` | `src/models/api-v1-manage-integrations-discord-accounts-request.ts` |
| `ApiV1ManageIntegrationsDiscordAccountsResponse` | `apiV1ManageIntegrationsDiscordAccountsResponseSchema` | `src/models/api-v1-manage-integrations-discord-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### selectIntegrationConnection

- **Signature**: `selectIntegrationConnection(request: Integrations.SelectIntegrationConnectionRequest, options?: RequestOptions): ApiPromise<IntegrationConnections, Integrations.SelectIntegrationConnectionError>`
- **Wire**: `PUT /api/v1/manage/integrations/connections/{provider}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntegrationConnections`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.SelectIntegrationConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.SelectIntegrationConnectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `provider` | `path` | `Provider1` | yes |
| `body` | `body` | `ApiV1ManageIntegrationsConnectionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Provider1` | `provider1Schema` | `src/models/provider1.ts` |
| `ApiV1ManageIntegrationsConnectionsRequest` | `apiV1ManageIntegrationsConnectionsRequestSchema` | `src/models/api-v1-manage-integrations-connections-request.ts` |
| `IntegrationConnections` | `integrationConnectionsSchema` | `src/models/integration-connections.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setFormIntegration

- **Signature**: `setFormIntegration(request: Integrations.SetFormIntegrationRequest, options?: RequestOptions): ApiPromise<FormIntegration, Integrations.SetFormIntegrationError>`
- **Wire**: `PUT /api/v1/manage/forms/{form}/integrations/{provider}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FormIntegration`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Integrations.SetFormIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.SetFormIntegrationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `provider` | `path` | `Provider` | yes |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Provider` | `providerSchema` | `src/models/provider.ts` |
| `FormIntegration` | `formIntegrationSchema` | `src/models/form-integration.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

