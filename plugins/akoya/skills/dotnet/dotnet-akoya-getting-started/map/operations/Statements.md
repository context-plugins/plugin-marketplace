# Statements — operations

Accessor: `client.Statements` · Source: `Api/Statements.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetStatementList
- **HTTP**: `GET /statements/{version}/{providerId}/{accountId}` (Default (sandbox-products))
- **Notes**: Retrieve a list of available statements for the end-user's consented accounts. You may request a date range of up to two years of historical statements (maximum date ranges vary by provider). The paginated response includes an array of statement information with the end-user's account id and statement details such as statement id, date, description, and status. The results also include links to GET the statement image.
- **Signature**: `GetStatementList(DateTimeOffset? startTime, DateTimeOffset? endTime, XAkoyaInteractionType? xAkoyaInteractionType, string accountId = ":accountId", string version = "v2", string providerId = "mikomo", string? offset = "0", int? limit = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - `xAkoyaInteractionType` — nullable, no default → **must pass explicitly**
  - defaults: `accountId` = ":accountId", `version` = "v2", `providerId` = "mikomo", `offset` = "0", `limit` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `AnArrayOfStatements`
- **Error**: `SdkException<GetStatementListError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEntity(out ErrorEntity)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStatements
- **HTTP**: `GET /statements/{version}/{providerId}/{accountId}/{statementId}` (Default (sandbox-products))
- **Notes**: Retrieve a specific account statement file. Use HTTP Accept request-header to specify desired content types. For the initial launch, only PDF statements are supported. PDFs are returned in the response. cURL request We recommend using the auto-generated cURL request with the {idToken}, accountId, providerId, statementId, and version with an added cURL parameter to return the output to a file. For example: curl --request GET --url https://sandbox-products.ddp.akoya.com/statements/v2/mikomo/513815781465/P9CvLPKDaFRMbNDkhu1 --header "accept: application/pdf" --header "authorization: Bearer {idtoken}" --output example.pdf
- **Signature**: `GetStatements(XAkoyaInteractionType? xAkoyaInteractionType, string accountId = ":accountId", string version = "v2", string providerId = "mikomo", string statementId = "statementId", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xAkoyaInteractionType` — nullable, no default → **must pass explicitly**
  - defaults: `accountId` = ":accountId", `version` = "v2", `providerId` = "mikomo", `statementId` = "statementId", `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEntity(out ErrorEntity)` [400, 404, 406, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
