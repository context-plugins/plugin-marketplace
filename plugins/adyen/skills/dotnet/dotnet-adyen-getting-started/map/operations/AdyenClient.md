<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdyenClient — operations

Accessor: `client` · Source: `AdyenClient.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AbortRequest
- **Server group**: `Default24`
- **Signature**: `AbortRequest(AbortRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AbortRequest` | `Models/AbortRequest.cs` |

### AdminRequest
- **Server group**: `Default24`
- **Signature**: `AdminRequest(AdminRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AdminResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AdminRequest` | `Models/AdminRequest.cs` |
| `AdminResponse` | `Models/AdminResponse.cs` |

### BalanceInquiryRequest
- **Server group**: `Default24`
- **Signature**: `BalanceInquiryRequest(BalanceInquiryRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BalanceInquiryResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BalanceInquiryRequest` | `Models/BalanceInquiryRequest.cs` |
| `BalanceInquiryResponse` | `Models/BalanceInquiryResponse.cs` |

### CardAcquisitionRequest
- **Server group**: `Default24`
- **Signature**: `CardAcquisitionRequest(CardAcquisitionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CardAcquisitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CardAcquisitionRequest` | `Models/CardAcquisitionRequest.cs` |
| `CardAcquisitionResponse` | `Models/CardAcquisitionResponse.cs` |

### CardReaderApduRequest
- **Server group**: `Default24`
- **Signature**: `CardReaderApduRequest(CardReaderApduRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CardReaderApduResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CardReaderApduRequest` | `Models/CardReaderApduRequest.cs` |
| `CardReaderApduResponse` | `Models/CardReaderApduResponse.cs` |

### DiagnosisRequest
- **Server group**: `Default24`
- **Signature**: `DiagnosisRequest(DiagnosisRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DiagnosisResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DiagnosisRequest` | `Models/DiagnosisRequest.cs` |
| `DiagnosisResponse` | `Models/DiagnosisResponse.cs` |

### DisplayRequest
- **Server group**: `Default24`
- **Signature**: `DisplayRequest(DisplayRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DisplayResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DisplayRequest` | `Models/DisplayRequest.cs` |
| `DisplayResponse` | `Models/DisplayResponse.cs` |

### EnableServiceRequest
- **Server group**: `Default24`
- **Signature**: `EnableServiceRequest(EnableServiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `EnableServiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EnableServiceRequest` | `Models/EnableServiceRequest.cs` |
| `EnableServiceResponse` | `Models/EnableServiceResponse.cs` |

### GetTotalsRequest
- **Server group**: `Default24`
- **Signature**: `GetTotalsRequest(GetTotalsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetTotalsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetTotalsRequest` | `Models/GetTotalsRequest.cs` |
| `GetTotalsResponse` | `Models/GetTotalsResponse.cs` |

### InputRequest
- **Server group**: `Default24`
- **Signature**: `InputRequest(InputRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `InputResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InputRequest` | `Models/InputRequest.cs` |
| `InputResponse` | `Models/InputResponse.cs` |

### LoginRequest
- **Server group**: `Default24`
- **Signature**: `LoginRequest(LoginRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `LoginResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `LoginRequest` | `Models/LoginRequest.cs` |
| `LoginResponse` | `Models/LoginResponse.cs` |

### LogoutRequest
- **Server group**: `Default24`
- **Signature**: `LogoutRequest(LogoutRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `LogoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `LogoutRequest` | `Models/LogoutRequest.cs` |
| `LogoutResponse` | `Models/LogoutResponse.cs` |

### PaymentRequest
- **Server group**: `Default24`
- **Signature**: `PaymentRequest(PaymentRequest2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentResponse4`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentRequest2` | `Models/PaymentRequest2.cs` |
| `PaymentResponse4` | `Models/PaymentResponse4.cs` |

### PrintRequest
- **Server group**: `Default24`
- **Signature**: `PrintRequest(PrintRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PrintResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PrintRequest` | `Models/PrintRequest.cs` |
| `PrintResponse` | `Models/PrintResponse.cs` |

### ReconciliationRequest
- **Server group**: `Default24`
- **Signature**: `ReconciliationRequest(ReconciliationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ReconciliationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReconciliationRequest` | `Models/ReconciliationRequest.cs` |
| `ReconciliationResponse` | `Models/ReconciliationResponse.cs` |

### ReversalRequest
- **Server group**: `Default24`
- **Signature**: `ReversalRequest(ReversalRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ReversalResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReversalRequest` | `Models/ReversalRequest.cs` |
| `ReversalResponse` | `Models/ReversalResponse.cs` |

### StoredValueRequest
- **Server group**: `Default24`
- **Signature**: `StoredValueRequest(StoredValueRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StoredValueRequest` | `Models/StoredValueRequest.cs` |
| `StoredValueResponse` | `Models/StoredValueResponse.cs` |

### TransactionStatusRequest
- **Server group**: `Default24`
- **Signature**: `TransactionStatusRequest(TransactionStatusRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransactionStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TransactionStatusRequest` | `Models/TransactionStatusRequest.cs` |
| `TransactionStatusResponse` | `Models/TransactionStatusResponse.cs` |

