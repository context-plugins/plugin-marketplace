# Reference

> Source: [CommonElementsClient](src/client.ts)

## AggregatesAndCompliance

> Source: [AggregatesAndCompliance](src/resources/aggregates-and-compliance.ts)

<details>
<summary><code>complianceScan(request: AggregatesAndCompliance.ComplianceScanRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ComplianceScanResponse, AggregatesAndCompliance.ComplianceScanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a community association document for automated compliance analysis. Returns a structured assessment against Florida and multi-state statutory requirements, plus best-practice governance rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aggregatesAndCompliance.complianceScan({
    body: { text: "some example string", state: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1ComplianceScanResponse
} catch (err) {
  // TODO: Handle 'err' of type AggregatesAndCompliance.ComplianceScanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aggregatesAndCompliance
  .complianceScan({ body: { text: "some example string", state: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ComplianceScanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ComplianceScanRequest](src/models/api-v1-compliance-scan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aggregatesAndCompliance.complianceScan(request)`

- **OnSuccess**: <code>[ApiV1ComplianceScanResponse](src/models/api-v1-compliance-scan-response.ts)</code>
- **OnError**: throws <code>[AggregatesAndCompliance.ComplianceScanError](src/resources/aggregates-and-compliance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aggregatesAndCompliance.complianceScan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ComplianceScanResponse, AggregatesAndCompliance.ComplianceScanError&gt;</code>, with `result.value` of type <code>[ApiV1ComplianceScanResponse](src/models/api-v1-compliance-scan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>geoStateSummary(request?: AggregatesAndCompliance.GeoStateSummaryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GeoStateSummaryResponse, AggregatesAndCompliance.GeoStateSummaryError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aggregatesAndCompliance.geoStateSummary();
  // TODO: Handle 'response' of type ApiV1GeoStateSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type AggregatesAndCompliance.GeoStateSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aggregatesAndCompliance.geoStateSummary().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GeoStateSummaryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state?</code> | <code>string</code> | Two-letter state code. Omit for every state, ranked by association count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aggregatesAndCompliance.geoStateSummary(request)`

- **OnSuccess**: <code>[ApiV1GeoStateSummaryResponse](src/models/api-v1-geo-state-summary-response.ts)</code>
- **OnError**: throws <code>[AggregatesAndCompliance.GeoStateSummaryError](src/resources/aggregates-and-compliance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aggregatesAndCompliance.geoStateSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GeoStateSummaryResponse, AggregatesAndCompliance.GeoStateSummaryError&gt;</code>, with `result.value` of type <code>[ApiV1GeoStateSummaryResponse](src/models/api-v1-geo-state-summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AssociationResources

> Source: [AssociationResources](src/resources/association-resources.ts)

<details>
<summary><code>resourceAssociationDocuments(request: AssociationResources.ResourceAssociationDocumentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsDocumentsResponse, AssociationResources.ResourceAssociationDocumentsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationDocuments({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsDocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationDocuments({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsDocumentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationDocuments(request)`

- **OnSuccess**: <code>[ApiV1AssociationsDocumentsResponse](src/models/api-v1-associations-documents-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationDocumentsError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsDocumentsResponse, AssociationResources.ResourceAssociationDocumentsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsDocumentsResponse](src/models/api-v1-associations-documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationFinancials(request: AssociationResources.ResourceAssociationFinancialsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsFinancialsResponse, AssociationResources.ResourceAssociationFinancialsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationFinancials({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsFinancialsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationFinancialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationFinancials({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsFinancialsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationFinancials(request)`

- **OnSuccess**: <code>[ApiV1AssociationsFinancialsResponse](src/models/api-v1-associations-financials-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationFinancialsError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationFinancials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsFinancialsResponse, AssociationResources.ResourceAssociationFinancialsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsFinancialsResponse](src/models/api-v1-associations-financials-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationGovernance(request: AssociationResources.ResourceAssociationGovernanceRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsGovernanceResponse, AssociationResources.ResourceAssociationGovernanceError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationGovernance({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsGovernanceResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationGovernanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationGovernance({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsGovernanceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationGovernance(request)`

- **OnSuccess**: <code>[ApiV1AssociationsGovernanceResponse](src/models/api-v1-associations-governance-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationGovernanceError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationGovernance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsGovernanceResponse, AssociationResources.ResourceAssociationGovernanceError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsGovernanceResponse](src/models/api-v1-associations-governance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationHazards(request: AssociationResources.ResourceAssociationHazardsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsHazardsResponse, AssociationResources.ResourceAssociationHazardsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationHazards({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsHazardsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationHazardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationHazards({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsHazardsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationHazards(request)`

- **OnSuccess**: <code>[ApiV1AssociationsHazardsResponse](src/models/api-v1-associations-hazards-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationHazardsError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationHazards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsHazardsResponse, AssociationResources.ResourceAssociationHazardsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsHazardsResponse](src/models/api-v1-associations-hazards-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationInsurance(request: AssociationResources.ResourceAssociationInsuranceRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsInsuranceResponse, AssociationResources.ResourceAssociationInsuranceError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationInsurance({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsInsuranceResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationInsuranceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationInsurance({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsInsuranceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationInsurance(request)`

- **OnSuccess**: <code>[ApiV1AssociationsInsuranceResponse](src/models/api-v1-associations-insurance-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationInsuranceError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationInsurance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsInsuranceResponse, AssociationResources.ResourceAssociationInsuranceError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsInsuranceResponse](src/models/api-v1-associations-insurance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationLegal(request: AssociationResources.ResourceAssociationLegalRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsLegalResponse, AssociationResources.ResourceAssociationLegalError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationLegal({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsLegalResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationLegalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationLegal({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsLegalResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationLegal(request)`

- **OnSuccess**: <code>[ApiV1AssociationsLegalResponse](src/models/api-v1-associations-legal-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationLegalError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationLegal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsLegalResponse, AssociationResources.ResourceAssociationLegalError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsLegalResponse](src/models/api-v1-associations-legal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationParcels(request: AssociationResources.ResourceAssociationParcelsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsParcelsResponse, AssociationResources.ResourceAssociationParcelsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationParcels({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsParcelsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationParcelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationParcels({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsParcelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationParcels(request)`

- **OnSuccess**: <code>[ApiV1AssociationsParcelsResponse](src/models/api-v1-associations-parcels-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationParcelsError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationParcels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsParcelsResponse, AssociationResources.ResourceAssociationParcelsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsParcelsResponse](src/models/api-v1-associations-parcels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationPermits(request: AssociationResources.ResourceAssociationPermitsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsPermitsResponse, AssociationResources.ResourceAssociationPermitsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationPermits({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsPermitsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationPermitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationPermits({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsPermitsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationPermits(request)`

- **OnSuccess**: <code>[ApiV1AssociationsPermitsResponse](src/models/api-v1-associations-permits-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationPermitsError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationPermits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsPermitsResponse, AssociationResources.ResourceAssociationPermitsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsPermitsResponse](src/models/api-v1-associations-permits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationStructures(request: AssociationResources.ResourceAssociationStructuresRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsStructuresResponse, AssociationResources.ResourceAssociationStructuresError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationStructures({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsStructuresResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationStructuresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationStructures({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsStructuresResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationStructures(request)`

- **OnSuccess**: <code>[ApiV1AssociationsStructuresResponse](src/models/api-v1-associations-structures-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationStructuresError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationStructures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsStructuresResponse, AssociationResources.ResourceAssociationStructuresError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsStructuresResponse](src/models/api-v1-associations-structures-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceAssociationViolations(request: AssociationResources.ResourceAssociationViolationsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsViolationsResponse, AssociationResources.ResourceAssociationViolationsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associationResources.resourceAssociationViolations({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsViolationsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssociationResources.ResourceAssociationViolationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associationResources
  .resourceAssociationViolations({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsViolationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associationResources.resourceAssociationViolations(request)`

- **OnSuccess**: <code>[ApiV1AssociationsViolationsResponse](src/models/api-v1-associations-violations-response.ts)</code>
- **OnError**: throws <code>[AssociationResources.ResourceAssociationViolationsError](src/resources/association-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associationResources.resourceAssociationViolations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsViolationsResponse, AssociationResources.ResourceAssociationViolationsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsViolationsResponse](src/models/api-v1-associations-violations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Associations

> Source: [Associations](src/resources/associations.ts)

<details>
<summary><code>associationsBuildingSafety(request: Associations.AssociationsBuildingSafetyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsBuildingSafetyResponse, Associations.AssociationsBuildingSafetyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsBuildingSafety({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AssociationsBuildingSafetyResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsBuildingSafetyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsBuildingSafety({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsBuildingSafetyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association UUID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsBuildingSafety(request)`

- **OnSuccess**: <code>[ApiV1AssociationsBuildingSafetyResponse](src/models/api-v1-associations-building-safety-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsBuildingSafetyError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsBuildingSafety(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsBuildingSafetyResponse, Associations.AssociationsBuildingSafetyError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsBuildingSafetyResponse](src/models/api-v1-associations-building-safety-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsBuildings(request: Associations.AssociationsBuildingsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsBuildingsResponse, Associations.AssociationsBuildingsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsBuildings({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsBuildingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsBuildingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsBuildings({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsBuildingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsBuildings(request)`

- **OnSuccess**: <code>[ApiV1AssociationsBuildingsResponse](src/models/api-v1-associations-buildings-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsBuildingsError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsBuildings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsBuildingsResponse, Associations.AssociationsBuildingsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsBuildingsResponse](src/models/api-v1-associations-buildings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsByAddress(request: Associations.AssociationsByAddressRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsByAddressResponse, Associations.AssociationsByAddressError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsByAddress({
    address: "some example string",
    zip: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsByAddressResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsByAddressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsByAddress({ address: "some example string", zip: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsByAddressResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>address</code> | <code>string</code> | Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below. |
| <code>zip</code> | <code>string</code> | 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to the ZIP. |
| <code>limit?</code> | <code>number</code> | Max candidates to return, 1 to 5 (default 3). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsByAddress(request)`

- **OnSuccess**: <code>[ApiV1AssociationsByAddressResponse](src/models/api-v1-associations-by-address-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsByAddressError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsByAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsByAddressResponse, Associations.AssociationsByAddressError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsByAddressResponse](src/models/api-v1-associations-by-address-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsDetail(request: Associations.AssociationsDetailRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsResponse, Associations.AssociationsDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The core record for one association: identity, location, registration status, and management-firm-of-record, in one call. The starting point once you have an id from lookup, match, or nearby.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsDetail({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsDetail({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsDetail(request)`

- **OnSuccess**: <code>[ApiV1AssociationsResponse](src/models/api-v1-associations-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsDetailError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsResponse, Associations.AssociationsDetailError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsResponse](src/models/api-v1-associations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsLookup(request?: Associations.AssociationsLookupRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsLookupResponse, Associations.AssociationsLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse and filter community associations by state, county, subtype or registration number. For a name, `q` is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling names from your own system, use /api/v1/associations/match instead. If `q` is a street address, the request is resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use lookup when you hold an exact key: a registration number, or a real substring of the filed name.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsLookup();
  // TODO: Handle 'response' of type ApiV1AssociationsLookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations.associationsLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsLookupResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use /associations/match. A street address (with ZIP) is resolved as an address, not as a name. |
| <code>state?</code> | <code>string</code> | Two-letter state filter, e.g. "FL". |
| <code>subtype?</code> | <code>string</code> | One of "hoa", "condo", "coop". |
| <code>county?</code> | <code>string</code> | County filter, case-insensitive, e.g. "Broward" or "Pima". |
| <code>registrationNumber?</code> | <code>string</code> | Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...), case-insensitive. Returned as external_document_number. |
| <code>limit?</code> | <code>number</code> | Max results to return (default 20, max 100; free tier is clamped lower). |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsLookup(request)`

- **OnSuccess**: <code>[ApiV1AssociationsLookupResponse](src/models/api-v1-associations-lookup-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsLookupError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsLookupResponse, Associations.AssociationsLookupError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsLookupResponse](src/models/api-v1-associations-lookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsManagement(request: Associations.AssociationsManagementRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsManagementResponse, Associations.AssociationsManagementError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsManagement({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsManagementResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsManagementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsManagement({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsManagementResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsManagement(request)`

- **OnSuccess**: <code>[ApiV1AssociationsManagementResponse](src/models/api-v1-associations-management-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsManagementError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsManagement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsManagementResponse, Associations.AssociationsManagementError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsManagementResponse](src/models/api-v1-associations-management-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsMatch(request: Associations.AssociationsMatchRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsMatchResponse, Associations.AssociationsMatchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsMatch({
    q: "some example string",
    state: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsMatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsMatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsMatch({ q: "some example string", state: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsMatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a name. |
| <code>state</code> | <code>string</code> | Two-letter state code. Required; matching is scoped per state. |
| <code>county?</code> | <code>string</code> | Optional county filter, case-insensitive. |
| <code>minSimilarity?</code> | <code>number</code> | Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches. |
| <code>limit?</code> | <code>number</code> | Max candidates to return, 1 to 10 (default 5). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsMatch(request)`

- **OnSuccess**: <code>[ApiV1AssociationsMatchResponse](src/models/api-v1-associations-match-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsMatchError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsMatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsMatchResponse, Associations.AssociationsMatchError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsMatchResponse](src/models/api-v1-associations-match-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsNearby(request: Associations.AssociationsNearbyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsNearbyResponse, Associations.AssociationsNearbyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsNearby({ lat: 1.5, lng: 1.5 });
  // TODO: Handle 'response' of type ApiV1AssociationsNearbyResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsNearbyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations.associationsNearby({ lat: 1.5, lng: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsNearbyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>number</code> | Latitude, -90 to 90. |
| <code>lng</code> | <code>number</code> | Longitude, -180 to 180. |
| <code>radiusKm?</code> | <code>number</code> | Search radius in kilometres, 0.1 to 50 (default 2). |
| <code>subtype?</code> | <code>string</code> | One of "hoa", "condo", "coop". |
| <code>limit?</code> | <code>number</code> | Max results, 1 to 50 (default 20). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsNearby(request)`

- **OnSuccess**: <code>[ApiV1AssociationsNearbyResponse](src/models/api-v1-associations-nearby-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsNearbyError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsNearby(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsNearbyResponse, Associations.AssociationsNearbyError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsNearbyResponse](src/models/api-v1-associations-nearby-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsOfficers(request: Associations.AssociationsOfficersRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsOfficersResponse, Associations.AssociationsOfficersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsOfficers({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsOfficersResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsOfficersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations
  .associationsOfficers({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsOfficersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsOfficers(request)`

- **OnSuccess**: <code>[ApiV1AssociationsOfficersResponse](src/models/api-v1-associations-officers-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsOfficersError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsOfficers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsOfficersResponse, Associations.AssociationsOfficersError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsOfficersResponse](src/models/api-v1-associations-officers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsRisk(request: Associations.AssociationsRiskRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsRiskResponse, Associations.AssociationsRiskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for underwriting, due diligence, and loan origination workflows.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsRisk({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AssociationsRiskResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsRiskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations.associationsRisk({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsRiskResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association ID from the lookup endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsRisk(request)`

- **OnSuccess**: <code>[ApiV1AssociationsRiskResponse](src/models/api-v1-associations-risk-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsRiskError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsRisk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsRiskResponse, Associations.AssociationsRiskError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsRiskResponse](src/models/api-v1-associations-risk-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associationsVendors(request: Associations.AssociationsVendorsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsVendorsResponse, Associations.AssociationsVendorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The vendors and service providers an association is on record working with, from confirmed relationship edges in the Common Elements graph. Answers "who already services this community" before you bid against them or refer into them.

- Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the association self-performs the work.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.associations.associationsVendors({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AssociationsVendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Associations.AssociationsVendorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.associations.associationsVendors({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsVendorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association UUID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.associations.associationsVendors(request)`

- **OnSuccess**: <code>[ApiV1AssociationsVendorsResponse](src/models/api-v1-associations-vendors-response.ts)</code>
- **OnError**: throws <code>[Associations.AssociationsVendorsError](src/resources/associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.associations.associationsVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsVendorsResponse, Associations.AssociationsVendorsError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsVendorsResponse](src/models/api-v1-associations-vendors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BulkDelivery

> Source: [BulkDelivery](src/resources/bulk-delivery.ts)

<details>
<summary><code>deliveriesCancel(request: BulkDelivery.DeliveriesCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesResponse3, BulkDelivery.DeliveriesCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that skips the check.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesCancel({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1DeliveriesResponse3
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Delivery id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesCancel(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesResponse3](src/models/api-v1-deliveries-response3.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesCancelError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesResponse3, BulkDelivery.DeliveriesCancelError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesResponse3](src/models/api-v1-deliveries-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesCatalog(request?: BulkDelivery.DeliveriesCatalogRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesDatasetsResponse, BulkDelivery.DeliveriesCatalogError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for the key on this request — what your plan allows. Every dataset is listed, each carrying `available_to_you` and the reason when it is false. Add `?dataset=` for one dataset's full column dictionary.

- The dictionary returned here is the same document shipped inside each delivery, so a schema can be built against this endpoint before the first file arrives, and diffed afterwards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesCatalog();
  // TODO: Handle 'response' of type ApiV1DeliveriesDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesCatalogError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery.deliveriesCatalog().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset?</code> | <code>string</code> | Narrow to one dataset and include its full column dictionary. Without it the response carries column counts rather than every column. Current keys: associations, vendors, statutes, building-safety, report-card, changes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesCatalog(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesDatasetsResponse](src/models/api-v1-deliveries-datasets-response.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesCatalogError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesCatalog(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesDatasetsResponse, BulkDelivery.DeliveriesCatalogError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesDatasetsResponse](src/models/api-v1-deliveries-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesCreate(request: BulkDelivery.DeliveriesCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesResponse, BulkDelivery.DeliveriesCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesCreate({ body: { dataset: "some example string" } });
  // TODO: Handle 'response' of type ApiV1DeliveriesResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesCreate({ body: { dataset: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DeliveriesRequest](src/models/api-v1-deliveries-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesCreate(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesResponse](src/models/api-v1-deliveries-response.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesCreateError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesResponse, BulkDelivery.DeliveriesCreateError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesResponse](src/models/api-v1-deliveries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesDownload(request: BulkDelivery.DeliveriesDownloadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesDownloadResponse, BulkDelivery.DeliveriesDownloadError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesDownload({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1DeliveriesDownloadResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesDownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesDownload({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesDownloadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Delivery id. |
| <code>token?</code> | <code>string</code> | The artifact's capability token, as returned on the delivery's status. Use this when the consumer should not hold an API key. A token download does not consume your monthly request quota. |
| <code>part?</code> | <code>string</code> | `manifest` for the run's manifest or `dictionary` for its column dictionary, fetched through the same authorization. Omit for the data itself. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesDownload(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesDownloadResponse](src/models/api-v1-deliveries-download-response.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesDownloadError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesDownloadResponse, BulkDelivery.DeliveriesDownloadError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesDownloadResponse](src/models/api-v1-deliveries-download-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesList(options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesResponse1, BulkDelivery.DeliveriesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and download links while they are live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesList();
  // TODO: Handle 'response' of type ApiV1DeliveriesResponse1
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery.deliveriesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesList()`

- **OnSuccess**: <code>[ApiV1DeliveriesResponse1](src/models/api-v1-deliveries-response1.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesListError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesResponse1, BulkDelivery.DeliveriesListError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesResponse1](src/models/api-v1-deliveries-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesScheduleDelete(request: BulkDelivery.DeliveriesScheduleDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their retention window closes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesScheduleDelete({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesScheduleDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesScheduleDelete({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesSchedulesResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Schedule id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesScheduleDelete(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse3](src/models/api-v1-deliveries-schedules-response3.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesScheduleDeleteError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesScheduleDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleDeleteError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesSchedulesResponse3](src/models/api-v1-deliveries-schedules-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesScheduleDetail(request: BulkDelivery.DeliveriesScheduleDetailRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesSchedulesResponse2, BulkDelivery.DeliveriesScheduleDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One recurring delivery and its recent runs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesScheduleDetail({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse2
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesScheduleDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesScheduleDetail({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesSchedulesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Schedule id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesScheduleDetail(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse2](src/models/api-v1-deliveries-schedules-response2.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesScheduleDetailError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesScheduleDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesSchedulesResponse2, BulkDelivery.DeliveriesScheduleDetailError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesSchedulesResponse2](src/models/api-v1-deliveries-schedules-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesScheduleUpdate(request: BulkDelivery.DeliveriesScheduleUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.

- For a `changes` schedule the watermark is untouched by a pause, so the first run after resuming covers everything that happened while it slept — clamped, as always, by your plan's lookback window.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesScheduleUpdate({
    id: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesScheduleUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesScheduleUpdate({ id: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesSchedulesResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Schedule id. |
| <code>body</code> | <code>[ApiV1DeliveriesSchedulesRequest1](src/models/api-v1-deliveries-schedules-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesScheduleUpdate(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse3](src/models/api-v1-deliveries-schedules-response3.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesScheduleUpdateError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesScheduleUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleUpdateError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesSchedulesResponse3](src/models/api-v1-deliveries-schedules-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesSchedulesCreate(request: BulkDelivery.DeliveriesSchedulesCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesSchedulesResponse, BulkDelivery.DeliveriesSchedulesCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesSchedulesCreate({
    body: { dataset: "some example string", cadence: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesSchedulesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesSchedulesCreate({ body: { dataset: "some example string", cadence: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesSchedulesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DeliveriesSchedulesRequest](src/models/api-v1-deliveries-schedules-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesSchedulesCreate(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse](src/models/api-v1-deliveries-schedules-response.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesSchedulesCreateError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesSchedulesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesSchedulesResponse, BulkDelivery.DeliveriesSchedulesCreateError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesSchedulesResponse](src/models/api-v1-deliveries-schedules-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesSchedulesList(options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesSchedulesResponse1, BulkDelivery.DeliveriesSchedulesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesSchedulesList();
  // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse1
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesSchedulesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery.deliveriesSchedulesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesSchedulesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesSchedulesList()`

- **OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse1](src/models/api-v1-deliveries-schedules-response1.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesSchedulesListError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesSchedulesList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesSchedulesResponse1, BulkDelivery.DeliveriesSchedulesListError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesSchedulesResponse1](src/models/api-v1-deliveries-schedules-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliveriesStatus(request: BulkDelivery.DeliveriesStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DeliveriesResponse2, BulkDelivery.DeliveriesStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a machine-readable `error.code` with a message written for the person who has to decide what to do next.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkDelivery.deliveriesStatus({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1DeliveriesResponse2
} catch (err) {
  // TODO: Handle 'err' of type BulkDelivery.DeliveriesStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkDelivery
  .deliveriesStatus({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DeliveriesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Delivery id returned when the delivery was requested. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkDelivery.deliveriesStatus(request)`

- **OnSuccess**: <code>[ApiV1DeliveriesResponse2](src/models/api-v1-deliveries-response2.ts)</code>
- **OnError**: throws <code>[BulkDelivery.DeliveriesStatusError](src/resources/bulk-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkDelivery.deliveriesStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DeliveriesResponse2, BulkDelivery.DeliveriesStatusError&gt;</code>, with `result.value` of type <code>[ApiV1DeliveriesResponse2](src/models/api-v1-deliveries-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BulkExport

> Source: [BulkExport](src/resources/bulk-export.ts)

<details>
<summary><code>export(request: BulkExport.ExportRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ExportResponse, BulkExport.ExportError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkExport.export({ resource: "some example string" });
  // TODO: Handle 'response' of type ApiV1ExportResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkExport.ExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkExport.export({ resource: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ExportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource</code> | <code>string</code> | One of: associations, vendors, statutes, building-safety, report-card. |
| <code>format?</code> | <code>string</code> | "csv" (default) or "json". |
| <code>columns?</code> | <code>string</code> | Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid set for that resource. |
| <code>state?</code> | <code>string</code> | Two-letter state code. Every resource supports this filter. |
| <code>q?</code> | <code>string</code> | Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes). |
| <code>county?</code> | <code>string</code> | County filter. Supported by associations, vendors, and building-safety. |
| <code>subtype?</code> | <code>string</code> | "hoa", "condo", or "coop". Supported by associations and building-safety. |
| <code>category?</code> | <code>string</code> | Vendor category slug. Vendors only. |
| <code>unitMinUnitMax?</code> | <code>number</code> | Unit count range. Associations only. |
| <code>yearMinYearMax?</code> | <code>number</code> | Year-built range. Associations only. |
| <code>isClaimed?</code> | <code>boolean</code> | "true" or "false". Associations only. |
| <code>mgmt?</code> | <code>string</code> | Management firm name filter. Associations only. |
| <code>chapterTopic?</code> | <code>string</code> | Statutes only, same meaning as on /v1/statutes/by-state. |
| <code>sirsOnFileElevatorDelinquent?</code> | <code>boolean</code> | "true" or "false". Building-safety only. |
| <code>milestoneStatusPoolLastResult?</code> | <code>string</code> | Free-text, matches the source county/agency's own vocabulary. Building-safety only. |
| <code>hasSirsHasElevatorCert?</code> | <code>boolean</code> | "true" or "false". Report-card only. |
| <code>fhaStatus?</code> | <code>string</code> | Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only. |
| <code>minRiskMaxRisk?</code> | <code>number</code> | FEMA NRI county risk score range. Report-card only. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkExport.export(request)`

- **OnSuccess**: <code>[ApiV1ExportResponse](src/models/api-v1-export-response.ts)</code>
- **OnError**: throws <code>[BulkExport.ExportError](src/resources/bulk-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkExport.export(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ExportResponse, BulkExport.ExportError&gt;</code>, with `result.value` of type <code>[ApiV1ExportResponse](src/models/api-v1-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportChanges(request?: BulkExport.ExportChangesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ExportChangesResponse, BulkExport.ExportChangesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkExport.exportChanges();
  // TODO: Handle 'response' of type ApiV1ExportChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkExport.ExportChangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkExport.exportChanges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ExportChangesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format?</code> | <code>string</code> | "csv" (default) or "json". |
| <code>columns?</code> | <code>string</code> | Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid set. |
| <code>kind?</code> | <code>string</code> | Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds. |
| <code>state?</code> | <code>string</code> | Comma-separated two-letter state codes. |
| <code>county?</code> | <code>string</code> | Single county name, case-insensitive exact match. |
| <code>subtype?</code> | <code>string</code> | One of "hoa", "condo", "coop". |
| <code>since?</code> | <code>string</code> | Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not widen it. |
| <code>until?</code> | <code>string</code> | Latest observation date, YYYY-MM-DD. |
| <code>minMagnitude?</code> | <code>number</code> | Minimum change magnitude, 0 to 1. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkExport.exportChanges(request)`

- **OnSuccess**: <code>[ApiV1ExportChangesResponse](src/models/api-v1-export-changes-response.ts)</code>
- **OnError**: throws <code>[BulkExport.ExportChangesError](src/resources/bulk-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkExport.exportChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ExportChangesResponse, BulkExport.ExportChangesError&gt;</code>, with `result.value` of type <code>[ApiV1ExportChangesResponse](src/models/api-v1-export-changes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChangeFeed

> Source: [ChangeFeed](src/resources/change-feed.ts)

<details>
<summary><code>changes(request?: ChangeFeed.ChangesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ChangesResponse, ChangeFeed.ChangesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.changeFeed.changes();
  // TODO: Handle 'response' of type ApiV1ChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type ChangeFeed.ChangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.changeFeed.changes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ChangesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>kind?</code> | <code>string</code> | Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed, officer_added, officer_removed, officer_title_changed, management_company_changed, management_company_added, management_company_removed, self_managed_transition, entity_status_changed, entity_name_changed, license_added, license_lapsed. Omit for all kinds. |
| <code>state?</code> | <code>string</code> | Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive. |
| <code>county?</code> | <code>string</code> | Single county name, matched exactly as stored (e.g. "Miami-Dade"). |
| <code>subtype?</code> | <code>string</code> | One of "hoa", "condo", "coop". |
| <code>since?</code> | <code>string</code> | Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not widen it. Available change history varies by source. Observation dates may differ from when changes took effect, and your plan's lookback window does not guarantee that much history. |
| <code>until?</code> | <code>string</code> | Latest observation date, YYYY-MM-DD. |
| <code>minUnits?</code> | <code>number</code> | Only associations with at least this many units. |
| <code>maxUnits?</code> | <code>number</code> | Only associations with at most this many units. |
| <code>minMagnitude?</code> | <code>number</code> | Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed at once. |
| <code>limit?</code> | <code>number</code> | Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap. |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.changeFeed.changes(request)`

- **OnSuccess**: <code>[ApiV1ChangesResponse](src/models/api-v1-changes-response.ts)</code>
- **OnError**: throws <code>[ChangeFeed.ChangesError](src/resources/change-feed.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.changeFeed.changes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ChangesResponse, ChangeFeed.ChangesError&gt;</code>, with `result.value` of type <code>[ApiV1ChangesResponse](src/models/api-v1-changes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changesSummary(request?: ChangeFeed.ChangesSummaryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ChangesSummaryResponse, ChangeFeed.ChangesSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Counts by change kind over your window: how many events, across how many distinct associations, in how many states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing the dataset before committing to a plan.

**Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing. The lookback window is set by your plan, the same window /api/v1/changes uses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.changeFeed.changesSummary();
  // TODO: Handle 'response' of type ApiV1ChangesSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type ChangeFeed.ChangesSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.changeFeed.changesSummary().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ChangesSummaryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since?</code> | <code>string</code> | Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history varies by source. Observation dates may differ from when changes took effect, and your plan's lookback window does not guarantee that much history. |
| <code>state?</code> | <code>string</code> | Comma-separated two-letter state codes. Omit for all states. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.changeFeed.changesSummary(request)`

- **OnSuccess**: <code>[ApiV1ChangesSummaryResponse](src/models/api-v1-changes-summary-response.ts)</code>
- **OnError**: throws <code>[ChangeFeed.ChangesSummaryError](src/resources/change-feed.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.changeFeed.changesSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ChangesSummaryResponse, ChangeFeed.ChangesSummaryError&gt;</code>, with `result.value` of type <code>[ApiV1ChangesSummaryResponse](src/models/api-v1-changes-summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CrossAssociationCollections

> Source: [CrossAssociationCollections](src/resources/cross-association-collections.ts)

<details>
<summary><code>resourceCollectionComplaints(request?: CrossAssociationCollections.ResourceCollectionComplaintsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ComplaintsResponse, CrossAssociationCollections.ResourceCollectionComplaintsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crossAssociationCollections.resourceCollectionComplaints();
  // TODO: Handle 'response' of type ApiV1ComplaintsResponse
} catch (err) {
  // TODO: Handle 'err' of type CrossAssociationCollections.ResourceCollectionComplaintsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crossAssociationCollections.resourceCollectionComplaints().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ComplaintsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |
| <code>state?</code> | <code>string</code> | Two-letter state code. |
| <code>countyFips?</code> | <code>string</code> | Five-digit county FIPS code. |
| <code>jurisdiction?</code> | <code>string</code> | Jurisdiction name as published by the source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crossAssociationCollections.resourceCollectionComplaints(request)`

- **OnSuccess**: <code>[ApiV1ComplaintsResponse](src/models/api-v1-complaints-response.ts)</code>
- **OnError**: throws <code>[CrossAssociationCollections.ResourceCollectionComplaintsError](src/resources/cross-association-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crossAssociationCollections.resourceCollectionComplaints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ComplaintsResponse, CrossAssociationCollections.ResourceCollectionComplaintsError&gt;</code>, with `result.value` of type <code>[ApiV1ComplaintsResponse](src/models/api-v1-complaints-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceCollectionInsuranceCarriers(request?: CrossAssociationCollections.ResourceCollectionInsuranceCarriersRequest, options?: RequestOptions): ApiPromise&lt;ApiV1InsuranceCarriersResponse, CrossAssociationCollections.ResourceCollectionInsuranceCarriersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crossAssociationCollections.resourceCollectionInsuranceCarriers();
  // TODO: Handle 'response' of type ApiV1InsuranceCarriersResponse
} catch (err) {
  // TODO: Handle 'err' of type CrossAssociationCollections.ResourceCollectionInsuranceCarriersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crossAssociationCollections.resourceCollectionInsuranceCarriers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1InsuranceCarriersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |
| <code>state?</code> | <code>string</code> | Two-letter state code. |
| <code>countyFips?</code> | <code>string</code> | Five-digit county FIPS code. |
| <code>jurisdiction?</code> | <code>string</code> | Jurisdiction name as published by the source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crossAssociationCollections.resourceCollectionInsuranceCarriers(request)`

- **OnSuccess**: <code>[ApiV1InsuranceCarriersResponse](src/models/api-v1-insurance-carriers-response.ts)</code>
- **OnError**: throws <code>[CrossAssociationCollections.ResourceCollectionInsuranceCarriersError](src/resources/cross-association-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crossAssociationCollections.resourceCollectionInsuranceCarriers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1InsuranceCarriersResponse, CrossAssociationCollections.ResourceCollectionInsuranceCarriersError&gt;</code>, with `result.value` of type <code>[ApiV1InsuranceCarriersResponse](src/models/api-v1-insurance-carriers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceCollectionLegalCases(request?: CrossAssociationCollections.ResourceCollectionLegalCasesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1LegalCasesResponse, CrossAssociationCollections.ResourceCollectionLegalCasesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crossAssociationCollections.resourceCollectionLegalCases();
  // TODO: Handle 'response' of type ApiV1LegalCasesResponse
} catch (err) {
  // TODO: Handle 'err' of type CrossAssociationCollections.ResourceCollectionLegalCasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crossAssociationCollections.resourceCollectionLegalCases().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1LegalCasesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |
| <code>state?</code> | <code>string</code> | Two-letter state code. |
| <code>countyFips?</code> | <code>string</code> | Five-digit county FIPS code. |
| <code>jurisdiction?</code> | <code>string</code> | Jurisdiction name as published by the source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crossAssociationCollections.resourceCollectionLegalCases(request)`

- **OnSuccess**: <code>[ApiV1LegalCasesResponse](src/models/api-v1-legal-cases-response.ts)</code>
- **OnError**: throws <code>[CrossAssociationCollections.ResourceCollectionLegalCasesError](src/resources/cross-association-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crossAssociationCollections.resourceCollectionLegalCases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1LegalCasesResponse, CrossAssociationCollections.ResourceCollectionLegalCasesError&gt;</code>, with `result.value` of type <code>[ApiV1LegalCasesResponse](src/models/api-v1-legal-cases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceCollectionRateFilings(request?: CrossAssociationCollections.ResourceCollectionRateFilingsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1InsuranceRateFilingsResponse, CrossAssociationCollections.ResourceCollectionRateFilingsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crossAssociationCollections.resourceCollectionRateFilings();
  // TODO: Handle 'response' of type ApiV1InsuranceRateFilingsResponse
} catch (err) {
  // TODO: Handle 'err' of type CrossAssociationCollections.ResourceCollectionRateFilingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crossAssociationCollections.resourceCollectionRateFilings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1InsuranceRateFilingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |
| <code>state?</code> | <code>string</code> | Two-letter state code. |
| <code>countyFips?</code> | <code>string</code> | Five-digit county FIPS code. |
| <code>jurisdiction?</code> | <code>string</code> | Jurisdiction name as published by the source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crossAssociationCollections.resourceCollectionRateFilings(request)`

- **OnSuccess**: <code>[ApiV1InsuranceRateFilingsResponse](src/models/api-v1-insurance-rate-filings-response.ts)</code>
- **OnError**: throws <code>[CrossAssociationCollections.ResourceCollectionRateFilingsError](src/resources/cross-association-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crossAssociationCollections.resourceCollectionRateFilings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1InsuranceRateFilingsResponse, CrossAssociationCollections.ResourceCollectionRateFilingsError&gt;</code>, with `result.value` of type <code>[ApiV1InsuranceRateFilingsResponse](src/models/api-v1-insurance-rate-filings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resourceCollectionStormEvents(request?: CrossAssociationCollections.ResourceCollectionStormEventsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StormEventsResponse, CrossAssociationCollections.ResourceCollectionStormEventsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crossAssociationCollections.resourceCollectionStormEvents();
  // TODO: Handle 'response' of type ApiV1StormEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type CrossAssociationCollections.ResourceCollectionStormEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crossAssociationCollections.resourceCollectionStormEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StormEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's `meta` block reports what was actually applied. |
| <code>offset?</code> | <code>number</code> | Pagination offset, 0-100000 (default 0). |
| <code>source?</code> | <code>string</code> | Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys are listed by /api/v1/datasets. |
| <code>since?</code> | <code>string</code> (date) | Only records on or after this ISO date (YYYY-MM-DD). |
| <code>until?</code> | <code>string</code> (date) | Only records on or before this ISO date (YYYY-MM-DD). |
| <code>state?</code> | <code>string</code> | Two-letter state code. |
| <code>countyFips?</code> | <code>string</code> | Five-digit county FIPS code. |
| <code>jurisdiction?</code> | <code>string</code> | Jurisdiction name as published by the source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crossAssociationCollections.resourceCollectionStormEvents(request)`

- **OnSuccess**: <code>[ApiV1StormEventsResponse](src/models/api-v1-storm-events-response.ts)</code>
- **OnError**: throws <code>[CrossAssociationCollections.ResourceCollectionStormEventsError](src/resources/cross-association-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crossAssociationCollections.resourceCollectionStormEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StormEventsResponse, CrossAssociationCollections.ResourceCollectionStormEventsError&gt;</code>, with `result.value` of type <code>[ApiV1StormEventsResponse](src/models/api-v1-storm-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatasetCatalog

> Source: [DatasetCatalog](src/resources/dataset-catalog.ts)

<details>
<summary><code>datasetsAssociationIndex(request: DatasetCatalog.DatasetsAssociationIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AssociationsDatasetsResponse, DatasetCatalog.DatasetsAssociationIndexError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What the platform holds for one association across every resource, in one round trip: record counts, how many of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call to make before deciding which resource endpoints are worth a request.

- Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the offer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasetCatalog.datasetsAssociationIndex({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1AssociationsDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type DatasetCatalog.DatasetsAssociationIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetCatalog
  .datasetsAssociationIndex({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AssociationsDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Association id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasetCatalog.datasetsAssociationIndex(request)`

- **OnSuccess**: <code>[ApiV1AssociationsDatasetsResponse](src/models/api-v1-associations-datasets-response.ts)</code>
- **OnError**: throws <code>[DatasetCatalog.DatasetsAssociationIndexError](src/resources/dataset-catalog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetCatalog.datasetsAssociationIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AssociationsDatasetsResponse, DatasetCatalog.DatasetsAssociationIndexError&gt;</code>, with `result.value` of type <code>[ApiV1AssociationsDatasetsResponse](src/models/api-v1-associations-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetsCatalog(options?: RequestOptions): ApiPromise&lt;ApiV1DatasetsResponse, DatasetCatalog.DatasetsCatalogError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The resource catalog: every published resource and every source behind it, with display name, buyer summary, provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it. Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasetCatalog.datasetsCatalog();
  // TODO: Handle 'response' of type ApiV1DatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type DatasetCatalog.DatasetsCatalogError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetCatalog.datasetsCatalog().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasetCatalog.datasetsCatalog()`

- **OnSuccess**: <code>[ApiV1DatasetsResponse](src/models/api-v1-datasets-response.ts)</code>
- **OnError**: throws <code>[DatasetCatalog.DatasetsCatalogError](src/resources/dataset-catalog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetCatalog.datasetsCatalog().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DatasetsResponse, DatasetCatalog.DatasetsCatalogError&gt;</code>, with `result.value` of type <code>[ApiV1DatasetsResponse](src/models/api-v1-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/resources/meta.ts)

<details>
<summary><code>getApiStatus(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Meta.GetApiStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live availability of the API and its database dependency, the current contract version, the supported-version table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails, so an uptime monitor sees a non-200. Public and unmetered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getApiStatus();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetApiStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getApiStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getApiStatus()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Meta.GetApiStatusError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getApiStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Meta.GetApiStatusError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDataDictionary(request?: Meta.GetDataDictionaryRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Meta.GetDataDictionaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every resource and every field: type, meaning, source, how often the field is actually populated, how many rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are measured at request time and each carries the method that produced it — an estimate is never presented as exact.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getDataDictionary();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetDataDictionaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getDataDictionary().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource?</code> | <code>string</code> | Limit to one resource key, for example `associations`. |
| <code>fillRates?</code> | <code>[FillRates](src/models/fill-rates.ts)</code> | `1` (default) measures per-field fill rates from planner statistics; `0` skips them for a faster response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getDataDictionary(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Meta.GetDataDictionaryError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getDataDictionary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Meta.GetDataDictionaryError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKeyUsage(request?: Meta.GetKeyUsageRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Meta.GetKeyUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What this key has spent this month, what remains, when it resets, which endpoints it called, and its most recent errors. Reads the plan from the database at request time. Does not consume quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getKeyUsage();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetKeyUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getKeyUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days?</code> | <code>number</code> | Days of daily history to return, 1-90. Default 30. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getKeyUsage(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Meta.GetKeyUsageError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getKeyUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Meta.GetKeyUsageError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetaIndex(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Meta.GetMetaIndexError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discovery document: every meta endpoint, what it is for, and whether it needs a key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getMetaIndex();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetMetaIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getMetaIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getMetaIndex()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Meta.GetMetaIndexError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getMetaIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Meta.GetMetaIndexError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOpenApiDocument(request?: Meta.GetOpenApiDocumentRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Meta.GetOpenApiDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation renders. `?format=yaml` returns YAML for gateways that require it. Public: no key needed, because an evaluator has to be able to import the spec before they have one. Presenting a key annotates the document with that key's plan and remaining quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getOpenApiDocument();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetOpenApiDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getOpenApiDocument().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | `json` (default) or `yaml`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getOpenApiDocument(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Meta.GetOpenApiDocumentError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getOpenApiDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Meta.GetOpenApiDocumentError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSandboxManifest(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Meta.GetSandboxManifestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client with no account, no plan and no quota consumption, then change the base URL and the key to go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getSandboxManifest();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetSandboxManifestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getSandboxManifest().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getSandboxManifest()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Meta.GetSandboxManifestError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getSandboxManifest().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Meta.GetSandboxManifestError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProfessionalsAndLicenses

> Source: [ProfessionalsAndLicenses](src/resources/professionals-and-licenses.ts)

<details>
<summary><code>licensesVerify(request: ProfessionalsAndLicenses.LicensesVerifyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1LicensesVerifyResponse, ProfessionalsAndLicenses.LicensesVerifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify a professional license against the state board roll by license number, or by name when you do not have the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can still be past its expiry date.

- Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date has already passed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.professionalsAndLicenses.licensesVerify({ state: "some example string" });
  // TODO: Handle 'response' of type ApiV1LicensesVerifyResponse
} catch (err) {
  // TODO: Handle 'err' of type ProfessionalsAndLicenses.LicensesVerifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.professionalsAndLicenses
  .licensesVerify({ state: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1LicensesVerifyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>string</code> | Two-letter state code. |
| <code>licenseNumber?</code> | <code>string</code> | Exact license number. Provide this or name. |
| <code>name?</code> | <code>string</code> | Licensee name, substring match. Provide this or license_number. |
| <code>licenseType?</code> | <code>string</code> | Substring filter on license type, e.g. "CAM". |
| <code>limit?</code> | <code>number</code> | Max results, 1 to 25 (default 10). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.professionalsAndLicenses.licensesVerify(request)`

- **OnSuccess**: <code>[ApiV1LicensesVerifyResponse](src/models/api-v1-licenses-verify-response.ts)</code>
- **OnError**: throws <code>[ProfessionalsAndLicenses.LicensesVerifyError](src/resources/professionals-and-licenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.professionalsAndLicenses.licensesVerify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1LicensesVerifyResponse, ProfessionalsAndLicenses.LicensesVerifyError&gt;</code>, with `result.value` of type <code>[ApiV1LicensesVerifyResponse](src/models/api-v1-licenses-verify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>professionalsAssociations(request: ProfessionalsAndLicenses.ProfessionalsAssociationsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ProfessionalsAssociationsResponse, ProfessionalsAndLicenses.ProfessionalsAssociationsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.professionalsAndLicenses.professionalsAssociations({
    id: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ProfessionalsAssociationsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProfessionalsAndLicenses.ProfessionalsAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.professionalsAndLicenses
  .professionalsAssociations({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ProfessionalsAssociationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | License record UUID, from the search endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.professionalsAndLicenses.professionalsAssociations(request)`

- **OnSuccess**: <code>[ApiV1ProfessionalsAssociationsResponse](src/models/api-v1-professionals-associations-response.ts)</code>
- **OnError**: throws <code>[ProfessionalsAndLicenses.ProfessionalsAssociationsError](src/resources/professionals-and-licenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.professionalsAndLicenses.professionalsAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ProfessionalsAssociationsResponse, ProfessionalsAndLicenses.ProfessionalsAssociationsError&gt;</code>, with `result.value` of type <code>[ApiV1ProfessionalsAssociationsResponse](src/models/api-v1-professionals-associations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>professionalsDetail(request: ProfessionalsAndLicenses.ProfessionalsDetailRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ProfessionalsResponse, ProfessionalsAndLicenses.ProfessionalsDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The full single-record projection for one licensed professional or firm, including the city/county/zip of record and the linked Common Elements organization. The street address is not returned: a licence with no firm and no d/b/a is an individual, and that address is overwhelmingly a home.

- Business address of record only. No personal email or phone is returned by any Common Elements endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.professionalsAndLicenses.professionalsDetail({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ProfessionalsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProfessionalsAndLicenses.ProfessionalsDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.professionalsAndLicenses
  .professionalsDetail({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ProfessionalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | License record UUID, from the search endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.professionalsAndLicenses.professionalsDetail(request)`

- **OnSuccess**: <code>[ApiV1ProfessionalsResponse](src/models/api-v1-professionals-response.ts)</code>
- **OnError**: throws <code>[ProfessionalsAndLicenses.ProfessionalsDetailError](src/resources/professionals-and-licenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.professionalsAndLicenses.professionalsDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ProfessionalsResponse, ProfessionalsAndLicenses.ProfessionalsDetailError&gt;</code>, with `result.value` of type <code>[ApiV1ProfessionalsResponse](src/models/api-v1-professionals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>professionalsSearch(request?: ProfessionalsAndLicenses.ProfessionalsSearchRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ProfessionalsSearchResponse, ProfessionalsAndLicenses.ProfessionalsSearchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.professionalsAndLicenses.professionalsSearch();
  // TODO: Handle 'response' of type ApiV1ProfessionalsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProfessionalsAndLicenses.ProfessionalsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.professionalsAndLicenses.professionalsSearch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ProfessionalsSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Licensee name, substring match. Minimum 2 characters. |
| <code>state?</code> | <code>string</code> | Two-letter state code. |
| <code>licenseType?</code> | <code>string</code> | Exact license type, e.g. "CAM". |
| <code>board?</code> | <code>string</code> | Exact issuing board name. |
| <code>status?</code> | <code>string</code> | Exact board status. |
| <code>limit?</code> | <code>number</code> | Rows to return, 1 to 100 (default 25). |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.professionalsAndLicenses.professionalsSearch(request)`

- **OnSuccess**: <code>[ApiV1ProfessionalsSearchResponse](src/models/api-v1-professionals-search-response.ts)</code>
- **OnError**: throws <code>[ProfessionalsAndLicenses.ProfessionalsSearchError](src/resources/professionals-and-licenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.professionalsAndLicenses.professionalsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ProfessionalsSearchResponse, ProfessionalsAndLicenses.ProfessionalsSearchError&gt;</code>, with `result.value` of type <code>[ApiV1ProfessionalsSearchResponse](src/models/api-v1-professionals-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Statutes

> Source: [Statutes](src/resources/statutes.ts)

<details>
<summary><code>statutesByState(request: Statutes.StatutesByStateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StatutesByStateResponse, Statutes.StatutesByStateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statutes.statutesByState({ state: "some example string" });
  // TODO: Handle 'response' of type ApiV1StatutesByStateResponse
} catch (err) {
  // TODO: Handle 'err' of type Statutes.StatutesByStateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statutes.statutesByState({ state: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StatutesByStateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>string</code> | Two-letter state code. |
| <code>chapter?</code> | <code>string</code> | Limit to one chapter number. |
| <code>topic?</code> | <code>string</code> | Limit to sections tagged with this topic. |
| <code>limit?</code> | <code>number</code> | Max results, 1 to 200 (default 100). |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statutes.statutesByState(request)`

- **OnSuccess**: <code>[ApiV1StatutesByStateResponse](src/models/api-v1-statutes-by-state-response.ts)</code>
- **OnError**: throws <code>[Statutes.StatutesByStateError](src/resources/statutes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statutes.statutesByState(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StatutesByStateResponse, Statutes.StatutesByStateError&gt;</code>, with `result.value` of type <code>[ApiV1StatutesByStateResponse](src/models/api-v1-statutes-by-state-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statutesSearch(request: Statutes.StatutesSearchRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StatutesSearchResponse, Statutes.StatutesSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind the statute search on commonelements.com, available programmatically.

**Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statutes.statutesSearch({ q: "some example string" });
  // TODO: Handle 'response' of type ApiV1StatutesSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Statutes.StatutesSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statutes.statutesSearch({ q: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StatutesSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | Search text, minimum 2 characters. |
| <code>state?</code> | <code>string</code> | Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction. |
| <code>limit?</code> | <code>number</code> | Max results, 1 to 25 (default 10). |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statutes.statutesSearch(request)`

- **OnSuccess**: <code>[ApiV1StatutesSearchResponse](src/models/api-v1-statutes-search-response.ts)</code>
- **OnError**: throws <code>[Statutes.StatutesSearchError](src/resources/statutes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statutes.statutesSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StatutesSearchResponse, Statutes.StatutesSearchError&gt;</code>, with `result.value` of type <code>[ApiV1StatutesSearchResponse](src/models/api-v1-statutes-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statutesSectionDetail(request: Statutes.StatutesSectionDetailRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StatutesSectionsResponse, Statutes.StatutesSectionDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The full text and metadata for one statute section, including its parent chapter and formatted citation. Follow-up call after search or by-state to read the section in full.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statutes.statutesSectionDetail({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1StatutesSectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Statutes.StatutesSectionDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statutes
  .statutesSectionDetail({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StatutesSectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Section id from search or by-state. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statutes.statutesSectionDetail(request)`

- **OnSuccess**: <code>[ApiV1StatutesSectionsResponse](src/models/api-v1-statutes-sections-response.ts)</code>
- **OnError**: throws <code>[Statutes.StatutesSectionDetailError](src/resources/statutes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statutes.statutesSectionDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StatutesSectionsResponse, Statutes.StatutesSectionDetailError&gt;</code>, with `result.value` of type <code>[ApiV1StatutesSectionsResponse](src/models/api-v1-statutes-sections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/resources/vendors.ts)

<details>
<summary><code>vendorsDetail(request: Vendors.VendorsDetailRequest, options?: RequestOptions): ApiPromise&lt;ApiV1VendorsResponse1, Vendors.VendorsDetailError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.vendorsDetail({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1VendorsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Vendors.VendorsDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .vendorsDetail({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1VendorsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Vendor organization id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.vendorsDetail(request)`

- **OnSuccess**: <code>[ApiV1VendorsResponse1](src/models/api-v1-vendors-response1.ts)</code>
- **OnError**: throws <code>[Vendors.VendorsDetailError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.vendorsDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1VendorsResponse1, Vendors.VendorsDetailError&gt;</code>, with `result.value` of type <code>[ApiV1VendorsResponse1](src/models/api-v1-vendors-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vendorsList(request?: Vendors.VendorsListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1VendorsResponse, Vendors.VendorsListError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.vendorsList();
  // TODO: Handle 'response' of type ApiV1VendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Vendors.VendorsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.vendorsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1VendorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Free-text search over name and description. |
| <code>state?</code> | <code>string</code> | Two-letter state code. Matches either the vendor's home state or a state it serves. |
| <code>category?</code> | <code>string</code> | A vendor-category slug, matched against the vendor's self-tagged service categories. |
| <code>limit?</code> | <code>number</code> | Max results per page. Free keys are capped at 50; paid tiers get a higher cap. |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.vendorsList(request)`

- **OnSuccess**: <code>[ApiV1VendorsResponse](src/models/api-v1-vendors-response.ts)</code>
- **OnError**: throws <code>[Vendors.VendorsListError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.vendorsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1VendorsResponse, Vendors.VendorsListError&gt;</code>, with `result.value` of type <code>[ApiV1VendorsResponse](src/models/api-v1-vendors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vendorsReviews(request: Vendors.VendorsReviewsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1VendorsReviewsResponse, Vendors.VendorsReviewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each one is a verified-buyer review, not an open review anyone can post.

- Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection neutral.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.vendorsReviews({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1VendorsReviewsResponse
} catch (err) {
  // TODO: Handle 'err' of type Vendors.VendorsReviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .vendorsReviews({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1VendorsReviewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Vendor organization id. |
| <code>limit?</code> | <code>number</code> | Max results, 1 to 100 (default 25). |
| <code>offset?</code> | <code>number</code> | Pagination offset (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.vendorsReviews(request)`

- **OnSuccess**: <code>[ApiV1VendorsReviewsResponse](src/models/api-v1-vendors-reviews-response.ts)</code>
- **OnError**: throws <code>[Vendors.VendorsReviewsError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.vendorsReviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1VendorsReviewsResponse, Vendors.VendorsReviewsError&gt;</code>, with `result.value` of type <code>[ApiV1VendorsReviewsResponse](src/models/api-v1-vendors-reviews-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CommonElementsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

