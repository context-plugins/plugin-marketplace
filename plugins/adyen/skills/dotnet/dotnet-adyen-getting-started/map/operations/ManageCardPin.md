# ManageCardPin — operations

Accessor: `client.ManageCardPin` · Source: `Api/ManageCardPin.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPublicKey
- **HTTP**: `GET /publicKey` (Default13 (balanceplatform-api-test))
- **Notes**: Get an RSA ) public key to encrypt or decrypt card data. You need the RSA public key to generate the `encryptedKey` required to: - Change a PIN . - Reveal a PIN . - Reveal a PAN .
- **Signature**: `GetPublicKey(string? purpose, string? format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `purpose` — nullable, no default → **must pass explicitly**
  - `format` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `purpose` ← `purpose`, `format` ← `format`
- **Returns**: `PublicKeyResponse`
- **Error**: `SdkException<GetPublicKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPinsChange
- **HTTP**: `POST /pins/change` (Default13 (balanceplatform-api-test))
- **Notes**: Changes the personal identification number (PIN) of a specified card. To make this request, your API credential must have the following role: * Bank Issuing PIN Change Webservice role
- **Signature**: `PostPinsChange(PinChangeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PinChangeResponse`
- **Error**: `SdkException<PostPinsChangeError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPinsReveal
- **HTTP**: `POST /pins/reveal` (Default13 (balanceplatform-api-test))
- **Notes**: Returns an encrypted PIN block that contains the PIN of a specified card. You can use the decrypted data to reveal the PIN in your user interface. To make this request, your API credential must have the following role: * Bank Issuing PIN Reveal Webservice role
- **Signature**: `PostPinsReveal(RevealPinRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RevealPinResponse`
- **Error**: `SdkException<PostPinsRevealError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
