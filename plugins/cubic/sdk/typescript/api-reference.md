# Reference

> Source: [CubicClient](src/client.ts)

## Analytics

> Source: [Analytics](src/resources/analytics.ts)

<details>
<summary><code>listPullRequestAnalytics(request: Analytics.ListPullRequestAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsPrPage, Analytics.ListPullRequestAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export metrics for merged pull requests reviewed by cubic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.listPullRequestAnalytics({ org: "some example string" });
  // TODO: Handle 'response' of type AnalyticsPrPage
} catch (err) {
  // TODO: Handle 'err' of type Analytics.ListPullRequestAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.listPullRequestAnalytics({ org: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsPrPage
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
| <code>org</code> | <code>string</code> | GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is trimmed before validation. |
| <code>repo?</code> | <code>string</code> | Filter to one repository under the selected owner. Surrounding whitespace is trimmed before validation; blank values are ignored. |
| <code>startDate?</code> | <code>string</code> | Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as 2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's available history. |
| <code>endDate?</code> | <code>string</code> | End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z. Surrounding whitespace is trimmed before validation; blank values are ignored. |
| <code>perPage?</code> | <code>number</code> | Number of results per page, from 1 to 100. Values outside this range return 400.<br>**Default**: 100 |
| <code>cursor?</code> | <code>string</code> | Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.listPullRequestAnalytics(request)`

- **OnSuccess**: <code>[AnalyticsPrPage](src/models/analytics-pr-page.ts)</code>
- **OnError**: throws <code>[Analytics.ListPullRequestAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.listPullRequestAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsPrPage, Analytics.ListPullRequestAnalyticsError&gt;</code>, with `result.value` of type <code>[AnalyticsPrPage](src/models/analytics-pr-page.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CubicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>getMember(request: Organizations.GetMemberRequest, options?: RequestOptions): ApiPromise&lt;OrganizationMember, Organizations.GetMemberError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getMember({
    org: "some example string",
    githubUserId: "some example string",
  });
  // TODO: Handle 'response' of type OrganizationMember
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getMember({ org: "some example string", githubUserId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationMember
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
| <code>org</code> | <code>string</code> | GitHub organization login, such as acme. |
| <code>githubUserId</code> | <code>string</code> | Numeric GitHub user ID of the member. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getMember(request)`

- **OnSuccess**: <code>[OrganizationMember](src/models/organization-member.ts)</code>
- **OnError**: throws <code>[Organizations.GetMemberError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationMember, Organizations.GetMemberError&gt;</code>, with `result.value` of type <code>[OrganizationMember](src/models/organization-member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CubicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMembers(request: Organizations.ListMembersRequest, options?: RequestOptions): ApiPromise&lt;MemberList, Organizations.ListMembersError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.listMembers({ org: "some example string" });
  // TODO: Handle 'response' of type MemberList
} catch (err) {
  // TODO: Handle 'err' of type Organizations.ListMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.listMembers({ org: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberList
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
| <code>org</code> | <code>string</code> | GitHub organization login, such as acme. |
| <code>search?</code> | <code>string</code> | Match part of a GitHub login. |
| <code>role?</code> | <code>[Role](src/models/role.ts)</code> | - |
| <code>seat?</code> | <code>[Seat](src/models/seat.ts)</code> | true for members with a seat, false for members without one. |
| <code>cursor?</code> | <code>string</code> | The nextCursor from the previous page. |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.listMembers(request)`

- **OnSuccess**: <code>[MemberList](src/models/member-list.ts)</code>
- **OnError**: throws <code>[Organizations.ListMembersError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.listMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberList, Organizations.ListMembersError&gt;</code>, with `result.value` of type <code>[MemberList](src/models/member-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CubicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrganizations(request?: Organizations.ListOrganizationsRequest, options?: RequestOptions): ApiPromise&lt;OrganizationList, Organizations.ListOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An organization API key lists only its own organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.listOrganizations();
  // TODO: Handle 'response' of type OrganizationList
} catch (err) {
  // TODO: Handle 'err' of type Organizations.ListOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.listOrganizations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationList
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
| <code>cursor?</code> | <code>string</code> | The nextCursor from the previous page. |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.listOrganizations(request)`

- **OnSuccess**: <code>[OrganizationList](src/models/organization-list.ts)</code>
- **OnError**: throws <code>[Organizations.ListOrganizationsError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.listOrganizations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationList, Organizations.ListOrganizationsError&gt;</code>, with `result.value` of type <code>[OrganizationList](src/models/organization-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CubicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMember(request: Organizations.UpdateMemberRequest, options?: RequestOptions): ApiPromise&lt;MemberUpdateResult, Organizations.UpdateMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the GitHub organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.updateMember({
    org: "some example string",
    githubUserId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type MemberUpdateResult
} catch (err) {
  // TODO: Handle 'err' of type Organizations.UpdateMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .updateMember({ org: "some example string", githubUserId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberUpdateResult
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
| <code>org</code> | <code>string</code> | GitHub organization login, such as acme. |
| <code>githubUserId</code> | <code>string</code> | Numeric GitHub user ID of the member. |
| <code>body</code> | <code>[MemberUpdate](src/models/member-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.updateMember(request)`

- **OnSuccess**: <code>[MemberUpdateResult](src/models/member-update-result.ts)</code>
- **OnError**: throws <code>[Organizations.UpdateMemberError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.updateMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberUpdateResult, Organizations.UpdateMemberError&gt;</code>, with `result.value` of type <code>[MemberUpdateResult](src/models/member-update-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CubicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

