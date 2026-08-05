# MapMessageController — operations

Accessor: `client.MapMessageController` · Source: `Api/MapMessageController.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteMapMessage
- **HTTP**: `DELETE /api/v2/mapdata/regionid/{regionId}/i10nid/{i10nid}` (ImpServer (imp))
- **Notes**: Removes a map message for the specified region and intersection ID.
- **Signature**: `DeleteMapMessage(string regionId, string i10Nid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMapMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetMdmErrorResponse(out MdmErrorResponse)` [400, 401, 403, 404, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadMapmessages
- **HTTP**: `GET /api/v2/mapdata` (ImpServer (imp))
- **Notes**: This endpoint is deprecated. (Use /api/v2/mapdata/query for new integrations). This endpoint allows user to download SAE J2735 or ETSI MAP messages in ASN.1 UPER base64 encoded format. The area for the MAP messages is needed to be defined in the query. Required request header: `Accept` — specifies the response format. Omitting this header will result in a `400 Bad Request`. Supported values: - `text/plain` — ASN.1 UPER base64-encoded MAP messages (one per line) - `application/json` — JSON-encoded MAP messages
- **Signature**: `DownloadMapmessages(GeofencePolygon geofence, string vendorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Geofence` ← `geofence`
- **Returns**: `string`
- **Error**: `SdkException<DownloadMapmessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMdmErrorResponse(out MdmErrorResponse)` [400, 401, 403, 404, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IngestMapmessages
- **HTTP**: `POST /api/v2/mapdata` (ImpServer (imp))
- **Notes**: This endpoint allows the user to upload map messages in ASN.1 UPER base64 encoded format or JER (JSON) formats. The MAP data message can have more than one intersections in it. Both SAE and ETSI defined MAP messages are supported. The SAE type MAP messages have to be wrapped in a MessageFrame, as defined in the SAE J2735 standard. The ETSI type MAP messages are expected as MAPEM structures that include the ETSI header, as defined in the ETSI TS 103 301 standard. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API. Required request header: `Content-Type` — specifies the format of the request body. Omitting or sending an unsupported value will result in a `415 Unsupported Media Type`. Supported values: - `text/plain` — ASN.1 UPER base64-encoded MAP message - `application/json` — JSON representation of the MAP message
- **Signature**: `IngestMapmessages(string vendorId, EtxmessageStandardEnum mapDataMessageStandard, EtxMapDataIngestRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<IngestMapmessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMdmErrorResponse(out MdmErrorResponse)` [400, 401, 403, 405, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMapMessages
- **HTTP**: `POST /api/v2/mapdata/query` (ImpServer (imp))
- **Notes**: This endpoint allows users to download SAE J2735 or ETSI MAP messages as a JSON list. Depending on the expectedType parameter, the response contains either ASN.1 UPER base64-encoded messages with their respective region and intersection IDs, or fully decoded JSON messages. The area for MAP message retrieval must be defined in the request body using one of two methods: An array of region and intersection ID pairs, or a GeoJSON geofence specification.
- **Signature**: `QueryMapMessages(string vendorId, MapDataQueryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<QueryMapMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMdmErrorResponse(out MdmErrorResponse)` [400, 401, 403, 405, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
