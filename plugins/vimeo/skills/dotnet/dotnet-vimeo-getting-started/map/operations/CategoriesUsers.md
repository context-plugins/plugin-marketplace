# CategoriesUsers — operations

Accessor: `client.CategoriesUsers` · Source: `Api/CategoriesUsers.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfUserSubscribedToCategory
- **HTTP**: `GET /users/{user_id}/categories/{category}` (Default (api))
- **Notes**: This method determines whether the authenticated user follows the specified category.
- **Signature**: `CheckIfUserSubscribedToCategory(string category, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserSubscribedToCategoryAlt1
- **HTTP**: `GET /me/categories/{category}` (Default (api))
- **Notes**: This method determines whether the authenticated user follows the specified category.
- **Signature**: `CheckIfUserSubscribedToCategoryAlt1(string category, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCategorySubscriptions
- **HTTP**: `GET /users/{user_id}/categories` (Default (api))
- **Notes**: This method returns every category that the authenticated user follows.
- **Signature**: `GetCategorySubscriptions(double userId, Direction? direction, double? page, double? perPage, Sort24? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `CategoryConnection`
- **Error**: `SdkException<GetCategorySubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetCategorySubscriptionsAlt1
- **HTTP**: `GET /me/categories` (Default (api))
- **Notes**: This method returns every category that the authenticated user follows.
- **Signature**: `GetCategorySubscriptionsAlt1(Direction? direction, double? page, double? perPage, Sort24? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `CategoryConnection`
- **Error**: `SdkException<GetCategorySubscriptionsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SubscribeToCategory
- **HTTP**: `PUT /users/{user_id}/categories/{category}` (Default (api))
- **Notes**: This method causes the authenticated user to follow the specified category.
- **Signature**: `SubscribeToCategory(string category, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeToCategoryAlt1
- **HTTP**: `PUT /me/categories/{category}` (Default (api))
- **Notes**: This method causes the authenticated user to follow the specified category.
- **Signature**: `SubscribeToCategoryAlt1(string category, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnsubscribeFromCategory
- **HTTP**: `DELETE /users/{user_id}/categories/{category}` (Default (api))
- **Notes**: This method causes the authenticated user to stop following the specified category.
- **Signature**: `UnsubscribeFromCategory(string category, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnsubscribeFromCategoryAlt1
- **HTTP**: `DELETE /me/categories/{category}` (Default (api))
- **Notes**: This method causes the authenticated user to stop following the specified category.
- **Signature**: `UnsubscribeFromCategoryAlt1(string category, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
