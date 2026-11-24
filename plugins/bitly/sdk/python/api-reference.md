# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BitlyClient](bitly/client.py)

## Apps

> Source: [Apps](bitly/apis/apps.py)

<details>
<summary><code>def get_o_auth_app(client_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OAuthApp</code></summary>

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
try:
    response = client.apps.get_o_auth_app("1234a56b789cd0e123456fg7h8901j123km45n6p")
    # TODO: Handle 'response' of type OAuthApp
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOAuthAppErrorBody
```

**Async**

```python
try:
    response = await async_client.apps.get_o_auth_app("1234a56b789cd0e123456fg7h8901j123km45n6p")
    # TODO: Handle 'response' of type OAuthApp
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOAuthAppErrorBody
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

**OnSuccess**: <code>[OAuthApp](bitly/models/o_auth_app.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetOAuthAppErrorBody](bitly/errors/get_o_auth_app_error.py)&#93;</code>

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
<summary><code>def get_bsds(*, request_options: RequestOptionsOrDict | None = None) -> BsDsResponse</code></summary>

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
try:
    response = client.bs_ds.get_bsds()
    # TODO: Handle 'response' of type BsDsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBsDsErrorBody
```

**Async**

```python
try:
    response = await async_client.bs_ds.get_bsds()
    # TODO: Handle 'response' of type BsDsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBsDsErrorBody
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

**OnSuccess**: <code>[BsDsResponse](bitly/models/bs_ds_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetBsDsErrorBody](bitly/errors/get_bs_ds_error.py)&#93;</code>

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
<summary><code>def create_bitlink(body: Shorten | ShortenDict, *, request_options: RequestOptionsOrDict | None = None) -> ShortenBitlinkBody</code></summary>

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
try:
    response = client.bitlinks_api.create_bitlink(Shorten(long_url="some example string"))
    # TODO: Handle 'response' of type ShortenBitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.create_bitlink(Shorten(long_url="some example string"))
    # TODO: Handle 'response' of type ShortenBitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBitlinkErrorBody
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

**OnSuccess**: <code>[ShortenBitlinkBody](bitly/models/shorten_bitlink_body.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateBitlinkErrorBody](bitly/errors/create_bitlink_error.py)&#93;</code>

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
<summary><code>def create_full_bitlink(body: FullShorten | FullShortenDict, *, request_options: RequestOptionsOrDict | None = None) -> BitlinkBody</code></summary>

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
try:
    response = client.bitlinks_api.create_full_bitlink(
        FullShorten(
            long_url="https://dev.bitly.com", domain="yourdomain.co", group_guid="Ba1bc23dE4F", keyword="new-link"
        ),
    )
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFullBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.create_full_bitlink(
        FullShorten(
            long_url="https://dev.bitly.com", domain="yourdomain.co", group_guid="Ba1bc23dE4F", keyword="new-link"
        ),
    )
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFullBitlinkErrorBody
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

**OnSuccess**: <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateFullBitlinkErrorBody](bitly/errors/create_full_bitlink_error.py)&#93;</code>

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
<summary><code>def delete_bitlink(bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> LinkDeletionResponse</code></summary>

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
try:
    response = client.bitlinks_api.delete_bitlink("bit.ly/12a4b6c")
    # TODO: Handle 'response' of type LinkDeletionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.delete_bitlink("bit.ly/12a4b6c")
    # TODO: Handle 'response' of type LinkDeletionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBitlinkErrorBody
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

**OnSuccess**: <code>[LinkDeletionResponse](bitly/models/link_deletion_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[DeleteBitlinkErrorBody](bitly/errors/delete_bitlink_error.py)&#93;</code>

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
<summary><code>def expand_bitlink(body: ExpandBitlink | ExpandBitlinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ExpandedBitlink</code></summary>

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
try:
    response = client.bitlinks_api.expand_bitlink(ExpandBitlink())
    # TODO: Handle 'response' of type ExpandedBitlink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExpandBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.expand_bitlink(ExpandBitlink())
    # TODO: Handle 'response' of type ExpandedBitlink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExpandBitlinkErrorBody
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

**OnSuccess**: <code>[ExpandedBitlink](bitly/models/expanded_bitlink.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[ExpandBitlinkErrorBody](bitly/errors/expand_bitlink_error.py)&#93;</code>

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
<summary><code>def get_bitlink(bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> BitlinkBody</code></summary>

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
try:
    response = client.bitlinks_api.get_bitlink("bit.ly/12a4b6c")
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_bitlink("bit.ly/12a4b6c")
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBitlinkErrorBody
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

**OnSuccess**: <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetBitlinkErrorBody](bitly/errors/get_bitlink_error.py)&#93;</code>

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
<summary><code>def get_bitlinks_by_group(group_guid: str, *, size: int | None = 50, search_after: str | None = None, query: str | None = None, hostname_path_query: str | None = None, created_before: int | None = None, created_after: int | None = None, archived: ArchivedOrStr | None = Archived.OFF, deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH, domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH, campaign_guid: str | None = None, channel_guid: str | None = None, custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH, has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH, is_expired: IsExpiredOrStr | None = IsExpired.BOTH, has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH, has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH, tags: list[str] | None = None, launchpad_ids: list[str] | None = None, encoding_login: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> Bitlinks</code></summary>

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
try:
    response = client.bitlinks_api.get_bitlinks_by_group(
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
    # TODO: Handle 'response' of type Bitlinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBitlinksByGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_bitlinks_by_group(
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
    # TODO: Handle 'response' of type Bitlinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBitlinksByGroupErrorBody
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

**OnSuccess**: <code>[Bitlinks](bitly/models/bitlinks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetBitlinksByGroupErrorBody](bitly/errors/get_bitlinks_by_group_error.py)&#93;</code>

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
<summary><code>def get_clicks_for_bitlink(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Clicks</code></summary>

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
try:
    response = client.bitlinks_api.get_clicks_for_bitlink(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Clicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClicksForBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_clicks_for_bitlink(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Clicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClicksForBitlinkErrorBody
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

**OnSuccess**: <code>[Clicks](bitly/models/clicks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetClicksForBitlinkErrorBody](bitly/errors/get_clicks_for_bitlink_error.py)&#93;</code>

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
<summary><code>def get_clicks_summary_for_bitlink(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClicksSummary</code></summary>

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
try:
    response = client.bitlinks_api.get_clicks_summary_for_bitlink(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClicksSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClicksSummaryForBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_clicks_summary_for_bitlink(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClicksSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClicksSummaryForBitlinkErrorBody
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

**OnSuccess**: <code>[ClicksSummary](bitly/models/clicks_summary.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetClicksSummaryForBitlinkErrorBody](bitly/errors/get_clicks_summary_for_bitlink_error.py)&#93;</code>

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
<summary><code>def get_engagements(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TotalEngagements</code></summary>

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
try:
    response = client.bitlinks_api.get_engagements(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type TotalEngagements
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEngagementsErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_engagements(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type TotalEngagements
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEngagementsErrorBody
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

**OnSuccess**: <code>[TotalEngagements](bitly/models/total_engagements.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetEngagementsErrorBody](bitly/errors/get_engagements_error.py)&#93;</code>

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
<summary><code>def get_engagements_summary(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TotalEngagementsSummary</code></summary>

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
try:
    response = client.bitlinks_api.get_engagements_summary(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type TotalEngagementsSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEngagementsSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_engagements_summary(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type TotalEngagementsSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEngagementsSummaryErrorBody
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

**OnSuccess**: <code>[TotalEngagementsSummary](bitly/models/total_engagements_summary.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetEngagementsSummaryErrorBody](bitly/errors/get_engagements_summary_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_cities(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CityMetrics</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_cities(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByCitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_cities(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByCitiesErrorBody
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

**OnSuccess**: <code>[CityMetrics](bitly/models/city_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByCitiesErrorBody](bitly/errors/get_metrics_for_bitlink_by_cities_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_countries(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetrics</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_countries(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_countries(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByCountriesErrorBody
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

**OnSuccess**: <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByCountriesErrorBody](bitly/errors/get_metrics_for_bitlink_by_countries_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_devices(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DeviceMetrics</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_devices(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type DeviceMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByDevicesErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_devices(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type DeviceMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByDevicesErrorBody
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

**OnSuccess**: <code>[DeviceMetrics](bitly/models/device_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByDevicesErrorBody](bitly/errors/get_metrics_for_bitlink_by_devices_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_referrer_name(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetrics</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_referrer_name(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferrerNameErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_referrer_name(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferrerNameErrorBody
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

**OnSuccess**: <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByReferrerNameErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrer_name_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_referrers(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetrics</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_referrers(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferrersErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_referrers(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferrersErrorBody
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

**OnSuccess**: <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByReferrersErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrers_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_referrers_by_domains(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReferrersByDomains</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_referrers_by_domains(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ReferrersByDomains
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferrersByDomainsErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_referrers_by_domains(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ReferrersByDomains
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferrersByDomainsErrorBody
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

**OnSuccess**: <code>[ReferrersByDomains](bitly/models/referrers_by_domains.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByReferrersByDomainsErrorBody](bitly/errors/get_metrics_for_bitlink_by_referrers_by_domains_error.py)&#93;</code>

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
<summary><code>def get_metrics_for_bitlink_by_referring_domains(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetrics</code></summary>

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
try:
    response = client.bitlinks_api.get_metrics_for_bitlink_by_referring_domains(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferringDomainsErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_metrics_for_bitlink_by_referring_domains(
        "bit.ly/12a4b6c", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetricsForBitlinkByReferringDomainsErrorBody
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

**OnSuccess**: <code>[ClickMetrics](bitly/models/click_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetMetricsForBitlinkByReferringDomainsErrorBody](bitly/errors/get_metrics_for_bitlink_by_referring_domains_error.py)&#93;</code>

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
<summary><code>def get_sorted_bitlinks(group_guid: str, sort: SortOrStr, *, unit: TimeUnitOrStr | None = TimeUnit.DAY, units: int | None = -1, unit_reference: str | None = None, size: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> SortedLinks</code></summary>

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
try:
    response = client.bitlinks_api.get_sorted_bitlinks(
        "Ba1bc23dE4F", Sort.CLICKS, unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
    )
    # TODO: Handle 'response' of type SortedLinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSortedBitlinksErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_sorted_bitlinks(
        "Ba1bc23dE4F", Sort.CLICKS, unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
    )
    # TODO: Handle 'response' of type SortedLinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSortedBitlinksErrorBody
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

**OnSuccess**: <code>[SortedLinks](bitly/models/sorted_links.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetSortedBitlinksErrorBody](bitly/errors/get_sorted_bitlinks_error.py)&#93;</code>

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
<summary><code>def get_top_links_and_qr_codes_by_engagements(group_guid: str, *, unit: TimeUnitOrStr | None = TimeUnit.DAY, units: int | None = -1, unit_reference: str | None = None, size: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> TopLinksAndQrCodes</code></summary>

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
try:
    response = client.bitlinks_api.get_top_links_and_qr_codes_by_engagements(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
    )
    # TODO: Handle 'response' of type TopLinksAndQrCodes
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTopLinksAndQrCodesByEngagementsErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.get_top_links_and_qr_codes_by_engagements(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700", size=10
    )
    # TODO: Handle 'response' of type TopLinksAndQrCodes
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTopLinksAndQrCodesByEngagementsErrorBody
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

**OnSuccess**: <code>[TopLinksAndQrCodes](bitly/models/top_links_and_qr_codes.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetTopLinksAndQrCodesByEngagementsErrorBody](bitly/errors/get_top_links_and_qr_codes_by_engagements_error.py)&#93;</code>

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
<summary><code>def update_bitlink(bitlink: str, body: BitlinkUpdateBody | BitlinkUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> BitlinkBody</code></summary>

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
try:
    response = client.bitlinks_api.update_bitlink(
        "bit.ly/12a4b6c", BitlinkUpdateBody(long_url="https://www.newdestination.com")
    )
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.update_bitlink(
        "bit.ly/12a4b6c", BitlinkUpdateBody(long_url="https://www.newdestination.com")
    )
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBitlinkErrorBody
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

**OnSuccess**: <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateBitlinkErrorBody](bitly/errors/update_bitlink_error.py)&#93;</code>

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
<summary><code>def update_bitlinks_by_group(group_guid: str, body: BulkUpdateRequest | BulkUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BulkUpdate</code></summary>

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
try:
    response = client.bitlinks_api.update_bitlinks_by_group("Ba1bc23dE4F", BulkUpdateRequest(action=Action.ARCHIVE))
    # TODO: Handle 'response' of type BulkUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBitlinksByGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.bitlinks_api.update_bitlinks_by_group(
        "Ba1bc23dE4F", BulkUpdateRequest(action=Action.ARCHIVE)
    )
    # TODO: Handle 'response' of type BulkUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBitlinksByGroupErrorBody
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

**OnSuccess**: <code>[BulkUpdate](bitly/models/bulk_update.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateBitlinksByGroupErrorBody](bitly/errors/update_bitlinks_by_group_error.py)&#93;</code>

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
<summary><code>def create_campaign(body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> Campaign</code></summary>

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
try:
    response = client.campaigns_api.create_campaign(CampaignModify())
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.create_campaign(CampaignModify())
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCampaignErrorBody
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

**OnSuccess**: <code>[Campaign](bitly/models/campaign.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateCampaignErrorBody](bitly/errors/create_campaign_error.py)&#93;</code>

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
<summary><code>def create_channel(body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> Channel</code></summary>

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
try:
    response = client.campaigns_api.create_channel(ChannelModify())
    # TODO: Handle 'response' of type Channel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.create_channel(ChannelModify())
    # TODO: Handle 'response' of type Channel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateChannelErrorBody
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

**OnSuccess**: <code>[Channel](bitly/models/channel.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateChannelErrorBody](bitly/errors/create_channel_error.py)&#93;</code>

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
<summary><code>def get_campaign(campaign_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Campaign</code></summary>

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
try:
    response = client.campaigns_api.get_campaign("Ca1bcd2EFGh")
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.get_campaign("Ca1bcd2EFGh")
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignErrorBody
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

**OnSuccess**: <code>[Campaign](bitly/models/campaign.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetCampaignErrorBody](bitly/errors/get_campaign_error.py)&#93;</code>

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
<summary><code>def get_campaigns(*, group_guid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Campaigns</code></summary>

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
try:
    response = client.campaigns_api.get_campaigns(group_guid="Ba1bc23dE4F")
    # TODO: Handle 'response' of type Campaigns
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignsErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.get_campaigns(group_guid="Ba1bc23dE4F")
    # TODO: Handle 'response' of type Campaigns
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignsErrorBody
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

**OnSuccess**: <code>[Campaigns](bitly/models/campaigns.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetCampaignsErrorBody](bitly/errors/get_campaigns_error.py)&#93;</code>

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
<summary><code>def get_channel(channel_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Channel</code></summary>

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
try:
    response = client.campaigns_api.get_channel("Ha1bc2DefGh")
    # TODO: Handle 'response' of type Channel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.get_channel("Ha1bc2DefGh")
    # TODO: Handle 'response' of type Channel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChannelErrorBody
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

**OnSuccess**: <code>[Channel](bitly/models/channel.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetChannelErrorBody](bitly/errors/get_channel_error.py)&#93;</code>

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
<summary><code>def get_channels(*, group_guid: str | None = None, campaign_guid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Channels</code></summary>

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
try:
    response = client.campaigns_api.get_channels(group_guid="Ba1bc23dE4F", campaign_guid="Ca1bcd2EFGh")
    # TODO: Handle 'response' of type Channels
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChannelsErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.get_channels(group_guid="Ba1bc23dE4F", campaign_guid="Ca1bcd2EFGh")
    # TODO: Handle 'response' of type Channels
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChannelsErrorBody
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

**OnSuccess**: <code>[Channels](bitly/models/channels.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetChannelsErrorBody](bitly/errors/get_channels_error.py)&#93;</code>

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
<summary><code>def update_campaign(campaign_guid: str, body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> Campaign</code></summary>

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
try:
    response = client.campaigns_api.update_campaign("Ca1bcd2EFGh", CampaignModify())
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.update_campaign("Ca1bcd2EFGh", CampaignModify())
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCampaignErrorBody
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

**OnSuccess**: <code>[Campaign](bitly/models/campaign.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateCampaignErrorBody](bitly/errors/update_campaign_error.py)&#93;</code>

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
<summary><code>def update_channel(channel_guid: str, body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None) -> Channel</code></summary>

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
try:
    response = client.campaigns_api.update_channel("Ha1bc2DefGh", ChannelModify())
    # TODO: Handle 'response' of type Channel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns_api.update_channel("Ha1bc2DefGh", ChannelModify())
    # TODO: Handle 'response' of type Channel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateChannelErrorBody
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

**OnSuccess**: <code>[Channel](bitly/models/channel.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateChannelErrorBody](bitly/errors/update_channel_error.py)&#93;</code>

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
<summary><code>def add_custom_bitlink(body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomBitlinkBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.custom_bitlinks.add_custom_bitlink(AddCustomBitlink())
    # TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddCustomBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_bitlinks.add_custom_bitlink(AddCustomBitlink())
    # TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddCustomBitlinkErrorBody
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

**OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[AddCustomBitlinkErrorBody](bitly/errors/add_custom_bitlink_error.py)&#93;</code>

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
<summary><code>def get_clicks_for_custom_bitlink(custom_bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Clicks</code></summary>

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
try:
    response = client.custom_bitlinks.get_clicks_for_custom_bitlink(
        "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Clicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClicksForCustomBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_bitlinks.get_clicks_for_custom_bitlink(
        "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Clicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClicksForCustomBitlinkErrorBody
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

**OnSuccess**: <code>[Clicks](bitly/models/clicks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetClicksForCustomBitlinkErrorBody](bitly/errors/get_clicks_for_custom_bitlink_error.py)&#93;</code>

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
<summary><code>def get_custom_bitlink(custom_bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomBitlinkBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.custom_bitlinks.get_custom_bitlink("chauncey.ly/chauncey")
    # TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_bitlinks.get_custom_bitlink("chauncey.ly/chauncey")
    # TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomBitlinkErrorBody
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

**OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetCustomBitlinkErrorBody](bitly/errors/get_custom_bitlink_error.py)&#93;</code>

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
<summary><code>def get_custom_bitlink_metrics_by_destination(custom_bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.custom_bitlinks.get_custom_bitlink_metrics_by_destination(
        "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomBitlinkMetricsByDestinationErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_bitlinks.get_custom_bitlink_metrics_by_destination(
        "chauncey.ly/chauncey", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomBitlinkMetricsByDestinationErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetCustomBitlinkMetricsByDestinationErrorBody](bitly/errors/get_custom_bitlink_metrics_by_destination_error.py)&#93;</code>

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
<summary><code>def update_custom_bitlink(custom_bitlink: str, body: UpdateCustomBitlink | UpdateCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomBitlinkBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.custom_bitlinks.update_custom_bitlink("chauncey.ly/chauncey", UpdateCustomBitlink())
    # TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_bitlinks.update_custom_bitlink("chauncey.ly/chauncey", UpdateCustomBitlink())
    # TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomBitlinkErrorBody
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

**OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateCustomBitlinkErrorBody](bitly/errors/update_custom_bitlink_error.py)&#93;</code>

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
<summary><code>def get_group_metrics_by_referrer(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.groups_api.get_group_metrics_by_referrer(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByReferrerErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_metrics_by_referrer(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByReferrerErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupMetricsByReferrerErrorBody](bitly/errors/get_group_metrics_by_referrer_error.py)&#93;</code>

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
<summary><code>def get_group_metrics_by_referring_networks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.groups_api.get_group_metrics_by_referring_networks(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByReferringNetworksErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_metrics_by_referring_networks(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByReferringNetworksErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupMetricsByReferringNetworksErrorBody](bitly/errors/get_group_metrics_by_referring_networks_error.py)&#93;</code>

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
<summary><code>def get_group(group_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Group</code></summary>

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
try:
    response = client.groups_api.get_group("Ba1bc23dE4F")
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group("Ba1bc23dE4F")
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupErrorBody
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

**OnSuccess**: <code>[Group](bitly/models/group.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupErrorBody](bitly/errors/get_group_error.py)&#93;</code>

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
<summary><code>def get_group_clicks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupClicks</code></summary>

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
try:
    response = client.groups_api.get_group_clicks(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupClicksErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_clicks(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupClicksErrorBody
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

**OnSuccess**: <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupClicksErrorBody](bitly/errors/get_group_clicks_error.py)&#93;</code>

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
<summary><code>def get_group_code_scans_by_city(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CityMetricsBitlyGroupsApi</code></summary>

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
try:
    response = client.groups_api.get_group_code_scans_by_city(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupCodeScansByCityErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_code_scans_by_city(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupCodeScansByCityErrorBody
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

**OnSuccess**: <code>[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupCodeScansByCityErrorBody](bitly/errors/get_group_code_scans_by_city_error.py)&#93;</code>

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
<summary><code>def get_group_code_scans_by_country(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.groups_api.get_group_code_scans_by_country(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupCodeScansByCountryErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_code_scans_by_country(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupCodeScansByCountryErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupCodeScansByCountryErrorBody](bitly/errors/get_group_code_scans_by_country_error.py)&#93;</code>

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
<summary><code>def get_group_code_scans_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupClicks</code></summary>

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
try:
    response = client.groups_api.get_group_code_scans_over_time(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupCodeScansOverTimeErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_code_scans_over_time(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupCodeScansOverTimeErrorBody
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

**OnSuccess**: <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupCodeScansOverTimeErrorBody](bitly/errors/get_group_code_scans_over_time_error.py)&#93;</code>

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
<summary><code>def get_group_feature_usage(group_guid: str, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupFeatureUsage</code></summary>

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
try:
    response = client.groups_api.get_group_feature_usage("Ba1bc23dE4F", name=["qr_codes"])
    # TODO: Handle 'response' of type GroupFeatureUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupFeatureUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_feature_usage("Ba1bc23dE4F", name=["qr_codes"])
    # TODO: Handle 'response' of type GroupFeatureUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupFeatureUsageErrorBody
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

**OnSuccess**: <code>[GroupFeatureUsage](bitly/models/group_feature_usage.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupFeatureUsageErrorBody](bitly/errors/get_group_feature_usage_error.py)&#93;</code>

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
<summary><code>def get_group_historical_usage(group_guid: str, *, name: list[str] | None = None, start_date: str | None = None, end_date: str | None = None, unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH, request_options: RequestOptionsOrDict | None = None) -> GroupHistoricalUsage</code></summary>

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
try:
    response = client.groups_api.get_group_historical_usage(
        "Ba1bc23dE4F", name=["qr_codes"], start_date="2022-02-02", end_date="2023-10-04", unit=TimeUnitDwm.MONTH
    )
    # TODO: Handle 'response' of type GroupHistoricalUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupHistoricalUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_historical_usage(
        "Ba1bc23dE4F", name=["qr_codes"], start_date="2022-02-02", end_date="2023-10-04", unit=TimeUnitDwm.MONTH
    )
    # TODO: Handle 'response' of type GroupHistoricalUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupHistoricalUsageErrorBody
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

**OnSuccess**: <code>[GroupHistoricalUsage](bitly/models/group_historical_usage.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupHistoricalUsageErrorBody](bitly/errors/get_group_historical_usage_error.py)&#93;</code>

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
<summary><code>def get_group_link_clicks_by_city(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CityMetricsBitlyGroupsApi</code></summary>

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
try:
    response = client.groups_api.get_group_link_clicks_by_city(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByCityErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_link_clicks_by_city(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByCityErrorBody
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

**OnSuccess**: <code>[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupLinkClicksByCityErrorBody](bitly/errors/get_group_link_clicks_by_city_error.py)&#93;</code>

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
<summary><code>def get_group_link_clicks_by_country(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.groups_api.get_group_link_clicks_by_country(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByCountryErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_link_clicks_by_country(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByCountryErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupLinkClicksByCountryErrorBody](bitly/errors/get_group_link_clicks_by_country_error.py)&#93;</code>

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
<summary><code>def get_group_link_clicks_by_device(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupsLinksClicksDevicesResponse</code></summary>

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
try:
    response = client.groups_api.get_group_link_clicks_by_device(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupsLinksClicksDevicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByDeviceErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_link_clicks_by_device(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupsLinksClicksDevicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByDeviceErrorBody
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

**OnSuccess**: <code>[GroupsLinksClicksDevicesResponse](bitly/models/groups_links_clicks_devices_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupLinkClicksByDeviceErrorBody](bitly/errors/get_group_link_clicks_by_device_error.py)&#93;</code>

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
<summary><code>def get_group_link_clicks_by_referrer(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.groups_api.get_group_link_clicks_by_referrer(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByReferrerErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_link_clicks_by_referrer(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksByReferrerErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupLinkClicksByReferrerErrorBody](bitly/errors/get_group_link_clicks_by_referrer_error.py)&#93;</code>

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
<summary><code>def get_group_link_clicks_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupClicks</code></summary>

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
try:
    response = client.groups_api.get_group_link_clicks_over_time(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksOverTimeErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_link_clicks_over_time(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLinkClicksOverTimeErrorBody
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

**OnSuccess**: <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupLinkClicksOverTimeErrorBody](bitly/errors/get_group_link_clicks_over_time_error.py)&#93;</code>

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
<summary><code>def get_group_metrics_by_cities(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CityMetricsBitlyGroupsApi</code></summary>

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
try:
    response = client.groups_api.get_group_metrics_by_cities(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByCitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_metrics_by_cities(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByCitiesErrorBody
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

**OnSuccess**: <code>[CityMetricsBitlyGroupsApi](bitly/models/city_metrics_bitly_groups_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupMetricsByCitiesErrorBody](bitly/errors/get_group_metrics_by_cities_error.py)&#93;</code>

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
<summary><code>def get_group_metrics_by_countries(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClickMetricsBitlyCustomBitlinksApi</code></summary>

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
try:
    response = client.groups_api.get_group_metrics_by_countries(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_metrics_by_countries(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByCountriesErrorBody
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

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](bitly/models/click_metrics_bitly_custom_bitlinks_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupMetricsByCountriesErrorBody](bitly/errors/get_group_metrics_by_countries_error.py)&#93;</code>

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
<summary><code>def get_group_metrics_by_devices(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DeviceMetricsBitlyGroupsApi</code></summary>

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
try:
    response = client.groups_api.get_group_metrics_by_devices(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type DeviceMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByDevicesErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_metrics_by_devices(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type DeviceMetricsBitlyGroupsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsByDevicesErrorBody
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

**OnSuccess**: <code>[DeviceMetricsBitlyGroupsApi](bitly/models/device_metrics_bitly_groups_api.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupMetricsByDevicesErrorBody](bitly/errors/get_group_metrics_by_devices_error.py)&#93;</code>

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
<summary><code>def get_group_metrics_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupClicks</code></summary>

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
try:
    response = client.groups_api.get_group_metrics_over_time(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsOverTimeErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_metrics_over_time(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupClicks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupMetricsOverTimeErrorBody
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

**OnSuccess**: <code>[GroupClicks](bitly/models/group_clicks.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupMetricsOverTimeErrorBody](bitly/errors/get_group_metrics_over_time_error.py)&#93;</code>

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
<summary><code>def get_group_preferences(group_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> GroupPreferences</code></summary>

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
try:
    response = client.groups_api.get_group_preferences("Ba1bc23dE4F")
    # TODO: Handle 'response' of type GroupPreferences
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupPreferencesErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_preferences("Ba1bc23dE4F")
    # TODO: Handle 'response' of type GroupPreferences
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupPreferencesErrorBody
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

**OnSuccess**: <code>[GroupPreferences](bitly/models/group_preferences.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupPreferencesErrorBody](bitly/errors/get_group_preferences_error.py)&#93;</code>

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
<summary><code>def get_group_shorten_counts(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Metrics</code></summary>

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
try:
    response = client.groups_api.get_group_shorten_counts(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Metrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupShortenCountsErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_shorten_counts(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Metrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupShortenCountsErrorBody
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

**OnSuccess**: <code>[Metrics](bitly/models/metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupShortenCountsErrorBody](bitly/errors/get_group_shorten_counts_error.py)&#93;</code>

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
<summary><code>def get_group_tags(group_guid: str, *, type_: TypeOrStr | None = Type.BITLINK, request_options: RequestOptionsOrDict | None = None) -> Tags</code></summary>

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
try:
    response = client.groups_api.get_group_tags("Ba1bc23dE4F")
    # TODO: Handle 'response' of type Tags
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_tags("Ba1bc23dE4F")
    # TODO: Handle 'response' of type Tags
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTagsErrorBody
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

**OnSuccess**: <code>[Tags](bitly/models/tags.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupTagsErrorBody](bitly/errors/get_group_tags_error.py)&#93;</code>

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
<summary><code>def get_group_top_code_scans(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, decoupled: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> GroupsCodesScansTopResponse</code></summary>

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
try:
    response = client.groups_api.get_group_top_code_scans(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupsCodesScansTopResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTopCodeScansErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_top_code_scans(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type GroupsCodesScansTopResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTopCodeScansErrorBody
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

**OnSuccess**: <code>[GroupsCodesScansTopResponse](bitly/models/unions/groups_codes_scans_top_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupTopCodeScansErrorBody](bitly/errors/get_group_top_code_scans_error.py)&#93;</code>

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
<summary><code>def get_group_top_link_clicks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SortedLinks</code></summary>

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
try:
    response = client.groups_api.get_group_top_link_clicks(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type SortedLinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTopLinkClicksErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_top_link_clicks(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type SortedLinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTopLinkClicksErrorBody
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

**OnSuccess**: <code>[SortedLinks](bitly/models/sorted_links.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupTopLinkClicksErrorBody](bitly/errors/get_group_top_link_clicks_error.py)&#93;</code>

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
<summary><code>def get_group_top_metrics(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SortedLinks</code></summary>

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
try:
    response = client.groups_api.get_group_top_metrics(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type SortedLinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTopMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_group_top_metrics(
        "Ba1bc23dE4F", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type SortedLinks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupTopMetricsErrorBody
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

**OnSuccess**: <code>[SortedLinks](bitly/models/sorted_links.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupTopMetricsErrorBody](bitly/errors/get_group_top_metrics_error.py)&#93;</code>

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
<summary><code>def get_groups(*, organization_guid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Groups</code></summary>

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
try:
    response = client.groups_api.get_groups(organization_guid="Oa1bcd234eF")
    # TODO: Handle 'response' of type Groups
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.get_groups(organization_guid="Oa1bcd234eF")
    # TODO: Handle 'response' of type Groups
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupsErrorBody
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

**OnSuccess**: <code>[Groups](bitly/models/groups.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetGroupsErrorBody](bitly/errors/get_groups_error.py)&#93;</code>

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
<summary><code>def post_create_group_export(group_guid: str, body: GroupExportRequestBody | GroupExportRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> GroupExportResponse</code></summary>

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
try:
    response = client.groups_api.post_create_group_export(
        "Ba1bc23dE4F", GroupExportRequestBody(export_type=ExportType.LINK_ENGAGEMENTS_BATCH)
    )
    # TODO: Handle 'response' of type GroupExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCreateGroupExportErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.post_create_group_export(
        "Ba1bc23dE4F", GroupExportRequestBody(export_type=ExportType.LINK_ENGAGEMENTS_BATCH)
    )
    # TODO: Handle 'response' of type GroupExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCreateGroupExportErrorBody
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

**OnSuccess**: <code>[GroupExportResponse](bitly/models/group_export_response.py)</code> -- OK

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[PostCreateGroupExportErrorBody](bitly/errors/post_create_group_export_error.py)&#93;</code>

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
<summary><code>def update_group(group_guid: str, body: GroupUpdate | GroupUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> Group</code></summary>

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
try:
    response = client.groups_api.update_group("Ba1bc23dE4F", GroupUpdate())
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.update_group("Ba1bc23dE4F", GroupUpdate())
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupErrorBody
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

**OnSuccess**: <code>[Group](bitly/models/group.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateGroupErrorBody](bitly/errors/update_group_error.py)&#93;</code>

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
<summary><code>def update_group_preferences(group_guid: str, body: GroupPreferences | GroupPreferencesDict, *, request_options: RequestOptionsOrDict | None = None) -> GroupPreferences</code></summary>

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
try:
    response = client.groups_api.update_group_preferences("Ba1bc23dE4F", GroupPreferences())
    # TODO: Handle 'response' of type GroupPreferences
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupPreferencesErrorBody
```

**Async**

```python
try:
    response = await async_client.groups_api.update_group_preferences("Ba1bc23dE4F", GroupPreferences())
    # TODO: Handle 'response' of type GroupPreferences
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupPreferencesErrorBody
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

**OnSuccess**: <code>[GroupPreferences](bitly/models/group_preferences.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateGroupPreferencesErrorBody](bitly/errors/update_group_preferences_error.py)&#93;</code>

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
<summary><code>def get_organization(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Organization</code></summary>

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
try:
    response = client.organizations_api.get_organization("Oa1bcd234eF")
    # TODO: Handle 'response' of type Organization
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations_api.get_organization("Oa1bcd234eF")
    # TODO: Handle 'response' of type Organization
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationErrorBody
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

**OnSuccess**: <code>[Organization](bitly/models/organization.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetOrganizationErrorBody](bitly/errors/get_organization_error.py)&#93;</code>

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
<summary><code>def get_organization_shorten_counts(organization_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Metrics</code></summary>

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
try:
    response = client.organizations_api.get_organization_shorten_counts(
        "Oa1bcd234eF", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Metrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationShortenCountsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations_api.get_organization_shorten_counts(
        "Oa1bcd234eF", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type Metrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationShortenCountsErrorBody
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

**OnSuccess**: <code>[Metrics](bitly/models/metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetOrganizationShortenCountsErrorBody](bitly/errors/get_organization_shorten_counts_error.py)&#93;</code>

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
<summary><code>def get_organization_shorten_counts_by_group(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Metrics</code></summary>

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
try:
    response = client.organizations_api.get_organization_shorten_counts_by_group("Oa1bcd234eF")
    # TODO: Handle 'response' of type Metrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationShortenCountsByGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations_api.get_organization_shorten_counts_by_group("Oa1bcd234eF")
    # TODO: Handle 'response' of type Metrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationShortenCountsByGroupErrorBody
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

**OnSuccess**: <code>[Metrics](bitly/models/metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetOrganizationShortenCountsByGroupErrorBody](bitly/errors/get_organization_shorten_counts_by_group_error.py)&#93;</code>

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
<summary><code>def get_organizations(*, include_all: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> Organizations</code></summary>

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
try:
    response = client.organizations_api.get_organizations()
    # TODO: Handle 'response' of type Organizations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations_api.get_organizations()
    # TODO: Handle 'response' of type Organizations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationsErrorBody
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

**OnSuccess**: <code>[Organizations](bitly/models/organizations.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetOrganizationsErrorBody](bitly/errors/get_organizations_error.py)&#93;</code>

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
<summary><code>def get_plan_limits(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> PlanLimits</code></summary>

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
try:
    response = client.organizations_api.get_plan_limits("Oa1bcd234eF")
    # TODO: Handle 'response' of type PlanLimits
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlanLimitsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations_api.get_plan_limits("Oa1bcd234eF")
    # TODO: Handle 'response' of type PlanLimits
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlanLimitsErrorBody
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

**OnSuccess**: <code>[PlanLimits](bitly/models/plan_limits.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetPlanLimitsErrorBody](bitly/errors/get_plan_limits_error.py)&#93;</code>

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
<summary><code>def create_qr_code_public(body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> QrCodeMinimal</code></summary>

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
try:
    response = client.qr_codes.create_qr_code_public(
        PublicCreateQrCodeRequest(
            title="Minimal QR Code",
            group_guid="Ba1bc23dE4F",
            destination=QrCodeDestination(bitlink_id="bit.ly/abc123"),
            tags=["tag1", "tag2"],
        ),
    )
    # TODO: Handle 'response' of type QrCodeMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateQrCodePublicErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.create_qr_code_public(
        PublicCreateQrCodeRequest(
            title="Minimal QR Code",
            group_guid="Ba1bc23dE4F",
            destination=QrCodeDestination(bitlink_id="bit.ly/abc123"),
            tags=["tag1", "tag2"],
        ),
    )
    # TODO: Handle 'response' of type QrCodeMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateQrCodePublicErrorBody
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

**OnSuccess**: <code>[QrCodeMinimal](bitly/models/qr_code_minimal.py)</code> -- CREATED

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateQrCodePublicErrorBody](bitly/errors/create_qr_code_public_error.py)&#93;</code>

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
<summary><code>def create_static_qr_code_public(body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict, *, format_: FormatOrStr | None = Format.SVG, accept: AcceptOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicStaticQrCodeResponse</code></summary>

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
try:
    response = client.qr_codes.create_static_qr_code_public(
        PublicCreateStaticQrCodeRequest(content="https://bitly.com", group_guid="Ba1bc23dE4F"),
        accept=Accept.IMAGE_SVG_XML,
    )
    # TODO: Handle 'response' of type PublicStaticQrCodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStaticQrCodePublicErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.create_static_qr_code_public(
        PublicCreateStaticQrCodeRequest(content="https://bitly.com", group_guid="Ba1bc23dE4F"),
        accept=Accept.IMAGE_SVG_XML,
    )
    # TODO: Handle 'response' of type PublicStaticQrCodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStaticQrCodePublicErrorBody
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

**OnSuccess**: <code>[PublicStaticQrCodeResponse](bitly/models/public_static_qr_code_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateStaticQrCodePublicErrorBody](bitly/errors/create_static_qr_code_public_error.py)&#93;</code>

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
<summary><code>def delete_qr_code(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicDeleteQrCodeResponse</code></summary>

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
try:
    response = client.qr_codes.delete_qr_code("Qabcde12345")
    # TODO: Handle 'response' of type PublicDeleteQrCodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.delete_qr_code("Qabcde12345")
    # TODO: Handle 'response' of type PublicDeleteQrCodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteQrCodeErrorBody
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

**OnSuccess**: <code>[PublicDeleteQrCodeResponse](bitly/models/public_delete_qr_code_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[DeleteQrCodeErrorBody](bitly/errors/delete_qr_code_error.py)&#93;</code>

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
<summary><code>def get_qr_code_by_id_public(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> QrCodeDetails</code></summary>

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
try:
    response = client.qr_codes.get_qr_code_by_id_public("Qabcde12345")
    # TODO: Handle 'response' of type QrCodeDetails
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQrCodeByIdPublicErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_qr_code_by_id_public("Qabcde12345")
    # TODO: Handle 'response' of type QrCodeDetails
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQrCodeByIdPublicErrorBody
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

**OnSuccess**: <code>[QrCodeDetails](bitly/models/qr_code_details.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetQrCodeByIdPublicErrorBody](bitly/errors/get_qr_code_by_id_public_error.py)&#93;</code>

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
<summary><code>def get_qr_code_image_public(qrcode_id: str, *, format_: FormatOrStr | None = Format.SVG, accept: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicQrCodeImageResponse</code></summary>

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
try:
    response = client.qr_codes.get_qr_code_image_public("Qabcde12345", format_=Format.SVG, accept="image/svg+xml")
    # TODO: Handle 'response' of type PublicQrCodeImageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQrCodeImagePublicErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_qr_code_image_public(
        "Qabcde12345", format_=Format.SVG, accept="image/svg+xml"
    )
    # TODO: Handle 'response' of type PublicQrCodeImageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQrCodeImagePublicErrorBody
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

**OnSuccess**: <code>[PublicQrCodeImageResponse](bitly/models/public_qr_code_image_response.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetQrCodeImagePublicErrorBody](bitly/errors/get_qr_code_image_public_error.py)&#93;</code>

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
<summary><code>def get_scan_metrics_for_qr_code(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BitlinkScans</code></summary>

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
try:
    response = client.qr_codes.get_scan_metrics_for_qr_code(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type BitlinkScans
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_scan_metrics_for_qr_code(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type BitlinkScans
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeErrorBody
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

**OnSuccess**: <code>[BitlinkScans](bitly/models/bitlink_scans.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetScanMetricsForQrCodeErrorBody](bitly/errors/get_scan_metrics_for_qr_code_error.py)&#93;</code>

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
<summary><code>def get_scan_metrics_for_qr_code_by_browser(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ScanMetrics</code></summary>

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
try:
    response = client.qr_codes.get_scan_metrics_for_qr_code_by_browser(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByBrowserErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_scan_metrics_for_qr_code_by_browser(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByBrowserErrorBody
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

**OnSuccess**: <code>[ScanMetrics](bitly/models/scan_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetScanMetricsForQrCodeByBrowserErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_browser_error.py)&#93;</code>

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
<summary><code>def get_scan_metrics_for_qr_code_by_cities(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CityScanMetrics</code></summary>

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
try:
    response = client.qr_codes.get_scan_metrics_for_qr_code_by_cities(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByCitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_scan_metrics_for_qr_code_by_cities(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type CityScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByCitiesErrorBody
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

**OnSuccess**: <code>[CityScanMetrics](bitly/models/city_scan_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetScanMetricsForQrCodeByCitiesErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_cities_error.py)&#93;</code>

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
<summary><code>def get_scan_metrics_for_qr_code_by_countries(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ScanMetrics</code></summary>

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
try:
    response = client.qr_codes.get_scan_metrics_for_qr_code_by_countries(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_scan_metrics_for_qr_code_by_countries(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByCountriesErrorBody
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

**OnSuccess**: <code>[ScanMetrics](bitly/models/scan_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetScanMetricsForQrCodeByCountriesErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_countries_error.py)&#93;</code>

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
<summary><code>def get_scan_metrics_for_qr_code_by_devices_os(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ScanMetrics</code></summary>

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
try:
    response = client.qr_codes.get_scan_metrics_for_qr_code_by_devices_os(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByDevicesOsErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_scan_metrics_for_qr_code_by_devices_os(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, size=10, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type ScanMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsForQrCodeByDevicesOsErrorBody
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

**OnSuccess**: <code>[ScanMetrics](bitly/models/scan_metrics.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetScanMetricsForQrCodeByDevicesOsErrorBody](bitly/errors/get_scan_metrics_for_qr_code_by_devices_os_error.py)&#93;</code>

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
<summary><code>def get_scan_metrics_summary_for_qr_code(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BitlinkScansSummary</code></summary>

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
try:
    response = client.qr_codes.get_scan_metrics_summary_for_qr_code(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type BitlinkScansSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsSummaryForQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.get_scan_metrics_summary_for_qr_code(
        "Qabcde12345", unit=TimeUnit.MONTH, units=1, unit_reference="2006-01-02T15:04:05-0700"
    )
    # TODO: Handle 'response' of type BitlinkScansSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScanMetricsSummaryForQrCodeErrorBody
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

**OnSuccess**: <code>[BitlinkScansSummary](bitly/models/bitlink_scans_summary.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetScanMetricsSummaryForQrCodeErrorBody](bitly/errors/get_scan_metrics_summary_for_qr_code_error.py)&#93;</code>

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
<summary><code>def list_qr_minimal(group_guid: str, *, has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH, size: int | None = 50, search_after: str | None = None, query: str | None = None, hostname_path_query: str | None = None, created_before: int | None = None, created_after: int | None = None, archived: ArchivedOrStr | None = Archived.OFF, creating_login: list[str] | None = None, qrc_type: list[QrcTypeOrStr] | None = None, is_gs1: IsGs1OrStr | None = IsGs1.BOTH, is_expired: IsExpiredOrStr | None = IsExpired.BOTH, has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH, has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> QrCodesMinimal</code></summary>

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
try:
    response = client.qr_codes.list_qr_minimal(
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
    # TODO: Handle 'response' of type QrCodesMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQrMinimalErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.list_qr_minimal(
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
    # TODO: Handle 'response' of type QrCodesMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQrMinimalErrorBody
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

**OnSuccess**: <code>[QrCodesMinimal](bitly/models/qr_codes_minimal.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[ListQrMinimalErrorBody](bitly/errors/list_qr_minimal_error.py)&#93;</code>

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
<summary><code>def redirect_qr_code_destination(qrcode_id: str, body: RedirectQrCodeRequest | RedirectQrCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> QrCodeMinimal</code></summary>

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
try:
    response = client.qr_codes.redirect_qr_code_destination(
        "some example string", RedirectQrCodeRequest(long_url="some example string")
    )
    # TODO: Handle 'response' of type QrCodeMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RedirectQrCodeDestinationErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.redirect_qr_code_destination(
        "some example string", RedirectQrCodeRequest(long_url="some example string")
    )
    # TODO: Handle 'response' of type QrCodeMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RedirectQrCodeDestinationErrorBody
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

**OnSuccess**: <code>[QrCodeMinimal](bitly/models/qr_code_minimal.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[RedirectQrCodeDestinationErrorBody](bitly/errors/redirect_qr_code_destination_error.py)&#93;</code>

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
<summary><code>def update_qr_code_public(qrcode_id: str, *, body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> QrCodeMinimal</code></summary>

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
try:
    response = client.qr_codes.update_qr_code_public(
        "Qabc123", body=PublicUpdateQrCodeRequest(title="Minimal QR Code Updated", tags=["tag1", "tag2"])
    )
    # TODO: Handle 'response' of type QrCodeMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateQrCodePublicErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.update_qr_code_public(
        "Qabc123", body=PublicUpdateQrCodeRequest(title="Minimal QR Code Updated", tags=["tag1", "tag2"])
    )
    # TODO: Handle 'response' of type QrCodeMinimal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateQrCodePublicErrorBody
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

**OnSuccess**: <code>[QrCodeMinimal](bitly/models/qr_code_minimal.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateQrCodePublicErrorBody](bitly/errors/update_qr_code_public_error.py)&#93;</code>

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
<summary><code>def update_qr_codes_by_group(group_guid: str, body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> QrcBulkUpdate</code></summary>

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
try:
    response = client.qr_codes.update_qr_codes_by_group("Ba1bc23dE4F", QrcBulkUpdateRequest(action=Action.ARCHIVE))
    # TODO: Handle 'response' of type QrcBulkUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateQrCodesByGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.update_qr_codes_by_group(
        "Ba1bc23dE4F", QrcBulkUpdateRequest(action=Action.ARCHIVE)
    )
    # TODO: Handle 'response' of type QrcBulkUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateQrCodesByGroupErrorBody
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

**OnSuccess**: <code>[QrcBulkUpdate](bitly/models/qrc_bulk_update.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateQrCodesByGroupErrorBody](bitly/errors/update_qr_codes_by_group_error.py)&#93;</code>

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
<summary><code>def upgrade_qr_code_to_bitlink(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> BitlinkBody</code></summary>

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
try:
    response = client.qr_codes.upgrade_qr_code_to_bitlink("some example string")
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpgradeQrCodeToBitlinkErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.upgrade_qr_code_to_bitlink("some example string")
    # TODO: Handle 'response' of type BitlinkBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpgradeQrCodeToBitlinkErrorBody
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

**OnSuccess**: <code>[BitlinkBody](bitly/models/bitlink_body.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpgradeQrCodeToBitlinkErrorBody](bitly/errors/upgrade_qr_code_to_bitlink_error.py)&#93;</code>

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
<summary><code>def get_platform_limits(*, path: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PlatformLimits</code></summary>

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
try:
    response = client.user_api.get_platform_limits(path="/organizations/{organization_guid}")
    # TODO: Handle 'response' of type PlatformLimits
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlatformLimitsErrorBody
```

**Async**

```python
try:
    response = await async_client.user_api.get_platform_limits(path="/organizations/{organization_guid}")
    # TODO: Handle 'response' of type PlatformLimits
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlatformLimitsErrorBody
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

**OnSuccess**: <code>[PlatformLimits](bitly/models/platform_limits.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetPlatformLimitsErrorBody](bitly/errors/get_platform_limits_error.py)&#93;</code>

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
<summary><code>def get_user(*, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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
try:
    response = client.user_api.get_user()
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

**Async**

```python
try:
    response = await async_client.user_api.get_user()
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
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

**OnSuccess**: <code>[User](bitly/models/user.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetUserErrorBody](bitly/errors/get_user_error.py)&#93;</code>

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
<summary><code>def update_user(body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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
try:
    response = client.user_api.update_user(UserUpdate())
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.user_api.update_user(UserUpdate())
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
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

**OnSuccess**: <code>[User](bitly/models/user.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateUserErrorBody](bitly/errors/update_user_error.py)&#93;</code>

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
<summary><code>def create_webhook(body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.create_webhook(
        WebhookCreate(
            organization_guid="some example string",
            name="some example string",
            event="some example string",
            url="some example string",
        ),
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create_webhook(
        WebhookCreate(
            organization_guid="some example string",
            name="some example string",
            event="some example string",
            url="some example string",
        ),
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
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

**OnSuccess**: <code>[Webhook](bitly/models/webhook.py)</code> -- CREATED

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[CreateWebhookErrorBody](bitly/errors/create_webhook_error.py)&#93;</code>

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
<summary><code>def delete_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.webhooks_api.delete_webhook("Wa1bcDefG23")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.delete_webhook("Wa1bcDefG23")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[DeleteWebhookErrorBody](bitly/errors/delete_webhook_error.py)&#93;</code>

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
<summary><code>def get_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.get_webhook("Wa1bcDefG23")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook("Wa1bcDefG23")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
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

**OnSuccess**: <code>[Webhook](bitly/models/webhook.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetWebhookErrorBody](bitly/errors/get_webhook_error.py)&#93;</code>

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
<summary><code>def get_webhooks(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhooksModel</code></summary>

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
try:
    response = client.webhooks_api.get_webhooks("Oa1bcd234eF")
    # TODO: Handle 'response' of type WebhooksModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhooks("Oa1bcd234eF")
    # TODO: Handle 'response' of type WebhooksModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhooksErrorBody
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

**OnSuccess**: <code>[WebhooksModel](bitly/models/webhooks_model.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[GetWebhooksErrorBody](bitly/errors/get_webhooks_error.py)&#93;</code>

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
<summary><code>def update_webhook(webhook_guid: str, body: WebhookUpdate | WebhookUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.update_webhook("Wa1bcDefG23", WebhookUpdate(guid="some example string"))
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update_webhook("Wa1bcDefG23", WebhookUpdate(guid="some example string"))
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
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

**OnSuccess**: <code>[Webhook](bitly/models/webhook.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[UpdateWebhookErrorBody](bitly/errors/update_webhook_error.py)&#93;</code>

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
<summary><code>def verify_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.verify_webhook("Wa1bcDefG23")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.verify_webhook("Wa1bcDefG23")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyWebhookErrorBody
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

**OnSuccess**: <code>[Webhook](bitly/models/webhook.py)</code> -- SUCCESS

**OnError**: <code>[ApiError](bitly/core/exceptions.py)&#91;[VerifyWebhookErrorBody](bitly/errors/verify_webhook_error.py)&#93;</code>

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

