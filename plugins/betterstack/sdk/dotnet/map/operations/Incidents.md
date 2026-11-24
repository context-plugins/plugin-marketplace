<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.Incidents` · Source: `src/BetterStack/Api/Incidents.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcknowledgeIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `AcknowledgeIncident(AcknowledgeIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AcknowledgeIncidentRequest` | `src/BetterStack/Requests/Incidents/AcknowledgeIncidentRequest.cs` |

### CreateIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateIncident(CreateIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateIncidentRequest` | `src/BetterStack/Requests/Incidents/CreateIncidentRequest.cs` |
| `IncidentCreate` | `src/BetterStack/Models/IncidentCreate.cs` |

### DeleteIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteIncident(DeleteIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteIncidentRequest` | `src/BetterStack/Requests/Incidents/DeleteIncidentRequest.cs` |

### EscalateIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `EscalateIncident(EscalateIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EscalateIncidentRequest` | `src/BetterStack/Requests/Incidents/EscalateIncidentRequest.cs` |

### GetIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `GetIncident(GetIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetIncidentRequest` | `src/BetterStack/Requests/Incidents/GetIncidentRequest.cs` |

### GetIncidentTimeline

- **Auth**: `options.BearerAuth`
- **Signature**: `GetIncidentTimeline(GetIncidentTimelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetIncidentTimelineRequest` | `src/BetterStack/Requests/Incidents/GetIncidentTimelineRequest.cs` |

### ListIncidents

- **Auth**: `options.BearerAuth`
- **Signature**: `ListIncidents(ListIncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`, `page` ← `Page`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncidentsRequest` | `src/BetterStack/Requests/Incidents/ListIncidentsRequest.cs` |

### ReopenIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `ReopenIncident(ReopenIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReopenIncidentRequest` | `src/BetterStack/Requests/Incidents/ReopenIncidentRequest.cs` |

### ResolveIncident

- **Auth**: `options.BearerAuth`
- **Signature**: `ResolveIncident(ResolveIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ResolveIncidentRequest` | `src/BetterStack/Requests/Incidents/ResolveIncidentRequest.cs` |

