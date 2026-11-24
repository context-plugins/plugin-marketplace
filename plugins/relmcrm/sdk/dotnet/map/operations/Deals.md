<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deals — operations

Accessor: `client.Deals` · Source: `src/RelmCrm/Api/Deals.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDeal

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateDeal(CreateDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Deal`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateDealRequest` | `src/RelmCrm/Requests/Deals/CreateDealRequest.cs` |
| `DealInput` | `src/RelmCrm/Models/DealInput.cs` |
| `Deal` | `src/RelmCrm/Models/Deal.cs` |

### DeleteDeal

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteDeal(DeleteDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteDealRequest` | `src/RelmCrm/Requests/Deals/DeleteDealRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetDeal

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetDeal(GetDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deal`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetDealRequest` | `src/RelmCrm/Requests/Deals/GetDealRequest.cs` |
| `Deal` | `src/RelmCrm/Models/Deal.cs` |

### ListDeals

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListDeals(ListDealsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `include_deleted` ← `IncludeDeleted`, `q` ← `Q`, `pipeline` ← `Pipeline`, `pipeline_id` ← `PipelineId`, `stage` ← `Stage`, `company_id` ← `CompanyId`, `primary_contact_id` ← `PrimaryContactId`
- **Returns**: `DealList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDealsRequest` | `src/RelmCrm/Requests/Deals/ListDealsRequest.cs` |
| `DealList` | `src/RelmCrm/Models/DealList.cs` |

### RestoreDeal

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `RestoreDeal(RestoreDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deal`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RestoreDealRequest` | `src/RelmCrm/Requests/Deals/RestoreDealRequest.cs` |
| `Deal` | `src/RelmCrm/Models/Deal.cs` |

### UpdateDeal

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateDeal(UpdateDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Deal`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateDealRequest` | `src/RelmCrm/Requests/Deals/UpdateDealRequest.cs` |
| `DealInput` | `src/RelmCrm/Models/DealInput.cs` |
| `Deal` | `src/RelmCrm/Models/Deal.cs` |

