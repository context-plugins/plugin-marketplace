from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_group_clicks_error import GetGroupClicksErrorBody, get_group_clicks_error_mapper
from ..errors.get_group_code_scans_by_city_error import (
    GetGroupCodeScansByCityErrorBody,
    get_group_code_scans_by_city_error_mapper,
)
from ..errors.get_group_code_scans_by_country_error import (
    GetGroupCodeScansByCountryErrorBody,
    get_group_code_scans_by_country_error_mapper,
)
from ..errors.get_group_code_scans_over_time_error import (
    GetGroupCodeScansOverTimeErrorBody,
    get_group_code_scans_over_time_error_mapper,
)
from ..errors.get_group_error import GetGroupErrorBody, get_group_error_mapper
from ..errors.get_group_feature_usage_error import GetGroupFeatureUsageErrorBody, get_group_feature_usage_error_mapper
from ..errors.get_group_historical_usage_error import (
    GetGroupHistoricalUsageErrorBody,
    get_group_historical_usage_error_mapper,
)
from ..errors.get_group_link_clicks_by_city_error import (
    GetGroupLinkClicksByCityErrorBody,
    get_group_link_clicks_by_city_error_mapper,
)
from ..errors.get_group_link_clicks_by_country_error import (
    GetGroupLinkClicksByCountryErrorBody,
    get_group_link_clicks_by_country_error_mapper,
)
from ..errors.get_group_link_clicks_by_device_error import (
    GetGroupLinkClicksByDeviceErrorBody,
    get_group_link_clicks_by_device_error_mapper,
)
from ..errors.get_group_link_clicks_by_referrer_error import (
    GetGroupLinkClicksByReferrerErrorBody,
    get_group_link_clicks_by_referrer_error_mapper,
)
from ..errors.get_group_link_clicks_over_time_error import (
    GetGroupLinkClicksOverTimeErrorBody,
    get_group_link_clicks_over_time_error_mapper,
)
from ..errors.get_group_metrics_by_cities_error import (
    GetGroupMetricsByCitiesErrorBody,
    get_group_metrics_by_cities_error_mapper,
)
from ..errors.get_group_metrics_by_countries_error import (
    GetGroupMetricsByCountriesErrorBody,
    get_group_metrics_by_countries_error_mapper,
)
from ..errors.get_group_metrics_by_devices_error import (
    GetGroupMetricsByDevicesErrorBody,
    get_group_metrics_by_devices_error_mapper,
)
from ..errors.get_group_metrics_by_referrer_error import (
    GetGroupMetricsByReferrerErrorBody,
    get_group_metrics_by_referrer_error_mapper,
)
from ..errors.get_group_metrics_by_referring_networks_error import (
    GetGroupMetricsByReferringNetworksErrorBody,
    get_group_metrics_by_referring_networks_error_mapper,
)
from ..errors.get_group_metrics_over_time_error import (
    GetGroupMetricsOverTimeErrorBody,
    get_group_metrics_over_time_error_mapper,
)
from ..errors.get_group_preferences_error import GetGroupPreferencesErrorBody, get_group_preferences_error_mapper
from ..errors.get_group_shorten_counts_error import (
    GetGroupShortenCountsErrorBody,
    get_group_shorten_counts_error_mapper,
)
from ..errors.get_group_tags_error import GetGroupTagsErrorBody, get_group_tags_error_mapper
from ..errors.get_group_top_code_scans_error import GetGroupTopCodeScansErrorBody, get_group_top_code_scans_error_mapper
from ..errors.get_group_top_link_clicks_error import (
    GetGroupTopLinkClicksErrorBody,
    get_group_top_link_clicks_error_mapper,
)
from ..errors.get_group_top_metrics_error import GetGroupTopMetricsErrorBody, get_group_top_metrics_error_mapper
from ..errors.get_groups_error import GetGroupsErrorBody, get_groups_error_mapper
from ..errors.post_create_group_export_error import (
    PostCreateGroupExportErrorBody,
    post_create_group_export_error_mapper,
)
from ..errors.update_group_error import UpdateGroupErrorBody, update_group_error_mapper
from ..errors.update_group_preferences_error import (
    UpdateGroupPreferencesErrorBody,
    update_group_preferences_error_mapper,
)
from ..models.city_metrics_bitly_groups_api import CityMetricsBitlyGroupsApi
from ..models.click_metrics_bitly_custom_bitlinks_api import ClickMetricsBitlyCustomBitlinksApi
from ..models.device_metrics_bitly_groups_api import DeviceMetricsBitlyGroupsApi
from ..models.enums.time_unit import TimeUnit, TimeUnitOrStr
from ..models.enums.time_unit_dwm import TimeUnitDwm, TimeUnitDwmOrStr
from ..models.enums.type import Type, TypeOrStr
from ..models.group import Group
from ..models.group_clicks import GroupClicks
from ..models.group_export_request_body import GroupExportRequestBody, GroupExportRequestBodyDict
from ..models.group_export_response import GroupExportResponse
from ..models.group_feature_usage import GroupFeatureUsage
from ..models.group_historical_usage import GroupHistoricalUsage
from ..models.group_preferences import GroupPreferences, GroupPreferencesDict
from ..models.group_update import GroupUpdate, GroupUpdateDict
from ..models.groups import Groups
from ..models.groups_links_clicks_devices_response import GroupsLinksClicksDevicesResponse
from ..models.metrics import Metrics
from ..models.sorted_links import SortedLinks
from ..models.tags import Tags
from ..models.unions.groups_codes_scans_top_response import GroupsCodesScansTopResponse
from ..server.server import Server


class GroupsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GroupsApiWithRawResponse(client, server, auth)

    def get_group_metrics_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns metrics by referrer for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_metrics_by_referrer(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_metrics_by_referring_networks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns metrics by referring networks for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_metrics_by_referring_networks(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group(self, group_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Group:
        """Returns details for a group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_group(group_guid, request_options=request_options))

    def get_group_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """get number of clicks on bitlinks in a group

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_clicks(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_code_scans_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CityMetricsBitlyGroupsApi:
        """Get QR code scan metrics for a group broken down by city.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_code_scans_by_city(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_code_scans_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Get QR code scan metrics for a group broken down by country.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_code_scans_by_country(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_code_scans_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """Get QR code scan metrics over time for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_code_scans_over_time(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_feature_usage(
        self, group_guid: str, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GroupFeatureUsage:
        """Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error | SimplifiedError
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_feature_usage(group_guid, name=name, request_options=request_options)
        )

    def get_group_historical_usage(
        self,
        group_guid: str,
        *,
        name: list[str] | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupHistoricalUsage:
        """Get a group's historical usage for specific limit(s) and date range. Refer to GET
        /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            start_date: The start date for the date range
            end_date: The end date for the date range
            unit: A unit of time (day, week, or month)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error | SimplifiedError
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_historical_usage(
                group_guid,
                name=name,
                start_date=start_date,
                end_date=end_date,
                unit=unit,
                request_options=request_options,
            ),
        )

    def get_group_link_clicks_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CityMetricsBitlyGroupsApi:
        """Get link clicks by city for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_link_clicks_by_city(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_link_clicks_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Get link clicks by country for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_link_clicks_by_country(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_link_clicks_by_device(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupsLinksClicksDevicesResponse:
        """Get link clicks by device for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_link_clicks_by_device(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_link_clicks_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Get link clicks by referrer for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_link_clicks_by_referrer(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_link_clicks_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """Get link clicks over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_link_clicks_over_time(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_metrics_by_cities(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CityMetricsBitlyGroupsApi:
        """Returns the geographic origins of click traffic by city for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_metrics_by_cities(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_metrics_by_countries(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns the geographic origins of click traffic by country for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_metrics_by_countries(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_metrics_by_devices(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeviceMetricsBitlyGroupsApi:
        """Returns the device types generating click traffic to the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_metrics_by_devices(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_metrics_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """Get group engagement metrics over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_metrics_over_time(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_preferences(
        self, group_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GroupPreferences:
        """Returns preferences for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_group_preferences(group_guid, request_options=request_options))

    def get_group_shorten_counts(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Metrics:
        """Returns all the shorten counts for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_shorten_counts(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_group_tags(
        self,
        group_guid: str,
        *,
        type_: TypeOrStr | None = Type.BITLINK,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Tags:
        """Returns the tags currently used in the specified group. Maximum 1000.

        Args:
            group_guid: A GUID for a Bitly group
            type_: Tag set to return; defaults to bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_group_tags(group_guid, type_=type_, request_options=request_options))

    def get_group_top_code_scans(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        decoupled: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupsCodesScansTopResponse:
        """Get top performing QR codes by scan count for all codes in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            decoupled: When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response
                with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_top_code_scans(
                group_guid,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                decoupled=decoupled,
                request_options=request_options,
            ),
        )

    def get_group_top_link_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SortedLinks:
        """Get top performing links by click for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_top_link_clicks(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_group_top_metrics(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SortedLinks:
        """Get top performing links by engagement for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_top_metrics(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_groups(
        self, *, organization_guid: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Groups:
        """Returns a list of groups in the organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_groups(organization_guid=organization_guid, request_options=request_options)
        )

    def post_create_group_export(
        self,
        group_guid: str,
        body: GroupExportRequestBody | GroupExportRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupExportResponse:
        """Build a CSV export synchronously and return it inline as a base64 data URI plus metadata. The export_type
        field selects the CSV shape: link_engagements_batch (engagement metrics for explicit bitlinks or a filter),
        links_list (link metadata roster), or qr_codes_list (QR code metadata roster). Row caps apply per request: 200
        rows when metrics are included (link_engagements_batch, or include_metrics on a list export); 1000 rows for
        metadata-only list exports. When the match set exceeds the cap, truncated is true and only the first cap rows
        are returned; row_count reports how many data rows are in the CSV.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_create_group_export(group_guid, body, request_options=request_options)
        )

    def update_group(
        self,
        group_guid: str,
        body: GroupUpdate | GroupUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Group:
        """Updates the details of a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_group(group_guid, body, request_options=request_options))

    def update_group_preferences(
        self,
        group_guid: str,
        body: GroupPreferences | GroupPreferencesDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupPreferences:
        """Updates preferences for a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.update_group_preferences(group_guid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> GroupsApiWithRawResponse:
        return self._with_raw_response


class AsyncGroupsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGroupsApiWithRawResponse(client, server, auth)

    async def get_group_metrics_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns metrics by referrer for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_metrics_by_referrer(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_metrics_by_referring_networks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns metrics by referring networks for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_metrics_by_referring_networks(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group(self, group_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Group:
        """Returns details for a group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_group(group_guid, request_options=request_options))

    async def get_group_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """get number of clicks on bitlinks in a group

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_clicks(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_code_scans_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CityMetricsBitlyGroupsApi:
        """Get QR code scan metrics for a group broken down by city.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_code_scans_by_city(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_code_scans_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Get QR code scan metrics for a group broken down by country.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_code_scans_by_country(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_code_scans_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """Get QR code scan metrics over time for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_code_scans_over_time(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_feature_usage(
        self,
        group_guid: str,
        *,
        name: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupFeatureUsage:
        """Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error | SimplifiedError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_feature_usage(
                group_guid, name=name, request_options=request_options
            ),
        )

    async def get_group_historical_usage(
        self,
        group_guid: str,
        *,
        name: list[str] | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupHistoricalUsage:
        """Get a group's historical usage for specific limit(s) and date range. Refer to GET
        /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            start_date: The start date for the date range
            end_date: The end date for the date range
            unit: A unit of time (day, week, or month)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error | SimplifiedError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_historical_usage(
                group_guid,
                name=name,
                start_date=start_date,
                end_date=end_date,
                unit=unit,
                request_options=request_options,
            ),
        )

    async def get_group_link_clicks_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CityMetricsBitlyGroupsApi:
        """Get link clicks by city for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_link_clicks_by_city(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_link_clicks_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Get link clicks by country for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_link_clicks_by_country(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_link_clicks_by_device(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupsLinksClicksDevicesResponse:
        """Get link clicks by device for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_link_clicks_by_device(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_link_clicks_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Get link clicks by referrer for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_link_clicks_by_referrer(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_link_clicks_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """Get link clicks over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_link_clicks_over_time(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_metrics_by_cities(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CityMetricsBitlyGroupsApi:
        """Returns the geographic origins of click traffic by city for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_metrics_by_cities(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_metrics_by_countries(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns the geographic origins of click traffic by country for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_metrics_by_countries(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_metrics_by_devices(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeviceMetricsBitlyGroupsApi:
        """Returns the device types generating click traffic to the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_metrics_by_devices(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_metrics_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupClicks:
        """Get group engagement metrics over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_metrics_over_time(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_preferences(
        self, group_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GroupPreferences:
        """Returns preferences for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_group_preferences(group_guid, request_options=request_options))

    async def get_group_shorten_counts(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Metrics:
        """Returns all the shorten counts for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_shorten_counts(
                group_guid, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_group_tags(
        self,
        group_guid: str,
        *,
        type_: TypeOrStr | None = Type.BITLINK,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Tags:
        """Returns the tags currently used in the specified group. Maximum 1000.

        Args:
            group_guid: A GUID for a Bitly group
            type_: Tag set to return; defaults to bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_tags(group_guid, type_=type_, request_options=request_options)
        )

    async def get_group_top_code_scans(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        decoupled: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupsCodesScansTopResponse:
        """Get top performing QR codes by scan count for all codes in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            decoupled: When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response
                with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_top_code_scans(
                group_guid,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                decoupled=decoupled,
                request_options=request_options,
            ),
        )

    async def get_group_top_link_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SortedLinks:
        """Get top performing links by click for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_top_link_clicks(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_group_top_metrics(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SortedLinks:
        """Get top performing links by engagement for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_top_metrics(
                group_guid,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_groups(
        self, *, organization_guid: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Groups:
        """Returns a list of groups in the organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_groups(
                organization_guid=organization_guid, request_options=request_options
            ),
        )

    async def post_create_group_export(
        self,
        group_guid: str,
        body: GroupExportRequestBody | GroupExportRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupExportResponse:
        """Build a CSV export synchronously and return it inline as a base64 data URI plus metadata. The export_type
        field selects the CSV shape: link_engagements_batch (engagement metrics for explicit bitlinks or a filter),
        links_list (link metadata roster), or qr_codes_list (QR code metadata roster). Row caps apply per request: 200
        rows when metrics are included (link_engagements_batch, or include_metrics on a list export); 1000 rows for
        metadata-only list exports. When the match set exceeds the cap, truncated is true and only the first cap rows
        are returned; row_count reports how many data rows are in the CSV.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_create_group_export(group_guid, body, request_options=request_options)
        )

    async def update_group(
        self,
        group_guid: str,
        body: GroupUpdate | GroupUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Group:
        """Updates the details of a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_group(group_guid, body, request_options=request_options))

    async def update_group_preferences(
        self,
        group_guid: str,
        body: GroupPreferences | GroupPreferencesDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupPreferences:
        """Updates preferences for a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_group_preferences(group_guid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncGroupsApiWithRawResponse:
        return self._with_raw_response


class GroupsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_group_metrics_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferrerErrorBody]:
        """Returns metrics by referrer for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/referrers"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_metrics_by_referrer_error_mapper,
            request_options=request_options,
        )

    def get_group_metrics_by_referring_networks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferringNetworksErrorBody]:
        """Returns metrics by referring networks for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/referring_networks"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_metrics_by_referring_networks_error_mapper,
            request_options=request_options,
        )

    def get_group(
        self, group_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Group, GetGroupErrorBody]:
        """Returns details for a group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}"),
            path_params=[param[str]("group_guid", group_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Group],
            error_mapper=get_group_error_mapper,
            request_options=request_options,
        )

    def get_group_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupClicksErrorBody]:
        """get number of clicks on bitlinks in a group

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/clicks"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupClicks],
            error_mapper=get_group_clicks_error_mapper,
            request_options=request_options,
        )

    def get_group_code_scans_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupCodeScansByCityErrorBody]:
        """Get QR code scan metrics for a group broken down by city.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/cities"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CityMetricsBitlyGroupsApi],
            error_mapper=get_group_code_scans_by_city_error_mapper,
            request_options=request_options,
        )

    def get_group_code_scans_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupCodeScansByCountryErrorBody]:
        """Get QR code scan metrics for a group broken down by country.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/countries"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_code_scans_by_country_error_mapper,
            request_options=request_options,
        )

    def get_group_code_scans_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupCodeScansOverTimeErrorBody]:
        """Get QR code scan metrics over time for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/over_time"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupClicks],
            error_mapper=get_group_code_scans_over_time_error_mapper,
            request_options=request_options,
        )

    def get_group_feature_usage(
        self, group_guid: str, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GroupFeatureUsage, GetGroupFeatureUsageErrorBody]:
        """Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/feature_usage"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[param[list[str] | None]("name", name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupFeatureUsage],
            error_mapper=get_group_feature_usage_error_mapper,
            request_options=request_options,
        )

    def get_group_historical_usage(
        self,
        group_guid: str,
        *,
        name: list[str] | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupHistoricalUsage, GetGroupHistoricalUsageErrorBody]:
        """Get a group's historical usage for specific limit(s) and date range. Refer to GET
        /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            start_date: The start date for the date range
            end_date: The end date for the date range
            unit: A unit of time (day, week, or month)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/historical_usage"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[list[str] | None]("name", name),
                param[str | None]("start_date", start_date),
                param[str | None]("end_date", end_date),
                param[TimeUnitDwmOrStr | None]("unit", unit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupHistoricalUsage],
            error_mapper=get_group_historical_usage_error_mapper,
            request_options=request_options,
        )

    def get_group_link_clicks_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupLinkClicksByCityErrorBody]:
        """Get link clicks by city for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/cities"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CityMetricsBitlyGroupsApi],
            error_mapper=get_group_link_clicks_by_city_error_mapper,
            request_options=request_options,
        )

    def get_group_link_clicks_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByCountryErrorBody]:
        """Get link clicks by country for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/countries"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_link_clicks_by_country_error_mapper,
            request_options=request_options,
        )

    def get_group_link_clicks_by_device(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupsLinksClicksDevicesResponse, GetGroupLinkClicksByDeviceErrorBody]:
        """Get link clicks by device for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/devices"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupsLinksClicksDevicesResponse],
            error_mapper=get_group_link_clicks_by_device_error_mapper,
            request_options=request_options,
        )

    def get_group_link_clicks_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByReferrerErrorBody]:
        """Get link clicks by referrer for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/referrers"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_link_clicks_by_referrer_error_mapper,
            request_options=request_options,
        )

    def get_group_link_clicks_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupLinkClicksOverTimeErrorBody]:
        """Get link clicks over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/over_time"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupClicks],
            error_mapper=get_group_link_clicks_over_time_error_mapper,
            request_options=request_options,
        )

    def get_group_metrics_by_cities(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupMetricsByCitiesErrorBody]:
        """Returns the geographic origins of click traffic by city for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/cities"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CityMetricsBitlyGroupsApi],
            error_mapper=get_group_metrics_by_cities_error_mapper,
            request_options=request_options,
        )

    def get_group_metrics_by_countries(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByCountriesErrorBody]:
        """Returns the geographic origins of click traffic by country for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/countries"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_metrics_by_countries_error_mapper,
            request_options=request_options,
        )

    def get_group_metrics_by_devices(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeviceMetricsBitlyGroupsApi, GetGroupMetricsByDevicesErrorBody]:
        """Returns the device types generating click traffic to the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/devices"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DeviceMetricsBitlyGroupsApi],
            error_mapper=get_group_metrics_by_devices_error_mapper,
            request_options=request_options,
        )

    def get_group_metrics_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupMetricsOverTimeErrorBody]:
        """Get group engagement metrics over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/engagements/over_time"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupClicks],
            error_mapper=get_group_metrics_over_time_error_mapper,
            request_options=request_options,
        )

    def get_group_preferences(
        self, group_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GroupPreferences, GetGroupPreferencesErrorBody]:
        """Returns preferences for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/preferences"),
            path_params=[param[str]("group_guid", group_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupPreferences],
            error_mapper=get_group_preferences_error_mapper,
            request_options=request_options,
        )

    def get_group_shorten_counts(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Metrics, GetGroupShortenCountsErrorBody]:
        """Returns all the shorten counts for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/shorten_counts"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Metrics],
            error_mapper=get_group_shorten_counts_error_mapper,
            request_options=request_options,
        )

    def get_group_tags(
        self,
        group_guid: str,
        *,
        type_: TypeOrStr | None = Type.BITLINK,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Tags, GetGroupTagsErrorBody]:
        """Returns the tags currently used in the specified group. Maximum 1000.

        Args:
            group_guid: A GUID for a Bitly group
            type_: Tag set to return; defaults to bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/tags"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[param[TypeOrStr | None]("type", type_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Tags],
            error_mapper=get_group_tags_error_mapper,
            request_options=request_options,
        )

    def get_group_top_code_scans(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        decoupled: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupsCodesScansTopResponse, GetGroupTopCodeScansErrorBody]:
        """Get top performing QR codes by scan count for all codes in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            decoupled: When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response
                with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
                param[bool | None]("decoupled", decoupled),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupsCodesScansTopResponse],
            error_mapper=get_group_top_code_scans_error_mapper,
            request_options=request_options,
        )

    def get_group_top_link_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SortedLinks, GetGroupTopLinkClicksErrorBody]:
        """Get top performing links by click for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SortedLinks],
            error_mapper=get_group_top_link_clicks_error_mapper,
            request_options=request_options,
        )

    def get_group_top_metrics(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SortedLinks, GetGroupTopMetricsErrorBody]:
        """Get top performing links by engagement for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/engagements/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SortedLinks],
            error_mapper=get_group_top_metrics_error_mapper,
            request_options=request_options,
        )

    def get_groups(
        self, *, organization_guid: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Groups, GetGroupsErrorBody]:
        """Returns a list of groups in the organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups"),
            query_params=[param[str | None]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Groups],
            error_mapper=get_groups_error_mapper,
            request_options=request_options,
        )

    def post_create_group_export(
        self,
        group_guid: str,
        body: GroupExportRequestBody | GroupExportRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupExportResponse, PostCreateGroupExportErrorBody]:
        """Build a CSV export synchronously and return it inline as a base64 data URI plus metadata. The export_type
        field selects the CSV shape: link_engagements_batch (engagement metrics for explicit bitlinks or a filter),
        links_list (link metadata roster), or qr_codes_list (QR code metadata roster). Row caps apply per request: 200
        rows when metrics are included (link_engagements_batch, or include_metrics on a list export); 1000 rows for
        metadata-only list exports. When the match set exceeds the cap, truncated is true and only the first cap rows
        are returned; row_count reports how many data rows are in the CSV.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/groups/{group_guid}/exports"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupExportRequestBody | GroupExportRequestBodyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupExportResponse],
            error_mapper=post_create_group_export_error_mapper,
            request_options=request_options,
        )

    def update_group(
        self,
        group_guid: str,
        body: GroupUpdate | GroupUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, UpdateGroupErrorBody]:
        """Updates the details of a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupUpdate | GroupUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Group],
            error_mapper=update_group_error_mapper,
            request_options=request_options,
        )

    def update_group_preferences(
        self,
        group_guid: str,
        body: GroupPreferences | GroupPreferencesDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupPreferences, UpdateGroupPreferencesErrorBody]:
        """Updates preferences for a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}/preferences"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupPreferences | GroupPreferencesDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupPreferences],
            error_mapper=update_group_preferences_error_mapper,
            request_options=request_options,
        )


class AsyncGroupsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_group_metrics_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferrerErrorBody]:
        """Returns metrics by referrer for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/referrers"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_metrics_by_referrer_error_mapper,
            request_options=request_options,
        )

    async def get_group_metrics_by_referring_networks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferringNetworksErrorBody]:
        """Returns metrics by referring networks for the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/referring_networks"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_metrics_by_referring_networks_error_mapper,
            request_options=request_options,
        )

    async def get_group(
        self, group_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Group, GetGroupErrorBody]:
        """Returns details for a group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}"),
            path_params=[param[str]("group_guid", group_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Group],
            error_mapper=get_group_error_mapper,
            request_options=request_options,
        )

    async def get_group_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupClicksErrorBody]:
        """get number of clicks on bitlinks in a group

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/clicks"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupClicks],
            error_mapper=get_group_clicks_error_mapper,
            request_options=request_options,
        )

    async def get_group_code_scans_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupCodeScansByCityErrorBody]:
        """Get QR code scan metrics for a group broken down by city.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/cities"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CityMetricsBitlyGroupsApi],
            error_mapper=get_group_code_scans_by_city_error_mapper,
            request_options=request_options,
        )

    async def get_group_code_scans_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupCodeScansByCountryErrorBody]:
        """Get QR code scan metrics for a group broken down by country.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/countries"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_code_scans_by_country_error_mapper,
            request_options=request_options,
        )

    async def get_group_code_scans_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupCodeScansOverTimeErrorBody]:
        """Get QR code scan metrics over time for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/over_time"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupClicks],
            error_mapper=get_group_code_scans_over_time_error_mapper,
            request_options=request_options,
        )

    async def get_group_feature_usage(
        self,
        group_guid: str,
        *,
        name: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupFeatureUsage, GetGroupFeatureUsageErrorBody]:
        """Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/feature_usage"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[param[list[str] | None]("name", name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupFeatureUsage],
            error_mapper=get_group_feature_usage_error_mapper,
            request_options=request_options,
        )

    async def get_group_historical_usage(
        self,
        group_guid: str,
        *,
        name: list[str] | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupHistoricalUsage, GetGroupHistoricalUsageErrorBody]:
        """Get a group's historical usage for specific limit(s) and date range. Refer to GET
        /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

        Args:
            group_guid: A GUID for a Bitly group
            name: The limit name you would like usage for
            start_date: The start date for the date range
            end_date: The end date for the date range
            unit: A unit of time (day, week, or month)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/historical_usage"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[list[str] | None]("name", name),
                param[str | None]("start_date", start_date),
                param[str | None]("end_date", end_date),
                param[TimeUnitDwmOrStr | None]("unit", unit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupHistoricalUsage],
            error_mapper=get_group_historical_usage_error_mapper,
            request_options=request_options,
        )

    async def get_group_link_clicks_by_city(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupLinkClicksByCityErrorBody]:
        """Get link clicks by city for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/cities"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CityMetricsBitlyGroupsApi],
            error_mapper=get_group_link_clicks_by_city_error_mapper,
            request_options=request_options,
        )

    async def get_group_link_clicks_by_country(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByCountryErrorBody]:
        """Get link clicks by country for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/countries"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_link_clicks_by_country_error_mapper,
            request_options=request_options,
        )

    async def get_group_link_clicks_by_device(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupsLinksClicksDevicesResponse, GetGroupLinkClicksByDeviceErrorBody]:
        """Get link clicks by device for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/devices"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupsLinksClicksDevicesResponse],
            error_mapper=get_group_link_clicks_by_device_error_mapper,
            request_options=request_options,
        )

    async def get_group_link_clicks_by_referrer(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByReferrerErrorBody]:
        """Get link clicks by referrer for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/referrers"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_link_clicks_by_referrer_error_mapper,
            request_options=request_options,
        )

    async def get_group_link_clicks_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupLinkClicksOverTimeErrorBody]:
        """Get link clicks over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/over_time"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupClicks],
            error_mapper=get_group_link_clicks_over_time_error_mapper,
            request_options=request_options,
        )

    async def get_group_metrics_by_cities(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetricsBitlyGroupsApi, GetGroupMetricsByCitiesErrorBody]:
        """Returns the geographic origins of click traffic by city for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/cities"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CityMetricsBitlyGroupsApi],
            error_mapper=get_group_metrics_by_cities_error_mapper,
            request_options=request_options,
        )

    async def get_group_metrics_by_countries(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByCountriesErrorBody]:
        """Returns the geographic origins of click traffic by country for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/countries"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_group_metrics_by_countries_error_mapper,
            request_options=request_options,
        )

    async def get_group_metrics_by_devices(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeviceMetricsBitlyGroupsApi, GetGroupMetricsByDevicesErrorBody]:
        """Returns the device types generating click traffic to the specified group's links.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/devices"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DeviceMetricsBitlyGroupsApi],
            error_mapper=get_group_metrics_by_devices_error_mapper,
            request_options=request_options,
        )

    async def get_group_metrics_over_time(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupClicks, GetGroupMetricsOverTimeErrorBody]:
        """Get group engagement metrics over time for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/engagements/over_time"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupClicks],
            error_mapper=get_group_metrics_over_time_error_mapper,
            request_options=request_options,
        )

    async def get_group_preferences(
        self, group_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GroupPreferences, GetGroupPreferencesErrorBody]:
        """Returns preferences for the specified group.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/preferences"),
            path_params=[param[str]("group_guid", group_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupPreferences],
            error_mapper=get_group_preferences_error_mapper,
            request_options=request_options,
        )

    async def get_group_shorten_counts(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Metrics, GetGroupShortenCountsErrorBody]:
        """Returns all the shorten counts for a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/shorten_counts"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Metrics],
            error_mapper=get_group_shorten_counts_error_mapper,
            request_options=request_options,
        )

    async def get_group_tags(
        self,
        group_guid: str,
        *,
        type_: TypeOrStr | None = Type.BITLINK,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Tags, GetGroupTagsErrorBody]:
        """Returns the tags currently used in the specified group. Maximum 1000.

        Args:
            group_guid: A GUID for a Bitly group
            type_: Tag set to return; defaults to bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/tags"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[param[TypeOrStr | None]("type", type_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Tags],
            error_mapper=get_group_tags_error_mapper,
            request_options=request_options,
        )

    async def get_group_top_code_scans(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        decoupled: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupsCodesScansTopResponse, GetGroupTopCodeScansErrorBody]:
        """Get top performing QR codes by scan count for all codes in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            decoupled: When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response
                with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/codes/scans/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
                param[bool | None]("decoupled", decoupled),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupsCodesScansTopResponse],
            error_mapper=get_group_top_code_scans_error_mapper,
            request_options=request_options,
        )

    async def get_group_top_link_clicks(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SortedLinks, GetGroupTopLinkClicksErrorBody]:
        """Get top performing links by click for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/links/clicks/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SortedLinks],
            error_mapper=get_group_top_link_clicks_error_mapper,
            request_options=request_options,
        )

    async def get_group_top_metrics(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SortedLinks, GetGroupTopMetricsErrorBody]:
        """Get top performing links by engagement for all links in a group.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            size: The quantity of items to be be returned
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/engagements/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SortedLinks],
            error_mapper=get_group_top_metrics_error_mapper,
            request_options=request_options,
        )

    async def get_groups(
        self, *, organization_guid: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Groups, GetGroupsErrorBody]:
        """Returns a list of groups in the organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups"),
            query_params=[param[str | None]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Groups],
            error_mapper=get_groups_error_mapper,
            request_options=request_options,
        )

    async def post_create_group_export(
        self,
        group_guid: str,
        body: GroupExportRequestBody | GroupExportRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupExportResponse, PostCreateGroupExportErrorBody]:
        """Build a CSV export synchronously and return it inline as a base64 data URI plus metadata. The export_type
        field selects the CSV shape: link_engagements_batch (engagement metrics for explicit bitlinks or a filter),
        links_list (link metadata roster), or qr_codes_list (QR code metadata roster). Row caps apply per request: 200
        rows when metrics are included (link_engagements_batch, or include_metrics on a list export); 1000 rows for
        metadata-only list exports. When the match set exceeds the cap, truncated is true and only the first cap rows
        are returned; row_count reports how many data rows are in the CSV.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/groups/{group_guid}/exports"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupExportRequestBody | GroupExportRequestBodyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupExportResponse],
            error_mapper=post_create_group_export_error_mapper,
            request_options=request_options,
        )

    async def update_group(
        self,
        group_guid: str,
        body: GroupUpdate | GroupUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, UpdateGroupErrorBody]:
        """Updates the details of a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupUpdate | GroupUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Group],
            error_mapper=update_group_error_mapper,
            request_options=request_options,
        )

    async def update_group_preferences(
        self,
        group_guid: str,
        body: GroupPreferences | GroupPreferencesDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupPreferences, UpdateGroupPreferencesErrorBody]:
        """Updates preferences for a group.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}/preferences"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupPreferences | GroupPreferencesDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupPreferences],
            error_mapper=update_group_preferences_error_mapper,
            request_options=request_options,
        )
