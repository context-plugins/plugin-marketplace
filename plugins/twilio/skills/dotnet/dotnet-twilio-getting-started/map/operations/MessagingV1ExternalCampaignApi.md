<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ExternalCampaignApi — operations

Accessor: `client.MessagingV1ExternalCampaignApi` · Source: `Api/MessagingV1ExternalCampaignApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExternalCampaign

- **Server group**: `Default1`
- **Signature**: `CreateExternalCampaign(string campaignId, string messagingServiceSid, bool? cnpMigration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cnpMigration` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV1ExternalCampaign`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ExternalCampaign` | `Models/MessagingV1ExternalCampaign.cs` |

