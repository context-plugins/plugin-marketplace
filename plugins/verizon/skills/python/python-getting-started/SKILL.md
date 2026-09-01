---
name: "python-getting-started"
description: "Verizon Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Verizon Python SDK contract question or writing any SDK code."
---

# Getting started with the Verizon Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Verizon Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-verizon` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `verizon/` and `pyproject.toml` of the generated package at version `v1.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Verizon |
| Distribution name (what you install) | `verizon` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `verizon` — the same string you install |
| Source repository | https://github.com/context-plugins/verizon-python-sdk |
| Source branch | `main` |
| Version | `v1.0` |
| Sync client class | `VerizonClient` (alias `Client`) |
| Async client class | `AsyncVerizonClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `server_config` · `timeout` (default `30.0`) · `thingspace_oauth` · `vz_m2_m_token` · `session_token` · `thingspace_oauth1`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **OAuth 2.0** client credentials — set `thingspace_oauth` · **API key** in the `VZ-M2M-Token` header — set `vz_m2_m_token` · **API key** in the `SessionToken` header — set `session_token` · **OAuth 2.0** client credentials — set `thingspace_oauth1` |
| Environments | 5 environments (default `"production"`) × 15 named servers, through `server_config` |
| Base-URL config | `ServerConfig` (`verizon/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 314 operations across 88 controllers · 781 models · 50 unions · 61 enums · 229 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/verizon-python-sdk> — into the same environment your project runs in:

```bash
pip install "verizon @ git+https://github.com/context-plugins/verizon-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from verizon import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`verizon/__init__.py` exports exactly 8 names beside the `verizon.models` subpackage it re-exports:

```python
from verizon import (
    AsyncClient,
    AsyncVerizonClient,
    Client,
    Environment,
    ServerConfig,
    ServerConfigDict,
    ServerConfigOrDict,
    VerizonClient,
)
```

Everything else comes from its own subpackage, and the split matters because the four places a caller reaches for are four different modules:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `verizon.models` |
| Enums (and their open `…OrStr` aliases) | `verizon.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `ClientCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `verizon.core` |
| Per-operation error *unions* | `verizon.errors` (`ActivateDeviceThroughProfileErrorBody`, …) |

`verizon.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments and servers

The API declares 15 named servers across 5 environments, so the constructor takes `environment` first, then `timeout`, then `server_config: ServerConfigOrDict | None = None`. The environment selects which set of base URLs the config resolves against:

| `environment=` | Base URL | Hosting |
| --- | --- | --- |
| `"production"` *(default)* | `https://thingspace.verizon.com/api/auth/v1` | — |
| `"staging"` | `https://staging.thingspace.verizon.com/api/auth/v1` | — |
| `"dev"` | `https://staging.thingspace.verizon.com/api/auth/v1` | — |
| `"qa"` | `https://thingspace.verizon.com/api/auth/v1` | — |
| `"mock_server_for_limited_availability_see_quick_start"` | `https://staging.thingspace.verizon.com/api/auth/v1` | — |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"production"`**, silently.
- `server_config` overrides individual server URLs within the selected environment.
- The token endpoint is derived from the same base URL (`/oauth2/token`), so it always follows the environment — you never configure it separately.
- The token endpoint is derived from the same base URL (`/`), so it always follows the environment — you never configure it separately.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (four schemes)

OAuth 2.0 client credentials, exposed as the client's `thingspace_oauth=` keyword taking `ClientCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/oauth2/token`.

```python
from verizon import Client
from verizon.core import ClientCredentials

client = Client(thingspace_oauth=ClientCredentials(client_id="…", client_secret="…"))
client = Client(thingspace_oauth={"client_id": "…", "client_secret": "…"})   # equivalent
```

An API key sent as the `VZ-M2M-Token` header, exposed as the client's `vz_m2_m_token=` keyword taking a plain string.

```python
from verizon import Client

client = Client(vz_m2_m_token="<vz_m2_m_token>")
```

An API key sent as the `SessionToken` header, exposed as the client's `session_token=` keyword taking a plain string.

```python
from verizon import Client

client = Client(session_token="<session_token>")
```

OAuth 2.0 client credentials, exposed as the client's `thingspace_oauth1=` keyword taking `ClientCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/`.

```python
from verizon import Client
from verizon.core import ClientCredentials

