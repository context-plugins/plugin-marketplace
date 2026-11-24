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
from ..errors.create_bitlink_error import CreateBitlinkErrorBody, create_bitlink_error_mapper
from ..errors.create_full_bitlink_error import CreateFullBitlinkErrorBody, create_full_bitlink_error_mapper
from ..errors.delete_bitlink_error import DeleteBitlinkErrorBody, delete_bitlink_error_mapper
from ..errors.expand_bitlink_error import ExpandBitlinkErrorBody, expand_bitlink_error_mapper
from ..errors.get_bitlink_error import GetBitlinkErrorBody, get_bitlink_error_mapper
from ..errors.get_bitlinks_by_group_error import GetBitlinksByGroupErrorBody, get_bitlinks_by_group_error_mapper
from ..errors.get_clicks_for_bitlink_error import GetClicksForBitlinkErrorBody, get_clicks_for_bitlink_error_mapper
from ..errors.get_clicks_summary_for_bitlink_error import (
    GetClicksSummaryForBitlinkErrorBody,
    get_clicks_summary_for_bitlink_error_mapper,
)
from ..errors.get_engagements_error import GetEngagementsErrorBody, get_engagements_error_mapper
from ..errors.get_engagements_summary_error import GetEngagementsSummaryErrorBody, get_engagements_summary_error_mapper
from ..errors.get_metrics_for_bitlink_by_cities_error import (
    GetMetricsForBitlinkByCitiesErrorBody,
    get_metrics_for_bitlink_by_cities_error_mapper,
)
from ..errors.get_metrics_for_bitlink_by_countries_error import (
    GetMetricsForBitlinkByCountriesErrorBody,
    get_metrics_for_bitlink_by_countries_error_mapper,
)
from ..errors.get_metrics_for_bitlink_by_devices_error import (
    GetMetricsForBitlinkByDevicesErrorBody,
    get_metrics_for_bitlink_by_devices_error_mapper,
)
from ..errors.get_metrics_for_bitlink_by_referrer_name_error import (
    GetMetricsForBitlinkByReferrerNameErrorBody,
    get_metrics_for_bitlink_by_referrer_name_error_mapper,
)
from ..errors.get_metrics_for_bitlink_by_referrers_by_domains_error import (
    GetMetricsForBitlinkByReferrersByDomainsErrorBody,
    get_metrics_for_bitlink_by_referrers_by_domains_error_mapper,
)
from ..errors.get_metrics_for_bitlink_by_referrers_error import (
    GetMetricsForBitlinkByReferrersErrorBody,
    get_metrics_for_bitlink_by_referrers_error_mapper,
)
from ..errors.get_metrics_for_bitlink_by_referring_domains_error import (
    GetMetricsForBitlinkByReferringDomainsErrorBody,
    get_metrics_for_bitlink_by_referring_domains_error_mapper,
)
from ..errors.get_sorted_bitlinks_error import GetSortedBitlinksErrorBody, get_sorted_bitlinks_error_mapper
from ..errors.get_top_links_and_qr_codes_by_engagements_error import (
    GetTopLinksAndQrCodesByEngagementsErrorBody,
    get_top_links_and_qr_codes_by_engagements_error_mapper,
)
from ..errors.update_bitlink_error import UpdateBitlinkErrorBody, update_bitlink_error_mapper
from ..errors.update_bitlinks_by_group_error import (
    UpdateBitlinksByGroupErrorBody,
    update_bitlinks_by_group_error_mapper,
)
from ..models.bitlink_body import BitlinkBody
from ..models.bitlink_update_body import BitlinkUpdateBody, BitlinkUpdateBodyDict
from ..models.bitlinks import Bitlinks
from ..models.bulk_update import BulkUpdate
from ..models.bulk_update_request import BulkUpdateRequest, BulkUpdateRequestDict
from ..models.city_metrics import CityMetrics
from ..models.click_metrics import ClickMetrics
from ..models.clicks import Clicks
from ..models.clicks_summary import ClicksSummary
from ..models.device_metrics import DeviceMetrics
from ..models.enums.archived import Archived, ArchivedOrStr
from ..models.enums.custom_bitlink import CustomBitlink, CustomBitlinkOrStr
from ..models.enums.deeplinks import Deeplinks, DeeplinksOrStr
from ..models.enums.domain_deeplinks import DomainDeeplinks, DomainDeeplinksOrStr
from ..models.enums.has_dynamic_routing import HasDynamicRouting, HasDynamicRoutingOrStr
from ..models.enums.has_expiration import HasExpiration, HasExpirationOrStr
from ..models.enums.has_qr_codes import HasQrCodes, HasQrCodesOrStr
from ..models.enums.is_expired import IsExpired, IsExpiredOrStr
from ..models.enums.sort import SortOrStr
from ..models.enums.time_unit import TimeUnit, TimeUnitOrStr
from ..models.expand_bitlink import ExpandBitlink, ExpandBitlinkDict
from ..models.expanded_bitlink import ExpandedBitlink
from ..models.full_shorten import FullShorten, FullShortenDict
from ..models.link_deletion_response import LinkDeletionResponse
from ..models.referrers_by_domains import ReferrersByDomains
from ..models.shorten import Shorten, ShortenDict
from ..models.shorten_bitlink_body import ShortenBitlinkBody
from ..models.sorted_links import SortedLinks
from ..models.top_links_and_qr_codes import TopLinksAndQrCodes
from ..models.total_engagements import TotalEngagements
from ..models.total_engagements_summary import TotalEngagementsSummary
from ..server.server import Server


class BitlinksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BitlinksApiWithRawResponse(client, server, auth)

    def create_bitlink(
        self, body: Shorten | ShortenDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ShortenBitlinkBody:
        """Converts a long url to a Bitlink. You may see errors returned from this endpoint -
        "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured
        for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom
        domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN EXPECTATION_FAILED UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.create_bitlink(body, request_options=request_options))

    def create_full_bitlink(
        self, body: FullShorten | FullShortenDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BitlinkBody:
        """Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this
        endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is
        configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links
        against a custom domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND EXPECTATION_FAILED UNPROCESSABLE_ENTITY
                MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(self._with_raw_response.create_full_bitlink(body, request_options=request_options))

    def delete_bitlink(
        self, bitlink: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LinkDeletionResponse:
        """Delete an unedited hash Bitlink.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.delete_bitlink(bitlink, request_options=request_options))

    def expand_bitlink(
        self, body: ExpandBitlink | ExpandBitlinkDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExpandedBitlink:
        """Returns the short link and long URL for the specified link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST NOT_FOUND GONE UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.expand_bitlink(body, request_options=request_options))

    def get_bitlink(self, bitlink: str, *, request_options: RequestOptionsOrDict | None = None) -> BitlinkBody:
        """Returns information for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_bitlink(bitlink, request_options=request_options))

    def get_bitlinks_by_group(
        self,
        group_guid: str,
        *,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH,
        domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH,
        campaign_guid: str | None = None,
        channel_guid: str | None = None,
        custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH,
        has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        launchpad_ids: list[str] | None = None,
        encoding_login: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bitlinks:
        """Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            size: The quantity of items to be be returned
            search_after: Token used to search next batch, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            deeplinks: Filter to only Bitlinks that contain deeplinks
            domain_deeplinks: Filter to only Bitlinks that contain deeplinks configured with a custom domain
            campaign_guid: Filter to return only links for the given campaign GUID, can be provided
            channel_guid: Filter to return only links for the given channel GUID, can be provided, overrides all other
                parameters
            custom_bitlink: Value sent with the request.
            has_qr_codes: a filter value if the resource has any QR codes
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            launchpad_ids: Filter by launchpad id
            encoding_login: Filter by the login of the authenticated user that created the Bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_bitlinks_by_group(
                group_guid,
                size=size,
                search_after=search_after,
                query=query,
                hostname_path_query=hostname_path_query,
                created_before=created_before,
                created_after=created_after,
                archived=archived,
                deeplinks=deeplinks,
                domain_deeplinks=domain_deeplinks,
                campaign_guid=campaign_guid,
                channel_guid=channel_guid,
                custom_bitlink=custom_bitlink,
                has_qr_codes=has_qr_codes,
                is_expired=is_expired,
                has_expiration=has_expiration,
                has_dynamic_routing=has_dynamic_routing,
                tags=tags,
                launchpad_ids=launchpad_ids,
                encoding_login=encoding_login,
                request_options=request_options,
            ),
        )

    def get_clicks_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Clicks:
        """Returns the click counts for the specified link in an array based on a date.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            self._with_raw_response.get_clicks_for_bitlink(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_clicks_summary_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClicksSummary:
        """Returns the click counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            self._with_raw_response.get_clicks_summary_for_bitlink(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_engagements(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TotalEngagements:
        """Returns an array of engagement counts for the specified link. The array is comprised of button click, click
        and scan counts for each time window, where the window is based on the provided unit.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_engagements(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_engagements_summary(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TotalEngagementsSummary:
        """Returns the engagement counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_engagements_summary(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_metrics_for_bitlink_by_cities(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CityMetrics:
        """Returns the city origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_cities(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_metrics_for_bitlink_by_countries(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns the country origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_countries(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_metrics_for_bitlink_by_devices(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeviceMetrics:
        """Returns the device types generating click traffic to the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_devices(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_metrics_for_bitlink_by_referrer_name(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_referrer_name(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_metrics_for_bitlink_by_referrers(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_referrers(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_metrics_for_bitlink_by_referrers_by_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReferrersByDomains:
        """Returns click metrics grouped by referrers for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_referrers_by_domains(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_metrics_for_bitlink_by_referring_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns the referring domain click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_metrics_for_bitlink_by_referring_domains(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_sorted_bitlinks(
        self,
        group_guid: str,
        sort: SortOrStr,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SortedLinks:
        """Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            sort: The type of sorting that you would like to do
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_sorted_bitlinks(
                group_guid,
                sort,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                size=size,
                request_options=request_options,
            ),
        )

    def get_top_links_and_qr_codes_by_engagements(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TopLinksAndQrCodes:
        """Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time
        window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in
        separate lists; ``sorted_links`` preserves the unified descending-by-count ordering across both, with each
        entry's id referencing either a bitlink or a QR code guid.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_top_links_and_qr_codes_by_engagements(
                group_guid,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                size=size,
                request_options=request_options,
            ),
        )

    def update_bitlink(
        self,
        bitlink: str,
        body: BitlinkUpdateBody | BitlinkUpdateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BitlinkBody:
        """Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url
        parameter. This will always charge an encode limit.

        Args:
            bitlink: A Bitlink made of the domain and hash
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND CONFLICT GONE UNPROCESSABLE_ENTITY
                MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(self._with_raw_response.update_bitlink(bitlink, body, request_options=request_options))

    def update_bitlinks_by_group(
        self,
        group_guid: str,
        body: BulkUpdateRequest | BulkUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkUpdate:
        """Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of
        bitlink ids that were updated.

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
        return unwrap(
            self._with_raw_response.update_bitlinks_by_group(group_guid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BitlinksApiWithRawResponse:
        return self._with_raw_response


class AsyncBitlinksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBitlinksApiWithRawResponse(client, server, auth)

    async def create_bitlink(
        self, body: Shorten | ShortenDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ShortenBitlinkBody:
        """Converts a long url to a Bitlink. You may see errors returned from this endpoint -
        "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured
        for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom
        domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN EXPECTATION_FAILED UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.create_bitlink(body, request_options=request_options))

    async def create_full_bitlink(
        self, body: FullShorten | FullShortenDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BitlinkBody:
        """Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this
        endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is
        configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links
        against a custom domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND EXPECTATION_FAILED UNPROCESSABLE_ENTITY
                MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(await self._with_raw_response.create_full_bitlink(body, request_options=request_options))

    async def delete_bitlink(
        self, bitlink: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinkDeletionResponse:
        """Delete an unedited hash Bitlink.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.delete_bitlink(bitlink, request_options=request_options))

    async def expand_bitlink(
        self, body: ExpandBitlink | ExpandBitlinkDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExpandedBitlink:
        """Returns the short link and long URL for the specified link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST NOT_FOUND GONE UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.expand_bitlink(body, request_options=request_options))

    async def get_bitlink(
        self, bitlink: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BitlinkBody:
        """Returns information for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_bitlink(bitlink, request_options=request_options))

    async def get_bitlinks_by_group(
        self,
        group_guid: str,
        *,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH,
        domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH,
        campaign_guid: str | None = None,
        channel_guid: str | None = None,
        custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH,
        has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        launchpad_ids: list[str] | None = None,
        encoding_login: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bitlinks:
        """Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            size: The quantity of items to be be returned
            search_after: Token used to search next batch, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            deeplinks: Filter to only Bitlinks that contain deeplinks
            domain_deeplinks: Filter to only Bitlinks that contain deeplinks configured with a custom domain
            campaign_guid: Filter to return only links for the given campaign GUID, can be provided
            channel_guid: Filter to return only links for the given channel GUID, can be provided, overrides all other
                parameters
            custom_bitlink: Value sent with the request.
            has_qr_codes: a filter value if the resource has any QR codes
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            launchpad_ids: Filter by launchpad id
            encoding_login: Filter by the login of the authenticated user that created the Bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_bitlinks_by_group(
                group_guid,
                size=size,
                search_after=search_after,
                query=query,
                hostname_path_query=hostname_path_query,
                created_before=created_before,
                created_after=created_after,
                archived=archived,
                deeplinks=deeplinks,
                domain_deeplinks=domain_deeplinks,
                campaign_guid=campaign_guid,
                channel_guid=channel_guid,
                custom_bitlink=custom_bitlink,
                has_qr_codes=has_qr_codes,
                is_expired=is_expired,
                has_expiration=has_expiration,
                has_dynamic_routing=has_dynamic_routing,
                tags=tags,
                launchpad_ids=launchpad_ids,
                encoding_login=encoding_login,
                request_options=request_options,
            ),
        )

    async def get_clicks_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Clicks:
        """Returns the click counts for the specified link in an array based on a date.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            await self._with_raw_response.get_clicks_for_bitlink(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_clicks_summary_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClicksSummary:
        """Returns the click counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            await self._with_raw_response.get_clicks_summary_for_bitlink(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_engagements(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TotalEngagements:
        """Returns an array of engagement counts for the specified link. The array is comprised of button click, click
        and scan counts for each time window, where the window is based on the provided unit.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_engagements(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_engagements_summary(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TotalEngagementsSummary:
        """Returns the engagement counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_engagements_summary(
                bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_metrics_for_bitlink_by_cities(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CityMetrics:
        """Returns the city origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_cities(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_metrics_for_bitlink_by_countries(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns the country origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_countries(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_metrics_for_bitlink_by_devices(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeviceMetrics:
        """Returns the device types generating click traffic to the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_devices(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_metrics_for_bitlink_by_referrer_name(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_referrer_name(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_metrics_for_bitlink_by_referrers(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_referrers(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_metrics_for_bitlink_by_referrers_by_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReferrersByDomains:
        """Returns click metrics grouped by referrers for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_referrers_by_domains(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_metrics_for_bitlink_by_referring_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetrics:
        """Returns the referring domain click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_metrics_for_bitlink_by_referring_domains(
                bitlink,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_sorted_bitlinks(
        self,
        group_guid: str,
        sort: SortOrStr,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SortedLinks:
        """Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            sort: The type of sorting that you would like to do
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_sorted_bitlinks(
                group_guid,
                sort,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                size=size,
                request_options=request_options,
            ),
        )

    async def get_top_links_and_qr_codes_by_engagements(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TopLinksAndQrCodes:
        """Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time
        window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in
        separate lists; ``sorted_links`` preserves the unified descending-by-count ordering across both, with each
        entry's id referencing either a bitlink or a QR code guid.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is
                ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_top_links_and_qr_codes_by_engagements(
                group_guid,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                size=size,
                request_options=request_options,
            ),
        )

    async def update_bitlink(
        self,
        bitlink: str,
        body: BitlinkUpdateBody | BitlinkUpdateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BitlinkBody:
        """Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url
        parameter. This will always charge an encode limit.

        Args:
            bitlink: A Bitlink made of the domain and hash
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND CONFLICT GONE UNPROCESSABLE_ENTITY
                MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(await self._with_raw_response.update_bitlink(bitlink, body, request_options=request_options))

    async def update_bitlinks_by_group(
        self,
        group_guid: str,
        body: BulkUpdateRequest | BulkUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkUpdate:
        """Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of
        bitlink ids that were updated.

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
        return unwrap(
            await self._with_raw_response.update_bitlinks_by_group(group_guid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBitlinksApiWithRawResponse:
        return self._with_raw_response


class BitlinksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_bitlink(
        self, body: Shorten | ShortenDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ShortenBitlinkBody, CreateBitlinkErrorBody]:
        """Converts a long url to a Bitlink. You may see errors returned from this endpoint -
        "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured
        for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom
        domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/shorten"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Shorten | ShortenDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ShortenBitlinkBody],
            error_mapper=create_bitlink_error_mapper,
            request_options=request_options,
        )

    def create_full_bitlink(
        self, body: FullShorten | FullShortenDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BitlinkBody, CreateFullBitlinkErrorBody]:
        """Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this
        endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is
        configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links
        against a custom domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bitlinks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FullShorten | FullShortenDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BitlinkBody],
            error_mapper=create_full_bitlink_error_mapper,
            request_options=request_options,
        )

    def delete_bitlink(
        self, bitlink: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinkDeletionResponse, DeleteBitlinkErrorBody]:
        """Delete an unedited hash Bitlink.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bitlinks/{bitlink}"),
            path_params=[param[str]("bitlink", bitlink)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[LinkDeletionResponse],
            error_mapper=delete_bitlink_error_mapper,
            request_options=request_options,
        )

    def expand_bitlink(
        self, body: ExpandBitlink | ExpandBitlinkDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExpandedBitlink, ExpandBitlinkErrorBody]:
        """Returns the short link and long URL for the specified link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/expand"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExpandBitlink | ExpandBitlinkDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ExpandedBitlink],
            error_mapper=expand_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_bitlink(
        self, bitlink: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BitlinkBody, GetBitlinkErrorBody]:
        """Returns information for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bitlinks/{bitlink}"),
            path_params=[param[str]("bitlink", bitlink)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BitlinkBody],
            error_mapper=get_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_bitlinks_by_group(
        self,
        group_guid: str,
        *,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH,
        domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH,
        campaign_guid: str | None = None,
        channel_guid: str | None = None,
        custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH,
        has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        launchpad_ids: list[str] | None = None,
        encoding_login: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bitlinks, GetBitlinksByGroupErrorBody]:
        """Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            size: The quantity of items to be be returned
            search_after: Token used to search next batch, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            deeplinks: Filter to only Bitlinks that contain deeplinks
            domain_deeplinks: Filter to only Bitlinks that contain deeplinks configured with a custom domain
            campaign_guid: Filter to return only links for the given campaign GUID, can be provided
            channel_guid: Filter to return only links for the given channel GUID, can be provided, overrides all other
                parameters
            custom_bitlink: Value sent with the request.
            has_qr_codes: a filter value if the resource has any QR codes
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            launchpad_ids: Filter by launchpad id
            encoding_login: Filter by the login of the authenticated user that created the Bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/bitlinks"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[int | None]("size", size),
                param[str | None]("search_after", search_after),
                param[str | None]("query", query),
                param[str | None]("hostname_path_query", hostname_path_query),
                param[int | None]("created_before", created_before),
                param[int | None]("created_after", created_after),
                param[ArchivedOrStr | None]("archived", archived),
                param[DeeplinksOrStr | None]("deeplinks", deeplinks),
                param[DomainDeeplinksOrStr | None]("domain_deeplinks", domain_deeplinks),
                param[str | None]("campaign_guid", campaign_guid),
                param[str | None]("channel_guid", channel_guid),
                param[CustomBitlinkOrStr | None]("custom_bitlink", custom_bitlink),
                param[HasQrCodesOrStr | None]("has_qr_codes", has_qr_codes),
                param[IsExpiredOrStr | None]("is_expired", is_expired),
                param[HasExpirationOrStr | None]("has_expiration", has_expiration),
                param[HasDynamicRoutingOrStr | None]("has_dynamic_routing", has_dynamic_routing),
                param[list[str] | None]("tags", tags),
                param[list[str] | None]("launchpad_ids", launchpad_ids),
                param[list[str] | None]("encoding_login", encoding_login),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bitlinks],
            error_mapper=get_bitlinks_by_group_error_mapper,
            request_options=request_options,
        )

    def get_clicks_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Clicks, GetClicksForBitlinkErrorBody]:
        """Returns the click counts for the specified link in an array based on a date.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/clicks"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Clicks],
            error_mapper=get_clicks_for_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_clicks_summary_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClicksSummary, GetClicksSummaryForBitlinkErrorBody]:
        """Returns the click counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/clicks/summary"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClicksSummary],
            error_mapper=get_clicks_summary_for_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_engagements(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TotalEngagements, GetEngagementsErrorBody]:
        """Returns an array of engagement counts for the specified link. The array is comprised of button click, click
        and scan counts for each time window, where the window is based on the provided unit.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/engagements"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TotalEngagements],
            error_mapper=get_engagements_error_mapper,
            request_options=request_options,
        )

    def get_engagements_summary(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TotalEngagementsSummary, GetEngagementsSummaryErrorBody]:
        """Returns the engagement counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/engagements/summary"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TotalEngagementsSummary],
            error_mapper=get_engagements_summary_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_cities(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetrics, GetMetricsForBitlinkByCitiesErrorBody]:
        """Returns the city origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/cities"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CityMetrics],
            error_mapper=get_metrics_for_bitlink_by_cities_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_countries(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByCountriesErrorBody]:
        """Returns the country origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/countries"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_countries_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_devices(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeviceMetrics, GetMetricsForBitlinkByDevicesErrorBody]:
        """Returns the device types generating click traffic to the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/devices"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DeviceMetrics],
            error_mapper=get_metrics_for_bitlink_by_devices_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_referrer_name(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrerNameErrorBody]:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referrer_name"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_referrer_name_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_referrers(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrersErrorBody]:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referrers"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_referrers_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_referrers_by_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReferrersByDomains, GetMetricsForBitlinkByReferrersByDomainsErrorBody]:
        """Returns click metrics grouped by referrers for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referrers_by_domains"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ReferrersByDomains],
            error_mapper=get_metrics_for_bitlink_by_referrers_by_domains_error_mapper,
            request_options=request_options,
        )

    def get_metrics_for_bitlink_by_referring_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferringDomainsErrorBody]:
        """Returns the referring domain click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referring_domains"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_referring_domains_error_mapper,
            request_options=request_options,
        )

    def get_sorted_bitlinks(
        self,
        group_guid: str,
        sort: SortOrStr,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SortedLinks, GetSortedBitlinksErrorBody]:
        """Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            sort: The type of sorting that you would like to do
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/bitlinks/{sort}"),
            path_params=[param[str]("group_guid", group_guid), param[SortOrStr]("sort", sort)],
            query_params=[
                param[TimeUnitOrStr | None]("unit", unit),
                param[int | None]("units", units),
                param[str | None]("unit_reference", unit_reference),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SortedLinks],
            error_mapper=get_sorted_bitlinks_error_mapper,
            request_options=request_options,
        )

    def get_top_links_and_qr_codes_by_engagements(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TopLinksAndQrCodes, GetTopLinksAndQrCodesByEngagementsErrorBody]:
        """Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time
        window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in
        separate lists; ``sorted_links`` preserves the unified descending-by-count ordering across both, with each
        entry's id referencing either a bitlink or a QR code guid.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/engagements/sorted/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr | None]("unit", unit),
                param[int | None]("units", units),
                param[str | None]("unit_reference", unit_reference),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TopLinksAndQrCodes],
            error_mapper=get_top_links_and_qr_codes_by_engagements_error_mapper,
            request_options=request_options,
        )

    def update_bitlink(
        self,
        bitlink: str,
        body: BitlinkUpdateBody | BitlinkUpdateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BitlinkBody, UpdateBitlinkErrorBody]:
        """Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url
        parameter. This will always charge an encode limit.

        Args:
            bitlink: A Bitlink made of the domain and hash
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/bitlinks/{bitlink}"),
            path_params=[param[str]("bitlink", bitlink)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BitlinkUpdateBody | BitlinkUpdateBodyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BitlinkBody],
            error_mapper=update_bitlink_error_mapper,
            request_options=request_options,
        )

    def update_bitlinks_by_group(
        self,
        group_guid: str,
        body: BulkUpdateRequest | BulkUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkUpdate, UpdateBitlinksByGroupErrorBody]:
        """Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of
        bitlink ids that were updated.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}/bitlinks"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkUpdateRequest | BulkUpdateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkUpdate],
            error_mapper=update_bitlinks_by_group_error_mapper,
            request_options=request_options,
        )


class AsyncBitlinksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_bitlink(
        self, body: Shorten | ShortenDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ShortenBitlinkBody, CreateBitlinkErrorBody]:
        """Converts a long url to a Bitlink. You may see errors returned from this endpoint -
        "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured
        for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom
        domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/shorten"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Shorten | ShortenDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ShortenBitlinkBody],
            error_mapper=create_bitlink_error_mapper,
            request_options=request_options,
        )

    async def create_full_bitlink(
        self, body: FullShorten | FullShortenDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BitlinkBody, CreateFullBitlinkErrorBody]:
        """Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this
        endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is
        configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links
        against a custom domain which doesn't have DNS properly configured.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bitlinks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FullShorten | FullShortenDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BitlinkBody],
            error_mapper=create_full_bitlink_error_mapper,
            request_options=request_options,
        )

    async def delete_bitlink(
        self, bitlink: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinkDeletionResponse, DeleteBitlinkErrorBody]:
        """Delete an unedited hash Bitlink.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bitlinks/{bitlink}"),
            path_params=[param[str]("bitlink", bitlink)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[LinkDeletionResponse],
            error_mapper=delete_bitlink_error_mapper,
            request_options=request_options,
        )

    async def expand_bitlink(
        self, body: ExpandBitlink | ExpandBitlinkDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExpandedBitlink, ExpandBitlinkErrorBody]:
        """Returns the short link and long URL for the specified link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/expand"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExpandBitlink | ExpandBitlinkDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ExpandedBitlink],
            error_mapper=expand_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_bitlink(
        self, bitlink: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BitlinkBody, GetBitlinkErrorBody]:
        """Returns information for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bitlinks/{bitlink}"),
            path_params=[param[str]("bitlink", bitlink)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BitlinkBody],
            error_mapper=get_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_bitlinks_by_group(
        self,
        group_guid: str,
        *,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH,
        domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH,
        campaign_guid: str | None = None,
        channel_guid: str | None = None,
        custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH,
        has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        launchpad_ids: list[str] | None = None,
        encoding_login: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bitlinks, GetBitlinksByGroupErrorBody]:
        """Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            size: The quantity of items to be be returned
            search_after: Token used to search next batch, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            deeplinks: Filter to only Bitlinks that contain deeplinks
            domain_deeplinks: Filter to only Bitlinks that contain deeplinks configured with a custom domain
            campaign_guid: Filter to return only links for the given campaign GUID, can be provided
            channel_guid: Filter to return only links for the given channel GUID, can be provided, overrides all other
                parameters
            custom_bitlink: Value sent with the request.
            has_qr_codes: a filter value if the resource has any QR codes
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            launchpad_ids: Filter by launchpad id
            encoding_login: Filter by the login of the authenticated user that created the Bitlink
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/bitlinks"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[int | None]("size", size),
                param[str | None]("search_after", search_after),
                param[str | None]("query", query),
                param[str | None]("hostname_path_query", hostname_path_query),
                param[int | None]("created_before", created_before),
                param[int | None]("created_after", created_after),
                param[ArchivedOrStr | None]("archived", archived),
                param[DeeplinksOrStr | None]("deeplinks", deeplinks),
                param[DomainDeeplinksOrStr | None]("domain_deeplinks", domain_deeplinks),
                param[str | None]("campaign_guid", campaign_guid),
                param[str | None]("channel_guid", channel_guid),
                param[CustomBitlinkOrStr | None]("custom_bitlink", custom_bitlink),
                param[HasQrCodesOrStr | None]("has_qr_codes", has_qr_codes),
                param[IsExpiredOrStr | None]("is_expired", is_expired),
                param[HasExpirationOrStr | None]("has_expiration", has_expiration),
                param[HasDynamicRoutingOrStr | None]("has_dynamic_routing", has_dynamic_routing),
                param[list[str] | None]("tags", tags),
                param[list[str] | None]("launchpad_ids", launchpad_ids),
                param[list[str] | None]("encoding_login", encoding_login),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bitlinks],
            error_mapper=get_bitlinks_by_group_error_mapper,
            request_options=request_options,
        )

    async def get_clicks_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Clicks, GetClicksForBitlinkErrorBody]:
        """Returns the click counts for the specified link in an array based on a date.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/clicks"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Clicks],
            error_mapper=get_clicks_for_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_clicks_summary_for_bitlink(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClicksSummary, GetClicksSummaryForBitlinkErrorBody]:
        """Returns the click counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/clicks/summary"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClicksSummary],
            error_mapper=get_clicks_summary_for_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_engagements(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TotalEngagements, GetEngagementsErrorBody]:
        """Returns an array of engagement counts for the specified link. The array is comprised of button click, click
        and scan counts for each time window, where the window is based on the provided unit.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/engagements"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TotalEngagements],
            error_mapper=get_engagements_error_mapper,
            request_options=request_options,
        )

    async def get_engagements_summary(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TotalEngagementsSummary, GetEngagementsSummaryErrorBody]:
        """Returns the engagement counts for the specified link rolled up into a single field.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/engagements/summary"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TotalEngagementsSummary],
            error_mapper=get_engagements_summary_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_cities(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CityMetrics, GetMetricsForBitlinkByCitiesErrorBody]:
        """Returns the city origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/cities"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CityMetrics],
            error_mapper=get_metrics_for_bitlink_by_cities_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_countries(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByCountriesErrorBody]:
        """Returns the country origins of click traffic for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/countries"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_countries_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_devices(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeviceMetrics, GetMetricsForBitlinkByDevicesErrorBody]:
        """Returns the device types generating click traffic to the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/devices"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DeviceMetrics],
            error_mapper=get_metrics_for_bitlink_by_devices_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_referrer_name(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrerNameErrorBody]:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referrer_name"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_referrer_name_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_referrers(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrersErrorBody]:
        """Returns referrer click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referrers"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_referrers_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_referrers_by_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReferrersByDomains, GetMetricsForBitlinkByReferrersByDomainsErrorBody]:
        """Returns click metrics grouped by referrers for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referrers_by_domains"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ReferrersByDomains],
            error_mapper=get_metrics_for_bitlink_by_referrers_by_domains_error_mapper,
            request_options=request_options,
        )

    async def get_metrics_for_bitlink_by_referring_domains(
        self,
        bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetrics, GetMetricsForBitlinkByReferringDomainsErrorBody]:
        """Returns the referring domain click counts for the specified link.

        Args:
            bitlink: A Bitlink made of the domain and hash
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
            url_template=self._server.default("/bitlinks/{bitlink}/referring_domains"),
            path_params=[param[str]("bitlink", bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetrics],
            error_mapper=get_metrics_for_bitlink_by_referring_domains_error_mapper,
            request_options=request_options,
        )

    async def get_sorted_bitlinks(
        self,
        group_guid: str,
        sort: SortOrStr,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SortedLinks, GetSortedBitlinksErrorBody]:
        """Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

        Args:
            group_guid: A GUID for a Bitly group
            sort: The type of sorting that you would like to do
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/bitlinks/{sort}"),
            path_params=[param[str]("group_guid", group_guid), param[SortOrStr]("sort", sort)],
            query_params=[
                param[TimeUnitOrStr | None]("unit", unit),
                param[int | None]("units", units),
                param[str | None]("unit_reference", unit_reference),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SortedLinks],
            error_mapper=get_sorted_bitlinks_error_mapper,
            request_options=request_options,
        )

    async def get_top_links_and_qr_codes_by_engagements(
        self,
        group_guid: str,
        *,
        unit: TimeUnitOrStr | None = TimeUnit.DAY,
        units: int | None = -1,
        unit_reference: str | None = None,
        size: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TopLinksAndQrCodes, GetTopLinksAndQrCodesByEngagementsErrorBody]:
        """Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time
        window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in
        separate lists; ``sorted_links`` preserves the unified descending-by-count ordering across both, with each
        entry's id referencing either a bitlink or a QR code guid.

        Args:
            group_guid: A GUID for a Bitly group
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time.
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            size: The quantity of items to be be returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/engagements/sorted/top"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[TimeUnitOrStr | None]("unit", unit),
                param[int | None]("units", units),
                param[str | None]("unit_reference", unit_reference),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TopLinksAndQrCodes],
            error_mapper=get_top_links_and_qr_codes_by_engagements_error_mapper,
            request_options=request_options,
        )

    async def update_bitlink(
        self,
        bitlink: str,
        body: BitlinkUpdateBody | BitlinkUpdateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BitlinkBody, UpdateBitlinkErrorBody]:
        """Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url
        parameter. This will always charge an encode limit.

        Args:
            bitlink: A Bitlink made of the domain and hash
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/bitlinks/{bitlink}"),
            path_params=[param[str]("bitlink", bitlink)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BitlinkUpdateBody | BitlinkUpdateBodyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BitlinkBody],
            error_mapper=update_bitlink_error_mapper,
            request_options=request_options,
        )

    async def update_bitlinks_by_group(
        self,
        group_guid: str,
        body: BulkUpdateRequest | BulkUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkUpdate, UpdateBitlinksByGroupErrorBody]:
        """Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of
        bitlink ids that were updated.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}/bitlinks"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkUpdateRequest | BulkUpdateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkUpdate],
            error_mapper=update_bitlinks_by_group_error_mapper,
            request_options=request_options,
        )
