<!-- Generated file — do not edit; regenerated with the SDK. -->

# SocialAccountApi — operations

Accessor: `client.social_account_api` · Source: `bundle_social/apis/social_account_api.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.social_account_api.social_account_connect

- **Route**: `POST /api/v1/social-account/connect`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_connect(*, body: ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountConnectResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountConnectResponse, SocialAccountConnectErrorBody]`
- **Error**: `SocialAccountConnectErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountConnect400Error1` [400] · `ApiV1SocialAccountConnect401Error1` [401] · `ApiV1SocialAccountConnect403Error1` [403] · `ApiV1SocialAccountConnect404Error1` [404] · `ApiV1SocialAccountConnect429Error1` [429] · `ApiV1SocialAccountConnect500Error1` [500] · `ApiV1SocialAccountConnect502Error1` [502] · `ApiV1SocialAccountConnect503Error1` [503] · `ApiV1SocialAccountConnect504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountConnectRequest` | `bundle_social/models/api_v1_social_account_connect_request.py` |
| `ApiV1SocialAccountConnectRequestDict` | `bundle_social/models/api_v1_social_account_connect_request.py` |
| `ApiV1SocialAccountConnectResponse` | `bundle_social/models/api_v1_social_account_connect_response.py` |
| `SocialAccountConnectErrorBody` | `bundle_social/errors/social_account_connect_error.py` |
| `ApiV1SocialAccountConnect400Error1` | `bundle_social/models/api_v1_social_account_connect400_error1.py` |
| `ApiV1SocialAccountConnect401Error1` | `bundle_social/models/api_v1_social_account_connect401_error1.py` |
| `ApiV1SocialAccountConnect403Error1` | `bundle_social/models/api_v1_social_account_connect403_error1.py` |
| `ApiV1SocialAccountConnect404Error1` | `bundle_social/models/api_v1_social_account_connect404_error1.py` |
| `ApiV1SocialAccountConnect429Error1` | `bundle_social/models/api_v1_social_account_connect429_error1.py` |
| `ApiV1SocialAccountConnect500Error1` | `bundle_social/models/api_v1_social_account_connect500_error1.py` |
| `ApiV1SocialAccountConnect502Error1` | `bundle_social/models/api_v1_social_account_connect502_error1.py` |
| `ApiV1SocialAccountConnect503Error1` | `bundle_social/models/api_v1_social_account_connect503_error1.py` |
| `ApiV1SocialAccountConnect504Error1` | `bundle_social/models/api_v1_social_account_connect504_error1.py` |

### client.social_account_api.social_account_connection_check