client = Client(thingspace_oauth1=ClientCredentials(client_id="…", client_secret="…"))
client = Client(thingspace_oauth1={"client_id": "…", "client_secret": "…"})   # equivalent
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.gbi_device_actions5` | `GbiDeviceActions5` / `AsyncGbiDeviceActions5` | 3 | `business_internet_serviceplanchange` · `business_internetactivate_using_post` · `business_internetlist_device_information` |
| `client.account_devices` | `AccountDevices` / `AsyncAccountDevices` | 2 | `get_account_device_information` · `list_account_devices_information` |
| `client.account_requests` | `AccountRequests` / `AsyncAccountRequests` | 1 | `get_current_asynchronous_request_status` |
| `client.account_service_controller` | `AccountServiceController` / `AsyncAccountServiceController` | 1 | `get_account_information_using_get` |
| `client.account_subscriptions` | `AccountSubscriptions` / `AsyncAccountSubscriptions` | 1 | `list_account_subscriptions` |
| `client.accounts` | `Accounts` / `AsyncAccounts` | 3 | `get_account_information` · `list_account_leads` · `list_account_states_and_services` |
| `client.anomaly_settings` | `AnomalySettings` / `AsyncAnomalySettings` | 3 | `activate_anomaly_detection` · `list_anomaly_detection_settings` · `reset_anomaly_detection_parameters` |
| `client.anomaly_triggers` | `AnomalyTriggers` / `AsyncAnomalyTriggers` | 5 | `create_anomaly_detection_trigger` · `delete_anomaly_detection_trigger` · `list_anomaly_detection_trigger_settings` · `list_anomaly_detection_triggers` · `update_anomaly_detection_trigger` |
| `client.anomaly_triggers_v2` | `AnomalyTriggersV2` / `AsyncAnomalyTriggersV2` | 3 | `create_anomaly_detection_trigger_v2` · `list_anomaly_detection_trigger_settings_v2` · `update_anomaly_detection_trigger_v2` |
| `client.billing` | `Billing` / `AsyncBilling` | 4 | `add_account` · `cancel_managed_account_action` · `list_managed_account` · `managed_account_action` |
| `client.campaigns_v2` | `CampaignsV2` / `AsyncCampaignsV2` | 7 | `cancel_campaign` · `get_campaign_information` · `schedule_campaign_firmware_upgrade` · `schedule_file_upgrade` · `schedule_sw_upgrade_http_devices` · `update_campaign_dates` · … |
| `client.campaigns_v3` | `CampaignsV3` / `AsyncCampaignsV3` | 5 | `cancel_campaign2` · `get_campaign_information2` · `schedule_campaign_firmware_upgrade2` · `update_campaign_dates2` · `update_campaign_firmware_devices2` |
| `client.client_logging` | `ClientLogging` / `AsyncClientLogging` | 6 | `disable_device_logging` · `disable_logging_for_devices` · `enable_device_logging` · `enable_logging_for_devices` · `list_device_logs` · `list_devices_with_logging_enabled` |
| `client.cloud_connector_devices` | `CloudConnectorDevices` / `AsyncCloudConnectorDevices` | 6 | `delete_device_from_account` · `find_device_by_property_values` · `search_device_event_history` · `search_devices_resources_by_property_values` · `search_sensor_readings` · `update_devices_configuration_value` |
| `client.cloud_connector_subscriptions` | `CloudConnectorSubscriptions` / `AsyncCloudConnectorSubscriptions` | 3 | `create_subscription` · `delete_subscription` · `query_subscription` |
| `client.configuration_files` | `ConfigurationFiles` / `AsyncConfigurationFiles` | 2 | `get_list_of_files` · `upload_config_file` |
| `client.connectivity_callbacks` | `ConnectivityCallbacks` / `AsyncConnectivityCallbacks` | 3 | `deregister_callback` · `list_registered_callbacks` · `register_callback` |
| `client.create_price_plan_triggers` | `CreatePricePlanTriggers` / `AsyncCreatePricePlanTriggers` | 1 | `create_trigger_rules` |
| `client.device_actions` | `DeviceActions` / `AsyncDeviceActions` | 7 | `account_information` · `aggregate_usage` · `daily_usage` · `get_asynchronous_request_status` · `retrieve_device_provisioning_history` · `retrieve_the_global_device_list` · … |
| `client.device_credential_management` | `DeviceCredentialManagement` / `AsyncDeviceCredentialManagement` | 4 | `drop_credentials` · `generate_credentials` · `reset_credentials` · `retrieve_credentials` |
| `client.device_diagnostics` | `DeviceDiagnostics` / `AsyncDeviceDiagnostics` | 2 | `device_reachability_status_using_post` · `retrieve_active_monitors_using_post` |
| `client.device_groups` | `DeviceGroups` / `AsyncDeviceGroups` | 5 | `create_device_group` · `delete_device_group` · `get_device_group_information` · `list_device_groups` · `update_device_group` |
| `client.device_location_callbacks` | `DeviceLocationCallbacks` / `AsyncDeviceLocationCallbacks` | 4 | `cancel_async_report` · `deregister_callback2` · `list_registered_callbacks2` · `register_callback2` |
| `client.device_management` | `DeviceManagement` / `AsyncDeviceManagement` | 29 | `activate_service_for_devices` · `add_devices` · `billed_usage_info` · `change_devices_service_plan` · `check_devices_availability_for_activation` · `deactivate_service_for_devices` · … |
| `client.device_monitoring` | `DeviceMonitoring` / `AsyncDeviceMonitoring` | 2 | `device_reachability` · `stop_device_reachability` |
| `client.device_profile_management` | `DeviceProfileManagement` / `AsyncDeviceProfileManagement` | 4 | `activate_device_through_profile` · `profile_to_activate_device` · `profile_to_deactivate_device` · `profile_to_set_fallback_attribute` |
| `client.device_reports` | `DeviceReports` / `AsyncDeviceReports` | 3 | `calculate_aggregated_report_asynchronous` · `calculate_aggregated_report_synchronous` · `get_sessions_report` |
| `client.device_sms_messaging` | `DeviceSmsMessaging` / `AsyncDeviceSmsMessaging` | 4 | `get_sms_messages` · `list_sms_message_history` · `send_an_sms_message` · `start_sms_message_delivery` |
| `client.device_service_management` | `DeviceServiceManagement` / `AsyncDeviceServiceManagement` | 2 | `get_device_hyper_precise_status` · `update_device_hyper_precise_status` |
| `client.devices_location_subscriptions` | `DevicesLocationSubscriptions` / `AsyncDevicesLocationSubscriptions` | 2 | `get_location_service_subscription_status` · `get_location_service_usage` |
| `client.devices_locations` | `DevicesLocations` / `AsyncDevicesLocations` | 6 | `cancel_queued_location_report_generation` · `create_location_report` · `get_location_report_status` · `list_devices_locations_asynchronous` · `list_devices_locations_synchronous` · `retrieve_location_report` |
| `client.diagnostics_callbacks` | `DiagnosticsCallbacks` / `AsyncDiagnosticsCallbacks` | 3 | `get_diagnostics_subscription_callback_info` · `register_diagnostics_callback_url` · `unregister_diagnostics_callback` |
| `client.diagnostics_factory_reset` | `DiagnosticsFactoryReset` / `AsyncDiagnosticsFactoryReset` | 1 | `decives_restart` |
| `client.diagnostics_history` | `DiagnosticsHistory` / `AsyncDiagnosticsHistory` | 1 | `get_diagnostics_history` |
| `client.diagnostics_observations` | `DiagnosticsObservations` / `AsyncDiagnosticsObservations` | 2 | `start_diagnostics_observation` · `stop_diagnostics_observation` |
| `client.diagnostics_settings` | `DiagnosticsSettings` / `AsyncDiagnosticsSettings` | 1 | `list_diagnostics_settings` |
| `client.diagnostics_subscriptions` | `DiagnosticsSubscriptions` / `AsyncDiagnosticsSubscriptions` | 1 | `get_diagnostics_subscription` |
| `client.etxapp_configuration` | `EtxappConfiguration` / `AsyncEtxappConfiguration` | 5 | `create_configuration` · `delete_configuration` · `get_configuration` · `get_configuration_list` · `update_configuration` |
| `client.etxregistration` | `Etxregistration` / `AsyncEtxregistration` | 7 | `get_etx_client_certificate` · `get_etx_connection_url` · `get_etx_connection_url_multi_mec` · `query_etx_devices` · `register_etx_client` · `renew_etx_client_certificate` · … |
| `client.exclusions` | `Exclusions` / `AsyncExclusions` | 6 | `devices_location_get_consent_async` · `devices_location_give_consent_async` · `devices_location_update_consent` · `exclude_devices` · `list_excluded_devices` · `remove_devices_from_exclusion_list` |
| `client.firmware_v1` | `FirmwareV1` / `AsyncFirmwareV1` | 5 | `cancel_scheduled_firmware_upgrade` · `list_available_firmware` · `list_firmware_upgrade_details` · `schedule_firmware_upgrade` · `update_firmware_upgrade_devices` |
| `client.firmware_v3` | `FirmwareV3` / `AsyncFirmwareV3` | 3 | `list_available_firmware2` · `report_device_firmware` · `synchronize_device_firmware` |
| `client.global_reporting` | `GlobalReporting` / `AsyncGlobalReporting` | 2 | `retrieve_global_list` · `deviceprovhistory_using_post` |
| `client.hpl_device_management` | `HplDeviceManagement` / `AsyncHplDeviceManagement` | 1 | `add_devices_hyper_precise` |
| `client.hyper_precise_location_callbacks` | `HyperPreciseLocationCallbacks` / `AsyncHyperPreciseLocationCallbacks` | 3 | `deregister_callback6` · `list_registered_callbacks6` · `register_callback6` |
| `client.intelligence_service_controller` | `IntelligenceServiceController` / `AsyncIntelligenceServiceController` | 2 | `set_connection_planner` · `status_connection_planner` |
| `client.managing_e_sim_profiles` | `ManagingESimProfiles` / `AsyncManagingESimProfiles` | 10 | `activate_a_device_profile` · `deactivate_a_device_profile` · `delete_a_device_profile` · `device_suspend` · `download_a_device_profile` · `enable_a_device_profile` · … |
| `client.pwn` | `Pwn` / `AsyncPwn` | 7 | `change_pwn_device_i_paddress` · `change_pwn_device_profile` · `change_pwn_device_state_activate` · `change_pwn_device_state_deactivate` · `get_pwn_performance_consent` · `get_profile_list` · … |
| `client.promotion_period_information` | `PromotionPeriodInformation` / `AsyncPromotionPeriodInformation` | 2 | `get_promo_device_aggregate_usage_history` · `get_promo_device_usage_history` |
| `client.retrieve_rate_plan_list` | `RetrieveRatePlanList` / `AsyncRetrieveRatePlanList` | 1 | `get_rate_plan_list` |
| `client.retrieve_the_triggers` | `RetrieveTheTriggers` / `AsyncRetrieveTheTriggers` | 4 | `get_all_available_triggers` · `get_all_triggers_by_account_name` · `get_all_triggers_by_trigger_category` · `get_triggers_by_id` |
| `client.sim_actions` | `SimActions` / `AsyncSimActions` | 3 | `newactivatecode` · `setactivate_using_post` · `setdeactivate_using_post` |
| `client.sim_secure_for_io_t_licenses` | `SimSecureForIoTLicenses` / `AsyncSimSecureForIoTLicenses` | 2 | `assign_license_to_devices` · `unassign_license_to_devices` |
| `client.sms` | `Sms` / `AsyncSms` | 3 | `list_devices_sms_messages` · `send_sms_to_device` · `start_queued_sms_delivery` |
| `client.sensor_insights_device_profile` | `SensorInsightsDeviceProfile` / `AsyncSensorInsightsDeviceProfile` | 4 | `create_a_profile` · `delete_a_profile` · `query_a_profile` · `update_a_profile` |
| `client.sensor_insights_devices` | `SensorInsightsDevices` / `AsyncSensorInsightsDevices` | 6 | `sensor_insights_device_action_set_request` · `sensor_insights_last_reported_time_request` · `sensor_insights_list_device_experience_history_request` · `sensor_insights_list_devices_request` · `sensor_insights_list_network_experience_history_request` · `sensor_insights_patch_device_request` |
| `client.sensor_insights_gateways` | `SensorInsightsGateways` / `AsyncSensorInsightsGateways` | 1 | `sensor_insights_list_gateway_devices_request` |
| `client.sensor_insights_health_score` | `SensorInsightsHealthScore` / `AsyncSensorInsightsHealthScore` | 2 | `sensor_insights_get_network_health_score_response` · `sensor_insights_health_score_summary` |
| `client.sensor_insights_notification_groups` | `SensorInsightsNotificationGroups` / `AsyncSensorInsightsNotificationGroups` | 6 | `sensor_insights_add_users_to_notification_group_request` · `sensor_insights_create_notification_group_request` · `sensor_insights_delete_notification_group` · `sensor_insights_list_notification_group_request` · `sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_update_notification_group_request` |
| `client.sensor_insights_rules` | `SensorInsightsRules` / `AsyncSensorInsightsRules` | 2 | `sensor_insights_list_rules_request` · `sensor_insights_overwrite_rule_request` |
| `client.sensor_insights_sensors` | `SensorInsightsSensors` / `AsyncSensorInsightsSensors` | 5 | `sensor_insights_list_sensor_devices_request` · `sensor_insights_off_board_sensor_request` · `sensor_insights_on_board_sensor_request` · `sensor_insights_sensor_off_boarding_status_request` · `sensor_insights_sensor_on_board_status_request` |
| `client.sensor_insights_smart_alert_metrics` | `SensorInsightsSmartAlertMetrics` / `AsyncSensorInsightsSmartAlertMetrics` | 1 | `sensorinsightsmetricsquery` |
| `client.sensor_insights_smart_alerts` | `SensorInsightsSmartAlerts` / `AsyncSensorInsightsSmartAlerts` | 3 | `sensor_insights_bulk_update` · `sensor_insights_list_smart_alerts_request` · `sensor_insights_patch_smart_alert_request` |
| `client.sensor_insights_users` | `SensorInsightsUsers` / `AsyncSensorInsightsUsers` | 4 | `sensor_insights_create_user_request` · `sensor_insights_delete_user` · `sensor_insights_list_user_request` · `sensor_insights_update_user_request` |
| `client.server_logging` | `ServerLogging` / `AsyncServerLogging` | 1 | `get_device_check_in_history` |
| `client.service_plans` | `ServicePlans` / `AsyncServicePlans` | 1 | `list_account_service_plans` |
| `client.session_management` | `SessionManagement` / `AsyncSessionManagement` | 3 | `end_connectivity_management_session` · `reset_connectivity_management_password` · `start_connectivity_management_session` |
| `client.software_management_callbacks_v1` | `SoftwareManagementCallbacksV1` / `AsyncSoftwareManagementCallbacksV1` | 3 | `deregister_callback3` · `list_registered_callbacks3` · `register_callback3` |
| `client.software_management_callbacks_v2` | `SoftwareManagementCallbacksV2` / `AsyncSoftwareManagementCallbacksV2` | 4 | `deregister_callback4` · `list_registered_callbacks4` · `register_callback4` · `update_callback` |
| `client.software_management_callbacks_v3` | `SoftwareManagementCallbacksV3` / `AsyncSoftwareManagementCallbacksV3` | 4 | `deregister_callback5` · `list_registered_callbacks5` · `register_callback5` · `update_callback2` |
| `client.software_management_licenses_v1` | `SoftwareManagementLicensesV1` / `AsyncSoftwareManagementLicensesV1` | 5 | `assign_licenses_to_devices` · `create_list_of_licenses_to_remove` · `delete_list_of_licenses_to_remove` · `list_licenses_to_remove` · `remove_licenses_from_devices` |
| `client.software_management_licenses_v2` | `SoftwareManagementLicensesV2` / `AsyncSoftwareManagementLicensesV2` | 6 | `assign_licenses_to_devices2` · `create_list_of_licenses_to_remove2` · `delete_list_of_licenses_to_remove2` · `get_account_license_status2` · `list_licenses_to_remove2` · `remove_licenses_from_devices2` |
| `client.software_management_licenses_v3` | `SoftwareManagementLicensesV3` / `AsyncSoftwareManagementLicensesV3` | 3 | `assign_licenses_to_devices3` · `get_account_licenses_status` · `remove_licenses_from_devices3` |
| `client.software_management_reports_v1` | `SoftwareManagementReportsV1` / `AsyncSoftwareManagementReportsV1` | 3 | `get_device_firmware_upgrade_history` · `list_account_devices` · `list_upgrades_for_specified_status` |
| `client.software_management_reports_v2` | `SoftwareManagementReportsV2` / `AsyncSoftwareManagementReportsV2` | 5 | `get_campaign_device_status` · `get_campaign_history_by_status` · `get_device_firmware_upgrade_history2` · `list_account_devices2` · `list_available_software` |
| `client.software_management_reports_v3` | `SoftwareManagementReportsV3` / `AsyncSoftwareManagementReportsV3` | 3 | `get_campaign_device_status2` · `get_campaign_history_by_status2` · `get_device_firmware_upgrade_history3` |
| `client.software_management_subscriptions_v1` | `SoftwareManagementSubscriptionsV1` / `AsyncSoftwareManagementSubscriptionsV1` | 2 | `get_account_license_status` · `get_account_subscription_status` |
| `client.software_management_subscriptions_v2` | `SoftwareManagementSubscriptionsV2` / `AsyncSoftwareManagementSubscriptionsV2` | 1 | `get_account_subscription_status2` |
| `client.software_management_subscriptions_v3` | `SoftwareManagementSubscriptionsV3` / `AsyncSoftwareManagementSubscriptionsV3` | 1 | `get_account_subscription_status3` |
| `client.targets` | `Targets` / `AsyncTargets` | 5 | `create_azure_central_io_t_application` · `create_target` · `delete_target` · `generate_target_external_id` · `query_target` |
| `client.thing_space_quality_of_service_api_actions` | `ThingSpaceQualityOfServiceApiActions` / `AsyncThingSpaceQualityOfServiceApiActions` | 2 | `create_a_thing_space_quality_of_service_api_subscription` · `stop_a_thing_space_quality_of_service_api_subscription` |
| `client.update_price_plan_triggers` | `UpdatePricePlanTriggers` / `AsyncUpdatePricePlanTriggers` | 1 | `update_trigger_rules` |
| `client.update_triggers` | `UpdateTriggers` / `AsyncUpdateTriggers` | 1 | `update_all_available_triggers` |
| `client.usage_trigger_management` | `UsageTriggerManagement` / `AsyncUsageTriggerManagement` | 3 | `create_new_trigger` · `delete_trigger` · `update_trigger` |
| `client.wireless_network_performance` | `WirelessNetworkPerformance` / `AsyncWirelessNetworkPerformance` | 5 | `device_experience30days_history` · `device_experience_bulk_latest` · `domestic4_g_and5_g_nationwide_network_coverage` · `near_real_time_network_conditions` · `site_proximity` |
| `client.device_role_controller` | `DeviceRoleController` / `AsyncDeviceRoleController` | 1 | `get_acl_rules_by_vendor_id` |
| `client.e_uicc_device_profile_management` | `EUiccDeviceProfileManagement` / `AsyncEUiccDeviceProfileManagement` | 5 | `delete_local_profile` · `disable_local_profile` · `download_local_profile_to_disable` · `download_local_profile_to_enable` · `enable_local_profile` |
| `client.map_message_controller` | `MapMessageController` / `AsyncMapMessageController` | 4 | `delete_map_message` · `download_map_messages` · `ingest_map_messages` · `query_map_messages` |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `verizon/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `verizon/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/verizon-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/verizon-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `verizon/models/success201.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `verizon/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import verizon, pathlib; print(pathlib.Path(verizon.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/verizon` on Windows, `.venv/lib/python3.*/site-packages/verizon` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

