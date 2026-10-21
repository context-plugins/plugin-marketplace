<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerClassification — operations

Accessor: `client.containerClassification` · Source: `src/resources/container-classification.ts` · 1 operation · Request and error types: namespace `ContainerClassification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### containerTextClassification

- **Signature**: `containerTextClassification(request: ContainerClassification.ContainerTextClassificationRequest, options?: RequestOptions): ApiPromise<TextClassificationResult, ContainerClassification.ContainerTextClassificationError>`
- **Wire**: `POST /classify`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TextClassificationResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerClassification.ContainerTextClassificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerClassification.ContainerTextClassificationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerTextClassificationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerTextClassificationBody` | `containerTextClassificationBodySchema` | `src/models/container-text-classification-body.ts` |
| `TextClassificationResult` | `textClassificationResultSchema` | `src/models/text-classification-result.ts` |

