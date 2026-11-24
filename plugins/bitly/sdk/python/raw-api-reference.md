# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [BitlyClient](bitly/client.py)

## Apps

> Source: [Apps](bitly/apis/apps.py)

<details>
<summary><code>def get_o_auth_app(client_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OAuthApp, GetOAuthAppErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details for the provided OAuth App client ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apps.with_raw_response.get_o_auth_app("1234a56b789cd0e123456fg7h8901j123km45n6p")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OAuthApp
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOAuthAppErrorBody
```

**Async**

```python
result = await async_client.apps.with_raw_response.get_o_auth_app("1234a56b789cd0e123456fg7h8901j123km45n6p")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OAuthApp
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOAuthAppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>client_id</code> | <code>str</code> | The client ID of an OAuth app |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[OAuthApp](bitly/models/o_auth_app.py), [GetOAuthAppErrorBody](bitly/errors/get_o_auth_app_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OAuthApp](bitly/models/o_auth_app.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetOAuthAppErrorBody](bitly/errors/get_o_auth_app_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BsDs

> Source: [BsDs](bitly/apis/bs_ds.py)

<details>
<summary><code>def get_bsds(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BsDsResponse, GetBsDsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all Branded Short Domains

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bs_ds.with_raw_response.get_bsds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BsDsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBsDsErrorBody
```

**Async**

```python
result = await async_client.bs_ds.with_raw_response.get_bsds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BsDsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBsDsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BsDsResponse](bitly/models/bs_ds_response.py), [GetBsDsErrorBody](bitly/errors/get_bs_ds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BsDsResponse](bitly/models/bs_ds_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetBsDsErrorBody](bitly/errors/get_bs_ds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BitlinksApi

> Source: [BitlinksApi](bitly/apis/bitlinks_api.py)

<details>
<summary><code>def create_bitlink(body: Shorten | ShortenDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ShortenBitlinkBody, CreateBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts a long url to a Bitlink. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.create_bitlink(Shorten(long_url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShortenBitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.create_bitlink(Shorten(long_url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShortenBitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Shorten](bitly/models/shorten.py) \| [ShortenDict](bitly/models/shorten.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ShortenBitlinkBody](bitly/models/shorten_bitlink_body.py), [CreateBitlinkErrorBody](bitly/errors/create_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ShortenBitlinkBody](bitly/models/shorten_bitlink_body.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[CreateBitlinkErrorBody](bitly/errors/create_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 417, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_full_bitlink(body: FullShorten | FullShortenDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BitlinkBody, CreateFullBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.create_full_bitlink(
    FullShorten(long_url="https://dev.bitly.com", domain="yourdomain.co", group_guid="Ba1bc23dE4F", keyword="new-link")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFullBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.create_full_bitlink(
    FullShorten(long_url="https://dev.bitly.com", domain="yourdomain.co", group_guid="Ba1bc23dE4F", keyword="new-link")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFullBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FullShorten](bitly/models/full_shorten.py) \| [FullShortenDict](bitly/models/full_shorten.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BitlinkBody](bitly/models/bitlink_body.py), [CreateFullBitlinkErrorBody](bitly/errors/create_full_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[CreateFullBitlinkErrorBody](bitly/errors/create_full_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 417, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bitlink(bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkDeletionResponse, DeleteBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an unedited hash Bitlink.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.delete_bitlink("bit.ly/12a4b6c")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkDeletionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.delete_bitlink("bit.ly/12a4b6c")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkDeletionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[LinkDeletionResponse](bitly/models/link_deletion_response.py), [DeleteBitlinkErrorBody](bitly/errors/delete_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkDeletionResponse](bitly/models/link_deletion_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[DeleteBitlinkErrorBody](bitly/errors/delete_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expand_bitlink(body: ExpandBitlink | ExpandBitlinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExpandedBitlink, ExpandBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the short link and long URL for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.expand_bitlink(ExpandBitlink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpandedBitlink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExpandBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.expand_bitlink(ExpandBitlink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpandedBitlink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExpandBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ExpandBitlink](bitly/models/expand_bitlink.py) \| [ExpandBitlinkDict](bitly/models/expand_bitlink.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ExpandedBitlink](bitly/models/expanded_bitlink.py), [ExpandBitlinkErrorBody](bitly/errors/expand_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExpandedBitlink](bitly/models/expanded_bitlink.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[ExpandBitlinkErrorBody](bitly/errors/expand_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 410, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bitlink(bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BitlinkBody, GetBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_bitlink("bit.ly/12a4b6c")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_bitlink("bit.ly/12a4b6c")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BitlinkBody](bitly/models/bitlink_body.py), [GetBitlinkErrorBody](bitly/errors/get_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetBitlinkErrorBody](bitly/errors/get_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bitlinks_by_group(group_guid: str, *, size: int | None = 50, search_after: str | None = None, query: str | None = None, hostname_path_query: str | None = None, created_before: int | None = None, created_after: int | None = None, archived: ArchivedOrStr | None = Archived.OFF, deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH, domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH, campaign_guid: str | None = None, channel_guid: str | None = None, custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH, has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH, is_expired: IsExpiredOrStr | None = IsExpired.BOTH, has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH, has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH, tags: list[str] | None = None, launchpad_ids: list[str] | None = None, encoding_login: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bitlinks, GetBitlinksByGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_bitlinks_by_group(
    "Ba1bc23dE4F",
    size=10,
    query="api",
    hostname_path_query="dev.bitly.com/api-reference",
    created_before=1694529902,
    created_after=1694529902,
    archived=Archived.BOTH,
    deeplinks=Deeplinks.BOTH,
    domain_deeplinks=DomainDeeplinks.BOTH,
    campaign_guid="Ca1bcd2EFGh",
    channel_guid="Ha1bc2DefGh",
    custom_bitlink=CustomBitlink.BOTH,
    has_qr_codes=HasQrCodes.BOTH,
    tags=["bitly", "api"],
    launchpad_ids=["M1234567890"],
    encoding_login=["chauncey"],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bitlinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBitlinksByGroupErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_bitlinks_by_group(
    "Ba1bc23dE4F",
    size=10,
    query="api",
    hostname_path_query="dev.bitly.com/api-reference",
    created_before=1694529902,
    created_after=1694529902,
    archived=Archived.BOTH,
    deeplinks=Deeplinks.BOTH,
    domain_deeplinks=DomainDeeplinks.BOTH,
    campaign_guid="Ca1bcd2EFGh",
    channel_guid="Ha1bc2DefGh",
    custom_bitlink=CustomBitlink.BOTH,
    has_qr_codes=HasQrCodes.BOTH,
    tags=["bitly", "api"],
    launchpad_ids=["M1234567890"],
    encoding_login=["chauncey"],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bitlinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBitlinksByGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>search_after</code> | <code>str \| None</code> | Token used to search next batch, only use response from API as input value.<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | The value that you would like to search<br>**Default**: <code>None</code> |
| <code>hostname_path_query</code> | <code>str \| None</code> | The hostname and/or path you would like to search (case-insensitive). Subdomains included; query params and fragment ignored.<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>int \| None</code> | Timestamp as an integer unix epoch (seconds only)<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>int \| None</code> | Timestamp as an integer unix epoch (seconds only)<br>**Default**: <code>None</code> |
| <code>archived</code> | <code>[ArchivedOrStr](bitly/models/enums/archived.py) \| None</code> | Whether or not to include archived resources<br>**Default**: <code>Archived.OFF</code> |
| <code>deeplinks</code> | <code>[DeeplinksOrStr](bitly/models/enums/deeplinks.py) \| None</code> | Filter to only Bitlinks that contain deeplinks<br>**Default**: <code>Deeplinks.BOTH</code> |
| <code>domain_deeplinks</code> | <code>[DomainDeeplinksOrStr](bitly/models/enums/domain_deeplinks.py) \| None</code> | Filter to only Bitlinks that contain deeplinks configured with a custom domain<br>**Default**: <code>DomainDeeplinks.BOTH</code> |
| <code>campaign_guid</code> | <code>str \| None</code> | Filter to return only links for the given campaign GUID, can be provided<br>**Default**: <code>None</code> |
| <code>channel_guid</code> | <code>str \| None</code> | Filter to return only links for the given channel GUID, can be provided, overrides all other parameters<br>**Default**: <code>None</code> |
| <code>custom_bitlink</code> | <code>[CustomBitlinkOrStr](bitly/models/enums/custom_bitlink.py) \| None</code> | Value sent with the request.<br>**Default**: <code>CustomBitlink.BOTH</code> |
| <code>has_qr_codes</code> | <code>[HasQrCodesOrStr](bitly/models/enums/has_qr_codes.py) \| None</code> | a filter value if the resource has any QR codes<br>**Default**: <code>HasQrCodes.BOTH</code> |
| <code>is_expired</code> | <code>[IsExpiredOrStr](bitly/models/enums/is_expired.py) \| None</code> | filter bitlinks by expiration status<br>**Default**: <code>IsExpired.BOTH</code> |
| <code>has_expiration</code> | <code>[HasExpirationOrStr](bitly/models/enums/has_expiration.py) \| None</code> | filter bitlinks by presence of expiration<br>**Default**: <code>HasExpiration.BOTH</code> |
| <code>has_dynamic_routing</code> | <code>[HasDynamicRoutingOrStr](bitly/models/enums/has_dynamic_routing.py) \| None</code> | filter bitlinks by presence of dynamic routing rules<br>**Default**: <code>HasDynamicRouting.BOTH</code> |
| <code>tags</code> | <code>list&#91;str&#93; \| None</code> | Filter by given tags<br>**Default**: <code>None</code> |
| <code>launchpad_ids</code> | <code>list&#91;str&#93; \| None</code> | Filter by launchpad id<br>**Default**: <code>None</code> |
| <code>encoding_login</code> | <code>list&#91;str&#93; \| None</code> | Filter by the login of the authenticated user that created the Bitlink<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Bitlinks](bitly/models/bitlinks.py), [GetBitlinksByGroupErrorBody](bitly/errors/get_bitlinks_by_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bitlinks](bitly/models/bitlinks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetBitlinksByGroupErrorBody](bitly/errors/get_bitlinks_by_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_clicks_for_bitlink(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Clicks, GetClicksForBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link in an array based on a date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_clicks_for_bitlink(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Clicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClicksForBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_clicks_for_bitlink(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Clicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClicksForBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Clicks](bitly/models/clicks.py), [GetClicksForBitlinkErrorBody](bitly/errors/get_clicks_for_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Clicks](bitly/models/clicks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetClicksForBitlinkErrorBody](bitly/errors/get_clicks_for_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_clicks_summary_for_bitlink(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClicksSummary, GetClicksSummaryForBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link rolled up into a single field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_clicks_summary_for_bitlink(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClicksSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClicksSummaryForBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_clicks_summary_for_bitlink(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClicksSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClicksSummaryForBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClicksSummary](bitly/models/clicks_summary.py), [GetClicksSummaryForBitlinkErrorBody](bitly/errors/get_clicks_summary_for_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClicksSummary](bitly/models/clicks_summary.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetClicksSummaryForBitlinkErrorBody](bitly/errors/get_clicks_summary_for_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_engagements(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TotalEngagements, GetEngagementsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of engagement counts for the specified link. The array is comprised of button click, click and scan counts for each time window, where the window is based on the provided unit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_engagements(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TotalEngagements
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEngagementsErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_engagements(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TotalEngagements
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEngagementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[TotalEngagements](bitly/models/total_engagements.py), [GetEngagementsErrorBody](bitly/errors/get_engagements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TotalEngagements](bitly/models/total_engagements.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetEngagementsErrorBody](bitly/errors/get_engagements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_engagements_summary(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TotalEngagementsSummary, GetEngagementsSummaryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the engagement counts for the specified link rolled up into a single field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_engagements_summary(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TotalEngagementsSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEngagementsSummaryErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_engagements_summary(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TotalEngagementsSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEngagementsSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[TotalEngagementsSummary](bitly/models/total_engagements_summary.py), [GetEngagementsSummaryErrorBody](bitly/errors/get_engagements_summary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TotalEngagementsSummary](bitly/models/total_engagements_summary.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetEngagementsSummaryErrorBody](bitly/errors/get_engagements_summary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_cities(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CityMetrics, GetMetricsForBitlinkByCitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the city origins of click traffic for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_cities(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByCitiesErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_cities(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByCitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CityMetrics](bitly/models/city_metrics.py), [GetMetricsForBitlinkByCitiesErrorBody](bitly/errors/get_metrics_for_bitlink_by_cities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CityMetrics](bitly/models/city_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByCitiesErrorBody](bitly/errors/get_metrics_for_bitlink_by_cities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_countries(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByCountriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the country origins of click traffic for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_countries(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByCountriesErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_countries(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetrics](bitly/models/click_metrics.py), [GetMetricsForBitlinkByCountriesErrorBody](bitly/errors/get_metrics_for_bitlink_by_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByCountriesErrorBody](bitly/errors/get_metrics_for_bitlink_by_countries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_devices(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeviceMetrics, GetMetricsForBitlinkByDevicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device types generating click traffic to the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_devices(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeviceMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByDevicesErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_devices(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeviceMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByDevicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[DeviceMetrics](bitly/models/device_metrics.py), [GetMetricsForBitlinkByDevicesErrorBody](bitly/errors/get_metrics_for_bitlink_by_devices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeviceMetrics](bitly/models/device_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByDevicesErrorBody](bitly/errors/get_metrics_for_bitlink_by_devices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_referrer_name(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrerNameErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns referrer click counts for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referrer_name(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferrerNameErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referrer_name(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferrerNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetrics](bitly/models/click_metrics.py), [GetMetricsForBitlinkByReferrerNameErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrer_name_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByReferrerNameErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrer_name_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_referrers(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns referrer click counts for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referrers(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferrersErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referrers(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferrersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetrics](bitly/models/click_metrics.py), [GetMetricsForBitlinkByReferrersErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByReferrersErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_referrers_by_domains(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReferrersByDomains, GetMetricsForBitlinkByReferrersByDomainsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns click metrics grouped by referrers for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referrers_by_domains(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReferrersByDomains
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferrersByDomainsErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referrers_by_domains(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReferrersByDomains
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferrersByDomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ReferrersByDomains](bitly/models/referrers_by_domains.py), [GetMetricsForBitlinkByReferrersByDomainsErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrers_by_domains_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReferrersByDomains](bitly/models/referrers_by_domains.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByReferrersByDomainsErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrers_by_domains_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_metrics_for_bitlink_by_referring_domains(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferringDomainsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the referring domain click counts for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referring_domains(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferringDomainsErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_metrics_for_bitlink_by_referring_domains(
    "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMetricsForBitlinkByReferringDomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetrics](bitly/models/click_metrics.py), [GetMetricsForBitlinkByReferringDomainsErrorBody](bitly/errors/get_metrics_for_bitlink_by_referring_domains_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetMetricsForBitlinkByReferringDomainsErrorBody](bitly/errors/get_metrics_for_bitlink_by_referring_domains_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sorted_bitlinks(group_guid: str, sort: SortOrStr, *, unit: TimeUnitOrStr | None = TimeUnit.DAY, units: int | None = -1, unit_reference: str | None = None, size: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SortedLinks, GetSortedBitlinksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_sorted_bitlinks(
    "Ba1bc23dE4F", Sort.CLICKS, unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SortedLinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSortedBitlinksErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_sorted_bitlinks(
    "Ba1bc23dE4F", Sort.CLICKS, unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SortedLinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSortedBitlinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>sort</code> | <code>[SortOrStr](bitly/models/enums/sort.py)</code> | The type of sorting that you would like to do |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py) \| None</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int \| None</code> | An integer representing the time units to query data for. pass -1 to return all units of time.<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[SortedLinks](bitly/models/sorted_links.py), [GetSortedBitlinksErrorBody](bitly/errors/get_sorted_bitlinks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SortedLinks](bitly/models/sorted_links.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetSortedBitlinksErrorBody](bitly/errors/get_sorted_bitlinks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_top_links_and_qr_codes_by_engagements(group_guid: str, *, unit: TimeUnitOrStr | None = TimeUnit.DAY, units: int | None = -1, unit_reference: str | None = None, size: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TopLinksAndQrCodes, GetTopLinksAndQrCodesByEngagementsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in separate lists; `sorted_links` preserves the unified descending-by-count ordering across both, with each entry's id referencing either a bitlink or a QR code guid.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.get_top_links_and_qr_codes_by_engagements(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TopLinksAndQrCodes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTopLinksAndQrCodesByEngagementsErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.get_top_links_and_qr_codes_by_engagements(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TopLinksAndQrCodes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTopLinksAndQrCodesByEngagementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py) \| None</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int \| None</code> | An integer representing the time units to query data for. pass -1 to return all units of time.<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[TopLinksAndQrCodes](bitly/models/top_links_and_qr_codes.py), [GetTopLinksAndQrCodesByEngagementsErrorBody](bitly/errors/get_top_links_and_qr_codes_by_engagements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TopLinksAndQrCodes](bitly/models/top_links_and_qr_codes.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetTopLinksAndQrCodesByEngagementsErrorBody](bitly/errors/get_top_links_and_qr_codes_by_engagements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bitlink(bitlink: str, body: BitlinkUpdateBody | BitlinkUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BitlinkBody, UpdateBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url parameter. This will always charge an encode limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.update_bitlink(
    "bit.ly/12a4b6c", BitlinkUpdateBody(long_url="https://www.newdestination.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBitlinkErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.update_bitlink(
    "bit.ly/12a4b6c", BitlinkUpdateBody(long_url="https://www.newdestination.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>str</code> | A Bitlink made of the domain and hash |
| <code>body</code> | <code>[BitlinkUpdateBody](bitly/models/bitlink_update_body.py) \| [BitlinkUpdateBodyDict](bitly/models/bitlink_update_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BitlinkBody](bitly/models/bitlink_body.py), [UpdateBitlinkErrorBody](bitly/errors/update_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateBitlinkErrorBody](bitly/errors/update_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 409, 410, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bitlinks_by_group(group_guid: str, body: BulkUpdateRequest | BulkUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkUpdate, UpdateBitlinksByGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of bitlink ids that were updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bitlinks_api.with_raw_response.update_bitlinks_by_group(
    "Ba1bc23dE4F", BulkUpdateRequest(action=Action.ARCHIVE)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBitlinksByGroupErrorBody
```

**Async**

```python
result = await async_client.bitlinks_api.with_raw_response.update_bitlinks_by_group(
    "Ba1bc23dE4F", BulkUpdateRequest(action=Action.ARCHIVE)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBitlinksByGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[BulkUpdateRequest](bitly/models/bulk_update_request.py) \| [BulkUpdateRequestDict](bitly/models/bulk_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BulkUpdate](bitly/models/bulk_update.py), [UpdateBitlinksByGroupErrorBody](bitly/errors/update_bitlinks_by_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkUpdate](bitly/models/bulk_update.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateBitlinksByGroupErrorBody](bitly/errors/update_bitlinks_by_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignsApi

> Source: [CampaignsApi](bitly/apis/campaigns_api.py)

<details>
<summary><code>def create_campaign(body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Campaign, CreateCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.create_campaign(CampaignModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.create_campaign(CampaignModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CampaignModify](bitly/models/campaign_modify.py) \| [CampaignModifyDict](bitly/models/campaign_modify.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Campaign](bitly/models/campaign.py), [CreateCampaignErrorBody](bitly/errors/create_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Campaign](bitly/models/campaign.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[CreateCampaignErrorBody](bitly/errors/create_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_channel(body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Channel, CreateChannelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.create_channel(ChannelModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateChannelErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.create_channel(ChannelModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelModify](bitly/models/channel_modify.py) \| [ChannelModifyDict](bitly/models/channel_modify.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Channel](bitly/models/channel.py), [CreateChannelErrorBody](bitly/errors/create_channel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Channel](bitly/models/channel.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[CreateChannelErrorBody](bitly/errors/create_channel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_campaign(campaign_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Campaign, GetCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.get_campaign("Ca1bcd2EFGh")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.get_campaign("Ca1bcd2EFGh")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_guid</code> | <code>str</code> | A GUID for a Bitly campaign |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Campaign](bitly/models/campaign.py), [GetCampaignErrorBody](bitly/errors/get_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Campaign](bitly/models/campaign.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetCampaignErrorBody](bitly/errors/get_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_campaigns(*, group_guid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Campaigns, GetCampaignsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the campaigns for the current authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.get_campaigns(group_guid="Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaigns
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignsErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.get_campaigns(group_guid="Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaigns
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str \| None</code> | A GUID for a Bitly group<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Campaigns](bitly/models/campaigns.py), [GetCampaignsErrorBody](bitly/errors/get_campaigns_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Campaigns](bitly/models/campaigns.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetCampaignsErrorBody](bitly/errors/get_campaigns_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 500, 502, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_channel(channel_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Channel, GetChannelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a channel's details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.get_channel("Ha1bc2DefGh")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetChannelErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.get_channel("Ha1bc2DefGh")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channel_guid</code> | <code>str</code> | A GUID for a Bitly Channel |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Channel](bitly/models/channel.py), [GetChannelErrorBody](bitly/errors/get_channel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Channel](bitly/models/channel.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetChannelErrorBody](bitly/errors/get_channel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_channels(*, group_guid: str | None = None, campaign_guid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Channels, GetChannelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the channels available to a user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.get_channels(group_guid="Ba1bc23dE4F", campaign_guid="Ca1bcd2EFGh")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channels
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetChannelsErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.get_channels(
    group_guid="Ba1bc23dE4F", campaign_guid="Ca1bcd2EFGh"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channels
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetChannelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str \| None</code> | A GUID for a Bitly group<br>**Default**: <code>None</code> |
| <code>campaign_guid</code> | <code>str \| None</code> | A GUID for a Bitly campaign<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Channels](bitly/models/channels.py), [GetChannelsErrorBody](bitly/errors/get_channels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Channels](bitly/models/channels.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetChannelsErrorBody](bitly/errors/get_channels_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_campaign(campaign_guid: str, body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Campaign, UpdateCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a campaign's details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.update_campaign("Ca1bcd2EFGh", CampaignModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.update_campaign("Ca1bcd2EFGh", CampaignModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_guid</code> | <code>str</code> | A GUID for a Bitly campaign |
| <code>body</code> | <code>[CampaignModify](bitly/models/campaign_modify.py) \| [CampaignModifyDict](bitly/models/campaign_modify.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Campaign](bitly/models/campaign.py), [UpdateCampaignErrorBody](bitly/errors/update_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Campaign](bitly/models/campaign.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateCampaignErrorBody](bitly/errors/update_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_channel(channel_guid: str, body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Channel, UpdateChannelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns_api.with_raw_response.update_channel("Ha1bc2DefGh", ChannelModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateChannelErrorBody
```

**Async**

```python
result = await async_client.campaigns_api.with_raw_response.update_channel("Ha1bc2DefGh", ChannelModify())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channel_guid</code> | <code>str</code> | A GUID for a Bitly Channel |
| <code>body</code> | <code>[ChannelModify](bitly/models/channel_modify.py) \| [ChannelModifyDict](bitly/models/channel_modify.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Channel](bitly/models/channel.py), [UpdateChannelErrorBody](bitly/errors/update_channel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Channel](bitly/models/channel.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateChannelErrorBody](bitly/errors/update_channel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomBitlinks

> Source: [CustomBitlinks](bitly/apis/custom_bitlinks.py)

<details>
<summary><code>def add_custom_bitlink(body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, AddCustomBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint can also be used for initial redirects to a link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_bitlinks.with_raw_response.add_custom_bitlink(AddCustomBitlink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomBitlinkBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddCustomBitlinkErrorBody
```

**Async**

```python
result = await async_client.custom_bitlinks.with_raw_response.add_custom_bitlink(AddCustomBitlink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomBitlinkBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddCustomBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AddCustomBitlink](bitly/models/add_custom_bitlink.py) \| [AddCustomBitlinkDict](bitly/models/add_custom_bitlink.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py), [AddCustomBitlinkErrorBody](bitly/errors/add_custom_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[AddCustomBitlinkErrorBody](bitly/errors/add_custom_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 409, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_clicks_for_custom_bitlink(custom_bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Clicks, GetClicksForCustomBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link. This returns an array with clicks based on a date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_bitlinks.with_raw_response.get_clicks_for_custom_bitlink(
    "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Clicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClicksForCustomBitlinkErrorBody
```

**Async**

```python
result = await async_client.custom_bitlinks.with_raw_response.get_clicks_for_custom_bitlink(
    "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Clicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClicksForCustomBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_bitlink</code> | <code>str</code> | A Custom Bitlink made of the domain and keyword |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Clicks](bitly/models/clicks.py), [GetClicksForCustomBitlinkErrorBody](bitly/errors/get_clicks_for_custom_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Clicks](bitly/models/clicks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetClicksForCustomBitlinkErrorBody](bitly/errors/get_clicks_for_custom_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_bitlink(custom_bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, GetCustomBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details and history of the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_bitlinks.with_raw_response.get_custom_bitlink("chauncey.ly/chauncey")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomBitlinkBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomBitlinkErrorBody
```

**Async**

```python
result = await async_client.custom_bitlinks.with_raw_response.get_custom_bitlink("chauncey.ly/chauncey")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomBitlinkBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_bitlink</code> | <code>str</code> | A Custom Bitlink made of the domain and keyword |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py), [GetCustomBitlinkErrorBody](bitly/errors/get_custom_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetCustomBitlinkErrorBody](bitly/errors/get_custom_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_bitlink_metrics_by_destination(custom_bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetCustomBitlinkMetricsByDestinationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns click metrics for the specified link by its historical destinations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_bitlinks.with_raw_response.get_custom_bitlink_metrics_by_destination(
    "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomBitlinkMetricsByDestinationErrorBody
```

**Async**

```python
result = await async_client.custom_bitlinks.with_raw_response.get_custom_bitlink_metrics_by_destination(
    "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomBitlinkMetricsByDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_bitlink</code> | <code>str</code> | A Custom Bitlink made of the domain and keyword |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetCustomBitlinkMetricsByDestinationErrorBody](bitly/errors/get_custom_bitlink_metrics_by_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetCustomBitlinkMetricsByDestinationErrorBody](bitly/errors/get_custom_bitlink_metrics_by_destination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_custom_bitlink(custom_bitlink: str, body: UpdateCustomBitlink | UpdateCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, UpdateCustomBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a keyword (or custom back-half) to a different Bitlink (domains must match).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_bitlinks.with_raw_response.update_custom_bitlink("chauncey.ly/chauncey", UpdateCustomBitlink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomBitlinkBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomBitlinkErrorBody
```

**Async**

```python
result = await async_client.custom_bitlinks.with_raw_response.update_custom_bitlink(
    "chauncey.ly/chauncey", UpdateCustomBitlink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomBitlinkBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_bitlink</code> | <code>str</code> | A Custom Bitlink made of the domain and keyword |
| <code>body</code> | <code>[UpdateCustomBitlink](bitly/models/update_custom_bitlink.py) \| [UpdateCustomBitlinkDict](bitly/models/update_custom_bitlink.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py), [UpdateCustomBitlinkErrorBody](bitly/errors/update_custom_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateCustomBitlinkErrorBody](bitly/errors/update_custom_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsApi

> Source: [GroupsApi](bitly/apis/groups_api.py)

<details>
<summary><code>def get_group_metrics_by_referrer(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferrerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metrics by referrer for the specified group's links.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_metrics_by_referrer(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByReferrerErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_metrics_by_referrer(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByReferrerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetGroupMetricsByReferrerErrorBody](bitly/errors/get_group_metrics_by_referrer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupMetricsByReferrerErrorBody](bitly/errors/get_group_metrics_by_referrer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_metrics_by_referring_networks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferringNetworksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metrics by referring networks for the specified group's links.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_metrics_by_referring_networks(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByReferringNetworksErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_metrics_by_referring_networks(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByReferringNetworksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetGroupMetricsByReferringNetworksErrorBody](bitly/errors/get_group_metrics_by_referring_networks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupMetricsByReferringNetworksErrorBody](bitly/errors/get_group_metrics_by_referring_networks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group(group_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, GetGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group("Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group("Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Group](bitly/models/group.py), [GetGroupErrorBody](bitly/errors/get_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](bitly/models/group.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupErrorBody](bitly/errors/get_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_clicks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupClicks, GetGroupClicksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

get number of clicks on bitlinks in a group

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_clicks(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupClicksErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_clicks(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupClicksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupClicks](bitly/models/group_clicks.py), [GetGroupClicksErrorBody](bitly/errors/get_group_clicks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupClicksErrorBody](bitly/errors/get_group_clicks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_code_scans_by_city(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupCodeScansByCityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics for a group broken down by city.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_code_scans_by_city(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupCodeScansByCityErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_code_scans_by_city(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupCodeScansByCityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py), [GetGroupCodeScansByCityErrorBody](bitly/errors/get_group_code_scans_by_city_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupCodeScansByCityErrorBody](bitly/errors/get_group_code_scans_by_city_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_code_scans_by_country(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupCodeScansByCountryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics for a group broken down by country.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_code_scans_by_country(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupCodeScansByCountryErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_code_scans_by_country(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupCodeScansByCountryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetGroupCodeScansByCountryErrorBody](bitly/errors/get_group_code_scans_by_country_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupCodeScansByCountryErrorBody](bitly/errors/get_group_code_scans_by_country_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_code_scans_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupClicks, GetGroupCodeScansOverTimeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics over time for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_code_scans_over_time(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupCodeScansOverTimeErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_code_scans_over_time(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupCodeScansOverTimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupClicks](bitly/models/group_clicks.py), [GetGroupCodeScansOverTimeErrorBody](bitly/errors/get_group_code_scans_over_time_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupCodeScansOverTimeErrorBody](bitly/errors/get_group_code_scans_over_time_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_feature_usage(group_guid: str, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupFeatureUsage, GetGroupFeatureUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_feature_usage("Ba1bc23dE4F", name=["qr_codes"])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupFeatureUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupFeatureUsageErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_feature_usage("Ba1bc23dE4F", name=["qr_codes"])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupFeatureUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupFeatureUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>name</code> | <code>list&#91;str&#93; \| None</code> | The limit name you would like usage for<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupFeatureUsage](bitly/models/group_feature_usage.py), [GetGroupFeatureUsageErrorBody](bitly/errors/get_group_feature_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupFeatureUsage](bitly/models/group_feature_usage.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupFeatureUsageErrorBody](bitly/errors/get_group_feature_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_historical_usage(group_guid: str, *, name: list[str] | None = None, start_date: str | None = None, end_date: str | None = None, unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupHistoricalUsage, GetGroupHistoricalUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a group's historical usage for specific limit(s) and date range. Refer to GET /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_historical_usage(
    "Ba1bc23dE4F", name=["qr_codes"], start_date="2022-02-02", end_date="2023-10-04", unit=TimeUnitDwm.MONTH
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupHistoricalUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupHistoricalUsageErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_historical_usage(
    "Ba1bc23dE4F", name=["qr_codes"], start_date="2022-02-02", end_date="2023-10-04", unit=TimeUnitDwm.MONTH
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupHistoricalUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupHistoricalUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>name</code> | <code>list&#91;str&#93; \| None</code> | The limit name you would like usage for<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | The start date for the date range<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | The end date for the date range<br>**Default**: <code>None</code> |
| <code>unit</code> | <code>[TimeUnitDwmOrStr](bitly/models/enums/time_unit_dwm.py) \| None</code> | A unit of time (day, week, or month)<br>**Default**: <code>TimeUnitDwm.MONTH</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupHistoricalUsage](bitly/models/group_historical_usage.py), [GetGroupHistoricalUsageErrorBody](bitly/errors/get_group_historical_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupHistoricalUsage](bitly/models/group_historical_usage.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupHistoricalUsageErrorBody](bitly/errors/get_group_historical_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_link_clicks_by_city(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupLinkClicksByCityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by city for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_link_clicks_by_city(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByCityErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_link_clicks_by_city(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByCityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py), [GetGroupLinkClicksByCityErrorBody](bitly/errors/get_group_link_clicks_by_city_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupLinkClicksByCityErrorBody](bitly/errors/get_group_link_clicks_by_city_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_link_clicks_by_country(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByCountryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by country for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_link_clicks_by_country(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByCountryErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_link_clicks_by_country(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByCountryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetGroupLinkClicksByCountryErrorBody](bitly/errors/get_group_link_clicks_by_country_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupLinkClicksByCountryErrorBody](bitly/errors/get_group_link_clicks_by_country_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_link_clicks_by_device(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupsLinksClicksDevicesResponse, GetGroupLinkClicksByDeviceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by device for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_link_clicks_by_device(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupsLinksClicksDevicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByDeviceErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_link_clicks_by_device(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupsLinksClicksDevicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByDeviceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupsLinksClicksDevicesResponse](bitly/models/groups_links_clicks_devices_response.py), [GetGroupLinkClicksByDeviceErrorBody](bitly/errors/get_group_link_clicks_by_device_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupsLinksClicksDevicesResponse](bitly/models/groups_links_clicks_devices_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupLinkClicksByDeviceErrorBody](bitly/errors/get_group_link_clicks_by_device_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_link_clicks_by_referrer(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByReferrerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by referrer for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_link_clicks_by_referrer(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByReferrerErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_link_clicks_by_referrer(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksByReferrerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetGroupLinkClicksByReferrerErrorBody](bitly/errors/get_group_link_clicks_by_referrer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupLinkClicksByReferrerErrorBody](bitly/errors/get_group_link_clicks_by_referrer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_link_clicks_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupClicks, GetGroupLinkClicksOverTimeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks over time for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_link_clicks_over_time(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksOverTimeErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_link_clicks_over_time(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLinkClicksOverTimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupClicks](bitly/models/group_clicks.py), [GetGroupLinkClicksOverTimeErrorBody](bitly/errors/get_group_link_clicks_over_time_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupLinkClicksOverTimeErrorBody](bitly/errors/get_group_link_clicks_over_time_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_metrics_by_cities(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupMetricsByCitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic origins of click traffic by city for the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_metrics_by_cities(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByCitiesErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_metrics_by_cities(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByCitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py), [GetGroupMetricsByCitiesErrorBody](bitly/errors/get_group_metrics_by_cities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupMetricsByCitiesErrorBody](bitly/errors/get_group_metrics_by_cities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_metrics_by_countries(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByCountriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic origins of click traffic by country for the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_metrics_by_countries(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByCountriesErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_metrics_by_countries(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClickMetricsBitlyCustomBitlinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py), [GetGroupMetricsByCountriesErrorBody](bitly/errors/get_group_metrics_by_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupMetricsByCountriesErrorBody](bitly/errors/get_group_metrics_by_countries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_metrics_by_devices(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeviceMetricsBitlyGroupsApi, GetGroupMetricsByDevicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device types generating click traffic to the specified group's links.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_metrics_by_devices(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeviceMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByDevicesErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_metrics_by_devices(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeviceMetricsBitlyGroupsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsByDevicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[DeviceMetricsBitlyGroupsApi](bitly/models/device_metrics_bitly_groups_api.py), [GetGroupMetricsByDevicesErrorBody](bitly/errors/get_group_metrics_by_devices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeviceMetricsBitlyGroupsApi](bitly/models/device_metrics_bitly_groups_api.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupMetricsByDevicesErrorBody](bitly/errors/get_group_metrics_by_devices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_metrics_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupClicks, GetGroupMetricsOverTimeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get group engagement metrics over time for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_metrics_over_time(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsOverTimeErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_metrics_over_time(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupClicks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupMetricsOverTimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupClicks](bitly/models/group_clicks.py), [GetGroupMetricsOverTimeErrorBody](bitly/errors/get_group_metrics_over_time_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupMetricsOverTimeErrorBody](bitly/errors/get_group_metrics_over_time_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_preferences(group_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupPreferences, GetGroupPreferencesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns preferences for the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_preferences("Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupPreferences
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupPreferencesErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_preferences("Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupPreferences
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupPreferencesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupPreferences](bitly/models/group_preferences.py), [GetGroupPreferencesErrorBody](bitly/errors/get_group_preferences_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupPreferences](bitly/models/group_preferences.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupPreferencesErrorBody](bitly/errors/get_group_preferences_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_shorten_counts(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Metrics, GetGroupShortenCountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all the shorten counts for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_shorten_counts(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupShortenCountsErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_shorten_counts(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupShortenCountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Metrics](bitly/models/metrics.py), [GetGroupShortenCountsErrorBody](bitly/errors/get_group_shorten_counts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Metrics](bitly/models/metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupShortenCountsErrorBody](bitly/errors/get_group_shorten_counts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_tags(group_guid: str, *, type_: TypeOrStr | None = Type.BITLINK, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Tags, GetGroupTagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags currently used in the specified group. Maximum 1000.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_tags("Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tags
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTagsErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_tags("Ba1bc23dE4F")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tags
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>type_</code> | <code>[TypeOrStr](bitly/models/enums/type.py) \| None</code> | Tag set to return; defaults to bitlink<br>**Default**: <code>Type.BITLINK</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Tags](bitly/models/tags.py), [GetGroupTagsErrorBody](bitly/errors/get_group_tags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Tags](bitly/models/tags.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupTagsErrorBody](bitly/errors/get_group_tags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_top_code_scans(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, decoupled: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupsCodesScansTopResponse, GetGroupTopCodeScansErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing QR codes by scan count for all codes in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_top_code_scans(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupsCodesScansTopResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTopCodeScansErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_top_code_scans(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupsCodesScansTopResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTopCodeScansErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>decoupled</code> | <code>bool \| None</code> | When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupsCodesScansTopResponse](bitly/models/unions/groups_codes_scans_top_response.py), [GetGroupTopCodeScansErrorBody](bitly/errors/get_group_top_code_scans_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupsCodesScansTopResponse](bitly/models/unions/groups_codes_scans_top_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupTopCodeScansErrorBody](bitly/errors/get_group_top_code_scans_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_top_link_clicks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SortedLinks, GetGroupTopLinkClicksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing links by click for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_top_link_clicks(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SortedLinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTopLinkClicksErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_top_link_clicks(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SortedLinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTopLinkClicksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[SortedLinks](bitly/models/sorted_links.py), [GetGroupTopLinkClicksErrorBody](bitly/errors/get_group_top_link_clicks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SortedLinks](bitly/models/sorted_links.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupTopLinkClicksErrorBody](bitly/errors/get_group_top_link_clicks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_top_metrics(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SortedLinks, GetGroupTopMetricsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing links by engagement for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_group_top_metrics(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SortedLinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTopMetricsErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_group_top_metrics(
    "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SortedLinks
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupTopMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[SortedLinks](bitly/models/sorted_links.py), [GetGroupTopMetricsErrorBody](bitly/errors/get_group_top_metrics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SortedLinks](bitly/models/sorted_links.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupTopMetricsErrorBody](bitly/errors/get_group_top_metrics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_groups(*, organization_guid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Groups, GetGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of groups in the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.get_groups(organization_guid="Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Groups
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupsErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.get_groups(organization_guid="Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Groups
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_guid</code> | <code>str \| None</code> | A GUID for a Bitly organization<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Groups](bitly/models/groups.py), [GetGroupsErrorBody](bitly/errors/get_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Groups](bitly/models/groups.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetGroupsErrorBody](bitly/errors/get_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_create_group_export(group_guid: str, body: GroupExportRequestBody | GroupExportRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupExportResponse, PostCreateGroupExportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Build a CSV export synchronously and return it inline as a base64 data URI plus metadata.
The export_type field selects the CSV shape: link_engagements_batch (engagement metrics for
explicit bitlinks or a filter), links_list (link metadata roster), or qr_codes_list (QR code
metadata roster). Row caps apply per request: 200 rows when metrics are included
(link_engagements_batch, or include_metrics on a list export); 1000 rows for metadata-only
list exports. When the match set exceeds the cap, truncated is true and only the first
cap rows are returned; row_count reports how many data rows are in the CSV.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.post_create_group_export(
    "Ba1bc23dE4F", GroupExportRequestBody(export_type=ExportType.LINK_ENGAGEMENTS_BATCH)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostCreateGroupExportErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.post_create_group_export(
    "Ba1bc23dE4F", GroupExportRequestBody(export_type=ExportType.LINK_ENGAGEMENTS_BATCH)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostCreateGroupExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[GroupExportRequestBody](bitly/models/group_export_request_body.py) \| [GroupExportRequestBodyDict](bitly/models/group_export_request_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupExportResponse](bitly/models/group_export_response.py), [PostCreateGroupExportErrorBody](bitly/errors/post_create_group_export_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupExportResponse](bitly/models/group_export_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostCreateGroupExportErrorBody](bitly/errors/post_create_group_export_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_group(group_guid: str, body: GroupUpdate | GroupUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, UpdateGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details of a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.update_group("Ba1bc23dE4F", GroupUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.update_group("Ba1bc23dE4F", GroupUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[GroupUpdate](bitly/models/group_update.py) \| [GroupUpdateDict](bitly/models/group_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Group](bitly/models/group.py), [UpdateGroupErrorBody](bitly/errors/update_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](bitly/models/group.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateGroupErrorBody](bitly/errors/update_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_group_preferences(group_guid: str, body: GroupPreferences | GroupPreferencesDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupPreferences, UpdateGroupPreferencesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates preferences for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups_api.with_raw_response.update_group_preferences("Ba1bc23dE4F", GroupPreferences())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupPreferences
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupPreferencesErrorBody
```

**Async**

```python
result = await async_client.groups_api.with_raw_response.update_group_preferences("Ba1bc23dE4F", GroupPreferences())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupPreferences
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupPreferencesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[GroupPreferences](bitly/models/group_preferences.py) \| [GroupPreferencesDict](bitly/models/group_preferences.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[GroupPreferences](bitly/models/group_preferences.py), [UpdateGroupPreferencesErrorBody](bitly/errors/update_group_preferences_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupPreferences](bitly/models/group_preferences.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateGroupPreferencesErrorBody](bitly/errors/update_group_preferences_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationsApi

> Source: [OrganizationsApi](bitly/apis/organizations_api.py)

<details>
<summary><code>def get_organization(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Organization, GetOrganizationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrive details for the specified organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations_api.with_raw_response.get_organization("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Organization
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationErrorBody
```

**Async**

```python
result = await async_client.organizations_api.with_raw_response.get_organization("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Organization
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_guid</code> | <code>str</code> | A GUID for a Bitly organization |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Organization](bitly/models/organization.py), [GetOrganizationErrorBody](bitly/errors/get_organization_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Organization](bitly/models/organization.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetOrganizationErrorBody](bitly/errors/get_organization_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organization_shorten_counts(organization_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Metrics, GetOrganizationShortenCountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shorten counts for a specific organization over a specified time period.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations_api.with_raw_response.get_organization_shorten_counts(
    "Oa1bcd234eF", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationShortenCountsErrorBody
```

**Async**

```python
result = await async_client.organizations_api.with_raw_response.get_organization_shorten_counts(
    "Oa1bcd234eF", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationShortenCountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_guid</code> | <code>str</code> | A GUID for a Bitly organization |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Metrics](bitly/models/metrics.py), [GetOrganizationShortenCountsErrorBody](bitly/errors/get_organization_shorten_counts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Metrics](bitly/models/metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetOrganizationShortenCountsErrorBody](bitly/errors/get_organization_shorten_counts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organization_shorten_counts_by_group(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Metrics, GetOrganizationShortenCountsByGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shorten counts for a specific organization by group for the current month.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations_api.with_raw_response.get_organization_shorten_counts_by_group("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationShortenCountsByGroupErrorBody
```

**Async**

```python
result = await async_client.organizations_api.with_raw_response.get_organization_shorten_counts_by_group("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationShortenCountsByGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_guid</code> | <code>str</code> | A GUID for a Bitly organization |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Metrics](bitly/models/metrics.py), [GetOrganizationShortenCountsByGroupErrorBody](bitly/errors/get_organization_shorten_counts_by_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Metrics](bitly/models/metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetOrganizationShortenCountsByGroupErrorBody](bitly/errors/get_organization_shorten_counts_by_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organizations(*, include_all: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Organizations, GetOrganizationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa) when configured.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations_api.with_raw_response.get_organizations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Organizations
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationsErrorBody
```

**Async**

```python
result = await async_client.organizations_api.with_raw_response.get_organizations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Organizations
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include_all</code> | <code>bool \| None</code> | When set to true, returns all of the user's organizations regardless of the token's allowed_orgs restrictions.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Organizations](bitly/models/organizations.py), [GetOrganizationsErrorBody](bitly/errors/get_organizations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Organizations](bitly/models/organizations.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetOrganizationsErrorBody](bitly/errors/get_organizations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_plan_limits(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlanLimits, GetPlanLimitsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all plan limits and counts available for an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations_api.with_raw_response.get_plan_limits("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanLimits
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlanLimitsErrorBody
```

**Async**

```python
result = await async_client.organizations_api.with_raw_response.get_plan_limits("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanLimits
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlanLimitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_guid</code> | <code>str</code> | A GUID for a Bitly organization |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[PlanLimits](bitly/models/plan_limits.py), [GetPlanLimitsErrorBody](bitly/errors/get_plan_limits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlanLimits](bitly/models/plan_limits.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetPlanLimitsErrorBody](bitly/errors/get_plan_limits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](bitly/apis/qr_codes.py)

<details>
<summary><code>def create_qr_code_public(body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCodeMinimal, CreateQrCodePublicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new QR Code and return its metadata

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.create_qr_code_public(
    PublicCreateQrCodeRequest(
        title="Minimal QR Code",
        group_guid="Ba1bc23dE4F",
        destination=QrCodeDestination(bitlink_id="bit.ly/abc123"),
        tags=["tag1", "tag2"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQrCodePublicErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.create_qr_code_public(
    PublicCreateQrCodeRequest(
        title="Minimal QR Code",
        group_guid="Ba1bc23dE4F",
        destination=QrCodeDestination(bitlink_id="bit.ly/abc123"),
        tags=["tag1", "tag2"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQrCodePublicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicCreateQrCodeRequest](bitly/models/public_create_qr_code_request.py) \| [PublicCreateQrCodeRequestDict](bitly/models/public_create_qr_code_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[QrCodeMinimal](bitly/models/qr_code_minimal.py), [CreateQrCodePublicErrorBody](bitly/errors/create_qr_code_public_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCodeMinimal](bitly/models/qr_code_minimal.py)</code> -- CREATED

**On `Failure`**: `error` is <code>[CreateQrCodePublicErrorBody](bitly/errors/create_qr_code_public_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_static_qr_code_public(body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict, *, format_: FormatOrStr | None = Format.SVG, accept: AcceptOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicStaticQrCodeResponse, CreateStaticQrCodePublicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are supported via the Accept header
Contact your Account Manager to discuss enabling this feature for your account.

The `render_customizations` field supports basic appearance options. Customizations that require the rasterize API are not supported: `gradient`, `background_gradient`, `frame`, `text`, and `logo`.

The Accept header controls the response format:
- `application/json` (default): Returns a JSON object with the image as a base64-encoded byte string.
- `image/svg+xml`: Returns the raw SVG image.
- `image/png`: Returns the raw PNG image.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.create_static_qr_code_public(
    PublicCreateStaticQrCodeRequest(content="https://bitly.com", group_guid="Ba1bc23dE4F"), accept=Accept.IMAGE_SVG_XML
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicStaticQrCodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStaticQrCodePublicErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.create_static_qr_code_public(
    PublicCreateStaticQrCodeRequest(content="https://bitly.com", group_guid="Ba1bc23dE4F"), accept=Accept.IMAGE_SVG_XML
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicStaticQrCodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStaticQrCodePublicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicCreateStaticQrCodeRequest](bitly/models/public_create_static_qr_code_request.py) \| [PublicCreateStaticQrCodeRequestDict](bitly/models/public_create_static_qr_code_request.py)</code> | The request body. |
| <code>format_</code> | <code>[FormatOrStr](bitly/models/enums/format.py) \| None</code> | The image format. Supports `svg` and `png`. Ignored if the Accept header specifies an image type.<br>**Default**: <code>Format.SVG</code> |
| <code>accept</code> | <code>[AcceptOrStr](bitly/models/enums/accept.py) \| None</code> | Controls the response format. Use `application/json` (default) to receive a JSON-wrapped base64 image, `image/svg+xml` to receive the raw SVG, or `image/png` to receive the raw PNG.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[PublicStaticQrCodeResponse](bitly/models/public_static_qr_code_response.py), [CreateStaticQrCodePublicErrorBody](bitly/errors/create_static_qr_code_public_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicStaticQrCodeResponse](bitly/models/public_static_qr_code_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[CreateStaticQrCodePublicErrorBody](bitly/errors/create_static_qr_code_public_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 406, 422, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_qr_code(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicDeleteQrCodeResponse, DeleteQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link (if applicable).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.delete_qr_code("Qabcde12345")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicDeleteQrCodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.delete_qr_code("Qabcde12345")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicDeleteQrCodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[PublicDeleteQrCodeResponse](bitly/models/public_delete_qr_code_response.py), [DeleteQrCodeErrorBody](bitly/errors/delete_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicDeleteQrCodeResponse](bitly/models/public_delete_qr_code_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[DeleteQrCodeErrorBody](bitly/errors/delete_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_qr_code_by_id_public(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCodeDetails, GetQrCodeByIdPublicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the QR code with a matching id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_qr_code_by_id_public("Qabcde12345")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeDetails
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodeByIdPublicErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_qr_code_by_id_public("Qabcde12345")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeDetails
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodeByIdPublicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[QrCodeDetails](bitly/models/qr_code_details.py), [GetQrCodeByIdPublicErrorBody](bitly/errors/get_qr_code_by_id_public_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCodeDetails](bitly/models/qr_code_details.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetQrCodeByIdPublicErrorBody](bitly/errors/get_qr_code_by_id_public_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_qr_code_image_public(qrcode_id: str, *, format_: FormatOrStr | None = Format.SVG, accept: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicQrCodeImageResponse, GetQrCodeImagePublicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the image of a given QR Code. The Accept header controls how this is returned (options are "application/json", "image/svg+xml", and "image/png").
If the Accept header is "application/json" the format query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag).
To Return the QR Code image itself, set the Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter to “svg” or “png” (if no format is specified the default will be “svg”).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_qr_code_image_public(
    "Qabcde12345", format_=Format.SVG, accept="image/svg+xml"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicQrCodeImageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodeImagePublicErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_qr_code_image_public(
    "Qabcde12345", format_=Format.SVG, accept="image/svg+xml"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicQrCodeImageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodeImagePublicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>format_</code> | <code>[FormatOrStr](bitly/models/enums/format.py) \| None</code> | The format type of the image. If there is an image format in the header it takes precedence.<br>**Default**: <code>Format.SVG</code> |
| <code>accept</code> | <code>str \| None</code> | The file format for the QR code's image. If the accept header is application/json the image data will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[PublicQrCodeImageResponse](bitly/models/public_qr_code_image_response.py), [GetQrCodeImagePublicErrorBody](bitly/errors/get_qr_code_image_public_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicQrCodeImageResponse](bitly/models/public_qr_code_image_response.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetQrCodeImagePublicErrorBody](bitly/errors/get_qr_code_image_public_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scan_metrics_for_qr_code(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BitlinkScans, GetScanMetricsForQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each time window, where the window is based on the provided unit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkScans
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkScans
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BitlinkScans](bitly/models/bitlink_scans.py), [GetScanMetricsForQrCodeErrorBody](bitly/errors/get_scan_metrics_for_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BitlinkScans](bitly/models/bitlink_scans.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetScanMetricsForQrCodeErrorBody](bitly/errors/get_scan_metrics_for_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scan_metrics_for_qr_code_by_browser(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByBrowserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the browsers generating scan traffic to the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_browser(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByBrowserErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_browser(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByBrowserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ScanMetrics](bitly/models/scan_metrics.py), [GetScanMetricsForQrCodeByBrowserErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_browser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScanMetrics](bitly/models/scan_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetScanMetricsForQrCodeByBrowserErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_browser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scan_metrics_for_qr_code_by_cities(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CityScanMetrics, GetScanMetricsForQrCodeByCitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the city origins of scan traffic for the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_cities(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByCitiesErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_cities(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CityScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByCitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[CityScanMetrics](bitly/models/city_scan_metrics.py), [GetScanMetricsForQrCodeByCitiesErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_cities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CityScanMetrics](bitly/models/city_scan_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetScanMetricsForQrCodeByCitiesErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_cities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scan_metrics_for_qr_code_by_countries(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByCountriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the country origins of scan traffic for the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_countries(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByCountriesErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_countries(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ScanMetrics](bitly/models/scan_metrics.py), [GetScanMetricsForQrCodeByCountriesErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScanMetrics](bitly/models/scan_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetScanMetricsForQrCodeByCountriesErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_countries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scan_metrics_for_qr_code_by_devices_os(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByDevicesOsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device os generating scan traffic for the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_devices_os(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByDevicesOsErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_scan_metrics_for_qr_code_by_devices_os(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsForQrCodeByDevicesOsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[ScanMetrics](bitly/models/scan_metrics.py), [GetScanMetricsForQrCodeByDevicesOsErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_devices_os_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScanMetrics](bitly/models/scan_metrics.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetScanMetricsForQrCodeByDevicesOsErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_devices_os_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scan_metrics_summary_for_qr_code(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BitlinkScansSummary, GetScanMetricsSummaryForQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the window is based on the provided unit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_scan_metrics_summary_for_qr_code(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkScansSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsSummaryForQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_scan_metrics_summary_for_qr_code(
    "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkScansSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanMetricsSummaryForQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR Code ID |
| <code>unit</code> | <code>[TimeUnitOrStr](bitly/models/enums/time_unit.py)</code> | A unit of time<br>**Default**: <code>TimeUnit.DAY</code> |
| <code>units</code> | <code>int</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: <code>-1</code> |
| <code>unit_reference</code> | <code>str \| None</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BitlinkScansSummary](bitly/models/bitlink_scans_summary.py), [GetScanMetricsSummaryForQrCodeErrorBody](bitly/errors/get_scan_metrics_summary_for_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BitlinkScansSummary](bitly/models/bitlink_scans_summary.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetScanMetricsSummaryForQrCodeErrorBody](bitly/errors/get_scan_metrics_summary_for_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_qr_minimal(group_guid: str, *, has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH, size: int | None = 50, search_after: str | None = None, query: str | None = None, hostname_path_query: str | None = None, created_before: int | None = None, created_after: int | None = None, archived: ArchivedOrStr | None = Archived.OFF, creating_login: list[str] | None = None, qrc_type: list[QrcTypeOrStr] | None = None, is_gs1: IsGs1OrStr | None = IsGs1.BOTH, is_expired: IsExpiredOrStr | None = IsExpired.BOTH, has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH, has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCodesMinimal, ListQrMinimalErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order.
The pagination occurs by calling the next link in the pagination response object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.list_qr_minimal(
    "Ba1bc23dE4F",
    has_render_customizations=HasRenderCustomizations.BOTH,
    size=10,
    query="api",
    hostname_path_query="dev.bitly.com/api-reference",
    created_before=1694529902,
    created_after=1694529902,
    archived=Archived.BOTH,
    creating_login=["chauncey"],
    qrc_type=[QrcType.BITLINK],
    is_gs1=IsGs1.BOTH,
    tags=["bitly", "api"],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodesMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQrMinimalErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.list_qr_minimal(
    "Ba1bc23dE4F",
    has_render_customizations=HasRenderCustomizations.BOTH,
    size=10,
    query="api",
    hostname_path_query="dev.bitly.com/api-reference",
    created_before=1694529902,
    created_after=1694529902,
    archived=Archived.BOTH,
    creating_login=["chauncey"],
    qrc_type=[QrcType.BITLINK],
    is_gs1=IsGs1.BOTH,
    tags=["bitly", "api"],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodesMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQrMinimalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>has_render_customizations</code> | <code>[HasRenderCustomizationsOrStr](bitly/models/enums/has_render_customizations.py) \| None</code> | Whether or not QRCode has any render customizations (like color or shape changes)<br>**Default**: <code>HasRenderCustomizations.BOTH</code> |
| <code>size</code> | <code>int \| None</code> | The quantity of items to be be returned<br>**Default**: <code>50</code> |
| <code>search_after</code> | <code>str \| None</code> | Token used to search next batch of qr codes, only use response from API as input value.<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | The value that you would like to search<br>**Default**: <code>None</code> |
| <code>hostname_path_query</code> | <code>str \| None</code> | The hostname and/or path you would like to search (case-insensitive). Subdomains included; query params and fragment ignored.<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>int \| None</code> | Timestamp as an integer unix epoch (seconds only)<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>int \| None</code> | Timestamp as an integer unix epoch (seconds only)<br>**Default**: <code>None</code> |
| <code>archived</code> | <code>[ArchivedOrStr](bitly/models/enums/archived.py) \| None</code> | Whether or not to include archived resources<br>**Default**: <code>Archived.OFF</code> |
| <code>creating_login</code> | <code>list&#91;str&#93; \| None</code> | Filter by the login of the authenticated user that created the QR Code<br>**Default**: <code>None</code> |
| <code>qrc_type</code> | <code>list&#91;[QrcTypeOrStr](bitly/models/enums/qrc_type.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>is_gs1</code> | <code>[IsGs1OrStr](bitly/models/enums/is_gs1.py) \| None</code> | a filter value if the resource is a GS1 QR code<br>**Default**: <code>IsGs1.BOTH</code> |
| <code>is_expired</code> | <code>[IsExpiredOrStr](bitly/models/enums/is_expired.py) \| None</code> | filter bitlinks by expiration status<br>**Default**: <code>IsExpired.BOTH</code> |
| <code>has_expiration</code> | <code>[HasExpirationOrStr](bitly/models/enums/has_expiration.py) \| None</code> | filter bitlinks by presence of expiration<br>**Default**: <code>HasExpiration.BOTH</code> |
| <code>has_dynamic_routing</code> | <code>[HasDynamicRoutingOrStr](bitly/models/enums/has_dynamic_routing.py) \| None</code> | filter bitlinks by presence of dynamic routing rules<br>**Default**: <code>HasDynamicRouting.BOTH</code> |
| <code>tags</code> | <code>list&#91;str&#93; \| None</code> | Filter by given tags<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[QrCodesMinimal](bitly/models/qr_codes_minimal.py), [ListQrMinimalErrorBody](bitly/errors/list_qr_minimal_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCodesMinimal](bitly/models/qr_codes_minimal.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[ListQrMinimalErrorBody](bitly/errors/list_qr_minimal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def redirect_qr_code_destination(qrcode_id: str, body: RedirectQrCodeRequest | RedirectQrCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCodeMinimal, RedirectQrCodeDestinationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.redirect_qr_code_destination(
    "some example string", RedirectQrCodeRequest(long_url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RedirectQrCodeDestinationErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.redirect_qr_code_destination(
    "some example string", RedirectQrCodeRequest(long_url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RedirectQrCodeDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RedirectQrCodeRequest](bitly/models/redirect_qr_code_request.py) \| [RedirectQrCodeRequestDict](bitly/models/redirect_qr_code_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[QrCodeMinimal](bitly/models/qr_code_minimal.py), [RedirectQrCodeDestinationErrorBody](bitly/errors/redirect_qr_code_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCodeMinimal](bitly/models/qr_code_minimal.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[RedirectQrCodeDestinationErrorBody](bitly/errors/redirect_qr_code_destination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 410, 422, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_qr_code_public(qrcode_id: str, *, body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCodeMinimal, UpdateQrCodePublicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the QR code with a matching id and returns it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.update_qr_code_public(
    "Qabc123", body=PublicUpdateQrCodeRequest(title="Minimal QR Code Updated", tags=["tag1", "tag2"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodePublicErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.update_qr_code_public(
    "Qabc123", body=PublicUpdateQrCodeRequest(title="Minimal QR Code Updated", tags=["tag1", "tag2"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCodeMinimal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodePublicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The QR code ID |
| <code>body</code> | <code>[PublicUpdateQrCodeRequest](bitly/models/public_update_qr_code_request.py) \| [PublicUpdateQrCodeRequestDict](bitly/models/public_update_qr_code_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[QrCodeMinimal](bitly/models/qr_code_minimal.py), [UpdateQrCodePublicErrorBody](bitly/errors/update_qr_code_public_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCodeMinimal](bitly/models/qr_code_minimal.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateQrCodePublicErrorBody](bitly/errors/update_qr_code_public_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 500 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_qr_codes_by_group(group_guid: str, body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrcBulkUpdate, UpdateQrCodesByGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time.
Pages QR codes cannot be updated with this endpoint.
The response includes a list of QR code ids that were updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.update_qr_codes_by_group(
    "Ba1bc23dE4F", QrcBulkUpdateRequest(action=Action.ARCHIVE)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrcBulkUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodesByGroupErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.update_qr_codes_by_group(
    "Ba1bc23dE4F", QrcBulkUpdateRequest(action=Action.ARCHIVE)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrcBulkUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodesByGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_guid</code> | <code>str</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[QrcBulkUpdateRequest](bitly/models/qrc_bulk_update_request.py) \| [QrcBulkUpdateRequestDict](bitly/models/qrc_bulk_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[QrcBulkUpdate](bitly/models/qrc_bulk_update.py), [UpdateQrCodesByGroupErrorBody](bitly/errors/update_qr_codes_by_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrcBulkUpdate](bitly/models/qrc_bulk_update.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateQrCodesByGroupErrorBody](bitly/errors/update_qr_codes_by_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 410, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upgrade_qr_code_to_bitlink(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BitlinkBody, UpgradeQrCodeToBitlinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is already coupled, no encode is consumed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.upgrade_qr_code_to_bitlink("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpgradeQrCodeToBitlinkErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.upgrade_qr_code_to_bitlink("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BitlinkBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpgradeQrCodeToBitlinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[BitlinkBody](bitly/models/bitlink_body.py), [UpgradeQrCodeToBitlinkErrorBody](bitly/errors/upgrade_qr_code_to_bitlink_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpgradeQrCodeToBitlinkErrorBody](bitly/errors/upgrade_qr_code_to_bitlink_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](bitly/apis/user_api.py)

<details>
<summary><code>def get_platform_limits(*, path: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlatformLimits, GetPlatformLimitsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all platform limits and counts available for an organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_api.with_raw_response.get_platform_limits(path="/organizations/{organization_guid}")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlatformLimits
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlatformLimitsErrorBody
```

**Async**

```python
result = await async_client.user_api.with_raw_response.get_platform_limits(path="/organizations/{organization_guid}")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlatformLimits
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlatformLimitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>path</code> | <code>str \| None</code> | The specific path for which information is requested<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[PlatformLimits](bitly/models/platform_limits.py), [GetPlatformLimitsErrorBody](bitly/errors/get_platform_limits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlatformLimits](bitly/models/platform_limits.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetPlatformLimitsErrorBody](bitly/errors/get_platform_limits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, GetUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for the current authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_api.with_raw_response.get_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

**Async**

```python
result = await async_client.user_api.with_raw_response.get_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[User](bitly/models/user.py), [GetUserErrorBody](bitly/errors/get_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](bitly/models/user.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetUserErrorBody](bitly/errors/get_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, UpdateUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update fields in the user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_api.with_raw_response.update_user(UserUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

**Async**

```python
result = await async_client.user_api.with_raw_response.update_user(UserUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserUpdate](bitly/models/user_update.py) \| [UserUpdateDict](bitly/models/user_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[User](bitly/models/user.py), [UpdateUserErrorBody](bitly/errors/update_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](bitly/models/user.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateUserErrorBody](bitly/errors/update_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](bitly/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, CreateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.create_webhook(
    WebhookCreate(
        organization_guid="some example string",
        name="some example string",
        event="some example string",
        url="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(
    WebhookCreate(
        organization_guid="some example string",
        name="some example string",
        event="some example string",
        url="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookCreate](bitly/models/webhook_create.py) \| [WebhookCreateDict](bitly/models/webhook_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Webhook](bitly/models/webhook.py), [CreateWebhookErrorBody](bitly/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](bitly/models/webhook.py)</code> -- CREATED

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](bitly/errors/create_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.delete_webhook("Wa1bcDefG23")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook("Wa1bcDefG23")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_guid</code> | <code>str</code> | A GUID for a Bitly webhook |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;None, [DeleteWebhookErrorBody](bitly/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](bitly/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, GetWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.get_webhook("Wa1bcDefG23")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook("Wa1bcDefG23")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_guid</code> | <code>str</code> | A GUID for a Bitly webhook |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Webhook](bitly/models/webhook.py), [GetWebhookErrorBody](bitly/errors/get_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](bitly/models/webhook.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetWebhookErrorBody](bitly/errors/get_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhooks(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksModel, GetWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all webhooks available for an Organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.get_webhooks("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhooks("Oa1bcd234eF")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_guid</code> | <code>str</code> | A GUID for a Bitly organization |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[WebhooksModel](bitly/models/webhooks_model.py), [GetWebhooksErrorBody](bitly/errors/get_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksModel](bitly/models/webhooks_model.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[GetWebhooksErrorBody](bitly/errors/get_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(webhook_guid: str, body: WebhookUpdate | WebhookUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, UpdateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.update_webhook("Wa1bcDefG23", WebhookUpdate(guid="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.update_webhook(
    "Wa1bcDefG23", WebhookUpdate(guid="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_guid</code> | <code>str</code> | A GUID for a Bitly webhook |
| <code>body</code> | <code>[WebhookUpdate](bitly/models/webhook_update.py) \| [WebhookUpdateDict](bitly/models/webhook_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Webhook](bitly/models/webhook.py), [UpdateWebhookErrorBody](bitly/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](bitly/models/webhook.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](bitly/errors/update_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 422, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| 429 | <code>[SimplifiedError](bitly/models/simplified_error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, VerifyWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends ping event to test webhook configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.verify_webhook("Wa1bcDefG23")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifyWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.verify_webhook("Wa1bcDefG23")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifyWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_guid</code> | <code>str</code> | A GUID for a Bitly webhook |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitly/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](bitly/core/results.py)&#91;[Webhook](bitly/models/webhook.py), [VerifyWebhookErrorBody](bitly/errors/verify_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](bitly/models/webhook.py)</code> -- SUCCESS

**On `Failure`**: `error` is <code>[VerifyWebhookErrorBody](bitly/errors/verify_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 404, 500, 503 | <code>[Error](bitly/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitly/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

