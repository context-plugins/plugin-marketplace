<!-- Generated file — do not edit; regenerated with the SDK. -->

# Createuploadurl — operations

Accessor: `client.createuploadurl` · Source: `src/resources/createuploadurl.ts` · 1 operation · Request and error types: namespace `Createuploadurl`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUploadUrl

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUploadUrl(request?: Createuploadurl.CreateUploadUrlRequest, options?: RequestOptions): ApiPromise<CreateUploadUrlResponse, Createuploadurl.CreateUploadUrlError>`
- **Wire**: `POST /createuploadurl`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateUploadUrlResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Createuploadurl.CreateUploadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Createuploadurl.CreateUploadUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateUploadUrlResponse` | `createUploadUrlResponseSchema` | `src/models/create-upload-url-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

