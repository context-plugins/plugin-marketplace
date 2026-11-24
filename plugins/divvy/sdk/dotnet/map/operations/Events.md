<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Divvy/Api/Events.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEventCatalog

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `GetEventCatalog(GetEventCatalogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<EventCatalogDto>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetEventCatalogRequest` | `src/Divvy/Requests/Events/GetEventCatalogRequest.cs` |
| `EventCatalogDto` | `src/Divvy/Models/EventCatalogDto.cs` |

### GetEventsForSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `GetEventsForSubscription(GetEventsForSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Query params (wire ← C#)**: `entityId` ← `EntityId`, `max` ← `Max`, `createdTimeFrom` ← `CreatedTimeFrom`, `createdTimeTo` ← `CreatedTimeTo`, `ascending` ← `Ascending`, `page` ← `Page`
- **Returns**: `PaginationDtoEventWithRetriesDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetEventsForSubscriptionRequest` | `src/Divvy/Requests/Events/GetEventsForSubscriptionRequest.cs` |
| `PaginationDtoEventWithRetriesDto` | `src/Divvy/Models/PaginationDtoEventWithRetriesDto.cs` |

### ResendEvent

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `ResendEvent(ResendEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `EventId`
- **Returns**: `EventDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ResendEventRequest` | `src/Divvy/Requests/Events/ResendEventRequest.cs` |
| `EventDto` | `src/Divvy/Models/EventDto.cs` |

