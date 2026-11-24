# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BeehiivClient](beehiiv/client.py)

## AdNetworkOffers

> Source: [AdNetworkOffers](beehiiv/apis/ad_network_offers.py)

<details>
<summary><code>def advertisements(publication_id: str, offer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> AdOfferAdvertisementsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve the active text advertisement creatives available for an ad offer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_network_offers.advertisements(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AdOfferAdvertisementsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdvertisementsErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_network_offers.advertisements(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AdOfferAdvertisementsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdvertisementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>offer_id</code> | <code>str</code> | The ID of the ad offer. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdOfferAdvertisementsGetResponse](beehiiv/models/ad_offer_advertisements_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[AdvertisementsErrorBody](beehiiv/errors/advertisements_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create(publication_id: str, authorization: str, *, body: PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AdOfferCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_network_offers.create("some example string", "some example string")
    # TODO: Handle 'response' of type AdOfferCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_network_offers.create("some example string", "some example string")
    # TODO: Handle 'response' of type AdOfferCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsAdNetworkOffersRequest](beehiiv/models/publications_ad_network_offers_request.py) \| [PublicationsAdNetworkOffersRequestDict](beehiiv/models/publications_ad_network_offers_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdOfferCreateResponse](beehiiv/models/ad_offer_create_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[CreateErrorBody](beehiiv/errors/create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index(publication_id: str, authorization: str, *, requested_from: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AdOffersGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve a list of ad offers available for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_network_offers.index("some example string", "some example string")
    # TODO: Handle 'response' of type AdOffersGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IndexErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_network_offers.index("some example string", "some example string")
    # TODO: Handle 'response' of type AdOffersGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>requested_from</code> | <code>str \| None</code> | A source identifier for where the offers request originated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdOffersGetResponse](beehiiv/models/ad_offers_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[IndexErrorBody](beehiiv/errors/index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AdNetworkReports

> Source: [AdNetworkReports](beehiiv/apis/ad_network_reports.py)

<details>
<summary><code>def account_summary(authorization: str, *, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> AdNetworkReportSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_network_reports.account_summary("some example string")
    # TODO: Handle 'response' of type AdNetworkReportSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AccountSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_network_reports.account_summary("some example string")
    # TODO: Handle 'response' of type AdNetworkReportSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AccountSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>start_date</code> | <code>Date \| None</code> | Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>Date \| None</code> | Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdNetworkReportSummary](beehiiv/models/ad_network_report_summary.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[AccountSummaryErrorBody](beehiiv/errors/account_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index2(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> AdNetworkReportsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve advertisement performance and payment reports for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_network_reports.index2("some example string", "some example string")
    # TODO: Handle 'response' of type AdNetworkReportsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index2ErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_network_reports.index2("some example string", "some example string")
    # TODO: Handle 'response' of type AdNetworkReportsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit between 1 and 100. Defaults to 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | The page of reports to return. Defaults to 1.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>Date \| None</code> | Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>Date \| None</code> | Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdNetworkReportsGetResponse](beehiiv/models/ad_network_reports_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index2ErrorBody](beehiiv/errors/index2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def summary(publication_id: str, authorization: str, *, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> AdNetworkReportSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve aggregate advertisement performance and revenue for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_network_reports.summary("some example string", "some example string")
    # TODO: Handle 'response' of type AdNetworkReportSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_network_reports.summary("some example string", "some example string")
    # TODO: Handle 'response' of type AdNetworkReportSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>start_date</code> | <code>Date \| None</code> | Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>Date \| None</code> | Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdNetworkReportSummary](beehiiv/models/ad_network_report_summary.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[SummaryErrorBody](beehiiv/errors/summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AdvertisementOpportunities

> Source: [AdvertisementOpportunities](beehiiv/apis/advertisement_opportunities.py)

<details>
<summary><code>def index3(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> AdvertisementOpportunitiesGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of accepted advertisement opportunities for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.advertisement_opportunities.index3("some example string", "some example string")
    # TODO: Handle 'response' of type AdvertisementOpportunitiesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index3ErrorBody
```

**Async**

```python
try:
    response = await async_client.advertisement_opportunities.index3("some example string", "some example string")
    # TODO: Handle 'response' of type AdvertisementOpportunitiesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdvertisementOpportunitiesGetResponse](beehiiv/models/advertisement_opportunities_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index3ErrorBody](beehiiv/errors/index3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Authorizations

> Source: [Authorizations](beehiiv/apis/authorizations.py)

<details>
<summary><code>def authorize(client_id: str, redirect_uri: str, response_type: str, *, scope: str | None = None, state: str | None = None, code_challenge: str | None = None, code_challenge_method: CodeChallengeMethodOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed), then redirects back to your `redirect_uri` with a `code` and `state`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.authorizations.authorize("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeErrorBody
```

**Async**

```python
try:
    await async_client.authorizations.authorize("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>client_id</code> | <code>str</code> | The OAuth application client ID (`uid`). |
| <code>redirect_uri</code> | <code>str</code> | Must exactly match one of the app's configured redirect URIs. |
| <code>response_type</code> | <code>str</code> | Must be `code` for the authorization code flow. |
| <code>scope</code> | <code>str \| None</code> | Space-delimited list of requested scopes.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Opaque value returned to your callback for CSRF protection.<br>**Default**: <code>None</code> |
| <code>code_challenge</code> | <code>str \| None</code> | PKCE code challenge. Required for public clients.<br>**Default**: <code>None</code> |
| <code>code_challenge_method</code> | <code>[CodeChallengeMethodOrStr](beehiiv/models/enums/code_challenge_method.py) \| None</code> | PKCE challenge method (`plain` or `S256`). Required for public clients when using PKCE.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[AuthorizeErrorBody](beehiiv/errors/authorize_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[OAuthError](beehiiv/models/o_auth_error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Authors

> Source: [Authors](beehiiv/apis/authors.py)

<details>
<summary><code>def index4(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, name: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AuthorsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of authors available for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authors.index4("some example string", "some example string")
    # TODO: Handle 'response' of type AuthorsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index4ErrorBody
```

**Async**

```python
try:
    response = await async_client.authors.index4("some example string", "some example string")
    # TODO: Handle 'response' of type AuthorsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Optionally filter authors by full name or first name (case-insensitive).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorsListResponse](beehiiv/models/authors_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index4ErrorBody](beehiiv/errors/index4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show(publication_id: str, author_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> AuthorsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single author from a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authors.show("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AuthorsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShowErrorBody
```

**Async**

```python
try:
    response = await async_client.authors.show("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AuthorsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>author_id</code> | <code>str</code> | The author identifier. This accepts a prefixed author ID, full name, or first name. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorsGetResponse](beehiiv/models/authors_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ShowErrorBody](beehiiv/errors/show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AutomationJourneys

> Source: [AutomationJourneys](beehiiv/apis/automation_journeys.py)

<details>
<summary><code>def create2(publication_id: str, automation_id: str, authorization: str, *, body: PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AutomationJourneysResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API* trigger. The specified `email` or `subscription_id` will be matched against your existing subscribers. If an existing subscriber is found, they will be enrolled immediately.
Looking to enroll new subscribers? Use the **Create Subscription** endpoint instead and specify the `automation_ids` param.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation_journeys.create2("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AutomationJourneysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create2ErrorBody
```

**Async**

```python
try:
    response = await async_client.automation_journeys.create2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutomationJourneysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>automation_id</code> | <code>str</code> | The prefixed ID of the automation object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsAutomationsJourneysRequest](beehiiv/models/publications_automations_journeys_request.py) \| [PublicationsAutomationsJourneysRequestDict](beehiiv/models/publications_automations_journeys_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationJourneysResponse](beehiiv/models/automation_journeys_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create2ErrorBody](beehiiv/errors/create2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index5(publication_id: str, automation_id: str, authorization: str, *, status: AutomationJourneysGetRequestStatusOrStr | None = AutomationJourneysGetRequestStatus.ALL, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AutomationJourneysIndexResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of automation journeys that have occurred within a specific automation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation_journeys.index5("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AutomationJourneysIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index5ErrorBody
```

**Async**

```python
try:
    response = await async_client.automation_journeys.index5(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutomationJourneysIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index5ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>automation_id</code> | <code>str</code> | The prefixed ID of the automation object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>status</code> | <code>[AutomationJourneysGetRequestStatusOrStr](beehiiv/models/enums/automation_journeys_get_request_status.py) \| None</code> | Optionally filter the results by the automation journey's status.<br>**Default**: <code>AutomationJourneysGetRequestStatus.ALL</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationJourneysIndexResponse](beehiiv/models/automation_journeys_index_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index5ErrorBody](beehiiv/errors/index5_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show2(publication_id: str, automation_id: str, automation_journey_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> AutomationJourneysResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single automation journey by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation_journeys.show2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutomationJourneysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show2ErrorBody
```

**Async**

```python
try:
    response = await async_client.automation_journeys.show2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutomationJourneysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>automation_id</code> | <code>str</code> | The prefixed ID of the automation object |
| <code>automation_journey_id</code> | <code>str</code> | The prefixed automation journey id |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationJourneysResponse](beehiiv/models/automation_journeys_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show2ErrorBody](beehiiv/errors/show2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](beehiiv/apis/automations.py)

<details>
<summary><code>def index6(publication_id: str, authorization: str, *, expand: AutomationsListRequestExpandItemOrStr | None = None, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AutomationsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve automations for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automations.index6("some example string", "some example string")
    # TODO: Handle 'response' of type AutomationsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index6ErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.index6("some example string", "some example string")
    # TODO: Handle 'response' of type AutomationsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index6ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>[AutomationsListRequestExpandItemOrStr](beehiiv/models/enums/automations_list_request_expand_item.py) \| None</code> | Optional list of expandable objects.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationsListResponse](beehiiv/models/automations_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index6ErrorBody](beehiiv/errors/index6_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_emails(publication_id: str, automation_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AutomationEmailsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automations.list_emails("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AutomationEmailsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmailsErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.list_emails(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutomationEmailsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>automation_id</code> | <code>str</code> | The prefixed ID of the automation object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. Obtain it from the `next_cursor` field of a previous response.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | **Deprecated**: Use `cursor` instead. Pagination returns the results in pages. Limited to 100 pages maximum.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationEmailsListResponse](beehiiv/models/automation_emails_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ListEmailsErrorBody](beehiiv/errors/list_emails_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show3(publication_id: str, automation_id: str, authorization: str, *, expand: AutomationsGetRequestExpandItemOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> AutomationsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single automation for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automations.show3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AutomationsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show3ErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.show3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type AutomationsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>automation_id</code> | <code>str</code> | The prefixed ID of the automation object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>[AutomationsGetRequestExpandItemOrStr](beehiiv/models/enums/automations_get_request_expand_item.py) \| None</code> | Optional list of expandable objects.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationsGetResponse](beehiiv/models/automations_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show3ErrorBody](beehiiv/errors/show3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSubscriptionUpdates

> Source: [BulkSubscriptionUpdates](beehiiv/apis/bulk_subscription_updates.py)

<details>
<summary><code>def index7(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> BulkSubscriptionUpdatesListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Subscription Update objects for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_subscription_updates.index7("some example string", "some example string")
    # TODO: Handle 'response' of type BulkSubscriptionUpdatesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index7ErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_subscription_updates.index7("some example string", "some example string")
    # TODO: Handle 'response' of type BulkSubscriptionUpdatesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index7ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSubscriptionUpdatesListResponse](beehiiv/models/bulk_subscription_updates_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index7ErrorBody](beehiiv/errors/index7_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionsPatchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_subscription_updates.patch("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionsPatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_subscription_updates.patch("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionsPatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsBulkActionsRequest](beehiiv/models/publications_subscriptions_bulk_actions_request.py) \| [PublicationsSubscriptionsBulkActionsRequestDict](beehiiv/models/publications_subscriptions_bulk_actions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsPatchResponse](beehiiv/models/subscriptions_patch_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[PatchErrorBody](beehiiv/errors/patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_status(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.bulk_subscription_updates.patch_status("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.bulk_subscription_updates.patch_status("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsRequest](beehiiv/models/publications_subscriptions_request.py) \| [PublicationsSubscriptionsRequestDict](beehiiv/models/publications_subscriptions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[RawError](beehiiv/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionsPatchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_subscription_updates.put("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionsPatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_subscription_updates.put("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionsPatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsBulkActionsRequest](beehiiv/models/publications_subscriptions_bulk_actions_request.py) \| [PublicationsSubscriptionsBulkActionsRequestDict](beehiiv/models/publications_subscriptions_bulk_actions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsPatchResponse](beehiiv/models/subscriptions_patch_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[PutErrorBody](beehiiv/errors/put_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_status(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.bulk_subscription_updates.put_status("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.bulk_subscription_updates.put_status("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsRequest](beehiiv/models/publications_subscriptions_request.py) \| [PublicationsSubscriptionsRequestDict](beehiiv/models/publications_subscriptions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[RawError](beehiiv/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show4(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> BulkSubscriptionUpdatesGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Subscription Update object for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_subscription_updates.show4(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BulkSubscriptionUpdatesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show4ErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_subscription_updates.show4(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BulkSubscriptionUpdatesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>id_</code> | <code>str</code> | The ID of the Subscription Update object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSubscriptionUpdatesGetResponse](beehiiv/models/bulk_subscription_updates_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show4ErrorBody](beehiiv/errors/show4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSubscriptions

> Source: [BulkSubscriptions](beehiiv/apis/bulk_subscriptions.py)

<details>
<summary><code>def create3(publication_id: str, authorization: str, *, body: PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BulkSubscriptionCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_subscriptions.create3("some example string", "some example string")
    # TODO: Handle 'response' of type BulkSubscriptionCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create3ErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_subscriptions.create3("some example string", "some example string")
    # TODO: Handle 'response' of type BulkSubscriptionCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsBulkSubscriptionsRequest](beehiiv/models/publications_bulk_subscriptions_request.py) \| [PublicationsBulkSubscriptionsRequestDict](beehiiv/models/publications_bulk_subscriptions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSubscriptionCreateResponse](beehiiv/models/bulk_subscription_create_response.py)</code> -- Subscriptions created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create3ErrorBody](beehiiv/errors/create3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ComplimentaryAccessApi

> Source: [ComplimentaryAccessApi](beehiiv/apis/complimentary_access_api.py)

<details>
<summary><code>def index8(publication_id: str, authorization: str, *, expand: str | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> IndexComplimentaryAccessResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all complimentary access objects belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.complimentary_access_api.index8("some example string", "some example string")
    # TODO: Handle 'response' of type IndexComplimentaryAccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index8ErrorBody
```

**Async**

```python
try:
    response = await async_client.complimentary_access_api.index8("some example string", "some example string")
    # TODO: Handle 'response' of type IndexComplimentaryAccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index8ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>str \| None</code> | Optional list of expandable objects.<br>`tier` - Returns the full tier object associated with this complimentary access.<br>`stats` - Returns granted subscription counts.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Use this opaque cursor token to fetch the next page of results. Obtain the value from `next_cursor` in a previous response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IndexComplimentaryAccessResponse](beehiiv/models/index_complimentary_access_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index8ErrorBody](beehiiv/errors/index8_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show5(publication_id: str, complimentary_access_id: str, authorization: str, *, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ComplimentaryAccessResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single complimentary access object belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.complimentary_access_api.show5(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ComplimentaryAccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show5ErrorBody
```

**Async**

```python
try:
    response = await async_client.complimentary_access_api.show5(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ComplimentaryAccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show5ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>complimentary_access_id</code> | <code>str</code> | The prefixed ID of the complimentary access object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>str \| None</code> | Optional list of expandable objects.<br>`tier` - Returns the full tier object associated with this complimentary access.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComplimentaryAccessResponse](beehiiv/models/complimentary_access_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show5ErrorBody](beehiiv/errors/show5_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ConditionSets

> Source: [ConditionSets](beehiiv/apis/condition_sets.py)

<details>
<summary><code>def index9(publication_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, purpose: ConditionSetPurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ConditionSetsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for targeting content to specific subscribers. Use the `purpose` parameter to filter by a specific use case.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.condition_sets.index9("some example string", "some example string")
    # TODO: Handle 'response' of type ConditionSetsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index9ErrorBody
```

**Async**

```python
try:
    response = await async_client.condition_sets.index9("some example string", "some example string")
    # TODO: Handle 'response' of type ConditionSetsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index9ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>purpose</code> | <code>[ConditionSetPurposeOrStr](beehiiv/models/enums/condition_set_purpose.py) \| None</code> | Filter condition sets by purpose. When not specified, all active condition sets are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConditionSetsListResponse](beehiiv/models/condition_sets_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index9ErrorBody](beehiiv/errors/index9_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show6(publication_id: str, condition_set_id: str, authorization: str, *, expand: list[ConditionSetShowExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ConditionSetShowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single active dynamic content condition set for a publication. Use `expand[]=stats` to calculate and return the active subscriber count synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.condition_sets.show6("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type ConditionSetShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show6ErrorBody
```

**Async**

```python
try:
    response = await async_client.condition_sets.show6(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ConditionSetShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show6ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>condition_set_id</code> | <code>str</code> | The UUID of the condition set object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[ConditionSetShowExpandItemsOrStr](beehiiv/models/enums/condition_set_show_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data.<br> `stats` - Calculates and returns the active subscriber count for this condition set synchronously.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConditionSetShowResponse](beehiiv/models/condition_set_show_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show6ErrorBody](beehiiv/errors/show6_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](beehiiv/apis/custom_fields.py)

<details>
<summary><code>def create4(publication_id: str, authorization: str, *, body: PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom field on a publication, for use in subscriptions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.create4("some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create4ErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.create4("some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsCustomFieldsRequest](beehiiv/models/publications_custom_fields_request.py) \| [PublicationsCustomFieldsRequestDict](beehiiv/models/publications_custom_fields_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponse](beehiiv/models/custom_field_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create4ErrorBody](beehiiv/errors/create4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomFieldsDeleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom field from a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.delete("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldsDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomFieldsDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>id_</code> | <code>str</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsDeleteResponse](beehiiv/models/custom_fields_delete_response.py)</code> -- No Content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[DeleteErrorBody](beehiiv/errors/delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index10(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomFieldIndexResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all custom fields on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.index10("some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index10ErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.index10("some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index10ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldIndexResponse](beehiiv/models/custom_field_index_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index10ErrorBody](beehiiv/errors/index10_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch2(publication_id: str, id_: str, authorization: str, *, body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldsPatchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom field on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.patch2("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldsPatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Patch2ErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.patch2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomFieldsPatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Patch2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>id_</code> | <code>str</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsCustomFieldsRequest1](beehiiv/models/publications_custom_fields_request1.py) \| [PublicationsCustomFieldsRequest1Dict](beehiiv/models/publications_custom_fields_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsPatchResponse](beehiiv/models/custom_fields_patch_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Patch2ErrorBody](beehiiv/errors/patch2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put2(publication_id: str, id_: str, authorization: str, *, body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom field on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.put2("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Put2ErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.put2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomFieldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Put2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>id_</code> | <code>str</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsCustomFieldsRequest1](beehiiv/models/publications_custom_fields_request1.py) \| [PublicationsCustomFieldsRequest1Dict](beehiiv/models/publications_custom_fields_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponse](beehiiv/models/custom_field_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Put2ErrorBody](beehiiv/errors/put2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show7(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomFieldResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View a specific custom field on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.show7("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CustomFieldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show7ErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.show7(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomFieldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show7ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>id_</code> | <code>str</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponse](beehiiv/models/custom_field_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show7ErrorBody](beehiiv/errors/show7_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataDeletion

> Source: [DataDeletion](beehiiv/apis/data_deletion.py)

<details>
<summary><code>def create5(publication_id: str, authorization: str, *, body: PublicationsDataPrivacyDeletionRequestsRequest | PublicationsDataPrivacyDeletionRequestsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DataDeletionRequestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

Creates a data deletion request for a subscriber within your organization. The subscriber's data will be redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone once processing begins.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_deletion.create5("some example string", "some example string")
    # TODO: Handle 'response' of type DataDeletionRequestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create5ErrorBody
```

**Async**

```python
try:
    response = await async_client.data_deletion.create5("some example string", "some example string")
    # TODO: Handle 'response' of type DataDeletionRequestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create5ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsDataPrivacyDeletionRequestsRequest](beehiiv/models/publications_data_privacy_deletion_requests_request.py) \| [PublicationsDataPrivacyDeletionRequestsRequestDict](beehiiv/models/publications_data_privacy_deletion_requests_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataDeletionRequestResponse](beehiiv/models/data_deletion_request_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create5ErrorBody](beehiiv/errors/create5_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index11(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> DataDeletionRequestIndexResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

List all data deletion requests for your organization.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_deletion.index11("some example string", "some example string")
    # TODO: Handle 'response' of type DataDeletionRequestIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index11ErrorBody
```

**Async**

```python
try:
    response = await async_client.data_deletion.index11("some example string", "some example string")
    # TODO: Handle 'response' of type DataDeletionRequestIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index11ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataDeletionRequestIndexResponse](beehiiv/models/data_deletion_request_index_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index11ErrorBody](beehiiv/errors/index11_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show8(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> DataDeletionRequestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

Retrieve the details and current status of a specific data deletion request.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_deletion.show8("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type DataDeletionRequestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show8ErrorBody
```

**Async**

```python
try:
    response = await async_client.data_deletion.show8(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DataDeletionRequestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show8ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>id_</code> | <code>str</code> | The ID of the data deletion request |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataDeletionRequestResponse](beehiiv/models/data_deletion_request_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show8ErrorBody](beehiiv/errors/show8_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Engagements

> Source: [Engagements](beehiiv/apis/engagements.py)

<details>
<summary><code>def index12(publication_id: str, authorization: str, *, start_date: Date | None = None, number_of_days: int | None = None, granularity: PublicationEngagementGranularityOrStr | None = None, email_type: PublicationEngagementEmailTypeOrStr | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None) -> PublicationEngagementsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is 31. All dates and times are in UTC.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.engagements.index12("some example string", "some example string")
    # TODO: Handle 'response' of type PublicationEngagementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index12ErrorBody
```

**Async**

```python
try:
    response = await async_client.engagements.index12("some example string", "some example string")
    # TODO: Handle 'response' of type PublicationEngagementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index12ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>start_date</code> | <code>Date \| None</code> | The starting date for the engagement metrics in `YYYY-MM-DD` format. Defaults to 1 day ago if not provided.<br>**Default**: <code>None</code> |
| <code>number_of_days</code> | <code>int \| None</code> | The number of days to return engagement metrics for, starting from `start_date`. Must be between 1 and 31. Defaults to `1` if not provided.<br>**Default**: <code>None</code> |
| <code>granularity</code> | <code>[PublicationEngagementGranularityOrStr](beehiiv/models/enums/publication_engagement_granularity.py) \| None</code> | The granularity at which to report the engagement metrics. Defaults to `day` if not provided.<br>**Default**: <code>None</code> |
| <code>email_type</code> | <code>[PublicationEngagementEmailTypeOrStr](beehiiv/models/enums/publication_engagement_email_type.py) \| None</code> | Filter engagement metrics by email type. If omitted, all email engagement is included.<br> `post`: Only post emails.<br> `message`: Only automated and system-generated emails.<br>**Default**: <code>None</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to `asc`.<br> `asc`: Oldest to newest<br> `desc`: Newest to oldest<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicationEngagementsResponse](beehiiv/models/publication_engagements_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index12ErrorBody](beehiiv/errors/index12_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NewsletterListSubscriptions

> Source: [NewsletterListSubscriptions](beehiiv/apis/newsletter_list_subscriptions.py)

<details>
<summary><code>def create6(publication_id: str, newsletter_list_id: str, authorization: str, *, body: PublicationsNewsletterListsSubscriptionsRequest | PublicationsNewsletterListsSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsletterListSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the subscription.

This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or more newsletter lists in a single call, use the Create subscription endpoint and pass the `newsletter_list_ids` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_list_subscriptions.create6(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create6ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_list_subscriptions.create6(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create6ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsNewsletterListsSubscriptionsRequest](beehiiv/models/publications_newsletter_lists_subscriptions_request.py) \| [PublicationsNewsletterListsSubscriptionsRequestDict](beehiiv/models/publications_newsletter_lists_subscriptions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](beehiiv/models/newsletter_list_subscription_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create6ErrorBody](beehiiv/errors/create6_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index13(publication_id: str, newsletter_list_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None) -> NewsletterListSubscriptionIndexResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all subscriptions for a newsletter list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_list_subscriptions.index13(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index13ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_list_subscriptions.index13(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index13ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionIndexResponse](beehiiv/models/newsletter_list_subscription_index_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index13ErrorBody](beehiiv/errors/index13_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show9(publication_id: str, newsletter_list_id: str, newsletter_list_subscription_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> NewsletterListSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single newsletter list subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_list_subscriptions.show9(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show9ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_list_subscriptions.show9(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show9ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>newsletter_list_subscription_id</code> | <code>str</code> | The prefixed ID of the newsletter list subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](beehiiv/models/newsletter_list_subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show9ErrorBody](beehiiv/errors/show9_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update(publication_id: str, newsletter_list_id: str, newsletter_list_subscription_id: str, authorization: str, *, body: PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsletterListSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_list_subscriptions.update(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_list_subscriptions.update(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>newsletter_list_subscription_id</code> | <code>str</code> | The prefixed ID of the newsletter list subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest](beehiiv/models/publications_newsletter_lists_subscriptions_newsletter_list_subscription_id_request.py) \| [PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict](beehiiv/models/publications_newsletter_lists_subscriptions_newsletter_list_subscription_id_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](beehiiv/models/newsletter_list_subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[UpdateErrorBody](beehiiv/errors/update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_subscription_id(publication_id: str, newsletter_list_id: str, subscription_id: str, authorization: str, *, body: PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsletterListSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the subscription. Currently supports unsubscribing a subscription from a newsletter list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_list_subscriptions.update_by_subscription_id(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBySubscriptionIdErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_list_subscriptions.update_by_subscription_id(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBySubscriptionIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>subscription_id</code> | <code>str</code> | The prefixed ID of the subscription |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest](beehiiv/models/publications_newsletter_lists_subscriptions_by_subscription_id_subscription_id_request.py) \| [PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict](beehiiv/models/publications_newsletter_lists_subscriptions_by_subscription_id_subscription_id_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](beehiiv/models/newsletter_list_subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[UpdateBySubscriptionIdErrorBody](beehiiv/errors/update_by_subscription_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NewsletterLists

> Source: [NewsletterLists](beehiiv/apis/newsletter_lists.py)

<details>
<summary><code>def create7(publication_id: str, authorization: str, *, body: PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsletterListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new newsletter list for a publication. The list will be created with an active status. The slug will be auto-generated from the name if not provided.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_lists.create7("some example string", "some example string")
    # TODO: Handle 'response' of type NewsletterListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create7ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_lists.create7("some example string", "some example string")
    # TODO: Handle 'response' of type NewsletterListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create7ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsNewsletterListsRequest](beehiiv/models/publications_newsletter_lists_request.py) \| [PublicationsNewsletterListsRequestDict](beehiiv/models/publications_newsletter_lists_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListResponse](beehiiv/models/newsletter_list_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create7ErrorBody](beehiiv/errors/create7_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete2(publication_id: str, newsletter_list_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a newsletter list belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.newsletter_lists.delete2("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete2ErrorBody
```

**Async**

```python
try:
    await async_client.newsletter_lists.delete2("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Delete2ErrorBody](beehiiv/errors/delete2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index14(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None) -> NewsletterListIndexResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all newsletter lists for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_lists.index14("some example string", "some example string")
    # TODO: Handle 'response' of type NewsletterListIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index14ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_lists.index14("some example string", "some example string")
    # TODO: Handle 'response' of type NewsletterListIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index14ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListIndexResponse](beehiiv/models/newsletter_list_index_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index14ErrorBody](beehiiv/errors/index14_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show10(publication_id: str, newsletter_list_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> NewsletterListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single newsletter list belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_lists.show10("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type NewsletterListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show10ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_lists.show10(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show10ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListResponse](beehiiv/models/newsletter_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show10ErrorBody](beehiiv/errors/show10_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update2(publication_id: str, newsletter_list_id: str, authorization: str, *, body: PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsletterListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.newsletter_lists.update2("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type NewsletterListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Update2ErrorBody
```

**Async**

```python
try:
    response = await async_client.newsletter_lists.update2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NewsletterListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Update2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>newsletter_list_id</code> | <code>str</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsNewsletterListsRequest1](beehiiv/models/publications_newsletter_lists_request1.py) \| [PublicationsNewsletterListsRequest1Dict](beehiiv/models/publications_newsletter_lists_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListResponse](beehiiv/models/newsletter_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Update2ErrorBody](beehiiv/errors/update2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Podcasts

> Source: [Podcasts](beehiiv/apis/podcasts.py)

<details>
<summary><code>def get_episode(publication_id: str, podcast_show_id: str, podcast_episode_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PodcastEpisodeGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single episode belonging to a specific podcast.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.get_episode(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PodcastEpisodeGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEpisodeErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.get_episode(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PodcastEpisodeGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEpisodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>podcast_show_id</code> | <code>str</code> | The prefixed ID of the podcast |
| <code>podcast_episode_id</code> | <code>str</code> | The prefixed ID of the episode |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastEpisodeGetResponse](beehiiv/models/podcast_episode_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[GetEpisodeErrorBody](beehiiv/errors/get_episode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_podcast(publication_id: str, podcast_show_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PodcastShowGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single podcast belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.get_podcast("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PodcastShowGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPodcastErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.get_podcast(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PodcastShowGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPodcastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>podcast_show_id</code> | <code>str</code> | The prefixed ID of the podcast |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastShowGetResponse](beehiiv/models/podcast_show_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[GetPodcastErrorBody](beehiiv/errors/get_podcast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_episodes(publication_id: str, podcast_show_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, status: PodcastEpisodeStatusOrStr | None = None, order_by: PodcastEpisodeOrderByOrStr | None = PodcastEpisodeOrderBy.DISPLAYED_DATE, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None) -> PodcastEpisodesListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all episodes belonging to a specific podcast.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.list_episodes("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PodcastEpisodesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEpisodesErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.list_episodes(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PodcastEpisodesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEpisodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>podcast_show_id</code> | <code>str</code> | The prefixed ID of the podcast |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Use this opaque cursor token to fetch the next page of results. Obtain the value from `next_cursor` in a previous response.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[PodcastEpisodeStatusOrStr](beehiiv/models/enums/podcast_episode_status.py) \| None</code> | Optionally filter the results by the status of the episode.<br>`draft` - Not yet published.<br>`scheduled` - Scheduled for future publication.<br>`published` - Available via web and RSS.<br>`archived` - No longer available via web or RSS.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[PodcastEpisodeOrderByOrStr](beehiiv/models/enums/podcast_episode_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to `displayed_date`<br>`created` - The time in which the episode was first created.<br>`updated` - The time the episode was last updated.<br>`publish_date` - The exact time the system published the episode (when it went live), not the scheduled time the user set.<br>`displayed_date` - The time displayed in place of the `publish_date`. Uses a custom display date if set, otherwise the scheduled time the user set for publication, otherwise the `publish_date`, otherwise the creation date. For imported episodes, the original feed's `pubDate` is stored as the custom display date. This is the same field used to order episodes in the podcast's RSS feed.<br>**Default**: <code>PodcastEpisodeOrderBy.DISPLAYED_DATE</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to desc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastEpisodesListResponse](beehiiv/models/podcast_episodes_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ListEpisodesErrorBody](beehiiv/errors/list_episodes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_podcasts(publication_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, status: PodcastShowStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PodcastShowsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all podcasts belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.list_podcasts("some example string", "some example string")
    # TODO: Handle 'response' of type PodcastShowsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPodcastsErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.list_podcasts("some example string", "some example string")
    # TODO: Handle 'response' of type PodcastShowsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPodcastsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Use this opaque cursor token to fetch the next page of results. Obtain the value from `next_cursor` in a previous response.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[PodcastShowStatusOrStr](beehiiv/models/enums/podcast_show_status.py) \| None</code> | Optionally filter the results by the status of the podcast.<br>`draft` - No episodes have been published.<br>`live` - Published and active.<br>`archived` - The podcast is no longer active.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastShowsListResponse](beehiiv/models/podcast_shows_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ListPodcastsErrorBody](beehiiv/errors/list_podcasts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Polls

> Source: [Polls](beehiiv/apis/polls.py)

<details>
<summary><code>def index15(publication_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, order_by: PollOrderByOrStr | None = PollOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, expand: list[PollsExpandItemsOrStr] | None = None, post_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PollsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all polls belonging to a specific publication. Poll choices are always included. Use `expand[]=stats` to include aggregate vote counts per choice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.polls.index15("some example string", "some example string")
    # TODO: Handle 'response' of type PollsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index15ErrorBody
```

**Async**

```python
try:
    response = await async_client.polls.index15("some example string", "some example string")
    # TODO: Handle 'response' of type PollsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index15ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[PollOrderByOrStr](beehiiv/models/enums/poll_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to created.<br> `created` - The time the poll was created.<br> `name` - The name of the poll.<br>**Default**: <code>PollOrderBy.CREATED</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc.<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>expand</code> | <code>list&#91;[PollsExpandItemsOrStr](beehiiv/models/enums/polls_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data.<br> `stats` - Returns aggregate vote counts per choice and total completions.<br> `poll_responses` - Returns up to 10 most recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br> `trivia_answer` - Returns the correct answer for trivia-type polls.<br>**Default**: <code>None</code> |
| <code>post_id</code> | <code>str \| None</code> | Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID (e.g. `post_abc123`).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PollsListResponse](beehiiv/models/polls_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index15ErrorBody](beehiiv/errors/index15_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_responses(publication_id: str, poll_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, order_by: PollResponsesOrderByOrStr | None = PollResponsesOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, expand: list[PollResponsesExpandItemsOrStr] | None = None, post_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PollResponsesListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this endpoint for large datasets instead of the `expand[]=poll_responses` parameter on the poll show endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.polls.list_responses("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PollResponsesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResponsesErrorBody
```

**Async**

```python
try:
    response = await async_client.polls.list_responses(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PollResponsesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResponsesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>poll_id</code> | <code>str</code> | The prefixed ID of the poll object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[PollResponsesOrderByOrStr](beehiiv/models/enums/poll_responses_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to created.<br>**Default**: <code>PollResponsesOrderBy.CREATED</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc.<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>expand</code> | <code>list&#91;[PollResponsesExpandItemsOrStr](beehiiv/models/enums/poll_responses_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data.<br> `post` - Returns the post title and publication date for the post where each response was collected.<br>**Default**: <code>None</code> |
| <code>post_id</code> | <code>str \| None</code> | Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g. `post_abc123`).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PollResponsesListResponse](beehiiv/models/poll_responses_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ListResponsesErrorBody](beehiiv/errors/list_responses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show11(publication_id: str, poll_id: str, authorization: str, *, expand: list[PollsExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> PollShowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific poll belonging to a publication. Use `expand[]=stats` for aggregate vote counts, or `expand[]=poll_responses` for individual subscriber responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.polls.show11("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PollShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show11ErrorBody
```

**Async**

```python
try:
    response = await async_client.polls.show11("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PollShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show11ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>poll_id</code> | <code>str</code> | The prefixed ID of the poll object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[PollsExpandItemsOrStr](beehiiv/models/enums/polls_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data.<br> `stats` - Returns aggregate vote counts per choice and total completions.<br> `poll_responses` - Returns up to 10 most recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br> `trivia_answer` - Returns the correct answer for trivia-type polls.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PollShowResponse](beehiiv/models/poll_show_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show11ErrorBody](beehiiv/errors/show11_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PostTemplates

> Source: [PostTemplates](beehiiv/apis/post_templates.py)

<details>
<summary><code>def index16(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, order: RequestDirectionOrStr | None = RequestDirection.ASC, order_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PostTemplatesGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of post templates available for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_templates.index16("some example string", "some example string")
    # TODO: Handle 'response' of type PostTemplatesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index16ErrorBody
```

**Async**

```python
try:
    response = await async_client.post_templates.index16("some example string", "some example string")
    # TODO: Handle 'response' of type PostTemplatesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index16ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction of the request. Defaults to `asc`.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>order_by</code> | <code>str \| None</code> | The field to order by. Defaults to `created`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostTemplatesGetResponse](beehiiv/models/post_templates_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index16ErrorBody](beehiiv/errors/index16_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](beehiiv/apis/posts.py)

<details>
<summary><code>def aggregate_stats(publication_id: str, authorization: str, *, audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL, platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL, status: PostStatusFilterOrStr | None = PostStatusFilter.ALL, content_tags: list[str] | None = None, authors: list[str] | None = None, hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL, request_options: RequestOptionsOrDict | None = None) -> PostsAggregateStatsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve aggregate stats for all posts

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.aggregate_stats("some example string", "some example string")
    # TODO: Handle 'response' of type PostsAggregateStatsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AggregateStatsErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.aggregate_stats("some example string", "some example string")
    # TODO: Handle 'response' of type PostsAggregateStatsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AggregateStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>audience</code> | <code>[PostAudienceFilterOrStr](beehiiv/models/enums/post_audience_filter.py) \| None</code> | Optionally filter the results by audience<br>**Default**: <code>PostAudienceFilter.ALL</code> |
| <code>platform</code> | <code>[PostPlatformFilterOrStr](beehiiv/models/enums/post_platform_filter.py) \| None</code> | Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email` - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` - Does not restrict results by platform.<br>**Default**: <code>PostPlatformFilter.ALL</code> |
| <code>status</code> | <code>[PostStatusFilterOrStr](beehiiv/models/enums/post_status_filter.py) \| None</code> | Optionally filter the results by the status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active.<br>`all` - Does not restrict results by status.<br>**Default**: <code>PostStatusFilter.ALL</code> |
| <code>content_tags</code> | <code>list&#91;str&#93; \| None</code> | Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.<br>Example: Filtering for `content_tags: ["sales","closing"]` will return results of posts that have *either* sales or closing content_tags.<br>**Default**: <code>None</code> |
| <code>authors</code> | <code>list&#91;str&#93; \| None</code> | Optionally filter posts by their authors. Adding an author name will return any post with that author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for `authors: ["John Doe","Jane Smith"]` will return results of posts that have *either* John Doe or Jane Smith as authors.<br>**Default**: <code>None</code> |
| <code>hidden_from_feed</code> | <code>[PostsListRequestHiddenFromFeedOrStr](beehiiv/models/enums/posts_list_request_hidden_from_feed.py) \| None</code> | Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` - Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from the feed.<br>`false` - Only return posts that are visible on the feed.<br>**Default**: <code>PostsListRequestHiddenFromFeed.ALL</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsAggregateStatsResponse](beehiiv/models/posts_aggregate_stats_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[AggregateStatsErrorBody](beehiiv/errors/aggregate_stats_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create8(publication_id: str, authorization: str, *, body: PublicationsPostsRequest | PublicationsPostsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PostsCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is available to publications on the Max and Enterprise plans.

Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

## Asynchronous creation

Post creation is processed in the background. This endpoint returns `201` immediately with the post's `id`, but the post is not finished being created at that moment. The returned `id` is stable — it is the same id the post will have once creation completes.

If you fetch the post (`GET /publications/{publicationId}/posts/{postId}`) right away, it may not exist yet. In that case the fetch returns `202` (still being created) — wait briefly and retry, honoring the `Retry-After` header. If background creation fails, the fetch returns `404` with the error code `POST_CREATION_FAILED`, so you should stop retrying, verify your request, and try creating the post again.

## Content methods

There are three ways to provide content for a post. You must provide either `blocks` or `body_content`, but not both.

### 1. Blocks

Use the `blocks` field to build your post with structured content blocks such as paragraphs, images, headings, buttons, tables, and more. Each block has a `type` and its own set of properties. This method gives you fine-grained control over individual content elements and supports features like visual settings, visibility settings, and dynamic content targeting.

### 2. Raw HTML (`body_content`)

Use the `body_content` field to provide a single string of raw HTML. The HTML is wrapped in an `htmlSnippet` block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

### 3. HTML blocks within blocks

Use `type: html` blocks inside the `blocks` array to embed raw HTML snippets alongside other structured blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

## CSS and styling guardrails

beehiiv processes all HTML content through a sanitization pipeline. When using `body_content` or `html` blocks, be aware of the following:

- **` tags are removed.** All ` block elements are stripped during sanitization. Do not rely on embedded stylesheets.
- **` tags are removed.** External stylesheet references are not allowed.
- **Inline styles are preserved.** Styles applied directly to elements via the `style` attribute (e.g., `
`) are kept intact.
- **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are loaded to apply them.
- **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure, which applies its own layout and spacing. This may affect the appearance of your content.
- **Use inline styles for all visual styling.** Since ` and ` tags are removed, inline styles on individual elements are the only reliable way to control appearance.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.create8("some example string", "some example string")
    # TODO: Handle 'response' of type PostsCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create8ErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.create8("some example string", "some example string")
    # TODO: Handle 'response' of type PostsCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create8ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsPostsRequest](beehiiv/models/publications_posts_request.py) \| [PublicationsPostsRequestDict](beehiiv/models/publications_posts_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsCreateResponse](beehiiv/models/posts_create_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create8ErrorBody](beehiiv/errors/create8_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete3(publication_id: str, post_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PostProcessing</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete or Archive a post. Any post that has been confirmed will have it's status changed to `archived`. Posts in the `draft` status will be permanently deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.delete3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostProcessing
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete3ErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.delete3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostProcessing
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>post_id</code> | <code>str</code> | The prefixed ID of the post object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostProcessing](beehiiv/models/post_processing.py)</code> -- The post was created via the Send API and is still being processed in the background. Wait briefly and retry, honoring the `Retry-After` header.

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Delete3ErrorBody](beehiiv/errors/delete3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index17(publication_id: str, authorization: str, *, expand: list[PostExpandFieldOrStr] | None = None, audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL, platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL, status: PostStatusFilterOrStr | None = PostStatusFilter.ALL, content_tags: list[str] | None = None, slugs: list[str] | None = None, authors: list[str] | None = None, premium_tiers: list[str] | None = None, limit: int | None = None, page: int | None = None, order_by: PostOrderByOrStr | None = PostOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL, request_options: RequestOptionsOrDict | None = None) -> PostsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all posts belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.index17("some example string", "some example string")
    # TODO: Handle 'response' of type PostsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index17ErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.index17("some example string", "some example string")
    # TODO: Handle 'response' of type PostsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index17ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[PostExpandFieldOrStr](beehiiv/models/enums/post_expand_field.py)&#93; \| None</code> | Optionally expand the results by adding additional information. <br>`stats` - Adds statistics about the post(s). <br>`free_web_content` - Adds the web HTML rendered to a free reader. <br>`free_email_content` - Adds the email HTML rendered to a free reader. <br>`free_rss_content` - Adds the RSS feed HTML. <br>`premium_web_content` - Adds the web HTML rendered to a premium reader. <br>`premium_email_content` - Adds the email HTML rendered to a premium reader.<br>**Default**: <code>None</code> |
| <code>audience</code> | <code>[PostAudienceFilterOrStr](beehiiv/models/enums/post_audience_filter.py) \| None</code> | Optionally filter the results by audience<br>**Default**: <code>PostAudienceFilter.ALL</code> |
| <code>platform</code> | <code>[PostPlatformFilterOrStr](beehiiv/models/enums/post_platform_filter.py) \| None</code> | Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email` - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` - Does not restrict results by platform.<br>**Default**: <code>PostPlatformFilter.ALL</code> |
| <code>status</code> | <code>[PostStatusFilterOrStr](beehiiv/models/enums/post_status_filter.py) \| None</code> | Optionally filter the results by the status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active.<br>`all` - Does not restrict results by status.<br>**Default**: <code>PostStatusFilter.ALL</code> |
| <code>content_tags</code> | <code>list&#91;str&#93; \| None</code> | Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.<br><br><b>Example</b>: Filtering for `content_tags: ["sales","closing"]` will return results of posts that have *either* `sales` or `closing` content_tags.<br>**Default**: <code>None</code> |
| <code>slugs</code> | <code>list&#91;str&#93; \| None</code> | Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug associated to it.<br><br><b>Example:</b> Filtering for `slugs: ["my-first-post","another-post"]` will return results of posts that have *either* `my-first-post` or `another-post` as their slug.<br>**Default**: <code>None</code> |
| <code>authors</code> | <code>list&#91;str&#93; \| None</code> | Optionally filter posts by their authors. Adding an author name will return any post with that author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for `authors: ["John Doe","Jane Smith"]` will return results of posts that have *either* John Doe or Jane Smith as authors.<br>**Default**: <code>None</code> |
| <code>premium_tiers</code> | <code>list&#91;str&#93; \| None</code> | Optionally filter posts by audience based on premium tiers.<br> This takes in an array of Display Names of the premium tiers.<br> It will also scope any expanded content output to the specified premium tiers.<br> Note: This is case insensitive.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[PostOrderByOrStr](beehiiv/models/enums/post_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the post was first created.<br> `publish_date` - The time the post was set to be published.<br> `displayed_date` - The time displayed in place of the `publish_date`. If no `displayed_date` was set, it will default to the `publish_date`<br>**Default**: <code>PostOrderBy.CREATED</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>hidden_from_feed</code> | <code>[PostsListRequestHiddenFromFeedOrStr](beehiiv/models/enums/posts_list_request_hidden_from_feed.py) \| None</code> | Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` - Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from the feed.<br>`false` - Only return posts that are visible on the feed.<br>**Default**: <code>PostsListRequestHiddenFromFeed.ALL</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsListResponse](beehiiv/models/posts_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index17ErrorBody](beehiiv/errors/index17_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview(publication_id: str, post_id: str, authorization: str, *, platform: str | None = None, subscriber_type: str | None = None, tier_ids: list[str] | None = None, subscriber_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PostsPreviewResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a URL to preview a post as a given audience. The returned `preview_url` renders the post in the beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.preview("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsPreviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.preview("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsPreviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>post_id</code> | <code>str</code> | The prefixed ID of the post object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>platform</code> | <code>str \| None</code> | `email` (default) or `web`.<br>**Default**: <code>None</code> |
| <code>subscriber_type</code> | <code>str \| None</code> | `free` (default) or `premium`. `premium` requires `tier_ids` to be present. Ignored if `subscriber_id` is present.<br>**Default**: <code>None</code> |
| <code>tier_ids</code> | <code>list&#91;str&#93; \| None</code> | One or more premium tier IDs to preview as. Only used when `subscriber_type` is `premium`. Ignored if `subscriber_id` is present.<br>**Default**: <code>None</code> |
| <code>subscriber_id</code> | <code>str \| None</code> | Preview using a specific subscriber's real tier memberships. Takes precedence over `subscriber_type`/`tier_ids` when present.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsPreviewResponse](beehiiv/models/posts_preview_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[PreviewErrorBody](beehiiv/errors/preview_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show12(publication_id: str, post_id: str, authorization: str, *, expand: list[PostExpandFieldOrStr] | None = None, premium_tiers: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> PostsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Post belonging to a specific publication.

Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the post is still being created, this endpoint returns `202` (still being created) with a `Retry-After` header — wait briefly and retry. If background creation failed, it returns `404` with the error code `POST_CREATION_FAILED`, indicating the post will never become available; verify your request and try creating it again.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.show12("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show12ErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.show12("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show12ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>post_id</code> | <code>str</code> | The prefixed ID of the post object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[PostExpandFieldOrStr](beehiiv/models/enums/post_expand_field.py)&#93; \| None</code> | Optionally expand the results by adding additional information. <br>`stats` - Adds statistics about the post(s). <br>`free_web_content` - Adds the web HTML rendered to a free reader. <br>`free_email_content` - Adds the email HTML rendered to a free reader. <br>`free_rss_content` - Adds the RSS feed HTML. <br>`premium_web_content` - Adds the web HTML rendered to a premium reader. <br>`premium_email_content` - Adds the email HTML rendered to a premium reader.<br>**Default**: <code>None</code> |
| <code>premium_tiers</code> | <code>list&#91;str&#93; \| None</code> | Scope any expanded content output to the specified premium tiers.<br> This takes in an array of Display Names of the premium tiers.<br> Note: This is case insensitive.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsGetResponse](beehiiv/models/posts_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show12ErrorBody](beehiiv/errors/show12_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_send(publication_id: str, post_id: str, authorization: str, *, body: PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PostsTestSendResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a test email for a specific post to one or more email addresses. Returns the number of remaining test sends for the day and the time at which the limit resets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.test_send("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsTestSendResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestSendErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.test_send("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsTestSendResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestSendErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>post_id</code> | <code>str</code> | The prefixed ID of the post object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsPostsTestSendsRequest](beehiiv/models/publications_posts_test_sends_request.py) \| [PublicationsPostsTestSendsRequestDict](beehiiv/models/publications_posts_test_sends_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsTestSendResponse](beehiiv/models/posts_test_send_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[TestSendErrorBody](beehiiv/errors/test_send_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update3(publication_id: str, post_id: str, authorization: str, *, body: PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> PostsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is available to publications on the Max and Enterprise plans.

Update an existing post for a specific publication. Only the fields provided in the request body will be updated — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML, see the Using the Send API and Create Post Endpoint guide.

To update post content, provide either `blocks` or `body_content` (not both). If neither is provided, the existing content is preserved. The same content methods and CSS guardrails described in the create endpoint apply here.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.update3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Update3ErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.update3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Update3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>post_id</code> | <code>str</code> | The prefixed ID of the post to update |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsPostsRequest1](beehiiv/models/publications_posts_request1.py) \| [PublicationsPostsRequest1Dict](beehiiv/models/publications_posts_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsGetResponse](beehiiv/models/posts_get_response.py)</code> -- Updated

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Update3ErrorBody](beehiiv/errors/update3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Publications

> Source: [Publications](beehiiv/apis/publications.py)

<details>
<summary><code>def index18(authorization: str, *, expand: list[PublicationsRequestExpandItemOrStr] | None = None, limit: int | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, order_by: PublicationsListRequestOrderByOrStr | None = PublicationsListRequestOrderBy.CREATED, request_options: RequestOptionsOrDict | None = None) -> PublicationsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all publications associated with your API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.publications.index18("some example string")
    # TODO: Handle 'response' of type PublicationsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index18ErrorBody
```

**Async**

```python
try:
    response = await async_client.publications.index18("some example string")
    # TODO: Handle 'response' of type PublicationsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index18ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[PublicationsRequestExpandItemOrStr](beehiiv/models/enums/publications_request_expand_item.py)&#93; \| None</code> | Optionally expand the results by adding additional information like subscription counts and engagement stats.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>order_by</code> | <code>[PublicationsListRequestOrderByOrStr](beehiiv/models/enums/publications_list_request_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the publication was first created.<br> `name` - The name of the publication.<br>**Default**: <code>PublicationsListRequestOrderBy.CREATED</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicationsListResponse](beehiiv/models/publications_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index18ErrorBody](beehiiv/errors/index18_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show13(publication_id: str, authorization: str, *, expand: list[PublicationsGetRequestExpandItemOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicationsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.publications.show13("some example string", "some example string")
    # TODO: Handle 'response' of type PublicationsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show13ErrorBody
```

**Async**

```python
try:
    response = await async_client.publications.show13("some example string", "some example string")
    # TODO: Handle 'response' of type PublicationsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show13ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[PublicationsGetRequestExpandItemOrStr](beehiiv/models/enums/publications_get_request_expand_item.py)&#93; \| None</code> | Optionally expand the results by adding additional information like subscription counts and engagement stats.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicationsGetResponse](beehiiv/models/publications_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show13ErrorBody](beehiiv/errors/show13_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ReferralProgram

> Source: [ReferralProgram](beehiiv/apis/referral_program.py)

<details>
<summary><code>def show14(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ReferralProgramGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details about the publication's referral program, including milestones and rewards.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.referral_program.show14("some example string", "some example string")
    # TODO: Handle 'response' of type ReferralProgramGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show14ErrorBody
```

**Async**

```python
try:
    response = await async_client.referral_program.show14("some example string", "some example string")
    # TODO: Handle 'response' of type ReferralProgramGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show14ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReferralProgramGetResponse](beehiiv/models/referral_program_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show14ErrorBody](beehiiv/errors/show14_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Segments

> Source: [Segments](beehiiv/apis/segments.py)

<details>
<summary><code>def create9(publication_id: str, authorization: str, *, body: PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SegmentShowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new segment.

**Manual segments** — Use `subscriptions` or `emails` input to create a segment from an explicit list of subscription IDs or email addresses. The segment is processed synchronously and returns with `status: completed`. Net new email addresses will be ignored; create subscriptions using the `Create Subscription` endpoint.

**Dynamic segments** — Use `custom_fields` input to create a segment that filters subscribers by custom field values. The segment is processed asynchronously and returns with `status: pending`. Results will be available in the `List Segment Subscribers` endpoint after processing is complete.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.create9("some example string", "some example string")
    # TODO: Handle 'response' of type SegmentShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create9ErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.create9("some example string", "some example string")
    # TODO: Handle 'response' of type SegmentShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create9ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSegmentsRequest](beehiiv/models/publications_segments_request.py) \| [PublicationsSegmentsRequestDict](beehiiv/models/publications_segments_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentShowResponse](beehiiv/models/segment_show_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create9ErrorBody](beehiiv/errors/create9_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete4(publication_id: str, segment_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> SegmentDeleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.delete4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete4ErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.delete4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>segment_id</code> | <code>str</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentDeleteResponse](beehiiv/models/segment_delete_response.py)</code> -- No Content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Delete4ErrorBody](beehiiv/errors/delete4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expand_results(publication_id: str, segment_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None) -> SegmentsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional subscriber details.
**Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based lookups, or integrations with external systems). If you need full subscriber details (email, status, custom fields, etc.), use `/segments/{segmentId}/members` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.expand_results("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExpandResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.expand_results(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SegmentsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExpandResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>segment_id</code> | <code>str</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentsGetResponse](beehiiv/models/segments_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ExpandResultsErrorBody](beehiiv/errors/expand_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index19(publication_id: str, authorization: str, *, type_: SegmentTypeOrStr | None = SegmentType.ALL, status: SegmentRequestStatusOrStr | None = SegmentRequestStatus.ALL, limit: int | None = None, page: int | None = None, order_by: SegmentOrderByOrStr | None = SegmentOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, expand: list[SegmentsExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> SegmentsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about all segments belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.index19("some example string", "some example string")
    # TODO: Handle 'response' of type SegmentsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index19ErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.index19("some example string", "some example string")
    # TODO: Handle 'response' of type SegmentsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index19ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>type_</code> | <code>[SegmentTypeOrStr](beehiiv/models/enums/segment_type.py) \| None</code> | Optionally filter the results by the segment's type.<br>**Default**: <code>SegmentType.ALL</code> |
| <code>status</code> | <code>[SegmentRequestStatusOrStr](beehiiv/models/enums/segment_request_status.py) \| None</code> | Optionally filter the results by the segment's status.<br>**Default**: <code>SegmentRequestStatus.ALL</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[SegmentOrderByOrStr](beehiiv/models/enums/segment_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the segment was first created.<br> `last_calculated` - The time that the segment last completed calculation. Measured in seconds since the Unix epoch.<br>**Default**: <code>SegmentOrderBy.CREATED</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>expand</code> | <code>list&#91;[SegmentsExpandItemsOrStr](beehiiv/models/enums/segments_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data. <br> `stats` - Requests the most recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and static segments only calculate once upon upload or creation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentsListResponse](beehiiv/models/segments_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index19ErrorBody](beehiiv/errors/index19_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_members(publication_id: str, segment_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, expand: list[SegmentMembersExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> SegmentMembersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all members in a segment with full subscription data. Each member is returned as a subscription object containing complete subscriber information and their subscription details. Supports optional expansions for stats, custom fields, tags, referrals, and premium tiers.
**Use this endpoint when you need detailed subscriber information.** If you only need subscriber IDs, use `/segments/{segmentId}/results` for a lighter-weight response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.list_members("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.list_members(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SegmentMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>segment_id</code> | <code>str</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>list&#91;[SegmentMembersExpandItemsOrStr](beehiiv/models/enums/segment_members_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data. <br> `stats` - Returns statistics about the subscription(s). <br> `custom_fields` - Returns custom field values set on the subscription. <br> `referrals` - Returns referrals made by the subscription. <br> `tags` - Returns tags associated with the subscription. <br> `subscription_premium_tiers` - Returns premium tier(s) the subscription is subscribed to.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentMembersResponse](beehiiv/models/segment_members_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[ListMembersErrorBody](beehiiv/errors/list_members_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recalculate(publication_id: str, segment_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> SegmentRecalculateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recalculates a specific segment belonging to a publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.recalculate("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentRecalculateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecalculateErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.recalculate(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SegmentRecalculateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecalculateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>segment_id</code> | <code>str</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentRecalculateResponse](beehiiv/models/segment_recalculate_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[RecalculateErrorBody](beehiiv/errors/recalculate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show15(publication_id: str, segment_id: str, authorization: str, *, expand: list[SegmentsExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> SegmentShowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a specific segment belonging to a publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.segments.show15("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show15ErrorBody
```

**Async**

```python
try:
    response = await async_client.segments.show15("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SegmentShowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show15ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>segment_id</code> | <code>str</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[SegmentsExpandItemsOrStr](beehiiv/models/enums/segments_expand_items.py)&#93; \| None</code> | Optionally expand the response to include additional data. <br> `stats` - Requests the most recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and static segments only calculate once upon upload or creation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentShowResponse](beehiiv/models/segment_show_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show15ErrorBody](beehiiv/errors/show15_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionTags

> Source: [SubscriptionTags](beehiiv/apis/subscription_tags.py)

<details>
<summary><code>def create10(publication_id: str, subscription_id: str, authorization: str, *, body: PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionTagsCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscription_tags.create10("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionTagsCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create10ErrorBody
```

**Async**

```python
try:
    response = await async_client.subscription_tags.create10(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionTagsCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create10ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | Value sent with the request. |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsTagsRequest](beehiiv/models/publications_subscriptions_tags_request.py) \| [PublicationsSubscriptionsTagsRequestDict](beehiiv/models/publications_subscriptions_tags_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionTagsCreateResponse](beehiiv/models/subscription_tags_create_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create10ErrorBody](beehiiv/errors/create10_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](beehiiv/apis/subscriptions.py)

<details>
<summary><code>def create11(publication_id: str, authorization: str, *, body: SubscriptionRequest | SubscriptionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.create11("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create11ErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.create11("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create11ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[SubscriptionRequest](beehiiv/models/subscription_request.py) \| [SubscriptionRequestDict](beehiiv/models/subscription_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](beehiiv/models/subscription_response.py)</code> -- Subscription created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create11ErrorBody](beehiiv/errors/create11_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete5(publication_id: str, subscription_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> SubscriptionDeleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This cannot be undone. All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be billed. Deletes a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.delete5("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete5ErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.delete5(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete5ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>subscription_id</code> | <code>str</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionDeleteResponse](beehiiv/models/subscription_delete_response.py)</code> -- No Content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Delete5ErrorBody](beehiiv/errors/delete5_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_email(publication_id: str, email: str, authorization: str, *, expand: SubscriptionsGetRequestExpandItemOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Please note that this endpoint requires the email to be URL encoded. Please reference your language's documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email address in a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.get_by_email("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetByEmailErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.get_by_email(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetByEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>email</code> | <code>str</code> | The ID of the subscriber object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>[SubscriptionsGetRequestExpandItemOrStr](beehiiv/models/enums/subscriptions_get_request_expand_item.py) \| None</code> | Optional list of expandable objects.<br>`subscription_premium_tiers ` - Returns an array of tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription. <br>`tags` - Returns an array of tags that have been set on the subscription.<br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](beehiiv/models/subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[GetByEmailErrorBody](beehiiv/errors/get_by_email_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_id(publication_id: str, subscription_id: str, authorization: str, *, expand: SubscriptionsGetRequestExpandItemOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID. This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint instead. The subscription ID can be found by exporting a list of subscriptions either via the `Settings > Publications > Export Data` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.get_by_id("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.get_by_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>subscription_id</code> | <code>str</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>[SubscriptionsGetRequestExpandItemOrStr](beehiiv/models/enums/subscriptions_get_request_expand_item.py) \| None</code> | Optional list of expandable objects.<br>`subscription_premium_tiers` - Returns an array of tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription. <br>`tags` - Returns an array of tags that have been set on the subscription.<br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](beehiiv/models/subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[GetByIdErrorBody](beehiiv/errors/get_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index20(publication_id: str, authorization: str, *, expand: SubscriptionsListRequestExpandItemOrStr | None = None, status: SubscriptionsListRequestStatusOrStr | None = SubscriptionsListRequestStatus.ALL, tier: SubscriptionsListRequestTierOrStr | None = SubscriptionsListRequestTier.ALL, premium_tiers: str | None = None, premium_tier_ids: str | None = None, limit: int | None = None, cursor: str | None = None, page: int | None = None, email: str | None = None, order_by: SubscriptionsListRequestOrderByOrStr | None = SubscriptionsListRequestOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, creation_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions belonging to a specific publication.

**New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the `cursor` parameter instead of `page` for new integrations.
**Deprecation Notice**: Offset-based pagination (using `page` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination. See our Pagination Guide for details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.index20("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index20ErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.index20("some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index20ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>[SubscriptionsListRequestExpandItemOrStr](beehiiv/models/enums/subscriptions_list_request_expand_item.py) \| None</code> | Optional list of expandable objects.<br>`subscription_premium_tiers ` - Returns an array of tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription. <br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[SubscriptionsListRequestStatusOrStr](beehiiv/models/enums/subscriptions_list_request_status.py) \| None</code> | Optionally filter the results by a status<br>**Default**: <code>SubscriptionsListRequestStatus.ALL</code> |
| <code>tier</code> | <code>[SubscriptionsListRequestTierOrStr](beehiiv/models/enums/subscriptions_list_request_tier.py) \| None</code> | Optionally filter the results by a their tier<br>**Default**: <code>SubscriptionsListRequestTier.ALL</code> |
| <code>premium_tiers</code> | <code>str \| None</code> | Optionally filter the results by one or multiple premium tiers<br>**Default**: <code>None</code> |
| <code>premium_tier_ids</code> | <code>str \| None</code> | Optionally filter the results by one or multiple premium tier ids<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination. See the [Pagination Guide](/welcome/pagination) for more details.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This method is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned. See the [Pagination Guide](/welcome/pagination) for migration guidance.<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | Optional email address to find a subscription.<br>This param must be an exact match and is case insensitive.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[SubscriptionsListRequestOrderByOrStr](beehiiv/models/enums/subscriptions_list_request_order_by.py) \| None</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the subscription was first created.<br><br>**Default**: <code>SubscriptionsListRequestOrderBy.CREATED</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>creation_date</code> | <code>str \| None</code> | Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their creation date.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsListResponse](beehiiv/models/subscriptions_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index20ErrorBody](beehiiv/errors/index20_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch3(publication_id: str, subscription_id: str, authorization: str, *, body: PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.patch3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Patch3ErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.patch3(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Patch3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>subscription_id</code> | <code>str</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsRequest1](beehiiv/models/publications_subscriptions_request1.py) \| [PublicationsSubscriptionsRequest1Dict](beehiiv/models/publications_subscriptions_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](beehiiv/models/subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Patch3ErrorBody](beehiiv/errors/patch3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put3(publication_id: str, subscription_id: str, authorization: str, *, body: PublicationsSubscriptionsRequestReferenceSubscriptionsApi | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.put3("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Put3ErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.put3(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Put3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>subscription_id</code> | <code>str</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsRequestReferenceSubscriptionsApi](beehiiv/models/publications_subscriptions_request_reference_subscriptions_api.py) \| [PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict](beehiiv/models/publications_subscriptions_request_reference_subscriptions_api.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](beehiiv/models/subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Put3ErrorBody](beehiiv/errors/put3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_email(publication_id: str, email: str, authorization: str, *, body: PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription by email.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.update_by_email("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateByEmailErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.update_by_email(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateByEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>email</code> | <code>str</code> | The email of the subscription object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsSubscriptionsByEmailRequest](beehiiv/models/publications_subscriptions_by_email_request.py) \| [PublicationsSubscriptionsByEmailRequestDict](beehiiv/models/publications_subscriptions_by_email_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](beehiiv/models/subscription_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[UpdateByEmailErrorBody](beehiiv/errors/update_by_email_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tiers

> Source: [Tiers](beehiiv/apis/tiers.py)

<details>
<summary><code>def create12(publication_id: str, authorization: str, *, body: PublicationsTiersRequest | PublicationsTiersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> TierResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tier for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tiers.create12("some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create12ErrorBody
```

**Async**

```python
try:
    response = await async_client.tiers.create12("some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create12ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsTiersRequest](beehiiv/models/publications_tiers_request.py) \| [PublicationsTiersRequestDict](beehiiv/models/publications_tiers_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](beehiiv/models/tier_response.py)</code> -- Created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create12ErrorBody](beehiiv/errors/create12_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index21(publication_id: str, authorization: str, *, expand: str | None = None, limit: int | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None) -> IndexTiersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all tiers belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tiers.index21("some example string", "some example string")
    # TODO: Handle 'response' of type IndexTiersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index21ErrorBody
```

**Async**

```python
try:
    response = await async_client.tiers.index21("some example string", "some example string")
    # TODO: Handle 'response' of type IndexTiersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index21ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>str \| None</code> | Optional list of expandable objects.<br>`stats` - Returns statistics about the tier(s).<br>`prices` - Returns prices for the tier(s).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.<br>**Default**: <code>None</code> |
| <code>direction</code> | <code>[RequestDirectionOrStr](beehiiv/models/enums/request_direction.py) \| None</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: <code>RequestDirection.ASC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IndexTiersResponse](beehiiv/models/index_tiers_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index21ErrorBody](beehiiv/errors/index21_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch4(publication_id: str, tier_id: str, authorization: str, *, body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> TierResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tiers.patch4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Patch4ErrorBody
```

**Async**

```python
try:
    response = await async_client.tiers.patch4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Patch4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>tier_id</code> | <code>str</code> | The prefixed ID of the tier object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsTiersRequest1](beehiiv/models/publications_tiers_request1.py) \| [PublicationsTiersRequest1Dict](beehiiv/models/publications_tiers_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](beehiiv/models/tier_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Patch4ErrorBody](beehiiv/errors/patch4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put4(publication_id: str, tier_id: str, authorization: str, *, body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> TierResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tiers.put4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Put4ErrorBody
```

**Async**

```python
try:
    response = await async_client.tiers.put4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Put4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>tier_id</code> | <code>str</code> | The prefixed ID of the tier object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsTiersRequest1](beehiiv/models/publications_tiers_request1.py) \| [PublicationsTiersRequest1Dict](beehiiv/models/publications_tiers_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](beehiiv/models/tier_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Put4ErrorBody](beehiiv/errors/put4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show16(publication_id: str, tier_id: str, authorization: str, *, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TierResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single tier belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tiers.show16("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show16ErrorBody
```

**Async**

```python
try:
    response = await async_client.tiers.show16("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type TierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show16ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>tier_id</code> | <code>str</code> | The prefixed ID of the tier object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>str \| None</code> | Optional list of expandable objects.<br>`stats` - Returns statistics about the tier(s).<br>`prices` - Returns prices for the tier(s).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](beehiiv/models/tier_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show16ErrorBody](beehiiv/errors/show16_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tokens

> Source: [Tokens](beehiiv/apis/tokens.py)

<details>
<summary><code>def introspect(*, body: OauthIntrospectRequest | OauthIntrospectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> IntrospectionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether a token is active and metadata about the token. Send parameters as `application/x-www-form-urlencoded`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tokens.introspect()
    # TODO: Handle 'response' of type IntrospectionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IntrospectErrorBody
```

**Async**

```python
try:
    response = await async_client.tokens.introspect()
    # TODO: Handle 'response' of type IntrospectionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IntrospectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OauthIntrospectRequest](beehiiv/models/oauth_introspect_request.py) \| [OauthIntrospectRequestDict](beehiiv/models/oauth_introspect_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntrospectionResponse](beehiiv/models/introspection_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[IntrospectErrorBody](beehiiv/errors/introspect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[OAuthError](beehiiv/models/o_auth_error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke(*, body: OauthRevokeRequest | OauthRevokeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an access token or refresh token. Send parameters as `application/x-www-form-urlencoded`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tokens.revoke()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RevokeErrorBody
```

**Async**

```python
try:
    response = await async_client.tokens.revoke()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RevokeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OauthRevokeRequest](beehiiv/models/oauth_revoke_request.py) \| [OauthRevokeRequestDict](beehiiv/models/oauth_revoke_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[RevokeErrorBody](beehiiv/errors/revoke_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[OAuthError](beehiiv/models/o_auth_error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def token(*, body: OauthTokenRequest | OauthTokenRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> TokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token. Send parameters as application/x-www-form-urlencoded.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tokens.token()
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TokenErrorBody
```

**Async**

```python
try:
    response = await async_client.tokens.token()
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OauthTokenRequest](beehiiv/models/oauth_token_request.py) \| [OauthTokenRequestDict](beehiiv/models/oauth_token_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](beehiiv/models/token_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[TokenErrorBody](beehiiv/errors/token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[OAuthError](beehiiv/models/o_auth_error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def token_info(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> TokenInfoResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for the current access token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tokens.token_info("some example string")
    # TODO: Handle 'response' of type TokenInfoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TokenInfoErrorBody
```

**Async**

```python
try:
    response = await async_client.tokens.token_info("some example string")
    # TODO: Handle 'response' of type TokenInfoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TokenInfoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer access token (`Bearer <access_token>`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenInfoResponse](beehiiv/models/token_info_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[TokenInfoErrorBody](beehiiv/errors/token_info_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[OAuthError](beehiiv/models/o_auth_error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](beehiiv/apis/webhooks_api.py)

<details>
<summary><code>def create13(publication_id: str, authorization: str, *, body: PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> WebhookResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new webhook for a given publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.create13("some example string", "some example string")
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create13ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create13("some example string", "some example string")
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Create13ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsWebhooksRequest](beehiiv/models/publications_webhooks_request.py) \| [PublicationsWebhooksRequestDict](beehiiv/models/publications_webhooks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](beehiiv/models/webhook_response.py)</code> -- Webhook created

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Create13ErrorBody](beehiiv/errors/create13_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete6(publication_id: str, endpoint_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhooksDeleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook subscription from a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.delete6("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type WebhooksDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete6ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.delete6(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhooksDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Delete6ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>endpoint_id</code> | <code>str</code> | The prefixed ID of the webhook object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksDeleteResponse](beehiiv/models/webhooks_delete_response.py)</code> -- No Content

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Delete6ErrorBody](beehiiv/errors/delete6_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index22(publication_id: str, authorization: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> IndexWebhooksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all webhooks belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.index22("some example string", "some example string")
    # TODO: Handle 'response' of type IndexWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index22ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.index22("some example string", "some example string")
    # TODO: Handle 'response' of type IndexWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Index22ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IndexWebhooksResponse](beehiiv/models/index_webhooks_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Index22ErrorBody](beehiiv/errors/index22_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show17(publication_id: str, endpoint_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific webhook belonging to a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.show17("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show17ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.show17(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Show17ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>endpoint_id</code> | <code>str</code> | The prefixed ID of the webhook object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](beehiiv/models/webhook_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Show17ErrorBody](beehiiv/errors/show17_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 422, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update4(publication_id: str, endpoint_id: str, authorization: str, *, body: PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> WebhookResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook subscription for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.update4("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Update4ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update4(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Update4ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publication_id</code> | <code>str</code> | The prefixed ID of the publication object |
| <code>endpoint_id</code> | <code>str</code> | The prefixed ID of the webhook object |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[PublicationsWebhooksRequest1](beehiiv/models/publications_webhooks_request1.py) \| [PublicationsWebhooksRequest1Dict](beehiiv/models/publications_webhooks_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](beehiiv/models/webhook_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Update4ErrorBody](beehiiv/errors/update4_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](beehiiv/apis/workspaces.py)

<details>
<summary><code>def identify2(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceIdentifyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about the workspace the OAuth or API token is associated with.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.identify2("some example string")
    # TODO: Handle 'response' of type WorkspaceIdentifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Identify2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.identify2("some example string")
    # TODO: Handle 'response' of type WorkspaceIdentifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Identify2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceIdentifyResponse](beehiiv/models/workspace_identify_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[Identify2ErrorBody](beehiiv/errors/identify2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def permissions(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspacePermissionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular OAuth scopes. OAuth tokens return only the scopes they were authorized for.

`posts` write access is only included when the Send API feature is enabled; tokens with `posts:write` but without Send API receive `posts` as `["read"]`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.permissions("some example string")
    # TODO: Handle 'response' of type WorkspacePermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.permissions("some example string")
    # TODO: Handle 'response' of type WorkspacePermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacePermissionsResponse](beehiiv/models/workspace_permissions_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[PermissionsErrorBody](beehiiv/errors/permissions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publications_by_subscription_email(email: str, authorization: str, *, expand: list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> list[PublicationsBySubscriptionEmailResponseItem]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all publications in the workspace that have a subscription for the specified email address. The workspace is determined by the provided API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.publications_by_subscription_email("some example string", "some example string")
    # TODO: Handle 'response' of type list[PublicationsBySubscriptionEmailResponseItem]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublicationsBySubscriptionEmailErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.publications_by_subscription_email(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[PublicationsBySubscriptionEmailResponseItem]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublicationsBySubscriptionEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>str</code> | The email address to search for subscriptions |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>expand</code> | <code>list&#91;[PublicationsBySubscriptionEmailRequestExpandItemOrStr](beehiiv/models/enums/publications_by_subscription_email_request_expand_item.py)&#93; \| None</code> | Optionally expand the results by adding additional information. <br>`subscription` - Returns the full Subscription object for the email address in each publication. <br>`publication` - Returns the full Publication object instead of just ID and name. <br>`subscription_custom_fields` - Returns custom field values nested within the subscription object. (Returns the subscription object regardless of whether `subscription` is requested.)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[PublicationsBySubscriptionEmailResponseItem](beehiiv/models/publications_by_subscription_email_response_item.py)&#93;</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[PublicationsBySubscriptionEmailErrorBody](beehiiv/errors/publications_by_subscription_email_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OauthUsers

> Source: [OauthUsers](beehiiv/apis/oauth_users.py)

<details>
<summary><code>def identify(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> UserIdentifyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about the user who authorized the OAuth access token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.oauth_users.identify("some example string")
    # TODO: Handle 'response' of type UserIdentifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentifyErrorBody
```

**Async**

```python
try:
    response = await async_client.oauth_users.identify("some example string")
    # TODO: Handle 'response' of type UserIdentifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentifyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](beehiiv/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserIdentifyResponse](beehiiv/models/user_identify_response.py)</code> -- OK

**OnError**: <code>[ApiError](beehiiv/core/exceptions.py)&#91;[IdentifyErrorBody](beehiiv/errors/identify_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](beehiiv/models/error.py)</code> |
| anything unmapped | <code>[RawError](beehiiv/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

