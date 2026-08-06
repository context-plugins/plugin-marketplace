# Records (`Accessibility` … `UnauthorizedError`)

**Exact coverage: `Accessibility` through `UnauthorizedError`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `ShellEv.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `Accessibility` | Accessibility of the Location | `Status (status): AccessibilityStatus?`, `Remark (remark): string?` | `Models/Accessibility.cs` |
| `ActiveResponse200Json` | — | `RequestId (requestId): Guid !req`, `Status (status): GetChargeSessionRetrieveResponse200JsonStatus !req`, `Data (data): IReadOnlyList<DataActive>?` | `Models/ActiveResponse200Json.cs` |
| `Address` | Address of the Shell Recharge Location | `StreetAndNumber (streetAndNumber): string?`, `PostalCode (postalCode): string?`, `City (city): string?`, `Country (country): string?` | `Models/Address.cs` |
| `BadRequest` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<BadRequestErrMsg>?` | `Models/BadRequest.cs` |
| `BadRequestErrMsg` | — | `Code (code): string?`, `Message (message): string?`, `Description (description): string?`, `Details (details): IReadOnlyList<string>?` | `Models/BadRequestErrMsg.cs` |
| `BadRequestError` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<BadRequestErrMsg>?` | `Models/BadRequestError.cs` |
| `ChargeError` | — | `Code (code): string?`, `Message (message): string?` | `Models/ChargeError.cs` |
| `ChargeRetrieveState` | — | `Status (status): string?`, `Error (error): ChargeError?` | `Models/ChargeRetrieveState.cs` |
| `ChargesessionStartBody` | — | `EvChargeNumber (evChargeNumber): string !req`, `EvseId (evseId): string !req` | `Models/ChargesessionStartBody.cs` |
| `ConnectorVo` | An EVSE can have one or many Connectors. Each Connector will normally have a different socket / cable and only one can be used to charge at a time. | `Uid (uid): int?`, `ExternalId (externalId): string?`, `ConnectorType (connectorType): ConnectorVoconnectorType?`, `ElectricalProperties (electricalProperties): ElectricalProperties?`, `FixedCable (fixedCable): bool?`, `Tariff (tariff): Tariff?`, `Updated (updated): string?`, `UpdatedBy (updatedBy): ConnectorVoupdatedBy?`, `Deleted (deleted): string?` | `Models/ConnectorVo.cs` |
| `Coordinates` | Coordinates of the Shell Recharge Site Location | `Latitude (latitude): double?`, `Longitude (longitude): double?` | `Models/Coordinates.cs` |
| `DataActive` | — | `Id (id): Guid?`, `UserId (userId): string?`, `EmaId (emaId): string?`, `EvseId (evseId): string?`, `StartedAt (startedAt): DateTimeOffset?`, `StoppedAt (stoppedAt): DateTimeOffset?`, `SessionState (SessionState): ChargeRetrieveState?`, `LastUpdated (lastUpdated): string?` | `Models/DataActive.cs` |
| `DataRetrieve` | — | `Id (id): Guid?`, `UserId (userId): string?`, `EmaId (emaId): string?`, `EvseId (evseId): string?`, `LastUpdated (lastUpdated): string?`, `StartedAt (startedAt): DateTimeOffset?`, `StoppedAt (stoppedAt): DateTimeOffset?`, `SessionState (sessionState): ChargeRetrieveState?` | `Models/DataRetrieve.cs` |
| `ElectricalProperties` | Electrical Properties of the Connector | `PowerType (powerType): ElectricalPropertiesPowerType?`, `Voltage (voltage): double?`, `Amperage (amperage): double?`, `MaxElectricPower (maxElectricPower): double?` | `Models/ElectricalProperties.cs` |
| `EvseVo` | Each Location will contain one or more EVSEs (Electric Vehicle Supply Equipment). Each EVSE is capable of charging one car at a time. | `Uid (uid): int?`, `ExternalId (externalId): string?`, `EvseId (evseId): string?`, `Status (status): EvseVostatus?`, `Connectors (connectors): IReadOnlyList<ConnectorVo>?`, `AuthorizationMethods (authorizationMethods): EvseVoauthorizationMethods?`, `Updated (updated): string?`, `Deleted (deleted): string?`, `PhysicalReference (physicalReference): string?` | `Models/EvseVo.cs` |
| `GetChargeSessionRetrieveResponse200Json` | — | `RequestId (requestId): Guid !req`, `Status (status): GetChargeSessionRetrieveResponse200JsonStatus !req`, `Data (data): IReadOnlyList<DataRetrieve>?` | `Models/GetChargeSessionRetrieveResponse200Json.cs` |
| `InlineResponse202` | — | `RequestId (requestId): Guid !req`, `Status (status): GetChargeSessionRetrieveResponse200JsonStatus !req`, `Data (data): IReadOnlyList<InlineResponse202Data> !req` | `Models/InlineResponse202.cs` |
| `InlineResponse2021` | — | `RequestId (requestId): Guid !req`, `Status (status): GetChargeSessionRetrieveResponse200JsonStatus !req` | `Models/InlineResponse2021.cs` |
| `InlineResponse202Data` | — | `SessionId (sessionId): string?` | `Models/InlineResponse202Data.cs` |
| `InternalErrorObject` | — | `Code (code): string?`, `Message (message): string?`, `Description (description): string?` | `Models/InternalErrorObject.cs` |
| `InternalServerError` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<InternalErrorObject>?`, `Details (details): IReadOnlyList<string>?` | `Models/InternalServerError.cs` |
| `InternalServerErrorError` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<InternalErrorObject>?`, `Details (details): IReadOnlyList<string>?` | `Models/InternalServerErrorError.cs` |
| `LocationResponeObject` | — | `Uid (uid): int?`, `ExternalId (externalId): string?`, `Coordinates (coordinates): Coordinates?`, `OperatorName (operatorName): string?`, `Address (address): Address?`, `Accessibility (accessibility): Accessibility?`, `Evses (evses): IReadOnlyList<EvseVo>?`, `OpeningHours (openingHours): IReadOnlyList<OpeningHoursObject>?`, `Updated (updated): string?`, `OperatorComment (operatorComment): string?`, `LocationType (locationType): string?` | `Models/LocationResponeObject.cs` |
| `MultiLocationMarker` | A Marker is a place on the map that represent multiple Locations at the same spot | `MarkerType (markerType): string !req`, `UniqueKey (uniqueKey): string?`, `Coordinates (coordinates): Coordinates?`, `LocationCount (locationCount): double?`, `EvseCount (evseCount): double?`, `MaxPower (maxPower): double?`, `GeoHash (geoHash): string?` | `Models/MultiLocationMarker.cs` |
| `NotFound` | Requested resource path not available it will provides the error in OpenAPI spec mentioned format, if there is any change in base URL then respective platform error message will be populated. | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<NotFoundErrMsg>?` | `Models/NotFound.cs` |
| `NotFoundErrMsg` | — | `Code (code): string?`, `Message (message): string?`, `Description (description): string?`, `Details (details): IReadOnlyList<string>?` | `Models/NotFoundErrMsg.cs` |
| `NotFoundError` | Requested resource path not available it will provides the error in OpenAPI spec mentioned format, if there is any change in base URL then respective platform error message will be populated. | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<NotFoundErrMsg>?` | `Models/NotFoundError.cs` |
| `OpeningHoursObject` | — | `WeekDay (weekDay): OpeningHoursObjectWeekDay?`, `StartTime (startTime): string?`, `EndTime (endTime): string?` | `Models/OpeningHoursObject.cs` |
| `RatelimitErrMsg` | — | `Code (code): string?`, `Message (message): string?`, `Description (description): string?`, `Details (details): IReadOnlyList<string>?` | `Models/RatelimitErrMsg.cs` |
| `ResponseModel` | — | `RequestId (requestId): Guid?`, `Status (status): string?`, `Data (data): IReadOnlyList<LocationResponeObject>?` | `Models/ResponseModel.cs` |
| `Serviceunavailable` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<ServiceunavailableErrMsg>?` | `Models/Serviceunavailable.cs` |
| `ServiceunavailableErrMsg` | — | `Code (code): string?`, `Message (message): string?`, `Description (description): string?`, `Details (details): IReadOnlyList<string>?` | `Models/ServiceunavailableErrMsg.cs` |
| `ServiceunavailableError` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<ServiceunavailableErrMsg>?` | `Models/ServiceunavailableError.cs` |
| `SingleLocationMarker` | A Marker is a place on the map that represent a single Location | `MarkerType (markerType): string !req`, `UniqueKey (uniqueKey): string?`, `Status (status): SingleLocationMarkerStatus?`, `Coordinates (coordinates): Coordinates?`, `EvseCount (evseCount): double?`, `MaxPower (maxPower): double?`, `GeoHash (geoHash): string?`, `LocationUid (locationUid): double?`, `AuthorizationMethods (authorizationMethods): IReadOnlyList<SingleLocationMarkerAuthorizationMethodsItems>?`, `OperatorId (operatorId): string?` | `Models/SingleLocationMarker.cs` |
| `SingleLocationMarkerResponse` | — | `RequestId (requestId): Guid?`, `Status (status): string?`, `Data (data): IReadOnlyList<LocationMarker>?` (union) | `Models/SingleLocationMarkerResponse.cs` |
| `Tariff` | — | `StartFee (startFee): double?`, `PerMinute (perMinute): double?`, `PerKwh (perKWh): double?`, `Currency (currency): string?`, `Updated (updated): string?`, `UpdatedBy (updatedBy): TariffVoupdatedBy?`, `Structure (structure): string?` | `Models/Tariff.cs` |
| `TariffVo` | Tariff details for charging on this Connector | `StartFee (startFee): double?`, `PerMinute (perMinute): double?`, `PerKwh (perKWh): double?`, `Currency (currency): string?`, `Updated (updated): string?`, `UpdatedBy (updatedBy): TariffVoupdatedBy?`, `Structure (structure): string?` | `Models/TariffVo.cs` |
| `TooManyRequests` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<RatelimitErrMsg>?` | `Models/TooManyRequests.cs` |
| `TooManyRequestsError` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<RatelimitErrMsg>?` | `Models/TooManyRequestsError.cs` |
| `Unauthorized` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<UnauthorizedErrMsg>?` | `Models/Unauthorized.cs` |
| `UnauthorizedErrMsg` | — | `Code (code): string?`, `Message (message): string?`, `Description (description): string?`, `Details (details): IReadOnlyList<string>?` | `Models/UnauthorizedErrMsg.cs` |
| `UnauthorizedError` | — | `RequestId (requestId): string?`, `Status (status): string?`, `Errors (errors): IReadOnlyList<UnauthorizedErrMsg>?` | `Models/UnauthorizedError.cs` |
