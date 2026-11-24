# Reference

> Source: [AmazonLexClient](src/client.ts)

## Aliases

> Source: [Aliases](src/resources/aliases.ts)

<details>
<summary><code>deleteBotAlias(request: Aliases.DeleteBotAliasRequestParams, options?: RequestOptions): ApiPromise&lt;string, Aliases.DeleteBotAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aliases.deleteBotAlias({
    botName: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Aliases.DeleteBotAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aliases
  .deleteBotAlias({ botName: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botName</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteBotAliasRequest](src/models/models-lex-delete-bot-alias-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aliases.deleteBotAlias(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Aliases.DeleteBotAliasError](src/resources/aliases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aliases.deleteBotAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Aliases.DeleteBotAliasError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBotAlias(request: Aliases.GetBotAliasRequestParams, options?: RequestOptions): ApiPromise&lt;GetBotAliasResponse, Aliases.GetBotAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aliases.getBotAlias({
    botName: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type GetBotAliasResponse
} catch (err) {
  // TODO: Handle 'err' of type Aliases.GetBotAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aliases
  .getBotAlias({ botName: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotAliasResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aliases.getBotAlias(request)`

- **OnSuccess**: <code>[GetBotAliasResponse](src/models/get-bot-alias-response.ts)</code>
- **OnError**: throws <code>[Aliases.GetBotAliasError](src/resources/aliases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aliases.getBotAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotAliasResponse, Aliases.GetBotAliasError&gt;</code>, with `result.value` of type <code>[GetBotAliasResponse](src/models/get-bot-alias-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBotAliases(request: Aliases.GetBotAliasesRequestParams, options?: RequestOptions): ApiPromise&lt;GetBotAliasesResponse, Aliases.GetBotAliasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the lex:GetBotAliases action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aliases.getBotAliases({ botName: "some example string" });
  // TODO: Handle 'response' of type GetBotAliasesResponse
} catch (err) {
  // TODO: Handle 'err' of type Aliases.GetBotAliasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aliases.getBotAliases({ botName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotAliasesResponse
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
| <code>botName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aliases.getBotAliases(request)`

- **OnSuccess**: <code>[GetBotAliasesResponse](src/models/get-bot-aliases-response.ts)</code>
- **OnError**: throws <code>[Aliases.GetBotAliasesError](src/resources/aliases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aliases.getBotAliases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotAliasesResponse, Aliases.GetBotAliasesError&gt;</code>, with `result.value` of type <code>[GetBotAliasesResponse](src/models/get-bot-aliases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putBotAlias(request: Aliases.PutBotAliasRequestParams, options?: RequestOptions): ApiPromise&lt;PutBotAliasResponse, Aliases.PutBotAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aliases.putBotAlias({
    botName: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type PutBotAliasResponse
} catch (err) {
  // TODO: Handle 'err' of type Aliases.PutBotAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aliases
  .putBotAlias({ botName: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutBotAliasResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PutBotAliasRequest](src/models/put-bot-alias-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aliases.putBotAlias(request)`

- **OnSuccess**: <code>[PutBotAliasResponse](src/models/put-bot-alias-response.ts)</code>
- **OnError**: throws <code>[Aliases.PutBotAliasError](src/resources/aliases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aliases.putBotAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutBotAliasResponse, Aliases.PutBotAliasError&gt;</code>, with `result.value` of type <code>[PutBotAliasResponse](src/models/put-bot-alias-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Bots

> Source: [Bots](src/resources/bots.ts)

<details>
<summary><code>batchCreateCustomVocabularyItem(request: Bots.BatchCreateCustomVocabularyItemRequestParams, options?: RequestOptions): ApiPromise&lt;BatchCreateCustomVocabularyItemResponse, Bots.BatchCreateCustomVocabularyItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.batchCreateCustomVocabularyItem({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type BatchCreateCustomVocabularyItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.BatchCreateCustomVocabularyItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .batchCreateCustomVocabularyItem({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchCreateCustomVocabularyItemResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[BatchCreateCustomVocabularyItemRequest](src/models/batch-create-custom-vocabulary-item-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.batchCreateCustomVocabularyItem(request)`

- **OnSuccess**: <code>[BatchCreateCustomVocabularyItemResponse](src/models/batch-create-custom-vocabulary-item-response.ts)</code>
- **OnError**: throws <code>[Bots.BatchCreateCustomVocabularyItemError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.batchCreateCustomVocabularyItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchCreateCustomVocabularyItemResponse, Bots.BatchCreateCustomVocabularyItemError&gt;</code>, with `result.value` of type <code>[BatchCreateCustomVocabularyItemResponse](src/models/batch-create-custom-vocabulary-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchDeleteCustomVocabularyItem(request: Bots.BatchDeleteCustomVocabularyItemRequestParams, options?: RequestOptions): ApiPromise&lt;BatchDeleteCustomVocabularyItemResponse, Bots.BatchDeleteCustomVocabularyItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.batchDeleteCustomVocabularyItem({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type BatchDeleteCustomVocabularyItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.BatchDeleteCustomVocabularyItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .batchDeleteCustomVocabularyItem({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchDeleteCustomVocabularyItemResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[BatchDeleteCustomVocabularyItemRequest](src/models/batch-delete-custom-vocabulary-item-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.batchDeleteCustomVocabularyItem(request)`

- **OnSuccess**: <code>[BatchDeleteCustomVocabularyItemResponse](src/models/batch-delete-custom-vocabulary-item-response.ts)</code>
- **OnError**: throws <code>[Bots.BatchDeleteCustomVocabularyItemError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.batchDeleteCustomVocabularyItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchDeleteCustomVocabularyItemResponse, Bots.BatchDeleteCustomVocabularyItemError&gt;</code>, with `result.value` of type <code>[BatchDeleteCustomVocabularyItemResponse](src/models/batch-delete-custom-vocabulary-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchUpdateCustomVocabularyItem(request: Bots.BatchUpdateCustomVocabularyItemRequestParams, options?: RequestOptions): ApiPromise&lt;BatchUpdateCustomVocabularyItemResponse, Bots.BatchUpdateCustomVocabularyItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.batchUpdateCustomVocabularyItem({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type BatchUpdateCustomVocabularyItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.BatchUpdateCustomVocabularyItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .batchUpdateCustomVocabularyItem({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchUpdateCustomVocabularyItemResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[BatchUpdateCustomVocabularyItemRequest](src/models/batch-update-custom-vocabulary-item-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.batchUpdateCustomVocabularyItem(request)`

- **OnSuccess**: <code>[BatchUpdateCustomVocabularyItemResponse](src/models/batch-update-custom-vocabulary-item-response.ts)</code>
- **OnError**: throws <code>[Bots.BatchUpdateCustomVocabularyItemError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.batchUpdateCustomVocabularyItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchUpdateCustomVocabularyItemResponse, Bots.BatchUpdateCustomVocabularyItemError&gt;</code>, with `result.value` of type <code>[BatchUpdateCustomVocabularyItemResponse](src/models/batch-update-custom-vocabulary-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>buildBotLocale(request: Bots.BuildBotLocaleRequestParams, options?: RequestOptions): ApiPromise&lt;BuildBotLocaleResponse, Bots.BuildBotLocaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.buildBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type BuildBotLocaleResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.BuildBotLocaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .buildBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildBotLocaleResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[BuildBotLocaleRequest](src/models/build-bot-locale-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.buildBotLocale(request)`

- **OnSuccess**: <code>[BuildBotLocaleResponse](src/models/build-bot-locale-response.ts)</code>
- **OnError**: throws <code>[Bots.BuildBotLocaleError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.buildBotLocale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildBotLocaleResponse, Bots.BuildBotLocaleError&gt;</code>, with `result.value` of type <code>[BuildBotLocaleResponse](src/models/build-bot-locale-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBot(request?: Bots.CreateBotRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBotResponse, Bots.CreateBotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Lex conversational bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createBot();
  // TODO: Handle 'response' of type CreateBotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateBotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.createBot().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBotResponse
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
| <code>body?</code> | <code>[CreateBotRequest](src/models/create-bot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createBot(request)`

- **OnSuccess**: <code>[CreateBotResponse](src/models/create-bot-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateBotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createBot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBotResponse, Bots.CreateBotError&gt;</code>, with `result.value` of type <code>[CreateBotResponse](src/models/create-bot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBotAlias(request: Bots.CreateBotAliasRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBotAliasResponse, Bots.CreateBotAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createBotAlias({ botId: "some example string" });
  // TODO: Handle 'response' of type CreateBotAliasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateBotAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.createBotAlias({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBotAliasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateBotAliasRequest](src/models/create-bot-alias-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createBotAlias(request)`

- **OnSuccess**: <code>[CreateBotAliasResponse](src/models/create-bot-alias-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateBotAliasError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createBotAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBotAliasResponse, Bots.CreateBotAliasError&gt;</code>, with `result.value` of type <code>[CreateBotAliasResponse](src/models/create-bot-alias-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBotLocale(request: Bots.CreateBotLocaleRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBotLocaleResponse, Bots.CreateBotLocaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createBotLocale({
    botId: "some example string",
    botVersion: "some example string",
  });
  // TODO: Handle 'response' of type CreateBotLocaleResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateBotLocaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .createBotLocale({ botId: "some example string", botVersion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBotLocaleResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateBotLocaleRequest](src/models/create-bot-locale-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createBotLocale(request)`

- **OnSuccess**: <code>[CreateBotLocaleResponse](src/models/create-bot-locale-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateBotLocaleError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createBotLocale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBotLocaleResponse, Bots.CreateBotLocaleError&gt;</code>, with `result.value` of type <code>[CreateBotLocaleResponse](src/models/create-bot-locale-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBotReplica(request: Bots.CreateBotReplicaRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBotReplicaResponse, Bots.CreateBotReplicaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Action to create a replication of the source bot in the secondary region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createBotReplica({ botId: "some example string" });
  // TODO: Handle 'response' of type CreateBotReplicaResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateBotReplicaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.createBotReplica({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBotReplicaResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateBotReplicaRequest](src/models/create-bot-replica-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createBotReplica(request)`

- **OnSuccess**: <code>[CreateBotReplicaResponse](src/models/create-bot-replica-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateBotReplicaError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createBotReplica(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBotReplicaResponse, Bots.CreateBotReplicaError&gt;</code>, with `result.value` of type <code>[CreateBotReplicaResponse](src/models/create-bot-replica-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBotVersion(request: Bots.CreateBotVersionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBotVersionResponse, Bots.CreateBotVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createBotVersion({ botId: "some example string" });
  // TODO: Handle 'response' of type CreateBotVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateBotVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.createBotVersion({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBotVersionResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateBotVersionRequest](src/models/create-bot-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createBotVersion(request)`

- **OnSuccess**: <code>[CreateBotVersionResponse](src/models/create-bot-version-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateBotVersionError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createBotVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBotVersionResponse, Bots.CreateBotVersionError&gt;</code>, with `result.value` of type <code>[CreateBotVersionResponse](src/models/create-bot-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBotVersion1(request: Bots.CreateBotVersion1Request, options?: RequestOptions): ApiPromise&lt;ModelsLexCreateBotVersionResponse, Bots.CreateBotVersion1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createBotVersion1({ name: "some example string" });
  // TODO: Handle 'response' of type ModelsLexCreateBotVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateBotVersion1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.createBotVersion1({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsLexCreateBotVersionResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexCreateBotVersionRequest](src/models/models-lex-create-bot-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createBotVersion1(request)`

- **OnSuccess**: <code>[ModelsLexCreateBotVersionResponse](src/models/models-lex-create-bot-version-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateBotVersion1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createBotVersion1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsLexCreateBotVersionResponse, Bots.CreateBotVersion1Error&gt;</code>, with `result.value` of type <code>[ModelsLexCreateBotVersionResponse](src/models/models-lex-create-bot-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createIntent(request: Bots.CreateIntentRequestParams, options?: RequestOptions): ApiPromise&lt;CreateIntentResponse, Bots.CreateIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type CreateIntentResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .createIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateIntentResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateIntentRequest](src/models/create-intent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createIntent(request)`

- **OnSuccess**: <code>[CreateIntentResponse](src/models/create-intent-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateIntentError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateIntentResponse, Bots.CreateIntentError&gt;</code>, with `result.value` of type <code>[CreateIntentResponse](src/models/create-intent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSlot(request: Bots.CreateSlotRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSlotResponse, Bots.CreateSlotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  });
  // TODO: Handle 'response' of type CreateSlotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateSlotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .createSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSlotResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateSlotRequest](src/models/create-slot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createSlot(request)`

- **OnSuccess**: <code>[CreateSlotResponse](src/models/create-slot-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateSlotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createSlot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSlotResponse, Bots.CreateSlotError&gt;</code>, with `result.value` of type <code>[CreateSlotResponse](src/models/create-slot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSlotType(request: Bots.CreateSlotTypeRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSlotTypeResponse, Bots.CreateSlotTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.createSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type CreateSlotTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.CreateSlotTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .createSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSlotTypeResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateSlotTypeRequest](src/models/create-slot-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.createSlotType(request)`

- **OnSuccess**: <code>[CreateSlotTypeResponse](src/models/create-slot-type-response.ts)</code>
- **OnError**: throws <code>[Bots.CreateSlotTypeError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.createSlotType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSlotTypeResponse, Bots.CreateSlotTypeError&gt;</code>, with `result.value` of type <code>[CreateSlotTypeResponse](src/models/create-slot-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBot(request: Bots.DeleteBotRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteBotResponse, Bots.DeleteBotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBot({ botId: "some example string" });
  // TODO: Handle 'response' of type DeleteBotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.deleteBot({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBotResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotRequest](src/models/delete-bot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBot(request)`

- **OnSuccess**: <code>[DeleteBotResponse](src/models/delete-bot-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteBotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBotResponse, Bots.DeleteBotError&gt;</code>, with `result.value` of type <code>[DeleteBotResponse](src/models/delete-bot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBot1(request: Bots.DeleteBot1Request, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteBot1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBot1({ name: "some example string" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBot1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.deleteBot1({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteBotRequest](src/models/models-lex-delete-bot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBot1(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteBot1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBot1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteBot1Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotAlias1(request: Bots.DeleteBotAlias1Request, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteBotAlias1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotAlias1({
    botName: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotAlias1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotAlias1({ botName: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botName</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteBotAliasRequest](src/models/models-lex-delete-bot-alias-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotAlias1(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteBotAlias1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotAlias1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteBotAlias1Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotAlias2(request: Bots.DeleteBotAlias2Request, options?: RequestOptions): ApiPromise&lt;DeleteBotAliasResponse, Bots.DeleteBotAlias2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified bot alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotAlias2({
    botId: "some example string",
    botAliasId: "some example string",
  });
  // TODO: Handle 'response' of type DeleteBotAliasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotAlias2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotAlias2({ botId: "some example string", botAliasId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBotAliasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotAliasRequest](src/models/delete-bot-alias-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotAlias2(request)`

- **OnSuccess**: <code>[DeleteBotAliasResponse](src/models/delete-bot-alias-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteBotAlias2Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotAlias2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBotAliasResponse, Bots.DeleteBotAlias2Error&gt;</code>, with `result.value` of type <code>[DeleteBotAliasResponse](src/models/delete-bot-alias-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotAnalyzerRecommendation(request: Bots.DeleteBotAnalyzerRecommendationRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Bots.DeleteBotAnalyzerRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a ResourceNotFoundException.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotAnalyzerRecommendation({
    botId: "some example string",
    botAnalyzerRequestId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotAnalyzerRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotAnalyzerRecommendation({
    botId: "some example string",
    botAnalyzerRequestId: "some example string",
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAnalyzerRequestId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotAnalyzerRecommendationRequest](src/models/delete-bot-analyzer-recommendation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotAnalyzerRecommendation(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Bots.DeleteBotAnalyzerRecommendationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotAnalyzerRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Bots.DeleteBotAnalyzerRecommendationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotLocale(request: Bots.DeleteBotLocaleRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteBotLocaleResponse, Bots.DeleteBotLocaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type DeleteBotLocaleResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotLocaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBotLocaleResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotLocaleRequest](src/models/delete-bot-locale-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotLocale(request)`

- **OnSuccess**: <code>[DeleteBotLocaleResponse](src/models/delete-bot-locale-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteBotLocaleError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotLocale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBotLocaleResponse, Bots.DeleteBotLocaleError&gt;</code>, with `result.value` of type <code>[DeleteBotLocaleResponse](src/models/delete-bot-locale-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotReplica(request: Bots.DeleteBotReplicaRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteBotReplicaResponse, Bots.DeleteBotReplicaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to delete the replicated bot in the secondary region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotReplica({
    botId: "some example string",
    replicaRegion: "some example string",
  });
  // TODO: Handle 'response' of type DeleteBotReplicaResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotReplicaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotReplica({ botId: "some example string", replicaRegion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBotReplicaResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>replicaRegion</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotReplicaRequest](src/models/delete-bot-replica-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotReplica(request)`

- **OnSuccess**: <code>[DeleteBotReplicaResponse](src/models/delete-bot-replica-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteBotReplicaError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotReplica(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBotReplicaResponse, Bots.DeleteBotReplicaError&gt;</code>, with `result.value` of type <code>[DeleteBotReplicaResponse](src/models/delete-bot-replica-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotVersion(request: Bots.DeleteBotVersionRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteBotVersionResponse, Bots.DeleteBotVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotVersion({
    botId: "some example string",
    botVersion: "some example string",
  });
  // TODO: Handle 'response' of type DeleteBotVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotVersion({ botId: "some example string", botVersion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBotVersionResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotVersionRequest](src/models/delete-bot-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotVersion(request)`

- **OnSuccess**: <code>[DeleteBotVersionResponse](src/models/delete-bot-version-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteBotVersionError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBotVersionResponse, Bots.DeleteBotVersionError&gt;</code>, with `result.value` of type <code>[DeleteBotVersionResponse](src/models/delete-bot-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotVersion1(request: Bots.DeleteBotVersion1Request, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteBotVersion1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteBotVersion1({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteBotVersion1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteBotVersion1({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteBotVersionRequest](src/models/models-lex-delete-bot-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteBotVersion1(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteBotVersion1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteBotVersion1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteBotVersion1Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomVocabulary(request: Bots.DeleteCustomVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteCustomVocabularyResponse, Bots.DeleteCustomVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom vocabulary from the specified locale in the specified bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteCustomVocabulary({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type DeleteCustomVocabularyResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteCustomVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteCustomVocabulary({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCustomVocabularyResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteCustomVocabularyRequest](src/models/delete-custom-vocabulary-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteCustomVocabulary(request)`

- **OnSuccess**: <code>[DeleteCustomVocabularyResponse](src/models/delete-custom-vocabulary-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteCustomVocabularyError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteCustomVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCustomVocabularyResponse, Bots.DeleteCustomVocabularyError&gt;</code>, with `result.value` of type <code>[DeleteCustomVocabularyResponse](src/models/delete-custom-vocabulary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteIntent(request: Bots.DeleteIntentRequestParams, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteIntentRequest](src/models/delete-intent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteIntent(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteIntentError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteIntentError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteIntent1(request: Bots.DeleteIntent1Request, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteIntent1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first. If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful. This operation requires permission for the lex:DeleteIntent action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteIntent1({ name: "some example string" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteIntent1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.deleteIntent1({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteIntentRequest](src/models/models-lex-delete-intent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteIntent1(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteIntent1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteIntent1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteIntent1Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSession(request: Bots.DeleteSessionRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteSessionResponse, Bots.DeleteSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteSession({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type DeleteSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteSession({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteSessionResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>sessionId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteSessionRequest](src/models/delete-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteSession(request)`

- **OnSuccess**: <code>[DeleteSessionResponse](src/models/delete-session-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteSessionError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteSessionResponse, Bots.DeleteSessionError&gt;</code>, with `result.value` of type <code>[DeleteSessionResponse](src/models/delete-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSession1(request: Bots.DeleteSession1Request, options?: RequestOptions): ApiPromise&lt;RuntimeLexDeleteSessionResponse, Bots.DeleteSession1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes session information for a specified bot, alias, and user ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteSession1({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type RuntimeLexDeleteSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteSession1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteSession1({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RuntimeLexDeleteSessionResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RuntimeLexDeleteSessionRequest](src/models/runtime-lex-delete-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteSession1(request)`

- **OnSuccess**: <code>[RuntimeLexDeleteSessionResponse](src/models/runtime-lex-delete-session-response.ts)</code>
- **OnError**: throws <code>[Bots.DeleteSession1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteSession1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RuntimeLexDeleteSessionResponse, Bots.DeleteSession1Error&gt;</code>, with `result.value` of type <code>[RuntimeLexDeleteSessionResponse](src/models/runtime-lex-delete-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSlot(request: Bots.DeleteSlotRequestParams, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteSlotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified slot from an intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
    slotId: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteSlotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
    slotId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>slotId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteSlotRequest](src/models/delete-slot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteSlot(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteSlotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteSlot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteSlotError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSlotType(request: Bots.DeleteSlotTypeRequestParams, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteSlotTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    slotTypeId: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteSlotTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    slotTypeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>slotTypeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteSlotTypeRequest](src/models/delete-slot-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteSlotType(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteSlotTypeError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteSlotType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteSlotTypeError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSlotType1(request: Bots.DeleteSlotType1Request, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteSlotType1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful. This operation requires permission for the lex:DeleteSlotType action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteSlotType1({ name: "some example string" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteSlotType1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.deleteSlotType1({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteSlotTypeRequest](src/models/models-lex-delete-slot-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteSlotType1(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteSlotType1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteSlotType1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteSlotType1Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUtterances(request: Bots.DeleteUtterancesRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Bots.DeleteUtterancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteUtterances({ botId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteUtterancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.deleteUtterances({ botId: "some example string" }).asApiResult();
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteUtterancesRequest](src/models/delete-utterances-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteUtterances(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Bots.DeleteUtterancesError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteUtterances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Bots.DeleteUtterancesError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUtterances1(request: Bots.DeleteUtterances1Request, options?: RequestOptions): ApiPromise&lt;string, Bots.DeleteUtterances1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the lex:DeleteUtterances action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.deleteUtterances1({
    botName: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Bots.DeleteUtterances1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .deleteUtterances1({ botName: "some example string", userId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botName</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteUtterancesRequest](src/models/models-lex-delete-utterances-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.deleteUtterances1(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Bots.DeleteUtterances1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.deleteUtterances1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Bots.DeleteUtterances1Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBot(request: Bots.DescribeBotRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotResponse, Bots.DescribeBotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBot({ botId: "some example string" });
  // TODO: Handle 'response' of type DescribeBotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.describeBot({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotResponse
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
| <code>botId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBot(request)`

- **OnSuccess**: <code>[DescribeBotResponse](src/models/describe-bot-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotResponse, Bots.DescribeBotError&gt;</code>, with `result.value` of type <code>[DescribeBotResponse](src/models/describe-bot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotAlias(request: Bots.DescribeBotAliasRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotAliasResponse, Bots.DescribeBotAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific bot alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotAlias({
    botId: "some example string",
    botAliasId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotAliasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotAlias({ botId: "some example string", botAliasId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotAliasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotAlias(request)`

- **OnSuccess**: <code>[DescribeBotAliasResponse](src/models/describe-bot-alias-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotAliasError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotAliasResponse, Bots.DescribeBotAliasError&gt;</code>, with `result.value` of type <code>[DescribeBotAliasResponse](src/models/describe-bot-alias-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotAnalyzerRecommendation(request: Bots.DescribeBotAnalyzerRecommendationRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotAnalyzerRecommendationResponse, Bots.DescribeBotAnalyzerRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available status before recommendations can be retrieved. Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotAnalyzerRecommendation({
    botId: "some example string",
    botAnalyzerRequestId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotAnalyzerRecommendationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotAnalyzerRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotAnalyzerRecommendation({
    botId: "some example string",
    botAnalyzerRequestId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotAnalyzerRecommendationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAnalyzerRequestId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DescribeBotAnalyzerRecommendationRequest](src/models/describe-bot-analyzer-recommendation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotAnalyzerRecommendation(request)`

- **OnSuccess**: <code>[DescribeBotAnalyzerRecommendationResponse](src/models/describe-bot-analyzer-recommendation-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotAnalyzerRecommendationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotAnalyzerRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotAnalyzerRecommendationResponse, Bots.DescribeBotAnalyzerRecommendationError&gt;</code>, with `result.value` of type <code>[DescribeBotAnalyzerRecommendationResponse](src/models/describe-bot-analyzer-recommendation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotLocale(request: Bots.DescribeBotLocaleRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotLocaleResponse, Bots.DescribeBotLocaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the settings that a bot has for a specific locale.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotLocaleResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotLocaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotLocaleResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotLocale(request)`

- **OnSuccess**: <code>[DescribeBotLocaleResponse](src/models/describe-bot-locale-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotLocaleError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotLocale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotLocaleResponse, Bots.DescribeBotLocaleError&gt;</code>, with `result.value` of type <code>[DescribeBotLocaleResponse](src/models/describe-bot-locale-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotRecommendation(request: Bots.DescribeBotRecommendationRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotRecommendationResponse, Bots.DescribeBotRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotRecommendationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotRecommendationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>botRecommendationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotRecommendation(request)`

- **OnSuccess**: <code>[DescribeBotRecommendationResponse](src/models/describe-bot-recommendation-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotRecommendationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotRecommendationResponse, Bots.DescribeBotRecommendationError&gt;</code>, with `result.value` of type <code>[DescribeBotRecommendationResponse](src/models/describe-bot-recommendation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotReplica(request: Bots.DescribeBotReplicaRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotReplicaResponse, Bots.DescribeBotReplicaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Monitors the bot replication status through the UI console.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotReplica({
    botId: "some example string",
    replicaRegion: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotReplicaResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotReplicaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotReplica({ botId: "some example string", replicaRegion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotReplicaResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>replicaRegion</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotReplica(request)`

- **OnSuccess**: <code>[DescribeBotReplicaResponse](src/models/describe-bot-replica-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotReplicaError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotReplica(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotReplicaResponse, Bots.DescribeBotReplicaError&gt;</code>, with `result.value` of type <code>[DescribeBotReplicaResponse](src/models/describe-bot-replica-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotResourceGeneration(request: Bots.DescribeBotResourceGenerationRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotResourceGenerationResponse, Bots.DescribeBotResourceGenerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotResourceGeneration({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    generationId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotResourceGenerationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotResourceGenerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotResourceGeneration({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    generationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotResourceGenerationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>generationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotResourceGeneration(request)`

- **OnSuccess**: <code>[DescribeBotResourceGenerationResponse](src/models/describe-bot-resource-generation-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotResourceGenerationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotResourceGeneration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotResourceGenerationResponse, Bots.DescribeBotResourceGenerationError&gt;</code>, with `result.value` of type <code>[DescribeBotResourceGenerationResponse](src/models/describe-bot-resource-generation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBotVersion(request: Bots.DescribeBotVersionRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeBotVersionResponse, Bots.DescribeBotVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata about a version of a bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeBotVersion({
    botId: "some example string",
    botVersion: "some example string",
  });
  // TODO: Handle 'response' of type DescribeBotVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeBotVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeBotVersion({ botId: "some example string", botVersion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeBotVersionResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeBotVersion(request)`

- **OnSuccess**: <code>[DescribeBotVersionResponse](src/models/describe-bot-version-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeBotVersionError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeBotVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeBotVersionResponse, Bots.DescribeBotVersionError&gt;</code>, with `result.value` of type <code>[DescribeBotVersionResponse](src/models/describe-bot-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCustomVocabularyMetadata(request: Bots.DescribeCustomVocabularyMetadataRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeCustomVocabularyMetadataResponse, Bots.DescribeCustomVocabularyMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a custom vocabulary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeCustomVocabularyMetadata({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeCustomVocabularyMetadataResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeCustomVocabularyMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeCustomVocabularyMetadata({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeCustomVocabularyMetadataResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeCustomVocabularyMetadata(request)`

- **OnSuccess**: <code>[DescribeCustomVocabularyMetadataResponse](src/models/describe-custom-vocabulary-metadata-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeCustomVocabularyMetadataError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeCustomVocabularyMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeCustomVocabularyMetadataResponse, Bots.DescribeCustomVocabularyMetadataError&gt;</code>, with `result.value` of type <code>[DescribeCustomVocabularyMetadataResponse](src/models/describe-custom-vocabulary-metadata-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeIntent(request: Bots.DescribeIntentRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeIntentResponse, Bots.DescribeIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about an intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeIntentResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeIntentResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeIntent(request)`

- **OnSuccess**: <code>[DescribeIntentResponse](src/models/describe-intent-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeIntentError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeIntentResponse, Bots.DescribeIntentError&gt;</code>, with `result.value` of type <code>[DescribeIntentResponse](src/models/describe-intent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSlot(request: Bots.DescribeSlotRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeSlotResponse, Bots.DescribeSlotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about a slot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
    slotId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeSlotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeSlotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
    slotId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeSlotResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>slotId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeSlot(request)`

- **OnSuccess**: <code>[DescribeSlotResponse](src/models/describe-slot-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeSlotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeSlot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeSlotResponse, Bots.DescribeSlotError&gt;</code>, with `result.value` of type <code>[DescribeSlotResponse](src/models/describe-slot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSlotType(request: Bots.DescribeSlotTypeRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeSlotTypeResponse, Bots.DescribeSlotTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about a slot type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.describeSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    slotTypeId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeSlotTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.DescribeSlotTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .describeSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    slotTypeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeSlotTypeResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>slotTypeId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.describeSlotType(request)`

- **OnSuccess**: <code>[DescribeSlotTypeResponse](src/models/describe-slot-type-response.ts)</code>
- **OnError**: throws <code>[Bots.DescribeSlotTypeError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.describeSlotType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeSlotTypeResponse, Bots.DescribeSlotTypeError&gt;</code>, with `result.value` of type <code>[DescribeSlotTypeResponse](src/models/describe-slot-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateBotElement(request: Bots.GenerateBotElementRequestParams, options?: RequestOptions): ApiPromise&lt;GenerateBotElementResponse, Bots.GenerateBotElementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates sample utterances for an intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.generateBotElement({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type GenerateBotElementResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.GenerateBotElementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .generateBotElement({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateBotElementResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[GenerateBotElementRequest](src/models/generate-bot-element-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.generateBotElement(request)`

- **OnSuccess**: <code>[GenerateBotElementResponse](src/models/generate-bot-element-response.ts)</code>
- **OnError**: throws <code>[Bots.GenerateBotElementError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.generateBotElement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateBotElementResponse, Bots.GenerateBotElementError&gt;</code>, with `result.value` of type <code>[GenerateBotElementResponse](src/models/generate-bot-element-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBots(options?: RequestOptions): ApiPromise&lt;GetBotsResponse, Bots.GetBotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns bot information as follows: If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string. If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.getBots();
  // TODO: Handle 'response' of type GetBotsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.GetBotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.getBots().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.getBots()`

- **OnSuccess**: <code>[GetBotsResponse](src/models/get-bots-response.ts)</code>
- **OnError**: throws <code>[Bots.GetBotsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.getBots().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotsResponse, Bots.GetBotsError&gt;</code>, with `result.value` of type <code>[GetBotsResponse](src/models/get-bots-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSession(request: Bots.GetSessionRequestParams, options?: RequestOptions): ApiPromise&lt;GetSessionResponse, Bots.GetSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.getSession({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type GetSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.GetSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .getSession({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSessionResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.getSession(request)`

- **OnSuccess**: <code>[GetSessionResponse](src/models/get-session-response.ts)</code>
- **OnError**: throws <code>[Bots.GetSessionError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.getSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSessionResponse, Bots.GetSessionError&gt;</code>, with `result.value` of type <code>[GetSessionResponse](src/models/get-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSession1(request: Bots.GetSession1Request, options?: RequestOptions): ApiPromise&lt;RuntimeLexGetSessionResponse, Bots.GetSession1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns session information for a specified bot, alias, and user ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.getSession1({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type RuntimeLexGetSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.GetSession1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .getSession1({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RuntimeLexGetSessionResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.getSession1(request)`

- **OnSuccess**: <code>[RuntimeLexGetSessionResponse](src/models/runtime-lex-get-session-response.ts)</code>
- **OnError**: throws <code>[Bots.GetSession1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.getSession1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RuntimeLexGetSessionResponse, Bots.GetSession1Error&gt;</code>, with `result.value` of type <code>[RuntimeLexGetSessionResponse](src/models/runtime-lex-get-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAggregatedUtterances(request: Bots.ListAggregatedUtterancesRequestParams, options?: RequestOptions): ApiPromise&lt;ListAggregatedUtterancesResponse, Bots.ListAggregatedUtterancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions: The childDirected field was set to true when the bot was created. You are using slot obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listAggregatedUtterances({ botId: "some example string" });
  // TODO: Handle 'response' of type ListAggregatedUtterancesResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListAggregatedUtterancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listAggregatedUtterances({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAggregatedUtterancesResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListAggregatedUtterancesRequest](src/models/list-aggregated-utterances-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listAggregatedUtterances(request)`

- **OnSuccess**: <code>[ListAggregatedUtterancesResponse](src/models/list-aggregated-utterances-response.ts)</code>
- **OnError**: throws <code>[Bots.ListAggregatedUtterancesError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listAggregatedUtterances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAggregatedUtterancesResponse, Bots.ListAggregatedUtterancesError&gt;</code>, with `result.value` of type <code>[ListAggregatedUtterancesResponse](src/models/list-aggregated-utterances-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotAliasReplicas(request: Bots.ListBotAliasReplicasRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotAliasReplicasResponse, Bots.ListBotAliasReplicasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to list the replicated bots created from the source bot alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotAliasReplicas({
    botId: "some example string",
    replicaRegion: "some example string",
  });
  // TODO: Handle 'response' of type ListBotAliasReplicasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotAliasReplicasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listBotAliasReplicas({ botId: "some example string", replicaRegion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotAliasReplicasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>replicaRegion</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotAliasReplicasRequest](src/models/list-bot-alias-replicas-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotAliasReplicas(request)`

- **OnSuccess**: <code>[ListBotAliasReplicasResponse](src/models/list-bot-alias-replicas-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotAliasReplicasError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotAliasReplicas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotAliasReplicasResponse, Bots.ListBotAliasReplicasError&gt;</code>, with `result.value` of type <code>[ListBotAliasReplicasResponse](src/models/list-bot-alias-replicas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotAliases(request: Bots.ListBotAliasesRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotAliasesResponse, Bots.ListBotAliasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of aliases for the specified bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotAliases({ botId: "some example string" });
  // TODO: Handle 'response' of type ListBotAliasesResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotAliasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listBotAliases({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotAliasesResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotAliasesRequest](src/models/list-bot-aliases-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotAliases(request)`

- **OnSuccess**: <code>[ListBotAliasesResponse](src/models/list-bot-aliases-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotAliasesError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotAliases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotAliasesResponse, Bots.ListBotAliasesError&gt;</code>, with `result.value` of type <code>[ListBotAliasesResponse](src/models/list-bot-aliases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotAnalyzerHistory(request: Bots.ListBotAnalyzerHistoryRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotAnalyzerHistoryResponse, Bots.ListBotAnalyzerHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by locale and bot version. The history includes all analysis executions regardless of their status, allowing you to track past analyses and their outcomes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotAnalyzerHistory({ botId: "some example string" });
  // TODO: Handle 'response' of type ListBotAnalyzerHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotAnalyzerHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listBotAnalyzerHistory({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotAnalyzerHistoryResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotAnalyzerHistoryRequest](src/models/list-bot-analyzer-history-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotAnalyzerHistory(request)`

- **OnSuccess**: <code>[ListBotAnalyzerHistoryResponse](src/models/list-bot-analyzer-history-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotAnalyzerHistoryError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotAnalyzerHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotAnalyzerHistoryResponse, Bots.ListBotAnalyzerHistoryError&gt;</code>, with `result.value` of type <code>[ListBotAnalyzerHistoryResponse](src/models/list-bot-analyzer-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotLocales(request: Bots.ListBotLocalesRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotLocalesResponse, Bots.ListBotLocalesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of locales for the specified bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotLocales({
    botId: "some example string",
    botVersion: "some example string",
  });
  // TODO: Handle 'response' of type ListBotLocalesResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotLocalesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listBotLocales({ botId: "some example string", botVersion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotLocalesResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotLocalesRequest](src/models/list-bot-locales-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotLocales(request)`

- **OnSuccess**: <code>[ListBotLocalesResponse](src/models/list-bot-locales-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotLocalesError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotLocales(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotLocalesResponse, Bots.ListBotLocalesError&gt;</code>, with `result.value` of type <code>[ListBotLocalesResponse](src/models/list-bot-locales-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotRecommendations(request: Bots.ListBotRecommendationsRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotRecommendationsResponse, Bots.ListBotRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bot recommendations that meet the specified criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotRecommendations({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type ListBotRecommendationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listBotRecommendations({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotRecommendationsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotRecommendationsRequest](src/models/list-bot-recommendations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotRecommendations(request)`

- **OnSuccess**: <code>[ListBotRecommendationsResponse](src/models/list-bot-recommendations-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotRecommendationsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotRecommendationsResponse, Bots.ListBotRecommendationsError&gt;</code>, with `result.value` of type <code>[ListBotRecommendationsResponse](src/models/list-bot-recommendations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotReplicas(request: Bots.ListBotReplicasRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotReplicasResponse, Bots.ListBotReplicasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to list the replicated bots.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotReplicas({ botId: "some example string" });
  // TODO: Handle 'response' of type ListBotReplicasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotReplicasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listBotReplicas({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotReplicasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotReplicasRequest](src/models/list-bot-replicas-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotReplicas(request)`

- **OnSuccess**: <code>[ListBotReplicasResponse](src/models/list-bot-replicas-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotReplicasError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotReplicas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotReplicasResponse, Bots.ListBotReplicasError&gt;</code>, with `result.value` of type <code>[ListBotReplicasResponse](src/models/list-bot-replicas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotResourceGenerations(request: Bots.ListBotResourceGenerationsRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotResourceGenerationsResponse, Bots.ListBotResourceGenerationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the generation requests made for a bot locale.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotResourceGenerations({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type ListBotResourceGenerationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotResourceGenerationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listBotResourceGenerations({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotResourceGenerationsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotResourceGenerationsRequest](src/models/list-bot-resource-generations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotResourceGenerations(request)`

- **OnSuccess**: <code>[ListBotResourceGenerationsResponse](src/models/list-bot-resource-generations-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotResourceGenerationsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotResourceGenerations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotResourceGenerationsResponse, Bots.ListBotResourceGenerationsError&gt;</code>, with `result.value` of type <code>[ListBotResourceGenerationsResponse](src/models/list-bot-resource-generations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotVersionReplicas(request: Bots.ListBotVersionReplicasRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotVersionReplicasResponse, Bots.ListBotVersionReplicasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Contains information about all the versions replication statuses applicable for Global Resiliency.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotVersionReplicas({
    botId: "some example string",
    replicaRegion: "some example string",
  });
  // TODO: Handle 'response' of type ListBotVersionReplicasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotVersionReplicasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listBotVersionReplicas({ botId: "some example string", replicaRegion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotVersionReplicasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>replicaRegion</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotVersionReplicasRequest](src/models/list-bot-version-replicas-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotVersionReplicas(request)`

- **OnSuccess**: <code>[ListBotVersionReplicasResponse](src/models/list-bot-version-replicas-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotVersionReplicasError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotVersionReplicas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotVersionReplicasResponse, Bots.ListBotVersionReplicasError&gt;</code>, with `result.value` of type <code>[ListBotVersionReplicasResponse](src/models/list-bot-version-replicas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBotVersions(request: Bots.ListBotVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotVersionsResponse, Bots.ListBotVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBotVersions({ botId: "some example string" });
  // TODO: Handle 'response' of type ListBotVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listBotVersions({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotVersionsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBotVersionsRequest](src/models/list-bot-versions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBotVersions(request)`

- **OnSuccess**: <code>[ListBotVersionsResponse](src/models/list-bot-versions-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotVersionsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBotVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotVersionsResponse, Bots.ListBotVersionsError&gt;</code>, with `result.value` of type <code>[ListBotVersionsResponse](src/models/list-bot-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBots(request?: Bots.ListBotsRequestParams, options?: RequestOptions): ApiPromise&lt;ListBotsResponse, Bots.ListBotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of available bots.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listBots();
  // TODO: Handle 'response' of type ListBotsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListBotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listBots().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBotsResponse
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
| <code>body?</code> | <code>[ListBotsRequest](src/models/list-bots-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listBots(request)`

- **OnSuccess**: <code>[ListBotsResponse](src/models/list-bots-response.ts)</code>
- **OnError**: throws <code>[Bots.ListBotsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listBots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBotsResponse, Bots.ListBotsError&gt;</code>, with `result.value` of type <code>[ListBotsResponse](src/models/list-bots-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomVocabularyItems(request: Bots.ListCustomVocabularyItemsRequestParams, options?: RequestOptions): ApiPromise&lt;ListCustomVocabularyItemsResponse, Bots.ListCustomVocabularyItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listCustomVocabularyItems({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type ListCustomVocabularyItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListCustomVocabularyItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listCustomVocabularyItems({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomVocabularyItemsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListCustomVocabularyItemsRequest](src/models/list-custom-vocabulary-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listCustomVocabularyItems(request)`

- **OnSuccess**: <code>[ListCustomVocabularyItemsResponse](src/models/list-custom-vocabulary-items-response.ts)</code>
- **OnError**: throws <code>[Bots.ListCustomVocabularyItemsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listCustomVocabularyItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomVocabularyItemsResponse, Bots.ListCustomVocabularyItemsError&gt;</code>, with `result.value` of type <code>[ListCustomVocabularyItemsResponse](src/models/list-custom-vocabulary-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIntentMetrics(request: Bots.ListIntentMetricsRequestParams, options?: RequestOptions): ApiPromise&lt;ListIntentMetricsResponse, Bots.ListIntentMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can specify only one order in a given request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listIntentMetrics({ botId: "some example string" });
  // TODO: Handle 'response' of type ListIntentMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListIntentMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listIntentMetrics({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListIntentMetricsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListIntentMetricsRequest](src/models/list-intent-metrics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listIntentMetrics(request)`

- **OnSuccess**: <code>[ListIntentMetricsResponse](src/models/list-intent-metrics-response.ts)</code>
- **OnError**: throws <code>[Bots.ListIntentMetricsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listIntentMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListIntentMetricsResponse, Bots.ListIntentMetricsError&gt;</code>, with `result.value` of type <code>[ListIntentMetricsResponse](src/models/list-intent-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIntentPaths(request: Bots.ListIntentPathsRequestParams, options?: RequestOptions): ApiPromise&lt;ListIntentPathsResponse, Bots.ListIntentPathsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to filter the results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listIntentPaths({ botId: "some example string" });
  // TODO: Handle 'response' of type ListIntentPathsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListIntentPathsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listIntentPaths({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListIntentPathsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListIntentPathsRequest](src/models/list-intent-paths-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listIntentPaths(request)`

- **OnSuccess**: <code>[ListIntentPathsResponse](src/models/list-intent-paths-response.ts)</code>
- **OnError**: throws <code>[Bots.ListIntentPathsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listIntentPaths(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListIntentPathsResponse, Bots.ListIntentPathsError&gt;</code>, with `result.value` of type <code>[ListIntentPathsResponse](src/models/list-intent-paths-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIntentStageMetrics(request: Bots.ListIntentStageMetricsRequestParams, options?: RequestOptions): ApiPromise&lt;ListIntentStageMetricsResponse, Bots.ListIntentStageMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the stages within intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can only specify one order in a given request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listIntentStageMetrics({ botId: "some example string" });
  // TODO: Handle 'response' of type ListIntentStageMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListIntentStageMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listIntentStageMetrics({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListIntentStageMetricsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListIntentStageMetricsRequest](src/models/list-intent-stage-metrics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listIntentStageMetrics(request)`

- **OnSuccess**: <code>[ListIntentStageMetricsResponse](src/models/list-intent-stage-metrics-response.ts)</code>
- **OnError**: throws <code>[Bots.ListIntentStageMetricsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listIntentStageMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListIntentStageMetricsResponse, Bots.ListIntentStageMetricsError&gt;</code>, with `result.value` of type <code>[ListIntentStageMetricsResponse](src/models/list-intent-stage-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIntents(request: Bots.ListIntentsRequestParams, options?: RequestOptions): ApiPromise&lt;ListIntentsResponse, Bots.ListIntentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of intents that meet the specified criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listIntents({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type ListIntentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListIntentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listIntents({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListIntentsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListIntentsRequest](src/models/list-intents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listIntents(request)`

- **OnSuccess**: <code>[ListIntentsResponse](src/models/list-intents-response.ts)</code>
- **OnError**: throws <code>[Bots.ListIntentsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listIntents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListIntentsResponse, Bots.ListIntentsError&gt;</code>, with `result.value` of type <code>[ListIntentsResponse](src/models/list-intents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecommendedIntents(request: Bots.ListRecommendedIntentsRequestParams, options?: RequestOptions): ApiPromise&lt;ListRecommendedIntentsResponse, Bots.ListRecommendedIntentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listRecommendedIntents({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  });
  // TODO: Handle 'response' of type ListRecommendedIntentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListRecommendedIntentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listRecommendedIntents({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListRecommendedIntentsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>botRecommendationId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListRecommendedIntentsRequest](src/models/list-recommended-intents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listRecommendedIntents(request)`

- **OnSuccess**: <code>[ListRecommendedIntentsResponse](src/models/list-recommended-intents-response.ts)</code>
- **OnError**: throws <code>[Bots.ListRecommendedIntentsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listRecommendedIntents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListRecommendedIntentsResponse, Bots.ListRecommendedIntentsError&gt;</code>, with `result.value` of type <code>[ListRecommendedIntentsResponse](src/models/list-recommended-intents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSessionAnalyticsData(request: Bots.ListSessionAnalyticsDataRequestParams, options?: RequestOptions): ApiPromise&lt;ListSessionAnalyticsDataResponse, Bots.ListSessionAnalyticsDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listSessionAnalyticsData({ botId: "some example string" });
  // TODO: Handle 'response' of type ListSessionAnalyticsDataResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListSessionAnalyticsDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listSessionAnalyticsData({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSessionAnalyticsDataResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListSessionAnalyticsDataRequest](src/models/list-session-analytics-data-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listSessionAnalyticsData(request)`

- **OnSuccess**: <code>[ListSessionAnalyticsDataResponse](src/models/list-session-analytics-data-response.ts)</code>
- **OnError**: throws <code>[Bots.ListSessionAnalyticsDataError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listSessionAnalyticsData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSessionAnalyticsDataResponse, Bots.ListSessionAnalyticsDataError&gt;</code>, with `result.value` of type <code>[ListSessionAnalyticsDataResponse](src/models/list-session-analytics-data-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSessionMetrics(request: Bots.ListSessionMetricsRequestParams, options?: RequestOptions): ApiPromise&lt;ListSessionMetricsResponse, Bots.ListSessionMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listSessionMetrics({ botId: "some example string" });
  // TODO: Handle 'response' of type ListSessionMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListSessionMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listSessionMetrics({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSessionMetricsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListSessionMetricsRequest](src/models/list-session-metrics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listSessionMetrics(request)`

- **OnSuccess**: <code>[ListSessionMetricsResponse](src/models/list-session-metrics-response.ts)</code>
- **OnError**: throws <code>[Bots.ListSessionMetricsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listSessionMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSessionMetricsResponse, Bots.ListSessionMetricsError&gt;</code>, with `result.value` of type <code>[ListSessionMetricsResponse](src/models/list-session-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSlotTypes(request: Bots.ListSlotTypesRequestParams, options?: RequestOptions): ApiPromise&lt;ListSlotTypesResponse, Bots.ListSlotTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of slot types that match the specified criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listSlotTypes({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type ListSlotTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListSlotTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listSlotTypes({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSlotTypesResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListSlotTypesRequest](src/models/list-slot-types-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listSlotTypes(request)`

- **OnSuccess**: <code>[ListSlotTypesResponse](src/models/list-slot-types-response.ts)</code>
- **OnError**: throws <code>[Bots.ListSlotTypesError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listSlotTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSlotTypesResponse, Bots.ListSlotTypesError&gt;</code>, with `result.value` of type <code>[ListSlotTypesResponse](src/models/list-slot-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSlots(request: Bots.ListSlotsRequestParams, options?: RequestOptions): ApiPromise&lt;ListSlotsResponse, Bots.ListSlotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of slots that match the specified criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listSlots({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  });
  // TODO: Handle 'response' of type ListSlotsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListSlotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .listSlots({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSlotsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListSlotsRequest](src/models/list-slots-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listSlots(request)`

- **OnSuccess**: <code>[ListSlotsResponse](src/models/list-slots-response.ts)</code>
- **OnError**: throws <code>[Bots.ListSlotsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listSlots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSlotsResponse, Bots.ListSlotsError&gt;</code>, with `result.value` of type <code>[ListSlotsResponse](src/models/list-slots-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUtteranceAnalyticsData(request: Bots.ListUtteranceAnalyticsDataRequestParams, options?: RequestOptions): ApiPromise&lt;ListUtteranceAnalyticsDataResponse, Bots.ListUtteranceAnalyticsDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listUtteranceAnalyticsData({ botId: "some example string" });
  // TODO: Handle 'response' of type ListUtteranceAnalyticsDataResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListUtteranceAnalyticsDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listUtteranceAnalyticsData({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListUtteranceAnalyticsDataResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListUtteranceAnalyticsDataRequest](src/models/list-utterance-analytics-data-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listUtteranceAnalyticsData(request)`

- **OnSuccess**: <code>[ListUtteranceAnalyticsDataResponse](src/models/list-utterance-analytics-data-response.ts)</code>
- **OnError**: throws <code>[Bots.ListUtteranceAnalyticsDataError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listUtteranceAnalyticsData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListUtteranceAnalyticsDataResponse, Bots.ListUtteranceAnalyticsDataError&gt;</code>, with `result.value` of type <code>[ListUtteranceAnalyticsDataResponse](src/models/list-utterance-analytics-data-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUtteranceMetrics(request: Bots.ListUtteranceMetricsRequestParams, options?: RequestOptions): ApiPromise&lt;ListUtteranceMetricsResponse, Bots.ListUtteranceMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of re

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.listUtteranceMetrics({ botId: "some example string" });
  // TODO: Handle 'response' of type ListUtteranceMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.ListUtteranceMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.listUtteranceMetrics({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListUtteranceMetricsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListUtteranceMetricsRequest](src/models/list-utterance-metrics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.listUtteranceMetrics(request)`

- **OnSuccess**: <code>[ListUtteranceMetricsResponse](src/models/list-utterance-metrics-response.ts)</code>
- **OnError**: throws <code>[Bots.ListUtteranceMetricsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.listUtteranceMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListUtteranceMetricsResponse, Bots.ListUtteranceMetricsError&gt;</code>, with `result.value` of type <code>[ListUtteranceMetricsResponse](src/models/list-utterance-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putSession(request: Bots.PutSessionRequestParams, options?: RequestOptions): ApiPromise&lt;PutSessionResponse, Bots.PutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.putSession({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type PutSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.PutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .putSession({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutSessionResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>sessionId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PutSessionRequest](src/models/put-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.putSession(request)`

- **OnSuccess**: <code>[PutSessionResponse](src/models/put-session-response.ts)</code>
- **OnError**: throws <code>[Bots.PutSessionError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.putSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutSessionResponse, Bots.PutSessionError&gt;</code>, with `result.value` of type <code>[PutSessionResponse](src/models/put-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putSession1(request: Bots.PutSession1Request, options?: RequestOptions): ApiPromise&lt;RuntimeLexPutSessionResponse, Bots.PutSession1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot. For more information, see Managing Sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.putSession1({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type RuntimeLexPutSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.PutSession1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .putSession1({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RuntimeLexPutSessionResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RuntimeLexPutSessionRequest](src/models/runtime-lex-put-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.putSession1(request)`

- **OnSuccess**: <code>[RuntimeLexPutSessionResponse](src/models/runtime-lex-put-session-response.ts)</code>
- **OnError**: throws <code>[Bots.PutSession1Error](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.putSession1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RuntimeLexPutSessionResponse, Bots.PutSession1Error&gt;</code>, with `result.value` of type <code>[RuntimeLexPutSessionResponse](src/models/runtime-lex-put-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recognizeText(request: Bots.RecognizeTextRequestParams, options?: RequestOptions): ApiPromise&lt;RecognizeTextResponse, Bots.RecognizeTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.recognizeText({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type RecognizeTextResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.RecognizeTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .recognizeText({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecognizeTextResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>sessionId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RecognizeTextRequest](src/models/recognize-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.recognizeText(request)`

- **OnSuccess**: <code>[RecognizeTextResponse](src/models/recognize-text-response.ts)</code>
- **OnError**: throws <code>[Bots.RecognizeTextError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.recognizeText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecognizeTextResponse, Bots.RecognizeTextError&gt;</code>, with `result.value` of type <code>[RecognizeTextResponse](src/models/recognize-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recognizeUtterance(request: Bots.RecognizeUtteranceRequestParams, options?: RequestOptions): ApiPromise&lt;RecognizeUtteranceResponse, Bots.RecognizeUtteranceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.recognizeUtterance({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type RecognizeUtteranceResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.RecognizeUtteranceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .recognizeUtterance({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecognizeUtteranceResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>sessionId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RecognizeUtteranceRequest](src/models/recognize-utterance-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.recognizeUtterance(request)`

- **OnSuccess**: <code>[RecognizeUtteranceResponse](src/models/recognize-utterance-response.ts)</code>
- **OnError**: throws <code>[Bots.RecognizeUtteranceError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.recognizeUtterance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecognizeUtteranceResponse, Bots.RecognizeUtteranceError&gt;</code>, with `result.value` of type <code>[RecognizeUtteranceResponse](src/models/recognize-utterance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchAssociatedTranscripts(request: Bots.SearchAssociatedTranscriptsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchAssociatedTranscriptsResponse, Bots.SearchAssociatedTranscriptsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for associated transcripts that meet the specified criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.searchAssociatedTranscripts({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  });
  // TODO: Handle 'response' of type SearchAssociatedTranscriptsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.SearchAssociatedTranscriptsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .searchAssociatedTranscripts({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchAssociatedTranscriptsResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>botRecommendationId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SearchAssociatedTranscriptsRequest](src/models/search-associated-transcripts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.searchAssociatedTranscripts(request)`

- **OnSuccess**: <code>[SearchAssociatedTranscriptsResponse](src/models/search-associated-transcripts-response.ts)</code>
- **OnError**: throws <code>[Bots.SearchAssociatedTranscriptsError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.searchAssociatedTranscripts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchAssociatedTranscriptsResponse, Bots.SearchAssociatedTranscriptsError&gt;</code>, with `result.value` of type <code>[SearchAssociatedTranscriptsResponse](src/models/search-associated-transcripts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startBotAnalyzer(request: Bots.StartBotAnalyzerRequestParams, options?: RequestOptions): ApiPromise&lt;StartBotAnalyzerResponse, Bots.StartBotAnalyzerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.startBotAnalyzer({ botId: "some example string" });
  // TODO: Handle 'response' of type StartBotAnalyzerResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.StartBotAnalyzerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.startBotAnalyzer({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartBotAnalyzerResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartBotAnalyzerRequest](src/models/start-bot-analyzer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.startBotAnalyzer(request)`

- **OnSuccess**: <code>[StartBotAnalyzerResponse](src/models/start-bot-analyzer-response.ts)</code>
- **OnError**: throws <code>[Bots.StartBotAnalyzerError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.startBotAnalyzer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartBotAnalyzerResponse, Bots.StartBotAnalyzerError&gt;</code>, with `result.value` of type <code>[StartBotAnalyzerResponse](src/models/start-bot-analyzer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startBotRecommendation(request: Bots.StartBotRecommendationRequestParams, options?: RequestOptions): ApiPromise&lt;StartBotRecommendationResponse, Bots.StartBotRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to provide your transcript data, and to start the bot recommendation process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.startBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type StartBotRecommendationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.StartBotRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .startBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartBotRecommendationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartBotRecommendationRequest](src/models/start-bot-recommendation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.startBotRecommendation(request)`

- **OnSuccess**: <code>[StartBotRecommendationResponse](src/models/start-bot-recommendation-response.ts)</code>
- **OnError**: throws <code>[Bots.StartBotRecommendationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.startBotRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartBotRecommendationResponse, Bots.StartBotRecommendationError&gt;</code>, with `result.value` of type <code>[StartBotRecommendationResponse](src/models/start-bot-recommendation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startBotResourceGeneration(request: Bots.StartBotResourceGenerationRequestParams, options?: RequestOptions): ApiPromise&lt;StartBotResourceGenerationResponse, Bots.StartBotResourceGenerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.startBotResourceGeneration({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type StartBotResourceGenerationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.StartBotResourceGenerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .startBotResourceGeneration({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartBotResourceGenerationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartBotResourceGenerationRequest](src/models/start-bot-resource-generation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.startBotResourceGeneration(request)`

- **OnSuccess**: <code>[StartBotResourceGenerationResponse](src/models/start-bot-resource-generation-response.ts)</code>
- **OnError**: throws <code>[Bots.StartBotResourceGenerationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.startBotResourceGeneration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartBotResourceGenerationResponse, Bots.StartBotResourceGenerationError&gt;</code>, with `result.value` of type <code>[StartBotResourceGenerationResponse](src/models/start-bot-resource-generation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startConversation(request: Bots.StartConversationRequestParams, options?: RequestOptions): ApiPromise&lt;StartConversationResponse, Bots.StartConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time. After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Complet

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.startConversation({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type StartConversationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.StartConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .startConversation({
    botId: "some example string",
    botAliasId: "some example string",
    localeId: "some example string",
    sessionId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartConversationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>sessionId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartConversationRequest](src/models/start-conversation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.startConversation(request)`

- **OnSuccess**: <code>[StartConversationResponse](src/models/start-conversation-response.ts)</code>
- **OnError**: throws <code>[Bots.StartConversationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.startConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartConversationResponse, Bots.StartConversationError&gt;</code>, with `result.value` of type <code>[StartConversationResponse](src/models/start-conversation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopBotAnalyzer(request: Bots.StopBotAnalyzerRequestParams, options?: RequestOptions): ApiPromise&lt;StopBotAnalyzerResponse, Bots.StopBotAnalyzerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.stopBotAnalyzer({
    botId: "some example string",
    botAnalyzerRequestId: "some example string",
  });
  // TODO: Handle 'response' of type StopBotAnalyzerResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.StopBotAnalyzerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .stopBotAnalyzer({ botId: "some example string", botAnalyzerRequestId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StopBotAnalyzerResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAnalyzerRequestId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StopBotAnalyzerRequest](src/models/stop-bot-analyzer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.stopBotAnalyzer(request)`

- **OnSuccess**: <code>[StopBotAnalyzerResponse](src/models/stop-bot-analyzer-response.ts)</code>
- **OnError**: throws <code>[Bots.StopBotAnalyzerError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.stopBotAnalyzer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StopBotAnalyzerResponse, Bots.StopBotAnalyzerError&gt;</code>, with `result.value` of type <code>[StopBotAnalyzerResponse](src/models/stop-bot-analyzer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopBotRecommendation(request: Bots.StopBotRecommendationRequestParams, options?: RequestOptions): ApiPromise&lt;StopBotRecommendationResponse, Bots.StopBotRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop an already running Bot Recommendation request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.stopBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  });
  // TODO: Handle 'response' of type StopBotRecommendationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.StopBotRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .stopBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StopBotRecommendationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>botRecommendationId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StopBotRecommendationRequest](src/models/stop-bot-recommendation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.stopBotRecommendation(request)`

- **OnSuccess**: <code>[StopBotRecommendationResponse](src/models/stop-bot-recommendation-response.ts)</code>
- **OnError**: throws <code>[Bots.StopBotRecommendationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.stopBotRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StopBotRecommendationResponse, Bots.StopBotRecommendationError&gt;</code>, with `result.value` of type <code>[StopBotRecommendationResponse](src/models/stop-bot-recommendation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBot(request: Bots.UpdateBotRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBotResponse, Bots.UpdateBotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing bot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateBot({ botId: "some example string" });
  // TODO: Handle 'response' of type UpdateBotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateBotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.updateBot({ botId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBotResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateBotRequest](src/models/update-bot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateBot(request)`

- **OnSuccess**: <code>[UpdateBotResponse](src/models/update-bot-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateBotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateBot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBotResponse, Bots.UpdateBotError&gt;</code>, with `result.value` of type <code>[UpdateBotResponse](src/models/update-bot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBotAlias(request: Bots.UpdateBotAliasRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBotAliasResponse, Bots.UpdateBotAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing bot alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateBotAlias({
    botId: "some example string",
    botAliasId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateBotAliasResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateBotAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .updateBotAlias({ botId: "some example string", botAliasId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBotAliasResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botAliasId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateBotAliasRequest](src/models/update-bot-alias-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateBotAlias(request)`

- **OnSuccess**: <code>[UpdateBotAliasResponse](src/models/update-bot-alias-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateBotAliasError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateBotAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBotAliasResponse, Bots.UpdateBotAliasError&gt;</code>, with `result.value` of type <code>[UpdateBotAliasResponse](src/models/update-bot-alias-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBotLocale(request: Bots.UpdateBotLocaleRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBotLocaleResponse, Bots.UpdateBotLocaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings that a bot has for a specific locale.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateBotLocaleResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateBotLocaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .updateBotLocale({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBotLocaleResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateBotLocaleRequest](src/models/update-bot-locale-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateBotLocale(request)`

- **OnSuccess**: <code>[UpdateBotLocaleResponse](src/models/update-bot-locale-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateBotLocaleError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateBotLocale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBotLocaleResponse, Bots.UpdateBotLocaleError&gt;</code>, with `result.value` of type <code>[UpdateBotLocaleResponse](src/models/update-bot-locale-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBotRecommendation(request: Bots.UpdateBotRecommendationRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBotRecommendationResponse, Bots.UpdateBotRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing bot recommendation request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateBotRecommendationResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateBotRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .updateBotRecommendation({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    botRecommendationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBotRecommendationResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>botRecommendationId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateBotRecommendationRequest](src/models/update-bot-recommendation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateBotRecommendation(request)`

- **OnSuccess**: <code>[UpdateBotRecommendationResponse](src/models/update-bot-recommendation-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateBotRecommendationError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateBotRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBotRecommendationResponse, Bots.UpdateBotRecommendationError&gt;</code>, with `result.value` of type <code>[UpdateBotRecommendationResponse](src/models/update-bot-recommendation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateIntent(request: Bots.UpdateIntentRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateIntentResponse, Bots.UpdateIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings for an intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateIntentResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .updateIntent({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateIntentResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateIntentRequest](src/models/update-intent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateIntent(request)`

- **OnSuccess**: <code>[UpdateIntentResponse](src/models/update-intent-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateIntentError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateIntentResponse, Bots.UpdateIntentError&gt;</code>, with `result.value` of type <code>[UpdateIntentResponse](src/models/update-intent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSlot(request: Bots.UpdateSlotRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateSlotResponse, Bots.UpdateSlotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings for a slot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
    slotId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateSlotResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateSlotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .updateSlot({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    intentId: "some example string",
    slotId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateSlotResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>intentId</code> | <code>string</code> | - |
| <code>slotId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateSlotRequest](src/models/update-slot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateSlot(request)`

- **OnSuccess**: <code>[UpdateSlotResponse](src/models/update-slot-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateSlotError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateSlot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateSlotResponse, Bots.UpdateSlotError&gt;</code>, with `result.value` of type <code>[UpdateSlotResponse](src/models/update-slot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSlotType(request: Bots.UpdateSlotTypeRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateSlotTypeResponse, Bots.UpdateSlotTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing slot type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.updateSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    slotTypeId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateSlotTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Bots.UpdateSlotTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots
  .updateSlotType({
    botId: "some example string",
    botVersion: "some example string",
    localeId: "some example string",
    slotTypeId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateSlotTypeResponse
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
| <code>botId</code> | <code>string</code> | - |
| <code>botVersion</code> | <code>string</code> | - |
| <code>localeId</code> | <code>string</code> | - |
| <code>slotTypeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateSlotTypeRequest](src/models/update-slot-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.updateSlotType(request)`

- **OnSuccess**: <code>[UpdateSlotTypeResponse](src/models/update-slot-type-response.ts)</code>
- **OnError**: throws <code>[Bots.UpdateSlotTypeError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.updateSlotType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateSlotTypeResponse, Bots.UpdateSlotTypeError&gt;</code>, with `result.value` of type <code>[UpdateSlotTypeResponse](src/models/update-slot-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Builtins

> Source: [Builtins](src/resources/builtins.ts)

<details>
<summary><code>getBuiltinIntent(request: Builtins.GetBuiltinIntentRequestParams, options?: RequestOptions): ApiPromise&lt;GetBuiltinIntentResponse, Builtins.GetBuiltinIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builtins.getBuiltinIntent({ signature: "some example string" });
  // TODO: Handle 'response' of type GetBuiltinIntentResponse
} catch (err) {
  // TODO: Handle 'err' of type Builtins.GetBuiltinIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builtins.getBuiltinIntent({ signature: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBuiltinIntentResponse
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
| <code>signature</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builtins.getBuiltinIntent(request)`

- **OnSuccess**: <code>[GetBuiltinIntentResponse](src/models/get-builtin-intent-response.ts)</code>
- **OnError**: throws <code>[Builtins.GetBuiltinIntentError](src/resources/builtins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builtins.getBuiltinIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBuiltinIntentResponse, Builtins.GetBuiltinIntentError&gt;</code>, with `result.value` of type <code>[GetBuiltinIntentResponse](src/models/get-builtin-intent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBuiltinIntents(options?: RequestOptions): ApiPromise&lt;GetBuiltinIntentsResponse, Builtins.GetBuiltinIntentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the lex:GetBuiltinIntents action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builtins.getBuiltinIntents();
  // TODO: Handle 'response' of type GetBuiltinIntentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Builtins.GetBuiltinIntentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builtins.getBuiltinIntents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBuiltinIntentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builtins.getBuiltinIntents()`

- **OnSuccess**: <code>[GetBuiltinIntentsResponse](src/models/get-builtin-intents-response.ts)</code>
- **OnError**: throws <code>[Builtins.GetBuiltinIntentsError](src/resources/builtins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builtins.getBuiltinIntents().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBuiltinIntentsResponse, Builtins.GetBuiltinIntentsError&gt;</code>, with `result.value` of type <code>[GetBuiltinIntentsResponse](src/models/get-builtin-intents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBuiltinSlotTypes(options?: RequestOptions): ApiPromise&lt;GetBuiltinSlotTypesResponse, Builtins.GetBuiltinSlotTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builtins.getBuiltinSlotTypes();
  // TODO: Handle 'response' of type GetBuiltinSlotTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Builtins.GetBuiltinSlotTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builtins.getBuiltinSlotTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBuiltinSlotTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builtins.getBuiltinSlotTypes()`

- **OnSuccess**: <code>[GetBuiltinSlotTypesResponse](src/models/get-builtin-slot-types-response.ts)</code>
- **OnError**: throws <code>[Builtins.GetBuiltinSlotTypesError](src/resources/builtins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builtins.getBuiltinSlotTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBuiltinSlotTypesResponse, Builtins.GetBuiltinSlotTypesError&gt;</code>, with `result.value` of type <code>[GetBuiltinSlotTypesResponse](src/models/get-builtin-slot-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuiltInIntents(request: Builtins.ListBuiltInIntentsRequestParams, options?: RequestOptions): ApiPromise&lt;ListBuiltInIntentsResponse, Builtins.ListBuiltInIntentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builtins.listBuiltInIntents({ localeId: "some example string" });
  // TODO: Handle 'response' of type ListBuiltInIntentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Builtins.ListBuiltInIntentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builtins.listBuiltInIntents({ localeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBuiltInIntentsResponse
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
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBuiltInIntentsRequest](src/models/list-built-in-intents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builtins.listBuiltInIntents(request)`

- **OnSuccess**: <code>[ListBuiltInIntentsResponse](src/models/list-built-in-intents-response.ts)</code>
- **OnError**: throws <code>[Builtins.ListBuiltInIntentsError](src/resources/builtins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builtins.listBuiltInIntents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBuiltInIntentsResponse, Builtins.ListBuiltInIntentsError&gt;</code>, with `result.value` of type <code>[ListBuiltInIntentsResponse](src/models/list-built-in-intents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuiltInSlotTypes(request: Builtins.ListBuiltInSlotTypesRequestParams, options?: RequestOptions): ApiPromise&lt;ListBuiltInSlotTypesResponse, Builtins.ListBuiltInSlotTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in slot types that meet the specified criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builtins.listBuiltInSlotTypes({ localeId: "some example string" });
  // TODO: Handle 'response' of type ListBuiltInSlotTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Builtins.ListBuiltInSlotTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builtins.listBuiltInSlotTypes({ localeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBuiltInSlotTypesResponse
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
| <code>localeId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListBuiltInSlotTypesRequest](src/models/list-built-in-slot-types-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builtins.listBuiltInSlotTypes(request)`

- **OnSuccess**: <code>[ListBuiltInSlotTypesResponse](src/models/list-built-in-slot-types-response.ts)</code>
- **OnError**: throws <code>[Builtins.ListBuiltInSlotTypesError](src/resources/builtins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builtins.listBuiltInSlotTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBuiltInSlotTypesResponse, Builtins.ListBuiltInSlotTypesError&gt;</code>, with `result.value` of type <code>[ListBuiltInSlotTypesResponse](src/models/list-built-in-slot-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](src/resources/channels.ts)

<details>
<summary><code>deleteBotChannelAssociation(request: Channels.DeleteBotChannelAssociationRequestParams, options?: RequestOptions): ApiPromise&lt;string, Channels.DeleteBotChannelAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.deleteBotChannelAssociation({
    botName: "some example string",
    botAlias: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Channels.DeleteBotChannelAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels
  .deleteBotChannelAssociation({
    botName: "some example string",
    botAlias: "some example string",
    name: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteBotChannelAssociationRequest](src/models/delete-bot-channel-association-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.deleteBotChannelAssociation(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Channels.DeleteBotChannelAssociationError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.deleteBotChannelAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Channels.DeleteBotChannelAssociationError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBotChannelAssociation(request: Channels.GetBotChannelAssociationRequestParams, options?: RequestOptions): ApiPromise&lt;GetBotChannelAssociationResponse, Channels.GetBotChannelAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.getBotChannelAssociation({
    botName: "some example string",
    botAlias: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type GetBotChannelAssociationResponse
} catch (err) {
  // TODO: Handle 'err' of type Channels.GetBotChannelAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels
  .getBotChannelAssociation({
    botName: "some example string",
    botAlias: "some example string",
    name: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotChannelAssociationResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.getBotChannelAssociation(request)`

- **OnSuccess**: <code>[GetBotChannelAssociationResponse](src/models/get-bot-channel-association-response.ts)</code>
- **OnError**: throws <code>[Channels.GetBotChannelAssociationError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.getBotChannelAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotChannelAssociationResponse, Channels.GetBotChannelAssociationError&gt;</code>, with `result.value` of type <code>[GetBotChannelAssociationResponse](src/models/get-bot-channel-association-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBotChannelAssociations(request: Channels.GetBotChannelAssociationsRequestParams, options?: RequestOptions): ApiPromise&lt;GetBotChannelAssociationsResponse, Channels.GetBotChannelAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.getBotChannelAssociations({
    botName: "some example string",
    botAlias: "some example string",
  });
  // TODO: Handle 'response' of type GetBotChannelAssociationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Channels.GetBotChannelAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels
  .getBotChannelAssociations({ botName: "some example string", botAlias: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotChannelAssociationsResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.getBotChannelAssociations(request)`

- **OnSuccess**: <code>[GetBotChannelAssociationsResponse](src/models/get-bot-channel-associations-response.ts)</code>
- **OnError**: throws <code>[Channels.GetBotChannelAssociationsError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.getBotChannelAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotChannelAssociationsResponse, Channels.GetBotChannelAssociationsError&gt;</code>, with `result.value` of type <code>[GetBotChannelAssociationsResponse](src/models/get-bot-channel-associations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Createuploadurl

> Source: [Createuploadurl](src/resources/createuploadurl.ts)

<details>
<summary><code>createUploadUrl(request?: Createuploadurl.CreateUploadUrlRequest, options?: RequestOptions): ApiPromise&lt;CreateUploadUrlResponse, Createuploadurl.CreateUploadUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createuploadurl.createUploadUrl();
  // TODO: Handle 'response' of type CreateUploadUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Createuploadurl.CreateUploadUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createuploadurl.createUploadUrl().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateUploadUrlResponse
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
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createuploadurl.createUploadUrl(request)`

- **OnSuccess**: <code>[CreateUploadUrlResponse](src/models/create-upload-url-response.ts)</code>
- **OnError**: throws <code>[Createuploadurl.CreateUploadUrlError](src/resources/createuploadurl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createuploadurl.createUploadUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateUploadUrlResponse, Createuploadurl.CreateUploadUrlError&gt;</code>, with `result.value` of type <code>[CreateUploadUrlResponse](src/models/create-upload-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Exports

> Source: [Exports](src/resources/exports.ts)

<details>
<summary><code>createExport(request?: Exports.CreateExportRequestParams, options?: RequestOptions): ApiPromise&lt;CreateExportResponse, Exports.CreateExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see Importing and exporting bots

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.createExport();
  // TODO: Handle 'response' of type CreateExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Exports.CreateExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports.createExport().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateExportResponse
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
| <code>body?</code> | <code>[CreateExportRequest](src/models/create-export-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.createExport(request)`

- **OnSuccess**: <code>[CreateExportResponse](src/models/create-export-response.ts)</code>
- **OnError**: throws <code>[Exports.CreateExportError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.createExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateExportResponse, Exports.CreateExportError&gt;</code>, with `result.value` of type <code>[CreateExportResponse](src/models/create-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteExport(request: Exports.DeleteExportRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteExportResponse, Exports.DeleteExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a previous export and the associated files stored in an S3 bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.deleteExport({ exportId: "some example string" });
  // TODO: Handle 'response' of type DeleteExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Exports.DeleteExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports.deleteExport({ exportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteExportResponse
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
| <code>exportId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteExportRequest](src/models/delete-export-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.deleteExport(request)`

- **OnSuccess**: <code>[DeleteExportResponse](src/models/delete-export-response.ts)</code>
- **OnError**: throws <code>[Exports.DeleteExportError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.deleteExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteExportResponse, Exports.DeleteExportError&gt;</code>, with `result.value` of type <code>[DeleteExportResponse](src/models/delete-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeExport(request: Exports.DescribeExportRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeExportResponse, Exports.DescribeExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a specific export.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.describeExport({ exportId: "some example string" });
  // TODO: Handle 'response' of type DescribeExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Exports.DescribeExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports.describeExport({ exportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeExportResponse
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
| <code>exportId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.describeExport(request)`

- **OnSuccess**: <code>[DescribeExportResponse](src/models/describe-export-response.ts)</code>
- **OnError**: throws <code>[Exports.DescribeExportError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.describeExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeExportResponse, Exports.DescribeExportError&gt;</code>, with `result.value` of type <code>[DescribeExportResponse](src/models/describe-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExport(options?: RequestOptions): ApiPromise&lt;GetExportResponse, Exports.GetExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports the contents of a Amazon Lex resource in a specified format.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.getExport();
  // TODO: Handle 'response' of type GetExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Exports.GetExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports.getExport().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetExportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.getExport()`

- **OnSuccess**: <code>[GetExportResponse](src/models/get-export-response.ts)</code>
- **OnError**: throws <code>[Exports.GetExportError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.getExport().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetExportResponse, Exports.GetExportError&gt;</code>, with `result.value` of type <code>[GetExportResponse](src/models/get-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExports(request?: Exports.ListExportsRequestParams, options?: RequestOptions): ApiPromise&lt;ListExportsResponse, Exports.ListExportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.listExports();
  // TODO: Handle 'response' of type ListExportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Exports.ListExportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports.listExports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListExportsResponse
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
| <code>body?</code> | <code>[ListExportsRequest](src/models/list-exports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.listExports(request)`

- **OnSuccess**: <code>[ListExportsResponse](src/models/list-exports-response.ts)</code>
- **OnError**: throws <code>[Exports.ListExportsError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.listExports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListExportsResponse, Exports.ListExportsError&gt;</code>, with `result.value` of type <code>[ListExportsResponse](src/models/list-exports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateExport(request: Exports.UpdateExportRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateExportResponse, Exports.UpdateExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.updateExport({ exportId: "some example string" });
  // TODO: Handle 'response' of type UpdateExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Exports.UpdateExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports.updateExport({ exportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateExportResponse
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
| <code>exportId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateExportRequest](src/models/update-export-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.updateExport(request)`

- **OnSuccess**: <code>[UpdateExportResponse](src/models/update-export-response.ts)</code>
- **OnError**: throws <code>[Exports.UpdateExportError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.updateExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateExportResponse, Exports.UpdateExportError&gt;</code>, with `result.value` of type <code>[UpdateExportResponse](src/models/update-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Imports

> Source: [Imports](src/resources/imports.ts)

<details>
<summary><code>deleteImport(request: Imports.DeleteImportRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteImportResponse, Imports.DeleteImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a previous import and the associated file stored in an S3 bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.deleteImport({ importId: "some example string" });
  // TODO: Handle 'response' of type DeleteImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.DeleteImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports.deleteImport({ importId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteImportResponse
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
| <code>importId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteImportRequest](src/models/delete-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.deleteImport(request)`

- **OnSuccess**: <code>[DeleteImportResponse](src/models/delete-import-response.ts)</code>
- **OnError**: throws <code>[Imports.DeleteImportError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.deleteImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteImportResponse, Imports.DeleteImportError&gt;</code>, with `result.value` of type <code>[DeleteImportResponse](src/models/delete-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeImport(request: Imports.DescribeImportRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeImportResponse, Imports.DescribeImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a specific import.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.describeImport({ importId: "some example string" });
  // TODO: Handle 'response' of type DescribeImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.DescribeImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports.describeImport({ importId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeImportResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.describeImport(request)`

- **OnSuccess**: <code>[DescribeImportResponse](src/models/describe-import-response.ts)</code>
- **OnError**: throws <code>[Imports.DescribeImportError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.describeImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeImportResponse, Imports.DescribeImportError&gt;</code>, with `result.value` of type <code>[DescribeImportResponse](src/models/describe-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listImports(request?: Imports.ListImportsRequestParams, options?: RequestOptions): ApiPromise&lt;ListImportsResponse, Imports.ListImportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.listImports();
  // TODO: Handle 'response' of type ListImportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.ListImportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports.listImports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListImportsResponse
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
| <code>body?</code> | <code>[ListImportsRequest](src/models/list-imports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.listImports(request)`

- **OnSuccess**: <code>[ListImportsResponse](src/models/list-imports-response.ts)</code>
- **OnError**: throws <code>[Imports.ListImportsError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.listImports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListImportsResponse, Imports.ListImportsError&gt;</code>, with `result.value` of type <code>[ListImportsResponse](src/models/list-imports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startImport(request?: Imports.StartImportRequestParams, options?: RequestOptions): ApiPromise&lt;StartImportResponse, Imports.StartImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.startImport();
  // TODO: Handle 'response' of type StartImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.StartImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports.startImport().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartImportResponse
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
| <code>body?</code> | <code>[StartImportRequest](src/models/start-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.startImport(request)`

- **OnSuccess**: <code>[StartImportResponse](src/models/start-import-response.ts)</code>
- **OnError**: throws <code>[Imports.StartImportError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.startImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartImportResponse, Imports.StartImportError&gt;</code>, with `result.value` of type <code>[StartImportResponse](src/models/start-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Migrations

> Source: [Migrations](src/resources/migrations.ts)

<details>
<summary><code>getMigration(request: Migrations.GetMigrationRequestParams, options?: RequestOptions): ApiPromise&lt;GetMigrationResponse, Migrations.GetMigrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.migrations.getMigration({ migrationId: "some example string" });
  // TODO: Handle 'response' of type GetMigrationResponse
} catch (err) {
  // TODO: Handle 'err' of type Migrations.GetMigrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.migrations.getMigration({ migrationId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMigrationResponse
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
| <code>migrationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.migrations.getMigration(request)`

- **OnSuccess**: <code>[GetMigrationResponse](src/models/get-migration-response.ts)</code>
- **OnError**: throws <code>[Migrations.GetMigrationError](src/resources/migrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.migrations.getMigration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMigrationResponse, Migrations.GetMigrationError&gt;</code>, with `result.value` of type <code>[GetMigrationResponse](src/models/get-migration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMigrations(options?: RequestOptions): ApiPromise&lt;GetMigrationsResponse, Migrations.GetMigrationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.migrations.getMigrations();
  // TODO: Handle 'response' of type GetMigrationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Migrations.GetMigrationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.migrations.getMigrations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMigrationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.migrations.getMigrations()`

- **OnSuccess**: <code>[GetMigrationsResponse](src/models/get-migrations-response.ts)</code>
- **OnError**: throws <code>[Migrations.GetMigrationsError](src/resources/migrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.migrations.getMigrations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMigrationsResponse, Migrations.GetMigrationsError&gt;</code>, with `result.value` of type <code>[GetMigrationsResponse](src/models/get-migrations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMigration(request?: Migrations.StartMigrationRequestParams, options?: RequestOptions): ApiPromise&lt;StartMigrationResponse, Migrations.StartMigrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.migrations.startMigration();
  // TODO: Handle 'response' of type StartMigrationResponse
} catch (err) {
  // TODO: Handle 'err' of type Migrations.StartMigrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.migrations.startMigration().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartMigrationResponse
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
| <code>body?</code> | <code>[StartMigrationRequest](src/models/start-migration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.migrations.startMigration(request)`

- **OnSuccess**: <code>[StartMigrationResponse](src/models/start-migration-response.ts)</code>
- **OnError**: throws <code>[Migrations.StartMigrationError](src/resources/migrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.migrations.startMigration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartMigrationResponse, Migrations.StartMigrationError&gt;</code>, with `result.value` of type <code>[StartMigrationResponse](src/models/start-migration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>deleteSlotTypeVersion(request: Operations.DeleteSlotTypeVersionRequestParams, options?: RequestOptions): ApiPromise&lt;string, Operations.DeleteSlotTypeVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.deleteSlotTypeVersion({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeleteSlotTypeVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deleteSlotTypeVersion({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteSlotTypeVersionRequest](src/models/delete-slot-type-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deleteSlotTypeVersion(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Operations.DeleteSlotTypeVersionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deleteSlotTypeVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Operations.DeleteSlotTypeVersionError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntents(options?: RequestOptions): ApiPromise&lt;GetIntentsResponse, Operations.GetIntentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getIntents();
  // TODO: Handle 'response' of type GetIntentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetIntentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.getIntents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIntentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getIntents()`

- **OnSuccess**: <code>[GetIntentsResponse](src/models/get-intents-response.ts)</code>
- **OnError**: throws <code>[Operations.GetIntentsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getIntents().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIntentsResponse, Operations.GetIntentsError&gt;</code>, with `result.value` of type <code>[GetIntentsResponse](src/models/get-intents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSlotTypes(options?: RequestOptions): ApiPromise&lt;GetSlotTypesResponse, Operations.GetSlotTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all slot types. The operation requires permission for the lex:GetSlotTypes action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getSlotTypes();
  // TODO: Handle 'response' of type GetSlotTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetSlotTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.getSlotTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSlotTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getSlotTypes()`

- **OnSuccess**: <code>[GetSlotTypesResponse](src/models/get-slot-types-response.ts)</code>
- **OnError**: throws <code>[Operations.GetSlotTypesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getSlotTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSlotTypesResponse, Operations.GetSlotTypesError&gt;</code>, with `result.value` of type <code>[GetSlotTypesResponse](src/models/get-slot-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUtterancesView(request: Operations.GetUtterancesViewRequestParams, options?: RequestOptions): ApiPromise&lt;GetUtterancesViewResponse, Operations.GetUtterancesViewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If you set childDirected field to true when you created your bot, if you are using slot obfuscation with 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getUtterancesView({ botName: "some example string" });
  // TODO: Handle 'response' of type GetUtterancesViewResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetUtterancesViewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.getUtterancesView({ botName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetUtterancesViewResponse
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
| <code>botName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getUtterancesView(request)`

- **OnSuccess**: <code>[GetUtterancesViewResponse](src/models/get-utterances-view-response.ts)</code>
- **OnError**: throws <code>[Operations.GetUtterancesViewError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getUtterancesView(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetUtterancesViewResponse, Operations.GetUtterancesViewError&gt;</code>, with `result.value` of type <code>[GetUtterancesViewResponse](src/models/get-utterances-view-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postContent(request: Operations.PostContentRequestParams, options?: RequestOptions): ApiPromise&lt;PostContentResponse, Operations.PostContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.postContent({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type PostContentResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.PostContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .postContent({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostContentResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostContentRequest](src/models/post-content-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.postContent(request)`

- **OnSuccess**: <code>[PostContentResponse](src/models/post-content-response.ts)</code>
- **OnError**: throws <code>[Operations.PostContentError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.postContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostContentResponse, Operations.PostContentError&gt;</code>, with `result.value` of type <code>[PostContentResponse](src/models/post-content-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postText(request: Operations.PostTextRequestParams, options?: RequestOptions): ApiPromise&lt;PostTextResponse, Operations.PostTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.postText({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type PostTextResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.PostTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .postText({
    botName: "some example string",
    botAlias: "some example string",
    userId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostTextResponse
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
| <code>botName</code> | <code>string</code> | - |
| <code>botAlias</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostTextRequest](src/models/post-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.postText(request)`

- **OnSuccess**: <code>[PostTextResponse](src/models/post-text-response.ts)</code>
- **OnError**: throws <code>[Operations.PostTextError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.postText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostTextResponse, Operations.PostTextError&gt;</code>, with `result.value` of type <code>[PostTextResponse](src/models/post-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Policy

> Source: [Policy](src/resources/policy.ts)

<details>
<summary><code>createResourcePolicy(request: Policy.CreateResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;CreateResourcePolicyResponse, Policy.CreateResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new resource policy with the specified policy statements.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policy.createResourcePolicy({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type CreateResourcePolicyResponse
} catch (err) {
  // TODO: Handle 'err' of type Policy.CreateResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policy.createResourcePolicy({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResourcePolicyResponse
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateResourcePolicyRequest](src/models/create-resource-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policy.createResourcePolicy(request)`

- **OnSuccess**: <code>[CreateResourcePolicyResponse](src/models/create-resource-policy-response.ts)</code>
- **OnError**: throws <code>[Policy.CreateResourcePolicyError](src/resources/policy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policy.createResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResourcePolicyResponse, Policy.CreateResourcePolicyError&gt;</code>, with `result.value` of type <code>[CreateResourcePolicyResponse](src/models/create-resource-policy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createResourcePolicyStatement(request: Policy.CreateResourcePolicyStatementRequestParams, options?: RequestOptions): ApiPromise&lt;CreateResourcePolicyStatementResponse, Policy.CreateResourcePolicyStatementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policy.createResourcePolicyStatement({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type CreateResourcePolicyStatementResponse
} catch (err) {
  // TODO: Handle 'err' of type Policy.CreateResourcePolicyStatementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policy
  .createResourcePolicyStatement({ resourceArn: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResourcePolicyStatementResponse
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateResourcePolicyStatementRequest](src/models/create-resource-policy-statement-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policy.createResourcePolicyStatement(request)`

- **OnSuccess**: <code>[CreateResourcePolicyStatementResponse](src/models/create-resource-policy-statement-response.ts)</code>
- **OnError**: throws <code>[Policy.CreateResourcePolicyStatementError](src/resources/policy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policy.createResourcePolicyStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResourcePolicyStatementResponse, Policy.CreateResourcePolicyStatementError&gt;</code>, with `result.value` of type <code>[CreateResourcePolicyStatementResponse](src/models/create-resource-policy-statement-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourcePolicy(request: Policy.DeleteResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteResourcePolicyResponse, Policy.DeleteResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policy.deleteResourcePolicy({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type DeleteResourcePolicyResponse
} catch (err) {
  // TODO: Handle 'err' of type Policy.DeleteResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policy.deleteResourcePolicy({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteResourcePolicyResponse
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteResourcePolicyRequest](src/models/delete-resource-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policy.deleteResourcePolicy(request)`

- **OnSuccess**: <code>[DeleteResourcePolicyResponse](src/models/delete-resource-policy-response.ts)</code>
- **OnError**: throws <code>[Policy.DeleteResourcePolicyError](src/resources/policy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policy.deleteResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteResourcePolicyResponse, Policy.DeleteResourcePolicyError&gt;</code>, with `result.value` of type <code>[DeleteResourcePolicyResponse](src/models/delete-resource-policy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourcePolicyStatement(request: Policy.DeleteResourcePolicyStatementRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteResourcePolicyStatementResponse, Policy.DeleteResourcePolicyStatementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policy.deleteResourcePolicyStatement({
    resourceArn: "some example string",
    statementId: "some example string",
  });
  // TODO: Handle 'response' of type DeleteResourcePolicyStatementResponse
} catch (err) {
  // TODO: Handle 'err' of type Policy.DeleteResourcePolicyStatementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policy
  .deleteResourcePolicyStatement({ resourceArn: "some example string", statementId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteResourcePolicyStatementResponse
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>statementId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteResourcePolicyStatementRequest](src/models/delete-resource-policy-statement-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policy.deleteResourcePolicyStatement(request)`

- **OnSuccess**: <code>[DeleteResourcePolicyStatementResponse](src/models/delete-resource-policy-statement-response.ts)</code>
- **OnError**: throws <code>[Policy.DeleteResourcePolicyStatementError](src/resources/policy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policy.deleteResourcePolicyStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteResourcePolicyStatementResponse, Policy.DeleteResourcePolicyStatementError&gt;</code>, with `result.value` of type <code>[DeleteResourcePolicyStatementResponse](src/models/delete-resource-policy-statement-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeResourcePolicy(request: Policy.DescribeResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeResourcePolicyResponse, Policy.DescribeResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource policy and policy revision for a bot or bot alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policy.describeResourcePolicy({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type DescribeResourcePolicyResponse
} catch (err) {
  // TODO: Handle 'err' of type Policy.DescribeResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policy
  .describeResourcePolicy({ resourceArn: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeResourcePolicyResponse
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
| <code>resourceArn</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policy.describeResourcePolicy(request)`

- **OnSuccess**: <code>[DescribeResourcePolicyResponse](src/models/describe-resource-policy-response.ts)</code>
- **OnError**: throws <code>[Policy.DescribeResourcePolicyError](src/resources/policy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policy.describeResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeResourcePolicyResponse, Policy.DescribeResourcePolicyError&gt;</code>, with `result.value` of type <code>[DescribeResourcePolicyResponse](src/models/describe-resource-policy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResourcePolicy(request: Policy.UpdateResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateResourcePolicyResponse, Policy.UpdateResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policy.updateResourcePolicy({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type UpdateResourcePolicyResponse
} catch (err) {
  // TODO: Handle 'err' of type Policy.UpdateResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policy.updateResourcePolicy({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateResourcePolicyResponse
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateResourcePolicyRequest](src/models/update-resource-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policy.updateResourcePolicy(request)`

- **OnSuccess**: <code>[UpdateResourcePolicyResponse](src/models/update-resource-policy-response.ts)</code>
- **OnError**: throws <code>[Policy.UpdateResourcePolicyError](src/resources/policy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policy.updateResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateResourcePolicyResponse, Policy.UpdateResourcePolicyError&gt;</code>, with `result.value` of type <code>[UpdateResourcePolicyResponse](src/models/update-resource-policy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>listTagsForResource(request: Tags.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;ListTagsForResourceResponse, Tags.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTagsForResource({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type ListTagsForResourceResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listTagsForResource({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTagsForResourceResponse
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
| <code>resourceArn</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTagsForResource(request)`

- **OnSuccess**: <code>[ListTagsForResourceResponse](src/models/list-tags-for-resource-response.ts)</code>
- **OnError**: throws <code>[Tags.ListTagsForResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTagsForResourceResponse, Tags.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>[ListTagsForResourceResponse](src/models/list-tags-for-resource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource1(request: Tags.ListTagsForResource1Request, options?: RequestOptions): ApiPromise&lt;ModelsLexListTagsForResourceResponse, Tags.ListTagsForResource1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTagsForResource1({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type ModelsLexListTagsForResourceResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.ListTagsForResource1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listTagsForResource1({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsLexListTagsForResourceResponse
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
| <code>resourceArn</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTagsForResource1(request)`

- **OnSuccess**: <code>[ModelsLexListTagsForResourceResponse](src/models/models-lex-list-tags-for-resource-response.ts)</code>
- **OnError**: throws <code>[Tags.ListTagsForResource1Error](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listTagsForResource1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsLexListTagsForResourceResponse, Tags.ListTagsForResource1Error&gt;</code>, with `result.value` of type <code>[ModelsLexListTagsForResourceResponse](src/models/models-lex-list-tags-for-resource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Tags.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tags.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.tagResource({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tags.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.tagResource({ resourceArn: "some example string" }).asApiResult();
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TagResourceRequest](src/models/tag-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.tagResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tags.TagResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tags.TagResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource1(request: Tags.TagResource1Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tags.TagResource1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.tagResource1({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tags.TagResource1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.tagResource1({ resourceArn: "some example string" }).asApiResult();
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexTagResourceRequest](src/models/models-lex-tag-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.tagResource1(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tags.TagResource1Error](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.tagResource1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tags.TagResource1Error&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: Tags.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tags.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from a bot, bot alias, or bot channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.untagResource({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tags.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.untagResource({ resourceArn: "some example string" }).asApiResult();
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UntagResourceRequest](src/models/untag-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.untagResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tags.UntagResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tags.UntagResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource1(request: Tags.UntagResource1Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tags.UntagResource1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from a bot, bot alias or bot channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.untagResource1({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tags.UntagResource1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.untagResource1({ resourceArn: "some example string" }).asApiResult();
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
| <code>resourceArn</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexUntagResourceRequest](src/models/models-lex-untag-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.untagResource1(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tags.UntagResource1Error](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.untagResource1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tags.UntagResource1Error&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Testexecutions

> Source: [Testexecutions](src/resources/testexecutions.ts)

<details>
<summary><code>describeTestExecution(request: Testexecutions.DescribeTestExecutionRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeTestExecutionResponse, Testexecutions.DescribeTestExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testexecutions.describeTestExecution({
    testExecutionId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeTestExecutionResponse
} catch (err) {
  // TODO: Handle 'err' of type Testexecutions.DescribeTestExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testexecutions
  .describeTestExecution({ testExecutionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeTestExecutionResponse
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
| <code>testExecutionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testexecutions.describeTestExecution(request)`

- **OnSuccess**: <code>[DescribeTestExecutionResponse](src/models/describe-test-execution-response.ts)</code>
- **OnError**: throws <code>[Testexecutions.DescribeTestExecutionError](src/resources/testexecutions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testexecutions.describeTestExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeTestExecutionResponse, Testexecutions.DescribeTestExecutionError&gt;</code>, with `result.value` of type <code>[DescribeTestExecutionResponse](src/models/describe-test-execution-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTestExecutionArtifactsUrl(request: Testexecutions.GetTestExecutionArtifactsUrlRequestParams, options?: RequestOptions): ApiPromise&lt;GetTestExecutionArtifactsUrlResponse, Testexecutions.GetTestExecutionArtifactsUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The pre-signed Amazon S3 URL to download the test execution result artifacts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testexecutions.getTestExecutionArtifactsUrl({
    testExecutionId: "some example string",
  });
  // TODO: Handle 'response' of type GetTestExecutionArtifactsUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Testexecutions.GetTestExecutionArtifactsUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testexecutions
  .getTestExecutionArtifactsUrl({ testExecutionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTestExecutionArtifactsUrlResponse
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
| <code>testExecutionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testexecutions.getTestExecutionArtifactsUrl(request)`

- **OnSuccess**: <code>[GetTestExecutionArtifactsUrlResponse](src/models/get-test-execution-artifacts-url-response.ts)</code>
- **OnError**: throws <code>[Testexecutions.GetTestExecutionArtifactsUrlError](src/resources/testexecutions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testexecutions.getTestExecutionArtifactsUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTestExecutionArtifactsUrlResponse, Testexecutions.GetTestExecutionArtifactsUrlError&gt;</code>, with `result.value` of type <code>[GetTestExecutionArtifactsUrlResponse](src/models/get-test-execution-artifacts-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTestExecutionResultItems(request: Testexecutions.ListTestExecutionResultItemsRequestParams, options?: RequestOptions): ApiPromise&lt;ListTestExecutionResultItemsResponse, Testexecutions.ListTestExecutionResultItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of test execution result items.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testexecutions.listTestExecutionResultItems({
    testExecutionId: "some example string",
  });
  // TODO: Handle 'response' of type ListTestExecutionResultItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Testexecutions.ListTestExecutionResultItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testexecutions
  .listTestExecutionResultItems({ testExecutionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTestExecutionResultItemsResponse
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
| <code>testExecutionId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListTestExecutionResultItemsRequest](src/models/list-test-execution-result-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testexecutions.listTestExecutionResultItems(request)`

- **OnSuccess**: <code>[ListTestExecutionResultItemsResponse](src/models/list-test-execution-result-items-response.ts)</code>
- **OnError**: throws <code>[Testexecutions.ListTestExecutionResultItemsError](src/resources/testexecutions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testexecutions.listTestExecutionResultItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTestExecutionResultItemsResponse, Testexecutions.ListTestExecutionResultItemsError&gt;</code>, with `result.value` of type <code>[ListTestExecutionResultItemsResponse](src/models/list-test-execution-result-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTestExecutions(request?: Testexecutions.ListTestExecutionsRequestParams, options?: RequestOptions): ApiPromise&lt;ListTestExecutionsResponse, Testexecutions.ListTestExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of test set executions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testexecutions.listTestExecutions();
  // TODO: Handle 'response' of type ListTestExecutionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Testexecutions.ListTestExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testexecutions.listTestExecutions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTestExecutionsResponse
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
| <code>body?</code> | <code>[ListTestExecutionsRequest](src/models/list-test-executions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testexecutions.listTestExecutions(request)`

- **OnSuccess**: <code>[ListTestExecutionsResponse](src/models/list-test-executions-response.ts)</code>
- **OnError**: throws <code>[Testexecutions.ListTestExecutionsError](src/resources/testexecutions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testexecutions.listTestExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTestExecutionsResponse, Testexecutions.ListTestExecutionsError&gt;</code>, with `result.value` of type <code>[ListTestExecutionsResponse](src/models/list-test-executions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTestExecution(request: Testexecutions.StartTestExecutionRequestParams, options?: RequestOptions): ApiPromise&lt;StartTestExecutionResponse, Testexecutions.StartTestExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start test set execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testexecutions.startTestExecution({ testSetId: "some example string" });
  // TODO: Handle 'response' of type StartTestExecutionResponse
} catch (err) {
  // TODO: Handle 'err' of type Testexecutions.StartTestExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testexecutions
  .startTestExecution({ testSetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartTestExecutionResponse
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartTestExecutionRequest](src/models/start-test-execution-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testexecutions.startTestExecution(request)`

- **OnSuccess**: <code>[StartTestExecutionResponse](src/models/start-test-execution-response.ts)</code>
- **OnError**: throws <code>[Testexecutions.StartTestExecutionError](src/resources/testexecutions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testexecutions.startTestExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartTestExecutionResponse, Testexecutions.StartTestExecutionError&gt;</code>, with `result.value` of type <code>[StartTestExecutionResponse](src/models/start-test-execution-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Testsetdiscrepancy

> Source: [Testsetdiscrepancy](src/resources/testsetdiscrepancy.ts)

<details>
<summary><code>createTestSetDiscrepancyReport(request: Testsetdiscrepancy.CreateTestSetDiscrepancyReportRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTestSetDiscrepancyReportResponse, Testsetdiscrepancy.CreateTestSetDiscrepancyReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a report that describes the differences between the bot and the test set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsetdiscrepancy.createTestSetDiscrepancyReport({
    testSetId: "some example string",
  });
  // TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsetdiscrepancy.CreateTestSetDiscrepancyReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsetdiscrepancy
  .createTestSetDiscrepancyReport({ testSetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTestSetDiscrepancyReportResponse
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateTestSetDiscrepancyReportRequest](src/models/create-test-set-discrepancy-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsetdiscrepancy.createTestSetDiscrepancyReport(request)`

- **OnSuccess**: <code>[CreateTestSetDiscrepancyReportResponse](src/models/create-test-set-discrepancy-report-response.ts)</code>
- **OnError**: throws <code>[Testsetdiscrepancy.CreateTestSetDiscrepancyReportError](src/resources/testsetdiscrepancy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsetdiscrepancy.createTestSetDiscrepancyReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTestSetDiscrepancyReportResponse, Testsetdiscrepancy.CreateTestSetDiscrepancyReportError&gt;</code>, with `result.value` of type <code>[CreateTestSetDiscrepancyReportResponse](src/models/create-test-set-discrepancy-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTestSetDiscrepancyReport(request: Testsetdiscrepancy.DescribeTestSetDiscrepancyReportRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeTestSetDiscrepancyReportResponse, Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set discrepancy report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsetdiscrepancy.describeTestSetDiscrepancyReport({
    testSetDiscrepancyReportId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeTestSetDiscrepancyReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsetdiscrepancy
  .describeTestSetDiscrepancyReport({ testSetDiscrepancyReportId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeTestSetDiscrepancyReportResponse
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
| <code>testSetDiscrepancyReportId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsetdiscrepancy.describeTestSetDiscrepancyReport(request)`

- **OnSuccess**: <code>[DescribeTestSetDiscrepancyReportResponse](src/models/describe-test-set-discrepancy-report-response.ts)</code>
- **OnError**: throws <code>[Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError](src/resources/testsetdiscrepancy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsetdiscrepancy.describeTestSetDiscrepancyReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeTestSetDiscrepancyReportResponse, Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError&gt;</code>, with `result.value` of type <code>[DescribeTestSetDiscrepancyReportResponse](src/models/describe-test-set-discrepancy-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Testsetgenerations

> Source: [Testsetgenerations](src/resources/testsetgenerations.ts)

<details>
<summary><code>describeTestSetGeneration(request: Testsetgenerations.DescribeTestSetGenerationRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeTestSetGenerationResponse, Testsetgenerations.DescribeTestSetGenerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set generation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsetgenerations.describeTestSetGeneration({
    testSetGenerationId: "some example string",
  });
  // TODO: Handle 'response' of type DescribeTestSetGenerationResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsetgenerations.DescribeTestSetGenerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsetgenerations
  .describeTestSetGeneration({ testSetGenerationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeTestSetGenerationResponse
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
| <code>testSetGenerationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsetgenerations.describeTestSetGeneration(request)`

- **OnSuccess**: <code>[DescribeTestSetGenerationResponse](src/models/describe-test-set-generation-response.ts)</code>
- **OnError**: throws <code>[Testsetgenerations.DescribeTestSetGenerationError](src/resources/testsetgenerations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsetgenerations.describeTestSetGeneration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeTestSetGenerationResponse, Testsetgenerations.DescribeTestSetGenerationError&gt;</code>, with `result.value` of type <code>[DescribeTestSetGenerationResponse](src/models/describe-test-set-generation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTestSetGeneration(request?: Testsetgenerations.StartTestSetGenerationRequestParams, options?: RequestOptions): ApiPromise&lt;StartTestSetGenerationResponse, Testsetgenerations.StartTestSetGenerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start the generation of test set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsetgenerations.startTestSetGeneration();
  // TODO: Handle 'response' of type StartTestSetGenerationResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsetgenerations.StartTestSetGenerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsetgenerations.startTestSetGeneration().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartTestSetGenerationResponse
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
| <code>body?</code> | <code>[StartTestSetGenerationRequest](src/models/start-test-set-generation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsetgenerations.startTestSetGeneration(request)`

- **OnSuccess**: <code>[StartTestSetGenerationResponse](src/models/start-test-set-generation-response.ts)</code>
- **OnError**: throws <code>[Testsetgenerations.StartTestSetGenerationError](src/resources/testsetgenerations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsetgenerations.startTestSetGeneration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartTestSetGenerationResponse, Testsetgenerations.StartTestSetGenerationError&gt;</code>, with `result.value` of type <code>[StartTestSetGenerationResponse](src/models/start-test-set-generation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Testsets

> Source: [Testsets](src/resources/testsets.ts)

<details>
<summary><code>createTestSetDiscrepancyReport2(request: Testsets.CreateTestSetDiscrepancyReport2Request, options?: RequestOptions): ApiPromise&lt;CreateTestSetDiscrepancyReportResponse, Testsets.CreateTestSetDiscrepancyReport2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a report that describes the differences between the bot and the test set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.createTestSetDiscrepancyReport2({
    testSetId: "some example string",
  });
  // TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsets.CreateTestSetDiscrepancyReport2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets
  .createTestSetDiscrepancyReport2({ testSetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTestSetDiscrepancyReportResponse
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateTestSetDiscrepancyReportRequest](src/models/create-test-set-discrepancy-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.createTestSetDiscrepancyReport2(request)`

- **OnSuccess**: <code>[CreateTestSetDiscrepancyReportResponse](src/models/create-test-set-discrepancy-report-response.ts)</code>
- **OnError**: throws <code>[Testsets.CreateTestSetDiscrepancyReport2Error](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.createTestSetDiscrepancyReport2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTestSetDiscrepancyReportResponse, Testsets.CreateTestSetDiscrepancyReport2Error&gt;</code>, with `result.value` of type <code>[CreateTestSetDiscrepancyReportResponse](src/models/create-test-set-discrepancy-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTestSet(request: Testsets.DeleteTestSetRequestParams, options?: RequestOptions): ApiPromise&lt;string, Testsets.DeleteTestSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to delete the selected test set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.deleteTestSet({ testSetId: "some example string" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Testsets.DeleteTestSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets.deleteTestSet({ testSetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteTestSetRequest](src/models/delete-test-set-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.deleteTestSet(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Testsets.DeleteTestSetError](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.deleteTestSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Testsets.DeleteTestSetError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTestSet(request: Testsets.DescribeTestSetRequestParams, options?: RequestOptions): ApiPromise&lt;DescribeTestSetResponse, Testsets.DescribeTestSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.describeTestSet({ testSetId: "some example string" });
  // TODO: Handle 'response' of type DescribeTestSetResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsets.DescribeTestSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets.describeTestSet({ testSetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeTestSetResponse
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
| <code>testSetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.describeTestSet(request)`

- **OnSuccess**: <code>[DescribeTestSetResponse](src/models/describe-test-set-response.ts)</code>
- **OnError**: throws <code>[Testsets.DescribeTestSetError](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.describeTestSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeTestSetResponse, Testsets.DescribeTestSetError&gt;</code>, with `result.value` of type <code>[DescribeTestSetResponse](src/models/describe-test-set-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTestSetRecords(request: Testsets.ListTestSetRecordsRequestParams, options?: RequestOptions): ApiPromise&lt;ListTestSetRecordsResponse, Testsets.ListTestSetRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of test set records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.listTestSetRecords({ testSetId: "some example string" });
  // TODO: Handle 'response' of type ListTestSetRecordsResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsets.ListTestSetRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets.listTestSetRecords({ testSetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTestSetRecordsResponse
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListTestSetRecordsRequest](src/models/list-test-set-records-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.listTestSetRecords(request)`

- **OnSuccess**: <code>[ListTestSetRecordsResponse](src/models/list-test-set-records-response.ts)</code>
- **OnError**: throws <code>[Testsets.ListTestSetRecordsError](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.listTestSetRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTestSetRecordsResponse, Testsets.ListTestSetRecordsError&gt;</code>, with `result.value` of type <code>[ListTestSetRecordsResponse](src/models/list-test-set-records-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTestSets(request?: Testsets.ListTestSetsRequestParams, options?: RequestOptions): ApiPromise&lt;ListTestSetsResponse, Testsets.ListTestSetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of the test sets

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.listTestSets();
  // TODO: Handle 'response' of type ListTestSetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsets.ListTestSetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets.listTestSets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTestSetsResponse
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
| <code>body?</code> | <code>[ListTestSetsRequest](src/models/list-test-sets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.listTestSets(request)`

- **OnSuccess**: <code>[ListTestSetsResponse](src/models/list-test-sets-response.ts)</code>
- **OnError**: throws <code>[Testsets.ListTestSetsError](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.listTestSets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTestSetsResponse, Testsets.ListTestSetsError&gt;</code>, with `result.value` of type <code>[ListTestSetsResponse](src/models/list-test-sets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTestExecution2(request: Testsets.StartTestExecution2Request, options?: RequestOptions): ApiPromise&lt;StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi, Testsets.StartTestExecution2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start test set execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.startTestExecution2({ testSetId: "some example string" });
  // TODO: Handle 'response' of type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi
} catch (err) {
  // TODO: Handle 'err' of type Testsets.StartTestExecution2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets.startTestExecution2({ testSetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi](src/models/start-test-execution-request-amazon-lex-model-building-v2-testsets-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.startTestExecution2(request)`

- **OnSuccess**: <code>[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi](src/models/start-test-execution-response-amazon-lex-model-building-v2-testsets-api.ts)</code>
- **OnError**: throws <code>[Testsets.StartTestExecution2Error](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.startTestExecution2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi, Testsets.StartTestExecution2Error&gt;</code>, with `result.value` of type <code>[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi](src/models/start-test-execution-response-amazon-lex-model-building-v2-testsets-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTestSet(request: Testsets.UpdateTestSetRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateTestSetResponse, Testsets.UpdateTestSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to update the test set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testsets.updateTestSet({ testSetId: "some example string" });
  // TODO: Handle 'response' of type UpdateTestSetResponse
} catch (err) {
  // TODO: Handle 'err' of type Testsets.UpdateTestSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testsets.updateTestSet({ testSetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTestSetResponse
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
| <code>testSetId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpdateTestSetRequest](src/models/update-test-set-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testsets.updateTestSet(request)`

- **OnSuccess**: <code>[UpdateTestSetResponse](src/models/update-test-set-response.ts)</code>
- **OnError**: throws <code>[Testsets.UpdateTestSetError](src/resources/testsets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testsets.updateTestSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTestSetResponse, Testsets.UpdateTestSetError&gt;</code>, with `result.value` of type <code>[UpdateTestSetResponse](src/models/update-test-set-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](src/resources/versions.ts)

<details>
<summary><code>createBotVersion2(request: Versions.CreateBotVersion2Request, options?: RequestOptions): ApiPromise&lt;ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi, Versions.CreateBotVersion2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.createBotVersion2({ name: "some example string" });
  // TODO: Handle 'response' of type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi
} catch (err) {
  // TODO: Handle 'err' of type Versions.CreateBotVersion2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.createBotVersion2({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexCreateBotVersionRequest](src/models/models-lex-create-bot-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.createBotVersion2(request)`

- **OnSuccess**: <code>[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi](src/models/models-lex-create-bot-version-response-amazon-lex-model-building-v2-versions-api.ts)</code>
- **OnError**: throws <code>[Versions.CreateBotVersion2Error](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.createBotVersion2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi, Versions.CreateBotVersion2Error&gt;</code>, with `result.value` of type <code>[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi](src/models/models-lex-create-bot-version-response-amazon-lex-model-building-v2-versions-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createIntentVersion(request: Versions.CreateIntentVersionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateIntentVersionResponse, Versions.CreateIntentVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created. You can update only the $LATEST version of the intent. You can't update the numbered versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions to perform the lex:CreateIntentVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.createIntentVersion({ name: "some example string" });
  // TODO: Handle 'response' of type CreateIntentVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.CreateIntentVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.createIntentVersion({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateIntentVersionResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateIntentVersionRequest](src/models/create-intent-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.createIntentVersion(request)`

- **OnSuccess**: <code>[CreateIntentVersionResponse](src/models/create-intent-version-response.ts)</code>
- **OnError**: throws <code>[Versions.CreateIntentVersionError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.createIntentVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateIntentVersionResponse, Versions.CreateIntentVersionError&gt;</code>, with `result.value` of type <code>[CreateIntentVersionResponse](src/models/create-intent-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSlotTypeVersion(request: Versions.CreateSlotTypeVersionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSlotTypeVersionResponse, Versions.CreateSlotTypeVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. You can update only the $LATEST version of a slot type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.createSlotTypeVersion({ name: "some example string" });
  // TODO: Handle 'response' of type CreateSlotTypeVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.CreateSlotTypeVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.createSlotTypeVersion({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSlotTypeVersionResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CreateSlotTypeVersionRequest](src/models/create-slot-type-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.createSlotTypeVersion(request)`

- **OnSuccess**: <code>[CreateSlotTypeVersionResponse](src/models/create-slot-type-version-response.ts)</code>
- **OnError**: throws <code>[Versions.CreateSlotTypeVersionError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.createSlotTypeVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSlotTypeVersionResponse, Versions.CreateSlotTypeVersionError&gt;</code>, with `result.value` of type <code>[CreateSlotTypeVersionResponse](src/models/create-slot-type-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBotVersion2(request: Versions.DeleteBotVersion2Request, options?: RequestOptions): ApiPromise&lt;string, Versions.DeleteBotVersion2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.deleteBotVersion2({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Versions.DeleteBotVersion2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .deleteBotVersion2({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ModelsLexDeleteBotVersionRequest](src/models/models-lex-delete-bot-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.deleteBotVersion2(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Versions.DeleteBotVersion2Error](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.deleteBotVersion2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Versions.DeleteBotVersion2Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteIntentVersion(request: Versions.DeleteIntentVersionRequestParams, options?: RequestOptions): ApiPromise&lt;string, Versions.DeleteIntentVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation. This operation requires permissions for the lex:DeleteIntentVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.deleteIntentVersion({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Versions.DeleteIntentVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .deleteIntentVersion({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteIntentVersionRequest](src/models/delete-intent-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.deleteIntentVersion(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Versions.DeleteIntentVersionError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.deleteIntentVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Versions.DeleteIntentVersionError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSlotTypeVersion2(request: Versions.DeleteSlotTypeVersion2Request, options?: RequestOptions): ApiPromise&lt;string, Versions.DeleteSlotTypeVersion2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.deleteSlotTypeVersion2({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Versions.DeleteSlotTypeVersion2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .deleteSlotTypeVersion2({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |
| <code>body?</code> | <code>[DeleteSlotTypeVersionRequest](src/models/delete-slot-type-version-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.deleteSlotTypeVersion2(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Versions.DeleteSlotTypeVersion2Error](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.deleteSlotTypeVersion2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Versions.DeleteSlotTypeVersion2Error&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBot(request: Versions.GetBotRequestParams, options?: RequestOptions): ApiPromise&lt;GetBotResponse, Versions.GetBotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. This operation requires permissions for the lex:GetBot action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getBot({
    name: "some example string",
    versionOrAlias: "some example string",
  });
  // TODO: Handle 'response' of type GetBotResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.GetBotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .getBot({ name: "some example string", versionOrAlias: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>versionOrAlias</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getBot(request)`

- **OnSuccess**: <code>[GetBotResponse](src/models/get-bot-response.ts)</code>
- **OnError**: throws <code>[Versions.GetBotError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.getBot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotResponse, Versions.GetBotError&gt;</code>, with `result.value` of type <code>[GetBotResponse](src/models/get-bot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBotVersions(request: Versions.GetBotVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;GetBotVersionsResponse, Versions.GetBotVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions operation returns four BotMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetBotVersions action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getBotVersions({ name: "some example string" });
  // TODO: Handle 'response' of type GetBotVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.GetBotVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.getBotVersions({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBotVersionsResponse
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
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getBotVersions(request)`

- **OnSuccess**: <code>[GetBotVersionsResponse](src/models/get-bot-versions-response.ts)</code>
- **OnError**: throws <code>[Versions.GetBotVersionsError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.getBotVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBotVersionsResponse, Versions.GetBotVersionsError&gt;</code>, with `result.value` of type <code>[GetBotVersionsResponse](src/models/get-bot-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntent(request: Versions.GetIntentRequestParams, options?: RequestOptions): ApiPromise&lt;GetIntentResponse, Versions.GetIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an intent. In addition to the intent name, you must specify the intent version. This operation requires permissions to perform the lex:GetIntent action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getIntent({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type GetIntentResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.GetIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .getIntent({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIntentResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getIntent(request)`

- **OnSuccess**: <code>[GetIntentResponse](src/models/get-intent-response.ts)</code>
- **OnError**: throws <code>[Versions.GetIntentError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.getIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIntentResponse, Versions.GetIntentError&gt;</code>, with `result.value` of type <code>[GetIntentResponse](src/models/get-intent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntentVersions(request: Versions.GetIntentVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;GetIntentVersionsResponse, Versions.GetIntentVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of an intent. The GetIntentVersions operation returns an IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getIntentVersions({ name: "some example string" });
  // TODO: Handle 'response' of type GetIntentVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.GetIntentVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.getIntentVersions({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIntentVersionsResponse
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
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getIntentVersions(request)`

- **OnSuccess**: <code>[GetIntentVersionsResponse](src/models/get-intent-versions-response.ts)</code>
- **OnError**: throws <code>[Versions.GetIntentVersionsError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.getIntentVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIntentVersionsResponse, Versions.GetIntentVersionsError&gt;</code>, with `result.value` of type <code>[GetIntentVersionsResponse](src/models/get-intent-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSlotType(request: Versions.GetSlotTypeRequestParams, options?: RequestOptions): ApiPromise&lt;GetSlotTypeResponse, Versions.GetSlotTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getSlotType({
    name: "some example string",
    version: "some example string",
  });
  // TODO: Handle 'response' of type GetSlotTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.GetSlotTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .getSlotType({ name: "some example string", version: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSlotTypeResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>version</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getSlotType(request)`

- **OnSuccess**: <code>[GetSlotTypeResponse](src/models/get-slot-type-response.ts)</code>
- **OnError**: throws <code>[Versions.GetSlotTypeError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.getSlotType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSlotTypeResponse, Versions.GetSlotTypeError&gt;</code>, with `result.value` of type <code>[GetSlotTypeResponse](src/models/get-slot-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSlotTypeVersions(request: Versions.GetSlotTypeVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;GetSlotTypeVersionsResponse, Versions.GetSlotTypeVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getSlotTypeVersions({ name: "some example string" });
  // TODO: Handle 'response' of type GetSlotTypeVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.GetSlotTypeVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.getSlotTypeVersions({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSlotTypeVersionsResponse
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
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getSlotTypeVersions(request)`

- **OnSuccess**: <code>[GetSlotTypeVersionsResponse](src/models/get-slot-type-versions-response.ts)</code>
- **OnError**: throws <code>[Versions.GetSlotTypeVersionsError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.getSlotTypeVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSlotTypeVersionsResponse, Versions.GetSlotTypeVersionsError&gt;</code>, with `result.value` of type <code>[GetSlotTypeVersionsResponse](src/models/get-slot-type-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putBot(request: Versions.PutBotRequestParams, options?: RequestOptions): ApiPromise&lt;PutBotResponse, Versions.PutBotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see security-iam.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.putBot({
    name: "some example string",
    body: {
      name: "DocOrderPizzaBot",
      description: "Orders a pizza from a local pizzeria.",
      intents: [{ intentName: "DocOrderPizza", intentVersion: "$LATEST" }],
      clarificationPrompt: {
        messages: [
          {
            contentType: ContentType2.PlainText,
            content: "I'm sorry, I didn't hear that. Can you repeat what you just said?",
          },
          { contentType: ContentType2.PlainText, content: "Can you say that again?" },
        ],
        maxAttempts: 1,
      },
      abortStatement: {
        messages: [
          { contentType: ContentType2.PlainText, content: "I don't understand. Can you try again?" },
          { contentType: ContentType2.PlainText, content: "I'm sorry, I don't understand." },
        ],
      },
      idleSessionTtlInSeconds: 300,
      processBehavior: ProcessBehavior.Save,
      locale: Locale2.EnUs,
      childDirected: true,
    },
  });
  // TODO: Handle 'response' of type PutBotResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.PutBotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .putBot({
    name: "some example string",
    body: {
      name: "DocOrderPizzaBot",
      description: "Orders a pizza from a local pizzeria.",
      intents: [{ intentName: "DocOrderPizza", intentVersion: "$LATEST" }],
      clarificationPrompt: {
        messages: [
          {
            contentType: ContentType2.PlainText,
            content: "I'm sorry, I didn't hear that. Can you repeat what you just said?",
          },
          { contentType: ContentType2.PlainText, content: "Can you say that again?" },
        ],
        maxAttempts: 1,
      },
      abortStatement: {
        messages: [
          { contentType: ContentType2.PlainText, content: "I don't understand. Can you try again?" },
          { contentType: ContentType2.PlainText, content: "I'm sorry, I don't understand." },
        ],
      },
      idleSessionTtlInSeconds: 300,
      processBehavior: ProcessBehavior.Save,
      locale: Locale2.EnUs,
      childDirected: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutBotResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PutBotRequest](src/models/put-bot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.putBot(request)`

- **OnSuccess**: <code>[PutBotResponse](src/models/put-bot-response.ts)</code>
- **OnError**: throws <code>[Versions.PutBotError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.putBot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutBotResponse, Versions.PutBotError&gt;</code>, with `result.value` of type <code>[PutBotResponse](src/models/put-bot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putIntent(request: Versions.PutIntentRequestParams, options?: RequestOptions): ApiPromise&lt;PutIntentResponse, Versions.PutIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To create an intent or replace an existing intent, you must provide the following: Intent name. For example, OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. You can specify other optional information in the request, such as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.putIntent({
    name: "some example string",
    body: {
      name: "DocOrderPizza",
      description: "Order a pizza from a local pizzeria.",
      slots: [
        {
          name: "Type",
          description: "The type of pizza to order.",
          slotConstraint: SlotConstraint.Required,
          slotType: "DocPizzaType",
          slotTypeVersion: "$LATEST",
          valueElicitationPrompt: { messages: [{}, {}, {}], maxAttempts: 1 },
          priority: 1,
          sampleUtterances: ["Get me a {Type} pizza.", "A {Type} pizza please.", "I'd like a {Type} pizza."],
        },
        {
          name: "Crust",
          description: "The type of pizza crust to order.",
          slotConstraint: SlotConstraint.Required,
          slotType: "DocPizzaCrustType",
          slotTypeVersion: "$LATEST",
          valueElicitationPrompt: { messages: [{}, {}], maxAttempts: 1 },
          priority: 2,
          sampleUtterances: ["Make it a {Crust} crust.", "I'd like a {Crust} crust."],
        },
        {
          name: "Sauce",
          description: "The type of sauce to use on the pizza.",
          slotConstraint: SlotConstraint.Required,
          slotType: "DocPizzaSauceType",
          slotTypeVersion: "$LATEST",
          valueElicitationPrompt: { messages: [{}, {}], maxAttempts: 1 },
          priority: 3,
          sampleUtterances: ["Make it {Sauce} sauce.", "I'd like {Sauce} sauce."],
        },
      ],
      sampleUtterances: [
        "Order me a pizza.",
        "Order me a {Type} pizza.",
        "I want a {Crust} crust {Type} pizza",
        "I want a {Crust} crust {Type} pizza with {Sauce} sauce.",
      ],
      confirmationPrompt: {
        messages: [
          {
            contentType: ContentType2.PlainText,
            content: "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
          },
        ],
        maxAttempts: 1,
      },
      rejectionStatement: {
        messages: [
          { contentType: ContentType2.PlainText, content: "Ok, I'll cancel your order." },
          { contentType: ContentType2.PlainText, content: "I cancelled your order." },
        ],
      },
      conclusionStatement: {
        messages: [
          {
            contentType: ContentType2.PlainText,
            content: "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
          },
          {
            contentType: ContentType2.PlainText,
            content: "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
          },
        ],
        responseCard: "foo",
      },
      fulfillmentActivity: { type: TypeAmazonLexModelBuildingV2VersionsApi.ReturnIntent },
    },
  });
  // TODO: Handle 'response' of type PutIntentResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.PutIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .putIntent({
    name: "some example string",
    body: {
      name: "DocOrderPizza",
      description: "Order a pizza from a local pizzeria.",
      slots: [
        {
          name: "Type",
          description: "The type of pizza to order.",
          slotConstraint: SlotConstraint.Required,
          slotType: "DocPizzaType",
          slotTypeVersion: "$LATEST",
          valueElicitationPrompt: { messages: [{}, {}, {}], maxAttempts: 1 },
          priority: 1,
          sampleUtterances: ["Get me a {Type} pizza.", "A {Type} pizza please.", "I'd like a {Type} pizza."],
        },
        {
          name: "Crust",
          description: "The type of pizza crust to order.",
          slotConstraint: SlotConstraint.Required,
          slotType: "DocPizzaCrustType",
          slotTypeVersion: "$LATEST",
          valueElicitationPrompt: { messages: [{}, {}], maxAttempts: 1 },
          priority: 2,
          sampleUtterances: ["Make it a {Crust} crust.", "I'd like a {Crust} crust."],
        },
        {
          name: "Sauce",
          description: "The type of sauce to use on the pizza.",
          slotConstraint: SlotConstraint.Required,
          slotType: "DocPizzaSauceType",
          slotTypeVersion: "$LATEST",
          valueElicitationPrompt: { messages: [{}, {}], maxAttempts: 1 },
          priority: 3,
          sampleUtterances: ["Make it {Sauce} sauce.", "I'd like {Sauce} sauce."],
        },
      ],
      sampleUtterances: [
        "Order me a pizza.",
        "Order me a {Type} pizza.",
        "I want a {Crust} crust {Type} pizza",
        "I want a {Crust} crust {Type} pizza with {Sauce} sauce.",
      ],
      confirmationPrompt: {
        messages: [
          {
            contentType: ContentType2.PlainText,
            content: "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
          },
        ],
        maxAttempts: 1,
      },
      rejectionStatement: {
        messages: [
          { contentType: ContentType2.PlainText, content: "Ok, I'll cancel your order." },
          { contentType: ContentType2.PlainText, content: "I cancelled your order." },
        ],
      },
      conclusionStatement: {
        messages: [
          {
            contentType: ContentType2.PlainText,
            content: "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
          },
          {
            contentType: ContentType2.PlainText,
            content: "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
          },
        ],
        responseCard: "foo",
      },
      fulfillmentActivity: { type: TypeAmazonLexModelBuildingV2VersionsApi.ReturnIntent },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutIntentResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PutIntentRequest](src/models/put-intent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.putIntent(request)`

- **OnSuccess**: <code>[PutIntentResponse](src/models/put-intent-response.ts)</code>
- **OnError**: throws <code>[Versions.PutIntentError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.putIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutIntentResponse, Versions.PutIntentError&gt;</code>, with `result.value` of type <code>[PutIntentResponse](src/models/put-intent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putSlotType(request: Versions.PutSlotTypeRequestParams, options?: RequestOptions): ApiPromise&lt;PutSlotTypeResponse, Versions.PutSlotTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the lex:PutSlotType action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.putSlotType({
    name: "some example string",
    body: {
      name: "PizzaSauceType",
      description: "Available pizza sauces",
      enumerationValues: [{ value: "red" }, { value: "white" }],
    },
  });
  // TODO: Handle 'response' of type PutSlotTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Versions.PutSlotTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions
  .putSlotType({
    name: "some example string",
    body: {
      name: "PizzaSauceType",
      description: "Available pizza sauces",
      enumerationValues: [{ value: "red" }, { value: "white" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutSlotTypeResponse
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
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PutSlotTypeRequest](src/models/put-slot-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.putSlotType(request)`

- **OnSuccess**: <code>[PutSlotTypeResponse](src/models/put-slot-type-response.ts)</code>
- **OnError**: throws <code>[Versions.PutSlotTypeError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.putSlotType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutSlotTypeResponse, Versions.PutSlotTypeError&gt;</code>, with `result.value` of type <code>[PutSlotTypeResponse](src/models/put-slot-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonLexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

