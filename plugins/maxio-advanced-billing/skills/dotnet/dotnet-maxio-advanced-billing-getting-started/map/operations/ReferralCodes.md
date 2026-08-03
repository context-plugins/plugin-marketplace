# ReferralCodes — operations

Accessor: `client.ReferralCodes` · Source: `Api/ReferralCodes.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ValidateReferralCode
- **HTTP**: `GET /referral_codes/validate.json` (Production)
- **Notes**: Validates whether a referral code is valid and applicable within your site. This method is useful for validating referral codes that are entered by a customer. Referrals Documentation Full documentation on how to use the referrals feature in the Advanced Billing UI can be located here . Server Response If the referral code is valid the status code will be `200` and the referral code will be returned. If the referral code is invalid, a `404` response will be returned.
- **Signature**: `ValidateReferralCode(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`
- **Returns**: `ReferralValidationResponse`
- **Error**: `SdkException<ValidateReferralCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleStringErrorResponse(out SingleStringErrorResponse)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
