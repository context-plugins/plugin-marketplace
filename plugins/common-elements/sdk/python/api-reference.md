# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CommonElementsClient](common_elements/client.py)

## AggregatesAndCompliance

> Source: [AggregatesAndCompliance](common_elements/apis/aggregates_and_compliance.py)

<details>
<summary><code>def compliance_scan(body: ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ComplianceScanResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a community association document for automated compliance analysis. Returns a structured assessment against Florida and multi-state statutory requirements, plus best-practice governance rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.aggregates_and_compliance.compliance_scan(
        ApiV1ComplianceScanRequest(text="some example string", state="some example string")
    )
    # TODO: Handle 'response' of type ApiV1ComplianceScanResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ComplianceScanErrorBody
```

**Async**

```python
try:
    response = await async_client.aggregates_and_compliance.compliance_scan(
        ApiV1ComplianceScanRequest(text="some example string", state="some example string")
    )
    # TODO: Handle 'response' of type ApiV1ComplianceScanResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ComplianceScanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ComplianceScanRequest](common_elements/models/api_v1_compliance_scan_request.py) \| [ApiV1ComplianceScanRequestDict](common_elements/models/api_v1_compliance_scan_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ComplianceScanResponse](common_elements/models/api_v1_compliance_scan_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ComplianceScanErrorBody](common_elements/errors/compliance_scan_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def geo_state_summary(*, state: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GeoStateSummaryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-state rollup of the dataset: association counts broken out by subtype, plus insurance licensee counts. The market-sizing call: how much of a state the data covers before you build against it.

**Plan:** Available on every plan, uncapped: this returns one row per state, not a row listing.

- Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion runs, so treat them as current rather than fixed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.aggregates_and_compliance.geo_state_summary()
    # TODO: Handle 'response' of type ApiV1GeoStateSummaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GeoStateSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.aggregates_and_compliance.geo_state_summary()
    # TODO: Handle 'response' of type ApiV1GeoStateSummaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GeoStateSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str \| None</code> | Two-letter state code. Omit for every state, ranked by association count.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GeoStateSummaryResponse](common_elements/models/api_v1_geo_state_summary_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GeoStateSummaryErrorBody](common_elements/errors/geo_state_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AssociationResources

> Source: [AssociationResources](common_elements/apis/association_resources.py)

<details>
<summary><code>def resource_association_documents(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsDocumentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Governing and recorded documents held for the association, with their source and recording date. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_documents(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsDocumentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationDocumentsErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_documents(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsDocumentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsDocumentsResponse](common_elements/models/api_v1_associations_documents_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationDocumentsErrorBody](common_elements/errors/resource_association_documents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_financials(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsFinancialsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Financial public record for the association, including IRS Form 990 filings where it files one. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_financials(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsFinancialsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationFinancialsErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_financials(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsFinancialsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationFinancialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsFinancialsResponse](common_elements/models/api_v1_associations_financials_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationFinancialsErrorBody](common_elements/errors/resource_association_financials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_governance(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsGovernanceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Governance record for the association: filings, officers over time, and registered agent history. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_governance(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsGovernanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationGovernanceErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_governance(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsGovernanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationGovernanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsGovernanceResponse](common_elements/models/api_v1_associations_governance_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationGovernanceErrorBody](common_elements/errors/resource_association_governance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_hazards(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsHazardsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Natural-hazard exposure for the association's location: recorded storm events and county-level risk. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_hazards(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsHazardsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationHazardsErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_hazards(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsHazardsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationHazardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsHazardsResponse](common_elements/models/api_v1_associations_hazards_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationHazardsErrorBody](common_elements/errors/resource_association_hazards_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_insurance(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsInsuranceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Insurance-side public record touching the association, including coverage and carrier filings where published. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_insurance(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsInsuranceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationInsuranceErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_insurance(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsInsuranceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationInsuranceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsInsuranceResponse](common_elements/models/api_v1_associations_insurance_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationInsuranceErrorBody](common_elements/errors/resource_association_insurance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_legal(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsLegalResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Litigation and legal history recorded against the association, and the counsel of record where published. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_legal(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsLegalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationLegalErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_legal(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsLegalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationLegalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsLegalResponse](common_elements/models/api_v1_associations_legal_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationLegalErrorBody](common_elements/errors/resource_association_legal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_parcels(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsParcelsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

County parcel records matched to the association: the physical footprint behind the corporate record. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_parcels(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsParcelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationParcelsErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_parcels(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsParcelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationParcelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsParcelsResponse](common_elements/models/api_v1_associations_parcels_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationParcelsErrorBody](common_elements/errors/resource_association_parcels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_permits(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsPermitsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Municipal building permits recorded against the association, with work type, value and date. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_permits(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsPermitsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationPermitsErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_permits(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsPermitsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationPermitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsPermitsResponse](common_elements/models/api_v1_associations_permits_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationPermitsErrorBody](common_elements/errors/resource_association_permits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_structures(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsStructuresResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Building footprints and recorded structural characteristics for the association's buildings. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_structures(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsStructuresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationStructuresErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_structures(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsStructuresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationStructuresErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsStructuresResponse](common_elements/models/api_v1_associations_structures_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationStructuresErrorBody](common_elements/errors/resource_association_structures_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_association_violations(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsViolationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Code enforcement cases recorded against the association by the local jurisdiction. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.

- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.association_resources.resource_association_violations(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsViolationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationViolationsErrorBody
```

**Async**

```python
try:
    response = await async_client.association_resources.resource_association_violations(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsViolationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceAssociationViolationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsViolationsResponse](common_elements/models/api_v1_associations_violations_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceAssociationViolationsErrorBody](common_elements/errors/resource_association_violations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Associations

> Source: [Associations](common_elements/apis/associations.py)

<details>
<summary><code>def associations_building_safety(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsBuildingSafetyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything on public record about an association’s physical buildings, joined into one call: Florida SIRS filings, county milestone/recertification rolls, elevator certificates, pool inspections, parcel building characteristics, and HUD FHA condo approval. The structural sibling of the risk endpoint, which reports county-level FEMA hazard instead.

- Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only, SIRS is Florida condo, HUD FHA is national. Branch on has_data and layer_counts. An absent record means nothing was filed with a source we ingest, not that the association is compliant.
- Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for brevity; live responses carry the rows.
- Reference data only, not a structural determination. Confirm anything load-bearing with a licensed engineer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_building_safety("some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsBuildingSafetyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsBuildingSafetyErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_building_safety("some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsBuildingSafetyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsBuildingSafetyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Association UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsBuildingSafetyResponse](common_elements/models/api_v1_associations_building_safety_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsBuildingSafetyErrorBody](common_elements/errors/associations_building_safety_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_buildings(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsBuildingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Building footprint, roof/facade area estimates, floor count, and recorded structural facts (measured stories, year built, FL Ch. 553 milestone relevance) for an association, derived from mapped building outlines and county parcel rolls.

- Requires the "valuations" scope, not "associations" — the one endpoint in this group that does.
- Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse mapping, not a small property. Recorded structural facts (stories, year_built, milestone_inspection_relevant) are Florida-only today.
- Reference data only. Confirm anything load-bearing with a licensed engineer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_buildings(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsBuildingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsBuildingsErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_buildings(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsBuildingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsBuildingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsBuildingsResponse](common_elements/models/api_v1_associations_buildings_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsBuildingsErrorBody](common_elements/errors/associations_buildings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_by_address(address: str, zip_: str, *, limit: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsByAddressResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a property address to the association that governs it. Dedicated parcel-backed contract for a book of property addresses. /associations/match and /lookup also route a street-shaped q through this same resolve path so an address is never scored as a name.

- Coverage is real but not complete everywhere: this only returns a hit where a parcel has already been deterministically linked to an association. An empty result includes a hint pointing at /associations/match as a name-based fallback. It does not mean the property has no association, only that we do not have the link yet.
- Nothing here is a guess made at request time. A result is always a parcel a matcher already linked to an organization, never a fuzzy score computed on the fly — which is what makes /match the wrong tool for this and this the wrong tool for a bare name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_by_address("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsByAddressResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsByAddressErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_by_address("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsByAddressResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsByAddressErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>address</code> | <code>str</code> | Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below. |
| <code>zip_</code> | <code>str</code> | 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to the ZIP. |
| <code>limit</code> | <code>float \| None</code> | Max candidates to return, 1 to 5 (default 3).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsByAddressResponse](common_elements/models/api_v1_associations_by_address_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsByAddressErrorBody](common_elements/errors/associations_by_address_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The core record for one association: identity, location, registration status, and management-firm-of-record, in one call. The starting point once you have an id from lookup, match, or nearby.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsDetailErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsDetailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsResponse](common_elements/models/api_v1_associations_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsDetailErrorBody](common_elements/errors/associations_detail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_lookup(*, q: str | None = None, state: str | None = None, subtype: str | None = None, county: str | None = None, registration_number: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsLookupResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse and filter community associations by state, county, subtype or registration number. For a name, `q` is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling names from your own system, use /api/v1/associations/match instead. If `q` is a street address, the request is resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use lookup when you hold an exact key: a registration number, or a real substring of the filed name.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_lookup()
    # TODO: Handle 'response' of type ApiV1AssociationsLookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsLookupErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_lookup()
    # TODO: Handle 'response' of type ApiV1AssociationsLookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use /associations/match. A street address (with ZIP) is resolved as an address, not as a name.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state filter, e.g. "FL".<br>**Default**: <code>None</code> |
| <code>subtype</code> | <code>str \| None</code> | One of "hoa", "condo", "coop".<br>**Default**: <code>None</code> |
| <code>county</code> | <code>str \| None</code> | County filter, case-insensitive, e.g. "Broward" or "Pima".<br>**Default**: <code>None</code> |
| <code>registration_number</code> | <code>str \| None</code> | Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...), case-insensitive. Returned as external_document_number.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max results to return (default 20, max 100; free tier is clamped lower).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsLookupResponse](common_elements/models/api_v1_associations_lookup_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsLookupErrorBody](common_elements/errors/associations_lookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_management(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsManagementResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Who manages this association. `best` is the strongest management company on file and `sources` is every public-record source that names one (state condo and HOA filings, management certificates, CAM licensing records, registered agents), best first. The public association page and data.commonelements.com read the same rows. Any management relationship confirmed on the platform itself comes back separately.

- Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of Florida associations and about a tenth nationally have a management company on file. Outside those states an empty result says nothing about whether the association is managed.
- Treat `inferred: true` as likely, not as fact. Those rows come from a match we made (a licensed firm's office address or email domain), not from a filing that names the firm.
- The public-record rows and confirmed_relationships can disagree, and that is meaningful: sources reflect the filings, confirmed_relationships reflects what the platform's own users have confirmed. Treat `best` as the source of record when they differ.
- Both empty means no manager is on record at all, which for a professionally-managed association usually means self-managed or an unfiled change.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_management(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsManagementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsManagementErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_management(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsManagementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsManagementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsManagementResponse](common_elements/models/api_v1_associations_management_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsManagementErrorBody](common_elements/errors/associations_management_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_match(q: str, state: str, *, county: str | None = None, min_similarity: float | None = None, limit: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsMatchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fuzzy name matching for entity resolution: given a messy association name from your own system, get back the best-matching Common Elements records with a similarity score. Use this to reconcile a book of business against the directory, where an exact-string lookup would miss "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY ASSOCIATION, INC.". If `q` is a street address (house number, city, state, ZIP), the request is resolved against linked parcels instead of names, the same path as /associations/by-address. Name-scoring an address attaches the wrong community.

- Similarity is trigram-based, so word order matters less than shared character runs. A score above roughly 0.45 is usually a confident match; between 0.25 and 0.45, review before merging.
- If q looks like a street address, the response includes resolved_via: "address" and match_confidence of exact or building. Those rows are parcel links, not name guesses. An empty list means we do not have that address linked yet. Address-shaped q never falls through to name matching.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_match("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsMatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsMatchErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_match("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsMatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsMatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a name. |
| <code>state</code> | <code>str</code> | Two-letter state code. Required; matching is scoped per state. |
| <code>county</code> | <code>str \| None</code> | Optional county filter, case-insensitive.<br>**Default**: <code>None</code> |
| <code>min_similarity</code> | <code>float \| None</code> | Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max candidates to return, 1 to 10 (default 5).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsMatchResponse](common_elements/models/api_v1_associations_match_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsMatchErrorBody](common_elements/errors/associations_match_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_nearby(lat: float, lng: float, *, radius_km: float | None = None, subtype: str | None = None, limit: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsNearbyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find associations within a radius of a coordinate, sorted nearest first. Built for "what communities are around this property" workflows: territory planning, route density for a service vendor, or comparable-community selection.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

- Only associations with recorded coordinates are searchable here. Coverage of geocoded records varies by state, so an empty result is not proof no association exists at that location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_nearby(1.5, 1.5)
    # TODO: Handle 'response' of type ApiV1AssociationsNearbyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsNearbyErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_nearby(1.5, 1.5)
    # TODO: Handle 'response' of type ApiV1AssociationsNearbyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsNearbyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | Latitude, -90 to 90. |
| <code>lng</code> | <code>float</code> | Longitude, -180 to 180. |
| <code>radius_km</code> | <code>float \| None</code> | Search radius in kilometres, 0.1 to 50 (default 2).<br>**Default**: <code>None</code> |
| <code>subtype</code> | <code>str \| None</code> | One of "hoa", "condo", "coop".<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max results, 1 to 50 (default 20).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsNearbyResponse](common_elements/models/api_v1_associations_nearby_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsNearbyErrorBody](common_elements/errors/associations_nearby_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_officers(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsOfficersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The current board/officer roster on file for an association, from state officer filings. Coverage is strongest in the eight states with published officer rolls. Board-turnover events on the change feed come from diffing successive snapshots of this roster, so they currently exist only for the states that have had more than one snapshot.

- This is the current roster only. For board history over time (who served when, and each turnover as an event), use data.commonelements.com or the change feed's board_turnover / officer_* events.
- An empty array means no officer filing is on record for this association, not necessarily that the board has vacancies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_officers(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsOfficersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsOfficersErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_officers(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsOfficersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsOfficersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsOfficersResponse](common_elements/models/api_v1_associations_officers_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsOfficersErrorBody](common_elements/errors/associations_officers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_risk(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsRiskResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for underwriting, due diligence, and loan origination workflows.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_risk("some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsRiskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsRiskErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_risk("some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsRiskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsRiskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Association ID from the lookup endpoint. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsRiskResponse](common_elements/models/api_v1_associations_risk_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsRiskErrorBody](common_elements/errors/associations_risk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associations_vendors(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsVendorsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The vendors and service providers an association is on record working with, from confirmed relationship edges in the Common Elements graph. Answers "who already services this community" before you bid against them or refer into them.

- Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the association self-performs the work.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.associations.associations_vendors("some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsVendorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsVendorsErrorBody
```

**Async**

```python
try:
    response = await async_client.associations.associations_vendors("some example string")
    # TODO: Handle 'response' of type ApiV1AssociationsVendorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociationsVendorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Association UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsVendorsResponse](common_elements/models/api_v1_associations_vendors_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[AssociationsVendorsErrorBody](common_elements/errors/associations_vendors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BulkDelivery

> Source: [BulkDelivery](common_elements/apis/bulk_delivery.py)

<details>
<summary><code>def deliveries_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that skips the check.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Delivery id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse3](common_elements/models/api_v1_deliveries_response3.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesCancelErrorBody](common_elements/errors/deliveries_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_catalog(*, dataset: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesDatasetsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for the key on this request — what your plan allows. Every dataset is listed, each carrying `available_to_you` and the reason when it is false. Add `?dataset=` for one dataset's full column dictionary.

- The dictionary returned here is the same document shipped inside each delivery, so a schema can be built against this endpoint before the first file arrives, and diffed afterwards.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_catalog()
    # TODO: Handle 'response' of type ApiV1DeliveriesDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesCatalogErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_catalog()
    # TODO: Handle 'response' of type ApiV1DeliveriesDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesCatalogErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset</code> | <code>str \| None</code> | Narrow to one dataset and include its full column dictionary. Without it the response carries column counts rather than every column. Current keys: associations, vendors, statutes, building-safety, report-card, changes.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesDatasetsResponse](common_elements/models/api_v1_deliveries_datasets_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesCatalogErrorBody](common_elements/errors/deliveries_catalog_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_create(body: ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs server-side with keyset pagination and produces a durable artifact with a manifest and a column dictionary beside it. Use this instead of /v1/export when the dataset is larger than one HTTP response can carry.

**Plan:** Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap, lookback window, monthly delivery quota and concurrency are all resolved server-side from the key; none of them is a parameter.

- One delivery counts once against your monthly request quota and once against your plan's separate monthly delivery quota. Polling its status costs a request like any other call.
- A refusal names its reason: `tier_not_allowed` when the plan does not include delivery, `quota_exceeded` when the monthly delivery quota is spent, and 429 again when too many deliveries are already running.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_create(ApiV1DeliveriesRequest(dataset="some example string"))
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_create(ApiV1DeliveriesRequest(dataset="some example string"))
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DeliveriesRequest](common_elements/models/api_v1_deliveries_request.py) \| [ApiV1DeliveriesRequestDict](common_elements/models/api_v1_deliveries_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse](common_elements/models/api_v1_deliveries_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesCreateErrorBody](common_elements/errors/deliveries_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_download(id_: UUID, *, token: str | None = None, part: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesDownloadResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own capability token for a pipeline that should not hold an API key, or the organization's API key for anything that already does. Either way the same database function re-checks that the run succeeded, that its retention window is still open, and that the presenter is entitled.

- The response is the file itself, not a redirect to storage. A signed storage URL would keep working after the artifact expired, after the subscription lapsed and after the key was revoked, with no server left in the path to reconsider.
- Fetch `?part=dictionary` to build a schema before parsing, and `?part=manifest` to verify the row count and checksum after downloading.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_download(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesDownloadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesDownloadErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_download(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesDownloadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesDownloadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Delivery id. |
| <code>token</code> | <code>str \| None</code> | The artifact's capability token, as returned on the delivery's status. Use this when the consumer should not hold an API key. A token download does not consume your monthly request quota.<br>**Default**: <code>None</code> |
| <code>part</code> | <code>str \| None</code> | `manifest` for the run's manifest or `dictionary` for its column dictionary, fetched through the same authorization. Omit for the data itself.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesDownloadResponse](common_elements/models/api_v1_deliveries_download_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesDownloadErrorBody](common_elements/errors/deliveries_download_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_list(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and download links while they are live.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_list()
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesListErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_list()
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse1](common_elements/models/api_v1_deliveries_response1.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesListErrorBody](common_elements/errors/deliveries_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_schedule_delete(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesSchedulesResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their retention window closes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_schedule_delete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesScheduleDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_schedule_delete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesScheduleDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Schedule id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse3](common_elements/models/api_v1_deliveries_schedules_response3.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesScheduleDeleteErrorBody](common_elements/errors/deliveries_schedule_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_schedule_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesSchedulesResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One recurring delivery and its recent runs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_schedule_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesScheduleDetailErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_schedule_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesScheduleDetailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Schedule id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse2](common_elements/models/api_v1_deliveries_schedules_response2.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesScheduleDetailErrorBody](common_elements/errors/deliveries_schedule_detail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_schedule_update(id_: UUID, body: ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesSchedulesResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.

- For a `changes` schedule the watermark is untouched by a pause, so the first run after resuming covers everything that happened while it slept — clamped, as always, by your plan's lookback window.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_schedule_update(
        UUID("00000000-0000-0000-0000-000000000000"), ApiV1DeliveriesSchedulesRequest1()
    )
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesScheduleUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_schedule_update(
        UUID("00000000-0000-0000-0000-000000000000"), ApiV1DeliveriesSchedulesRequest1()
    )
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesScheduleUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Schedule id. |
| <code>body</code> | <code>[ApiV1DeliveriesSchedulesRequest1](common_elements/models/api_v1_deliveries_schedules_request1.py) \| [ApiV1DeliveriesSchedulesRequest1Dict](common_elements/models/api_v1_deliveries_schedules_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse3](common_elements/models/api_v1_deliveries_schedules_response3.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesScheduleUpdateErrorBody](common_elements/errors/deliveries_schedule_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_schedules_create(body: ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesSchedulesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring delivery: this dataset, these filters, this format, on this cadence, produced whether or not anyone is awake. In `changes` mode each run covers only what was observed after the previous SUCCESSFUL delivery, so a failed run is re-covered on the next one rather than silently skipped.

**Plan:** Growth plan and above, the same gate as one-off delivery.

- Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume are editable through PATCH on the schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_schedules_create(
        ApiV1DeliveriesSchedulesRequest(dataset="some example string", cadence="some example string")
    )
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesSchedulesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_schedules_create(
        ApiV1DeliveriesSchedulesRequest(dataset="some example string", cadence="some example string")
    )
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesSchedulesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DeliveriesSchedulesRequest](common_elements/models/api_v1_deliveries_schedules_request.py) \| [ApiV1DeliveriesSchedulesRequestDict](common_elements/models/api_v1_deliveries_schedules_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse](common_elements/models/api_v1_deliveries_schedules_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesSchedulesCreateErrorBody](common_elements/errors/deliveries_schedules_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_schedules_list(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesSchedulesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_schedules_list()
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesSchedulesListErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_schedules_list()
    # TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesSchedulesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse1](common_elements/models/api_v1_deliveries_schedules_response1.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesSchedulesListErrorBody](common_elements/errors/deliveries_schedules_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deliveries_status(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a machine-readable `error.code` with a message written for the person who has to decide what to do next.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_delivery.deliveries_status(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_delivery.deliveries_status(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DeliveriesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeliveriesStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Delivery id returned when the delivery was requested. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse2](common_elements/models/api_v1_deliveries_response2.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DeliveriesStatusErrorBody](common_elements/errors/deliveries_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BulkExport

> Source: [BulkExport](common_elements/apis/bulk_export.py)

<details>
<summary><code>def export(resource: str, *, format_: str | None = None, columns: str | None = None, state: str | None = None, q: str | None = None, county: str | None = None, subtype: str | None = None, category: str | None = None, unit_min_unit_max: float | None = None, year_min_year_max: float | None = None, is_claimed: bool | None = None, mgmt: str | None = None, chapter_topic: str | None = None, sirs_on_file_elevator_delinquent: bool | None = None, milestone_status_pool_last_result: str | None = None, has_sirs_has_elevator_cert: bool | None = None, fha_status: str | None = None, min_risk_max_risk: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ExportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row count. `resource` is one of associations, vendors, statutes, building-safety, or report-card. Each resource has its own filter parameters (narrow the export the same way you would narrow the matching list endpoint) and a public-safe column allowlist. report-card streams the per-association public-record signal set behind the Explorer — FEMA NRI county risk, SIRS on file, HUD FHA status, elevator certificates, latest pool inspection, 24-month building permits, and IRS Form 990 revenue — keyed by organization id, name, state, and county.

**Plan:** Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the per-row endpoints above are included in every plan, but streaming a full dataset is a Growth+ capability. Per-tier row cap on a single export: Growth 50,000 · Scale 250,000 · Enterprise 1,000,000.

- One export = one request against your monthly quota, whatever the row count, up to your plan's row cap.
- The scope required depends on the resource, not the export capability itself — a key needs both the resource's read scope AND a Growth+ tier.
- A source guard enforces the same public-record exclusions as every other v1 endpoint; a "columns" value that would expose an excluded field 400s rather than silently dropping it.
- The first page is validated before the response starts streaming, so a bad filter or column name returns a clean JSON error. A failure mid-stream truncates the file — check row counts on large exports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_export.export("some example string")
    # TODO: Handle 'response' of type ApiV1ExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_export.export("some example string")
    # TODO: Handle 'response' of type ApiV1ExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource</code> | <code>str</code> | One of: associations, vendors, statutes, building-safety, report-card. |
| <code>format_</code> | <code>str \| None</code> | "csv" (default) or "json".<br>**Default**: <code>None</code> |
| <code>columns</code> | <code>str \| None</code> | Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid set for that resource.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code. Every resource supports this filter.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes).<br>**Default**: <code>None</code> |
| <code>county</code> | <code>str \| None</code> | County filter. Supported by associations, vendors, and building-safety.<br>**Default**: <code>None</code> |
| <code>subtype</code> | <code>str \| None</code> | "hoa", "condo", or "coop". Supported by associations and building-safety.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Vendor category slug. Vendors only.<br>**Default**: <code>None</code> |
| <code>unit_min_unit_max</code> | <code>float \| None</code> | Unit count range. Associations only.<br>**Default**: <code>None</code> |
| <code>year_min_year_max</code> | <code>float \| None</code> | Year-built range. Associations only.<br>**Default**: <code>None</code> |
| <code>is_claimed</code> | <code>bool \| None</code> | "true" or "false". Associations only.<br>**Default**: <code>None</code> |
| <code>mgmt</code> | <code>str \| None</code> | Management firm name filter. Associations only.<br>**Default**: <code>None</code> |
| <code>chapter_topic</code> | <code>str \| None</code> | Statutes only, same meaning as on /v1/statutes/by-state.<br>**Default**: <code>None</code> |
| <code>sirs_on_file_elevator_delinquent</code> | <code>bool \| None</code> | "true" or "false". Building-safety only.<br>**Default**: <code>None</code> |
| <code>milestone_status_pool_last_result</code> | <code>str \| None</code> | Free-text, matches the source county/agency's own vocabulary. Building-safety only.<br>**Default**: <code>None</code> |
| <code>has_sirs_has_elevator_cert</code> | <code>bool \| None</code> | "true" or "false". Report-card only.<br>**Default**: <code>None</code> |
| <code>fha_status</code> | <code>str \| None</code> | Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.<br>**Default**: <code>None</code> |
| <code>min_risk_max_risk</code> | <code>float \| None</code> | FEMA NRI county risk score range. Report-card only.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExportResponse](common_elements/models/api_v1_export_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ExportErrorBody](common_elements/errors/export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def export_changes(*, format_: str | None = None, columns: str | None = None, kind: str | None = None, state: str | None = None, county: str | None = None, subtype: str | None = None, since: str | None = None, until: str | None = None, min_magnitude: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ExportChangesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream the change feed as CSV or JSON: one row per observed event, with the event date, the association it happened to (id, name, state, county), the event type, the changed field, and person-free old/new value summaries. The bulk form of /api/v1/changes for loading trigger events into a warehouse or CRM instead of polling pages.

**Plan:** Growth plan or higher, same as every bulk export, with the same per-tier row caps (Growth 50,000 · Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the change feed still applies: the exported date range is clamped exactly as /api/v1/changes clamps it.

- No officer names, ever. The export reads the same person-stripped view as /api/v1/changes: officer changes come back as seat counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter that widens this.
- The lookback window is your plan's change-feed window, applied server-side. The row cap is the bulk-export cap for your tier, not the per-request /api/v1/changes cap.
- One export = one request against your monthly quota, whatever the row count.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bulk_export.export_changes()
    # TODO: Handle 'response' of type ApiV1ExportChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportChangesErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_export.export_changes()
    # TODO: Handle 'response' of type ApiV1ExportChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format_</code> | <code>str \| None</code> | "csv" (default) or "json".<br>**Default**: <code>None</code> |
| <code>columns</code> | <code>str \| None</code> | Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid set.<br>**Default**: <code>None</code> |
| <code>kind</code> | <code>str \| None</code> | Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Comma-separated two-letter state codes.<br>**Default**: <code>None</code> |
| <code>county</code> | <code>str \| None</code> | Single county name, case-insensitive exact match.<br>**Default**: <code>None</code> |
| <code>subtype</code> | <code>str \| None</code> | One of "hoa", "condo", "coop".<br>**Default**: <code>None</code> |
| <code>since</code> | <code>str \| None</code> | Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not widen it.<br>**Default**: <code>None</code> |
| <code>until</code> | <code>str \| None</code> | Latest observation date, YYYY-MM-DD.<br>**Default**: <code>None</code> |
| <code>min_magnitude</code> | <code>float \| None</code> | Minimum change magnitude, 0 to 1.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExportChangesResponse](common_elements/models/api_v1_export_changes_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ExportChangesErrorBody](common_elements/errors/export_changes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ChangeFeed

> Source: [ChangeFeed](common_elements/apis/change_feed.py)

<details>
<summary><code>def changes(*, kind: str | None = None, state: str | None = None, county: str | None = None, subtype: str | None = None, since: str | None = None, until: str | None = None, min_units: float | None = None, max_units: float | None = None, min_magnitude: float | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ChangesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The trigger-event feed: board turnover, president changes, management-company moves, self-managed transitions, registration status and name changes, and license events across the association graph. This is the programmatic form of the change feed on data.commonelements.com, and the endpoint to poll when you want to act on a community the week something changed rather than re-download a static list.

**Plan:** Your plan sets the row cap, and a maximum lookback window (table below). Free keys: up to 50 rows per request; paid tiers raise the cap.

- No officer names, ever. The feed reads a person-stripped view by construction: officer changes come back as counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter that widens this.
- "total" in the pagination block is the count of matching rows inside your plan window, not the count in the whole dataset.
- With no kind named, the feed returns association events only. Contractor license events (license_added, license_lapsed) are a separate stream: name the kind to get them. The first time a board is observed is not a change and is never returned.
- Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your plan row cap in the table above. A free key therefore receives up to 50 rows per request within a 30-day window. When a response was shortened by the free cap it also carries a "row_cap" field in the envelope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.change_feed.changes()
    # TODO: Handle 'response' of type ApiV1ChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChangesErrorBody
```

**Async**

```python
try:
    response = await async_client.change_feed.changes()
    # TODO: Handle 'response' of type ApiV1ChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>kind</code> | <code>str \| None</code> | Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed, officer_added, officer_removed, officer_title_changed, management_company_changed, management_company_added, management_company_removed, self_managed_transition, entity_status_changed, entity_name_changed, license_added, license_lapsed. Omit for all kinds.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive.<br>**Default**: <code>None</code> |
| <code>county</code> | <code>str \| None</code> | Single county name, matched exactly as stored (e.g. "Miami-Dade").<br>**Default**: <code>None</code> |
| <code>subtype</code> | <code>str \| None</code> | One of "hoa", "condo", "coop".<br>**Default**: <code>None</code> |
| <code>since</code> | <code>str \| None</code> | Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not widen it. Available change history varies by source. Observation dates may differ from when changes took effect, and your plan's lookback window does not guarantee that much history.<br>**Default**: <code>None</code> |
| <code>until</code> | <code>str \| None</code> | Latest observation date, YYYY-MM-DD.<br>**Default**: <code>None</code> |
| <code>min_units</code> | <code>float \| None</code> | Only associations with at least this many units.<br>**Default**: <code>None</code> |
| <code>max_units</code> | <code>float \| None</code> | Only associations with at most this many units.<br>**Default**: <code>None</code> |
| <code>min_magnitude</code> | <code>float \| None</code> | Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed at once.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ChangesResponse](common_elements/models/api_v1_changes_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ChangesErrorBody](common_elements/errors/changes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def changes_summary(*, since: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ChangesSummaryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Counts by change kind over your window: how many events, across how many distinct associations, in how many states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing the dataset before committing to a plan.

**Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing. The lookback window is set by your plan, the same window /api/v1/changes uses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.change_feed.changes_summary()
    # TODO: Handle 'response' of type ApiV1ChangesSummaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChangesSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.change_feed.changes_summary()
    # TODO: Handle 'response' of type ApiV1ChangesSummaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChangesSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since</code> | <code>str \| None</code> | Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history varies by source. Observation dates may differ from when changes took effect, and your plan's lookback window does not guarantee that much history.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Comma-separated two-letter state codes. Omit for all states.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ChangesSummaryResponse](common_elements/models/api_v1_changes_summary_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ChangesSummaryErrorBody](common_elements/errors/changes_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CrossAssociationCollections

> Source: [CrossAssociationCollections](common_elements/apis/cross_association_collections.py)

<details>
<summary><code>def resource_collection_complaints(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ComplaintsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market context for an association's counterparties. Not a record about the association. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

- A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cross_association_collections.resource_collection_complaints()
    # TODO: Handle 'response' of type ApiV1ComplaintsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionComplaintsErrorBody
```

**Async**

```python
try:
    response = await async_client.cross_association_collections.resource_collection_complaints()
    # TODO: Handle 'response' of type ApiV1ComplaintsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionComplaintsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code.<br>**Default**: <code>None</code> |
| <code>county_fips</code> | <code>str \| None</code> | Five-digit county FIPS code.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Jurisdiction name as published by the source.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ComplaintsResponse](common_elements/models/api_v1_complaints_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceCollectionComplaintsErrorBody](common_elements/errors/resource_collection_complaints_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_collection_insurance_carriers(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1InsuranceCarriersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Carriers writing in the association market, by state, with their filings and market presence. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

- A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cross_association_collections.resource_collection_insurance_carriers()
    # TODO: Handle 'response' of type ApiV1InsuranceCarriersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionInsuranceCarriersErrorBody
```

**Async**

```python
try:
    response = await async_client.cross_association_collections.resource_collection_insurance_carriers()
    # TODO: Handle 'response' of type ApiV1InsuranceCarriersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionInsuranceCarriersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code.<br>**Default**: <code>None</code> |
| <code>county_fips</code> | <code>str \| None</code> | Five-digit county FIPS code.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Jurisdiction name as published by the source.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1InsuranceCarriersResponse](common_elements/models/api_v1_insurance_carriers_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceCollectionInsuranceCarriersErrorBody](common_elements/errors/resource_collection_insurance_carriers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_collection_legal_cases(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1LegalCasesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Litigation involving community associations across the corpus, filterable by state and date. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

- A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cross_association_collections.resource_collection_legal_cases()
    # TODO: Handle 'response' of type ApiV1LegalCasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionLegalCasesErrorBody
```

**Async**

```python
try:
    response = await async_client.cross_association_collections.resource_collection_legal_cases()
    # TODO: Handle 'response' of type ApiV1LegalCasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionLegalCasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code.<br>**Default**: <code>None</code> |
| <code>county_fips</code> | <code>str \| None</code> | Five-digit county FIPS code.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Jurisdiction name as published by the source.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1LegalCasesResponse](common_elements/models/api_v1_legal_cases_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceCollectionLegalCasesErrorBody](common_elements/errors/resource_collection_legal_cases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_collection_rate_filings(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1InsuranceRateFilingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Insurance rate filings by carrier and state: what carriers asked for, and when. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

- A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cross_association_collections.resource_collection_rate_filings()
    # TODO: Handle 'response' of type ApiV1InsuranceRateFilingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionRateFilingsErrorBody
```

**Async**

```python
try:
    response = await async_client.cross_association_collections.resource_collection_rate_filings()
    # TODO: Handle 'response' of type ApiV1InsuranceRateFilingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionRateFilingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code.<br>**Default**: <code>None</code> |
| <code>county_fips</code> | <code>str \| None</code> | Five-digit county FIPS code.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Jurisdiction name as published by the source.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1InsuranceRateFilingsResponse](common_elements/models/api_v1_insurance_rate_filings_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceCollectionRateFilingsErrorBody](common_elements/errors/resource_collection_rate_filings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resource_collection_storm_events(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1StormEventsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOAA storm events by county and date. The hazard history behind an association's exposure, queryable across the whole corpus. Live description, provenance and coverage caveat come from /api/v1/datasets.

**Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

- A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
- Read `meta.coverage` before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cross_association_collections.resource_collection_storm_events()
    # TODO: Handle 'response' of type ApiV1StormEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionStormEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.cross_association_collections.resource_collection_storm_events()
    # TODO: Handle 'response' of type ApiV1StormEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResourceCollectionStormEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>float \| None</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset, 0-100000 (default 0).<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>Date \| None</code> | Only records on or after this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>Date \| None</code> | Only records on or before this ISO date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code.<br>**Default**: <code>None</code> |
| <code>county_fips</code> | <code>str \| None</code> | Five-digit county FIPS code.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Jurisdiction name as published by the source.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StormEventsResponse](common_elements/models/api_v1_storm_events_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ResourceCollectionStormEventsErrorBody](common_elements/errors/resource_collection_storm_events_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatasetCatalog

> Source: [DatasetCatalog](common_elements/apis/dataset_catalog.py)

<details>
<summary><code>def datasets_association_index(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AssociationsDatasetsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What the platform holds for one association across every resource, in one round trip: record counts, how many of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call to make before deciding which resource endpoints are worth a request.

- Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the offer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset_catalog.datasets_association_index(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AssociationsDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatasetsAssociationIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.dataset_catalog.datasets_association_index(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1AssociationsDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatasetsAssociationIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Association id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsDatasetsResponse](common_elements/models/api_v1_associations_datasets_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DatasetsAssociationIndexErrorBody](common_elements/errors/datasets_association_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datasets_catalog(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1DatasetsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The resource catalog: every published resource and every source behind it, with display name, buyer summary, provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it. Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean record.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset_catalog.datasets_catalog()
    # TODO: Handle 'response' of type ApiV1DatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatasetsCatalogErrorBody
```

**Async**

```python
try:
    response = await async_client.dataset_catalog.datasets_catalog()
    # TODO: Handle 'response' of type ApiV1DatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatasetsCatalogErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DatasetsResponse](common_elements/models/api_v1_datasets_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[DatasetsCatalogErrorBody](common_elements/errors/datasets_catalog_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](common_elements/apis/meta.py)

<details>
<summary><code>def get_api_status(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live availability of the API and its database dependency, the current contract version, the supported-version table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails, so an uptime monitor sees a non-200. Public and unmetered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_api_status()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_api_status()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GetApiStatusErrorBody](common_elements/errors/get_api_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500, 503 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_data_dictionary(*, resource: str | None = None, fill_rates: FillRatesOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every resource and every field: type, meaning, source, how often the field is actually populated, how many rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are measured at request time and each carries the method that produced it — an estimate is never presented as exact.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_data_dictionary()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDataDictionaryErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_data_dictionary()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDataDictionaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource</code> | <code>str \| None</code> | Limit to one resource key, for example `associations`.<br>**Default**: <code>None</code> |
| <code>fill_rates</code> | <code>[FillRatesOrStr](common_elements/models/enums/fill_rates.py) \| None</code> | `1` (default) measures per-field fill rates from planner statistics; `0` skips them for a faster response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GetDataDictionaryErrorBody](common_elements/errors/get_data_dictionary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_key_usage(*, days: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What this key has spent this month, what remains, when it resets, which endpoints it called, and its most recent errors. Reads the plan from the database at request time. Does not consume quota.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_key_usage()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeyUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_key_usage()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeyUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | Days of daily history to return, 1-90. Default 30.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GetKeyUsageErrorBody](common_elements/errors/get_key_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_meta_index(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discovery document: every meta endpoint, what it is for, and whether it needs a key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_meta_index()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetaIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_meta_index()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetaIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GetMetaIndexErrorBody](common_elements/errors/get_meta_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_open_api_document(*, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation renders. `?format=yaml` returns YAML for gateways that require it. Public: no key needed, because an evaluator has to be able to import the spec before they have one. Presenting a key annotates the document with that key's plan and remaining quota.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_open_api_document()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOpenApiDocumentErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_open_api_document()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOpenApiDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format_</code> | <code>[FormatOrStr](common_elements/models/enums/format.py) \| None</code> | `json` (default) or `yaml`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GetOpenApiDocumentErrorBody](common_elements/errors/get_open_api_document_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sandbox_manifest(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client with no account, no plan and no quota consumption, then change the base URL and the key to go live.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_sandbox_manifest()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSandboxManifestErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_sandbox_manifest()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSandboxManifestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[GetSandboxManifestErrorBody](common_elements/errors/get_sandbox_manifest_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ProfessionalsAndLicenses

> Source: [ProfessionalsAndLicenses](common_elements/apis/professionals_and_licenses.py)

<details>
<summary><code>def licenses_verify(state: str, *, license_number: str | None = None, name: str | None = None, license_type: str | None = None, limit: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1LicensesVerifyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify a professional license against the state board roll by license number, or by name when you do not have the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can still be past its expiry date.

- Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date has already passed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.professionals_and_licenses.licenses_verify("some example string")
    # TODO: Handle 'response' of type ApiV1LicensesVerifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LicensesVerifyErrorBody
```

**Async**

```python
try:
    response = await async_client.professionals_and_licenses.licenses_verify("some example string")
    # TODO: Handle 'response' of type ApiV1LicensesVerifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LicensesVerifyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str</code> | Two-letter state code. |
| <code>license_number</code> | <code>str \| None</code> | Exact license number. Provide this or name.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Licensee name, substring match. Provide this or license_number.<br>**Default**: <code>None</code> |
| <code>license_type</code> | <code>str \| None</code> | Substring filter on license type, e.g. "CAM".<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max results, 1 to 25 (default 10).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1LicensesVerifyResponse](common_elements/models/api_v1_licenses_verify_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[LicensesVerifyErrorBody](common_elements/errors/licenses_verify_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def professionals_associations(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ProfessionalsAssociationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The communities a professional or firm is on record serving: the manager-to-portfolio view. Merges confirmed relationship edges with name-matched rows from the public management registry, de-duplicated, with the provenance of each row.

- Read the source field before treating a row as confirmed. A "relationship:" row is a confirmed edge in the graph; a "manager_view:" row is a name match against a public registry and carries the ambiguity of name matching.
- When the license has no linked organization (linked_org_id is null), only name-matched rows are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.professionals_and_licenses.professionals_associations("some example string")
    # TODO: Handle 'response' of type ApiV1ProfessionalsAssociationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfessionalsAssociationsErrorBody
```

**Async**

```python
try:
    response = await async_client.professionals_and_licenses.professionals_associations("some example string")
    # TODO: Handle 'response' of type ApiV1ProfessionalsAssociationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfessionalsAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | License record UUID, from the search endpoint. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfessionalsAssociationsResponse](common_elements/models/api_v1_professionals_associations_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ProfessionalsAssociationsErrorBody](common_elements/errors/professionals_associations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def professionals_detail(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ProfessionalsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The full single-record projection for one licensed professional or firm, including the city/county/zip of record and the linked Common Elements organization. The street address is not returned: a licence with no firm and no d/b/a is an individual, and that address is overwhelmingly a home.

- Business address of record only. No personal email or phone is returned by any Common Elements endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.professionals_and_licenses.professionals_detail("some example string")
    # TODO: Handle 'response' of type ApiV1ProfessionalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfessionalsDetailErrorBody
```

**Async**

```python
try:
    response = await async_client.professionals_and_licenses.professionals_detail("some example string")
    # TODO: Handle 'response' of type ApiV1ProfessionalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfessionalsDetailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | License record UUID, from the search endpoint. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfessionalsResponse](common_elements/models/api_v1_professionals_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ProfessionalsDetailErrorBody](common_elements/errors/professionals_detail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def professionals_search(*, q: str | None = None, state: str | None = None, license_type: str | None = None, board: str | None = None, status: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ProfessionalsSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the licensed professional graph: community association managers, contractors, engineers, and the firms they work under, from state licensing board rolls. Filter by name, state, license type, board, or status.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

- At least one of q, state, license_type, or board is required. The roll is multi-million rows and cannot be paged unfiltered. Omitting all four returns a 400.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.professionals_and_licenses.professionals_search()
    # TODO: Handle 'response' of type ApiV1ProfessionalsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfessionalsSearchErrorBody
```

**Async**

```python
try:
    response = await async_client.professionals_and_licenses.professionals_search()
    # TODO: Handle 'response' of type ApiV1ProfessionalsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfessionalsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Licensee name, substring match. Minimum 2 characters.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code.<br>**Default**: <code>None</code> |
| <code>license_type</code> | <code>str \| None</code> | Exact license type, e.g. "CAM".<br>**Default**: <code>None</code> |
| <code>board</code> | <code>str \| None</code> | Exact issuing board name.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Exact board status.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Rows to return, 1 to 100 (default 25).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfessionalsSearchResponse](common_elements/models/api_v1_professionals_search_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[ProfessionalsSearchErrorBody](common_elements/errors/professionals_search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Statutes

> Source: [Statutes](common_elements/apis/statutes.py)

<details>
<summary><code>def statutes_by_state(state: str, *, chapter: str | None = None, topic: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1StatutesByStateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.statutes.statutes_by_state("some example string")
    # TODO: Handle 'response' of type ApiV1StatutesByStateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatutesByStateErrorBody
```

**Async**

```python
try:
    response = await async_client.statutes.statutes_by_state("some example string")
    # TODO: Handle 'response' of type ApiV1StatutesByStateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatutesByStateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str</code> | Two-letter state code. |
| <code>chapter</code> | <code>str \| None</code> | Limit to one chapter number.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>str \| None</code> | Limit to sections tagged with this topic.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max results, 1 to 200 (default 100).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatutesByStateResponse](common_elements/models/api_v1_statutes_by_state_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[StatutesByStateErrorBody](common_elements/errors/statutes_by_state_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def statutes_search(q: str, *, state: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1StatutesSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind the statute search on commonelements.com, available programmatically.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.statutes.statutes_search("some example string")
    # TODO: Handle 'response' of type ApiV1StatutesSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatutesSearchErrorBody
```

**Async**

```python
try:
    response = await async_client.statutes.statutes_search("some example string")
    # TODO: Handle 'response' of type ApiV1StatutesSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatutesSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Search text, minimum 2 characters. |
| <code>state</code> | <code>str \| None</code> | Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max results, 1 to 25 (default 10).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatutesSearchResponse](common_elements/models/api_v1_statutes_search_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[StatutesSearchErrorBody](common_elements/errors/statutes_search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def statutes_section_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1StatutesSectionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The full text and metadata for one statute section, including its parent chapter and formatted citation. Follow-up call after search or by-state to read the section in full.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.statutes.statutes_section_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1StatutesSectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatutesSectionDetailErrorBody
```

**Async**

```python
try:
    response = await async_client.statutes.statutes_section_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1StatutesSectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatutesSectionDetailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Section id from search or by-state. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatutesSectionsResponse](common_elements/models/api_v1_statutes_sections_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[StatutesSectionDetailErrorBody](common_elements/errors/statutes_section_detail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](common_elements/apis/vendors.py)

<details>
<summary><code>def vendors_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1VendorsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The full public profile for one verified vendor: identity, self-reported service offerings, review summary, and the neutral, independently-sourced trust profile (workers' comp status, professional licenses, enforcement history) pulled from public records.

- Never returns private contact data, street address lines, phone, or email. That data does not exist on this endpoint at all, not merely hidden.
- Distinguish self-asserted from verified: description/services_offered/certifications/license_number are what the vendor states about itself; trust_profile is what public records independently confirm.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.vendors_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1VendorsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VendorsDetailErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.vendors_detail(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1VendorsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VendorsDetailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Vendor organization id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1VendorsResponse1](common_elements/models/api_v1_vendors_response1.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[VendorsDetailErrorBody](common_elements/errors/vendors_detail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vendors_list(*, q: str | None = None, state: str | None = None, category: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1VendorsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the public vendor directory: verified vendors only, ranked by review rating. Filter by name/description text, state (home or served), or service category.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

- Only verified vendors are listed. Coverage grows as vendors complete verification — see the note this endpoint returns on an empty result for the current count.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.vendors_list()
    # TODO: Handle 'response' of type ApiV1VendorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VendorsListErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.vendors_list()
    # TODO: Handle 'response' of type ApiV1VendorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VendorsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Free-text search over name and description.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code. Matches either the vendor's home state or a state it serves.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | A vendor-category slug, matched against the vendor's self-tagged service categories.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Max results per page. Free keys are capped at 50; paid tiers get a higher cap.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1VendorsResponse](common_elements/models/api_v1_vendors_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[VendorsListErrorBody](common_elements/errors/vendors_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vendors_reviews(id_: UUID, *, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1VendorsReviewsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each one is a verified-buyer review, not an open review anyone can post.

- Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection neutral.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.vendors_reviews(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1VendorsReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VendorsReviewsErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.vendors_reviews(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1VendorsReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VendorsReviewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Vendor organization id. |
| <code>limit</code> | <code>float \| None</code> | Max results, 1 to 100 (default 25).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Pagination offset (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](common_elements/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1VendorsReviewsResponse](common_elements/models/api_v1_vendors_reviews_response.py)</code> -- Success.

**OnError**: <code>[ApiError](common_elements/core/exceptions.py)&#91;[VendorsReviewsErrorBody](common_elements/errors/vendors_reviews_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](common_elements/models/error.py)</code> |
| anything unmapped | <code>[RawError](common_elements/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

