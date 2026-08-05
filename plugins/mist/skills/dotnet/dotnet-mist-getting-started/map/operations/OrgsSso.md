# OrgsSso — operations

Accessor: `client.OrgsSso` · Source: `Api/OrgsSso.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSso
- **HTTP**: `POST /api/v1/orgs/{org_id}/ssos` (ApiHost (api))
- **Notes**: Create Org SSO Configuration
- **Signature**: `CreateOrgSso(Guid orgId, Sso? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sso`
- **Error**: `SdkException<CreateOrgSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSso
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/ssos/{sso_id}` (ApiHost (api))
- **Notes**: Delete Org SSO Configuration
- **Signature**: `DeleteOrgSso(Guid orgId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadOrgSamlMetadata
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos/{sso_id}/metadata.xml` (ApiHost (api))
- **Notes**: Download Org SAML Metadata Example of metadata.xml: &lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://api.mist.com/api/v1/saml/5hdF5g/login" validUntil="2027-10-12T21:59:01Z" xmlns:ds="http://www.w3.org/2000/09/xmldsig"&gt; &lt;md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"&gt; &lt;md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.mist.com/api/v1/saml/5hdF5g/logout" /&gt; &lt;md:NameIDFormat&gt;urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified&lt;/md:NameIDFormat&gt; &lt;md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.mist.com/api/v1/saml/5hdF5g/login" index="0" isDefault="true"/&gt; &lt;md:AttributeConsumingService index="0"&gt; &lt;md:ServiceName xml:lang="en-US"&gt;Mist&lt;/md:ServiceName&gt; &lt;md:RequestedAttribute Name="Role" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="true"/&gt; &lt;md:RequestedAttribute Name="FirstName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"/&gt; &lt;md:RequestedAttribute Name="LastName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"/&gt; &lt;/md:AttributeConsumingService&gt; &lt;/md:SPSSODescriptor&gt; &lt;/md:EntityDescriptor&gt;
- **Signature**: `DownloadOrgSamlMetadata(Guid orgId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<DownloadOrgSamlMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSamlMetadata
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos/{sso_id}/metadata` (ApiHost (api))
- **Notes**: Get Org SAML Metadata
- **Signature**: `GetOrgSamlMetadata(Guid orgId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SamlMetadata`
- **Error**: `SdkException<GetOrgSamlMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSso
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos/{sso_id}` (ApiHost (api))
- **Notes**: Get Org SSO Configuration Details
- **Signature**: `GetOrgSso(Guid orgId, Guid ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Sso`
- **Error**: `SdkException<GetOrgSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSsoLatestFailures
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos/{sso_id}/failures` (ApiHost (api))
- **Notes**: Get List of Org SSO Latest Failures
- **Signature**: `ListOrgSsoLatestFailures(Guid orgId, Guid ssoId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseSsoFailureSearch`
- **Error**: `SdkException<ListOrgSsoLatestFailuresError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListOrgSsos
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos` (ApiHost (api))
- **Notes**: Get List of Org SSO Configuration
- **Signature**: `ListOrgSsos(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Sso>`
- **Error**: `SdkException<ListOrgSsosError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgSso
- **HTTP**: `PUT /api/v1/orgs/{org_id}/ssos/{sso_id}` (ApiHost (api))
- **Notes**: Update Org SSO Configuration
- **Signature**: `UpdateOrgSso(Guid orgId, Guid ssoId, Sso? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sso`
- **Error**: `SdkException<UpdateOrgSsoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
