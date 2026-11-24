<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_comprehend/apis/operations.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.classify_document2

- **Route**: `POST /#ClassifyDocument`
- **Auth**: `sigv4`
- **Signature**: `def classify_document2(x_amz_target: XAmzTargetAmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ClassifyDocument2ErrorBody]`
- **Error**: `ClassifyDocument2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target_amazon_comprehend_operations_api.py` |
| `ClassifyDocument2ErrorBody` | `amazon_comprehend/errors/classify_document2_error.py` |

### client.operations.contains_pii_entities2

- **Route**: `POST /#ContainsPiiEntities`
- **Auth**: `sigv4`
- **Signature**: `def contains_pii_entities2(x_amz_target: XAmzTarget1AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ContainsPiiEntities2ErrorBody]`
- **Error**: `ContainsPiiEntities2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target1_amazon_comprehend_operations_api.py` |
| `ContainsPiiEntities2ErrorBody` | `amazon_comprehend/errors/contains_pii_entities2_error.py` |

### client.operations.detect_dominant_language2

- **Route**: `POST /#DetectDominantLanguage`
- **Auth**: `sigv4`
- **Signature**: `def detect_dominant_language2(x_amz_target: XAmzTarget2AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectDominantLanguage2ErrorBody]`
- **Error**: `DetectDominantLanguage2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target2_amazon_comprehend_operations_api.py` |
| `DetectDominantLanguage2ErrorBody` | `amazon_comprehend/errors/detect_dominant_language2_error.py` |

### client.operations.detect_entities2

- **Route**: `POST /#DetectEntities`
- **Auth**: `sigv4`
- **Signature**: `def detect_entities2(x_amz_target: XAmzTarget3AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectEntities2ErrorBody]`
- **Error**: `DetectEntities2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target3_amazon_comprehend_operations_api.py` |
| `DetectEntities2ErrorBody` | `amazon_comprehend/errors/detect_entities2_error.py` |

### client.operations.detect_key_phrases2

- **Route**: `POST /#DetectKeyPhrases`
- **Auth**: `sigv4`
- **Signature**: `def detect_key_phrases2(x_amz_target: XAmzTarget4AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectKeyPhrases2ErrorBody]`
- **Error**: `DetectKeyPhrases2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target4_amazon_comprehend_operations_api.py` |
| `DetectKeyPhrases2ErrorBody` | `amazon_comprehend/errors/detect_key_phrases2_error.py` |

### client.operations.detect_pii_entities2

- **Route**: `POST /#DetectPiiEntities`
- **Auth**: `sigv4`
- **Signature**: `def detect_pii_entities2(x_amz_target: XAmzTarget5AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectPiiEntities2ErrorBody]`
- **Error**: `DetectPiiEntities2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target5_amazon_comprehend_operations_api.py` |
| `DetectPiiEntities2ErrorBody` | `amazon_comprehend/errors/detect_pii_entities2_error.py` |

### client.operations.detect_sentiment2

- **Route**: `POST /#DetectSentiment`
- **Auth**: `sigv4`
- **Signature**: `def detect_sentiment2(x_amz_target: XAmzTarget6AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectSentiment2ErrorBody]`
- **Error**: `DetectSentiment2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target6_amazon_comprehend_operations_api.py` |
| `DetectSentiment2ErrorBody` | `amazon_comprehend/errors/detect_sentiment2_error.py` |

### client.operations.detect_syntax2

- **Route**: `POST /#DetectSyntax`
- **Auth**: `sigv4`
- **Signature**: `def detect_syntax2(x_amz_target: XAmzTarget7AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectSyntax2ErrorBody]`
- **Error**: `DetectSyntax2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target7_amazon_comprehend_operations_api.py` |
| `DetectSyntax2ErrorBody` | `amazon_comprehend/errors/detect_syntax2_error.py` |

### client.operations.detect_targeted_sentiment2

- **Route**: `POST /#DetectTargetedSentiment`
- **Auth**: `sigv4`
- **Signature**: `def detect_targeted_sentiment2(x_amz_target: XAmzTarget8AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectTargetedSentiment2ErrorBody]`
- **Error**: `DetectTargetedSentiment2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target8_amazon_comprehend_operations_api.py` |
| `DetectTargetedSentiment2ErrorBody` | `amazon_comprehend/errors/detect_targeted_sentiment2_error.py` |

### client.operations.detect_toxic_content

- **Route**: `POST /#DetectToxicContent`
- **Auth**: `sigv4`
- **Signature**: `def detect_toxic_content(x_amz_target: XAmzTarget9AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectToxicContentErrorBody]`
- **Error**: `DetectToxicContentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9AmazonComprehendOperationsApiOrStr` | `amazon_comprehend/models/enums/x_amz_target9_amazon_comprehend_operations_api.py` |
| `DetectToxicContentErrorBody` | `amazon_comprehend/errors/detect_toxic_content_error.py` |

