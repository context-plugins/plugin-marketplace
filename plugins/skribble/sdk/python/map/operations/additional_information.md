<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdditionalInformation — operations

Accessor: `client.additional_information` · Source: `skribble/apis/additional_information.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.additional_information.get_infos_format

- **Route**: `GET /infos/{id}/format`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_infos_format(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FormatInfosResponse`
- **Returns (raw)**: `ApiResult[FormatInfosResponse, GetInfosFormatErrorBody]`
- **Error**: `GetInfosFormatErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatInfosResponse` | `skribble/models/format_infos_response.py` |
| `GetInfosFormatErrorBody` | `skribble/errors/get_infos_format_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.additional_information.get_infos_signers

- **Route**: `GET /infos/{id}/signers`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_infos_signers(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `list[Signer]`
- **Returns (raw)**: `ApiResult[list[Signer], GetInfosSignersErrorBody]`
- **Error**: `GetInfosSignersErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Signer` | `skribble/models/signer.py` |
| `GetInfosSignersErrorBody` | `skribble/errors/get_infos_signers_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.additional_information.get_infos_validation

- **Route**: `GET /infos/{id}/validation`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_infos_validation(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ValidationInfosResponse`
- **Returns (raw)**: `ApiResult[ValidationInfosResponse, GetInfosValidationErrorBody]`
- **Error**: `GetInfosValidationErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValidationInfosResponse` | `skribble/models/validation_infos_response.py` |
| `GetInfosValidationErrorBody` | `skribble/errors/get_infos_validation_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