- **Route**: `POST /api/v1/social-account/connection-check`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_connection_check(*, body: ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountConnectionCheckResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountConnectionCheckResponse, SocialAccountConnectionCheckErrorBody]`
- **Error**: `SocialAccountConnectionCheckErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountConnectionCheck400Error1` [400] · `ApiV1SocialAccountConnectionCheck401Error1` [401] · `ApiV1SocialAccountConnectionCheck403Error1` [403] · `ApiV1SocialAccountConnectionCheck404Error1` [404] · `ApiV1SocialAccountConnectionCheck429Error1` [429] · `ApiV1SocialAccountConnectionCheck500Error1` [500] · `ApiV1SocialAccountConnectionCheck502Error1` [502] · `ApiV1SocialAccountConnectionCheck503Error1` [503] · `ApiV1SocialAccountConnectionCheck504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountConnectionCheckRequest` | `bundle_social/models/api_v1_social_account_connection_check_request.py` |
| `ApiV1SocialAccountConnectionCheckRequestDict` | `bundle_social/models/api_v1_social_account_connection_check_request.py` |
| `ApiV1SocialAccountConnectionCheckResponse` | `bundle_social/models/api_v1_social_account_connection_check_response.py` |
| `SocialAccountConnectionCheckErrorBody` | `bundle_social/errors/social_account_connection_check_error.py` |
| `ApiV1SocialAccountConnectionCheck400Error1` | `bundle_social/models/api_v1_social_account_connection_check400_error1.py` |
| `ApiV1SocialAccountConnectionCheck401Error1` | `bundle_social/models/api_v1_social_account_connection_check401_error1.py` |
| `ApiV1SocialAccountConnectionCheck403Error1` | `bundle_social/models/api_v1_social_account_connection_check403_error1.py` |
| `ApiV1SocialAccountConnectionCheck404Error1` | `bundle_social/models/api_v1_social_account_connection_check404_error1.py` |
| `ApiV1SocialAccountConnectionCheck429Error1` | `bundle_social/models/api_v1_social_account_connection_check429_error1.py` |
| `ApiV1SocialAccountConnectionCheck500Error1` | `bundle_social/models/api_v1_social_account_connection_check500_error1.py` |
| `ApiV1SocialAccountConnectionCheck502Error1` | `bundle_social/models/api_v1_social_account_connection_check502_error1.py` |
| `ApiV1SocialAccountConnectionCheck503Error1` | `bundle_social/models/api_v1_social_account_connection_check503_error1.py` |
| `ApiV1SocialAccountConnectionCheck504Error1` | `bundle_social/models/api_v1_social_account_connection_check504_error1.py` |

### client.social_account_api.social_account_copy

- **Route**: `POST /api/v1/social-account/copy`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_copy(*, body: ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[ApiV1SocialAccountCopyResponse]`
- **Returns (raw)**: `ApiResult[list[ApiV1SocialAccountCopyResponse], SocialAccountCopyErrorBody]`
- **Error**: `SocialAccountCopyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountCopy400Error1` [400] · `ApiV1SocialAccountCopy401Error1` [401] · `ApiV1SocialAccountCopy403Error1` [403] · `ApiV1SocialAccountCopy404Error1` [404] · `ApiV1SocialAccountCopy429Error1` [429] · `ApiV1SocialAccountCopy500Error1` [500] · `ApiV1SocialAccountCopy502Error1` [502] · `ApiV1SocialAccountCopy503Error1` [503] · `ApiV1SocialAccountCopy504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountCopyRequest` | `bundle_social/models/api_v1_social_account_copy_request.py` |
| `ApiV1SocialAccountCopyRequestDict` | `bundle_social/models/api_v1_social_account_copy_request.py` |
| `ApiV1SocialAccountCopyResponse` | `bundle_social/models/api_v1_social_account_copy_response.py` |
| `SocialAccountCopyErrorBody` | `bundle_social/errors/social_account_copy_error.py` |
| `ApiV1SocialAccountCopy400Error1` | `bundle_social/models/api_v1_social_account_copy400_error1.py` |
| `ApiV1SocialAccountCopy401Error1` | `bundle_social/models/api_v1_social_account_copy401_error1.py` |
| `ApiV1SocialAccountCopy403Error1` | `bundle_social/models/api_v1_social_account_copy403_error1.py` |
| `ApiV1SocialAccountCopy404Error1` | `bundle_social/models/api_v1_social_account_copy404_error1.py` |
| `ApiV1SocialAccountCopy429Error1` | `bundle_social/models/api_v1_social_account_copy429_error1.py` |
| `ApiV1SocialAccountCopy500Error1` | `bundle_social/models/api_v1_social_account_copy500_error1.py` |
| `ApiV1SocialAccountCopy502Error1` | `bundle_social/models/api_v1_social_account_copy502_error1.py` |
| `ApiV1SocialAccountCopy503Error1` | `bundle_social/models/api_v1_social_account_copy503_error1.py` |
| `ApiV1SocialAccountCopy504Error1` | `bundle_social/models/api_v1_social_account_copy504_error1.py` |

### client.social_account_api.social_account_create_portal_link