| Question | Module |
| --- | --- |
| An operation's real signature, parameters and return type | `apis/<controller>.py` |
| Client construction, keywords, controller wiring | `client.py`, `async_client.py`, `base_client.py` |
| Timeout default and validation | `base_client.py` (`DEFAULT_TIMEOUT = 30.0`) |
| The request/response pipeline, 401 handling, 2xx-vs-error split | `core/raw_client.py` |
| Exception shape (`ApiError.error`, `.response`, `.status_code`) | `core/exceptions.py` |
| `Success`/`Failure`/`RawError` | `core/results.py` |
| Per-call overrides | `core/request_options.py` |
| `UNSET`, `Optional`, `OptionalNullable` | `core/optionality.py` |
| Model base config, `to_dict`/`to_json` | `core/models.py` |
| A model's members, required vs `UNSET`, wire aliases | `models/<model_name>.py` |
| An enum's members and wire values | `models/enums/` |
| Open-enum coercion | `core/converters/open_enum.py` |
| Date/time wire formats — `Date`, `RFC3339DateTime`, `RFC1123DateTime`, `UnixSecondsDateTime` (`Annotated` aliases over `datetime.date` / `datetime.datetime`; not in the map's Type sources) | `core/converters/date_time.py` |
| Transport protocols (the test seam) | `core/transport.py` |
| httpx adapter, proxy/TLS knobs | `core/httpx_transport.py` |
| Token fetch, credential placement | `core/auth/`, `core/auth/models.py` |
| Base-URL resolution | `server/server_config.py`, `server/server.py` |
| An operation's error mapper (status → schema) | `errors/<operation>_error.py` |

**Read scoped.** These modules carry long design docstrings; `grep -n` for the symbol and read the surrounding lines rather than whole files. Never quote a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, required members with wire aliases, the error union, enum values — into a short **contract sheet** in your plan or working notes, then implement from the sheet. Don't re-open a module per member, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows and nobody needs it.
- Trust the interpreter over this page: if a name here ever fails to type-check or import, re-read the module the table above names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant module. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`. (*The signature won't tell you:* the constructor is keyword-only, so nothing can be passed positionally; the client owns an `httpx` connection pool and you **must** `close()` (sync) or `await aclose()` (async) or use it as a context manager; it must be long-lived and module- or app-scoped, never rebuilt per request; the sync and async clients do not mix; and the transport-override keyword differs by client — `custom_http_client` vs `custom_async_http_client`.)
2. **Authentication** — load **python-authentication** before you set credentials. The four schemes are `thingspace_oauth=`, `vz_m2_m_token=`, `session_token=` and `thingspace_oauth1=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; the token is fetched lazily and cached by the client; and a **failed token fetch** raises something other than what a caller expects and **bypasses the non-raising response mode** entirely. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; **18 operations return `None`**, so `with_raw_response` is the only way to observe their status code; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`), so an unknown wire value passes through as a plain `str` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — retry/backoff is entirely yours to build or deliberately omit; `timeout` defaults to `30.0` and is a single float that maps onto `httpx`'s timeout semantics rather than bounding the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client`, or `respx` at the `httpx` layer — not the client class; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **The 18 operations that return `None`** — `client_logging.disable_device_logging` · `client_logging.disable_logging_for_devices` · `cloud_connector_devices.delete_device_from_account` · `cloud_connector_subscriptions.delete_subscription` · `etxapp_configuration.delete_configuration` · `etxapp_configuration.update_configuration` · `etxregistration.unregister_etx_clients` · `hyper_precise_location_callbacks.deregister_callback6` · `sensor_insights_notification_groups.sensor_insights_add_users_to_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_delete_notification_group` · `sensor_insights_notification_groups.sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_sensors.sensor_insights_off_board_sensor_request` · `sensor_insights_sensors.sensor_insights_on_board_sensor_request` · `sensor_insights_users.sensor_insights_delete_user` · `software_management_callbacks_v1.deregister_callback3` · `software_management_licenses_v1.delete_list_of_licenses_to_remove` · `targets.delete_target` · `map_message_controller.delete_map_message`. Their raw peers are `ApiResult[None, …]`, so `with_raw_response` is the only way to observe the status code.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — there are **23** typed error bodies in this SDK, so the union is never uniform. Every union is `<Typed> | RawError`:
   1. `ConnectivityManagementResult` — 51 operations (`account_requests.get_current_asynchronous_request_status` · `accounts.get_account_information` · `accounts.list_account_leads` · `accounts.list_account_states_and_services` · `connectivity_callbacks.deregister_callback` · `connectivity_callbacks.list_registered_callbacks` · `connectivity_callbacks.register_callback` · `device_diagnostics.device_reachability_status_using_post` · `device_diagnostics.retrieve_active_monitors_using_post` · `device_groups.create_device_group` · `device_groups.delete_device_group` · `device_groups.get_device_group_information` · `device_groups.list_device_groups` · `device_groups.update_device_group` · `device_management.activate_service_for_devices` · `device_management.add_devices` · `device_management.billed_usage_info` · `device_management.change_devices_service_plan` · `device_management.check_devices_availability_for_activation` · `device_management.deactivate_service_for_devices` · `device_management.delete_deactivated_devices` · `device_management.device_upload_status` · `device_management.get_device_extended_diagnostic_information` · `device_management.get_device_service_suspension_status` · `device_management.list_current_devices_prl_version` · `device_management.list_devices_information` · `device_management.list_devices_provisioning_history` · `device_management.list_devices_usage_history` · `device_management.list_devices_with_imei_iccid_mismatch` · `device_management.move_devices_within_accounts_of_profile` · `device_management.restore_service_for_suspended_devices` · `device_management.retrieve_aggregate_device_usage_history` · `device_management.retrieve_device_connection_history` · `device_management.suspend_service_for_devices` · `device_management.update_device_id` · `device_management.update_devices_contact_information` · `device_management.update_devices_cost_center_code` · `device_management.update_devices_custom_fields` · `device_management.update_devices_state` · `device_management.upload_activate_device` · `device_management.usage_segmentation_label_association` · `device_management.usage_segmentation_label_deletion` · `sms.list_devices_sms_messages` · `sms.send_sms_to_device` · `sms.start_queued_sms_delivery` · `service_plans.list_account_service_plans` · `session_management.end_connectivity_management_session` · `session_management.reset_connectivity_management_password` · `session_management.start_connectivity_management_session` · `e_uicc_device_profile_management.download_local_profile_to_disable` · `e_uicc_device_profile_management.download_local_profile_to_enable`); distinguishing members *none required*
   2. `ManagementError400` — 33 operations (`sensor_insights_device_profile.create_a_profile` · `sensor_insights_device_profile.delete_a_profile` · `sensor_insights_device_profile.query_a_profile` · `sensor_insights_device_profile.update_a_profile` · `sensor_insights_devices.sensor_insights_device_action_set_request` · `sensor_insights_devices.sensor_insights_last_reported_time_request` · `sensor_insights_devices.sensor_insights_list_device_experience_history_request` · `sensor_insights_devices.sensor_insights_list_network_experience_history_request` · `sensor_insights_devices.sensor_insights_patch_device_request` · `sensor_insights_gateways.sensor_insights_list_gateway_devices_request` · `sensor_insights_health_score.sensor_insights_get_network_health_score_response` · `sensor_insights_health_score.sensor_insights_health_score_summary` · `sensor_insights_notification_groups.sensor_insights_add_users_to_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_create_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_delete_notification_group` · `sensor_insights_notification_groups.sensor_insights_list_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_update_notification_group_request` · `sensor_insights_rules.sensor_insights_list_rules_request` · `sensor_insights_rules.sensor_insights_overwrite_rule_request` · `sensor_insights_sensors.sensor_insights_list_sensor_devices_request` · `sensor_insights_sensors.sensor_insights_off_board_sensor_request` · `sensor_insights_sensors.sensor_insights_on_board_sensor_request` · `sensor_insights_sensors.sensor_insights_sensor_off_boarding_status_request` · `sensor_insights_sensors.sensor_insights_sensor_on_board_status_request` · `sensor_insights_smart_alert_metrics.sensorinsightsmetricsquery` · `sensor_insights_smart_alerts.sensor_insights_bulk_update` · `sensor_insights_smart_alerts.sensor_insights_list_smart_alerts_request` · `sensor_insights_smart_alerts.sensor_insights_patch_smart_alert_request` · `sensor_insights_users.sensor_insights_create_user_request` · `sensor_insights_users.sensor_insights_delete_user` · `sensor_insights_users.sensor_insights_list_user_request` · `sensor_insights_users.sensor_insights_update_user_request`); distinguishing members *none required*
   3. `ManagementError403` — 33 operations (`sensor_insights_device_profile.create_a_profile` · `sensor_insights_device_profile.delete_a_profile` · `sensor_insights_device_profile.query_a_profile` · `sensor_insights_device_profile.update_a_profile` · `sensor_insights_devices.sensor_insights_device_action_set_request` · `sensor_insights_devices.sensor_insights_last_reported_time_request` · `sensor_insights_devices.sensor_insights_list_device_experience_history_request` · `sensor_insights_devices.sensor_insights_list_network_experience_history_request` · `sensor_insights_devices.sensor_insights_patch_device_request` · `sensor_insights_gateways.sensor_insights_list_gateway_devices_request` · `sensor_insights_health_score.sensor_insights_get_network_health_score_response` · `sensor_insights_health_score.sensor_insights_health_score_summary` · `sensor_insights_notification_groups.sensor_insights_add_users_to_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_create_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_delete_notification_group` · `sensor_insights_notification_groups.sensor_insights_list_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_update_notification_group_request` · `sensor_insights_rules.sensor_insights_list_rules_request` · `sensor_insights_rules.sensor_insights_overwrite_rule_request` · `sensor_insights_sensors.sensor_insights_list_sensor_devices_request` · `sensor_insights_sensors.sensor_insights_off_board_sensor_request` · `sensor_insights_sensors.sensor_insights_on_board_sensor_request` · `sensor_insights_sensors.sensor_insights_sensor_off_boarding_status_request` · `sensor_insights_sensors.sensor_insights_sensor_on_board_status_request` · `sensor_insights_smart_alert_metrics.sensorinsightsmetricsquery` · `sensor_insights_smart_alerts.sensor_insights_bulk_update` · `sensor_insights_smart_alerts.sensor_insights_list_smart_alerts_request` · `sensor_insights_smart_alerts.sensor_insights_patch_smart_alert_request` · `sensor_insights_users.sensor_insights_create_user_request` · `sensor_insights_users.sensor_insights_delete_user` · `sensor_insights_users.sensor_insights_list_user_request` · `sensor_insights_users.sensor_insights_update_user_request`); distinguishing members *none required*
   4. `FotaV2Result` — 32 operations (`campaigns_v2.cancel_campaign` · `campaigns_v2.get_campaign_information` · `campaigns_v2.schedule_campaign_firmware_upgrade` · `campaigns_v2.schedule_file_upgrade` · `campaigns_v2.schedule_sw_upgrade_http_devices` · `campaigns_v2.update_campaign_dates` · `campaigns_v2.update_campaign_firmware_devices` · `client_logging.disable_device_logging` · `client_logging.disable_logging_for_devices` · `client_logging.enable_device_logging` · `client_logging.enable_logging_for_devices` · `client_logging.list_device_logs` · `client_logging.list_devices_with_logging_enabled` · `configuration_files.get_list_of_files` · `configuration_files.upload_config_file` · `server_logging.get_device_check_in_history` · `software_management_callbacks_v2.deregister_callback4` · `software_management_callbacks_v2.list_registered_callbacks4` · `software_management_callbacks_v2.register_callback4` · `software_management_callbacks_v2.update_callback` · `software_management_licenses_v2.assign_licenses_to_devices2` · `software_management_licenses_v2.create_list_of_licenses_to_remove2` · `software_management_licenses_v2.delete_list_of_licenses_to_remove2` · `software_management_licenses_v2.get_account_license_status2` · `software_management_licenses_v2.list_licenses_to_remove2` · `software_management_licenses_v2.remove_licenses_from_devices2` · `software_management_reports_v2.get_campaign_device_status` · `software_management_reports_v2.get_campaign_history_by_status` · `software_management_reports_v2.get_device_firmware_upgrade_history2` · `software_management_reports_v2.list_account_devices2` · `software_management_reports_v2.list_available_software` · `software_management_subscriptions_v2.get_account_subscription_status2`); distinguishing members `error_code` · `error_message`
   5. `ManagementError` — 32 operations (`sensor_insights_device_profile.create_a_profile` · `sensor_insights_device_profile.delete_a_profile` · `sensor_insights_device_profile.query_a_profile` · `sensor_insights_device_profile.update_a_profile` · `sensor_insights_devices.sensor_insights_list_device_experience_history_request` · `sensor_insights_devices.sensor_insights_list_devices_request` · `sensor_insights_devices.sensor_insights_list_network_experience_history_request` · `sensor_insights_devices.sensor_insights_patch_device_request` · `sensor_insights_gateways.sensor_insights_list_gateway_devices_request` · `sensor_insights_health_score.sensor_insights_get_network_health_score_response` · `sensor_insights_health_score.sensor_insights_health_score_summary` · `sensor_insights_notification_groups.sensor_insights_add_users_to_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_create_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_delete_notification_group` · `sensor_insights_notification_groups.sensor_insights_list_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_update_notification_group_request` · `sensor_insights_rules.sensor_insights_list_rules_request` · `sensor_insights_rules.sensor_insights_overwrite_rule_request` · `sensor_insights_sensors.sensor_insights_list_sensor_devices_request` · `sensor_insights_sensors.sensor_insights_off_board_sensor_request` · `sensor_insights_sensors.sensor_insights_on_board_sensor_request` · `sensor_insights_sensors.sensor_insights_sensor_off_boarding_status_request` · `sensor_insights_sensors.sensor_insights_sensor_on_board_status_request` · `sensor_insights_smart_alert_metrics.sensorinsightsmetricsquery` · `sensor_insights_smart_alerts.sensor_insights_bulk_update` · `sensor_insights_smart_alerts.sensor_insights_list_smart_alerts_request` · `sensor_insights_smart_alerts.sensor_insights_patch_smart_alert_request` · `sensor_insights_users.sensor_insights_create_user_request` · `sensor_insights_users.sensor_insights_delete_user` · `sensor_insights_users.sensor_insights_list_user_request` · `sensor_insights_users.sensor_insights_update_user_request`); distinguishing members *none required*
   6. `ManagementError500` — 28 operations (`sensor_insights_device_profile.create_a_profile` · `sensor_insights_device_profile.delete_a_profile` · `sensor_insights_device_profile.query_a_profile` · `sensor_insights_device_profile.update_a_profile` · `sensor_insights_devices.sensor_insights_list_device_experience_history_request` · `sensor_insights_devices.sensor_insights_list_network_experience_history_request` · `sensor_insights_devices.sensor_insights_patch_device_request` · `sensor_insights_gateways.sensor_insights_list_gateway_devices_request` · `sensor_insights_health_score.sensor_insights_get_network_health_score_response` · `sensor_insights_health_score.sensor_insights_health_score_summary` · `sensor_insights_notification_groups.sensor_insights_add_users_to_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_create_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_list_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_update_notification_group_request` · `sensor_insights_rules.sensor_insights_list_rules_request` · `sensor_insights_rules.sensor_insights_overwrite_rule_request` · `sensor_insights_sensors.sensor_insights_list_sensor_devices_request` · `sensor_insights_sensors.sensor_insights_on_board_sensor_request` · `sensor_insights_sensors.sensor_insights_sensor_off_boarding_status_request` · `sensor_insights_sensors.sensor_insights_sensor_on_board_status_request` · `sensor_insights_smart_alert_metrics.sensorinsightsmetricsquery` · `sensor_insights_smart_alerts.sensor_insights_bulk_update` · `sensor_insights_smart_alerts.sensor_insights_list_smart_alerts_request` · `sensor_insights_smart_alerts.sensor_insights_patch_smart_alert_request` · `sensor_insights_users.sensor_insights_create_user_request` · `sensor_insights_users.sensor_insights_list_user_request` · `sensor_insights_users.sensor_insights_update_user_request`); distinguishing members *none required*
   7. `ManagementError404` — 22 operations (`sensor_insights_devices.sensor_insights_device_action_set_request` · `sensor_insights_devices.sensor_insights_last_reported_time_request` · `sensor_insights_devices.sensor_insights_list_device_experience_history_request` · `sensor_insights_devices.sensor_insights_list_network_experience_history_request` · `sensor_insights_devices.sensor_insights_patch_device_request` · `sensor_insights_gateways.sensor_insights_list_gateway_devices_request` · `sensor_insights_notification_groups.sensor_insights_add_users_to_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_delete_notification_group` · `sensor_insights_notification_groups.sensor_insights_list_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_remove_users_from_notification_group_request` · `sensor_insights_notification_groups.sensor_insights_update_notification_group_request` · `sensor_insights_rules.sensor_insights_list_rules_request` · `sensor_insights_rules.sensor_insights_overwrite_rule_request` · `sensor_insights_sensors.sensor_insights_list_sensor_devices_request` · `sensor_insights_sensors.sensor_insights_sensor_off_boarding_status_request` · `sensor_insights_sensors.sensor_insights_sensor_on_board_status_request` · `sensor_insights_smart_alerts.sensor_insights_bulk_update` · `sensor_insights_smart_alerts.sensor_insights_list_smart_alerts_request` · `sensor_insights_smart_alerts.sensor_insights_patch_smart_alert_request` · `sensor_insights_users.sensor_insights_delete_user` · `sensor_insights_users.sensor_insights_list_user_request` · `sensor_insights_users.sensor_insights_update_user_request`); distinguishing members *none required*
   8. `FotaV3Result` — 21 operations (`account_devices.get_account_device_information` · `account_devices.list_account_devices_information` · `campaigns_v3.cancel_campaign2` · `campaigns_v3.get_campaign_information2` · `campaigns_v3.schedule_campaign_firmware_upgrade2` · `campaigns_v3.update_campaign_dates2` · `campaigns_v3.update_campaign_firmware_devices2` · `firmware_v3.list_available_firmware2` · `firmware_v3.report_device_firmware` · `firmware_v3.synchronize_device_firmware` · `software_management_callbacks_v3.deregister_callback5` · `software_management_callbacks_v3.list_registered_callbacks5` · `software_management_callbacks_v3.register_callback5` · `software_management_callbacks_v3.update_callback2` · `software_management_licenses_v3.assign_licenses_to_devices3` · `software_management_licenses_v3.get_account_licenses_status` · `software_management_licenses_v3.remove_licenses_from_devices3` · `software_management_reports_v3.get_campaign_device_status2` · `software_management_reports_v3.get_campaign_history_by_status2` · `software_management_reports_v3.get_device_firmware_upgrade_history3` · `software_management_subscriptions_v3.get_account_subscription_status3`); distinguishing members `error_code` · `error_message`
   9. `FotaV1Result` — 16 operations (`firmware_v1.cancel_scheduled_firmware_upgrade` · `firmware_v1.list_available_firmware` · `firmware_v1.list_firmware_upgrade_details` · `firmware_v1.schedule_firmware_upgrade` · `firmware_v1.update_firmware_upgrade_devices` · `software_management_callbacks_v1.list_registered_callbacks3` · `software_management_callbacks_v1.register_callback3` · `software_management_licenses_v1.assign_licenses_to_devices` · `software_management_licenses_v1.create_list_of_licenses_to_remove` · `software_management_licenses_v1.list_licenses_to_remove` · `software_management_licenses_v1.remove_licenses_from_devices` · `software_management_reports_v1.get_device_firmware_upgrade_history` · `software_management_reports_v1.list_account_devices` · `software_management_reports_v1.list_upgrades_for_specified_status` · `software_management_subscriptions_v1.get_account_license_status` · `software_management_subscriptions_v1.get_account_subscription_status`); distinguishing members `error_code` · `error_message`
   10. `DeviceLocationResult` — 15 operations (`billing.add_account` · `billing.cancel_managed_account_action` · `billing.list_managed_account` · `billing.managed_account_action` · `device_location_callbacks.deregister_callback2` · `device_location_callbacks.list_registered_callbacks2` · `device_location_callbacks.register_callback2` · `devices_location_subscriptions.get_location_service_subscription_status` · `devices_location_subscriptions.get_location_service_usage` · `exclusions.exclude_devices` · `exclusions.list_excluded_devices` · `exclusions.remove_devices_from_exclusion_list` · `usage_trigger_management.create_new_trigger` · `usage_trigger_management.delete_trigger` · `usage_trigger_management.update_trigger`); distinguishing members `error_code` · `error_message`
   11. `RestErrorResponse` — 10 operations (`device_management.device_upload` · `device_monitoring.device_reachability` · `device_monitoring.stop_device_reachability` · `device_profile_management.activate_device_through_profile` · `device_profile_management.profile_to_activate_device` · `device_profile_management.profile_to_deactivate_device` · `device_profile_management.profile_to_set_fallback_attribute` · `e_uicc_device_profile_management.delete_local_profile` · `e_uicc_device_profile_management.disable_local_profile` · `e_uicc_device_profile_management.enable_local_profile`); distinguishing members *none required*
   12. `HyperPreciseLocationResult` — 9 operations (`device_reports.calculate_aggregated_report_asynchronous` · `device_reports.calculate_aggregated_report_synchronous` · `device_reports.get_sessions_report` · `device_service_management.get_device_hyper_precise_status` · `device_service_management.update_device_hyper_precise_status` · `hpl_device_management.add_devices_hyper_precise` · `hyper_precise_location_callbacks.deregister_callback6` · `hyper_precise_location_callbacks.list_registered_callbacks6` · `hyper_precise_location_callbacks.register_callback6`); distinguishing members *none required*
   13. `EtxrespondingError` — 7 operations (`etxregistration.get_etx_client_certificate` · `etxregistration.get_etx_connection_url` · `etxregistration.get_etx_connection_url_multi_mec` · `etxregistration.query_etx_devices` · `etxregistration.register_etx_client` · `etxregistration.renew_etx_client_certificate` · `etxregistration.unregister_etx_clients`); distinguishing members `error` · `description`
   14. `ESimrestErrorResponse` — 5 operations (`global_reporting.retrieve_global_list` · `global_reporting.deviceprovhistory_using_post` · `sim_actions.newactivatecode` · `sim_actions.setactivate_using_post` · `sim_actions.setdeactivate_using_post`); distinguishing members *none required*
   15. `ResponseError` — 5 operations (`etxapp_configuration.create_configuration` · `etxapp_configuration.delete_configuration` · `etxapp_configuration.get_configuration` · `etxapp_configuration.get_configuration_list` · `etxapp_configuration.update_configuration`); distinguishing members `error` · `description`
   16. `ErrorResponse` — 4 operations (`device_credential_management.drop_credentials` · `device_credential_management.generate_credentials` · `device_credential_management.reset_credentials` · `device_credential_management.retrieve_credentials`); distinguishing members *none required*
   17. `IntelligenceResult` — 4 operations (`anomaly_triggers.create_anomaly_detection_trigger` · `anomaly_triggers.list_anomaly_detection_trigger_settings` · `anomaly_triggers.list_anomaly_detection_triggers` · `anomaly_triggers.update_anomaly_detection_trigger`); distinguishing members *none required*
   18. `MdmErrorResponse` — 4 operations (`map_message_controller.delete_map_message` · `map_message_controller.download_map_messages` · `map_message_controller.ingest_map_messages` · `map_message_controller.query_map_messages`); distinguishing members `error` · `description` · `uuid` · `timestamp`
   19. `AuthRestErrorResponseforplanner` — 3 operations (`account_service_controller.get_account_information_using_get` · `intelligence_service_controller.set_connection_planner` · `intelligence_service_controller.status_connection_planner`); distinguishing members *none required*
   20. `DeviceDiagnosticsResult` — 3 operations (`diagnostics_callbacks.get_diagnostics_subscription_callback_info` · `diagnostics_callbacks.register_diagnostics_callback_url` · `diagnostics_callbacks.unregister_diagnostics_callback`); distinguishing members `error_code` · `error_message`
   21. `RestErrorResponseforplanner` — 3 operations (`account_service_controller.get_account_information_using_get` · `intelligence_service_controller.set_connection_planner` · `intelligence_service_controller.status_connection_planner`); distinguishing members *none required*
   22. `SecurityResult` — 3 operations (`account_subscriptions.list_account_subscriptions` · `sim_secure_for_io_t_licenses.assign_license_to_devices` · `sim_secure_for_io_t_licenses.unassign_license_to_devices`); distinguishing members *none required*
   23. `str` — 1 operation (`device_role_controller.get_acl_rules_by_vendor_id`); distinguishing members *none required*
   24. *(none)* — `gbi_device_actions5.business_internet_serviceplanchange` · `gbi_device_actions5.business_internetactivate_using_post` · `gbi_device_actions5.business_internetlist_device_information` · `anomaly_settings.activate_anomaly_detection` · `anomaly_settings.list_anomaly_detection_settings` · `anomaly_settings.reset_anomaly_detection_parameters` · `anomaly_triggers.delete_anomaly_detection_trigger` · `anomaly_triggers_v2.create_anomaly_detection_trigger_v2` · `anomaly_triggers_v2.list_anomaly_detection_trigger_settings_v2` · `anomaly_triggers_v2.update_anomaly_detection_trigger_v2` · `cloud_connector_devices.delete_device_from_account` · `cloud_connector_devices.find_device_by_property_values` · `cloud_connector_devices.search_device_event_history` · `cloud_connector_devices.search_devices_resources_by_property_values` · `cloud_connector_devices.search_sensor_readings` · `cloud_connector_devices.update_devices_configuration_value` · `cloud_connector_subscriptions.create_subscription` · `cloud_connector_subscriptions.delete_subscription` · `cloud_connector_subscriptions.query_subscription` · `create_price_plan_triggers.create_trigger_rules` · `device_actions.account_information` · `device_actions.aggregate_usage` · `device_actions.daily_usage` · `device_actions.get_asynchronous_request_status` · `device_actions.retrieve_device_provisioning_history` · `device_actions.retrieve_the_global_device_list` · `device_actions.service_plan_list` · `device_location_callbacks.cancel_async_report` · `device_sms_messaging.get_sms_messages` · `device_sms_messaging.list_sms_message_history` · `device_sms_messaging.send_an_sms_message` · `device_sms_messaging.start_sms_message_delivery` · `devices_locations.cancel_queued_location_report_generation` · `devices_locations.create_location_report` · `devices_locations.get_location_report_status` · `devices_locations.list_devices_locations_asynchronous` · `devices_locations.list_devices_locations_synchronous` · `devices_locations.retrieve_location_report` · `diagnostics_factory_reset.decives_restart` · `diagnostics_history.get_diagnostics_history` · `diagnostics_observations.start_diagnostics_observation` · `diagnostics_observations.stop_diagnostics_observation` · `diagnostics_settings.list_diagnostics_settings` · `diagnostics_subscriptions.get_diagnostics_subscription` · `exclusions.devices_location_get_consent_async` · `exclusions.devices_location_give_consent_async` · `exclusions.devices_location_update_consent` · `managing_e_sim_profiles.activate_a_device_profile` · `managing_e_sim_profiles.deactivate_a_device_profile` · `managing_e_sim_profiles.delete_a_device_profile` · `managing_e_sim_profiles.device_suspend` · `managing_e_sim_profiles.download_a_device_profile` · `managing_e_sim_profiles.enable_a_device_profile` · `managing_e_sim_profiles.enable_a_device_profile_for_download` · `managing_e_sim_profiles.profile_suspend` · `managing_e_sim_profiles.resume_profile` · `managing_e_sim_profiles.set_fallback` · `pwn.change_pwn_device_i_paddress` · `pwn.change_pwn_device_profile` · `pwn.change_pwn_device_state_activate` · `pwn.change_pwn_device_state_deactivate` · `pwn.get_pwn_performance_consent` · `pwn.get_profile_list` · `pwn.kpi_list` · `promotion_period_information.get_promo_device_aggregate_usage_history` · `promotion_period_information.get_promo_device_usage_history` · `retrieve_rate_plan_list.get_rate_plan_list` · `retrieve_the_triggers.get_all_available_triggers` · `retrieve_the_triggers.get_all_triggers_by_account_name` · `retrieve_the_triggers.get_all_triggers_by_trigger_category` · `retrieve_the_triggers.get_triggers_by_id` · `software_management_callbacks_v1.deregister_callback3` · `software_management_licenses_v1.delete_list_of_licenses_to_remove` · `targets.create_azure_central_io_t_application` · `targets.create_target` · `targets.delete_target` · `targets.generate_target_external_id` · `targets.query_target` · `thing_space_quality_of_service_api_actions.create_a_thing_space_quality_of_service_api_subscription` · `thing_space_quality_of_service_api_actions.stop_a_thing_space_quality_of_service_api_subscription` · `update_price_plan_triggers.update_trigger_rules` · `update_triggers.update_all_available_triggers` · `wireless_network_performance.device_experience30days_history` · `wireless_network_performance.device_experience_bulk_latest` · `wireless_network_performance.domestic4_g_and5_g_nationwide_network_coverage` · `wireless_network_performance.near_real_time_network_conditions` · `wireless_network_performance.site_proximity`: no typed arm, so `.error` is always `RawError`
   25. So `isinstance(e.error, ConnectivityManagementResult)` matches only 51 of 314 operations.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 77 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which environment the `environment` keyword selects**, because omitting it is silently `"production"`.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

