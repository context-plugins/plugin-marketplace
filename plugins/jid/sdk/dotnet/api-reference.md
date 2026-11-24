# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [JidClient](src/Jid/JidClient.cs)

## Monitors

> Source: [Monitors](src/Jid/Api/Monitors.cs)

<details>
<summary><code>Task&lt;object&gt; CreateMonitor(CreateMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.CreateMonitor(new CreateMonitorRequest
    {
        Body = new V1MonitorsRequest { EntityId = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CreateMonitorError> ex)
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

<code>[CreateMonitorRequest](src/Jid/Requests/Monitors/CreateMonitorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[CreateMonitorError](src/Jid/Errors/CreateMonitorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMonitor(DeleteMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Monitors.DeleteMonitor(new DeleteMonitorRequest { Id = "some example string" });
}
catch (ApiException<DeleteMonitorError> ex)
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

<code>[DeleteMonitorRequest](src/Jid/Requests/Monitors/DeleteMonitorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[DeleteMonitorError](src/Jid/Errors/DeleteMonitorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListMonitors(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ListMonitors();
    // TODO: Handle 'response' of type object
}
catch (ApiException<ListMonitorsError> ex)
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

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[ListMonitorsError](src/Jid/Errors/ListMonitorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Jid/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchResponse&gt; SearchBusinesses(SearchBusinessesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers, French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5 business units, filed on demand, listed first).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchBusinesses(new SearchBusinessesRequest { Q = "some example string" });
    // TODO: Handle 'response' of type SearchResponse
}
catch (ApiException<SearchBusinessesError> ex)
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

<code>[SearchBusinessesRequest](src/Jid/Requests/Search/SearchBusinessesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](src/Jid/Models/SearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[SearchBusinessesError](src/Jid/Errors/SearchBusinessesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignalApi

> Source: [SignalApi](src/Jid/Api/SignalApi.cs)

<details>
<summary><code>Task&lt;V1SignalResponse&gt; Signal(SignalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify or /v1/screen as `signal`. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignalApi.Signal(new SignalRequest());
    // TODO: Handle 'response' of type V1SignalResponse
}
catch (ApiException<SignalError> ex)
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

<code>[SignalRequest](src/Jid/Requests/SignalApi/SignalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SignalResponse](src/Jid/Models/V1SignalResponse.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[SignalError](src/Jid/Errors/SignalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Verify

> Source: [Verify](src/Jid/Api/Verify.cs)

<details>
<summary><code>Task&lt;object&gt; GetBusinessFile(GetBusinessFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Verify.GetBusinessFile(new GetBusinessFileRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetBusinessFileError> ex)
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

<code>[GetBusinessFileRequest](src/Jid/Requests/Verify/GetBusinessFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[GetBusinessFileError](src/Jid/Errors/GetBusinessFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Receipt&gt; GetReceipt(GetReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or counterparty. Verify `signature.sig` over the canonical statement with the key at /.well-known/jid-keys.json.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Verify.GetReceipt(new GetReceiptRequest { ReceiptId = "some example string" });
    // TODO: Handle 'response' of type Receipt
}
catch (ApiException<GetReceiptError> ex)
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

<code>[GetReceiptRequest](src/Jid/Requests/Verify/GetReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Receipt](src/Jid/Models/Receipt.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[GetReceiptError](src/Jid/Errors/GetReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListActivities(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Verify.ListActivities();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Jid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VerifyResponse&gt; VerifyBusiness(VerifyBusinessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts (unchanged since 1.0). With any of them: also `decision` (proceed | review | stop | insufficient_data) with reasons, and `receipt` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check are unknown and lead to review.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Verify.VerifyBusiness(new VerifyBusinessRequest { Id = "some example string" });
    // TODO: Handle 'response' of type VerifyResponse
}
catch (ApiException<VerifyBusinessError> ex)
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

<code>[VerifyBusinessRequest](src/Jid/Requests/Verify/VerifyBusinessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerifyResponse](src/Jid/Models/VerifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[VerifyBusinessError](src/Jid/Errors/VerifyBusinessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Qualify

> Source: [Qualify](src/Jid/Api/Qualify.cs)

<details>
<summary><code>Task&lt;V1ResultsResponse&gt; GetResults(GetResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Qualify.GetResults(new GetResultsRequest { Ids = "some example string" });
    // TODO: Handle 'response' of type V1ResultsResponse
}
catch (ApiException<GetResultsError> ex)
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

<code>[GetResultsRequest](src/Jid/Requests/Qualify/GetResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ResultsResponse](src/Jid/Models/V1ResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[GetResultsError](src/Jid/Errors/GetResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Qualification&gt; QualifyCounterparty(QualifyCounterpartyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons), a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only: personal webmail, a disposable address or no confident business match returns assessment individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing decisions about individuals.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Qualify.QualifyCounterparty(new QualifyCounterpartyRequest
    {
        Body = new V1QualifyRequest { Email = "some example string" },
    });
    // TODO: Handle 'response' of type Qualification
}
catch (ApiException<QualifyCounterpartyError> ex)
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

<code>[QualifyCounterpartyRequest](src/Jid/Requests/Qualify/QualifyCounterpartyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Qualification](src/Jid/Models/Qualification.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[QualifyCounterpartyError](src/Jid/Errors/QualifyCounterpartyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1OutcomesResponse&gt; RecordOutcome(RecordOutcomeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link. Free. Stored without personal data for 13 months; outcomes tune the published rules.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Qualify.RecordOutcome(new RecordOutcomeRequest { Body = new V1OutcomesRequest() });
    // TODO: Handle 'response' of type V1OutcomesResponse
}
catch (ApiException<RecordOutcomeError> ex)
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

<code>[RecordOutcomeRequest](src/Jid/Requests/Qualify/RecordOutcomeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OutcomesResponse](src/Jid/Models/V1OutcomesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[RecordOutcomeError](src/Jid/Errors/RecordOutcomeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Screen

> Source: [Screen](src/Jid/Api/Screen.cs)

<details>
<summary><code>Task&lt;object&gt; EmailCheck(EmailCheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether the From domain or a business display name imitates a known company's registered domain. Returns checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no AI.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Screen.EmailCheck(new EmailCheckRequest
    {
        Body = new V1EmailCheckRequest { Headers = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<EmailCheckError> ex)
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

<code>[EmailCheckRequest](src/Jid/Requests/Screen/EmailCheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[EmailCheckError](src/Jid/Errors/EmailCheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScreenResult&gt; ScreenInvoke(ScreenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url, email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence, subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version 2026-10-05.2: https://jid.com/screen-rules

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Screen.ScreenInvoke(new ScreenRequest { Body = new V1ScreenRequest() });
    // TODO: Handle 'response' of type ScreenResult
}
catch (ApiException<ScreenError> ex)
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

<code>[ScreenRequest](src/Jid/Requests/Screen/ScreenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScreenResult](src/Jid/Models/ScreenResult.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[ScreenError](src/Jid/Errors/ScreenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScreenResult&gt; ScreenGet(ScreenGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same as POST /v1/screen, with the fields as query parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Screen.ScreenGet(new ScreenGetRequest());
    // TODO: Handle 'response' of type ScreenResult
}
catch (ApiException<ScreenGetError> ex)
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

<code>[ScreenGetRequest](src/Jid/Requests/Screen/ScreenGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScreenResult](src/Jid/Models/ScreenResult.cs)</code>

**OnError**: <code>[ApiException](src/Jid/Core/Exceptions/ApiException.cs)&lt;[ScreenGetError](src/Jid/Errors/ScreenGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

