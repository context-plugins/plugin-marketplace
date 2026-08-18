<!-- Generated file — do not edit; regenerated with the SDK. -->

# Donations — operations

Accessor: `client.Donations` · Source: `Api/Donations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostDonationCampaigns
- **Signature**: `PostDonationCampaigns(string? idempotencyKey, DonationCampaignsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DonationCampaignsResponse`
- **Error**: `SdkException<PostDonationCampaignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DonationCampaignsRequest` | `Models/DonationCampaignsRequest.cs` |
| `DonationCampaignsResponse` | `Models/DonationCampaignsResponse.cs` |
| `PostDonationCampaignsError` | `Errors/PostDonationCampaignsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostDonations
- **Signature**: `PostDonations(string? idempotencyKey, DonationPaymentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DonationPaymentResponse`
- **Error**: `SdkException<PostDonationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DonationPaymentRequest` | `Models/DonationPaymentRequest.cs` |
| `DonationPaymentResponse` | `Models/DonationPaymentResponse.cs` |
| `PostDonationsError` | `Errors/PostDonationsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

