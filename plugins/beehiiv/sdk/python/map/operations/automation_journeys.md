<!-- Generated file — do not edit; regenerated with the SDK. -->

# AutomationJourneys — operations

Accessor: `client.automation_journeys` · Source: `beehiiv/apis/automation_journeys.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.automation_journeys.create2

- **Route**: `POST /publications/{publicationId}/automations/{automationId}/journeys`
- **Server**: `default`
- **Signature**: `def create2(publication_id: str, automation_id: str, authorization: str, *, body: PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `automation_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `automation_id` — path `automationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `AutomationJourneysResponse`
- **Returns (raw)**: `ApiResult[AutomationJourneysResponse, Create2ErrorBody]`
- **Error**: `Create2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsAutomationsJourneysRequest` | `beehiiv/models/publications_automations_journeys_request.py` |
| `PublicationsAutomationsJourneysRequestDict` | `beehiiv/models/publications_automations_journeys_request.py` |
| `AutomationJourneysResponse` | `beehiiv/models/automation_journeys_response.py` |
| `Create2ErrorBody` | `beehiiv/errors/create2_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.automation_journeys.index5

- **Route**: `GET /publications/{publicationId}/automations/{automationId}/journeys`
- **Server**: `default`
- **Signature**: `def index5(publication_id: str, automation_id: str, authorization: str, *, status: AutomationJourneysGetRequestStatusOrStr | None = AutomationJourneysGetRequestStatus.ALL, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `automation_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `automation_id` — path `automationId` · `status` — query · `limit` — query · `page` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AutomationJourneysIndexResponse`
- **Returns (raw)**: `ApiResult[AutomationJourneysIndexResponse, Index5ErrorBody]`
- **Error**: `Index5ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationJourneysGetRequestStatusOrStr` | `beehiiv/models/enums/automation_journeys_get_request_status.py` |
| `AutomationJourneysIndexResponse` | `beehiiv/models/automation_journeys_index_response.py` |
| `Index5ErrorBody` | `beehiiv/errors/index5_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.automation_journeys.show2

- **Route**: `GET /publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}`
- **Server**: `default`
- **Signature**: `def show2(publication_id: str, automation_id: str, automation_journey_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `automation_id`, `automation_journey_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `automation_id` — path `automationId` · `automation_journey_id` — path `automationJourneyId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `AutomationJourneysResponse`
- **Returns (raw)**: `ApiResult[AutomationJourneysResponse, Show2ErrorBody]`
- **Error**: `Show2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationJourneysResponse` | `beehiiv/models/automation_journeys_response.py` |
| `Show2ErrorBody` | `beehiiv/errors/show2_error.py` |
| `Error` | `beehiiv/models/error.py` |

