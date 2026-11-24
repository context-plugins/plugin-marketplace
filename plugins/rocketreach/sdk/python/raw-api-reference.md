# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [RocketReachClient](rocket_reach/client.py)

## Account

> Source: [Account](rocket_reach/apis/account.py)

<details>
<summary><code>def create_new_api_key(*, api_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiKey, CreateNewApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create New API Key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.create_new_api_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateNewApiKeyErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.create_new_api_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateNewApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str \| None</code> | The API key for your account. You can also find your API key [here](https://rocketreach.co/account?section=nav_gen_api).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[ApiKey](rocket_reach/models/api_key.py), [CreateNewApiKeyErrorBody](rocket_reach/errors/create_new_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiKey](rocket_reach/models/api_key.py)</code> -- Success. Returns the new API key.

**On `Failure`**: `error` is <code>[CreateNewApiKeyErrorBody](rocket_reach/errors/create_new_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_account(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserModel, GetAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve & Manage Account Details

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.get_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.get_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[UserModel](rocket_reach/models/user_model.py), [GetAccountErrorBody](rocket_reach/errors/get_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserModel](rocket_reach/models/user_model.py)</code> -- Success. Returns the account object.

**On `Failure`**: `error` is <code>[GetAccountErrorBody](rocket_reach/errors/get_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_universal_account(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UniversalCreditsUserModelWithExtraAttributes, GetUniversalAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve & Manage Account Details

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.get_universal_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UniversalCreditsUserModelWithExtraAttributes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUniversalAccountErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.get_universal_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UniversalCreditsUserModelWithExtraAttributes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUniversalAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[UniversalCreditsUserModelWithExtraAttributes](rocket_reach/models/universal_credits_user_model_with_extra_attributes.py), [GetUniversalAccountErrorBody](rocket_reach/errors/get_universal_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UniversalCreditsUserModelWithExtraAttributes](rocket_reach/models/universal_credits_user_model_with_extra_attributes.py)</code> -- Success. Returns the account object.

**On `Failure`**: `error` is <code>[GetUniversalAccountErrorBody](rocket_reach/errors/get_universal_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyDataApi

> Source: [CompanyDataApi](rocket_reach/apis/company_data_api.py)

<details>
<summary><code>def create_company_lookup(*, domain: str | None = None, id_: int | None = None, linkedin_url: str | None = None, name: str | None = None, ticker: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateCompanyLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.company_data_api.with_raw_response.create_company_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCompanyLookupErrorBody
```

**Async**

```python
result = await async_client.company_data_api.with_raw_response.create_company_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCompanyLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str \| None</code> | Domain of the desired company to lookup (preferred).<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | RocketReach internal unique company ID<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | LinkedIn URL of the desired company to lookup.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Name of the desired company to lookup.<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Stock ticker of the desired company to lookup.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](rocket_reach/models/compiled_company_api_serializer_with_extended_company_attributes.py), [CreateCompanyLookupErrorBody](rocket_reach/errors/create_company_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](rocket_reach/models/compiled_company_api_serializer_with_extended_company_attributes.py)</code> -- Success. Returns the profile data for the company lookup.

**On `Failure`**: `error` is <code>[CreateCompanyLookupErrorBody](rocket_reach/errors/create_company_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_company_search(*, start: int | None = 1, page_size: int | None = 10, query: CompanyQuery1 | CompanyQuery1Dict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CompiledCompanyPublicDetails], CreateCompanySearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.company_data_api.with_raw_response.create_company_search(order_by=OrderByEnum.POPULARITY)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CompiledCompanyPublicDetails]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCompanySearchErrorBody
```

**Async**

```python
result = await async_client.company_data_api.with_raw_response.create_company_search(order_by=OrderByEnum.POPULARITY)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CompiledCompanyPublicDetails]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCompanySearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>int \| None</code> | Start index of the request results (counting from 1)<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Maximum number of results to return per page [1-100]<br>**Default**: <code>10</code> |
| <code>query</code> | <code>[CompanyQuery1](rocket_reach/models/company_query1.py) \| [CompanyQuery1Dict](rocket_reach/models/company_query1.py) \| None</code> | Search query object for the request<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[OrderByEnumOrStr](rocket_reach/models/enums/order_by_enum.py) \| None</code> | Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.<br>**Default**: <code>OrderByEnum.RELEVANCE</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;list&#91;[CompiledCompanyPublicDetails](rocket_reach/models/compiled_company_public_details.py)&#93;, [CreateCompanySearchErrorBody](rocket_reach/errors/create_company_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CompiledCompanyPublicDetails](rocket_reach/models/compiled_company_public_details.py)&#93;</code> -- Success. Companies search request accepted

**On `Failure`**: `error` is <code>[CreateCompanySearchErrorBody](rocket_reach/errors/create_company_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_person_and_company_lookup(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, lookup_type: LookupTypeOrStr | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person and Company Lookup

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.company_data_api.with_raw_response.create_person_and_company_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProfileApiSerializerWithCompiledCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonAndCompanyLookupErrorBody
```

**Async**

```python
result = await async_client.company_data_api.with_raw_response.create_person_and_company_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProfileApiSerializerWithCompiledCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonAndCompanyLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>current_employer</code> | <code>str \| None</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach`<br>**Default**: <code>None</code> |
| <code>email</code> | <code>EmailStr \| None</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co`<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | RocketReach internal unique profile ID.<br>- Example: `123456`<br>**Default**: <code>None</code> |
| <code>linkedin_ext_url</code> | <code>str \| None</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand`<br>**Default**: <code>None</code> |
| <code>lookup_type</code> | <code>[LookupTypeOrStr](rocket_reach/models/enums/lookup_type.py) \| None</code> | Lookup type for the request<br><br>* `standard` - standard<br>* `premium` - premium<br>* `premium (feeds disabled)` - premium (feeds disabled)<br>* `bulk` - bulk<br>* `phone` - phone<br>* `enrich` - enrich<br>**Default**: <code>None</code> |
| <code>metadata</code> | <code>dict&#91;str, Any&#93; \| None</code> | User metadata about the profile, such as external ids, tags, notes, etc.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand`<br>**Default**: <code>None</code> |
| <code>npi_number</code> | <code>int \| None</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890`<br>**Default**: <code>None</code> |
| <code>phone</code> | <code>str \| None</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555`<br>**Default**: <code>None</code> |
| <code>return_cached_emails</code> | <code>bool \| None</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: <code>True</code> |
| <code>title</code> | <code>str \| None</code> | Job title of the desired profile.<br>- Example: `Product Manager`<br>**Default**: <code>None</code> |
| <code>webhook_id</code> | <code>int \| None</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[ProfileApiSerializerWithCompiledCompany](rocket_reach/models/profile_api_serializer_with_compiled_company.py), [CreatePersonAndCompanyLookupErrorBody](rocket_reach/errors/create_person_and_company_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProfileApiSerializerWithCompiledCompany](rocket_reach/models/profile_api_serializer_with_compiled_company.py)</code> -- Success. Returns the profile data and company data for the person / company lookup.

**On `Failure`**: `error` is <code>[CreatePersonAndCompanyLookupErrorBody](rocket_reach/errors/create_person_and_company_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_universal_company_lookup(*, domain: str | None = None, id_: int | None = None, linkedin_url: str | None = None, name: str | None = None, ticker: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateUniversalCompanyLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.company_data_api.with_raw_response.create_universal_company_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalCompanyLookupErrorBody
```

**Async**

```python
result = await async_client.company_data_api.with_raw_response.create_universal_company_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalCompanyLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str \| None</code> | Domain of the desired company to lookup (preferred).<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | RocketReach internal unique company ID<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | LinkedIn URL of the desired company to lookup.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Name of the desired company to lookup.<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Stock ticker of the desired company to lookup.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](rocket_reach/models/compiled_company_api_serializer_with_extended_company_attributes.py), [CreateUniversalCompanyLookupErrorBody](rocket_reach/errors/create_universal_company_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](rocket_reach/models/compiled_company_api_serializer_with_extended_company_attributes.py)</code> -- Success. Returns the profile data for the company lookup.

**On `Failure`**: `error` is <code>[CreateUniversalCompanyLookupErrorBody](rocket_reach/errors/create_universal_company_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_universal_company_search(*, start: int | None = 1, page_size: int | None = 100, query: CompanyQuery | CompanyQueryDict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[UniversalCreditCompanySearchOutput], CreateUniversalCompanySearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.company_data_api.with_raw_response.create_universal_company_search()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UniversalCreditCompanySearchOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalCompanySearchErrorBody
```

**Async**

```python
result = await async_client.company_data_api.with_raw_response.create_universal_company_search()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UniversalCreditCompanySearchOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalCompanySearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>int \| None</code> | Paginate through search results by returning results starting from this value (counting from 1).<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Maximum number of search results to return per page.<br>**Default**: <code>100</code> |
| <code>query</code> | <code>[CompanyQuery](rocket_reach/models/company_query.py) \| [CompanyQueryDict](rocket_reach/models/company_query.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[OrderByEnumOrStr](rocket_reach/models/enums/order_by_enum.py) \| None</code> | Value sent with the request.<br>**Default**: <code>OrderByEnum.RELEVANCE</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;list&#91;[UniversalCreditCompanySearchOutput](rocket_reach/models/universal_credit_company_search_output.py)&#93;, [CreateUniversalCompanySearchErrorBody](rocket_reach/errors/create_universal_company_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[UniversalCreditCompanySearchOutput](rocket_reach/models/universal_credit_company_search_output.py)&#93;</code> -- Success. Companies search request accepted

**On `Failure`**: `error` is <code>[CreateUniversalCompanySearchErrorBody](rocket_reach/errors/create_universal_company_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PeopleDataApi

> Source: [PeopleDataApi](rocket_reach/apis/people_data_api.py)

<details>
<summary><code>def check_person_lookup_status(*, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ProfileApiCompiledCompany], CheckPersonLookupStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Person Lookup Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.check_person_lookup_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProfileApiCompiledCompany]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckPersonLookupStatusErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.check_person_lookup_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProfileApiCompiledCompany]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckPersonLookupStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>list&#91;int&#93; \| None</code> | List of Profile IDs<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;list&#91;[ProfileApiCompiledCompany](rocket_reach/models/profile_api_compiled_company.py)&#93;, [CheckPersonLookupStatusErrorBody](rocket_reach/errors/check_person_lookup_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ProfileApiCompiledCompany](rocket_reach/models/profile_api_compiled_company.py)&#93;</code> -- Success. Returns the status and profile data of the requested profiles.

**On `Failure`**: `error` is <code>[CheckPersonLookupStatusErrorBody](rocket_reach/errors/check_person_lookup_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def check_universal_person_lookup_status(*, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[UniversalCreditPersonLookupOutput], CheckUniversalPersonLookupStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Universal Person Lookup Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.check_universal_person_lookup_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UniversalCreditPersonLookupOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckUniversalPersonLookupStatusErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.check_universal_person_lookup_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UniversalCreditPersonLookupOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckUniversalPersonLookupStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>list&#91;int&#93; \| None</code> | List of Profile IDs<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;list&#91;[UniversalCreditPersonLookupOutput](rocket_reach/models/universal_credit_person_lookup_output.py)&#93;, [CheckUniversalPersonLookupStatusErrorBody](rocket_reach/errors/check_universal_person_lookup_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[UniversalCreditPersonLookupOutput](rocket_reach/models/universal_credit_person_lookup_output.py)&#93;</code> -- Success. Returns the status and profile data of the requested profiles.

**On `Failure`**: `error` is <code>[CheckUniversalPersonLookupStatusErrorBody](rocket_reach/errors/check_universal_person_lookup_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_person_and_company_lookup2(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, lookup_type: LookupTypeOrStr | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookup2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person and Company Lookup

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_person_and_company_lookup2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProfileApiSerializerWithCompiledCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonAndCompanyLookup2ErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_person_and_company_lookup2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProfileApiSerializerWithCompiledCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonAndCompanyLookup2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>current_employer</code> | <code>str \| None</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach`<br>**Default**: <code>None</code> |
| <code>email</code> | <code>EmailStr \| None</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co`<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | RocketReach internal unique profile ID.<br>- Example: `123456`<br>**Default**: <code>None</code> |
| <code>linkedin_ext_url</code> | <code>str \| None</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand`<br>**Default**: <code>None</code> |
| <code>lookup_type</code> | <code>[LookupTypeOrStr](rocket_reach/models/enums/lookup_type.py) \| None</code> | Lookup type for the request<br><br>* `standard` - standard<br>* `premium` - premium<br>* `premium (feeds disabled)` - premium (feeds disabled)<br>* `bulk` - bulk<br>* `phone` - phone<br>* `enrich` - enrich<br>**Default**: <code>None</code> |
| <code>metadata</code> | <code>dict&#91;str, Any&#93; \| None</code> | User metadata about the profile, such as external ids, tags, notes, etc.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand`<br>**Default**: <code>None</code> |
| <code>npi_number</code> | <code>int \| None</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890`<br>**Default**: <code>None</code> |
| <code>phone</code> | <code>str \| None</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555`<br>**Default**: <code>None</code> |
| <code>return_cached_emails</code> | <code>bool \| None</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: <code>True</code> |
| <code>title</code> | <code>str \| None</code> | Job title of the desired profile.<br>- Example: `Product Manager`<br>**Default**: <code>None</code> |
| <code>webhook_id</code> | <code>int \| None</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[ProfileApiSerializerWithCompiledCompany](rocket_reach/models/profile_api_serializer_with_compiled_company.py), [CreatePersonAndCompanyLookup2ErrorBody](rocket_reach/errors/create_person_and_company_lookup2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProfileApiSerializerWithCompiledCompany](rocket_reach/models/profile_api_serializer_with_compiled_company.py)</code> -- Success. Returns the profile data and company data for the person / company lookup.

**On `Failure`**: `error` is <code>[CreatePersonAndCompanyLookup2ErrorBody](rocket_reach/errors/create_person_and_company_lookup2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_person_bulk_lookup(*, queries: list[ProfileMatch | ProfileMatchDict] | None = None, profile_list: str | None = "API Bulk Lookup", webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreatePersonBulkLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk People Lookup by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_person_bulk_lookup(
    profile_list="API Bulk Lookup", webhook_id=12345
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonBulkLookupErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_person_bulk_lookup(
    profile_list="API Bulk Lookup", webhook_id=12345
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonBulkLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>queries</code> | <code>list&#91;[ProfileMatch](rocket_reach/models/profile_match.py) \| [ProfileMatchDict](rocket_reach/models/profile_match.py)&#93; \| None</code> | List of profile lookup queries for between 10 and 100 profiles<br>**Default**: <code>None</code> |
| <code>profile_list</code> | <code>str \| None</code> | Name of a profile list to add looked up profiles to upon completion<br>**Default**: <code>"API Bulk Lookup"</code> |
| <code>webhook_id</code> | <code>int \| None</code> | Webhook ID to post lookup results to upon completion. Find your webhook ID [here](https://rocketreach.co/account?section=nav_gen_api).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;None, [CreatePersonBulkLookupErrorBody](rocket_reach/errors/create_person_bulk_lookup_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreatePersonBulkLookupErrorBody](rocket_reach/errors/create_person_bulk_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_person_lookup(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, lookup_type: LookupTypeOrStr | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProfileApiWithMetadataCompiledCompany, CreatePersonLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person Enrichment API

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_person_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProfileApiWithMetadataCompiledCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonLookupErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_person_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProfileApiWithMetadataCompiledCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>current_employer</code> | <code>str \| None</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach`<br>**Default**: <code>None</code> |
| <code>email</code> | <code>EmailStr \| None</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co`<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | RocketReach internal unique profile ID.<br>- Example: `123456`<br>**Default**: <code>None</code> |
| <code>linkedin_ext_url</code> | <code>str \| None</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand`<br>**Default**: <code>None</code> |
| <code>lookup_type</code> | <code>[LookupTypeOrStr](rocket_reach/models/enums/lookup_type.py) \| None</code> | Lookup type for the request<br><br>* `standard` - standard<br>* `premium` - premium<br>* `premium (feeds disabled)` - premium (feeds disabled)<br>* `bulk` - bulk<br>* `phone` - phone<br>* `enrich` - enrich<br>**Default**: <code>None</code> |
| <code>metadata</code> | <code>dict&#91;str, Any&#93; \| None</code> | User metadata about the profile, such as external ids, tags, notes, etc.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand`<br>**Default**: <code>None</code> |
| <code>npi_number</code> | <code>int \| None</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890`<br>**Default**: <code>None</code> |
| <code>phone</code> | <code>str \| None</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555`<br>**Default**: <code>None</code> |
| <code>return_cached_emails</code> | <code>bool \| None</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: <code>True</code> |
| <code>title</code> | <code>str \| None</code> | Job title of the desired profile.<br>- Example: `Product Manager`<br>**Default**: <code>None</code> |
| <code>webhook_id</code> | <code>int \| None</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[ProfileApiWithMetadataCompiledCompany](rocket_reach/models/profile_api_with_metadata_compiled_company.py), [CreatePersonLookupErrorBody](rocket_reach/errors/create_person_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProfileApiWithMetadataCompiledCompany](rocket_reach/models/profile_api_with_metadata_compiled_company.py)</code> -- Success. Returns the profile data for the person lookup.

**On `Failure`**: `error` is <code>[CreatePersonLookupErrorBody](rocket_reach/errors/create_person_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_person_search(*, start: int | None = 1, page_size: int | None = 10, query: PersonQuery1 | PersonQuery1Dict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ProfileSearchResultSerializerBase], CreatePersonSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search People by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_person_search(order_by=OrderByEnum.POPULARITY)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProfileSearchResultSerializerBase]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonSearchErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_person_search(order_by=OrderByEnum.POPULARITY)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProfileSearchResultSerializerBase]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePersonSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>int \| None</code> | Start index of the request results (counting from 1)<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Maximum number of results to return per page [1-100]<br>**Default**: <code>10</code> |
| <code>query</code> | <code>[PersonQuery1](rocket_reach/models/person_query1.py) \| [PersonQuery1Dict](rocket_reach/models/person_query1.py) \| None</code> | Search query object for the request<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[OrderByEnumOrStr](rocket_reach/models/enums/order_by_enum.py) \| None</code> | Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.<br>**Default**: <code>OrderByEnum.RELEVANCE</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;list&#91;[ProfileSearchResultSerializerBase](rocket_reach/models/profile_search_result_serializer_base.py)&#93;, [CreatePersonSearchErrorBody](rocket_reach/errors/create_person_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ProfileSearchResultSerializerBase](rocket_reach/models/profile_search_result_serializer_base.py)&#93;</code> -- Success. People search request accepted

**On `Failure`**: `error` is <code>[CreatePersonSearchErrorBody](rocket_reach/errors/create_person_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_universal_person_bulk_lookup(*, queries: list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None = None, profile_list: str | None = "API Bulk Lookup", webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateUniversalPersonBulkLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk People Lookup by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_universal_person_bulk_lookup()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalPersonBulkLookupErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_universal_person_bulk_lookup()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalPersonBulkLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>queries</code> | <code>list&#91;[UniversalCreditPersonLookupInput](rocket_reach/models/universal_credit_person_lookup_input.py) \| [UniversalCreditPersonLookupInputDict](rocket_reach/models/universal_credit_person_lookup_input.py)&#93; \| None</code> | Specify the lookup criteria for up to 100 people.<br>**Default**: <code>None</code> |
| <code>profile_list</code> | <code>str \| None</code> | Add specified contacts to this profile list.<br>**Default**: <code>"API Bulk Lookup"</code> |
| <code>webhook_id</code> | <code>int \| None</code> | ID of the webhook to post lookup results upon completion.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;None, [CreateUniversalPersonBulkLookupErrorBody](rocket_reach/errors/create_universal_person_bulk_lookup_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateUniversalPersonBulkLookupErrorBody](rocket_reach/errors/create_universal_person_bulk_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_universal_person_lookup(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, reveal_detailed_person_enrichment: bool | None = False, reveal_healthcare_enrichment: bool | None = False, reveal_personal_email: bool | None = False, reveal_phone: bool | None = False, reveal_professional_email: bool | None = False, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UniversalCreditPersonLookupOutputWithMetadata, CreateUniversalPersonLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person Enrichment API

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_universal_person_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UniversalCreditPersonLookupOutputWithMetadata
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalPersonLookupErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_universal_person_lookup()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UniversalCreditPersonLookupOutputWithMetadata
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalPersonLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>current_employer</code> | <code>str \| None</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach`<br>**Default**: <code>None</code> |
| <code>email</code> | <code>EmailStr \| None</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co`<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | RocketReach internal unique profile ID.<br>- Example: `123456`<br>**Default**: <code>None</code> |
| <code>linkedin_ext_url</code> | <code>str \| None</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand`<br>**Default**: <code>None</code> |
| <code>metadata</code> | <code>dict&#91;str, Any&#93; \| None</code> | User metadata about the profile, such as external ids, tags, notes, etc.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand`<br>**Default**: <code>None</code> |
| <code>npi_number</code> | <code>int \| None</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890`<br>**Default**: <code>None</code> |
| <code>phone</code> | <code>str \| None</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555`<br>**Default**: <code>None</code> |
| <code>return_cached_emails</code> | <code>bool \| None</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: <code>True</code> |
| <code>reveal_detailed_person_enrichment</code> | <code>bool \| None</code> | Whether to reveal the detailed person enrichment data for the desired profile<br>**Default**: <code>False</code> |
| <code>reveal_healthcare_enrichment</code> | <code>bool \| None</code> | Whether to reveal the healthcare enrichment data for the desired profile<br>**Default**: <code>False</code> |
| <code>reveal_personal_email</code> | <code>bool \| None</code> | Whether to reveal the personal email enrichment data for the desired profile<br>**Default**: <code>False</code> |
| <code>reveal_phone</code> | <code>bool \| None</code> | Whether to reveal the phone enrichment data for the desired profile<br>**Default**: <code>False</code> |
| <code>reveal_professional_email</code> | <code>bool \| None</code> | Whether to reveal the professional email enrichment data for the desired profile<br>**Default**: <code>False</code> |
| <code>title</code> | <code>str \| None</code> | Job title of the desired profile.<br>- Example: `Product Manager`<br>**Default**: <code>None</code> |
| <code>webhook_id</code> | <code>int \| None</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;[UniversalCreditPersonLookupOutputWithMetadata](rocket_reach/models/universal_credit_person_lookup_output_with_metadata.py), [CreateUniversalPersonLookupErrorBody](rocket_reach/errors/create_universal_person_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UniversalCreditPersonLookupOutputWithMetadata](rocket_reach/models/universal_credit_person_lookup_output_with_metadata.py)</code> -- Success. Returns the profile data for the person lookup.

**On `Failure`**: `error` is <code>[CreateUniversalPersonLookupErrorBody](rocket_reach/errors/create_universal_person_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_universal_person_search(*, start: int | None = 1, page_size: int | None = 100, query: PersonQuery | PersonQueryDict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[UniversalCreditPersonSearchOutput], CreateUniversalPersonSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search People by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people_data_api.with_raw_response.create_universal_person_search()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UniversalCreditPersonSearchOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalPersonSearchErrorBody
```

**Async**

```python
result = await async_client.people_data_api.with_raw_response.create_universal_person_search()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UniversalCreditPersonSearchOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUniversalPersonSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>int \| None</code> | Paginate through search results by returning results starting from this value (counting from 1).<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Maximum number of search results to return per page.<br>**Default**: <code>100</code> |
| <code>query</code> | <code>[PersonQuery](rocket_reach/models/person_query.py) \| [PersonQueryDict](rocket_reach/models/person_query.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[OrderByEnumOrStr](rocket_reach/models/enums/order_by_enum.py) \| None</code> | Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.<br><br>* `relevance` - relevance<br>* `popularity` - popularity<br>* `score` - score<br>**Default**: <code>OrderByEnum.RELEVANCE</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rocket_reach/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rocket_reach/core/results.py)&#91;list&#91;[UniversalCreditPersonSearchOutput](rocket_reach/models/universal_credit_person_search_output.py)&#93;, [CreateUniversalPersonSearchErrorBody](rocket_reach/errors/create_universal_person_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[UniversalCreditPersonSearchOutput](rocket_reach/models/universal_credit_person_search_output.py)&#93;</code> -- Success. People search request accepted

**On `Failure`**: `error` is <code>[CreateUniversalPersonSearchErrorBody](rocket_reach/errors/create_universal_person_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[RawError](rocket_reach/core/results.py)</code> |
| anything unmapped | <code>[RawError](rocket_reach/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

