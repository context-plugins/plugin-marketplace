# Records (`AccessTokenError` … `StationLocatorUnauthorizedError`)

**Exact coverage: `AccessTokenError` through `StationLocatorUnauthorizedError`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `ShellSmartPayApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `AccessTokenError` | — | `ErrorCode (errorCode): string?`, `Error (error): string?` | `Models/AccessTokenError.cs` |
| `AccessTokenErrorError` | — | `ErrorCode (errorCode): string?`, `Error (error): string?` | `Models/AccessTokenErrorError.cs` |
| `AccessTokenResponse` | — | `AccessToken (access_token): string?`, `ExpiresIn (expires_in): string?`, `TokenType (token_type): string? = "Bearer"` | `Models/AccessTokenResponse.cs` |
| `AroundLocationArray` | Amenities The table below lists all the different types of amenities: | Code | Description | ------- | -------- | 1 | ATM | 2 | Water Closet or Toilet | 3 | Lottery | 4 | Select | 5 | Shop | 6 | Truck Friendly | 11 | Bottled Gas | 12 | PB Gas | 13 | Disabled Facilities | 14 | Credit card | 16 | Loyalty Card (AIr Miles for NL) | 17 | WiFi | 19 | … | `Data (data): IReadOnlyList<Datum> !req` | `Models/AroundLocationArray.cs` |
| `CancelFuelingErrorResponse` | Digital Payments – Errors This section details the structure of the response Body vs. the different types of errors that could be returned when Digital Payments system responds with a 400 Response Code. | Error Code | Error Description | Suggested message to end user | |- |- |- | | 9342 | Transaction not cancelled, Txn number unknown | Oops sorry! … | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?`, `Errors (errors): IReadOnlyList<MppError>?` | `Models/CancelFuelingErrorResponse.cs` |
| `CancelFuelingErrorResponseError` | Digital Payments – Errors This section details the structure of the response Body vs. the different types of errors that could be returned when Digital Payments system responds with a 400 Response Code. | Error Code | Error Description | Suggested message to end user | |- |- |- | | 9342 | Transaction not cancelled, Txn number unknown | Oops sorry! … | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?`, `Errors (errors): IReadOnlyList<MppError>?` | `Models/CancelFuelingErrorResponseError.cs` |
| `CancelFuelingRequest` | — | `MppTransactionId (mppTransactionId): string?`, `ReasonCode (reasonCode): string?` | `Models/CancelFuelingRequest.cs` |
| `CollectingCompany` | — | `ColCoId (ColCoId): string !req` | `Models/CollectingCompany.cs` |
| `Datum` | — | `Id (id): string?`, `Type (type): int?`, `Name (name): string?`, `Addr (addr): string?`, `Lat (lat): double?`, `Lon (lon): double?`, `Amen (amen): IReadOnlyList<int>?`, `Fuel (fuel): IReadOnlyList<int>?`, `Loc (loc): Loc?`, `MppStationId (mpp_station_id): string?`, `DoubleSiteId (double_site_id): string?`, `OpeningHours (opening_hours): IReadOnlyList<OpeningHour>?`, `Telephone (telephone): string?`, `AuthorisationCode (authorisation_code): string?`, `MpPreauth (mp_preauth): int?` | `Models/Datum.cs` |
| `Detail` | — | `Errorcode (errorcode): string?` | `Models/Detail.cs` |
| `DeviceDetail` | — | `DeviceId (deviceId): string?`, `Model (model): string?`, `OsVersion (osVersion): string?`, `OtherDeviceInformation (otherDeviceInformation): string?` | `Models/DeviceDetail.cs` |
| `Fault` | — | `Faultstring (faultstring): string?`, `Detail (detail): Detail?` | `Models/Fault.cs` |
| `FaultResponse` | An error response. | `Fault (fault): Fault?` | `Models/FaultResponse.cs` |
| `FinaliseFuelingRequest` | — | `SiteName (siteName): string?`, `Timestamp (timestamp): long?`, `VolumeQuantity (volumeQuantity): double?`, `VolumeUnit (volumeUnit): string?`, `FinalPrice (finalPrice): double?`, `Currency (currency): string?`, `Status (status): string?`, `SiteAddress (siteAddress): string?`, `OriginalPrice (originalPrice): double?`, `Discount (discount): double?`, `Payment (payment): Payment?`, `Products (products): IReadOnlyList<Product>?`, `MppTransactionId (mppTransactionId): string?` | `Models/FinaliseFuelingRequest.cs` |
| `Loc` | Object containing address details/elements | `Street (street): string?`, `Pc (pc): string?`, `City (city): string?`, `Region (region): string?`, `Country (country): string !req`, `Ccode (ccode): string !req` | `Models/Loc.cs` |
| `LoyaltyDetails` | — | `LoyaltyId (loyaltyId): string !req`, `LoyaltyType (loyaltyType): string !req` | `Models/LoyaltyDetails.cs` |
| `MobilePaymentRegistrationRequest` | — | `ReferenceId (referenceId): string !req`, `Pan (pan): string !req`, `PanExpiry (panExpiry): string !req`, `Period (period): int !req`, `AccountId (AccountId): string !req`, `PayerId (PayerId): string !req`, `ColCoId (ColCoId): string !req`, `CollectingCompanies (CollectingCompanies): IReadOnlyList<CollectingCompany> !req` | `Models/MobilePaymentRegistrationRequest.cs` |
| `MppAccesTokenErrorResponse` | — | `Error (error): string !req`, `ErrorCode (error_code): string !req`, `ErrorDescription (error_description): string?` | `Models/MppAccesTokenErrorResponse.cs` |
| `MppAccesTokenErrorResponseError` | — | `Error (error): string !req`, `ErrorCode (error_code): string !req`, `ErrorDescription (error_description): string?` | `Models/MppAccesTokenErrorResponseError.cs` |
| `MppAccesTokenResponse` | — | `AccessToken (access_token): string?`, `TokenType (token_type): string? = "bearer"`, `ExpiresIn (expires_in): long?`, `Scope (scope): string? = "basic openid"` | `Models/MppAccesTokenResponse.cs` |
| `MppError` | — | `Message (message): string?`, `Reason (reason): string?`, `Subject (subject): string?`, `SubjectType (subjectType): string?`, `Type (type): string?` | `Models/MppError.cs` |
| `OpeningHour` | — | `ClosingFromHours (Closing_From_Hours): string?`, `ClosingFromMinutes (Closing_From_Minutes): string?`, `ClosingToHours (Closing_To_Hours): string?`, `ClosingToMinutes (Closing_To_Minutes): string?`, `FromDay (From_Day): string?`, `OpeningFromHours (Opening_From_Hours): string?`, `OpeningFromMinutes (Opening_From_Minutes): string?`, `OpeningToHours (Opening_To_Hours): string?`, `OpeningToMinutes (Opening_To_Minutes): string?`, `ToDay (To_Day): string?` | `Models/OpeningHour.cs` |
| `Payment` | — | `Method (method): string?`, `CardId (cardId): string?`, `CardLastDigits (cardLastDigits): string?` | `Models/Payment.cs` |
| `PaymentDetails` | Object containing Payment details | `PaymentCategory (paymentCategory): string?`, `PaymentMethodId (paymentMethodId): string !req`, `PaymentProperties (paymentProperties): PaymentProperties !req` | `Models/PaymentDetails.cs` |
| `PaymentEnablementErrorResponse` | — | `Code (code): int?`, `Message (message): string?` | `Models/PaymentEnablementErrorResponse.cs` |
| `PaymentEnablementErrorResponseError` | — | `Code (code): int?`, `Message (message): string?` | `Models/PaymentEnablementErrorResponseError.cs` |
| `PaymentEnablementResponse` | — | `DpanLast4 (dpanLast4): string !req` | `Models/PaymentEnablementResponse.cs` |
| `PaymentProperties` | Object containing Payment Property details Please note: All the attributes are optional as they serve all payment methods (i.e. different payment methods require different fields to be filled/mandated). As a result, some of these fields will be mandatory depending on the selected payment method and the API will return an error if they are not … | `PaymentType (paymentType): string?`, `ClientMetadataId (clientMetadataId): string?`, `Token (token): string?`, `Identifier (identifier): string?`, `Network (network): string?`, `CardIdentifier (cardIdentifier): string !req`, `Odometer (odometer): string?`, `FleetId (fleetId): string?`, `ExternalRefId (externalRefId): string?` | `Models/PaymentProperties.cs` |
| `PrepareFuelingRequest` | — | `Latitude (latitude): double !req`, `Longitude (longitude): double !req`, `MaximumFuelingAmount (maximumFuelingAmount): double?`, `StationId (stationId): string !req`, `PumpId (pumpId): string !req`, `LoyaltyDetails (loyaltyDetails): IReadOnlyList<LoyaltyDetails>?`, `SourceApplication (sourceApplication): string !req`, `DeviceType (deviceType): string?`, `PaymentDetails (paymentDetails): PaymentDetails !req`, `DeviceDetails (deviceDetails): IReadOnlyList<DeviceDetail>?` | `Models/PrepareFuelingRequest.cs` |
| `PrepareFuelingResponse` | The response of prepare fueling returns | `MppTransactionId (mppTransactionId): string !req`, `Products (products): IReadOnlyList<string>?` | `Models/PrepareFuelingResponse.cs` |
| `Product` | — | `ProductId (productId): string?`, `ProductName (productName): string?`, `UnitPrice (unitPrice): double?` | `Models/Product.cs` |
| `StationLocatorBadRequest` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorBadRequest.cs` |
| `StationLocatorBadRequestError` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorBadRequestError.cs` |
| `StationLocatorForbidden` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorForbidden.cs` |
| `StationLocatorForbiddenError` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorForbiddenError.cs` |
| `StationLocatorInternalServerError` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorInternalServerError.cs` |
| `StationLocatorInternalServerErrorError` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorInternalServerErrorError.cs` |
| `StationLocatorNotFound` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorNotFound.cs` |
| `StationLocatorNotFoundError` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorNotFoundError.cs` |
| `StationLocatorUnauthorized` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorUnauthorized.cs` |
| `StationLocatorUnauthorizedError` | — | `ErrorCode (errorCode): string?`, `ErrorDescription (errorDescription): string?` | `Models/StationLocatorUnauthorizedError.cs` |