- **Route**: `POST /api/v1/social-account/create-portal-link`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_create_portal_link(*, body: ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountCreatePortalLinkResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountCreatePortalLinkResponse, SocialAccountCreatePortalLinkErrorBody]`
- **Error**: `SocialAccountCreatePortalLinkErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountCreatePortalLink400Error1` [400] · `ApiV1SocialAccountCreatePortalLink401Error1` [401] · `ApiV1SocialAccountCreatePortalLink403Error1` [403] · `ApiV1SocialAccountCreatePortalLink404Error1` [404] · `ApiV1SocialAccountCreatePortalLink429Error1` [429] · `ApiV1SocialAccountCreatePortalLink500Error1` [500] · `ApiV1SocialAccountCreatePortalLink502Error1` [502] · `ApiV1SocialAccountCreatePortalLink503Error1` [503] · `ApiV1SocialAccountCreatePortalLink504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountCreatePortalLinkRequest` | `bundle_social/models/api_v1_social_account_create_portal_link_request.py` |
| `ApiV1SocialAccountCreatePortalLinkRequestDict` | `bundle_social/models/api_v1_social_account_create_portal_link_request.py` |
| `ApiV1SocialAccountCreatePortalLinkResponse` | `bundle_social/models/api_v1_social_account_create_portal_link_response.py` |
| `SocialAccountCreatePortalLinkErrorBody` | `bundle_social/errors/social_account_create_portal_link_error.py` |
| `ApiV1SocialAccountCreatePortalLink400Error1` | `bundle_social/models/api_v1_social_account_create_portal_link400_error1.py` |
| `ApiV1SocialAccountCreatePortalLink401Error1` | `bundle_social/models/api_v1_social_account_create_portal_link401_error1.py` |
| `ApiV1SocialAccountCreatePortalLink403Error1` | `bundle_social/models/api_v1_social_account_create_portal_link403_error1.py` |
| `ApiV1SocialAccountCreatePortalLink404Error1` | `bundle_social/models/api_v1_social_account_create_portal_link404_error1.py` |
| `ApiV1SocialAccountCreatePortalLink429Error1` | `bundle_social/models/api_v1_social_account_create_portal_link429_error1.py` |
| `ApiV1SocialAccountCreatePortalLink500Error1` | `bundle_social/models/api_v1_social_account_create_portal_link500_error1.py` |
| `ApiV1SocialAccountCreatePortalLink502Error1` | `bundle_social/models/api_v1_social_account_create_portal_link502_error1.py` |
| `ApiV1SocialAccountCreatePortalLink503Error1` | `bundle_social/models/api_v1_social_account_create_portal_link503_error1.py` |
| `ApiV1SocialAccountCreatePortalLink504Error1` | `bundle_social/models/api_v1_social_account_create_portal_link504_error1.py` |

### client.social_account_api.social_account_disable_messaging

- **Route**: `POST /api/v1/social-account/messaging/disable`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_disable_messaging(*, body: ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountMessagingDisableResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountMessagingDisableResponse, SocialAccountDisableMessagingErrorBody]`
- **Error**: `SocialAccountDisableMessagingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountMessagingDisable400Error1` [400] · `ApiV1SocialAccountMessagingDisable401Error1` [401] · `ApiV1SocialAccountMessagingDisable403Error1` [403] · `ApiV1SocialAccountMessagingDisable404Error1` [404] · `ApiV1SocialAccountMessagingDisable429Error1` [429] · `ApiV1SocialAccountMessagingDisable500Error1` [500] · `ApiV1SocialAccountMessagingDisable502Error1` [502] · `ApiV1SocialAccountMessagingDisable503Error1` [503] · `ApiV1SocialAccountMessagingDisable504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountMessagingDisableRequest` | `bundle_social/models/api_v1_social_account_messaging_disable_request.py` |
| `ApiV1SocialAccountMessagingDisableRequestDict` | `bundle_social/models/api_v1_social_account_messaging_disable_request.py` |
| `ApiV1SocialAccountMessagingDisableResponse` | `bundle_social/models/api_v1_social_account_messaging_disable_response.py` |
| `SocialAccountDisableMessagingErrorBody` | `bundle_social/errors/social_account_disable_messaging_error.py` |
| `ApiV1SocialAccountMessagingDisable400Error1` | `bundle_social/models/api_v1_social_account_messaging_disable400_error1.py` |
| `ApiV1SocialAccountMessagingDisable401Error1` | `bundle_social/models/api_v1_social_account_messaging_disable401_error1.py` |
| `ApiV1SocialAccountMessagingDisable403Error1` | `bundle_social/models/api_v1_social_account_messaging_disable403_error1.py` |
| `ApiV1SocialAccountMessagingDisable404Error1` | `bundle_social/models/api_v1_social_account_messaging_disable404_error1.py` |
| `ApiV1SocialAccountMessagingDisable429Error1` | `bundle_social/models/api_v1_social_account_messaging_disable429_error1.py` |
| `ApiV1SocialAccountMessagingDisable500Error1` | `bundle_social/models/api_v1_social_account_messaging_disable500_error1.py` |
| `ApiV1SocialAccountMessagingDisable502Error1` | `bundle_social/models/api_v1_social_account_messaging_disable502_error1.py` |
| `ApiV1SocialAccountMessagingDisable503Error1` | `bundle_social/models/api_v1_social_account_messaging_disable503_error1.py` |
| `ApiV1SocialAccountMessagingDisable504Error1` | `bundle_social/models/api_v1_social_account_messaging_disable504_error1.py` |

