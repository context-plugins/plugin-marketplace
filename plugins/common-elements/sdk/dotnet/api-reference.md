# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CommonElementsClient](src/CommonElements/CommonElementsClient.cs)

## AggregatesAndCompliance

> Source: [AggregatesAndCompliance](src/CommonElements/Api/AggregatesAndCompliance.cs)

<details>
<summary><code>Task&lt;ApiV1ComplianceScanResponse&gt; ComplianceScan(ComplianceScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AggregatesAndCompliance.ComplianceScan(new ComplianceScanRequest
    {
        Body = new ApiV1ComplianceScanRequest { Text = "some example string", State = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ComplianceScanResponse
}
catch (ApiException<ComplianceScanError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ComplianceScanRequest](src/CommonElements/Requests/AggregatesAndCompliance/ComplianceScanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ComplianceScanResponse](src/CommonElements/Models/ApiV1ComplianceScanResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ComplianceScanError](src/CommonElements/Errors/ComplianceScanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GeoStateSummaryResponse&gt; GeoStateSummary(GeoStateSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AggregatesAndCompliance.GeoStateSummary(new GeoStateSummaryRequest());
    // TODO: Handle 'response' of type ApiV1GeoStateSummaryResponse
}
catch (ApiException<GeoStateSummaryError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GeoStateSummaryRequest](src/CommonElements/Requests/AggregatesAndCompliance/GeoStateSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GeoStateSummaryResponse](src/CommonElements/Models/ApiV1GeoStateSummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GeoStateSummaryError](src/CommonElements/Errors/GeoStateSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AssociationResources

> Source: [AssociationResources](src/CommonElements/Api/AssociationResources.cs)

<details>
<summary><code>Task&lt;ApiV1AssociationsDocumentsResponse&gt; ResourceAssociationDocuments(ResourceAssociationDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationDocuments(
        new ResourceAssociationDocumentsRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1AssociationsDocumentsResponse
}
catch (ApiException<ResourceAssociationDocumentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationDocumentsRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsDocumentsResponse](src/CommonElements/Models/ApiV1AssociationsDocumentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationDocumentsError](src/CommonElements/Errors/ResourceAssociationDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsFinancialsResponse&gt; ResourceAssociationFinancials(ResourceAssociationFinancialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationFinancials(
        new ResourceAssociationFinancialsRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1AssociationsFinancialsResponse
}
catch (ApiException<ResourceAssociationFinancialsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationFinancialsRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationFinancialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsFinancialsResponse](src/CommonElements/Models/ApiV1AssociationsFinancialsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationFinancialsError](src/CommonElements/Errors/ResourceAssociationFinancialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsGovernanceResponse&gt; ResourceAssociationGovernance(ResourceAssociationGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationGovernance(
        new ResourceAssociationGovernanceRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1AssociationsGovernanceResponse
}
catch (ApiException<ResourceAssociationGovernanceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationGovernanceRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationGovernanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsGovernanceResponse](src/CommonElements/Models/ApiV1AssociationsGovernanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationGovernanceError](src/CommonElements/Errors/ResourceAssociationGovernanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsHazardsResponse&gt; ResourceAssociationHazards(ResourceAssociationHazardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationHazards(new ResourceAssociationHazardsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsHazardsResponse
}
catch (ApiException<ResourceAssociationHazardsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationHazardsRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationHazardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsHazardsResponse](src/CommonElements/Models/ApiV1AssociationsHazardsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationHazardsError](src/CommonElements/Errors/ResourceAssociationHazardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsInsuranceResponse&gt; ResourceAssociationInsurance(ResourceAssociationInsuranceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationInsurance(
        new ResourceAssociationInsuranceRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1AssociationsInsuranceResponse
}
catch (ApiException<ResourceAssociationInsuranceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationInsuranceRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationInsuranceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsInsuranceResponse](src/CommonElements/Models/ApiV1AssociationsInsuranceResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationInsuranceError](src/CommonElements/Errors/ResourceAssociationInsuranceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsLegalResponse&gt; ResourceAssociationLegal(ResourceAssociationLegalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationLegal(new ResourceAssociationLegalRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsLegalResponse
}
catch (ApiException<ResourceAssociationLegalError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationLegalRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationLegalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsLegalResponse](src/CommonElements/Models/ApiV1AssociationsLegalResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationLegalError](src/CommonElements/Errors/ResourceAssociationLegalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsParcelsResponse&gt; ResourceAssociationParcels(ResourceAssociationParcelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationParcels(new ResourceAssociationParcelsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsParcelsResponse
}
catch (ApiException<ResourceAssociationParcelsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationParcelsRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationParcelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsParcelsResponse](src/CommonElements/Models/ApiV1AssociationsParcelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationParcelsError](src/CommonElements/Errors/ResourceAssociationParcelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsPermitsResponse&gt; ResourceAssociationPermits(ResourceAssociationPermitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationPermits(new ResourceAssociationPermitsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsPermitsResponse
}
catch (ApiException<ResourceAssociationPermitsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationPermitsRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationPermitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsPermitsResponse](src/CommonElements/Models/ApiV1AssociationsPermitsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationPermitsError](src/CommonElements/Errors/ResourceAssociationPermitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsStructuresResponse&gt; ResourceAssociationStructures(ResourceAssociationStructuresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationStructures(
        new ResourceAssociationStructuresRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1AssociationsStructuresResponse
}
catch (ApiException<ResourceAssociationStructuresError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationStructuresRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationStructuresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsStructuresResponse](src/CommonElements/Models/ApiV1AssociationsStructuresResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationStructuresError](src/CommonElements/Errors/ResourceAssociationStructuresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsViolationsResponse&gt; ResourceAssociationViolations(ResourceAssociationViolationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AssociationResources.ResourceAssociationViolations(
        new ResourceAssociationViolationsRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1AssociationsViolationsResponse
}
catch (ApiException<ResourceAssociationViolationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceAssociationViolationsRequest](src/CommonElements/Requests/AssociationResources/ResourceAssociationViolationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsViolationsResponse](src/CommonElements/Models/ApiV1AssociationsViolationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceAssociationViolationsError](src/CommonElements/Errors/ResourceAssociationViolationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Associations

> Source: [Associations](src/CommonElements/Api/Associations.cs)

<details>
<summary><code>Task&lt;ApiV1AssociationsBuildingSafetyResponse&gt; AssociationsBuildingSafety(AssociationsBuildingSafetyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsBuildingSafety(new AssociationsBuildingSafetyRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AssociationsBuildingSafetyResponse
}
catch (ApiException<AssociationsBuildingSafetyError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsBuildingSafetyRequest](src/CommonElements/Requests/Associations/AssociationsBuildingSafetyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsBuildingSafetyResponse](src/CommonElements/Models/ApiV1AssociationsBuildingSafetyResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsBuildingSafetyError](src/CommonElements/Errors/AssociationsBuildingSafetyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsBuildingsResponse&gt; AssociationsBuildings(AssociationsBuildingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsBuildings(new AssociationsBuildingsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsBuildingsResponse
}
catch (ApiException<AssociationsBuildingsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsBuildingsRequest](src/CommonElements/Requests/Associations/AssociationsBuildingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsBuildingsResponse](src/CommonElements/Models/ApiV1AssociationsBuildingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsBuildingsError](src/CommonElements/Errors/AssociationsBuildingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsByAddressResponse&gt; AssociationsByAddress(AssociationsByAddressRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsByAddress(new AssociationsByAddressRequest
    {
        Address = "some example string",
        Zip = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AssociationsByAddressResponse
}
catch (ApiException<AssociationsByAddressError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsByAddressRequest](src/CommonElements/Requests/Associations/AssociationsByAddressRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsByAddressResponse](src/CommonElements/Models/ApiV1AssociationsByAddressResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsByAddressError](src/CommonElements/Errors/AssociationsByAddressError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsResponse&gt; AssociationsDetail(AssociationsDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsDetail(new AssociationsDetailRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsResponse
}
catch (ApiException<AssociationsDetailError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsDetailRequest](src/CommonElements/Requests/Associations/AssociationsDetailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsResponse](src/CommonElements/Models/ApiV1AssociationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsDetailError](src/CommonElements/Errors/AssociationsDetailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsLookupResponse&gt; AssociationsLookup(AssociationsLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsLookup(new AssociationsLookupRequest());
    // TODO: Handle 'response' of type ApiV1AssociationsLookupResponse
}
catch (ApiException<AssociationsLookupError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsLookupRequest](src/CommonElements/Requests/Associations/AssociationsLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsLookupResponse](src/CommonElements/Models/ApiV1AssociationsLookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsLookupError](src/CommonElements/Errors/AssociationsLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsManagementResponse&gt; AssociationsManagement(AssociationsManagementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsManagement(new AssociationsManagementRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsManagementResponse
}
catch (ApiException<AssociationsManagementError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsManagementRequest](src/CommonElements/Requests/Associations/AssociationsManagementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsManagementResponse](src/CommonElements/Models/ApiV1AssociationsManagementResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsManagementError](src/CommonElements/Errors/AssociationsManagementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsMatchResponse&gt; AssociationsMatch(AssociationsMatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsMatch(new AssociationsMatchRequest
    {
        Q = "some example string",
        State = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AssociationsMatchResponse
}
catch (ApiException<AssociationsMatchError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsMatchRequest](src/CommonElements/Requests/Associations/AssociationsMatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsMatchResponse](src/CommonElements/Models/ApiV1AssociationsMatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsMatchError](src/CommonElements/Errors/AssociationsMatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsNearbyResponse&gt; AssociationsNearby(AssociationsNearbyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsNearby(new AssociationsNearbyRequest
    {
        Lat = 1.5d,
        Lng = 1.5d,
    });
    // TODO: Handle 'response' of type ApiV1AssociationsNearbyResponse
}
catch (ApiException<AssociationsNearbyError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsNearbyRequest](src/CommonElements/Requests/Associations/AssociationsNearbyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsNearbyResponse](src/CommonElements/Models/ApiV1AssociationsNearbyResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsNearbyError](src/CommonElements/Errors/AssociationsNearbyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsOfficersResponse&gt; AssociationsOfficers(AssociationsOfficersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsOfficers(new AssociationsOfficersRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsOfficersResponse
}
catch (ApiException<AssociationsOfficersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsOfficersRequest](src/CommonElements/Requests/Associations/AssociationsOfficersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsOfficersResponse](src/CommonElements/Models/ApiV1AssociationsOfficersResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsOfficersError](src/CommonElements/Errors/AssociationsOfficersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsRiskResponse&gt; AssociationsRisk(AssociationsRiskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsRisk(new AssociationsRiskRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AssociationsRiskResponse
}
catch (ApiException<AssociationsRiskError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsRiskRequest](src/CommonElements/Requests/Associations/AssociationsRiskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsRiskResponse](src/CommonElements/Models/ApiV1AssociationsRiskResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsRiskError](src/CommonElements/Errors/AssociationsRiskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AssociationsVendorsResponse&gt; AssociationsVendors(AssociationsVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Associations.AssociationsVendors(new AssociationsVendorsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AssociationsVendorsResponse
}
catch (ApiException<AssociationsVendorsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociationsVendorsRequest](src/CommonElements/Requests/Associations/AssociationsVendorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsVendorsResponse](src/CommonElements/Models/ApiV1AssociationsVendorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[AssociationsVendorsError](src/CommonElements/Errors/AssociationsVendorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BulkDelivery

> Source: [BulkDelivery](src/CommonElements/Api/BulkDelivery.cs)

<details>
<summary><code>Task&lt;ApiV1DeliveriesResponse3&gt; DeliveriesCancel(DeliveriesCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesCancel(new DeliveriesCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesResponse3
}
catch (ApiException<DeliveriesCancelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesCancelRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse3](src/CommonElements/Models/ApiV1DeliveriesResponse3.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesCancelError](src/CommonElements/Errors/DeliveriesCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesDatasetsResponse&gt; DeliveriesCatalog(DeliveriesCatalogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesCatalog(new DeliveriesCatalogRequest());
    // TODO: Handle 'response' of type ApiV1DeliveriesDatasetsResponse
}
catch (ApiException<DeliveriesCatalogError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesCatalogRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesCatalogRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesDatasetsResponse](src/CommonElements/Models/ApiV1DeliveriesDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesCatalogError](src/CommonElements/Errors/DeliveriesCatalogError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesResponse&gt; DeliveriesCreate(DeliveriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesCreate(new DeliveriesCreateRequest
    {
        Body = new ApiV1DeliveriesRequest { Dataset = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesResponse
}
catch (ApiException<DeliveriesCreateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesCreateRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse](src/CommonElements/Models/ApiV1DeliveriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesCreateError](src/CommonElements/Errors/DeliveriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesDownloadResponse&gt; DeliveriesDownload(DeliveriesDownloadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesDownload(new DeliveriesDownloadRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesDownloadResponse
}
catch (ApiException<DeliveriesDownloadError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesDownloadRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesDownloadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesDownloadResponse](src/CommonElements/Models/ApiV1DeliveriesDownloadResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesDownloadError](src/CommonElements/Errors/DeliveriesDownloadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesResponse1&gt; DeliveriesList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesList();
    // TODO: Handle 'response' of type ApiV1DeliveriesResponse1
}
catch (ApiException<DeliveriesListError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse1](src/CommonElements/Models/ApiV1DeliveriesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesListError](src/CommonElements/Errors/DeliveriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesSchedulesResponse3&gt; DeliveriesScheduleDelete(DeliveriesScheduleDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesScheduleDelete(new DeliveriesScheduleDeleteRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
}
catch (ApiException<DeliveriesScheduleDeleteError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesScheduleDeleteRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesScheduleDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse3](src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse3.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesScheduleDeleteError](src/CommonElements/Errors/DeliveriesScheduleDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesSchedulesResponse2&gt; DeliveriesScheduleDetail(DeliveriesScheduleDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesScheduleDetail(new DeliveriesScheduleDetailRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse2
}
catch (ApiException<DeliveriesScheduleDetailError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesScheduleDetailRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesScheduleDetailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse2](src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesScheduleDetailError](src/CommonElements/Errors/DeliveriesScheduleDetailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesSchedulesResponse3&gt; DeliveriesScheduleUpdate(DeliveriesScheduleUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesScheduleUpdate(new DeliveriesScheduleUpdateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ApiV1DeliveriesSchedulesRequest1(),
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse3
}
catch (ApiException<DeliveriesScheduleUpdateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesScheduleUpdateRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesScheduleUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse3](src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse3.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesScheduleUpdateError](src/CommonElements/Errors/DeliveriesScheduleUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesSchedulesResponse&gt; DeliveriesSchedulesCreate(DeliveriesSchedulesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesSchedulesCreate(new DeliveriesSchedulesCreateRequest
    {
        Body = new ApiV1DeliveriesSchedulesRequest { Dataset = "some example string", Cadence = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse
}
catch (ApiException<DeliveriesSchedulesCreateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesSchedulesCreateRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesSchedulesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse](src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesSchedulesCreateError](src/CommonElements/Errors/DeliveriesSchedulesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesSchedulesResponse1&gt; DeliveriesSchedulesList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesSchedulesList();
    // TODO: Handle 'response' of type ApiV1DeliveriesSchedulesResponse1
}
catch (ApiException<DeliveriesSchedulesListError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesSchedulesResponse1](src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesSchedulesListError](src/CommonElements/Errors/DeliveriesSchedulesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DeliveriesResponse2&gt; DeliveriesStatus(DeliveriesStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkDelivery.DeliveriesStatus(new DeliveriesStatusRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1DeliveriesResponse2
}
catch (ApiException<DeliveriesStatusError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeliveriesStatusRequest](src/CommonElements/Requests/BulkDelivery/DeliveriesStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DeliveriesResponse2](src/CommonElements/Models/ApiV1DeliveriesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DeliveriesStatusError](src/CommonElements/Errors/DeliveriesStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BulkExport

> Source: [BulkExport](src/CommonElements/Api/BulkExport.cs)

<details>
<summary><code>Task&lt;ApiV1ExportResponse&gt; Export(ExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkExport.Export(new ExportRequest { Resource = "some example string" });
    // TODO: Handle 'response' of type ApiV1ExportResponse
}
catch (ApiException<ExportError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportRequest](src/CommonElements/Requests/BulkExport/ExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExportResponse](src/CommonElements/Models/ApiV1ExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ExportError](src/CommonElements/Errors/ExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ExportChangesResponse&gt; ExportChanges(ExportChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BulkExport.ExportChanges(new ExportChangesRequest());
    // TODO: Handle 'response' of type ApiV1ExportChangesResponse
}
catch (ApiException<ExportChangesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportChangesRequest](src/CommonElements/Requests/BulkExport/ExportChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExportChangesResponse](src/CommonElements/Models/ApiV1ExportChangesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ExportChangesError](src/CommonElements/Errors/ExportChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChangeFeed

> Source: [ChangeFeed](src/CommonElements/Api/ChangeFeed.cs)

<details>
<summary><code>Task&lt;ApiV1ChangesResponse&gt; Changes(ChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ChangeFeed.Changes(new ChangesRequest());
    // TODO: Handle 'response' of type ApiV1ChangesResponse
}
catch (ApiException<ChangesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChangesRequest](src/CommonElements/Requests/ChangeFeed/ChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ChangesResponse](src/CommonElements/Models/ApiV1ChangesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ChangesError](src/CommonElements/Errors/ChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ChangesSummaryResponse&gt; ChangesSummary(ChangesSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ChangeFeed.ChangesSummary(new ChangesSummaryRequest());
    // TODO: Handle 'response' of type ApiV1ChangesSummaryResponse
}
catch (ApiException<ChangesSummaryError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChangesSummaryRequest](src/CommonElements/Requests/ChangeFeed/ChangesSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ChangesSummaryResponse](src/CommonElements/Models/ApiV1ChangesSummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ChangesSummaryError](src/CommonElements/Errors/ChangesSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CrossAssociationCollections

> Source: [CrossAssociationCollections](src/CommonElements/Api/CrossAssociationCollections.cs)

<details>
<summary><code>Task&lt;ApiV1ComplaintsResponse&gt; ResourceCollectionComplaints(ResourceCollectionComplaintsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CrossAssociationCollections.ResourceCollectionComplaints(
        new ResourceCollectionComplaintsRequest());
    // TODO: Handle 'response' of type ApiV1ComplaintsResponse
}
catch (ApiException<ResourceCollectionComplaintsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceCollectionComplaintsRequest](src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionComplaintsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ComplaintsResponse](src/CommonElements/Models/ApiV1ComplaintsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceCollectionComplaintsError](src/CommonElements/Errors/ResourceCollectionComplaintsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1InsuranceCarriersResponse&gt; ResourceCollectionInsuranceCarriers(ResourceCollectionInsuranceCarriersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CrossAssociationCollections.ResourceCollectionInsuranceCarriers(
        new ResourceCollectionInsuranceCarriersRequest());
    // TODO: Handle 'response' of type ApiV1InsuranceCarriersResponse
}
catch (ApiException<ResourceCollectionInsuranceCarriersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceCollectionInsuranceCarriersRequest](src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionInsuranceCarriersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1InsuranceCarriersResponse](src/CommonElements/Models/ApiV1InsuranceCarriersResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceCollectionInsuranceCarriersError](src/CommonElements/Errors/ResourceCollectionInsuranceCarriersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1LegalCasesResponse&gt; ResourceCollectionLegalCases(ResourceCollectionLegalCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CrossAssociationCollections.ResourceCollectionLegalCases(
        new ResourceCollectionLegalCasesRequest());
    // TODO: Handle 'response' of type ApiV1LegalCasesResponse
}
catch (ApiException<ResourceCollectionLegalCasesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceCollectionLegalCasesRequest](src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionLegalCasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1LegalCasesResponse](src/CommonElements/Models/ApiV1LegalCasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceCollectionLegalCasesError](src/CommonElements/Errors/ResourceCollectionLegalCasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1InsuranceRateFilingsResponse&gt; ResourceCollectionRateFilings(ResourceCollectionRateFilingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CrossAssociationCollections.ResourceCollectionRateFilings(
        new ResourceCollectionRateFilingsRequest());
    // TODO: Handle 'response' of type ApiV1InsuranceRateFilingsResponse
}
catch (ApiException<ResourceCollectionRateFilingsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceCollectionRateFilingsRequest](src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionRateFilingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1InsuranceRateFilingsResponse](src/CommonElements/Models/ApiV1InsuranceRateFilingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceCollectionRateFilingsError](src/CommonElements/Errors/ResourceCollectionRateFilingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StormEventsResponse&gt; ResourceCollectionStormEvents(ResourceCollectionStormEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CrossAssociationCollections.ResourceCollectionStormEvents(
        new ResourceCollectionStormEventsRequest());
    // TODO: Handle 'response' of type ApiV1StormEventsResponse
}
catch (ApiException<ResourceCollectionStormEventsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResourceCollectionStormEventsRequest](src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionStormEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StormEventsResponse](src/CommonElements/Models/ApiV1StormEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ResourceCollectionStormEventsError](src/CommonElements/Errors/ResourceCollectionStormEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatasetCatalog

> Source: [DatasetCatalog](src/CommonElements/Api/DatasetCatalog.cs)

<details>
<summary><code>Task&lt;ApiV1AssociationsDatasetsResponse&gt; DatasetsAssociationIndex(DatasetsAssociationIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatasetCatalog.DatasetsAssociationIndex(new DatasetsAssociationIndexRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AssociationsDatasetsResponse
}
catch (ApiException<DatasetsAssociationIndexError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DatasetsAssociationIndexRequest](src/CommonElements/Requests/DatasetCatalog/DatasetsAssociationIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AssociationsDatasetsResponse](src/CommonElements/Models/ApiV1AssociationsDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DatasetsAssociationIndexError](src/CommonElements/Errors/DatasetsAssociationIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DatasetsResponse&gt; DatasetsCatalog(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatasetCatalog.DatasetsCatalog();
    // TODO: Handle 'response' of type ApiV1DatasetsResponse
}
catch (ApiException<DatasetsCatalogError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DatasetsResponse](src/CommonElements/Models/ApiV1DatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[DatasetsCatalogError](src/CommonElements/Errors/DatasetsCatalogError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/CommonElements/Api/Meta.cs)

<details>
<summary><code>Task&lt;object&gt; GetApiStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetApiStatus();
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetApiStatusError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GetApiStatusError](src/CommonElements/Errors/GetApiStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetDataDictionary(GetDataDictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetDataDictionary(new GetDataDictionaryRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetDataDictionaryError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDataDictionaryRequest](src/CommonElements/Requests/Meta/GetDataDictionaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GetDataDictionaryError](src/CommonElements/Errors/GetDataDictionaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetKeyUsage(GetKeyUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetKeyUsage(new GetKeyUsageRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetKeyUsageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetKeyUsageRequest](src/CommonElements/Requests/Meta/GetKeyUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GetKeyUsageError](src/CommonElements/Errors/GetKeyUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetMetaIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetMetaIndex();
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetMetaIndexError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GetMetaIndexError](src/CommonElements/Errors/GetMetaIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetOpenApiDocument(GetOpenApiDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetOpenApiDocument(new GetOpenApiDocumentRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetOpenApiDocumentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOpenApiDocumentRequest](src/CommonElements/Requests/Meta/GetOpenApiDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GetOpenApiDocumentError](src/CommonElements/Errors/GetOpenApiDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetSandboxManifest(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetSandboxManifest();
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetSandboxManifestError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[GetSandboxManifestError](src/CommonElements/Errors/GetSandboxManifestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProfessionalsAndLicenses

> Source: [ProfessionalsAndLicenses](src/CommonElements/Api/ProfessionalsAndLicenses.cs)

<details>
<summary><code>Task&lt;ApiV1LicensesVerifyResponse&gt; LicensesVerify(LicensesVerifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProfessionalsAndLicenses.LicensesVerify(new LicensesVerifyRequest
    {
        State = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1LicensesVerifyResponse
}
catch (ApiException<LicensesVerifyError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LicensesVerifyRequest](src/CommonElements/Requests/ProfessionalsAndLicenses/LicensesVerifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1LicensesVerifyResponse](src/CommonElements/Models/ApiV1LicensesVerifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[LicensesVerifyError](src/CommonElements/Errors/LicensesVerifyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ProfessionalsAssociationsResponse&gt; ProfessionalsAssociations(ProfessionalsAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProfessionalsAndLicenses.ProfessionalsAssociations(new ProfessionalsAssociationsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ProfessionalsAssociationsResponse
}
catch (ApiException<ProfessionalsAssociationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProfessionalsAssociationsRequest](src/CommonElements/Requests/ProfessionalsAndLicenses/ProfessionalsAssociationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfessionalsAssociationsResponse](src/CommonElements/Models/ApiV1ProfessionalsAssociationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ProfessionalsAssociationsError](src/CommonElements/Errors/ProfessionalsAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ProfessionalsResponse&gt; ProfessionalsDetail(ProfessionalsDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProfessionalsAndLicenses.ProfessionalsDetail(new ProfessionalsDetailRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ProfessionalsResponse
}
catch (ApiException<ProfessionalsDetailError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProfessionalsDetailRequest](src/CommonElements/Requests/ProfessionalsAndLicenses/ProfessionalsDetailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfessionalsResponse](src/CommonElements/Models/ApiV1ProfessionalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ProfessionalsDetailError](src/CommonElements/Errors/ProfessionalsDetailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ProfessionalsSearchResponse&gt; ProfessionalsSearch(ProfessionalsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProfessionalsAndLicenses.ProfessionalsSearch(new ProfessionalsSearchRequest());
    // TODO: Handle 'response' of type ApiV1ProfessionalsSearchResponse
}
catch (ApiException<ProfessionalsSearchError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProfessionalsSearchRequest](src/CommonElements/Requests/ProfessionalsAndLicenses/ProfessionalsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfessionalsSearchResponse](src/CommonElements/Models/ApiV1ProfessionalsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[ProfessionalsSearchError](src/CommonElements/Errors/ProfessionalsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Statutes

> Source: [Statutes](src/CommonElements/Api/Statutes.cs)

<details>
<summary><code>Task&lt;ApiV1StatutesByStateResponse&gt; StatutesByState(StatutesByStateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Statutes.StatutesByState(new StatutesByStateRequest { State = "some example string" });
    // TODO: Handle 'response' of type ApiV1StatutesByStateResponse
}
catch (ApiException<StatutesByStateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StatutesByStateRequest](src/CommonElements/Requests/Statutes/StatutesByStateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatutesByStateResponse](src/CommonElements/Models/ApiV1StatutesByStateResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[StatutesByStateError](src/CommonElements/Errors/StatutesByStateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StatutesSearchResponse&gt; StatutesSearch(StatutesSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Statutes.StatutesSearch(new StatutesSearchRequest { Q = "some example string" });
    // TODO: Handle 'response' of type ApiV1StatutesSearchResponse
}
catch (ApiException<StatutesSearchError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StatutesSearchRequest](src/CommonElements/Requests/Statutes/StatutesSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatutesSearchResponse](src/CommonElements/Models/ApiV1StatutesSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[StatutesSearchError](src/CommonElements/Errors/StatutesSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StatutesSectionsResponse&gt; StatutesSectionDetail(StatutesSectionDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Statutes.StatutesSectionDetail(new StatutesSectionDetailRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1StatutesSectionsResponse
}
catch (ApiException<StatutesSectionDetailError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StatutesSectionDetailRequest](src/CommonElements/Requests/Statutes/StatutesSectionDetailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatutesSectionsResponse](src/CommonElements/Models/ApiV1StatutesSectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[StatutesSectionDetailError](src/CommonElements/Errors/StatutesSectionDetailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/CommonElements/Api/Vendors.cs)

<details>
<summary><code>Task&lt;ApiV1VendorsResponse1&gt; VendorsDetail(VendorsDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Vendors.VendorsDetail(new VendorsDetailRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1VendorsResponse1
}
catch (ApiException<VendorsDetailError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VendorsDetailRequest](src/CommonElements/Requests/Vendors/VendorsDetailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1VendorsResponse1](src/CommonElements/Models/ApiV1VendorsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[VendorsDetailError](src/CommonElements/Errors/VendorsDetailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1VendorsResponse&gt; VendorsList(VendorsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Vendors.VendorsList(new VendorsListRequest());
    // TODO: Handle 'response' of type ApiV1VendorsResponse
}
catch (ApiException<VendorsListError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VendorsListRequest](src/CommonElements/Requests/Vendors/VendorsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1VendorsResponse](src/CommonElements/Models/ApiV1VendorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[VendorsListError](src/CommonElements/Errors/VendorsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1VendorsReviewsResponse&gt; VendorsReviews(VendorsReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Vendors.VendorsReviews(new VendorsReviewsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1VendorsReviewsResponse
}
catch (ApiException<VendorsReviewsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VendorsReviewsRequest](src/CommonElements/Requests/Vendors/VendorsReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1VendorsReviewsResponse](src/CommonElements/Models/ApiV1VendorsReviewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CommonElements/Core/Exceptions/ApiException.cs)&lt;[VendorsReviewsError](src/CommonElements/Errors/VendorsReviewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

