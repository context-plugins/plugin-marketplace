# OrgsNacPortals — operations

Accessor: `client.OrgsNacPortals` · Source: `Api/OrgsNacPortals.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgNacPortal
- **HTTP**: `POST /api/v1/orgs/{org_id}/nacportals` (ApiHost (api))
- **Notes**: Create Org NAC Portal
- **Signature**: `CreateOrgNacPortal(Guid orgId, NacPortal? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacPortal`
- **Error**: `SdkException<CreateOrgNacPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgNacPortal
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/nacportals/{nacportal_id}` (ApiHost (api))
- **Notes**: Delete Org NAC Portal
- **Signature**: `DeleteOrgNacPortal(Guid orgId, Guid nacportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNacPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgNacPortalImage
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/nacportals/{nacportal_id}/portal_image` (ApiHost (api))
- **Notes**: Delete background image for NAC Portal If image is not uploaded or is deleted, NAC Portal will use default image.
- **Signature**: `DeleteOrgNacPortalImage(Guid orgId, Guid nacportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNacPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadOrgNacPortalSamlMetadata
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacportals/{nacportal_id}/saml_metadata.xml` (ApiHost (api))
- **Notes**: Download Org NAC Portal SAML Metadata Example of metadata.xml: &lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://api.mist.com/api/v1/saml/5hdF5g/login" validUntil="2027-10-12T21:59:01Z" xmlns:ds="http://www.w3.org/2000/09/xmldsig"&gt; &lt;md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"&gt; &lt;md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.mist.com/api/v1/saml/5hdF5g/logout" /&gt; &lt;md:NameIDFormat&gt;urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified&lt;/md:NameIDFormat&gt; &lt;md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.mist.com/api/v1/saml/5hdF5g/login" index="0" isDefault="true"/&gt; &lt;md:AttributeConsumingService index="0"&gt; &lt;md:ServiceName xml:lang="en-US"&gt;Mist&lt;/md:ServiceName&gt; &lt;md:RequestedAttribute Name="Role" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="true"/&gt; &lt;md:RequestedAttribute Name="FirstName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"/&gt; &lt;md:RequestedAttribute Name="LastName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"/&gt; &lt;/md:AttributeConsumingService&gt; &lt;/md:SPSSODescriptor&gt; &lt;/md:EntityDescriptor&gt;
- **Signature**: `DownloadOrgNacPortalSamlMetadata(Guid orgId, Guid nacportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<DownloadOrgNacPortalSamlMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNacPortal
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacportals/{nacportal_id}` (ApiHost (api))
- **Notes**: Get Org NAC Portal
- **Signature**: `GetOrgNacPortal(Guid orgId, Guid nacportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NacPortal`
- **Error**: `SdkException<GetOrgNacPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNacPortalSamlMetadata
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacportals/{nacportal_id}/saml_metadata` (ApiHost (api))
- **Notes**: Get Org NAC Portal SAML Metadata
- **Signature**: `GetOrgNacPortalSamlMetadata(Guid orgId, Guid nacportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SamlMetadata`
- **Error**: `SdkException<GetOrgNacPortalSamlMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgNacPortalSsoLatestFailures
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacportals/{nacportal_id}/failures` (ApiHost (api))
- **Notes**: Get List of Org NAC Portal SSO Latest Failures
- **Signature**: `ListOrgNacPortalSsoLatestFailures(Guid orgId, Guid nacportalId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseSsoFailureSearch`
- **Error**: `SdkException<ListOrgNacPortalSsoLatestFailuresError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListOrgNacPortals
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacportals` (ApiHost (api))
- **Notes**: List Org NAC Portals
- **Signature**: `ListOrgNacPortals(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<NacPortal>`
- **Error**: `SdkException<ListOrgNacPortalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgNacPortal
- **HTTP**: `PUT /api/v1/orgs/{org_id}/nacportals/{nacportal_id}` (ApiHost (api))
- **Notes**: Update Org NAC Portal
- **Signature**: `UpdateOrgNacPortal(Guid orgId, Guid nacportalId, NacPortal? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacPortal`
- **Error**: `SdkException<UpdateOrgNacPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgNacPortalTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/nacportals/{nacportal_id}/portal_template` (ApiHost (api))
- **Notes**: Update Org NAC Portal Template
- **Signature**: `UpdateOrgNacPortalTemplate(Guid orgId, Guid nacportalId, NacPortalTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgNacPortalTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadOrgNacPortalImage
- **HTTP**: `POST /api/v1/orgs/{org_id}/nacportals/{nacportal_id}/portal_image` (ApiHost (api))
- **Notes**: Upload background image for NAC Portal
- **Signature**: `UploadOrgNacPortalImage(Guid orgId, Guid nacportalId, BinaryContent? file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadOrgNacPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
