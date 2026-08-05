# MspsSso — operations

Accessor: `client.MspsSso` · Source: `Api/MspsSso.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMspSso
- **HTTP**: `POST /api/v1/msps/{msp_id}/ssos` (ApiHost (api))
- **Notes**: Create MSP SSO profile
- **Signature**: `CreateMspSso(Guid mspId, Sso? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sso`
- **Error**: `SdkException<CreateMspSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMspSso
- **HTTP**: `DELETE /api/v1/msps/{msp_id}/ssos/{sso_id}` (ApiHost (api))
- **Notes**: Delete MSP SSO Config
- **Signature**: `DeleteMspSso(Guid mspId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMspSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadMspSamlMetadata
- **HTTP**: `GET /api/v1/msps/{msp_id}/ssos/{sso_id}/metadata.xml` (ApiHost (api))
- **Notes**: Download MSP SAML Metadata Example of metadata.xml: &lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://api.mist.com/api/v1/saml/5hdF5g/login" validUntil="2027-10-12T21:59:01Z" xmlns:ds="http://www.w3.org/2000/09/xmldsig"&gt; &lt;md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"&gt; &lt;md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.mist.com/api/v1/saml/5hdF5g/logout" /&gt; &lt;md:NameIDFormat&gt;urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified&lt;/md:NameIDFormat&gt; &lt;md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.mist.com/api/v1/saml/5hdF5g/login" index="0" isDefault="true"/&gt; &lt;md:AttributeConsumingService index="0"&gt; &lt;md:ServiceName xml:lang="en-US"&gt;Mist&lt;/md:ServiceName&gt; &lt;md:RequestedAttribute Name="Role" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="true"/&gt; &lt;md:RequestedAttribute Name="FirstName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"/&gt; &lt;md:RequestedAttribute Name="LastName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"/&gt; &lt;/md:AttributeConsumingService&gt; &lt;/md:SPSSODescriptor&gt; &lt;/md:EntityDescriptor&gt;
- **Signature**: `DownloadMspSamlMetadata(Guid mspId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<DownloadMspSamlMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMspSamlMetadata
- **HTTP**: `GET /api/v1/msps/{msp_id}/ssos/{sso_id}/metadata` (ApiHost (api))
- **Notes**: Get MSP SAML Metadata
- **Signature**: `GetMspSamlMetadata(Guid mspId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SamlMetadata`
- **Error**: `SdkException<GetMspSamlMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMspSso
- **HTTP**: `GET /api/v1/msps/{msp_id}/ssos/{sso_id}` (ApiHost (api))
- **Notes**: Get MSP SSO Config
- **Signature**: `GetMspSso(Guid mspId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Sso`
- **Error**: `SdkException<GetMspSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspSsoLatestFailures
- **HTTP**: `GET /api/v1/msps/{msp_id}/ssos/{sso_id}/failures` (ApiHost (api))
- **Notes**: Get List of MSP SSO Latest Failures
- **Signature**: `ListMspSsoLatestFailures(Guid mspId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSsoFailureSearch`
- **Error**: `SdkException<ListMspSsoLatestFailuresError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspSsos
- **HTTP**: `GET /api/v1/msps/{msp_id}/ssos` (ApiHost (api))
- **Notes**: List MSP SSO Configs
- **Signature**: `ListMspSsos(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sso>`
- **Error**: `SdkException<ListMspSsosError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMspSso
- **HTTP**: `PUT /api/v1/msps/{msp_id}/ssos/{sso_id}` (ApiHost (api))
- **Notes**: Update MSP SSO config
- **Signature**: `UpdateMspSso(Guid mspId, Guid ssoId, Sso? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sso`
- **Error**: `SdkException<UpdateMspSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
