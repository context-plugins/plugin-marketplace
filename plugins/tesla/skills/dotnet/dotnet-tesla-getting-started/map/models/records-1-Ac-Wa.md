# Records (`ActuateTrunkRequest` … `WarrantyItem`)

**Exact coverage: `ActuateTrunkRequest` through `WarrantyItem`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `TeslaFleetManagementApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `ActuateTrunkRequest` | — | `WhichTrunk (which_trunk): WhichTrunk !req` | `Models/ActuateTrunkRequest.cs` |
| `AddChargeScheduleRequest` | — | `Lat (lat): double !req`, `Lon (lon): double !req`, `Id (id): int !req`, `DaysOfWeek (days_of_week): string?`, `StartEnabled (start_enabled): bool?`, `StartTime (start_time): int?`, `EndEnabled (end_enabled): bool?`, `EndTime (end_time): int?`, `OneTime (one_time): bool?`, `Enabled (enabled): bool !req` | `Models/AddChargeScheduleRequest.cs` |
| `AddPreconditionScheduleRequest` | — | `Lat (lat): double !req`, `Lon (lon): double !req`, `Id (id): int !req`, `DaysOfWeek (days_of_week): string?`, `PreconditionTime (precondition_time): int?`, `OneTime (one_time): bool?`, `Enabled (enabled): bool !req` | `Models/AddPreconditionScheduleRequest.cs` |
| `AdjustVolumeRequest` | — | `Volume (volume): int !req` | `Models/AdjustVolumeRequest.cs` |
| `Api1DxVehiclesOptionsResponse` | — | `Response (response): ResponseApi1DxVehiclesOptionsResponse?` | `Models/Api1DxVehiclesOptionsResponse.cs` |
| `Api1DxWarrantyDetailsResponse` | — | `Response (response): ResponseApi1DxWarrantyDetailsResponse?` | `Models/Api1DxWarrantyDetailsResponse.cs` |
| `Api1VehiclesMobileEnabledResponse` | — | `Response (response): MobileEnabled?` | `Models/Api1VehiclesMobileEnabledResponse.cs` |
| `Api1VehiclesNearbyChargingSitesResponse` | — | `Response (response): Response3?` | `Models/Api1VehiclesNearbyChargingSitesResponse.cs` |
| `Api1VehiclesResponse` | — | `Response (response): IReadOnlyList<VehicleBase>?`, `Pagination (pagination): PaginationModel?`, `Count (count): int?` | `Models/Api1VehiclesResponse.cs` |
| `Api1VehiclesResponseGetVehicle` | — | `Response (response): VehicleBase?` | `Models/Api1VehiclesResponseGetVehicle.cs` |
| `Api1VehiclesResponseResponse200` | — | `Response (response): VehicleBase?` | `Models/Api1VehiclesResponseResponse200.cs` |
| `Api1VehiclesWakeUpResponse` | — | `Response (response): VehicleBase?` | `Models/Api1VehiclesWakeUpResponse.cs` |
| `BackupRequest` | — | `BackupReservePercent (backup_reserve_percent): int !req` | `Models/BackupRequest.cs` |
| `BackupResponse` | — | `Response (response): ResponseModel !req` | `Models/BackupResponse.cs` |
| `CalendarHistoryResponse` | — | `Response (response): ResponseCalendarHistoryResponse !req` | `Models/CalendarHistoryResponse.cs` |
| `ChargeDuration` | — | `Seconds (seconds): int !req` | `Models/ChargeDuration.cs` |
| `ChargeHistory` | — | `ChargeStartTime (charge_start_time): ChargeStartTime !req`, `ChargeDuration (charge_duration): ChargeDuration !req`, `EnergyAddedWh (energy_added_wh): int !req` | `Models/ChargeHistory.cs` |
| `ChargeHistoryResponse` | — | `Response (response): ResponseChargeHistoryResponse !req` | `Models/ChargeHistoryResponse.cs` |
| `ChargeStartTime` | — | `Seconds (seconds): int !req` | `Models/ChargeStartTime.cs` |
| `ChargingDimension` | — | `Type (type): string?`, `Volume (volume): double?` | `Models/ChargingDimension.cs` |
| `ChargingFee` | — | `SessionFeeId (sessionFeeId): int?`, `FeeType (feeType): string?`, `CurrencyCode (currencyCode): string?`, `PricingType (pricingType): string?`, `RateBase (rateBase): double?`, `RateTier1 (rateTier1): double?`, `RateTier2 (rateTier2): double?`, `RateTier3 (rateTier3): double?`, `RateTier4 (rateTier4): double?`, `UsageBase (usageBase): double?`, `UsageTier1 (usageTier1): double?`, `UsageTier2 (usageTier2): double?`, `UsageTier3 (usageTier3): double?`, `UsageTier4 (usageTier4): double?`, `TotalBase (totalBase): double?`, `TotalTier1 (totalTier1): double?`, `TotalTier2 (totalTier2): double?`, `TotalTier3 (totalTier3): double?`, `TotalTier4 (totalTier4): double?`, `TotalDue (totalDue): double?`, `NetDue (netDue): double?`, `Uom (uom): string?`, `IsPaid (isPaid): bool?`, `Status (status): string?` | `Models/ChargingFee.cs` |
| `ChargingHistoryData` | — | `Data (data): IReadOnlyList<ChargingHistoryItem> !req` | `Models/ChargingHistoryData.cs` |
| `ChargingHistoryItem` | — | `SessionId (sessionId): int !req`, `Vin (vin): string !req`, `SiteLocationName (siteLocationName): string?`, `ChargeStartDateTime (chargeStartDateTime): DateTimeOffset?`, `ChargeStopDateTime (chargeStopDateTime): DateTimeOffset?`, `UnlatchDateTime (unlatchDateTime): DateTimeOffset?`, `CountryCode (countryCode): string?`, `Fees (fees): IReadOnlyList<ChargingFee>?`, `BillingType (billingType): string?`, `Invoices (invoices): IReadOnlyList<ChargingInvoice>?`, `VehicleMakeType (vehicleMakeType): string?` | `Models/ChargingHistoryItem.cs` |
| `ChargingHistoryResponse` | — | `Response (response): ChargingHistoryData !req` | `Models/ChargingHistoryResponse.cs` |
| `ChargingInvoice` | — | `FileName (fileName): string?`, `ContentId (contentId): string?`, `InvoiceType (invoiceType): string?` | `Models/ChargingInvoice.cs` |
| `ChargingLocation` | — | `Name (name): string?`, `Type (type): string?`, `DistanceMiles (distance_miles): double?`, `Amenities (amenities): string?`, `AvailableStalls (available_stalls): int?`, `TotalStalls (total_stalls): int?`, `SiteClosed (site_closed): bool?`, `BillingInfo (billing_info): string?`, `Location (location): Location1?` | `Models/ChargingLocation.cs` |
| `ChargingPeriod` | — | `StartDateTime (start_date_time): string?`, `Dimensions (dimensions): IReadOnlyList<ChargingDimension>?` | `Models/ChargingPeriod.cs` |
| `ChargingSession` | — | `Id (id): string?`, `Vin (vin): string?`, `Model (model): string?`, `StartDateTime (start_date_time): string?`, `StopDateTime (stop_date_time): string?`, `TotalEnergy (total_energy): double?`, `TotalTime (total_time): double?`, `TotalCost (total_cost): TotalCost?`, `Location (location): Location?`, `ChargingPeriods (charging_periods): IReadOnlyList<ChargingPeriod>?`, `Tariffs (tariffs): Tariffs?` | `Models/ChargingSession.cs` |
| `ChargingSessionsData` | — | `Data (data): IReadOnlyList<ChargingSession>?`, `StatusCode (status_code): int?`, `StatusMessage (status_message): string?`, `Timestamp (timestamp): IReadOnlyDictionary<string, string>?` | `Models/ChargingSessionsData.cs` |
| `ChargingSessionsResponse` | — | `Response (response): ChargingSessionsData !req` | `Models/ChargingSessionsResponse.cs` |
| `CommandResponse` | — | `Response (response): CommandResult?` | `Models/CommandResponse.cs` |
| `CommandResult` | — | `Result (result): bool !req`, `Reason (reason): string !req` | `Models/CommandResult.cs` |
| `Driver` | — | `MyTeslaUniqueId (my_tesla_unique_id): int?`, `UserId (user_id): int?`, `UserIdS (user_id_s): string?`, `VaultUuid (vault_uuid): string?`, `DriverFirstName (driver_first_name): string?`, `DriverLastName (driver_last_name): string?`, `GranularAccess (granular_access): object?`, `ActivePubkeys (active_pubkeys): IReadOnlyList<string>?`, `PublicKey (public_key): string?` | `Models/Driver.cs` |
| `DriversResponse` | — | `Response (response): IReadOnlyList<Driver>?`, `Count (count): int?` | `Models/DriversResponse.cs` |
| `EnterprisePayerRequest` | — | `Role (role): string !req`, `FederationId (federation_id): string?`, `AccountId (account_id): string?` | `Models/EnterprisePayerRequest.cs` |
| `Event` | — | `Timestamp (timestamp): DateTimeOffset !req`, `Duration (duration): int !req` | `Models/Event.cs` |
| `FleetStatusRequest` | — | `Vins (vins): IReadOnlyList<string>?` | `Models/FleetStatusRequest.cs` |
| `FleetTelemetryError` | — | `Name (name): string !req`, `Error (error): string !req`, `Vin (vin): string !req` | `Models/FleetTelemetryError.cs` |
| `FleetTelemetryErrorsResponse` | — | `Response (response): ResponseFleetTelemetryErrorsResponse !req` | `Models/FleetTelemetryErrorsResponse.cs` |
| `FleetTelemetryJwsRequest` | — | `Token (token): string?`, `Vins (vins): IReadOnlyList<string>?` | `Models/FleetTelemetryJwsRequest.cs` |
| `GenericUpdateResponse` | — | `Response (response): ResponseModel !req` | `Models/GenericUpdateResponse.cs` |
| `GuestModeRequest` | — | `Enable (enable): bool !req` | `Models/GuestModeRequest.cs` |
| `LiveStatusResponse` | — | `Response (response): ResponseLiveStatusResponse !req` | `Models/LiveStatusResponse.cs` |
| `Location` | — | `Country (country): string?`, `Name (name): string?` | `Models/Location.cs` |
| `Location1` | — | `Lat (lat): double?`, `Long (long): double?` | `Models/Location1.cs` |
| `MeResponse` | — | `Response (response): ResponseMeResponse !req` | `Models/MeResponse.cs` |
| `MobileEnabled` | — | `Result (result): bool?`, `Reason (reason): string?` | `Models/MobileEnabled.cs` |
| `OffGridVehicleChargingReserveRequest` | — | `OffGridVehicleChargingReservePercent (off_grid_vehicle_charging_reserve_percent): int !req` | `Models/OffGridVehicleChargingReserveRequest.cs` |
| `OperationRequest` | — | `DefaultRealMode (default_real_mode): DefaultRealMode !req` | `Models/OperationRequest.cs` |
| `OrdersResponse` | — | `Response (response): IReadOnlyList<ResponseOrdersResponse> !req`, `Count (count): int !req` | `Models/OrdersResponse.cs` |
| `PaginationModel` | — | `Previous (previous): int?`, `Next (next): int?`, `Current (current): int?`, `PerPage (per_page): int?`, `Count (count): int?`, `Pages (pages): int?` | `Models/PaginationModel.cs` |
| `PriceComponent` | — | `Type (type): string?`, `Price (price): double?`, `StepSize (step_size): double?` | `Models/PriceComponent.cs` |
| `ProductsResponse` | — | `Response (response): IReadOnlyList<object>?`, `Count (count): int?` | `Models/ProductsResponse.cs` |
| `PublicKeyResponse` | — | `Response (response): ResponsePublicKeyResponse !req` | `Models/PublicKeyResponse.cs` |
| `RegionResponse` | — | `Response (response): ResponseRegionResponse !req` | `Models/RegionResponse.cs` |
| `RegisterPartnerRequest` | — | `Domain (domain): string !req` | `Models/RegisterPartnerRequest.cs` |
| `RegisterPartnerResponse` | — | `Response (response): ResponseRegisterPartnerResponse !req` | `Models/RegisterPartnerResponse.cs` |
| `Response1` | — | `FleetTelemetryErrorVins (fleet_telemetry_error_vins): IReadOnlyList<string> !req` | `Models/Response1.cs` |
| `Response2` | — | `Signaling (signaling): Signaling !req` | `Models/Response2.cs` |
| `Response3` | — | `DestinationCharging (destination_charging): IReadOnlyList<ChargingLocation>?`, `Superchargers (superchargers): IReadOnlyList<ChargingLocation>?`, `Timestamp (timestamp): int?` | `Models/Response3.cs` |
| `ResponseApi1DxVehiclesOptionsResponse` | — | `Codes (codes): IReadOnlyList<VehicleOption>?` | `Models/ResponseApi1DxVehiclesOptionsResponse.cs` |
| `ResponseApi1DxWarrantyDetailsResponse` | — | `ActiveWarranty (activeWarranty): IReadOnlyList<WarrantyItem>?`, `UpcomingWarranty (upcomingWarranty): IReadOnlyList<WarrantyItem>?`, `ExpiredWarranty (expiredWarranty): IReadOnlyList<WarrantyItem>?` | `Models/ResponseApi1DxWarrantyDetailsResponse.cs` |
| `ResponseCalendarHistoryResponse` | — | `Events (events): IReadOnlyList<Event> !req`, `TotalEvents (total_events): int !req` | `Models/ResponseCalendarHistoryResponse.cs` |
| `ResponseChargeHistoryResponse` | — | `ChargeHistory (charge_history): IReadOnlyList<ChargeHistory> !req` | `Models/ResponseChargeHistoryResponse.cs` |
| `ResponseFleetTelemetryErrorsResponse` | — | `FleetTelemetryErrors (fleet_telemetry_errors): IReadOnlyList<FleetTelemetryError> !req` | `Models/ResponseFleetTelemetryErrorsResponse.cs` |
| `ResponseLiveStatusResponse` | — | `SolarPower (solar_power): double !req`, `EnergyLeft (energy_left): double !req`, `TotalPackEnergy (total_pack_energy): double !req`, `PercentageCharged (percentage_charged): double !req`, `BackupCapable (backup_capable): bool !req`, `BatteryPower (battery_power): double?`, `LoadPower (load_power): double?`, `GridStatus (grid_status): string?`, `GridPower (grid_power): double?`, `IslandStatus (island_status): string?`, `StormModeActive (storm_mode_active): bool?`, `Timestamp (timestamp): DateTimeOffset?` | `Models/ResponseLiveStatusResponse.cs` |
| `ResponseMeResponse` | — | `Email (email): string !req`, `FullName (full_name): string !req`, `ProfileImageUrl (profile_image_url): string !req`, `VaultUuid (vault_uuid): Guid !req` | `Models/ResponseMeResponse.cs` |
| `ResponseModel` | — | `Code (code): int !req`, `Message (message): string !req` | `Models/ResponseModel.cs` |
| `ResponseOrdersResponse` | — | `VehicleMapId (vehicleMapId): int !req`, `ReferenceNumber (referenceNumber): string !req`, `Vin (vin): string !req`, `OrderStatus (orderStatus): string !req`, `OrderSubstatus (orderSubstatus): string !req`, `ModelCode (modelCode): string !req`, `CountryCode (countryCode): string !req`, `Locale (locale): string !req`, `MktOptions (mktOptions): string !req`, `IsB2B (isB2b): bool !req` | `Models/ResponseOrdersResponse.cs` |
| `ResponsePublicKeyResponse` | — | `PublicKey (public_key): string !req` | `Models/ResponsePublicKeyResponse.cs` |
| `ResponseRegionResponse` | — | `Region (region): string !req`, `FleetApiBaseUrl (fleet_api_base_url): string !req` | `Models/ResponseRegionResponse.cs` |
| `ResponseRegisterPartnerResponse` | — | `ClientId (client_id): string !req`, `Name (name): string !req`, `Description (description): string?`, `Domain (domain): string !req`, `Ca (ca): string?`, `CreatedAt (created_at): DateTimeOffset !req`, `UpdatedAt (updated_at): DateTimeOffset !req`, `EnterpriseTier (enterprise_tier): string !req`, `AccountId (account_id): string !req`, `Issuer (issuer): string?`, `Csr (csr): string?`, `CsrUpdatedAt (csr_updated_at): DateTimeOffset?`, `PublicKey (public_key): string !req`, `PublicKeyHash (public_key_hash): string !req` | `Models/ResponseRegisterPartnerResponse.cs` |
| `Signaling` | — | `Enabled (enabled): bool !req`, `SubscribeConnectivity (subscribe_connectivity): bool !req`, `UseAuthToken (use_auth_token): bool !req` | `Models/Signaling.cs` |
| `SimpleOkResponse` | — | `Response (response): string?` | `Models/SimpleOkResponse.cs` |
| `SiteInfoResponse` | — | `Response (response): object?` | `Models/SiteInfoResponse.cs` |
| `StormModeRequest` | — | `Enabled (enabled): bool !req` | `Models/StormModeRequest.cs` |
| `TariffElement` | — | `PriceComponents (price_components): IReadOnlyList<PriceComponent>?`, `Restrictions (restrictions): IReadOnlyDictionary<string, object>?` | `Models/TariffElement.cs` |
| `Tariffs` | — | `Currency (currency): string?`, `Elements (elements): IReadOnlyList<TariffElement>?` | `Models/Tariffs.cs` |
| `TimeOfUseSettingsRequest` | — | `TouSettings (tou_settings): TouSettings !req` | `Models/TimeOfUseSettingsRequest.cs` |
| `TotalCost` | — | `ExclVat (excl_vat): double?`, `InclVat (incl_vat): double?`, `Vat (vat): double?` | `Models/TotalCost.cs` |
| `TouSettings` | — | `TariffContentV2 (tariff_content_v2): object?` | `Models/TouSettings.cs` |
| `VehicleBase` | — | `Id (id): int?`, `VehicleId (vehicle_id): int?`, `Vin (vin): string?`, `DisplayName (display_name): string?`, `AccessType (access_type): string?`, `State (state): string?`, `InService (in_service): bool?`, `CalendarEnabled (calendar_enabled): bool?` | `Models/VehicleBase.cs` |
| `VehicleOption` | — | `Code (code): string?`, `DisplayName (displayName): string?`, `ColorCode (colorCode): string?`, `IsActive (isActive): bool?` | `Models/VehicleOption.cs` |
| `WarrantyItem` | — | `WarrantyType (warrantyType): string?`, `WarrantyDisplayName (warrantyDisplayName): string?`, `ExpirationDate (expirationDate): DateTimeOffset?`, `ExpirationOdometer (expirationOdometer): int?`, `OdometerUnit (odometerUnit): string?`, `WarrantyExpiredOn (warrantyExpiredOn): string?`, `CoverageAgeInYears (coverageAgeInYears): int?` | `Models/WarrantyItem.cs` |
