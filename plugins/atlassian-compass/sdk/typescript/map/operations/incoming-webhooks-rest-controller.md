<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomingWebhooksRestController — operations

Accessor: `client.incomingWebhooksRestController` · Source: `src/resources/incoming-webhooks-rest-controller.ts` · 1 operation · Request and error types: namespace `IncomingWebhooksRestController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `atlassian-compass`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### handleWebhookInvocation

- **Signature**: `handleWebhookInvocation(request: IncomingWebhooksRestController.HandleWebhookInvocationRequest, options?: RequestOptions): ApiPromise<undefined, IncomingWebhooksRestController.HandleWebhookInvocationError>`
- **Wire**: `POST /compass/v1/webhooks/{webhookId}`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON string
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `IncomingWebhooksRestController.HandleWebhookInvocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [400] `ErrorResponseDto` · `"errorResponseDto2"` [401] `ErrorResponseDto` · `"errorResponseDto3"` [404] `ErrorResponseDto` · `"errorResponseDto4"` [405] `ErrorResponseDto` · `"error429"` [429] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IncomingWebhooksRestController.HandleWebhookInvocationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |

