# Programs — operations

Accessor: `client.Programs` · Source: `Api/Programs.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPrograms
- **HTTP**: `GET /programs` (Api (api))
- **Notes**: Fetch a list of programs that supports filtering , sorting , and pagination through existing mechanisms. Programs define the configuration and capabilities available to users. See Program Types for details on the different program models.
- **Signature**: `GetPrograms(string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `ProgramListResult`
- **Error**: `SdkException<GetProgramsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProgramsProgToken
- **HTTP**: `GET /programs/{program-token}` (Api (api))
- **Notes**: Fetch a single program by its `prog-` token . Returns the program configuration, capabilities, and associated agreements . See Program Types for details on the different program models.
- **Signature**: `GetProgramsProgToken(string programToken = "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `programToken` = "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `ProgramResult`
- **Error**: `SdkException<GetProgramsProgTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
