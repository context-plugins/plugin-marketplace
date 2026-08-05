# Records (`Activealerts400Error` … `WorklogResponse1`)

**Exact coverage: `Activealerts400Error` through `WorklogResponse1`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `GreenbyteApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `Activealerts400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activealerts400Error.cs` |
| `Activealerts400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activealerts400Error1.cs` |
| `Activealerts429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activealerts429Error.cs` |
| `Activealerts429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activealerts429Error1.cs` |
| `Activestatus400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activestatus400Error.cs` |
| `Activestatus400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activestatus400Error1.cs` |
| `Activestatus429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activestatus429Error.cs` |
| `Activestatus429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Activestatus429Error1.cs` |
| `AlertItem` | An alert generated for a device based on a rule. | `DeviceId (deviceId): int?`, `RuleId (ruleId): int?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `Message (message): string?`, `Comment (comment): string?`, `Description (description): string?`, `Details (details): string?` | `Models/AlertItem.cs` |
| `Alerts400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Alerts400Error.cs` |
| `Alerts400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Alerts400Error1.cs` |
| `Alerts429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Alerts429Error.cs` |
| `Alerts429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Alerts429Error1.cs` |
| `Category` | — | `CategoryId (categoryId): int !req`, `Title (title): string !req` | `Models/Category.cs` |
| `Client` | — | `Title (title): string !req`, `Tag (tag): string !req`, `UrlWeb (urlWeb): string !req`, `UrlApi (urlApi): string !req` | `Models/Client.cs` |
| `ClientConfiguration` | General configuration data. | `Title (title): string !req`, `Tag (tag): string !req`, `UrlWeb (urlWeb): string !req`, `UrlApi (urlApi): string !req` | `Models/ClientConfiguration.cs` |
| `Component` | A component of a wind turbine. | `ComponentId (componentId): int?`, `ComponentName (componentName): string?`, `ComponentTag (componentTag): string?` | `Models/Component.cs` |
| `ComponentAlert` | — | `ComponentId (componentId): int?`, `ComponentName (componentName): string?`, `ComponentTag (componentTag): string?` | `Models/ComponentAlert.cs` |
| `ComponentResolved` | — | `ComponentId (componentId): int?`, `ComponentName (componentName): string?`, `ComponentTag (componentTag): string?` | `Models/ComponentResolved.cs` |
| `Configuration400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Configuration400Error.cs` |
| `Configuration400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Configuration400Error1.cs` |
| `Configuration429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Configuration429Error.cs` |
| `Configuration429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Configuration429Error1.cs` |
| `ConfigurationItem` | Your configuration data. | `Client (client): Client !req`, `TimeZone (timeZone): TimeZoneModel !req`, `DataSignals (dataSignals): DataSignals !req` | `Models/ConfigurationItem.cs` |
| `Data400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Data400Error.cs` |
| `Data400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Data400Error1.cs` |
| `Data429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Data429Error.cs` |
| `Data429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Data429Error1.cs` |
| `DataItem` | An object containing time-series data for a specific aggregate, data signal and interval. | `Aggregate (aggregate): AggregateMode !req`, `AggregateId (aggregateId): int !req`, `AggregatePathNames (aggregatePathNames): IReadOnlyList<string>?`, `DeviceIds (deviceIds): IReadOnlyList<int> !req`, `Resolution (resolution): Resolution !req`, `Calculation (calculation): CalculationMode !req`, `DataSignal (dataSignal): DataSignal1 !req`, `Data (data): IReadOnlyDictionary<string, double> !req` | `Models/DataItem.cs` |
| `Datapercategory400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datapercategory400Error.cs` |
| `Datapercategory400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datapercategory400Error1.cs` |
| `Datapercategory429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datapercategory429Error.cs` |
| `Datapercategory429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datapercategory429Error1.cs` |
| `DataPerCategoryItem` | Data for a single aggregate group and contract category combination. | `AggregateId (aggregateId): int !req`, `AggregatePathNames (aggregatePathNames): IReadOnlyList<string>?`, `DeviceIds (deviceIds): IReadOnlyList<int> !req`, `ContractTitle (contractTitle): string !req`, `CategoryTitle (categoryTitle): string !req`, `CategoryTime (categoryTime): CategoryTime !req`, `Value (value): double !req`, `Duration (duration): double?` | `Models/DataPerCategoryItem.cs` |
| `DataPerCategoryResponse` | An object containing data grouped by contract category and aggregate. | `DataSignal (dataSignal): DataSignal1 !req`, `Calculation (calculation): CalculationMode !req`, `Data (data): IReadOnlyList<DataPerCategoryItem> !req` | `Models/DataPerCategoryResponse.cs` |
| `DatapercategoryResponse1` | — | `DataSignal (dataSignal): DataSignal1 !req`, `Calculation (calculation): CalculationMode !req`, `Data (data): IReadOnlyList<DataPerCategoryItem> !req` | `Models/DatapercategoryResponse1.cs` |
| `DataRealTimeItem` | An object containing a single data point for a specific aggregate, data signal and interval. | `Aggregate (aggregate): AggregateMode !req`, `AggregateId (aggregateId): int !req`, `AggregatePathNames (aggregatePathNames): IReadOnlyList<string>?`, `DeviceIds (deviceIds): IReadOnlyList<int> !req`, `Calculation (calculation): CalculationModeRealTime !req`, `DataSignal (dataSignal): DataSignal1 !req`, `Data (data): IReadOnlyDictionary<string, double> !req` | `Models/DataRealTimeItem.cs` |
| `DataSignal` | A data signal. | `DataSignalId (dataSignalId): int !req`, `Title (title): string !req`, `Unit (unit): string !req` | `Models/DataSignal.cs` |
| `DataSignal1` | — | `DataSignalId (dataSignalId): int !req`, `Title (title): string !req`, `Unit (unit): string !req` | `Models/DataSignal1.cs` |
| `DataSignalConfiguration` | Your data signal configuration. These only apply to wind devices. | `AvailabilityTimeDataSignalId (availabilityTimeDataSignalId): int !req`, `AvailabilityProductionDataSignalId (availabilityProductionDataSignalId): int !req`, `LostProductionDataSignalId (lostProductionDataSignalId): int !req`, `PerformanceDataSignalId (performanceDataSignalId): int !req` | `Models/DataSignalConfiguration.cs` |
| `DataSignalItem` | A data signal, including type. | `DataSignalId (dataSignalId): int !req`, `Title (title): string !req`, `Type (type): string !req`, `Unit (unit): string !req`, `DeviceType (deviceType): object?` | `Models/DataSignalItem.cs` |
| `DataSignals` | — | `AvailabilityTimeDataSignalId (availabilityTimeDataSignalId): int !req`, `AvailabilityProductionDataSignalId (availabilityProductionDataSignalId): int !req`, `LostProductionDataSignalId (lostProductionDataSignalId): int !req`, `PerformanceDataSignalId (performanceDataSignalId): int !req` | `Models/DataSignals.cs` |
| `Datasignals400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datasignals400Error.cs` |
| `Datasignals400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datasignals400Error1.cs` |
| `Datasignals429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datasignals429Error.cs` |
| `Datasignals429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Datasignals429Error1.cs` |
| `Device` | — | `DeviceId (deviceId): int?`, `Title (title): string?`, `AltTitle (altTitle): string?`, `Identity (identity): string?`, `Site (site): Site?`, `DeviceType (deviceType): string?`, `DeviceTypeId (deviceTypeId): int?`, `ParentId (parentId): int?`, `ChildIds (childIds): IReadOnlyList<int>?`, `DeviceModel (deviceModel): object?`, `TurbineType (turbineType): object?`, `MaxPower (maxPower): double?`, `BiddingArea (biddingArea): string?`, `TimestampStart (timestampStart): DateTimeOffset?`, `Latitude (latitude): string?`, `Longitude (longitude): string?`, `Elevation (elevation): string?`, `TargetAvailability (targetAvailability): double?`, `Metadata (metadata): IReadOnlyList<MetadataField>?` | `Models/Device.cs` |
| `DeviceAccess` | A device access | `DeviceAccessId (deviceAccessId): int?`, `SiteAccessId (siteAccessId): int?`, `SiteId (siteId): int?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `PersonnelIds (personnelIds): IReadOnlyList<int>?`, `TaskIds (taskIds): IReadOnlyList<int>?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEndExpected (timestampEndExpected): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `LogOnComment (logOnComment): string?`, `LogOffComment (logOffComment): string?` | `Models/DeviceAccess.cs` |
| `DeviceAccesses400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DeviceAccesses400Error.cs` |
| `DeviceAccesses400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DeviceAccesses400Error1.cs` |
| `DeviceAccesses429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DeviceAccesses429Error.cs` |
| `DeviceAccesses429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DeviceAccesses429Error1.cs` |
| `DeviceAccessesResponse` | — | `DeviceAccessId (deviceAccessId): int?`, `SiteAccessId (siteAccessId): int?`, `SiteId (siteId): int?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `PersonnelIds (personnelIds): IReadOnlyList<int>?`, `TaskIds (taskIds): IReadOnlyList<int>?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEndExpected (timestampEndExpected): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `LogOnComment (logOnComment): string?`, `LogOffComment (logOffComment): string?` | `Models/DeviceAccessesResponse.cs` |
| `DeviceModel` | General device model information. | `DeviceModelId (deviceModelId): int?`, `Manufacturer (manufacturer): string?`, `Model (model): string?` | `Models/DeviceModel.cs` |
| `Devices400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Devices400Error.cs` |
| `Devices400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Devices400Error1.cs` |
| `Devices429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Devices429Error.cs` |
| `Devices429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Devices429Error1.cs` |
| `DevicesPublishedAfterDate400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DevicesPublishedAfterDate400Error.cs` |
| `DevicesPublishedAfterDate400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DevicesPublishedAfterDate400Error1.cs` |
| `DevicesPublishedAfterDate429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DevicesPublishedAfterDate429Error.cs` |
| `DevicesPublishedAfterDate429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DevicesPublishedAfterDate429Error1.cs` |
| `DevicesPublishedAfterDateResponse` | — | `NumberOfDevices (numberOfDevices): int?`, `AuthorizedDeviceIds (authorizedDeviceIds): IReadOnlyList<int>?` | `Models/DevicesPublishedAfterDateResponse.cs` |
| `DeviceType` | — | `DeviceTypeId (deviceTypeId): int?`, `Title (title): string?` | `Models/DeviceType.cs` |
| `DowntimeEvent` | A downtime event. | `DowntimeEventId (downtimeEventId): int?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `Comment (comment): string?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `SiteIds (siteIds): IReadOnlyList<int>?`, `TaskIds (taskIds): IReadOnlyList<int>?`, `RemainingCapacityPercentage (remainingCapacityPercentage): double?` | `Models/DowntimeEvent.cs` |
| `DowntimeEvents400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DowntimeEvents400Error.cs` |
| `DowntimeEvents400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DowntimeEvents400Error1.cs` |
| `DowntimeEvents429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DowntimeEvents429Error.cs` |
| `DowntimeEvents429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/DowntimeEvents429Error1.cs` |
| `DowntimeEventsResponse` | — | `DowntimeEventId (downtimeEventId): int?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `Comment (comment): string?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `SiteIds (siteIds): IReadOnlyList<int>?`, `TaskIds (taskIds): IReadOnlyList<int>?`, `RemainingCapacityPercentage (remainingCapacityPercentage): double?` | `Models/DowntimeEventsResponse.cs` |
| `Highresdata400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Highresdata400Error.cs` |
| `Highresdata400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Highresdata400Error1.cs` |
| `Highresdata429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Highresdata429Error.cs` |
| `Highresdata429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Highresdata429Error1.cs` |
| `HighresdataResponse` | An object containing a single data point for a specific device and data signal. | `DeviceId (deviceId): int !req`, `DataSignal (dataSignal): DataSignal1 !req`, `Data (data): IReadOnlyDictionary<string, double> !req` | `Models/HighresdataResponse.cs` |
| `HseIncidents400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/HseIncidents400Error.cs` |
| `HseIncidents400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/HseIncidents400Error1.cs` |
| `HseIncidents429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/HseIncidents429Error.cs` |
| `HseIncidents429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/HseIncidents429Error1.cs` |
| `HseIncidentsResponse` | An HSE incident. | `HseIncidentId (hseIncidentId): int?`, `SiteId (siteId): int?`, `DeviceId (deviceId): int?`, `Timestamp (timestamp): DateTimeOffset?`, `HseCategory (hseCategory): Hsecategory?`, `LostTimeInjury (lostTimeInjury): bool? = false`, `IncidentDescription (incidentDescription): string?`, `Resolved (resolved): bool? = false`, `ResolvedTimestamp (resolvedTimestamp): DateTimeOffset?` | `Models/HseIncidentsResponse.cs` |
| `HseIncidentsResponse1` | — | `HseIncidentId (hseIncidentId): int?`, `SiteId (siteId): int?`, `DeviceId (deviceId): int?`, `Timestamp (timestamp): DateTimeOffset?`, `HseCategory (hseCategory): Hsecategory?`, `LostTimeInjury (lostTimeInjury): bool? = false`, `IncidentDescription (incidentDescription): string?`, `Resolved (resolved): bool? = false`, `ResolvedTimestamp (resolvedTimestamp): DateTimeOffset?` | `Models/HseIncidentsResponse1.cs` |
| `LostProductionSignal` | — | `DataSignalId (dataSignalId): int !req`, `Title (title): string !req`, `Unit (unit): string !req` | `Models/LostProductionSignal.cs` |
| `MetadataField` | A metadata field. | `Key (key): string?`, `Value (value): string?` | `Models/MetadataField.cs` |
| `Organization` | An organization used for tasks and personnel. | `OrganizationId (organizationId): int?`, `Name (name): string?`, `Email (email): string?`, `Phone (phone): string?` | `Models/Organization.cs` |
| `Organization1` | — | `OrganizationId (organizationId): int?`, `Name (name): string?`, `Email (email): string?`, `Phone (phone): string?` | `Models/Organization1.cs` |
| `Organizations400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Organizations400Error.cs` |
| `Organizations400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Organizations400Error1.cs` |
| `Organizations429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Organizations429Error.cs` |
| `Organizations429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Organizations429Error1.cs` |
| `Personnel` | A person in the personnel list. | `PersonnelId (personnelId): int?`, `FirstName (firstName): string?`, `LastName (lastName): string?`, `Email (email): string?`, `Phone (phone): string?`, `Mobile (mobile): string?`, `Organization (organization): Organization1?`, `Qualifications (qualifications): IReadOnlyList<PersonnelQualification>?`, `SiteInductions (siteInductions): IReadOnlyList<PersonnelSiteInduction>?` | `Models/Personnel.cs` |
| `Personnel400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Personnel400Error.cs` |
| `Personnel400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Personnel400Error1.cs` |
| `Personnel429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Personnel429Error.cs` |
| `Personnel429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Personnel429Error1.cs` |
| `PersonnelQualification` | A personnel qualification. | `QualificationId (qualificationId): int?`, `Manufacturer (manufacturer): string?`, `QualificationType (qualificationType): string?`, `QualificationDescription (qualificationDescription): string?` | `Models/PersonnelQualification.cs` |
| `PersonnelResponse` | — | `PersonnelId (personnelId): int?`, `FirstName (firstName): string?`, `LastName (lastName): string?`, `Email (email): string?`, `Phone (phone): string?`, `Mobile (mobile): string?`, `Organization (organization): Organization1?`, `Qualifications (qualifications): IReadOnlyList<PersonnelQualification>?`, `SiteInductions (siteInductions): IReadOnlyList<PersonnelSiteInduction>?` | `Models/PersonnelResponse.cs` |
| `PersonnelSiteInduction` | A site induction. | `SiteInductionId (siteInductionId): int?`, `SiteId (siteId): int?`, `DateExpires (dateExpires): DateTimeOffset?` | `Models/PersonnelSiteInduction.cs` |
| `PowerCurve` | — | `DeviceId (deviceId): int !req`, `Title (title): string !req`, `Values (values): IReadOnlyList<PowerCurveValue> !req` | `Models/PowerCurve.cs` |
| `Powercurves400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Powercurves400Error.cs` |
| `Powercurves400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Powercurves400Error1.cs` |
| `Powercurves429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Powercurves429Error.cs` |
| `Powercurves429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Powercurves429Error1.cs` |
| `PowerCurveValue` | The power at a specific wind speed according to a power curve. | `WindSpeed (windSpeed): double !req`, `Power (power): double !req` | `Models/PowerCurveValue.cs` |
| `PredictAlerts400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/PredictAlerts400Error.cs` |
| `PredictAlerts400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/PredictAlerts400Error1.cs` |
| `PredictAlerts429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/PredictAlerts429Error.cs` |
| `PredictAlerts429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/PredictAlerts429Error1.cs` |
| `PredictAlertsResponse` | An alert generated by Predict. The statusData object will be of one of the following types depending on its status: * Predict Status Active * Predict Status Resolved * Predict Status Dismissed | `Id (id): object?`, `DeviceId (deviceId): int?`, `SiteId (siteId): int?`, `ComponentAlert (componentAlert): ComponentAlert?`, `HighSeverity (highSeverity): bool?`, `Status (status): PredictStatus?`, `StatusData (statusData): object?`, `Comments (comments): IReadOnlyList<PredictComment>?` | `Models/PredictAlertsResponse.cs` |
| `PredictComment` | A comment on a Predict alert. | `UserName (userName): string?`, `Text (text): string?`, `Timestamp (timestamp): DateTimeOffset?` | `Models/PredictComment.cs` |
| `PredictRecommendation` | A recommended action generated by Predict. | `Component (component): string?`, `Action (action): string?`, `Confidence (confidence): int?` | `Models/PredictRecommendation.cs` |
| `PredictStatusActive` | Status info for an active Predict alert. | `Recommendations (recommendations): IReadOnlyList<PredictRecommendation>?` | `Models/PredictStatusActive.cs` |
| `PredictStatusDismissed` | Status info for a dismissed Predict alert. | `TimestampDismissed (timestampDismissed): DateTimeOffset?`, `DismissedBy (dismissedBy): string?` | `Models/PredictStatusDismissed.cs` |
| `PredictStatusResolved` | Status info for a resolved Predict alert. | `TimestampResolved (timestampResolved): DateTimeOffset?`, `ActionTaken (actionTaken): string?`, `ComponentResolved (componentResolved): ComponentResolved?`, `ResolvedBy (resolvedBy): PredictAction?` | `Models/PredictStatusResolved.cs` |
| `ProblemDetails` | An object describing the problem with the request, following the RFC 7807 format. | `Status (status): int !req`, `Title (title): string !req` | `Models/ProblemDetails.cs` |
| `Realtimedata400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Realtimedata400Error.cs` |
| `Realtimedata400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Realtimedata400Error1.cs` |
| `Realtimedata429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Realtimedata429Error.cs` |
| `Realtimedata429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Realtimedata429Error1.cs` |
| `Recurrence` | Recurrence settings for the task. To calculate when the task is recurring, use the `timestampStart` field and then add to it multiples of the specified interval; the `intervalType` field determines if the task is recurring on daily, weekly, monthly, or yearly basis. If the task is not recurring, this field is null. Note: Only the main (first) task … | `Duration (duration): int?`, `DurationType (durationType): DurationType?`, `DateEnd (dateEnd): DateTimeOffset?` | `Models/Recurrence.cs` |
| `Site` | — | `SiteId (siteId): int?`, `Title (title): string?` | `Models/Site.cs` |
| `SiteAccess` | A site access. | `SiteAccessId (siteAccessId): int?`, `SiteId (siteId): int?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `TaskIds (taskIds): IReadOnlyList<int>?`, `SiteAccessPersonnel (siteAccessPersonnel): IReadOnlyList<SiteAccessPersonnel>?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEndExpected (timestampEndExpected): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `LogOnComment (logOnComment): string?`, `LogOffComment (logOffComment): string?` | `Models/SiteAccess.cs` |
| `SiteAccesses400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/SiteAccesses400Error.cs` |
| `SiteAccesses400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/SiteAccesses400Error1.cs` |
| `SiteAccesses429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/SiteAccesses429Error.cs` |
| `SiteAccesses429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/SiteAccesses429Error1.cs` |
| `SiteAccessesResponse` | — | `SiteAccessId (siteAccessId): int?`, `SiteId (siteId): int?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `TaskIds (taskIds): IReadOnlyList<int>?`, `SiteAccessPersonnel (siteAccessPersonnel): IReadOnlyList<SiteAccessPersonnel>?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEndExpected (timestampEndExpected): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `LogOnComment (logOnComment): string?`, `LogOffComment (logOffComment): string?` | `Models/SiteAccessesResponse.cs` |
| `SiteAccessPersonnel` | Site access personnel. | `PersonnelId (personnelId): int?`, `FirstName (firstName): string?`, `LastName (lastName): string?`, `Company (company): string?`, `PhoneNumber (phoneNumber): string?`, `VehicleRegistration (vehicleRegistration): string?`, `Comment (comment): string?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?` | `Models/SiteAccessPersonnel.cs` |
| `Sites400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Sites400Error.cs` |
| `Sites400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Sites400Error1.cs` |
| `Sites429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Sites429Error.cs` |
| `Sites429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Sites429Error1.cs` |
| `SiteWithData` | — | `SiteId (siteId): int?`, `Title (title): string?`, `Country (country): string?`, `Identity (identity): string?`, `Metadata (metadata): IReadOnlyList<MetadataField>?` | `Models/SiteWithData.cs` |
| `Status400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Status400Error.cs` |
| `Status400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Status400Error1.cs` |
| `Status429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Status429Error.cs` |
| `Status429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Status429Error1.cs` |
| `StatusItem` | A status that may contain statuses of the same type as sub-statuses. Note that for sub-statuses the fields `categoryIec`, `categoryContract`, and `subStatus` will always be null. | `TurbineStatusId (turbineStatusId): int?`, `DeviceId (deviceId): int?`, `TimestampStart (timestampStart): DateTimeOffset?`, `TimestampEnd (timestampEnd): DateTimeOffset?`, `HasTimestampEnd (hasTimestampEnd): bool?`, `Category (category): StatusCategory?`, `Code (code): int?`, `Message (message): string?`, `Comment (comment): string?`, `LostProductionSignal (lostProductionSignal): LostProductionSignal?`, `LostProduction (lostProduction): double?`, `CategoryIec (categoryIec): string?`, `CategoryContract (categoryContract): string?`, `CategoryGlobalContract (categoryGlobalContract): string?`, `CategoryCustomContract (categoryCustomContract): string?`, `SubStatus (subStatus): IReadOnlyList<StatusItem?>?`, `Acknowledged (acknowledged): bool?`, `Component (component): object?` | `Models/StatusItem.cs` |
| `TaskAssigneeManufacturer` | The manufacturer assigned to a task. | `AssigneeType (assigneeType): TaskAssigneeType !req` | `Models/TaskAssigneeManufacturer.cs` |
| `TaskAssigneeOther` | Information about some other entity assigned to a task. | `AssigneeType (assigneeType): TaskAssigneeType !req`, `Text (text): string !req` | `Models/TaskAssigneeOther.cs` |
| `TaskAssigneePersonnel` | — | `PersonnelId (personnelId): int?`, `FirstName (firstName): string?`, `LastName (lastName): string?`, `Email (email): string?`, `Phone (phone): string?`, `Mobile (mobile): string?`, `Organization (organization): Organization1?`, `Qualifications (qualifications): IReadOnlyList<PersonnelQualification>?`, `SiteInductions (siteInductions): IReadOnlyList<PersonnelSiteInduction>?`, `AssigneeType (assigneeType): TaskAssigneeType !req` | `Models/TaskAssigneePersonnel.cs` |
| `TaskAssigneeUser` | — | `FirstName (firstName): string !req`, `LastName (lastName): string !req`, `AssigneeType (assigneeType): TaskAssigneeType !req` | `Models/TaskAssigneeUser.cs` |
| `TaskCategories400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TaskCategories400Error.cs` |
| `TaskCategories400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TaskCategories400Error1.cs` |
| `TaskCategories429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TaskCategories429Error.cs` |
| `TaskCategories429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TaskCategories429Error1.cs` |
| `TaskCategory` | Basic information about a task category. | `CategoryId (categoryId): int !req`, `Title (title): string !req` | `Models/TaskCategory.cs` |
| `TaskComment` | A comment added to a task. | `CommentId (commentId): int !req`, `TaskId (taskId): int !req`, `Text (text): string !req`, `TimestampCreated (timestampCreated): DateTimeOffset !req`, `CreatedBy (createdBy): User !req` | `Models/TaskComment.cs` |
| `TaskModel` | A task. | `TaskId (taskId): int !req`, `Title (title): string !req`, `CreatedBy (createdBy): User !req`, `Description (description): string?`, `Category (category): Category?`, `Priority (priority): TaskPriority !req`, `TimestampStart (timestampStart): DateTimeOffset !req`, `TimestampEnd (timestampEnd): DateTimeOffset !req`, `State (state): TaskState !req`, `Resolved (resolved): bool !req`, `TimestampResolved (timestampResolved): DateTimeOffset?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `SiteIds (siteIds): IReadOnlyList<int>?`, `SiteAccessIds (siteAccessIds): IReadOnlyList<int>?`, `DowntimeEventIds (downtimeEventIds): IReadOnlyList<int>?`, `StatusIds (statusIds): IReadOnlyList<int>?`, `NumberOfComments (numberOfComments): int !req`, `Comments (comments): IReadOnlyList<TaskComment>?`, `Recurrence (recurrence): object?`, `MainTaskId (mainTaskId): int?`, `Assignee (assignee): Assignee?` (union), `Metadata (metadata): IReadOnlyList<MetadataField>?` | `Models/TaskModel.cs` |
| `Tasks400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Tasks400Error.cs` |
| `Tasks400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Tasks400Error1.cs` |
| `Tasks429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Tasks429Error.cs` |
| `Tasks429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Tasks429Error1.cs` |
| `TasksComments400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksComments400Error.cs` |
| `TasksComments400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksComments400Error1.cs` |
| `TasksComments429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksComments429Error.cs` |
| `TasksComments429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksComments429Error1.cs` |
| `TasksFiles400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFiles400Error.cs` |
| `TasksFiles400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFiles400Error1.cs` |
| `TasksFiles429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFiles429Error.cs` |
| `TasksFiles429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFiles429Error1.cs` |
| `TasksFilesContent400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFilesContent400Error.cs` |
| `TasksFilesContent400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFilesContent400Error1.cs` |
| `TasksFilesContent429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFilesContent429Error.cs` |
| `TasksFilesContent429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/TasksFilesContent429Error1.cs` |
| `TasksFilesResponse` | — | `FileId (fileId): int !req`, `FileName (fileName): string !req`, `TimestampUploaded (timestampUploaded): DateTimeOffset !req`, `UploadedBy (uploadedBy): User !req`, `Description (description): string?`, `Category (category): TaskFileCategory?` | `Models/TasksFilesResponse.cs` |
| `TasksResponse` | — | `TaskId (taskId): int !req`, `Title (title): string !req`, `CreatedBy (createdBy): User !req`, `Description (description): string?`, `Category (category): Category?`, `Priority (priority): TaskPriority !req`, `TimestampStart (timestampStart): DateTimeOffset !req`, `TimestampEnd (timestampEnd): DateTimeOffset !req`, `State (state): TaskState !req`, `Resolved (resolved): bool !req`, `TimestampResolved (timestampResolved): DateTimeOffset?`, `DeviceIds (deviceIds): IReadOnlyList<int>?`, `SiteIds (siteIds): IReadOnlyList<int>?`, `SiteAccessIds (siteAccessIds): IReadOnlyList<int>?`, `DowntimeEventIds (downtimeEventIds): IReadOnlyList<int>?`, `StatusIds (statusIds): IReadOnlyList<int>?`, `NumberOfComments (numberOfComments): int !req`, `Comments (comments): IReadOnlyList<TaskComment>?`, `Recurrence (recurrence): object?`, `MainTaskId (mainTaskId): int?`, `Assignee (assignee): Assignee?` (union), `Metadata (metadata): IReadOnlyList<MetadataField>?` | `Models/TasksResponse.cs` |
| `TimeZoneConfiguration` | The time zone configuration. | `Title (title): string !req`, `UtcOffset (utcOffset): double !req`, `UtcOffsetDst (utcOffsetDst): double !req`, `DstTimestampStart (dstTimestampStart): DateTimeOffset !req`, `DstTimestampEnd (dstTimestampEnd): DateTimeOffset !req` | `Models/TimeZoneConfiguration.cs` |
| `TimeZoneModel` | — | `Title (title): string !req`, `UtcOffset (utcOffset): double !req`, `UtcOffsetDst (utcOffsetDst): double !req`, `DstTimestampStart (dstTimestampStart): DateTimeOffset !req`, `DstTimestampEnd (dstTimestampEnd): DateTimeOffset !req` | `Models/TimeZoneModel.cs` |
| `TurbineType` | Turbine-specific type information. | `TurbineTypeId (turbineTypeId): int?`, `Title (title): string?`, `Manufacturer (manufacturer): string?`, `Model (model): string?`, `Controller (controller): string?`, `RatedPower (ratedPower): int?`, `MaxRotorSpeed (maxRotorSpeed): double?` | `Models/TurbineType.cs` |
| `User` | — | `FirstName (firstName): string !req`, `LastName (lastName): string !req` | `Models/User.cs` |
| `Worklog400Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Worklog400Error.cs` |
| `Worklog400Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Worklog400Error1.cs` |
| `Worklog429Error` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Worklog429Error.cs` |
| `Worklog429Error1` | — | `Status (status): int !req`, `Title (title): string !req` | `Models/Worklog429Error1.cs` |
| `WorklogResponse` | A worklog item. | `WorklogItemId (worklogItemId): int?`, `Timestamp (timestamp): DateTimeOffset?`, `SiteId (siteId): int?`, `HoursWorked (hoursWorked): double?`, `Comment (comment): string?` | `Models/WorklogResponse.cs` |
| `WorklogResponse1` | — | `WorklogItemId (worklogItemId): int?`, `Timestamp (timestamp): DateTimeOffset?`, `SiteId (siteId): int?`, `HoursWorked (hoursWorked): double?`, `Comment (comment): string?` | `Models/WorklogResponse1.cs` |
