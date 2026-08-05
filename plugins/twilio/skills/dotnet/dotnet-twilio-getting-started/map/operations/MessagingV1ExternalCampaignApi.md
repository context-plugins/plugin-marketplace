# MessagingV1ExternalCampaignApi — operations

Accessor: `client.MessagingV1ExternalCampaignApi` · Source: `Api/MessagingV1ExternalCampaignApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateExternalCampaign
- **HTTP**: `POST /v1/Services/PreregisteredUsa2p` (Default6 (messaging))
- **Signature**: `CreateExternalCampaign(string campaignId, string messagingServiceSid, bool? cnpMigration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cnpMigration` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CampaignId` ← `campaignId`, `MessagingServiceSid` ← `messagingServiceSid`, `CnpMigration` ← `cnpMigration`
- **Returns**: `MessagingV1ExternalCampaign`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
