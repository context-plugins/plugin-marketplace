# CategoryTreeApi — operations

Accessor: `client.CategoryTreeApi` · Source: `Api/CategoryTreeApi.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchItemAspects
- **HTTP**: `GET /category_tree/{category_tree_id}/fetch_item_aspects` (Default (api))
- **Notes**: This method returns a complete list of aspects for all of the leaf categories that belong to an eBay marketplace. The eBay marketplace is specified through the &lt;b&gt;category_tree_id&lt;/b&gt; URI parameter.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt; &lt;strong&gt;Note:&lt;/strong&gt; A successful call returns a payload as a gzipped JSON file sent as a binary file using the content-type:application/octet-stream in the response. This file may be large (over 100 MB, compressed). Extract the JSON file from the compressed file with a utility that handles .gz or .gzip. The open source &lt;a href="https://github.com/eBay/taxonomy-sdk " target="_blank"&gt;Taxonomy SDK&lt;/a&gt; can be used to compare the aspect metadata that is returned in this response. The &lt;b&gt;Taxonomy SDK&lt;/b&gt; uses this call to surface changes (new, modified, and removed entities) between an updated version of a bulk downloaded file relative to a previous version.&lt;/span&gt;
- **Signature**: `FetchItemAspects(string categoryTreeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetCategoriesAspectResponse`
- **Error**: `SdkException<FetchItemAspectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCategorySubtree
- **HTTP**: `GET /category_tree/{category_tree_id}/get_category_subtree` (Default (api))
- **Notes**: This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified category of a category tree. You identify the tree using the &lt;b&gt;category_tree_id&lt;/b&gt; parameter, which was returned by the &lt;a href="/develop/api/sell/taxonomy_apisell-taxonomy_api-category_tree-getdefaultcategorytreeid" &gt;getDefaultCategoryTreeId&lt;/a&gt; call in the &lt;b&gt;categoryTreeId&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt; &lt;strong&gt;Note:&lt;/strong&gt; This method can return a very large payload, so gzip compression is supported. To enable gzip compression, include the &lt;code&gt;Accept-Encoding&lt;/code&gt; header and set its value to &lt;code&gt;gzip&lt;/code&gt; as shown below: &lt;br&gt;&lt;br&gt;&lt;code&gt;Accept-Encoding: gzip&lt;/code&gt;&lt;/span&gt;
- **Signature**: `GetCategorySubtree(string categoryTreeId, string categoryId, string? acceptEncoding, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `acceptEncoding` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`
- **Returns**: `CategorySubtree`
- **Error**: `SdkException<GetCategorySubtreeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCategorySuggestions
- **HTTP**: `GET /category_tree/{category_tree_id}/get_category_suggestions` (Default (api))
- **Notes**: This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay to most closely correspond to the query string &lt;b&gt;q&lt;/b&gt;. Returned with each suggested node is a localized name for that category (based on the &lt;b&gt;Accept-Language&lt;/b&gt; header specified for the call), and details about each of the category's ancestor nodes, extending from its immediate parent up to the root of the category tree.&lt;br&gt;&lt;br&gt;You identify the tree using the &lt;b&gt;category_tree_id&lt;/b&gt; parameter, which was returned by the &lt;a href="/develop/api/sell/taxonomy_apisell-taxonomy_api-category_tree-getdefaultcategorytreeid" &gt;getDefaultCategoryTreeId&lt;/a&gt; call in the &lt;b&gt;categoryTreeId&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;&lt;div class="msgbox_important"&gt;&lt;p class="msgbox_importantInDiv"&gt;&lt;span class="autonumber"&gt;&lt;b&gt;&lt;span class="mcFormatColor"&gt;Important! &lt;/span&gt;&lt;/b&gt;&lt;/span&gt; This call is not supported in the Sandbox environment. It will return a response payload in which the &lt;b&gt;categoryName&lt;/b&gt; fields contain random or boilerplate text regardless of the query submitted.&lt;/span&gt;&lt;/p&gt;&lt;/div&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; Category suggestions returned by this method are partially determined by live inventory data on the eBay platform. In cases where items with similar titles are miscategorized, this may influence the recommendations returned and cause a less accurate category to rank higher. Suggestions should be treated as recommendations rather than authoritative classifications.&lt;/span&gt;
- **Signature**: `GetCategorySuggestions(string categoryTreeId, string q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`
- **Returns**: `CategorySuggestionResponse`
- **Error**: `SdkException<GetCategorySuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCategoryTree
- **HTTP**: `GET /category_tree/{category_tree_id}` (Default (api))
- **Notes**: This method retrieves the complete category tree that is identified by the &lt;b&gt;category_tree_id&lt;/b&gt; parameter. The value of &lt;b&gt;category_tree_id&lt;/b&gt; was returned by the &lt;a href="/develop/api/sell/taxonomy_apisell-taxonomy_api-category_tree-getdefaultcategorytreeid" &gt;getDefaultCategoryTreeId&lt;/a&gt; method in the &lt;b&gt;categoryTreeId&lt;/b&gt; field. The response contains details of all nodes of the specified eBay category tree, as well as the eBay marketplaces that use this category tree.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt; &lt;strong&gt;Note:&lt;/strong&gt; This method can return a very large payload, so gzip compression is supported. To enable gzip compression, include the &lt;code&gt;Accept-Encoding&lt;/code&gt; header and set its value to &lt;code&gt;gzip&lt;/code&gt; as shown below: &lt;br&gt;&lt;br&gt;&lt;code&gt;Accept-Encoding: gzip&lt;/code&gt;&lt;/span&gt;
- **Signature**: `GetCategoryTree(string categoryTreeId, string? acceptEncoding, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `acceptEncoding` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CategoryTree`
- **Error**: `SdkException<GetCategoryTreeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompatibilityProperties
- **HTTP**: `GET /category_tree/{category_tree_id}/get_compatibility_properties` (Default (api))
- **Notes**: This call retrieves the compatible vehicle aspects that are used to define a motor vehicle that is compatible with a motor vehicle part or accessory. The values that are retrieved here might include motor vehicle aspects such as 'Make', 'Model', 'Year', 'Engine', and 'Trim', and each of these aspects are localized for the eBay marketplace.&lt;br&gt;&lt;br&gt; The &lt;strong&gt;category_tree_id&lt;/strong&gt; value is passed in as a path parameter, and this value identifies the eBay category tree. The &lt;strong&gt;category_id&lt;/strong&gt; value is passed in as a query parameter, as this parameter is also required. The specified category must be a category that supports parts compatibility.&lt;br&gt;&lt;br&gt; At this time, this operation only supports parts and accessories listings for cars, trucks, and motorcycles (not boats, power sports, or any other vehicle types). Only the following eBay marketplaces support parts compatibility:&lt;ul&gt;&lt;li&gt;eBay US (Motors and non-Motors categories)&lt;/li&gt;&lt;li&gt;eBay Canada (Motors and non-Motors categories)&lt;/li&gt;&lt;li&gt;eBay UK&lt;/li&gt;&lt;li&gt;eBay Germany&lt;/li&gt;&lt;li&gt;eBay Australia&lt;/li&gt;&lt;li&gt;eBay France&lt;/li&gt;&lt;li&gt;eBay Italy&lt;/li&gt;&lt;li&gt;eBay Spain&lt;/li&gt;&lt;/ul&gt;
- **Signature**: `GetCompatibilityProperties(string categoryTreeId, string categoryId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`
- **Returns**: `GetCompatibilityMetadataResponse`
- **Error**: `SdkException<GetCompatibilityPropertiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompatibilityPropertyValues
- **HTTP**: `GET /category_tree/{category_tree_id}/get_compatibility_property_values` (Default (api))
- **Notes**: This call retrieves applicable compatible vehicle property values based on the specified eBay marketplace, specified eBay category, and filters used in the request. Compatible vehicle properties are returned in the &lt;strong&gt;compatibilityProperties.name&lt;/strong&gt; field of a &lt;a href="/develop/api/sell/taxonomy_apisell-taxonomy_api-category_tree-getcompatibilityproperties" &gt;getCompatibilityProperties&lt;/a&gt; response. &lt;br&gt;&lt;br&gt; One compatible vehicle property applicable to the specified eBay marketplace and eBay category is specified through the required &lt;strong&gt;compatibility_property&lt;/strong&gt; filter. Then, the user has the option of further restricting the compatible vehicle property values that are returned in the response by specifying one or more compatible vehicle property name/value pairs through the &lt;strong&gt;filter&lt;/strong&gt; query parameter.&lt;br&gt;&lt;br&gt;See the documentation in &lt;strong&gt;URI parameters&lt;/strong&gt; section for more information on using the &lt;strong&gt;compatibility_property&lt;/strong&gt; and &lt;strong&gt;filter&lt;/strong&gt; query parameters together to customize the data that is retrieved.
- **Signature**: `GetCompatibilityPropertyValues(string categoryTreeId, string compatibilityProperty, string categoryId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `compatibility_property` ← `compatibilityProperty`, `category_id` ← `categoryId`, `filter` ← `filter`
- **Returns**: `GetCompatibilityPropertyValuesResponse`
- **Error**: `SdkException<GetCompatibilityPropertyValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDefaultCategoryTreeId
- **HTTP**: `GET /get_default_category_tree_id` (Default (api))
- **Notes**: A given eBay marketplace might use multiple category trees, but one of those trees is considered to be the default for that marketplace. This call retrieves a reference to the default category tree associated with the specified eBay marketplace ID. The response includes only the tree's unique identifier and version, which you can use to retrieve more details about the tree, its structure, and its individual category nodes.
- **Signature**: `GetDefaultCategoryTreeId(string marketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `marketplace_id` ← `marketplaceId`
- **Returns**: `BaseCategoryTree`
- **Error**: `SdkException<GetDefaultCategoryTreeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetExpiredCategories
- **HTTP**: `GET /category_tree/{category_tree_id}/get_expired_categories` (Default (api))
- **Signature**: `GetExpiredCategories(string categoryTreeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExpiredCategories`
- **Error**: `SdkException<GetExpiredCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetItemAspectsForCategory
- **HTTP**: `GET /category_tree/{category_tree_id}/get_item_aspects_for_category` (Default (api))
- **Signature**: `GetItemAspectsForCategory(string categoryTreeId, string categoryId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`
- **Returns**: `AspectMetadata`
- **Error**: `SdkException<GetItemAspectsForCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
