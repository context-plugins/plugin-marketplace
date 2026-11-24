# Reference

> Source: [RocketReachClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>createNewApiKey(request?: Account.CreateNewApiKeyRequest, options?: RequestOptions): ApiPromise&lt;ApiKey, Account.CreateNewApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create New API Key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.createNewApiKey();
  // TODO: Handle 'response' of type ApiKey
} catch (err) {
  // TODO: Handle 'err' of type Account.CreateNewApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.createNewApiKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKey
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
| <code>apiKey?</code> | <code>string</code> | The API key for your account. You can also find your API key [here](https://rocketreach.co/account?section=nav_gen_api). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.createNewApiKey(request)`

- **OnSuccess**: <code>[ApiKey](src/models/api-key.ts)</code>
- **OnError**: throws <code>[Account.CreateNewApiKeyError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.createNewApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKey, Account.CreateNewApiKeyError&gt;</code>, with `result.value` of type <code>[ApiKey](src/models/api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccount(options?: RequestOptions): ApiPromise&lt;UserModel, Account.GetAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve & Manage Account Details

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getAccount();
  // TODO: Handle 'response' of type UserModel
} catch (err) {
  // TODO: Handle 'err' of type Account.GetAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getAccount()`

- **OnSuccess**: <code>[UserModel](src/models/user-model.ts)</code>
- **OnError**: throws <code>[Account.GetAccountError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserModel, Account.GetAccountError&gt;</code>, with `result.value` of type <code>[UserModel](src/models/user-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUniversalAccount(options?: RequestOptions): ApiPromise&lt;UniversalCreditsUserModelWithExtraAttributes, Account.GetUniversalAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve & Manage Account Details

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getUniversalAccount();
  // TODO: Handle 'response' of type UniversalCreditsUserModelWithExtraAttributes
} catch (err) {
  // TODO: Handle 'err' of type Account.GetUniversalAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getUniversalAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UniversalCreditsUserModelWithExtraAttributes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getUniversalAccount()`

- **OnSuccess**: <code>[UniversalCreditsUserModelWithExtraAttributes](src/models/universal-credits-user-model-with-extra-attributes.ts)</code>
- **OnError**: throws <code>[Account.GetUniversalAccountError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getUniversalAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UniversalCreditsUserModelWithExtraAttributes, Account.GetUniversalAccountError&gt;</code>, with `result.value` of type <code>[UniversalCreditsUserModelWithExtraAttributes](src/models/universal-credits-user-model-with-extra-attributes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyDataApi

> Source: [CompanyDataApi](src/resources/company-data-api.ts)

<details>
<summary><code>createCompanyLookup(request?: CompanyDataApi.CreateCompanyLookupRequest, options?: RequestOptions): ApiPromise&lt;CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CompanyDataApi.CreateCompanyLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyDataApi.createCompanyLookup();
  // TODO: Handle 'response' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
} catch (err) {
  // TODO: Handle 'err' of type CompanyDataApi.CreateCompanyLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyDataApi.createCompanyLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
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
| <code>domain?</code> | <code>string</code> | Domain of the desired company to lookup (preferred). |
| <code>id?</code> | <code>number</code> | RocketReach internal unique company ID |
| <code>linkedinUrl?</code> | <code>string</code> | LinkedIn URL of the desired company to lookup. |
| <code>name?</code> | <code>string</code> | Name of the desired company to lookup. |
| <code>ticker?</code> | <code>string</code> | Stock ticker of the desired company to lookup. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyDataApi.createCompanyLookup(request)`

- **OnSuccess**: <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](src/models/compiled-company-api-serializer-with-extended-company-attributes.ts)</code>
- **OnError**: throws <code>[CompanyDataApi.CreateCompanyLookupError](src/resources/company-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyDataApi.createCompanyLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CompanyDataApi.CreateCompanyLookupError&gt;</code>, with `result.value` of type <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](src/models/compiled-company-api-serializer-with-extended-company-attributes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCompanySearch(request?: CompanyDataApi.CreateCompanySearchRequest, options?: RequestOptions): ApiPromise&lt;CompiledCompanyPublicDetails[], CompanyDataApi.CreateCompanySearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyDataApi.createCompanySearch({ orderBy: OrderByEnum.Popularity });
  // TODO: Handle 'response' of type CompiledCompanyPublicDetails[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyDataApi.CreateCompanySearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyDataApi
  .createCompanySearch({ orderBy: OrderByEnum.Popularity })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompiledCompanyPublicDetails[]
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
| <code>start?</code> | <code>number</code> | Start index of the request results (counting from 1)<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Maximum number of results to return per page [1-100]<br>**Default**: 10 |
| <code>query?</code> | <code>[CompanyQuery1](src/models/company-query1.ts)</code> | Search query object for the request |
| <code>orderBy?</code> | <code>[OrderByEnum](src/models/order-by-enum.ts)</code> | Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.<br>**Default**: "relevance" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyDataApi.createCompanySearch(request)`

- **OnSuccess**: <code>[CompiledCompanyPublicDetails](src/models/compiled-company-public-details.ts)[]</code>
- **OnError**: throws <code>[CompanyDataApi.CreateCompanySearchError](src/resources/company-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyDataApi.createCompanySearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompiledCompanyPublicDetails[], CompanyDataApi.CreateCompanySearchError&gt;</code>, with `result.value` of type <code>[CompiledCompanyPublicDetails](src/models/compiled-company-public-details.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPersonAndCompanyLookup(request?: CompanyDataApi.CreatePersonAndCompanyLookupRequest, options?: RequestOptions): ApiPromise&lt;ProfileApiSerializerWithCompiledCompany, CompanyDataApi.CreatePersonAndCompanyLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person and Company Lookup

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyDataApi.createPersonAndCompanyLookup();
  // TODO: Handle 'response' of type ProfileApiSerializerWithCompiledCompany
} catch (err) {
  // TODO: Handle 'err' of type CompanyDataApi.CreatePersonAndCompanyLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyDataApi.createPersonAndCompanyLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileApiSerializerWithCompiledCompany
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
| <code>currentEmployer?</code> | <code>string</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach` |
| <code>email?</code> | <code>string</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co` |
| <code>id?</code> | <code>number</code> | RocketReach internal unique profile ID.<br>- Example: `123456` |
| <code>linkedinExtUrl?</code> | <code>string</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead |
| <code>linkedinUrl?</code> | <code>string</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand` |
| <code>lookupType?</code> | <code>[LookupType](src/models/lookup-type.ts)</code> | Lookup type for the request<br><br>* `standard` - standard<br>* `premium` - premium<br>* `premium (feeds disabled)` - premium (feeds disabled)<br>* `bulk` - bulk<br>* `phone` - phone<br>* `enrich` - enrich |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | User metadata about the profile, such as external ids, tags, notes, etc. |
| <code>name?</code> | <code>string</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand` |
| <code>npiNumber?</code> | <code>number</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890` |
| <code>phone?</code> | <code>string</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555` |
| <code>returnCachedEmails?</code> | <code>boolean</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: true |
| <code>title?</code> | <code>string</code> | Job title of the desired profile.<br>- Example: `Product Manager` |
| <code>webhookId?</code> | <code>number</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyDataApi.createPersonAndCompanyLookup(request)`

- **OnSuccess**: <code>[ProfileApiSerializerWithCompiledCompany](src/models/profile-api-serializer-with-compiled-company.ts)</code>
- **OnError**: throws <code>[CompanyDataApi.CreatePersonAndCompanyLookupError](src/resources/company-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyDataApi.createPersonAndCompanyLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileApiSerializerWithCompiledCompany, CompanyDataApi.CreatePersonAndCompanyLookupError&gt;</code>, with `result.value` of type <code>[ProfileApiSerializerWithCompiledCompany](src/models/profile-api-serializer-with-compiled-company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUniversalCompanyLookup(request?: CompanyDataApi.CreateUniversalCompanyLookupRequest, options?: RequestOptions): ApiPromise&lt;CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CompanyDataApi.CreateUniversalCompanyLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyDataApi.createUniversalCompanyLookup();
  // TODO: Handle 'response' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
} catch (err) {
  // TODO: Handle 'err' of type CompanyDataApi.CreateUniversalCompanyLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyDataApi.createUniversalCompanyLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
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
| <code>domain?</code> | <code>string</code> | Domain of the desired company to lookup (preferred). |
| <code>id?</code> | <code>number</code> | RocketReach internal unique company ID |
| <code>linkedinUrl?</code> | <code>string</code> | LinkedIn URL of the desired company to lookup. |
| <code>name?</code> | <code>string</code> | Name of the desired company to lookup. |
| <code>ticker?</code> | <code>string</code> | Stock ticker of the desired company to lookup. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyDataApi.createUniversalCompanyLookup(request)`

- **OnSuccess**: <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](src/models/compiled-company-api-serializer-with-extended-company-attributes.ts)</code>
- **OnError**: throws <code>[CompanyDataApi.CreateUniversalCompanyLookupError](src/resources/company-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyDataApi.createUniversalCompanyLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CompanyDataApi.CreateUniversalCompanyLookupError&gt;</code>, with `result.value` of type <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](src/models/compiled-company-api-serializer-with-extended-company-attributes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUniversalCompanySearch(request?: CompanyDataApi.CreateUniversalCompanySearchRequest, options?: RequestOptions): ApiPromise&lt;UniversalCreditCompanySearchOutput[], CompanyDataApi.CreateUniversalCompanySearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyDataApi.createUniversalCompanySearch();
  // TODO: Handle 'response' of type UniversalCreditCompanySearchOutput[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyDataApi.CreateUniversalCompanySearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyDataApi.createUniversalCompanySearch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UniversalCreditCompanySearchOutput[]
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
| <code>start?</code> | <code>number</code> | Paginate through search results by returning results starting from this value (counting from 1).<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Maximum number of search results to return per page.<br>**Default**: 100 |
| <code>query?</code> | <code>[CompanyQuery](src/models/company-query.ts)</code> | - |
| <code>orderBy?</code> | <code>[OrderByEnum](src/models/order-by-enum.ts)</code> | -<br>**Default**: "relevance" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyDataApi.createUniversalCompanySearch(request)`

- **OnSuccess**: <code>[UniversalCreditCompanySearchOutput](src/models/universal-credit-company-search-output.ts)[]</code>
- **OnError**: throws <code>[CompanyDataApi.CreateUniversalCompanySearchError](src/resources/company-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyDataApi.createUniversalCompanySearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UniversalCreditCompanySearchOutput[], CompanyDataApi.CreateUniversalCompanySearchError&gt;</code>, with `result.value` of type <code>[UniversalCreditCompanySearchOutput](src/models/universal-credit-company-search-output.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PeopleDataApi

> Source: [PeopleDataApi](src/resources/people-data-api.ts)

<details>
<summary><code>checkPersonLookupStatus(request?: PeopleDataApi.CheckPersonLookupStatusRequest, options?: RequestOptions): ApiPromise&lt;ProfileApiCompiledCompany[], PeopleDataApi.CheckPersonLookupStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Person Lookup Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.checkPersonLookupStatus();
  // TODO: Handle 'response' of type ProfileApiCompiledCompany[]
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CheckPersonLookupStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.checkPersonLookupStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileApiCompiledCompany[]
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
| <code>ids?</code> | <code>number[]</code> | List of Profile IDs |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.checkPersonLookupStatus(request)`

- **OnSuccess**: <code>[ProfileApiCompiledCompany](src/models/profile-api-compiled-company.ts)[]</code>
- **OnError**: throws <code>[PeopleDataApi.CheckPersonLookupStatusError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.checkPersonLookupStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileApiCompiledCompany[], PeopleDataApi.CheckPersonLookupStatusError&gt;</code>, with `result.value` of type <code>[ProfileApiCompiledCompany](src/models/profile-api-compiled-company.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUniversalPersonLookupStatus(request?: PeopleDataApi.CheckUniversalPersonLookupStatusRequest, options?: RequestOptions): ApiPromise&lt;UniversalCreditPersonLookupOutput[], PeopleDataApi.CheckUniversalPersonLookupStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Universal Person Lookup Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.checkUniversalPersonLookupStatus();
  // TODO: Handle 'response' of type UniversalCreditPersonLookupOutput[]
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CheckUniversalPersonLookupStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.checkUniversalPersonLookupStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UniversalCreditPersonLookupOutput[]
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
| <code>ids?</code> | <code>number[]</code> | List of Profile IDs |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.checkUniversalPersonLookupStatus(request)`

- **OnSuccess**: <code>[UniversalCreditPersonLookupOutput](src/models/universal-credit-person-lookup-output.ts)[]</code>
- **OnError**: throws <code>[PeopleDataApi.CheckUniversalPersonLookupStatusError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.checkUniversalPersonLookupStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UniversalCreditPersonLookupOutput[], PeopleDataApi.CheckUniversalPersonLookupStatusError&gt;</code>, with `result.value` of type <code>[UniversalCreditPersonLookupOutput](src/models/universal-credit-person-lookup-output.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPersonAndCompanyLookup2(request?: PeopleDataApi.CreatePersonAndCompanyLookup2Request, options?: RequestOptions): ApiPromise&lt;ProfileApiSerializerWithCompiledCompany, PeopleDataApi.CreatePersonAndCompanyLookup2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person and Company Lookup

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.createPersonAndCompanyLookup2();
  // TODO: Handle 'response' of type ProfileApiSerializerWithCompiledCompany
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreatePersonAndCompanyLookup2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.createPersonAndCompanyLookup2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileApiSerializerWithCompiledCompany
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
| <code>currentEmployer?</code> | <code>string</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach` |
| <code>email?</code> | <code>string</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co` |
| <code>id?</code> | <code>number</code> | RocketReach internal unique profile ID.<br>- Example: `123456` |
| <code>linkedinExtUrl?</code> | <code>string</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead |
| <code>linkedinUrl?</code> | <code>string</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand` |
| <code>lookupType?</code> | <code>[LookupType](src/models/lookup-type.ts)</code> | Lookup type for the request<br><br>* `standard` - standard<br>* `premium` - premium<br>* `premium (feeds disabled)` - premium (feeds disabled)<br>* `bulk` - bulk<br>* `phone` - phone<br>* `enrich` - enrich |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | User metadata about the profile, such as external ids, tags, notes, etc. |
| <code>name?</code> | <code>string</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand` |
| <code>npiNumber?</code> | <code>number</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890` |
| <code>phone?</code> | <code>string</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555` |
| <code>returnCachedEmails?</code> | <code>boolean</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: true |
| <code>title?</code> | <code>string</code> | Job title of the desired profile.<br>- Example: `Product Manager` |
| <code>webhookId?</code> | <code>number</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createPersonAndCompanyLookup2(request)`

- **OnSuccess**: <code>[ProfileApiSerializerWithCompiledCompany](src/models/profile-api-serializer-with-compiled-company.ts)</code>
- **OnError**: throws <code>[PeopleDataApi.CreatePersonAndCompanyLookup2Error](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createPersonAndCompanyLookup2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileApiSerializerWithCompiledCompany, PeopleDataApi.CreatePersonAndCompanyLookup2Error&gt;</code>, with `result.value` of type <code>[ProfileApiSerializerWithCompiledCompany](src/models/profile-api-serializer-with-compiled-company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPersonBulkLookup(request?: PeopleDataApi.CreatePersonBulkLookupRequest, options?: RequestOptions): ApiPromise&lt;undefined, PeopleDataApi.CreatePersonBulkLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk People Lookup by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.peopleDataApi.createPersonBulkLookup({ profileList: "API Bulk Lookup", webhookId: 12345 });
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreatePersonBulkLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi
  .createPersonBulkLookup({ profileList: "API Bulk Lookup", webhookId: 12345 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>queries?</code> | <code>[ProfileMatch](src/models/profile-match.ts)[]</code> | List of profile lookup queries for between 10 and 100 profiles |
| <code>profileList?</code> | <code>string</code> | Name of a profile list to add looked up profiles to upon completion<br>**Default**: "API Bulk Lookup" |
| <code>webhookId?</code> | <code>number</code> | Webhook ID to post lookup results to upon completion. Find your webhook ID [here](https://rocketreach.co/account?section=nav_gen_api). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createPersonBulkLookup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PeopleDataApi.CreatePersonBulkLookupError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createPersonBulkLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PeopleDataApi.CreatePersonBulkLookupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPersonLookup(request?: PeopleDataApi.CreatePersonLookupRequest, options?: RequestOptions): ApiPromise&lt;ProfileApiWithMetadataCompiledCompany, PeopleDataApi.CreatePersonLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person Enrichment API

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.createPersonLookup();
  // TODO: Handle 'response' of type ProfileApiWithMetadataCompiledCompany
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreatePersonLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.createPersonLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileApiWithMetadataCompiledCompany
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
| <code>currentEmployer?</code> | <code>string</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach` |
| <code>email?</code> | <code>string</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co` |
| <code>id?</code> | <code>number</code> | RocketReach internal unique profile ID.<br>- Example: `123456` |
| <code>linkedinExtUrl?</code> | <code>string</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead |
| <code>linkedinUrl?</code> | <code>string</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand` |
| <code>lookupType?</code> | <code>[LookupType](src/models/lookup-type.ts)</code> | Lookup type for the request<br><br>* `standard` - standard<br>* `premium` - premium<br>* `premium (feeds disabled)` - premium (feeds disabled)<br>* `bulk` - bulk<br>* `phone` - phone<br>* `enrich` - enrich |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | User metadata about the profile, such as external ids, tags, notes, etc. |
| <code>name?</code> | <code>string</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand` |
| <code>npiNumber?</code> | <code>number</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890` |
| <code>phone?</code> | <code>string</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555` |
| <code>returnCachedEmails?</code> | <code>boolean</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: true |
| <code>title?</code> | <code>string</code> | Job title of the desired profile.<br>- Example: `Product Manager` |
| <code>webhookId?</code> | <code>number</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createPersonLookup(request)`

- **OnSuccess**: <code>[ProfileApiWithMetadataCompiledCompany](src/models/profile-api-with-metadata-compiled-company.ts)</code>
- **OnError**: throws <code>[PeopleDataApi.CreatePersonLookupError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createPersonLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileApiWithMetadataCompiledCompany, PeopleDataApi.CreatePersonLookupError&gt;</code>, with `result.value` of type <code>[ProfileApiWithMetadataCompiledCompany](src/models/profile-api-with-metadata-compiled-company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPersonSearch(request?: PeopleDataApi.CreatePersonSearchRequest, options?: RequestOptions): ApiPromise&lt;ProfileSearchResultSerializerBase[], PeopleDataApi.CreatePersonSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search People by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.createPersonSearch({ orderBy: OrderByEnum.Popularity });
  // TODO: Handle 'response' of type ProfileSearchResultSerializerBase[]
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreatePersonSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi
  .createPersonSearch({ orderBy: OrderByEnum.Popularity })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileSearchResultSerializerBase[]
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
| <code>start?</code> | <code>number</code> | Start index of the request results (counting from 1)<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Maximum number of results to return per page [1-100]<br>**Default**: 10 |
| <code>query?</code> | <code>[PersonQuery1](src/models/person-query1.ts)</code> | Search query object for the request |
| <code>orderBy?</code> | <code>[OrderByEnum](src/models/order-by-enum.ts)</code> | Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.<br>**Default**: "relevance" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createPersonSearch(request)`

- **OnSuccess**: <code>[ProfileSearchResultSerializerBase](src/models/profile-search-result-serializer-base.ts)[]</code>
- **OnError**: throws <code>[PeopleDataApi.CreatePersonSearchError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createPersonSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileSearchResultSerializerBase[], PeopleDataApi.CreatePersonSearchError&gt;</code>, with `result.value` of type <code>[ProfileSearchResultSerializerBase](src/models/profile-search-result-serializer-base.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUniversalPersonBulkLookup(request?: PeopleDataApi.CreateUniversalPersonBulkLookupRequest, options?: RequestOptions): ApiPromise&lt;undefined, PeopleDataApi.CreateUniversalPersonBulkLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk People Lookup by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.peopleDataApi.createUniversalPersonBulkLookup();
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreateUniversalPersonBulkLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.createUniversalPersonBulkLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>queries?</code> | <code>[UniversalCreditPersonLookupInput](src/models/universal-credit-person-lookup-input.ts)[]</code> | Specify the lookup criteria for up to 100 people. |
| <code>profileList?</code> | <code>string</code> | Add specified contacts to this profile list.<br>**Default**: "API Bulk Lookup" |
| <code>webhookId?</code> | <code>number</code> | ID of the webhook to post lookup results upon completion. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createUniversalPersonBulkLookup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PeopleDataApi.CreateUniversalPersonBulkLookupError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createUniversalPersonBulkLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PeopleDataApi.CreateUniversalPersonBulkLookupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUniversalPersonLookup(request?: PeopleDataApi.CreateUniversalPersonLookupRequest, options?: RequestOptions): ApiPromise&lt;UniversalCreditPersonLookupOutputWithMetadata, PeopleDataApi.CreateUniversalPersonLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person Enrichment API

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.createUniversalPersonLookup();
  // TODO: Handle 'response' of type UniversalCreditPersonLookupOutputWithMetadata
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreateUniversalPersonLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.createUniversalPersonLookup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UniversalCreditPersonLookupOutputWithMetadata
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
| <code>currentEmployer?</code> | <code>string</code> | Current employer of the desired profile. Must specify along with `name`.<br>- Example: `RocketReach` |
| <code>email?</code> | <code>string</code> | An email address for the desired profile.<br>- Example: `jamie@rocketreach.co` |
| <code>id?</code> | <code>number</code> | RocketReach internal unique profile ID.<br>- Example: `123456` |
| <code>linkedinExtUrl?</code> | <code>string</code> | linkedin_ext_url deprecated, please use `linkedin_url` instead |
| <code>linkedinUrl?</code> | <code>string</code> | LinkedIn URL of the desired profile.<br>- Example: `www.linkedin.com/in/jamesgullbrand` |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | User metadata about the profile, such as external ids, tags, notes, etc. |
| <code>name?</code> | <code>string</code> | Name of the desired profile. Must specify along with `current_employer`.<br>- Example: `Jamie Gullbrand` |
| <code>npiNumber?</code> | <code>number</code> | An NPI number for the desired profile (US healthcare professional).<br>- Example: `1234567890` |
| <code>phone?</code> | <code>string</code> | A phone number for the desired profile in either E.164 format or international format.<br>- Example: `+15555555555` |
| <code>returnCachedEmails?</code> | <code>boolean</code> | Controls whether cached emails are included in the initial response when `lookup status = progress`. When set to `false`, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (`status = complete`). Defaults to `true`.<br><br><b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.</b><br>**Default**: true |
| <code>revealDetailedPersonEnrichment?</code> | <code>boolean</code> | Whether to reveal the detailed person enrichment data for the desired profile<br>**Default**: false |
| <code>revealHealthcareEnrichment?</code> | <code>boolean</code> | Whether to reveal the healthcare enrichment data for the desired profile<br>**Default**: false |
| <code>revealPersonalEmail?</code> | <code>boolean</code> | Whether to reveal the personal email enrichment data for the desired profile<br>**Default**: false |
| <code>revealPhone?</code> | <code>boolean</code> | Whether to reveal the phone enrichment data for the desired profile<br>**Default**: false |
| <code>revealProfessionalEmail?</code> | <code>boolean</code> | Whether to reveal the professional email enrichment data for the desired profile<br>**Default**: false |
| <code>title?</code> | <code>string</code> | Job title of the desired profile.<br>- Example: `Product Manager` |
| <code>webhookId?</code> | <code>number</code> | Your webhook's unique ID number. Find it in your API Usage & Settings page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createUniversalPersonLookup(request)`

- **OnSuccess**: <code>[UniversalCreditPersonLookupOutputWithMetadata](src/models/universal-credit-person-lookup-output-with-metadata.ts)</code>
- **OnError**: throws <code>[PeopleDataApi.CreateUniversalPersonLookupError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createUniversalPersonLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UniversalCreditPersonLookupOutputWithMetadata, PeopleDataApi.CreateUniversalPersonLookupError&gt;</code>, with `result.value` of type <code>[UniversalCreditPersonLookupOutputWithMetadata](src/models/universal-credit-person-lookup-output-with-metadata.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUniversalPersonSearch(request?: PeopleDataApi.CreateUniversalPersonSearchRequest, options?: RequestOptions): ApiPromise&lt;UniversalCreditPersonSearchOutput[], PeopleDataApi.CreateUniversalPersonSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search People by Criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.peopleDataApi.createUniversalPersonSearch();
  // TODO: Handle 'response' of type UniversalCreditPersonSearchOutput[]
} catch (err) {
  // TODO: Handle 'err' of type PeopleDataApi.CreateUniversalPersonSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.peopleDataApi.createUniversalPersonSearch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UniversalCreditPersonSearchOutput[]
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
| <code>start?</code> | <code>number</code> | Paginate through search results by returning results starting from this value (counting from 1).<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Maximum number of search results to return per page.<br>**Default**: 100 |
| <code>query?</code> | <code>[PersonQuery](src/models/person-query.ts)</code> | - |
| <code>orderBy?</code> | <code>[OrderByEnum](src/models/order-by-enum.ts)</code> | Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.<br><br>* `relevance` - relevance<br>* `popularity` - popularity<br>* `score` - score<br>**Default**: "relevance" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.peopleDataApi.createUniversalPersonSearch(request)`

- **OnSuccess**: <code>[UniversalCreditPersonSearchOutput](src/models/universal-credit-person-search-output.ts)[]</code>
- **OnError**: throws <code>[PeopleDataApi.CreateUniversalPersonSearchError](src/resources/people-data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.peopleDataApi.createUniversalPersonSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UniversalCreditPersonSearchOutput[], PeopleDataApi.CreateUniversalPersonSearchError&gt;</code>, with `result.value` of type <code>[UniversalCreditPersonSearchOutput](src/models/universal-credit-person-search-output.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RocketReachError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

