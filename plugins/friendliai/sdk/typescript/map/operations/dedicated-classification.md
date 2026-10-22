<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedClassification — operations

Accessor: `client.dedicatedClassification` · Source: `src/resources/dedicated-classification.ts` · 1 operation · Request and error types: namespace `DedicatedClassification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dedicatedTextClassification

- **Signature**: `dedicatedTextClassification(request: DedicatedClassification.DedicatedTextClassificationRequest, options?: RequestOptions): ApiPromise<TextClassificationResult, DedicatedClassification.DedicatedTextClassificationError>`
- **Wire**: `POST /dedicated/classify`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TextClassificationResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedClassification.DedicatedTextClassificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedClassification.DedicatedTextClassificationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedTextClassificationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedTextClassificationBody` | `dedicatedTextClassificationBodySchema` | `src/models/dedicated-text-classification-body.ts` |
| `TextClassificationResult` | `textClassificationResultSchema` | `src/models/text-classification-result.ts` |

