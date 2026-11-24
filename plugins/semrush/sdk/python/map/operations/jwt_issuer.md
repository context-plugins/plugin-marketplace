<!-- Generated file — do not edit; regenerated with the SDK. -->

# JwtIssuer — operations

Accessor: `client.jwt_issuer` · Source: `semrush/apis/jwt_issuer.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jwt_issuer.post_app_center_api_v2_jwt_token

- **Route**: `POST /app-center-api/v2/jwt-token/`
- **Signature**: `def post_app_center_api_v2_jwt_token(*, body: IssuerJwtRequest | IssuerJwtRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IssuerJwtResponse`
- **Returns (raw)**: `ApiResult[IssuerJwtResponse, PostAppCenterApiV2JwtTokenErrorBody]`
- **Error**: `PostAppCenterApiV2JwtTokenErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssuerJwtRequest` | `semrush/models/issuer_jwt_request.py` |
| `IssuerJwtRequestDict` | `semrush/models/issuer_jwt_request.py` |
| `IssuerJwtResponse` | `semrush/models/issuer_jwt_response.py` |
| `PostAppCenterApiV2JwtTokenErrorBody` | `semrush/errors/post_app_center_api_v2_jwt_token_error.py` |

