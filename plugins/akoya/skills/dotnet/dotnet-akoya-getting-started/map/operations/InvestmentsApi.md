# InvestmentsApi — operations

Accessor: `client.InvestmentsApi` · Source: `Api/InvestmentsApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccounts
- **HTTP**: `GET /accounts/{version}/{providerId}` (Default (sandbox-products))
- **Notes**: Get detailed account information that includes Akoya products Account Info and Balances for all account types (annunity, deposit, insurance, investments, line of credit, and loan) and adds the Investments product to investment accounts including contributions, holdings, vesting information, and more. To view the response schema, select the `200` response below. Then pick an option for annuity, deposit, insurance, investment, loan, and line of credit account types. For an example payload response, see the `200` example response below the `Try it` feature. The example is from an investment account but all account types are supported and returned by this endpoint. &gt; 🛑 &gt; &gt; The *id_token* should be used as the bearer token with this call. Use the `mode` query param to receive FDX-aligned, standardized data values (Beta). For example: `https://sandbox-products.ddp.akoya.com/accounts/v2/mikomo?mode=standard` `mode` is available in both sandbox and production. `mode` is supported by a subset of providers. Log into the Data Recipient Hub and click here to view a list of all providers supporting the `mode` parameter.
- **Signature**: `GetAccounts(Mode? mode, XAkoyaInteractionType? xAkoyaInteractionType, string version = "v2", string providerId = "mikomo", string? accountIds = ":accountId", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mode` — nullable, no default → **must pass explicitly**
  - `xAkoyaInteractionType` — nullable, no default → **must pass explicitly**
  - defaults: `version` = "v2", `providerId` = "mikomo", `accountIds` = ":accountId", `requestOptions` = null
- **Query params (wire ← C#)**: `accountIds` ← `accountIds`, `mode` ← `mode`
- **Returns**: `Investments`
- **Error**: `SdkException<GetAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEntity(out ErrorEntity)` [400, 401, 404, 406, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