### client.social_account_api.social_account_disconnect

- **Route**: `DELETE /api/v1/social-account/disconnect`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_disconnect(*, body: ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountDisconnectResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountDisconnectResponse, SocialAccountDisconnectErrorBody]`
- **Error**: `SocialAccountDisconnectErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountDisconnect400Error1` [400] · `ApiV1SocialAccountDisconnect401Error1` [401] · `ApiV1SocialAccountDisconnect403Error1` [403] · `ApiV1SocialAccountDisconnect404Error1` [404] · `ApiV1SocialAccountDisconnect429Error1` [429] · `ApiV1SocialAccountDisconnect500Error1` [500] · `ApiV1SocialAccountDisconnect502Error1` [502] · `ApiV1SocialAccountDisconnect503Error1` [503] · `ApiV1SocialAccountDisconnect504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountDisconnectRequest` | `bundle_social/models/api_v1_social_account_disconnect_request.py` |
| `ApiV1SocialAccountDisconnectRequestDict` | `bundle_social/models/api_v1_social_account_disconnect_request.py` |
| `ApiV1SocialAccountDisconnectResponse` | `bundle_social/models/api_v1_social_account_disconnect_response.py` |
| `SocialAccountDisconnectErrorBody` | `bundle_social/errors/social_account_disconnect_error.py` |
| `ApiV1SocialAccountDisconnect400Error1` | `bundle_social/models/api_v1_social_account_disconnect400_error1.py` |
| `ApiV1SocialAccountDisconnect401Error1` | `bundle_social/models/api_v1_social_account_disconnect401_error1.py` |
| `ApiV1SocialAccountDisconnect403Error1` | `bundle_social/models/api_v1_social_account_disconnect403_error1.py` |
| `ApiV1SocialAccountDisconnect404Error1` | `bundle_social/models/api_v1_social_account_disconnect404_error1.py` |
| `ApiV1SocialAccountDisconnect429Error1` | `bundle_social/models/api_v1_social_account_disconnect429_error1.py` |
| `ApiV1SocialAccountDisconnect500Error1` | `bundle_social/models/api_v1_social_account_disconnect500_error1.py` |
| `ApiV1SocialAccountDisconnect502Error1` | `bundle_social/models/api_v1_social_account_disconnect502_error1.py` |
| `ApiV1SocialAccountDisconnect503Error1` | `bundle_social/models/api_v1_social_account_disconnect503_error1.py` |
| `ApiV1SocialAccountDisconnect504Error1` | `bundle_social/models/api_v1_social_account_disconnect504_error1.py` |

### client.social_account_api.social_account_enable_messaging

- **Route**: `POST /api/v1/social-account/messaging/enable`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_enable_messaging(*, body: ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountMessagingEnableResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountMessagingEnableResponse, SocialAccountEnableMessagingErrorBody]`
- **Error**: `SocialAccountEnableMessagingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountMessagingEnable400Error1` [400] · `ApiV1SocialAccountMessagingEnable401Error1` [401] · `ApiV1SocialAccountMessagingEnable403Error1` [403] · `ApiV1SocialAccountMessagingEnable404Error1` [404] · `ApiV1SocialAccountMessagingEnable429Error1` [429] · `ApiV1SocialAccountMessagingEnable500Error1` [500] · `ApiV1SocialAccountMessagingEnable502Error1` [502] · `ApiV1SocialAccountMessagingEnable503Error1` [503] · `ApiV1SocialAccountMessagingEnable504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountMessagingEnableRequest` | `bundle_social/models/api_v1_social_account_messaging_enable_request.py` |
| `ApiV1SocialAccountMessagingEnableRequestDict` | `bundle_social/models/api_v1_social_account_messaging_enable_request.py` |
| `ApiV1SocialAccountMessagingEnableResponse` | `bundle_social/models/api_v1_social_account_messaging_enable_response.py` |
| `SocialAccountEnableMessagingErrorBody` | `bundle_social/errors/social_account_enable_messaging_error.py` |
| `ApiV1SocialAccountMessagingEnable400Error1` | `bundle_social/models/api_v1_social_account_messaging_enable400_error1.py` |
| `ApiV1SocialAccountMessagingEnable401Error1` | `bundle_social/models/api_v1_social_account_messaging_enable401_error1.py` |
| `ApiV1SocialAccountMessagingEnable403Error1` | `bundle_social/models/api_v1_social_account_messaging_enable403_error1.py` |
| `ApiV1SocialAccountMessagingEnable404Error1` | `bundle_social/models/api_v1_social_account_messaging_enable404_error1.py` |
| `ApiV1SocialAccountMessagingEnable429Error1` | `bundle_social/models/api_v1_social_account_messaging_enable429_error1.py` |
| `ApiV1SocialAccountMessagingEnable500Error1` | `bundle_social/models/api_v1_social_account_messaging_enable500_error1.py` |
| `ApiV1SocialAccountMessagingEnable502Error1` | `bundle_social/models/api_v1_social_account_messaging_enable502_error1.py` |
| `ApiV1SocialAccountMessagingEnable503Error1` | `bundle_social/models/api_v1_social_account_messaging_enable503_error1.py` |
| `ApiV1SocialAccountMessagingEnable504Error1` | `bundle_social/models/api_v1_social_account_messaging_enable504_error1.py` |

