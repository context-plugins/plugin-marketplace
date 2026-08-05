# UserConsent — operations

Accessor: `client.UserConsent` · Source: `Api/UserConsent.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetConsentGrant
- **HTTP**: `GET /consents/{consentId}` (Consent (financialdataexchange-prod))
- **Notes**: Get a Consent Grant
- **Signature**: `GetConsentGrant(string consentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConsentGrantEntity`
- **Error**: `SdkException<GetConsentGrantError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetConsentRevocation
- **HTTP**: `GET /consents/{consentId}/revocation` (Consent (financialdataexchange-prod))
- **Notes**: Retrieve Consent Revocation record
- **Signature**: `GetConsentRevocation(string consentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConsentRevocationListEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevokeConsentGrant
- **HTTP**: `PUT /consents/{consentId}/revocation` (Consent (financialdataexchange-prod))
- **Notes**: Revoke a Consent Grant
- **Signature**: `RevokeConsentGrant(string consentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, ConsentRevocationRequestEntity body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RevokeConsentGrantError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 403, 404, 409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
