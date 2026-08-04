# Agreements — operations

Accessor: `client.Agreements` · Source: `Api/Agreements.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetProgramsProgTokenAgreements
- **HTTP**: `GET /programs/{program-token}/agreements` (Api (api))
- **Notes**: Fetch a list of program agreements that supports filtering , sorting , and pagination through existing mechanisms. Program agreements must be accepted by users during onboarding before they can be fully activated.
- **Signature**: `GetProgramsProgTokenAgreements(string programToken = "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `programToken` = "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `AgreementListResult`
- **Error**: `SdkException<GetProgramsProgTokenAgreementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProgramsProgTokenAgreementsAgmtToken
- **HTTP**: `GET /programs/{program-token}/agreements/{agreement-token}` (Api (api))
- **Notes**: Fetch a single program agreement by its `agmt-` token . Returns the agreement title, content, and acceptance requirements.
- **Signature**: `GetProgramsProgTokenAgreementsAgmtToken(string programToken = "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", string agreementToken = "agmt-b33d420f-6c1b-4a93-9455-d6585552b97d", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `programToken` = "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", `agreementToken` = "agmt-b33d420f-6c1b-4a93-9455-d6585552b97d", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `AgreementResult`
- **Error**: `SdkException<GetProgramsProgTokenAgreementsAgmtTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUsersUserTokenAgreementsAgmtToken
- **HTTP**: `POST /users/{user-token}/agreements/{agreement-token}` (Api (api))
- **Notes**: Accept a single program agreement on behalf of a user. Certain program agreements must be accepted before the user can be fully activated or before specific resources like prepaid cards can be issued. See Onboard Users for details on agreement acceptance during onboarding.
- **Signature**: `PostUsersUserTokenAgreementsAgmtToken(string userToken, string agreementToken = "agmt-b33d420f-6c1b-4a93-9455-d6585552b97d", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `agreementToken` = "agmt-b33d420f-6c1b-4a93-9455-d6585552b97d", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostUsersUserTokenAgreementsAgmtTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
