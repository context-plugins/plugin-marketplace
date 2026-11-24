# Reference

> Source: [GoogleCloudDatastreamClient](src/client.ts)

<details>
<summary><code>datastreamProjectsLocationsConnectionProfilesCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a connection profile in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsConnectionProfilesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsConnectionProfilesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>connectionProfileId?</code> | <code>string</code> | Required. The connection profile identifier. |
| <code>force?</code> | <code>boolean</code> | Optional. Create the connection profile without validating it. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. Only validate the connection profile, but don't create any resources. The default is false. |
| <code>body</code> | <code>[ConnectionProfile](src/models/connection-profile.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsConnectionProfilesCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsConnectionProfilesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsConnectionProfilesDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a connection profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsConnectionProfilesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionProfilesId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsConnectionProfilesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionProfilesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>connectionProfilesId</code> | <code>string</code> | Resource name segment (connectionProfilesId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsConnectionProfilesDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsConnectionProfilesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsConnectionProfilesDiscover(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest, options?: RequestOptions): ApiPromise&lt;DiscoverConnectionProfileResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsConnectionProfilesDiscover({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type DiscoverConnectionProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsConnectionProfilesDiscover({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscoverConnectionProfileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[DiscoverConnectionProfileRequest](src/models/discover-connection-profile-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsConnectionProfilesDiscover(request)`

- **OnSuccess**: <code>[DiscoverConnectionProfileResponse](src/models/discover-connection-profile-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsConnectionProfilesDiscover(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscoverConnectionProfileResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError&gt;</code>, with `result.value` of type <code>[DiscoverConnectionProfileResponse](src/models/discover-connection-profile-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsConnectionProfilesGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetRequest, options?: RequestOptions): ApiPromise&lt;ConnectionProfile, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a connection profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsConnectionProfilesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionProfilesId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectionProfile
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsConnectionProfilesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionProfilesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionProfile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>connectionProfilesId</code> | <code>string</code> | Resource name segment (connectionProfilesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsConnectionProfilesGet(request)`

- **OnSuccess**: <code>[ConnectionProfile](src/models/connection-profile.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsConnectionProfilesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionProfile, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError&gt;</code>, with `result.value` of type <code>[ConnectionProfile](src/models/connection-profile.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsConnectionProfilesList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListRequest, options?: RequestOptions): ApiPromise&lt;ListConnectionProfilesResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list connection profiles created in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsConnectionProfilesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListConnectionProfilesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsConnectionProfilesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListConnectionProfilesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter request. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by fields for the result. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsConnectionProfilesList(request)`

- **OnSuccess**: <code>[ListConnectionProfilesResponse](src/models/list-connection-profiles-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsConnectionProfilesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListConnectionProfilesResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError&gt;</code>, with `result.value` of type <code>[ListConnectionProfilesResponse](src/models/list-connection-profiles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsConnectionProfilesPatch(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to update the parameters of a connection profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsConnectionProfilesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionProfilesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsConnectionProfilesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionProfilesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>connectionProfilesId</code> | <code>string</code> | Resource name segment (connectionProfilesId). |
| <code>force?</code> | <code>boolean</code> | Optional. Update the connection profile without validating it. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| <code>updateMask?</code> | <code>string</code> | Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. Only validate the connection profile, but don't update any resources. The default is false. |
| <code>body</code> | <code>[ConnectionProfile](src/models/connection-profile.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsConnectionProfilesPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsConnectionProfilesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsFetchStaticIps(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsRequest, options?: RequestOptions): ApiPromise&lt;FetchStaticIpsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsFetchStaticIps({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type FetchStaticIpsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsFetchStaticIps({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FetchStaticIpsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of Ips to return, will likely not be specified. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListStaticIps` call. will likely not be specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsFetchStaticIps(request)`

- **OnSuccess**: <code>[FetchStaticIpsResponse](src/models/fetch-static-ips-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsFetchStaticIps(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FetchStaticIpsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError&gt;</code>, with `result.value` of type <code>[FetchStaticIpsResponse](src/models/fetch-static-ips-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;Location, GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Location
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsGet(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsList({ projectsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>extraLocationTypes?</code> | <code>string[]</code> | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| <code>filter?</code> | <code>string</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of results to return. If not set, the service selects a default. |
| <code>pageToken?</code> | <code>string</code> | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsList(request)`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsOperationsCancel(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsOperationsDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsOperationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsOperationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsOperationsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsOperationsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ListOperationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOperationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | The standard list filter. |
| <code>pageSize?</code> | <code>number</code> | The standard list page size. |
| <code>pageToken?</code> | <code>string</code> | The standard list page token. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsOperationsList(request)`

- **OnSuccess**: <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOperationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError&gt;</code>, with `result.value` of type <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a private connectivity configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>force?</code> | <code>boolean</code> | Optional. If set to true, will skip validations. |
| <code>privateConnectionId?</code> | <code>string</code> | Required. The private connectivity identifier. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection. |
| <code>body</code> | <code>[PrivateConnection](src/models/private-connection.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a private connectivity configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>privateConnectionsId</code> | <code>string</code> | Resource name segment (privateConnectionsId). |
| <code>force?</code> | <code>boolean</code> | Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetRequest, options?: RequestOptions): ApiPromise&lt;PrivateConnection, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a private connectivity configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
  });
  // TODO: Handle 'response' of type PrivateConnection
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PrivateConnection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>privateConnectionsId</code> | <code>string</code> | Resource name segment (privateConnectionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsGet(request)`

- **OnSuccess**: <code>[PrivateConnection](src/models/private-connection.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PrivateConnection, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError&gt;</code>, with `result.value` of type <code>[PrivateConnection](src/models/private-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListRequest, options?: RequestOptions): ApiPromise&lt;ListPrivateConnectionsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list private connectivity configurations in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListPrivateConnectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPrivateConnectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter request. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by fields for the result. |
| <code>pageSize?</code> | <code>number</code> | Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsList(request)`

- **OnSuccess**: <code>[ListPrivateConnectionsResponse](src/models/list-private-connections-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPrivateConnectionsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError&gt;</code>, with `result.value` of type <code>[ListPrivateConnectionsResponse](src/models/list-private-connections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsRoutesCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a route for a private connectivity configuration in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsRoutesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsRoutesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>privateConnectionsId</code> | <code>string</code> | Resource name segment (privateConnectionsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| <code>routeId?</code> | <code>string</code> | Required. The Route identifier. |
| <code>body</code> | <code>[Route](src/models/route.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsRoutesDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a route.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsRoutesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
    routesId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsRoutesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
    routesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>privateConnectionsId</code> | <code>string</code> | Resource name segment (privateConnectionsId). |
| <code>routesId</code> | <code>string</code> | Resource name segment (routesId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsRoutesGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest, options?: RequestOptions): ApiPromise&lt;Route, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a route.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsRoutesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
    routesId: "some example string",
  });
  // TODO: Handle 'response' of type Route
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsRoutesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
    routesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Route
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>privateConnectionsId</code> | <code>string</code> | Resource name segment (privateConnectionsId). |
| <code>routesId</code> | <code>string</code> | Resource name segment (routesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesGet(request)`

- **OnSuccess**: <code>[Route](src/models/route.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Route, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError&gt;</code>, with `result.value` of type <code>[Route](src/models/route.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsPrivateConnectionsRoutesList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest, options?: RequestOptions): ApiPromise&lt;ListRoutesResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list routes created for a private connectivity configuration in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsPrivateConnectionsRoutesList({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
  });
  // TODO: Handle 'response' of type ListRoutesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsPrivateConnectionsRoutesList({
    projectsId: "some example string",
    locationsId: "some example string",
    privateConnectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListRoutesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>privateConnectionsId</code> | <code>string</code> | Resource name segment (privateConnectionsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter request. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by fields for the result. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesList(request)`

- **OnSuccess**: <code>[ListRoutesResponse](src/models/list-routes-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsPrivateConnectionsRoutesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListRoutesResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError&gt;</code>, with `result.value` of type <code>[ListRoutesResponse](src/models/list-routes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a stream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>force?</code> | <code>boolean</code> | Optional. Create the stream without validating it. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| <code>streamId?</code> | <code>string</code> | Required. The stream identifier. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. Only validate the stream, but don't create any resources. The default is false. |
| <code>body</code> | <code>[Stream](src/models/stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a stream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetRequest, options?: RequestOptions): ApiPromise&lt;Stream, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a stream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
  });
  // TODO: Handle 'response' of type Stream
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stream
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsGet(request)`

- **OnSuccess**: <code>[Stream](src/models/stream.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stream, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError&gt;</code>, with `result.value` of type <code>[Stream](src/models/stream.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListRequest, options?: RequestOptions): ApiPromise&lt;ListStreamsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list streams in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListStreamsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListStreamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter request. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by fields for the result. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsList(request)`

- **OnSuccess**: <code>[ListStreamsResponse](src/models/list-streams-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListStreamsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError&gt;</code>, with `result.value` of type <code>[ListStreamsResponse](src/models/list-streams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsObjectsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetRequest, options?: RequestOptions): ApiPromise&lt;StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a stream object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsObjectsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    objectsId: "some example string",
  });
  // TODO: Handle 'response' of type StreamObject
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsObjectsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    objectsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StreamObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>objectsId</code> | <code>string</code> | Resource name segment (objectsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsObjectsGet(request)`

- **OnSuccess**: <code>[StreamObject](src/models/stream-object.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsObjectsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError&gt;</code>, with `result.value` of type <code>[StreamObject](src/models/stream-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsObjectsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListRequest, options?: RequestOptions): ApiPromise&lt;ListStreamObjectsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list the objects of a specific stream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsObjectsList({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
  });
  // TODO: Handle 'response' of type ListStreamObjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsObjectsList({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListStreamObjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsObjectsList(request)`

- **OnSuccess**: <code>[ListStreamObjectsResponse](src/models/list-stream-objects-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsObjectsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListStreamObjectsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError&gt;</code>, with `result.value` of type <code>[ListStreamObjectsResponse](src/models/list-stream-objects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsObjectsLookup(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupRequest, options?: RequestOptions): ApiPromise&lt;StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to look up a stream object by its source object identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsObjectsLookup({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type StreamObject
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsObjectsLookup({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StreamObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>body</code> | <code>[LookupStreamObjectRequest](src/models/lookup-stream-object-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsObjectsLookup(request)`

- **OnSuccess**: <code>[StreamObject](src/models/stream-object.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsObjectsLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError&gt;</code>, with `result.value` of type <code>[StreamObject](src/models/stream-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsObjectsStartBackfillJob(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest, options?: RequestOptions): ApiPromise&lt;StartBackfillJobResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to start a backfill job for the specified stream object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsObjectsStartBackfillJob({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    objectsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type StartBackfillJobResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsObjectsStartBackfillJob({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    objectsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartBackfillJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>objectsId</code> | <code>string</code> | Resource name segment (objectsId). |
| <code>body</code> | <code>[StartBackfillJobRequest](src/models/start-backfill-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsObjectsStartBackfillJob(request)`

- **OnSuccess**: <code>[StartBackfillJobResponse](src/models/start-backfill-job-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsObjectsStartBackfillJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartBackfillJobResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError&gt;</code>, with `result.value` of type <code>[StartBackfillJobResponse](src/models/start-backfill-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsObjectsStopBackfillJob(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest, options?: RequestOptions): ApiPromise&lt;StopBackfillJobResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to stop a backfill job for the specified stream object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsObjectsStopBackfillJob({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    objectsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type StopBackfillJobResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsObjectsStopBackfillJob({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    objectsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StopBackfillJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>objectsId</code> | <code>string</code> | Resource name segment (objectsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsObjectsStopBackfillJob(request)`

- **OnSuccess**: <code>[StopBackfillJobResponse](src/models/stop-backfill-job-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsObjectsStopBackfillJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StopBackfillJobResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError&gt;</code>, with `result.value` of type <code>[StopBackfillJobResponse](src/models/stop-backfill-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsPatch(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to update the configuration of a stream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>force?</code> | <code>boolean</code> | Optional. Update the stream without validating it. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| <code>updateMask?</code> | <code>string</code> | Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. Only validate the stream with the changes, without actually updating it. The default is false. |
| <code>body</code> | <code>[Stream](src/models/stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datastreamProjectsLocationsStreamsRun(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to start, resume or recover a stream with a non default CDC strategy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datastreamProjectsLocationsStreamsRun({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .datastreamProjectsLocationsStreamsRun({
    projectsId: "some example string",
    locationsId: "some example string",
    streamsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>streamsId</code> | <code>string</code> | Resource name segment (streamsId). |
| <code>body</code> | <code>[RunStreamRequest](src/models/run-stream-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datastreamProjectsLocationsStreamsRun(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datastreamProjectsLocationsStreamsRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDatastreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

