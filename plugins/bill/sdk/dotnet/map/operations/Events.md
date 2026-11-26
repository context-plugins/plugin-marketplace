<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Bill/Api/Events.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEventCatalog

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `GetEventCatalog(GetEventCatalogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<EventCatalogDto>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetEventCatalogRequest` | `src/Bill/Requests/Events/GetEventCatalogRequest.cs` |
| `EventCatalogDto` | `src/Bill/Models/EventCatalogDto.cs` |

### GetEventsForSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `GetEventsForSubscription(GetEventsForSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Query params (wire ← C#)**: `entityId` ← `EntityId`, `max` ← `Max`, `createdTimeFrom` ← `CreatedTimeFrom`, `createdTimeTo` ← `CreatedTimeTo`, `ascending` ← `Ascending`, `page` ← `Page`
- **Returns**: `PaginationDtoEventWithRetriesDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetEventsForSubscriptionRequest` | `src/Bill/Requests/Events/GetEventsForSubscriptionRequest.cs` |
| `PaginationDtoEventWithRetriesDto` | `src/Bill/Models/PaginationDtoEventWithRetriesDto.cs` |

### ResendEvent

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `ResendEvent(ResendEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `EventId`
- **Returns**: `EventDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ResendEventRequest` | `src/Bill/Requests/Events/ResendEventRequest.cs` |
| `EventDto` | `src/Bill/Models/EventDto.cs` |

