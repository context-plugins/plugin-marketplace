# Reference

> Source: [GivebutterClient](src/client.ts)

## CampaignDiscountCodes

> Source: [CampaignDiscountCodes](src/resources/campaign-discount-codes.ts)

<details>
<summary><code>campaignsDiscountCodesDestroy(request: CampaignDiscountCodes.CampaignsDiscountCodesDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, CampaignDiscountCodes.CampaignsDiscountCodesDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.campaignDiscountCodes.campaignsDiscountCodesDestroy({ campaign: 1, discountCode: 1 });
} catch (err) {
  // TODO: Handle 'err' of type CampaignDiscountCodes.CampaignsDiscountCodesDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignDiscountCodes
  .campaignsDiscountCodesDestroy({ campaign: 1, discountCode: 1 })
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>discountCode</code> | <code>number</code> | The discount code ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignDiscountCodes.campaignsDiscountCodesDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CampaignDiscountCodes.CampaignsDiscountCodesDestroyError](src/resources/campaign-discount-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignDiscountCodes.campaignsDiscountCodesDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CampaignDiscountCodes.CampaignsDiscountCodesDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsDiscountCodesIndex(request: CampaignDiscountCodes.CampaignsDiscountCodesIndexRequest, options?: RequestOptions): ApiPromise&lt;V1CampaignsDiscountCodesResponse, CampaignDiscountCodes.CampaignsDiscountCodesIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignDiscountCodes.campaignsDiscountCodesIndex({ campaign: 1 });
  // TODO: Handle 'response' of type V1CampaignsDiscountCodesResponse
} catch (err) {
  // TODO: Handle 'err' of type CampaignDiscountCodes.CampaignsDiscountCodesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignDiscountCodes.campaignsDiscountCodesIndex({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CampaignsDiscountCodesResponse
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
| <code>campaign</code> | <code>number</code> | The campaign ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignDiscountCodes.campaignsDiscountCodesIndex(request)`

- **OnSuccess**: <code>[V1CampaignsDiscountCodesResponse](src/models/v1-campaigns-discount-codes-response.ts)</code>
- **OnError**: throws <code>[CampaignDiscountCodes.CampaignsDiscountCodesIndexError](src/resources/campaign-discount-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignDiscountCodes.campaignsDiscountCodesIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CampaignsDiscountCodesResponse, CampaignDiscountCodes.CampaignsDiscountCodesIndexError&gt;</code>, with `result.value` of type <code>[V1CampaignsDiscountCodesResponse](src/models/v1-campaigns-discount-codes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsDiscountCodesShow(request: CampaignDiscountCodes.CampaignsDiscountCodesShowRequest, options?: RequestOptions): ApiPromise&lt;CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignDiscountCodes.campaignsDiscountCodesShow({
    campaign: 1,
    discountCode: 1,
  });
  // TODO: Handle 'response' of type CampaignDiscountCodeResource
} catch (err) {
  // TODO: Handle 'err' of type CampaignDiscountCodes.CampaignsDiscountCodesShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignDiscountCodes
  .campaignsDiscountCodesShow({ campaign: 1, discountCode: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignDiscountCodeResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>discountCode</code> | <code>number</code> | The discount code ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignDiscountCodes.campaignsDiscountCodesShow(request)`

- **OnSuccess**: <code>[CampaignDiscountCodeResource](src/models/campaign-discount-code-resource.ts)</code>
- **OnError**: throws <code>[CampaignDiscountCodes.CampaignsDiscountCodesShowError](src/resources/campaign-discount-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignDiscountCodes.campaignsDiscountCodesShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesShowError&gt;</code>, with `result.value` of type <code>[CampaignDiscountCodeResource](src/models/campaign-discount-code-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsDiscountCodesStore(request: CampaignDiscountCodes.CampaignsDiscountCodesStoreRequest, options?: RequestOptions): ApiPromise&lt;CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignDiscountCodes.campaignsDiscountCodesStore({
    campaign: 1,
    body: { type: DiscountCodeType.Percentage, active: true, amount: 1.5, code: "some example string" },
  });
  // TODO: Handle 'response' of type CampaignDiscountCodeResource
} catch (err) {
  // TODO: Handle 'err' of type CampaignDiscountCodes.CampaignsDiscountCodesStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignDiscountCodes
  .campaignsDiscountCodesStore({
    campaign: 1,
    body: { type: DiscountCodeType.Percentage, active: true, amount: 1.5, code: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignDiscountCodeResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>body</code> | <code>[StoreCampaignDiscountCodeRequest](src/models/store-campaign-discount-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignDiscountCodes.campaignsDiscountCodesStore(request)`

- **OnSuccess**: <code>[CampaignDiscountCodeResource](src/models/campaign-discount-code-resource.ts)</code>
- **OnError**: throws <code>[CampaignDiscountCodes.CampaignsDiscountCodesStoreError](src/resources/campaign-discount-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignDiscountCodes.campaignsDiscountCodesStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesStoreError&gt;</code>, with `result.value` of type <code>[CampaignDiscountCodeResource](src/models/campaign-discount-code-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsDiscountCodesUpdate(request: CampaignDiscountCodes.CampaignsDiscountCodesUpdateRequest, options?: RequestOptions): ApiPromise&lt;CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignDiscountCodes.campaignsDiscountCodesUpdate({
    campaign: 1,
    discountCode: 1,
    body: { amount: 1.5 },
  });
  // TODO: Handle 'response' of type CampaignDiscountCodeResource
} catch (err) {
  // TODO: Handle 'err' of type CampaignDiscountCodes.CampaignsDiscountCodesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignDiscountCodes
  .campaignsDiscountCodesUpdate({ campaign: 1, discountCode: 1, body: { amount: 1.5 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignDiscountCodeResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>discountCode</code> | <code>number</code> | The discount code ID |
| <code>body</code> | <code>[UpdateCampaignDiscountCodeRequest](src/models/update-campaign-discount-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignDiscountCodes.campaignsDiscountCodesUpdate(request)`

- **OnSuccess**: <code>[CampaignDiscountCodeResource](src/models/campaign-discount-code-resource.ts)</code>
- **OnError**: throws <code>[CampaignDiscountCodes.CampaignsDiscountCodesUpdateError](src/resources/campaign-discount-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignDiscountCodes.campaignsDiscountCodesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesUpdateError&gt;</code>, with `result.value` of type <code>[CampaignDiscountCodeResource](src/models/campaign-discount-code-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignMembers

> Source: [CampaignMembers](src/resources/campaign-members.ts)

<details>
<summary><code>campaignsMembersDestroy(request: CampaignMembers.CampaignsMembersDestroyRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CampaignMembers.CampaignsMembersDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignMembers.campaignsMembersDestroy({ campaign: 1, member: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CampaignMembers.CampaignsMembersDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignMembers.campaignsMembersDestroy({ campaign: 1, member: 1 }).asApiResult();
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>member</code> | <code>number</code> | The member ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignMembers.campaignsMembersDestroy(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CampaignMembers.CampaignsMembersDestroyError](src/resources/campaign-members.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignMembers.campaignsMembersDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CampaignMembers.CampaignsMembersDestroyError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsMembersIndex(request: CampaignMembers.CampaignsMembersIndexRequest, options?: RequestOptions): ApiPromise&lt;V1CampaignsMembersResponse1, CampaignMembers.CampaignsMembersIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignMembers.campaignsMembersIndex({ campaign: 1 });
  // TODO: Handle 'response' of type V1CampaignsMembersResponse1
} catch (err) {
  // TODO: Handle 'err' of type CampaignMembers.CampaignsMembersIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignMembers.campaignsMembersIndex({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CampaignsMembersResponse1
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
| <code>campaign</code> | <code>number</code> | The campaign ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignMembers.campaignsMembersIndex(request)`

- **OnSuccess**: <code>[V1CampaignsMembersResponse1](src/models/unions/v1-campaigns-members-response1.ts)</code>
- **OnError**: throws <code>[CampaignMembers.CampaignsMembersIndexError](src/resources/campaign-members.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignMembers.campaignsMembersIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CampaignsMembersResponse1, CampaignMembers.CampaignsMembersIndexError&gt;</code>, with `result.value` of type <code>[V1CampaignsMembersResponse1](src/models/unions/v1-campaigns-members-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsMembersShow(request: CampaignMembers.CampaignsMembersShowRequest, options?: RequestOptions): ApiPromise&lt;V1CampaignsMembersResponse11, CampaignMembers.CampaignsMembersShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignMembers.campaignsMembersShow({ campaign: 1, member: 1 });
  // TODO: Handle 'response' of type V1CampaignsMembersResponse11
} catch (err) {
  // TODO: Handle 'err' of type CampaignMembers.CampaignsMembersShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignMembers.campaignsMembersShow({ campaign: 1, member: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CampaignsMembersResponse11
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>member</code> | <code>number</code> | The member ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignMembers.campaignsMembersShow(request)`

- **OnSuccess**: <code>[V1CampaignsMembersResponse11](src/models/unions/v1-campaigns-members-response11.ts)</code>
- **OnError**: throws <code>[CampaignMembers.CampaignsMembersShowError](src/resources/campaign-members.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignMembers.campaignsMembersShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CampaignsMembersResponse11, CampaignMembers.CampaignsMembersShowError&gt;</code>, with `result.value` of type <code>[V1CampaignsMembersResponse11](src/models/unions/v1-campaigns-members-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignTeams

> Source: [CampaignTeams](src/resources/campaign-teams.ts)

<details>
<summary><code>campaignsTeamsDestroy(request: CampaignTeams.CampaignsTeamsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, CampaignTeams.CampaignsTeamsDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.campaignTeams.campaignsTeamsDestroy({ campaign: 1, team: 1 });
} catch (err) {
  // TODO: Handle 'err' of type CampaignTeams.CampaignsTeamsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignTeams.campaignsTeamsDestroy({ campaign: 1, team: 1 }).asApiResult();
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>team</code> | <code>number</code> | The team ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignTeams.campaignsTeamsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CampaignTeams.CampaignsTeamsDestroyError](src/resources/campaign-teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignTeams.campaignsTeamsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CampaignTeams.CampaignsTeamsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsTeamsIndex(request: CampaignTeams.CampaignsTeamsIndexRequest, options?: RequestOptions): ApiPromise&lt;V1CampaignsTeamsResponse, CampaignTeams.CampaignsTeamsIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignTeams.campaignsTeamsIndex({ campaign: 1 });
  // TODO: Handle 'response' of type V1CampaignsTeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type CampaignTeams.CampaignsTeamsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignTeams.campaignsTeamsIndex({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CampaignsTeamsResponse
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
| <code>campaign</code> | <code>number</code> | The campaign ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignTeams.campaignsTeamsIndex(request)`

- **OnSuccess**: <code>[V1CampaignsTeamsResponse](src/models/v1-campaigns-teams-response.ts)</code>
- **OnError**: throws <code>[CampaignTeams.CampaignsTeamsIndexError](src/resources/campaign-teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignTeams.campaignsTeamsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CampaignsTeamsResponse, CampaignTeams.CampaignsTeamsIndexError&gt;</code>, with `result.value` of type <code>[V1CampaignsTeamsResponse](src/models/v1-campaigns-teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsTeamsShow(request: CampaignTeams.CampaignsTeamsShowRequest, options?: RequestOptions): ApiPromise&lt;CampaignTeamResource, CampaignTeams.CampaignsTeamsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignTeams.campaignsTeamsShow({ campaign: 1, team: 1 });
  // TODO: Handle 'response' of type CampaignTeamResource
} catch (err) {
  // TODO: Handle 'err' of type CampaignTeams.CampaignsTeamsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignTeams.campaignsTeamsShow({ campaign: 1, team: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignTeamResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>team</code> | <code>number</code> | The team ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignTeams.campaignsTeamsShow(request)`

- **OnSuccess**: <code>[CampaignTeamResource](src/models/campaign-team-resource.ts)</code>
- **OnError**: throws <code>[CampaignTeams.CampaignsTeamsShowError](src/resources/campaign-teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignTeams.campaignsTeamsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignTeamResource, CampaignTeams.CampaignsTeamsShowError&gt;</code>, with `result.value` of type <code>[CampaignTeamResource](src/models/campaign-team-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignTickets

> Source: [CampaignTickets](src/resources/campaign-tickets.ts)

<details>
<summary><code>campaignsItemsTicketsIndex(request: CampaignTickets.CampaignsItemsTicketsIndexRequest, options?: RequestOptions): ApiPromise&lt;V1CampaignsItemsTicketsResponse, CampaignTickets.CampaignsItemsTicketsIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignTickets.campaignsItemsTicketsIndex({ campaign: 1 });
  // TODO: Handle 'response' of type V1CampaignsItemsTicketsResponse
} catch (err) {
  // TODO: Handle 'err' of type CampaignTickets.CampaignsItemsTicketsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignTickets.campaignsItemsTicketsIndex({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CampaignsItemsTicketsResponse
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
| <code>campaign</code> | <code>number</code> | The campaign ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignTickets.campaignsItemsTicketsIndex(request)`

- **OnSuccess**: <code>[V1CampaignsItemsTicketsResponse](src/models/v1-campaigns-items-tickets-response.ts)</code>
- **OnError**: throws <code>[CampaignTickets.CampaignsItemsTicketsIndexError](src/resources/campaign-tickets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignTickets.campaignsItemsTicketsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CampaignsItemsTicketsResponse, CampaignTickets.CampaignsItemsTicketsIndexError&gt;</code>, with `result.value` of type <code>[V1CampaignsItemsTicketsResponse](src/models/v1-campaigns-items-tickets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsItemsTicketsShow(request: CampaignTickets.CampaignsItemsTicketsShowRequest, options?: RequestOptions): ApiPromise&lt;CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignTickets.campaignsItemsTicketsShow({ campaign: 1, ticketId: 1 });
  // TODO: Handle 'response' of type CampaignItemTicketResource
} catch (err) {
  // TODO: Handle 'err' of type CampaignTickets.CampaignsItemsTicketsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignTickets
  .campaignsItemsTicketsShow({ campaign: 1, ticketId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignItemTicketResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>ticketId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignTickets.campaignsItemsTicketsShow(request)`

- **OnSuccess**: <code>[CampaignItemTicketResource](src/models/campaign-item-ticket-resource.ts)</code>
- **OnError**: throws <code>[CampaignTickets.CampaignsItemsTicketsShowError](src/resources/campaign-tickets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignTickets.campaignsItemsTicketsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsShowError&gt;</code>, with `result.value` of type <code>[CampaignItemTicketResource](src/models/campaign-item-ticket-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsItemsTicketsStore(request: CampaignTickets.CampaignsItemsTicketsStoreRequest, options?: RequestOptions): ApiPromise&lt;CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignTickets.campaignsItemsTicketsStore({
    campaign: 1,
    body: { name: "some example string", price: 1.5 },
  });
  // TODO: Handle 'response' of type CampaignItemTicketResource
} catch (err) {
  // TODO: Handle 'err' of type CampaignTickets.CampaignsItemsTicketsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignTickets
  .campaignsItemsTicketsStore({ campaign: 1, body: { name: "some example string", price: 1.5 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignItemTicketResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>body</code> | <code>[StoreCampaignItemTicketRequest](src/models/store-campaign-item-ticket-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignTickets.campaignsItemsTicketsStore(request)`

- **OnSuccess**: <code>[CampaignItemTicketResource](src/models/campaign-item-ticket-resource.ts)</code>
- **OnError**: throws <code>[CampaignTickets.CampaignsItemsTicketsStoreError](src/resources/campaign-tickets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignTickets.campaignsItemsTicketsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsStoreError&gt;</code>, with `result.value` of type <code>[CampaignItemTicketResource](src/models/campaign-item-ticket-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/resources/campaigns.ts)

<details>
<summary><code>campaignsDestroy(request: Campaigns.CampaignsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Campaigns.CampaignsDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.campaigns.campaignsDestroy({ campaign: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.CampaignsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.campaignsDestroy({ campaign: 1 }).asApiResult();
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
| <code>campaign</code> | <code>number</code> | The campaign ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.campaignsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Campaigns.CampaignsDestroyError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.campaignsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Campaigns.CampaignsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsIndex(request?: Campaigns.CampaignsIndexRequest, options?: RequestOptions): ApiPromise&lt;V1CampaignsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.campaignsIndex();
  // TODO: Handle 'response' of type V1CampaignsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.campaignsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CampaignsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scope?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.campaignsIndex(request)`

- **OnSuccess**: <code>[V1CampaignsResponse](src/models/v1-campaigns-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.campaigns.campaignsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CampaignsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1CampaignsResponse](src/models/v1-campaigns-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsShow(request: Campaigns.CampaignsShowRequest, options?: RequestOptions): ApiPromise&lt;CampaignResource, Campaigns.CampaignsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.campaignsShow({ campaign: 1 });
  // TODO: Handle 'response' of type CampaignResource
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.CampaignsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.campaignsShow({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.campaignsShow(request)`

- **OnSuccess**: <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: throws <code>[Campaigns.CampaignsShowError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.campaignsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignResource, Campaigns.CampaignsShowError&gt;</code>, with `result.value` of type <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsStore(request: Campaigns.CampaignsStoreRequest, options?: RequestOptions): ApiPromise&lt;CampaignResource, Campaigns.CampaignsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.campaignsStore({
    body: { type: Type.General, title: "some example string" },
  });
  // TODO: Handle 'response' of type CampaignResource
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.CampaignsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns
  .campaignsStore({ body: { type: Type.General, title: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignResource
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
| <code>body</code> | <code>[StoreCampaignRequest](src/models/store-campaign-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.campaignsStore(request)`

- **OnSuccess**: <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: throws <code>[Campaigns.CampaignsStoreError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.campaignsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignResource, Campaigns.CampaignsStoreError&gt;</code>, with `result.value` of type <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>campaignsUpdate(request: Campaigns.CampaignsUpdateRequest, options?: RequestOptions): ApiPromise&lt;CampaignResource, Campaigns.CampaignsUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.campaignsUpdate({ campaign: 1 });
  // TODO: Handle 'response' of type CampaignResource
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.CampaignsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.campaignsUpdate({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignResource
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
| <code>campaign</code> | <code>number</code> | The campaign ID |
| <code>body?</code> | <code>[UpdateCampaignRequest](src/models/update-campaign-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.campaignsUpdate(request)`

- **OnSuccess**: <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: throws <code>[Campaigns.CampaignsUpdateError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.campaignsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignResource, Campaigns.CampaignsUpdateError&gt;</code>, with `result.value` of type <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContactActivities

> Source: [ContactActivities](src/resources/contact-activities.ts)

<details>
<summary><code>contactsActivitiesDestroy(request: ContactActivities.ContactsActivitiesDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, ContactActivities.ContactsActivitiesDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contactActivities.contactsActivitiesDestroy({ contact: 1, activity: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ContactActivities.ContactsActivitiesDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactActivities
  .contactsActivitiesDestroy({ contact: 1, activity: 1 })
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>activity</code> | <code>number</code> | The activity ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactActivities.contactsActivitiesDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ContactActivities.ContactsActivitiesDestroyError](src/resources/contact-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactActivities.contactsActivitiesDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ContactActivities.ContactsActivitiesDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsActivitiesIndex(request: ContactActivities.ContactsActivitiesIndexRequest, options?: RequestOptions): ApiPromise&lt;V1ContactsActivitiesResponse, ContactActivities.ContactsActivitiesIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactActivities.contactsActivitiesIndex({ contact: 1 });
  // TODO: Handle 'response' of type V1ContactsActivitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactActivities.ContactsActivitiesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactActivities.contactsActivitiesIndex({ contact: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ContactsActivitiesResponse
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>type?</code> | <code>[ContactActivityTypeEnum](src/models/contact-activity-type-enum.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactActivities.contactsActivitiesIndex(request)`

- **OnSuccess**: <code>[V1ContactsActivitiesResponse](src/models/v1-contacts-activities-response.ts)</code>
- **OnError**: throws <code>[ContactActivities.ContactsActivitiesIndexError](src/resources/contact-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactActivities.contactsActivitiesIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ContactsActivitiesResponse, ContactActivities.ContactsActivitiesIndexError&gt;</code>, with `result.value` of type <code>[V1ContactsActivitiesResponse](src/models/v1-contacts-activities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsActivitiesShow(request: ContactActivities.ContactsActivitiesShowRequest, options?: RequestOptions): ApiPromise&lt;ContactActivityResource, ContactActivities.ContactsActivitiesShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactActivities.contactsActivitiesShow({ contact: 1, activity: 1 });
  // TODO: Handle 'response' of type ContactActivityResource
} catch (err) {
  // TODO: Handle 'err' of type ContactActivities.ContactsActivitiesShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactActivities
  .contactsActivitiesShow({ contact: 1, activity: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactActivityResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>activity</code> | <code>number</code> | The activity ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactActivities.contactsActivitiesShow(request)`

- **OnSuccess**: <code>[ContactActivityResource](src/models/contact-activity-resource.ts)</code>
- **OnError**: throws <code>[ContactActivities.ContactsActivitiesShowError](src/resources/contact-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactActivities.contactsActivitiesShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactActivityResource, ContactActivities.ContactsActivitiesShowError&gt;</code>, with `result.value` of type <code>[ContactActivityResource](src/models/contact-activity-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsActivitiesStore(request: ContactActivities.ContactsActivitiesStoreRequest, options?: RequestOptions): ApiPromise&lt;ContactActivityResource, ContactActivities.ContactsActivitiesStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactActivities.contactsActivitiesStore({
    contact: 1,
    body: { type: TypeGivebutterApiDocumentationContactActivitiesApi.Email },
  });
  // TODO: Handle 'response' of type ContactActivityResource
} catch (err) {
  // TODO: Handle 'err' of type ContactActivities.ContactsActivitiesStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactActivities
  .contactsActivitiesStore({
    contact: 1,
    body: { type: TypeGivebutterApiDocumentationContactActivitiesApi.Email },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactActivityResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>body</code> | <code>[StoreContactActivityRequest](src/models/store-contact-activity-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactActivities.contactsActivitiesStore(request)`

- **OnSuccess**: <code>[ContactActivityResource](src/models/contact-activity-resource.ts)</code>
- **OnError**: throws <code>[ContactActivities.ContactsActivitiesStoreError](src/resources/contact-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactActivities.contactsActivitiesStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactActivityResource, ContactActivities.ContactsActivitiesStoreError&gt;</code>, with `result.value` of type <code>[ContactActivityResource](src/models/contact-activity-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsActivitiesUpdate(request: ContactActivities.ContactsActivitiesUpdateRequest, options?: RequestOptions): ApiPromise&lt;ContactActivityResource, ContactActivities.ContactsActivitiesUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactActivities.contactsActivitiesUpdate({ contact: 1, activity: 1 });
  // TODO: Handle 'response' of type ContactActivityResource
} catch (err) {
  // TODO: Handle 'err' of type ContactActivities.ContactsActivitiesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactActivities
  .contactsActivitiesUpdate({ contact: 1, activity: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactActivityResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>activity</code> | <code>number</code> | The activity ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactActivities.contactsActivitiesUpdate(request)`

- **OnSuccess**: <code>[ContactActivityResource](src/models/contact-activity-resource.ts)</code>
- **OnError**: throws <code>[ContactActivities.ContactsActivitiesUpdateError](src/resources/contact-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactActivities.contactsActivitiesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactActivityResource, ContactActivities.ContactsActivitiesUpdateError&gt;</code>, with `result.value` of type <code>[ContactActivityResource](src/models/contact-activity-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContactTags

> Source: [ContactTags](src/resources/contact-tags.ts)

<details>
<summary><code>contactTagDestroy(request: ContactTags.ContactTagDestroyRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, ContactTags.ContactTagDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactTags.contactTagDestroy({
    contact: 1,
    body: { tags: ["some example string"] },
  });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type ContactTags.ContactTagDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactTags
  .contactTagDestroy({ contact: 1, body: { tags: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>body</code> | <code>[V1ContactsTagsRemoveRequest](src/models/v1-contacts-tags-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactTags.contactTagDestroy(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[ContactTags.ContactTagDestroyError](src/resources/contact-tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactTags.contactTagDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, ContactTags.ContactTagDestroyError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactTagStore(request: ContactTags.ContactTagStoreRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, ContactTags.ContactTagStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactTags.contactTagStore({
    contact: 1,
    body: { tags: ["some example string"] },
  });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type ContactTags.ContactTagStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactTags
  .contactTagStore({ contact: 1, body: { tags: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>body</code> | <code>[V1ContactsTagsAddRequest](src/models/v1-contacts-tags-add-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactTags.contactTagStore(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[ContactTags.ContactTagStoreError](src/resources/contact-tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactTags.contactTagStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, ContactTags.ContactTagStoreError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactTagSync(request: ContactTags.ContactTagSyncRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, ContactTags.ContactTagSyncError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactTags.contactTagSync({
    contact: 1,
    body: { tags: ["some example string"] },
  });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type ContactTags.ContactTagSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactTags
  .contactTagSync({ contact: 1, body: { tags: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>body</code> | <code>[V1ContactsTagsSyncRequest](src/models/v1-contacts-tags-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactTags.contactTagSync(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[ContactTags.ContactTagSyncError](src/resources/contact-tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactTags.contactTagSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, ContactTags.ContactTagSyncError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](src/resources/contacts.ts)

<details>
<summary><code>contactRestore(request: Contacts.ContactRestoreRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, Contacts.ContactRestoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.contactRestore({ contact: 1 });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ContactRestoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.contactRestore({ contact: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>contact</code> | <code>number</code> | The contact ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.contactRestore(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[Contacts.ContactRestoreError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.contactRestore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, Contacts.ContactRestoreError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsDestroy(request: Contacts.ContactsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Contacts.ContactsDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contacts.contactsDestroy({ contact: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ContactsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.contactsDestroy({ contact: 1 }).asApiResult();
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
| <code>contact</code> | <code>number</code> | The contact ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.contactsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Contacts.ContactsDestroyError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.contactsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Contacts.ContactsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsIndex(request?: Contacts.ContactsIndexRequest, options?: RequestOptions): ApiPromise&lt;V1ContactsResponse, Contacts.ContactsIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.contactsIndex();
  // TODO: Handle 'response' of type V1ContactsResponse
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ContactsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.contactsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ContactsResponse
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
| <code>type?</code> | <code>[ContactType](src/models/contact-type.ts)</code> | - |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | - |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | - |
| <code>updatedAfter?</code> | <code>Date</code> (date-time) | - |
| <code>updatedBefore?</code> | <code>Date</code> (date-time) | - |
| <code>totalContributionsMin?</code> | <code>number</code> | - |
| <code>totalContributionsMax?</code> | <code>number</code> | - |
| <code>recurringContributionsMin?</code> | <code>number</code> | - |
| <code>recurringContributionsMax?</code> | <code>number</code> | - |
| <code>tags?</code> | <code>string</code> | - |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | - |
| <code>sortByDesc?</code> | <code>[SortByDesc](src/models/sort-by-desc.ts)</code> | - |
| <code>email?</code> | <code>string</code> | - |
| <code>primaryEmail?</code> | <code>string</code> | - |
| <code>firstName?</code> | <code>string</code> | - |
| <code>lastName?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.contactsIndex(request)`

- **OnSuccess**: <code>[V1ContactsResponse](src/models/v1-contacts-response.ts)</code>
- **OnError**: throws <code>[Contacts.ContactsIndexError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.contactsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ContactsResponse, Contacts.ContactsIndexError&gt;</code>, with `result.value` of type <code>[V1ContactsResponse](src/models/v1-contacts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsShow(request: Contacts.ContactsShowRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, Contacts.ContactsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.contactsShow({ contact: 1 });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ContactsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.contactsShow({ contact: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>contact</code> | <code>number</code> | The contact ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.contactsShow(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[Contacts.ContactsShowError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.contactsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, Contacts.ContactsShowError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsStore(request?: Contacts.ContactsStoreRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, Contacts.ContactsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.contactsStore();
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ContactsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.contactsStore().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>body?</code> | <code>[V1ContactsRequest](src/models/v1-contacts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.contactsStore(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[Contacts.ContactsStoreError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.contactsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, Contacts.ContactsStoreError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contactsUpdate(request: Contacts.ContactsUpdateRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, Contacts.ContactsUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.contactsUpdate({ contact: 1 });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ContactsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.contactsUpdate({ contact: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>contact</code> | <code>number</code> | The contact ID |
| <code>body?</code> | <code>[UpdateContactRequest](src/models/update-contact-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.contactsUpdate(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[Contacts.ContactsUpdateError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.contactsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, Contacts.ContactsUpdateError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Funds

> Source: [Funds](src/resources/funds.ts)

<details>
<summary><code>fundsDestroy(request: Funds.FundsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Funds.FundsDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.funds.fundsDestroy({ fund: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Funds.FundsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds.fundsDestroy({ fund: "some example string" }).asApiResult();
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
| <code>fund</code> | <code>string</code> | The fund fid |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.fundsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Funds.FundsDestroyError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.fundsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Funds.FundsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundsIndex(options?: RequestOptions): ApiPromise&lt;V1FundsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.fundsIndex();
  // TODO: Handle 'response' of type V1FundsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds.fundsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FundsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.fundsIndex()`

- **OnSuccess**: <code>[V1FundsResponse](src/models/v1-funds-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.funds.fundsIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FundsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1FundsResponse](src/models/v1-funds-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundsShow(request: Funds.FundsShowRequest, options?: RequestOptions): ApiPromise&lt;FundResource, Funds.FundsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.fundsShow({ fund: "some example string" });
  // TODO: Handle 'response' of type FundResource
} catch (err) {
  // TODO: Handle 'err' of type Funds.FundsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds.fundsShow({ fund: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundResource
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
| <code>fund</code> | <code>string</code> | The fund fid |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.fundsShow(request)`

- **OnSuccess**: <code>[FundResource](src/models/fund-resource.ts)</code>
- **OnError**: throws <code>[Funds.FundsShowError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.fundsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundResource, Funds.FundsShowError&gt;</code>, with `result.value` of type <code>[FundResource](src/models/fund-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundsStore(request: Funds.FundsStoreRequest, options?: RequestOptions): ApiPromise&lt;FundResource, Funds.FundsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.fundsStore({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type FundResource
} catch (err) {
  // TODO: Handle 'err' of type Funds.FundsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds.fundsStore({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundResource
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
| <code>body</code> | <code>[V1FundsRequest](src/models/v1-funds-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.fundsStore(request)`

- **OnSuccess**: <code>[FundResource](src/models/fund-resource.ts)</code>
- **OnError**: throws <code>[Funds.FundsStoreError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.fundsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundResource, Funds.FundsStoreError&gt;</code>, with `result.value` of type <code>[FundResource](src/models/fund-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundsUpdate(request: Funds.FundsUpdateRequest, options?: RequestOptions): ApiPromise&lt;FundResource, Funds.FundsUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.fundsUpdate({
    fund: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type FundResource
} catch (err) {
  // TODO: Handle 'err' of type Funds.FundsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds
  .fundsUpdate({ fund: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundResource
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
| <code>fund</code> | <code>string</code> | The fund fid |
| <code>body</code> | <code>[V1FundsRequest](src/models/v1-funds-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.fundsUpdate(request)`

- **OnSuccess**: <code>[FundResource](src/models/fund-resource.ts)</code>
- **OnError**: throws <code>[Funds.FundsUpdateError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.fundsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundResource, Funds.FundsUpdateError&gt;</code>, with `result.value` of type <code>[FundResource](src/models/fund-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HouseholdContacts

> Source: [HouseholdContacts](src/resources/household-contacts.ts)

<details>
<summary><code>householdsContactsDestroy(request: HouseholdContacts.HouseholdsContactsDestroyRequest, options?: RequestOptions): ApiPromise&lt;AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.householdContacts.householdsContactsDestroy({ household: 1, contact: 1 });
  // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
} catch (err) {
  // TODO: Handle 'err' of type HouseholdContacts.HouseholdsContactsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.householdContacts
  .householdsContactsDestroy({ household: 1, contact: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppHttpResourcesApiHouseholdResource
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
| <code>household</code> | <code>number</code> | The household ID |
| <code>contact</code> | <code>number</code> | The contact ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.householdContacts.householdsContactsDestroy(request)`

- **OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: throws <code>[HouseholdContacts.HouseholdsContactsDestroyError](src/resources/household-contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.householdContacts.householdsContactsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsDestroyError&gt;</code>, with `result.value` of type <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsContactsIndex(request: HouseholdContacts.HouseholdsContactsIndexRequest, options?: RequestOptions): ApiPromise&lt;V1HouseholdsContactsResponse, HouseholdContacts.HouseholdsContactsIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.householdContacts.householdsContactsIndex({ household: 1 });
  // TODO: Handle 'response' of type V1HouseholdsContactsResponse
} catch (err) {
  // TODO: Handle 'err' of type HouseholdContacts.HouseholdsContactsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.householdContacts.householdsContactsIndex({ household: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HouseholdsContactsResponse
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
| <code>household</code> | <code>number</code> | The household ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.householdContacts.householdsContactsIndex(request)`

- **OnSuccess**: <code>[V1HouseholdsContactsResponse](src/models/v1-households-contacts-response.ts)</code>
- **OnError**: throws <code>[HouseholdContacts.HouseholdsContactsIndexError](src/resources/household-contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.householdContacts.householdsContactsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HouseholdsContactsResponse, HouseholdContacts.HouseholdsContactsIndexError&gt;</code>, with `result.value` of type <code>[V1HouseholdsContactsResponse](src/models/v1-households-contacts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsContactsShow(request: HouseholdContacts.HouseholdsContactsShowRequest, options?: RequestOptions): ApiPromise&lt;ContactResource, HouseholdContacts.HouseholdsContactsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.householdContacts.householdsContactsShow({ household: 1, contact: 1 });
  // TODO: Handle 'response' of type ContactResource
} catch (err) {
  // TODO: Handle 'err' of type HouseholdContacts.HouseholdsContactsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.householdContacts
  .householdsContactsShow({ household: 1, contact: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactResource
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
| <code>household</code> | <code>number</code> | The household ID |
| <code>contact</code> | <code>number</code> | The contact ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.householdContacts.householdsContactsShow(request)`

- **OnSuccess**: <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: throws <code>[HouseholdContacts.HouseholdsContactsShowError](src/resources/household-contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.householdContacts.householdsContactsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactResource, HouseholdContacts.HouseholdsContactsShowError&gt;</code>, with `result.value` of type <code>[ContactResource](src/models/contact-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsContactsStore(request: HouseholdContacts.HouseholdsContactsStoreRequest, options?: RequestOptions): ApiPromise&lt;AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.householdContacts.householdsContactsStore({
    household: 1,
    body: { contactId: 1 },
  });
  // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
} catch (err) {
  // TODO: Handle 'err' of type HouseholdContacts.HouseholdsContactsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.householdContacts
  .householdsContactsStore({ household: 1, body: { contactId: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppHttpResourcesApiHouseholdResource
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
| <code>household</code> | <code>number</code> | The household ID |
| <code>body</code> | <code>[V1HouseholdsContactsRequest](src/models/v1-households-contacts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.householdContacts.householdsContactsStore(request)`

- **OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: throws <code>[HouseholdContacts.HouseholdsContactsStoreError](src/resources/household-contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.householdContacts.householdsContactsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsStoreError&gt;</code>, with `result.value` of type <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Households

> Source: [Households](src/resources/households.ts)

<details>
<summary><code>householdsDestroy(request: Households.HouseholdsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Households.HouseholdsDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.households.householdsDestroy({ household: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Households.HouseholdsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.households.householdsDestroy({ household: 1 }).asApiResult();
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
| <code>household</code> | <code>number</code> | The household ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.households.householdsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Households.HouseholdsDestroyError](src/resources/households.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.households.householdsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Households.HouseholdsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsIndex(request?: Households.HouseholdsIndexRequest, options?: RequestOptions): ApiPromise&lt;HouseholdResource[], Households.HouseholdsIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.households.householdsIndex();
  // TODO: Handle 'response' of type HouseholdResource[]
} catch (err) {
  // TODO: Handle 'err' of type Households.HouseholdsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.households.householdsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HouseholdResource[]
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
| <code>headContactId?</code> | <code>string</code> | - |
| <code>contacts?</code> | <code>string</code> | - |
| <code>query?</code> | <code>string</code> | - |
| <code>sortBy?</code> | <code>string</code> | - |
| <code>sortByDesc?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | -<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.households.householdsIndex(request)`

- **OnSuccess**: <code>[HouseholdResource](src/models/household-resource.ts)[]</code>
- **OnError**: throws <code>[Households.HouseholdsIndexError](src/resources/households.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.households.householdsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HouseholdResource[], Households.HouseholdsIndexError&gt;</code>, with `result.value` of type <code>[HouseholdResource](src/models/household-resource.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsShow(request: Households.HouseholdsShowRequest, options?: RequestOptions): ApiPromise&lt;AppHttpResourcesApiHouseholdResource, Households.HouseholdsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.households.householdsShow({ household: 1 });
  // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
} catch (err) {
  // TODO: Handle 'err' of type Households.HouseholdsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.households.householdsShow({ household: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppHttpResourcesApiHouseholdResource
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
| <code>household</code> | <code>number</code> | The household ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.households.householdsShow(request)`

- **OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: throws <code>[Households.HouseholdsShowError](src/resources/households.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.households.householdsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppHttpResourcesApiHouseholdResource, Households.HouseholdsShowError&gt;</code>, with `result.value` of type <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsStore(request: Households.HouseholdsStoreRequest, options?: RequestOptions): ApiPromise&lt;AppHttpResourcesApiHouseholdResource, Households.HouseholdsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.households.householdsStore({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
} catch (err) {
  // TODO: Handle 'err' of type Households.HouseholdsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.households
  .householdsStore({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppHttpResourcesApiHouseholdResource
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
| <code>body</code> | <code>[HouseholdStoreRequest](src/models/household-store-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.households.householdsStore(request)`

- **OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: throws <code>[Households.HouseholdsStoreError](src/resources/households.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.households.householdsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppHttpResourcesApiHouseholdResource, Households.HouseholdsStoreError&gt;</code>, with `result.value` of type <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>householdsUpdate(request: Households.HouseholdsUpdateRequest, options?: RequestOptions): ApiPromise&lt;AppHttpResourcesApiHouseholdResource, Households.HouseholdsUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.households.householdsUpdate({ household: 1 });
  // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
} catch (err) {
  // TODO: Handle 'err' of type Households.HouseholdsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.households.householdsUpdate({ household: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppHttpResourcesApiHouseholdResource
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
| <code>household</code> | <code>number</code> | The household ID |
| <code>body?</code> | <code>[HouseholdUpdateRequest](src/models/household-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.households.householdsUpdate(request)`

- **OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: throws <code>[Households.HouseholdsUpdateError](src/resources/households.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.households.householdsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppHttpResourcesApiHouseholdResource, Households.HouseholdsUpdateError&gt;</code>, with `result.value` of type <code>[AppHttpResourcesApiHouseholdResource](src/models/app-http-resources-api-household-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/resources/messages.ts)

<details>
<summary><code>messagesIndex(options?: RequestOptions): ApiPromise&lt;V1MessagesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.messagesIndex();
  // TODO: Handle 'response' of type V1MessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages.messagesIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MessagesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.messagesIndex()`

- **OnSuccess**: <code>[V1MessagesResponse](src/models/v1-messages-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.messages.messagesIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MessagesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1MessagesResponse](src/models/v1-messages-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>messagesShow(request: Messages.MessagesShowRequest, options?: RequestOptions): ApiPromise&lt;MessageResource, Messages.MessagesShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.messagesShow({ message: 1 });
  // TODO: Handle 'response' of type MessageResource
} catch (err) {
  // TODO: Handle 'err' of type Messages.MessagesShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages.messagesShow({ message: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResource
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
| <code>message</code> | <code>number</code> | The message ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.messagesShow(request)`

- **OnSuccess**: <code>[MessageResource](src/models/message-resource.ts)</code>
- **OnError**: throws <code>[Messages.MessagesShowError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.messagesShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResource, Messages.MessagesShowError&gt;</code>, with `result.value` of type <code>[MessageResource](src/models/message-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payouts

> Source: [Payouts](src/resources/payouts.ts)

<details>
<summary><code>payoutsIndex(options?: RequestOptions): ApiPromise&lt;V1PayoutsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.payoutsIndex();
  // TODO: Handle 'response' of type V1PayoutsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.payoutsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PayoutsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.payoutsIndex()`

- **OnSuccess**: <code>[V1PayoutsResponse](src/models/v1-payouts-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.payouts.payoutsIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PayoutsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1PayoutsResponse](src/models/v1-payouts-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>payoutsShow(request: Payouts.PayoutsShowRequest, options?: RequestOptions): ApiPromise&lt;PayoutResource, Payouts.PayoutsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.payoutsShow({ payout: "some example string" });
  // TODO: Handle 'response' of type PayoutResource
} catch (err) {
  // TODO: Handle 'err' of type Payouts.PayoutsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.payoutsShow({ payout: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutResource
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
| <code>payout</code> | <code>string</code> | The payout number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.payoutsShow(request)`

- **OnSuccess**: <code>[PayoutResource](src/models/payout-resource.ts)</code>
- **OnError**: throws <code>[Payouts.PayoutsShowError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.payoutsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutResource, Payouts.PayoutsShowError&gt;</code>, with `result.value` of type <code>[PayoutResource](src/models/payout-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pledges

> Source: [Pledges](src/resources/pledges.ts)

<details>
<summary><code>pledgesIndex(options?: RequestOptions): ApiPromise&lt;V1PledgesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pledges.pledgesIndex();
  // TODO: Handle 'response' of type V1PledgesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pledges.pledgesIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PledgesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pledges.pledgesIndex()`

- **OnSuccess**: <code>[V1PledgesResponse](src/models/v1-pledges-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pledges.pledgesIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PledgesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1PledgesResponse](src/models/v1-pledges-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pledgesShow(request: Pledges.PledgesShowRequest, options?: RequestOptions): ApiPromise&lt;PledgeResource, Pledges.PledgesShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pledges.pledgesShow({ pledge: 1 });
  // TODO: Handle 'response' of type PledgeResource
} catch (err) {
  // TODO: Handle 'err' of type Pledges.PledgesShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pledges.pledgesShow({ pledge: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PledgeResource
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
| <code>pledge</code> | <code>number</code> | The pledge ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pledges.pledgesShow(request)`

- **OnSuccess**: <code>[PledgeResource](src/models/pledge-resource.ts)</code>
- **OnError**: throws <code>[Pledges.PledgesShowError](src/resources/pledges.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pledges.pledgesShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PledgeResource, Pledges.PledgesShowError&gt;</code>, with `result.value` of type <code>[PledgeResource](src/models/pledge-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringPlans

> Source: [RecurringPlans](src/resources/recurring-plans.ts)

<details>
<summary><code>plansIndex(request?: RecurringPlans.PlansIndexRequest, options?: RequestOptions): ApiPromise&lt;V1PlansResponse, RecurringPlans.PlansIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringPlans.plansIndex();
  // TODO: Handle 'response' of type V1PlansResponse
} catch (err) {
  // TODO: Handle 'err' of type RecurringPlans.PlansIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringPlans.plansIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PlansResponse
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
| <code>contacts?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringPlans.plansIndex(request)`

- **OnSuccess**: <code>[V1PlansResponse](src/models/v1-plans-response.ts)</code>
- **OnError**: throws <code>[RecurringPlans.PlansIndexError](src/resources/recurring-plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringPlans.plansIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PlansResponse, RecurringPlans.PlansIndexError&gt;</code>, with `result.value` of type <code>[V1PlansResponse](src/models/v1-plans-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>plansShow(request: RecurringPlans.PlansShowRequest, options?: RequestOptions): ApiPromise&lt;RecurringPlanResource, RecurringPlans.PlansShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringPlans.plansShow({ plan: "some example string" });
  // TODO: Handle 'response' of type RecurringPlanResource
} catch (err) {
  // TODO: Handle 'err' of type RecurringPlans.PlansShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringPlans.plansShow({ plan: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringPlanResource
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
| <code>plan</code> | <code>string</code> | The plan uid |
| <code>firstName?</code> | <code>string</code> | - |
| <code>lastName?</code> | <code>string</code> | - |
| <code>email?</code> | <code>string</code> | - |
| <code>amount?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringPlans.plansShow(request)`

- **OnSuccess**: <code>[RecurringPlanResource](src/models/recurring-plan-resource.ts)</code>
- **OnError**: throws <code>[RecurringPlans.PlansShowError](src/resources/recurring-plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringPlans.plansShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringPlanResource, RecurringPlans.PlansShowError&gt;</code>, with `result.value` of type <code>[RecurringPlanResource](src/models/recurring-plan-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SsoAccounts

> Source: [SsoAccounts](src/resources/sso-accounts.ts)

<details>
<summary><code>ssoAccount(options?: RequestOptions): ApiPromise&lt;SsoAccountResource, SsoAccounts.SsoAccountError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ssoAccounts.ssoAccount();
  // TODO: Handle 'response' of type SsoAccountResource
} catch (err) {
  // TODO: Handle 'err' of type SsoAccounts.SsoAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ssoAccounts.ssoAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SsoAccountResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ssoAccounts.ssoAccount()`

- **OnSuccess**: <code>[SsoAccountResource](src/models/sso-account-resource.ts)</code>
- **OnError**: throws <code>[SsoAccounts.SsoAccountError](src/resources/sso-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ssoAccounts.ssoAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SsoAccountResource, SsoAccounts.SsoAccountError&gt;</code>, with `result.value` of type <code>[SsoAccountResource](src/models/sso-account-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SsoCampaigns

> Source: [SsoCampaigns](src/resources/sso-campaigns.ts)

<details>
<summary><code>ssoCampaignsShow(request: SsoCampaigns.SsoCampaignsShowRequest, options?: RequestOptions): ApiPromise&lt;CampaignResource, SsoCampaigns.SsoCampaignsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ssoCampaigns.ssoCampaignsShow({ campaign: 1 });
  // TODO: Handle 'response' of type CampaignResource
} catch (err) {
  // TODO: Handle 'err' of type SsoCampaigns.SsoCampaignsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ssoCampaigns.ssoCampaignsShow({ campaign: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignResource
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
| <code>campaign</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ssoCampaigns.ssoCampaignsShow(request)`

- **OnSuccess**: <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: throws <code>[SsoCampaigns.SsoCampaignsShowError](src/resources/sso-campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ssoCampaigns.ssoCampaignsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignResource, SsoCampaigns.SsoCampaignsShowError&gt;</code>, with `result.value` of type <code>[CampaignResource](src/models/campaign-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tickets

> Source: [Tickets](src/resources/tickets.ts)

<details>
<summary><code>ticketsIndex(options?: RequestOptions): ApiPromise&lt;V1TicketsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tickets.ticketsIndex();
  // TODO: Handle 'response' of type V1TicketsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tickets.ticketsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TicketsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tickets.ticketsIndex()`

- **OnSuccess**: <code>[V1TicketsResponse](src/models/v1-tickets-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tickets.ticketsIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TicketsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1TicketsResponse](src/models/v1-tickets-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ticketsShow(request: Tickets.TicketsShowRequest, options?: RequestOptions): ApiPromise&lt;TicketResource, Tickets.TicketsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tickets.ticketsShow({ ticket: "some example string" });
  // TODO: Handle 'response' of type TicketResource
} catch (err) {
  // TODO: Handle 'err' of type Tickets.TicketsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tickets.ticketsShow({ ticket: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TicketResource
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
| <code>ticket</code> | <code>string</code> | The ticket uid |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tickets.ticketsShow(request)`

- **OnSuccess**: <code>[TicketResource](src/models/ticket-resource.ts)</code>
- **OnError**: throws <code>[Tickets.TicketsShowError](src/resources/tickets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tickets.ticketsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TicketResource, Tickets.TicketsShowError&gt;</code>, with `result.value` of type <code>[TicketResource](src/models/ticket-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>transactionsIndex(request?: Transactions.TransactionsIndexRequest, options?: RequestOptions): ApiPromise&lt;V1TransactionsResponse, Transactions.TransactionsIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.transactionsIndex();
  // TODO: Handle 'response' of type V1TransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Transactions.TransactionsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.transactionsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TransactionsResponse
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
| <code>transactedAfter?</code> | <code>Date</code> (date-time) | - |
| <code>transactedBefore?</code> | <code>Date</code> (date-time) | - |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | - |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | - |
| <code>updatedAfter?</code> | <code>Date</code> (date-time) | - |
| <code>updatedBefore?</code> | <code>Date</code> (date-time) | - |
| <code>checkDepositedAfter?</code> | <code>Date</code> (date-time) | - |
| <code>checkDepositedBefore?</code> | <code>Date</code> (date-time) | - |
| <code>contacts?</code> | <code>string</code> | - |
| <code>method?</code> | <code>string</code> | - |
| <code>scope?</code> | <code>[ScopeGivebutterApiDocumentationTransactionsApi](src/models/scope-givebutter-api-documentation-transactions-api.ts)</code> | - |
| <code>sortBy?</code> | <code>[SortByGivebutterApiDocumentationTransactionsApi](src/models/sort-by-givebutter-api-documentation-transactions-api.ts)</code> | - |
| <code>sortByDesc?</code> | <code>[SortByDescGivebutterApiDocumentationTransactionsApi](src/models/sort-by-desc-givebutter-api-documentation-transactions-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.transactionsIndex(request)`

- **OnSuccess**: <code>[V1TransactionsResponse](src/models/v1-transactions-response.ts)</code>
- **OnError**: throws <code>[Transactions.TransactionsIndexError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.transactionsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TransactionsResponse, Transactions.TransactionsIndexError&gt;</code>, with `result.value` of type <code>[V1TransactionsResponse](src/models/v1-transactions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsShow(request: Transactions.TransactionsShowRequest, options?: RequestOptions): ApiPromise&lt;TransactionResource2, Transactions.TransactionsShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.transactionsShow({ transaction: "some example string" });
  // TODO: Handle 'response' of type TransactionResource2
} catch (err) {
  // TODO: Handle 'err' of type Transactions.TransactionsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .transactionsShow({ transaction: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionResource2
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
| <code>transaction</code> | <code>string</code> | The transaction tid |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.transactionsShow(request)`

- **OnSuccess**: <code>[TransactionResource2](src/models/unions/transaction-resource2.ts)</code>
- **OnError**: throws <code>[Transactions.TransactionsShowError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.transactionsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionResource2, Transactions.TransactionsShowError&gt;</code>, with `result.value` of type <code>[TransactionResource2](src/models/unions/transaction-resource2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsStore(request: Transactions.TransactionsStoreRequest, options?: RequestOptions): ApiPromise&lt;TransactionResource2, Transactions.TransactionsStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.transactionsStore({
    body: {
      method: PaymentMethodEnum.Ach,
      transactedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      amount: "some example string",
    },
  });
  // TODO: Handle 'response' of type TransactionResource2
} catch (err) {
  // TODO: Handle 'err' of type Transactions.TransactionsStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .transactionsStore({
    body: {
      method: PaymentMethodEnum.Ach,
      transactedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      amount: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionResource2
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
| <code>body</code> | <code>[StoreTransactionRequest](src/models/store-transaction-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.transactionsStore(request)`

- **OnSuccess**: <code>[TransactionResource2](src/models/unions/transaction-resource2.ts)</code>
- **OnError**: throws <code>[Transactions.TransactionsStoreError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.transactionsStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionResource2, Transactions.TransactionsStoreError&gt;</code>, with `result.value` of type <code>[TransactionResource2](src/models/unions/transaction-resource2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsUpdate(request: Transactions.TransactionsUpdateRequest, options?: RequestOptions): ApiPromise&lt;TransactionResource2, Transactions.TransactionsUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.transactionsUpdate({ transaction: "some example string" });
  // TODO: Handle 'response' of type TransactionResource2
} catch (err) {
  // TODO: Handle 'err' of type Transactions.TransactionsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .transactionsUpdate({ transaction: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionResource2
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
| <code>transaction</code> | <code>string</code> | The transaction tid |
| <code>body?</code> | <code>[UpdateTransactionRequest](src/models/update-transaction-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.transactionsUpdate(request)`

- **OnSuccess**: <code>[TransactionResource2](src/models/unions/transaction-resource2.ts)</code>
- **OnError**: throws <code>[Transactions.TransactionsUpdateError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.transactionsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionResource2, Transactions.TransactionsUpdateError&gt;</code>, with `result.value` of type <code>[TransactionResource2](src/models/unions/transaction-resource2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookActivities

> Source: [WebhookActivities](src/resources/webhook-activities.ts)

<details>
<summary><code>webhooksActivitiesIndex(request: WebhookActivities.WebhooksActivitiesIndexRequest, options?: RequestOptions): ApiPromise&lt;V1WebhooksActivitiesResponse, WebhookActivities.WebhooksActivitiesIndexError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookActivities.webhooksActivitiesIndex({ webhook: "some example string" });
  // TODO: Handle 'response' of type V1WebhooksActivitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type WebhookActivities.WebhooksActivitiesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookActivities
  .webhooksActivitiesIndex({ webhook: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebhooksActivitiesResponse
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
| <code>webhook</code> | <code>string</code> | The webhook ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookActivities.webhooksActivitiesIndex(request)`

- **OnSuccess**: <code>[V1WebhooksActivitiesResponse](src/models/v1-webhooks-activities-response.ts)</code>
- **OnError**: throws <code>[WebhookActivities.WebhooksActivitiesIndexError](src/resources/webhook-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookActivities.webhooksActivitiesIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebhooksActivitiesResponse, WebhookActivities.WebhooksActivitiesIndexError&gt;</code>, with `result.value` of type <code>[V1WebhooksActivitiesResponse](src/models/v1-webhooks-activities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksActivitiesShow(request: WebhookActivities.WebhooksActivitiesShowRequest, options?: RequestOptions): ApiPromise&lt;WebhookActivityResource, WebhookActivities.WebhooksActivitiesShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookActivities.webhooksActivitiesShow({
    webhook: "some example string",
    activity: "some example string",
  });
  // TODO: Handle 'response' of type WebhookActivityResource
} catch (err) {
  // TODO: Handle 'err' of type WebhookActivities.WebhooksActivitiesShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookActivities
  .webhooksActivitiesShow({ webhook: "some example string", activity: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookActivityResource
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
| <code>webhook</code> | <code>string</code> | The webhook ID |
| <code>activity</code> | <code>string</code> | The activity ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookActivities.webhooksActivitiesShow(request)`

- **OnSuccess**: <code>[WebhookActivityResource](src/models/webhook-activity-resource.ts)</code>
- **OnError**: throws <code>[WebhookActivities.WebhooksActivitiesShowError](src/resources/webhook-activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookActivities.webhooksActivitiesShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookActivityResource, WebhookActivities.WebhooksActivitiesShowError&gt;</code>, with `result.value` of type <code>[WebhookActivityResource](src/models/webhook-activity-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>webhooksDestroy(request: Webhooks.WebhooksDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Webhooks.WebhooksDestroyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooks.webhooksDestroy({ webhook: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.webhooksDestroy({ webhook: "some example string" }).asApiResult();
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
| <code>webhook</code> | <code>string</code> | The webhook ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Webhooks.WebhooksDestroyError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Webhooks.WebhooksDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksIndex(options?: RequestOptions): ApiPromise&lt;V1WebhooksResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksIndex();
  // TODO: Handle 'response' of type V1WebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.webhooksIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebhooksResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksIndex()`

- **OnSuccess**: <code>[V1WebhooksResponse](src/models/v1-webhooks-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.webhooksIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebhooksResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1WebhooksResponse](src/models/v1-webhooks-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksShow(request: Webhooks.WebhooksShowRequest, options?: RequestOptions): ApiPromise&lt;WebhookResource, Webhooks.WebhooksShowError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksShow({ webhook: "some example string" });
  // TODO: Handle 'response' of type WebhookResource
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.webhooksShow({ webhook: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResource
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
| <code>webhook</code> | <code>string</code> | The webhook ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksShow(request)`

- **OnSuccess**: <code>[WebhookResource](src/models/webhook-resource.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksShowError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResource, Webhooks.WebhooksShowError&gt;</code>, with `result.value` of type <code>[WebhookResource](src/models/webhook-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksStore(request: Webhooks.WebhooksStoreRequest, options?: RequestOptions): ApiPromise&lt;WebhookResource, Webhooks.WebhooksStoreError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksStore({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type WebhookResource
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksStoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.webhooksStore({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResource
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
| <code>body</code> | <code>[V1WebhooksRequest](src/models/v1-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksStore(request)`

- **OnSuccess**: <code>[WebhookResource](src/models/webhook-resource.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksStoreError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResource, Webhooks.WebhooksStoreError&gt;</code>, with `result.value` of type <code>[WebhookResource](src/models/webhook-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksUpdate(request: Webhooks.WebhooksUpdateRequest, options?: RequestOptions): ApiPromise&lt;WebhookResource, Webhooks.WebhooksUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksUpdate({
    webhook: "some example string",
    body: { url: "https://example.com", events: [Event.CampaignCreated] },
  });
  // TODO: Handle 'response' of type WebhookResource
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .webhooksUpdate({
    webhook: "some example string",
    body: { url: "https://example.com", events: [Event.CampaignCreated] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResource
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
| <code>webhook</code> | <code>string</code> | The webhook ID |
| <code>body</code> | <code>[V1WebhooksRequest1](src/models/v1-webhooks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksUpdate(request)`

- **OnSuccess**: <code>[WebhookResource](src/models/webhook-resource.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksUpdateError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResource, Webhooks.WebhooksUpdateError&gt;</code>, with `result.value` of type <code>[WebhookResource](src/models/webhook-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GivebutterError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

