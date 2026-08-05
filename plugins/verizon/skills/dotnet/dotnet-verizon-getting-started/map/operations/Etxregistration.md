# Etxregistration — operations

Accessor: `client.Etxregistration` · Source: `Api/Etxregistration.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEtxclientCertificate
- **HTTP**: `GET /api/v2/clients/registration` (ImpServer (imp))
- **Notes**: With this API call the user can check the certificate of the device. At least one of the DeviceID, IMEI, ICCID or IMSI is required to make the call. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `GetEtxclientCertificate(EtxclientIdlookup id, string vendorId, Guid? xTransactionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ID` ← `id`
- **Returns**: `ClientPersistenceResponse`
- **Error**: `SdkException<GetEtxclientCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 403, 404, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEtxconnectionUrl
- **HTTP**: `POST /api/v2/clients/connection` (ImpServer (imp))
- **Notes**: With this API call the device or software service requests the MQTT URL for the location that it needs to connect. To determine the proper URL the device or software service needs to provide its ID (the one that was provided in the registration request), location (GPS coordinates), and whether it is on the Verizon cellular network or not. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `GetEtxconnectionUrl(string vendorId, Guid? xTransactionId, ConnectionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConnectionResponse`
- **Error**: `SdkException<GetEtxconnectionUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 403, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEtxconnectionUrlMultiMec
- **HTTP**: `POST /api/v3/clients/connection` (ImpServer (imp))
- **Notes**: With this API call the device or software service requests the MQTT URL for the location that it needs to connect. To determine the proper URL the device or software service needs to provide its ID (the one that was provided in the registration request), location (GPS coordinates), and whether it is on the Verizon cellular network or not. If there are multiple MECs that serve the location of the client all options are provided in the response, and the client is free to choose which MEC they want to connect. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `GetEtxconnectionUrlMultiMec(string vendorId, Guid? xTransactionId, ConnectionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConnectionResponseV3`
- **Error**: `SdkException<GetEtxconnectionUrlMultiMecError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 403, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryEtxdevices
- **HTTP**: `POST /api/v1/clients/query` (ImpServer (imp))
- **Notes**: This API allows retrieving devices by vendor ID and optional filters. The request should include the VendorID and any filters to apply.
- **Signature**: `QueryEtxdevices(Guid? xTransactionId, DevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DevicesResponse>`
- **Error**: `SdkException<QueryEtxdevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterEtxclient
- **HTTP**: `POST /api/v2/clients/registration` (ImpServer (imp))
- **Notes**: With this API call the user (client) registers its device or software service to the ETX system. Therefore, when a connection is initiated from the device or software service to the ETX system along with the credential provided by this registration call, then the connection will be authorized. The user can register multiple devices or software services, which can all be used at the same time. There rules set in the system that limit the type and subtype of the clients that are allowed to be registered under the VendorID. The rules are created based ont he agreement between the Vendor and Verizon. The user will only be able to register a limited number of devices or software services under the same VendorID. This registration limit is specified by the agreement between the Vendor and Verizon. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `RegisterEtxclient(Guid? xTransactionId, ClientRegistrationRequestV2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ClientRegistrationResponse`
- **Error**: `SdkException<RegisterEtxclientError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 403, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RenewEtxclientCertificate
- **HTTP**: `PUT /api/v2/clients/registration` (ImpServer (imp))
- **Notes**: With this API call the user (client) can: - renew the certificate of a device or software service in the ETX system if the original certificate has expired. If the client's certificate expired or going to expire within 30 days and new certificate will be issued. If the certificate expires more than 30 days, the current certificate will be returned to the client. - complete its device or software service registration to the ETX system if the original registration request was not successful because of a pending certificate generation. Whenever the user receives a "client registration is pending" response (HTTP 202) from POST /clients/registration call. The client should initiate this PUT API call to finish the registration process and get the required certificate. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `RenewEtxclientCertificate(Guid deviceId, string vendorId, Guid? xTransactionId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ClientRegistrationResponse`
- **Error**: `SdkException<RenewEtxclientCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 403, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnregisterEtxclients
- **HTTP**: `DELETE /api/v2/clients/registration` (ImpServer (imp))
- **Notes**: With this API call the user (client) can unregister its devices and software services from the ETX system. The unregistered devices and services will no longer be able to use the ETX Message Exchange. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `UnregisterEtxclients(IReadOnlyList<Guid> deviceIds, string vendorId, Guid? xTransactionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTransactionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DeviceIDs` ← `deviceIds`
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnregisterEtxclientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetEtxrespondingError(out EtxrespondingError)` [400, 401, 403, 429, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
