# ApiauthenticationApiToken — operations

Accessor: `client.ApiauthenticationApiToken` · Source: `Api/ApiauthenticationApiToken.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Authorizeusingapitoken
- **HTTP**: `GET /api/v1/self` (Default)
- **Notes**: To use API token, add a Authorization header when making an API request like the following: Authorization: Token &lt;key&gt; GET /api/v1/self ```
- **Signature**: `Authorizeusingapitoken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Createapitoken
- **HTTP**: `POST /api/v1/self/apitokens` (Default)
- **Notes**: This API generates a new API token for the authenticated user. The token can be used for authentication in future API requests. Note: The token key is only available at creation time and cannot be retrieved later. Authentication: Type: Basic Authentication Username: Password: Response Fields: `id` _(string)_ – Unique identifier for the API token. `last_used` _(timestamp or null)_ – Indicates the last time the token was used. Initially `null`. `key` _(string)_ – The actual API token key (only visible at creation time). `created_time` _(timestamp)_ – The timestamp representing the creation time of the token.
- **Signature**: `Createapitoken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Createorgapitoken
- **HTTP**: `POST /api/v1/orgs/{org_id}/apitokens` (Default)
- **Notes**: Description: Creates a new Org-level API token with a specific set of privileges scoped to the organization and/or its sites. The token `key` is returned only in this creation response and cannot be retrieved later. Creation is not permitted when authenticating with an API token, and an org-configurable maximum number of tokens applies. Request Body: `name` _(string)_ – A human-readable label for the token. `privileges` _(array)_ – One or more privilege objects (scope, role, and the org_id/site_id the privilege applies to). Response Fields: `id` _(string)_ – Unique identifier for the API token. `key` _(string)_ – The API token key (only visible at creation time). `privileges` _(array)_ – The privileges granted to the token.
- **Signature**: `Createorgapitoken(string orgId, ApiV1OrgsApitokensRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Deleteapitoken
- **HTTP**: `DELETE /api/v1/self/apitokens/{apitoken_id}` (Default)
- **Notes**: This API deletes a specific API token associated with the authenticated user. Once deleted, the token can no longer be used for authentication. Authentication: Type: Basic Authentication Username: Password: Path Variable: `{{apitoken_id}}` _(string)_ – The unique identifier of the API token to be deleted.
- **Signature**: `Deleteapitoken(string apitokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Deleteorgapitoken
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/apitokens/{id}` (Default)
- **Notes**: Description: Deletes an Org-level API token by ID. Once deleted, the token can no longer be used for authentication. Deletion is not permitted when authenticating with an API token. Path Variables: `{{org_id}}` _(string)_ – The organization identifier. `{{id}}` _(string)_ – The API token identifier.
- **Signature**: `Deleteorgapitoken(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Getorgapitoken
- **HTTP**: `GET /api/v1/orgs/{org_id}/apitokens/{id}` (Default)
- **Notes**: Description: Retrieves a single Org-level API token by ID, including its privileges and creator. The token key is not returned. Path Variables: `{{org_id}}` _(string)_ – The organization identifier. `{{id}}` _(string)_ – The API token identifier.
- **Signature**: `Getorgapitoken(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Listapitokens
- **HTTP**: `GET /api/v1/self/apitokens` (Default)
- **Notes**: Description: This API retrieves a list of all active API tokens associated with the authenticated user account. It allows users to view their current API tokens for authentication and access management. Authentication: Type: Basic Authentication Username: Password: Response: A JSON array containing details of all active API tokens, including token ID, creation date, and expiration details.
- **Signature**: `Listapitokens(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Listorgapitokens
- **HTTP**: `GET /api/v1/orgs/{org_id}/apitokens` (Default)
- **Notes**: Description: Retrieves all Org-level API tokens for the specified organization. Org API tokens are tied to a delegated set of privileges scoped to the org and/or its sites. Token keys are never returned by this endpoint; each entry includes the creator and the token privileges. Response: A JSON array of Org API tokens, each including `id`, `name`, `created_by`, `last_used`, and `privileges`.
- **Signature**: `Listorgapitokens(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Updateorgapitoken
- **HTTP**: `PUT /api/v1/orgs/{org_id}/apitokens/{id}` (Default)
- **Notes**: Description: Updates an Org-level API token name and/or privileges. Sending an empty `privileges` array removes all privileges from the token. Updates are not permitted when authenticating with an API token. Request Body: `name` _(string, optional)_ – New label for the token. `privileges` _(array, optional)_ – Replacement privilege set.
- **Signature**: `Updateorgapitoken(string orgId, string id, ApiV1OrgsApitokensRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
