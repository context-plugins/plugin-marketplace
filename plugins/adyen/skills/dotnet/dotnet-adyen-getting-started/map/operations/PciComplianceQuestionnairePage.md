# PciComplianceQuestionnairePage — operations

Accessor: `client.PciComplianceQuestionnairePage` · Source: `Api/PciComplianceQuestionnairePage.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostGetPciQuestionnaireUrl
- **HTTP**: `POST /getPciQuestionnaireUrl` (Default19 (cal-test))
- **Notes**: Returns a link to a PCI compliance questionnaire that you can send to your account holder. &gt; You should only use this endpoint if you have a partner platform setup .
- **Signature**: `PostGetPciQuestionnaireUrl(GetPciUrlRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetPciUrlResponse`
- **Error**: `SdkException<PostGetPciQuestionnaireUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
