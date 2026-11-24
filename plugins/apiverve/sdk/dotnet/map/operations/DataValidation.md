<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataValidation — operations

Accessor: `client.DataValidation` · Source: `src/ApiVerve/Api/DataValidation.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Cardvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Cardvalidator(CardvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Number`
- **Query params (wire ← C#)**: `number` ← `Number`
- **Returns**: `V1CardvalidatorResponse`
- **Error**: `ApiException<CardvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CardvalidatorRequest` | `src/ApiVerve/Requests/DataValidation/CardvalidatorRequest.cs` |
| `V1CardvalidatorResponse` | `src/ApiVerve/Models/V1CardvalidatorResponse.cs` |
| `CardvalidatorError` | `src/ApiVerve/Errors/CardvalidatorError.cs` |

### Disposablephone

- **Auth**: `options.ApiKey`
- **Signature**: `Disposablephone(DisposablephoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Phone`
- **Query params (wire ← C#)**: `phone` ← `Phone`
- **Returns**: `V1DisposablephoneResponse`
- **Error**: `ApiException<DisposablephoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisposablephoneRequest` | `src/ApiVerve/Requests/DataValidation/DisposablephoneRequest.cs` |
| `V1DisposablephoneResponse` | `src/ApiVerve/Models/V1DisposablephoneResponse.cs` |
| `DisposablephoneError` | `src/ApiVerve/Errors/DisposablephoneError.cs` |

### Emaildisposablechecker

- **Auth**: `options.ApiKey`
- **Signature**: `Emaildisposablechecker(EmaildisposablecheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Email`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V1EmaildisposablecheckerResponse`
- **Error**: `ApiException<EmaildisposablecheckerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EmaildisposablecheckerRequest` | `src/ApiVerve/Requests/DataValidation/EmaildisposablecheckerRequest.cs` |
| `V1EmaildisposablecheckerResponse` | `src/ApiVerve/Models/V1EmaildisposablecheckerResponse.cs` |
| `EmaildisposablecheckerError` | `src/ApiVerve/Errors/EmaildisposablecheckerError.cs` |

### Emailvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Emailvalidator(EmailvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Email`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V1EmailvalidatorResponse`
- **Error**: `ApiException<EmailvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EmailvalidatorRequest` | `src/ApiVerve/Requests/DataValidation/EmailvalidatorRequest.cs` |
| `V1EmailvalidatorResponse` | `src/ApiVerve/Models/V1EmailvalidatorResponse.cs` |
| `EmailvalidatorError` | `src/ApiVerve/Errors/EmailvalidatorError.cs` |

### Passwordstrength

- **Auth**: `options.ApiKey`
- **Signature**: `Passwordstrength(PasswordstrengthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Password`
- **Query params (wire ← C#)**: `password` ← `Password`
- **Returns**: `V1PasswordstrengthResponse`
- **Error**: `ApiException<PasswordstrengthError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PasswordstrengthRequest` | `src/ApiVerve/Requests/DataValidation/PasswordstrengthRequest.cs` |
| `V1PasswordstrengthResponse` | `src/ApiVerve/Models/V1PasswordstrengthResponse.cs` |
| `PasswordstrengthError` | `src/ApiVerve/Errors/PasswordstrengthError.cs` |

### Phonenumbervalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Phonenumbervalidator(PhonenumbervalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Number`, `Country`
- **Query params (wire ← C#)**: `number` ← `Number`, `country` ← `Country`
- **Returns**: `V1PhonenumbervalidatorResponse`
- **Error**: `ApiException<PhonenumbervalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PhonenumbervalidatorRequest` | `src/ApiVerve/Requests/DataValidation/PhonenumbervalidatorRequest.cs` |
| `V1PhonenumbervalidatorResponse` | `src/ApiVerve/Models/V1PhonenumbervalidatorResponse.cs` |
| `PhonenumbervalidatorError` | `src/ApiVerve/Errors/PhonenumbervalidatorError.cs` |

### Seovalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Seovalidator(SeovalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SeovalidatorResponse`
- **Error**: `ApiException<SeovalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SeovalidatorRequest` | `src/ApiVerve/Requests/DataValidation/SeovalidatorRequest.cs` |
| `V1SeovalidatorRequest` | `src/ApiVerve/Models/V1SeovalidatorRequest.cs` |
| `V1SeovalidatorResponse` | `src/ApiVerve/Models/V1SeovalidatorResponse.cs` |
| `SeovalidatorError` | `src/ApiVerve/Errors/SeovalidatorError.cs` |

### Spamdetector

- **Auth**: `options.ApiKey`
- **Signature**: `Spamdetector(SpamdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SpamdetectorResponse`
- **Error**: `ApiException<SpamdetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpamdetectorRequest` | `src/ApiVerve/Requests/DataValidation/SpamdetectorRequest.cs` |
| `V1SpamdetectorRequest` | `src/ApiVerve/Models/V1SpamdetectorRequest.cs` |
| `V1SpamdetectorResponse` | `src/ApiVerve/Models/V1SpamdetectorResponse.cs` |
| `SpamdetectorError` | `src/ApiVerve/Errors/SpamdetectorError.cs` |

### Usernameprofanity

- **Auth**: `options.ApiKey`
- **Signature**: `Usernameprofanity(UsernameprofanityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`
- **Query params (wire ← C#)**: `username` ← `Username`
- **Returns**: `V1UsernameprofanityResponse`
- **Error**: `ApiException<UsernameprofanityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsernameprofanityRequest` | `src/ApiVerve/Requests/DataValidation/UsernameprofanityRequest.cs` |
| `V1UsernameprofanityResponse` | `src/ApiVerve/Models/V1UsernameprofanityResponse.cs` |
| `UsernameprofanityError` | `src/ApiVerve/Errors/UsernameprofanityError.cs` |

