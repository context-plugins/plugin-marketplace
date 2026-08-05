# Components — operations

Accessor: `client.Components` · Source: `Api/Components.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArchiveComponent
- **HTTP**: `DELETE /product_families/{product_family_id}/components/{component_id}.json` (Production)
- **Notes**: Archives the component; all current subscribers will continue to be charged as usual.
- **Signature**: `ArchiveComponent(int productFamilyId, string componentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Component`
- **Error**: `SdkException<ArchiveComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEventBasedComponent
- **HTTP**: `POST /product_families/{product_family_id}/event_based_components.json` (Production)
- **Notes**: Creates an event-based component definition under the specified product family. An event-based component can then be added and “allocated” for a subscription. Event-based components are similar to other component types, in that you define the component parameters (such as name and taxability) and the pricing. A key difference for the event-based component is that it must be attached to a metric. This is because the metric provides the component with the actual quantity used in computing what and how much will be billed each period for each subscription. So, instead of reporting usage directly for each component (as you would with metered components), the usage is derived from analysis of your events. For more information on components, see our documentation here . If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `CreateEventBasedComponent(string productFamilyId, CreateEbbComponent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<CreateEventBasedComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateMeteredComponent
- **HTTP**: `POST /product_families/{product_family_id}/metered_components.json` (Production)
- **Notes**: Creates a metered component definition under the specified product family. A metered component can then be added and “allocated” for a subscription. Metered components are used to bill for any type of unit that resets to 0 at the end of the billing period (think daily Google Ads clicks or monthly cell phone minutes). This is most commonly associated with usage-based billing and many other pricing schemes. Note that this is different from recurring quantity-based components, which DO NOT reset to zero at the start of every billing period. If you want to bill for a quantity of something that does not change unless you change it, then you want quantity components, instead. For more information on components, see our documentation here . If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `CreateMeteredComponent(string productFamilyId, CreateMeteredComponent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<CreateMeteredComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOnOffComponent
- **HTTP**: `POST /product_families/{product_family_id}/on_off_components.json` (Production)
- **Notes**: Creates an On/Off component definition under the specified product family. An On/Off component can then be added and “allocated” for a subscription. On/off components are used for any flat fee, recurring add on (think $99/month for tech support or a flat add on shipping fee). For more information on components, see our documentation here . If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `CreateOnOffComponent(string productFamilyId, CreateOnOffComponent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<CreateOnOffComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePrepaidUsageComponent
- **HTTP**: `POST /product_families/{product_family_id}/prepaid_usage_components.json` (Production)
- **Notes**: Creates a prepaid usage component definition under the specified product family. A prepaid component can then be added and “allocated” for a subscription. Prepaid components allow customers to pre-purchase units that can be used up over time on their subscription. In a sense, they are the mirror image of metered components; while metered components charge at the end of the period for the amount of units used, prepaid components are charged for at the time of purchase, and we subsequently keep track of the usage against the amount purchased. For more information on components, see our documentation here . If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `CreatePrepaidUsageComponent(string productFamilyId, CreatePrepaidComponent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<CreatePrepaidUsageComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateQuantityBasedComponent
- **HTTP**: `POST /product_families/{product_family_id}/quantity_based_components.json` (Production)
- **Notes**: Creates a Quantity Based component definition under the specified product family. A Quantity Based component can then be added and “allocated” for a subscription. When defining a Quantity Based component, you can choose one of 2 types: Recurring Recurring quantity-based components are used to bill for the number of some unit (think monthly software user licenses or the number of pairs of socks in a box-a-month club). This is most commonly associated with billing for user licenses, number of users, number of employees, etc. One-time One-time quantity-based components are used to create ad hoc usage charges that do not recur. For example, at the time of signup, you might want to charge your customer a one-time fee for onboarding or other services. The allocated quantity for one-time quantity-based components immediately gets reset back to zero after the allocation is made. For more information on components, see our documentation here . If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `CreateQuantityBasedComponent(string productFamilyId, CreateQuantityBasedComponent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<CreateQuantityBasedComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindComponent
- **HTTP**: `GET /components/lookup.json` (Production)
- **Notes**: Returns information for a component matching the provided handle. You can identify your components with a handle so you don't have to save or reference the IDs we generate.
- **Signature**: `FindComponent(string handle, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `handle` ← `handle`
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListComponents
- **HTTP**: `GET /components.json` (Production)
- **Notes**: Lists components for a site.
- **Signature**: `ListComponents(BasicDateField? dateField, string? startDate, string? endDate, string? startDatetime, string? endDatetime, bool? includeArchived, ListComponentsFilter? filter, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`dateField` … `filter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `date_field` ← `dateField`, `start_date` ← `startDate`, `end_date` ← `endDate`, `start_datetime` ← `startDatetime`, `end_datetime` ← `endDatetime`, `include_archived` ← `includeArchived`, `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`
- **Returns**: `IReadOnlyList<ComponentResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListComponentsForProductFamily
- **HTTP**: `GET /product_families/{product_family_id}/components.json` (Production)
- **Notes**: Lists components for a particular product family.
- **Signature**: `ListComponentsForProductFamily(int productFamilyId, bool? includeArchived, ListComponentsFilter? filter, BasicDateField? dateField, string? endDate, string? endDatetime, string? startDate, string? startDatetime, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`includeArchived` … `startDatetime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `include_archived` ← `includeArchived`, `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`, `date_field` ← `dateField`, `end_date` ← `endDate`, `end_datetime` ← `endDatetime`, `start_date` ← `startDate`, `start_datetime` ← `startDatetime`
- **Returns**: `IReadOnlyList<ComponentResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadComponent
- **HTTP**: `GET /product_families/{product_family_id}/components/{component_id}.json` (Production)
- **Notes**: Returns information regarding a component from a specific product family. You can read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.
- **Signature**: `ReadComponent(int productFamilyId, string componentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateComponent
- **HTTP**: `PUT /components/{component_id}.json` (Production)
- **Notes**: Updates a component. You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`. If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `UpdateComponent(string componentId, UpdateComponentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<UpdateComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateProductFamilyComponent
- **HTTP**: `PUT /product_families/{product_family_id}/components/{component_id}.json` (Production)
- **Notes**: Updates a component from a specific product family. You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`. If you have the new Catalog experience enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.
- **Signature**: `UpdateProductFamilyComponent(int productFamilyId, string componentId, UpdateComponentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<UpdateProductFamilyComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