### client.social_account_api.social_account_get_accounts_to_delete

- **Route**: `GET /api/v1/social-account/to-delete`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_get_accounts_to_delete(*, page: float | None = 1.0, page_size: float | None = 20.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `ApiV1SocialAccountToDeleteResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountToDeleteResponse, SocialAccountGetAccountsToDeleteErrorBody]`
- **Error**: `SocialAccountGetAccountsToDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountToDelete400Error1` [400] · `ApiV1SocialAccountToDelete401Error1` [401] · `ApiV1SocialAccountToDelete403Error1` [403] · `ApiV1SocialAccountToDelete404Error1` [404] · `ApiV1SocialAccountToDelete429Error1` [429] · `ApiV1SocialAccountToDelete500Error1` [500] · `ApiV1SocialAccountToDelete502Error1` [502] · `ApiV1SocialAccountToDelete503Error1` [503] · `ApiV1SocialAccountToDelete504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountToDeleteResponse` | `bundle_social/models/api_v1_social_account_to_delete_response.py` |
| `SocialAccountGetAccountsToDeleteErrorBody` | `bundle_social/errors/social_account_get_accounts_to_delete_error.py` |
| `ApiV1SocialAccountToDelete400Error1` | `bundle_social/models/api_v1_social_account_to_delete400_error1.py` |
| `ApiV1SocialAccountToDelete401Error1` | `bundle_social/models/api_v1_social_account_to_delete401_error1.py` |
| `ApiV1SocialAccountToDelete403Error1` | `bundle_social/models/api_v1_social_account_to_delete403_error1.py` |
| `ApiV1SocialAccountToDelete404Error1` | `bundle_social/models/api_v1_social_account_to_delete404_error1.py` |
| `ApiV1SocialAccountToDelete429Error1` | `bundle_social/models/api_v1_social_account_to_delete429_error1.py` |
| `ApiV1SocialAccountToDelete500Error1` | `bundle_social/models/api_v1_social_account_to_delete500_error1.py` |
| `ApiV1SocialAccountToDelete502Error1` | `bundle_social/models/api_v1_social_account_to_delete502_error1.py` |
| `ApiV1SocialAccountToDelete503Error1` | `bundle_social/models/api_v1_social_account_to_delete503_error1.py` |
| `ApiV1SocialAccountToDelete504Error1` | `bundle_social/models/api_v1_social_account_to_delete504_error1.py` |

### client.social_account_api.social_account_get_by_type

- **Route**: `GET /api/v1/social-account/by-type`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_get_by_type(type_: TypeOrStr, team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `type_`, `team_id`
- **Params**: `type_` — query `type` · `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1SocialAccountByTypeResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountByTypeResponse, SocialAccountGetByTypeErrorBody]`
- **Error**: `SocialAccountGetByTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountByType400Error1` [400] · `ApiV1SocialAccountByType401Error1` [401] · `ApiV1SocialAccountByType403Error1` [403] · `ApiV1SocialAccountByType404Error1` [404] · `ApiV1SocialAccountByType429Error1` [429] · `ApiV1SocialAccountByType500Error1` [500] · `ApiV1SocialAccountByType502Error1` [502] · `ApiV1SocialAccountByType503Error1` [503] · `ApiV1SocialAccountByType504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `bundle_social/models/enums/type.py` |
| `ApiV1SocialAccountByTypeResponse` | `bundle_social/models/api_v1_social_account_by_type_response.py` |
| `SocialAccountGetByTypeErrorBody` | `bundle_social/errors/social_account_get_by_type_error.py` |
| `ApiV1SocialAccountByType400Error1` | `bundle_social/models/api_v1_social_account_by_type400_error1.py` |
| `ApiV1SocialAccountByType401Error1` | `bundle_social/models/api_v1_social_account_by_type401_error1.py` |
| `ApiV1SocialAccountByType403Error1` | `bundle_social/models/api_v1_social_account_by_type403_error1.py` |
| `ApiV1SocialAccountByType404Error1` | `bundle_social/models/api_v1_social_account_by_type404_error1.py` |
| `ApiV1SocialAccountByType429Error1` | `bundle_social/models/api_v1_social_account_by_type429_error1.py` |
| `ApiV1SocialAccountByType500Error1` | `bundle_social/models/api_v1_social_account_by_type500_error1.py` |
| `ApiV1SocialAccountByType502Error1` | `bundle_social/models/api_v1_social_account_by_type502_error1.py` |
| `ApiV1SocialAccountByType503Error1` | `bundle_social/models/api_v1_social_account_by_type503_error1.py` |
| `ApiV1SocialAccountByType504Error1` | `bundle_social/models/api_v1_social_account_by_type504_error1.py` |

### client.social_account_api.social_account_profile_refresh

- **Route**: `POST /api/v1/social-account/profile-refresh`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_profile_refresh(*, body: ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountProfileRefreshResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountProfileRefreshResponse, SocialAccountProfileRefreshErrorBody]`
- **Error**: `SocialAccountProfileRefreshErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountProfileRefresh400Error1` [400] · `ApiV1SocialAccountProfileRefresh401Error1` [401] · `ApiV1SocialAccountProfileRefresh403Error1` [403] · `ApiV1SocialAccountProfileRefresh404Error1` [404] · `ApiV1SocialAccountProfileRefresh429Error1` [429] · `ApiV1SocialAccountProfileRefresh500Error1` [500] · `ApiV1SocialAccountProfileRefresh502Error1` [502] · `ApiV1SocialAccountProfileRefresh503Error1` [503] · `ApiV1SocialAccountProfileRefresh504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountProfileRefreshRequest` | `bundle_social/models/api_v1_social_account_profile_refresh_request.py` |
| `ApiV1SocialAccountProfileRefreshRequestDict` | `bundle_social/models/api_v1_social_account_profile_refresh_request.py` |
| `ApiV1SocialAccountProfileRefreshResponse` | `bundle_social/models/api_v1_social_account_profile_refresh_response.py` |
| `SocialAccountProfileRefreshErrorBody` | `bundle_social/errors/social_account_profile_refresh_error.py` |
| `ApiV1SocialAccountProfileRefresh400Error1` | `bundle_social/models/api_v1_social_account_profile_refresh400_error1.py` |
| `ApiV1SocialAccountProfileRefresh401Error1` | `bundle_social/models/api_v1_social_account_profile_refresh401_error1.py` |
| `ApiV1SocialAccountProfileRefresh403Error1` | `bundle_social/models/api_v1_social_account_profile_refresh403_error1.py` |
| `ApiV1SocialAccountProfileRefresh404Error1` | `bundle_social/models/api_v1_social_account_profile_refresh404_error1.py` |
| `ApiV1SocialAccountProfileRefresh429Error1` | `bundle_social/models/api_v1_social_account_profile_refresh429_error1.py` |
| `ApiV1SocialAccountProfileRefresh500Error1` | `bundle_social/models/api_v1_social_account_profile_refresh500_error1.py` |
| `ApiV1SocialAccountProfileRefresh502Error1` | `bundle_social/models/api_v1_social_account_profile_refresh502_error1.py` |
| `ApiV1SocialAccountProfileRefresh503Error1` | `bundle_social/models/api_v1_social_account_profile_refresh503_error1.py` |
| `ApiV1SocialAccountProfileRefresh504Error1` | `bundle_social/models/api_v1_social_account_profile_refresh504_error1.py` |

### client.social_account_api.social_account_refresh_channels

- **Route**: `POST /api/v1/social-account/refresh-channels`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_refresh_channels(*, body: ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountRefreshChannelsResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountRefreshChannelsResponse, SocialAccountRefreshChannelsErrorBody]`
- **Error**: `SocialAccountRefreshChannelsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountRefreshChannels400Error1` [400] · `ApiV1SocialAccountRefreshChannels401Error1` [401] · `ApiV1SocialAccountRefreshChannels403Error1` [403] · `ApiV1SocialAccountRefreshChannels404Error1` [404] · `ApiV1SocialAccountRefreshChannels429Error1` [429] · `ApiV1SocialAccountRefreshChannels500Error1` [500] · `ApiV1SocialAccountRefreshChannels502Error1` [502] · `ApiV1SocialAccountRefreshChannels503Error1` [503] · `ApiV1SocialAccountRefreshChannels504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountRefreshChannelsRequest` | `bundle_social/models/api_v1_social_account_refresh_channels_request.py` |
| `ApiV1SocialAccountRefreshChannelsRequestDict` | `bundle_social/models/api_v1_social_account_refresh_channels_request.py` |
| `ApiV1SocialAccountRefreshChannelsResponse` | `bundle_social/models/api_v1_social_account_refresh_channels_response.py` |
| `SocialAccountRefreshChannelsErrorBody` | `bundle_social/errors/social_account_refresh_channels_error.py` |
| `ApiV1SocialAccountRefreshChannels400Error1` | `bundle_social/models/api_v1_social_account_refresh_channels400_error1.py` |
| `ApiV1SocialAccountRefreshChannels401Error1` | `bundle_social/models/api_v1_social_account_refresh_channels401_error1.py` |
| `ApiV1SocialAccountRefreshChannels403Error1` | `bundle_social/models/api_v1_social_account_refresh_channels403_error1.py` |
| `ApiV1SocialAccountRefreshChannels404Error1` | `bundle_social/models/api_v1_social_account_refresh_channels404_error1.py` |
| `ApiV1SocialAccountRefreshChannels429Error1` | `bundle_social/models/api_v1_social_account_refresh_channels429_error1.py` |
| `ApiV1SocialAccountRefreshChannels500Error1` | `bundle_social/models/api_v1_social_account_refresh_channels500_error1.py` |
| `ApiV1SocialAccountRefreshChannels502Error1` | `bundle_social/models/api_v1_social_account_refresh_channels502_error1.py` |
| `ApiV1SocialAccountRefreshChannels503Error1` | `bundle_social/models/api_v1_social_account_refresh_channels503_error1.py` |
| `ApiV1SocialAccountRefreshChannels504Error1` | `bundle_social/models/api_v1_social_account_refresh_channels504_error1.py` |

### client.social_account_api.social_account_set_channel

- **Route**: `POST /api/v1/social-account/set-channel`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_set_channel(*, body: ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountSetChannelResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountSetChannelResponse, SocialAccountSetChannelErrorBody]`
- **Error**: `SocialAccountSetChannelErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountSetChannel400Error1` [400] · `ApiV1SocialAccountSetChannel401Error1` [401] · `ApiV1SocialAccountSetChannel403Error1` [403] · `ApiV1SocialAccountSetChannel404Error1` [404] · `ApiV1SocialAccountSetChannel429Error1` [429] · `ApiV1SocialAccountSetChannel500Error1` [500] · `ApiV1SocialAccountSetChannel502Error1` [502] · `ApiV1SocialAccountSetChannel503Error1` [503] · `ApiV1SocialAccountSetChannel504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountSetChannelRequest` | `bundle_social/models/api_v1_social_account_set_channel_request.py` |
| `ApiV1SocialAccountSetChannelRequestDict` | `bundle_social/models/api_v1_social_account_set_channel_request.py` |
| `ApiV1SocialAccountSetChannelResponse` | `bundle_social/models/api_v1_social_account_set_channel_response.py` |
| `SocialAccountSetChannelErrorBody` | `bundle_social/errors/social_account_set_channel_error.py` |
| `ApiV1SocialAccountSetChannel400Error1` | `bundle_social/models/api_v1_social_account_set_channel400_error1.py` |
| `ApiV1SocialAccountSetChannel401Error1` | `bundle_social/models/api_v1_social_account_set_channel401_error1.py` |
| `ApiV1SocialAccountSetChannel403Error1` | `bundle_social/models/api_v1_social_account_set_channel403_error1.py` |
| `ApiV1SocialAccountSetChannel404Error1` | `bundle_social/models/api_v1_social_account_set_channel404_error1.py` |
| `ApiV1SocialAccountSetChannel429Error1` | `bundle_social/models/api_v1_social_account_set_channel429_error1.py` |
| `ApiV1SocialAccountSetChannel500Error1` | `bundle_social/models/api_v1_social_account_set_channel500_error1.py` |
| `ApiV1SocialAccountSetChannel502Error1` | `bundle_social/models/api_v1_social_account_set_channel502_error1.py` |
| `ApiV1SocialAccountSetChannel503Error1` | `bundle_social/models/api_v1_social_account_set_channel503_error1.py` |
| `ApiV1SocialAccountSetChannel504Error1` | `bundle_social/models/api_v1_social_account_set_channel504_error1.py` |

### client.social_account_api.social_account_unset_channel

- **Route**: `POST /api/v1/social-account/unset-channel`
- **Auth**: `api_key_auth`
- **Signature**: `def social_account_unset_channel(*, body: ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SocialAccountUnsetChannelResponse`
- **Returns (raw)**: `ApiResult[ApiV1SocialAccountUnsetChannelResponse, SocialAccountUnsetChannelErrorBody]`
- **Error**: `SocialAccountUnsetChannelErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SocialAccountUnsetChannel400Error1` [400] · `ApiV1SocialAccountUnsetChannel401Error1` [401] · `ApiV1SocialAccountUnsetChannel403Error1` [403] · `ApiV1SocialAccountUnsetChannel404Error1` [404] · `ApiV1SocialAccountUnsetChannel429Error1` [429] · `ApiV1SocialAccountUnsetChannel500Error1` [500] · `ApiV1SocialAccountUnsetChannel502Error1` [502] · `ApiV1SocialAccountUnsetChannel503Error1` [503] · `ApiV1SocialAccountUnsetChannel504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SocialAccountUnsetChannelRequest` | `bundle_social/models/api_v1_social_account_unset_channel_request.py` |
| `ApiV1SocialAccountUnsetChannelRequestDict` | `bundle_social/models/api_v1_social_account_unset_channel_request.py` |
| `ApiV1SocialAccountUnsetChannelResponse` | `bundle_social/models/api_v1_social_account_unset_channel_response.py` |
| `SocialAccountUnsetChannelErrorBody` | `bundle_social/errors/social_account_unset_channel_error.py` |
| `ApiV1SocialAccountUnsetChannel400Error1` | `bundle_social/models/api_v1_social_account_unset_channel400_error1.py` |
| `ApiV1SocialAccountUnsetChannel401Error1` | `bundle_social/models/api_v1_social_account_unset_channel401_error1.py` |
| `ApiV1SocialAccountUnsetChannel403Error1` | `bundle_social/models/api_v1_social_account_unset_channel403_error1.py` |
| `ApiV1SocialAccountUnsetChannel404Error1` | `bundle_social/models/api_v1_social_account_unset_channel404_error1.py` |
| `ApiV1SocialAccountUnsetChannel429Error1` | `bundle_social/models/api_v1_social_account_unset_channel429_error1.py` |
| `ApiV1SocialAccountUnsetChannel500Error1` | `bundle_social/models/api_v1_social_account_unset_channel500_error1.py` |
| `ApiV1SocialAccountUnsetChannel502Error1` | `bundle_social/models/api_v1_social_account_unset_channel502_error1.py` |
| `ApiV1SocialAccountUnsetChannel503Error1` | `bundle_social/models/api_v1_social_account_unset_channel503_error1.py` |
| `ApiV1SocialAccountUnsetChannel504Error1` | `bundle_social/models/api_v1_social_account_unset_channel504_error1.py` |

