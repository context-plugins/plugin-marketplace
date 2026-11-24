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
from ..errors.create_qr_code_public_error import CreateQrCodePublicErrorBody, create_qr_code_public_error_mapper
from ..errors.create_static_qr_code_public_error import (
    CreateStaticQrCodePublicErrorBody,
    create_static_qr_code_public_error_mapper,
)
from ..errors.delete_qr_code_error import DeleteQrCodeErrorBody, delete_qr_code_error_mapper
from ..errors.get_qr_code_by_id_public_error import GetQrCodeByIdPublicErrorBody, get_qr_code_by_id_public_error_mapper
from ..errors.get_qr_code_image_public_error import GetQrCodeImagePublicErrorBody, get_qr_code_image_public_error_mapper
from ..errors.get_scan_metrics_for_qr_code_by_browser_error import (
    GetScanMetricsForQrCodeByBrowserErrorBody,
    get_scan_metrics_for_qr_code_by_browser_error_mapper,
)
from ..errors.get_scan_metrics_for_qr_code_by_cities_error import (
    GetScanMetricsForQrCodeByCitiesErrorBody,
    get_scan_metrics_for_qr_code_by_cities_error_mapper,
)
from ..errors.get_scan_metrics_for_qr_code_by_countries_error import (
    GetScanMetricsForQrCodeByCountriesErrorBody,
    get_scan_metrics_for_qr_code_by_countries_error_mapper,
)
from ..errors.get_scan_metrics_for_qr_code_by_devices_os_error import (
    GetScanMetricsForQrCodeByDevicesOsErrorBody,
    get_scan_metrics_for_qr_code_by_devices_os_error_mapper,
)
from ..errors.get_scan_metrics_for_qr_code_error import (
    GetScanMetricsForQrCodeErrorBody,
    get_scan_metrics_for_qr_code_error_mapper,
)
from ..errors.get_scan_metrics_summary_for_qr_code_error import (
    GetScanMetricsSummaryForQrCodeErrorBody,
    get_scan_metrics_summary_for_qr_code_error_mapper,
)
from ..errors.list_qr_minimal_error import ListQrMinimalErrorBody, list_qr_minimal_error_mapper
from ..errors.redirect_qr_code_destination_error import (
    RedirectQrCodeDestinationErrorBody,
    redirect_qr_code_destination_error_mapper,
)
from ..errors.update_qr_code_public_error import UpdateQrCodePublicErrorBody, update_qr_code_public_error_mapper
from ..errors.update_qr_codes_by_group_error import UpdateQrCodesByGroupErrorBody, update_qr_codes_by_group_error_mapper
from ..errors.upgrade_qr_code_to_bitlink_error import (
    UpgradeQrCodeToBitlinkErrorBody,
    upgrade_qr_code_to_bitlink_error_mapper,
)
from ..models.bitlink_body import BitlinkBody
from ..models.bitlink_scans import BitlinkScans
from ..models.bitlink_scans_summary import BitlinkScansSummary
from ..models.city_scan_metrics import CityScanMetrics
from ..models.enums.accept import AcceptOrStr
from ..models.enums.archived import Archived, ArchivedOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.has_dynamic_routing import HasDynamicRouting, HasDynamicRoutingOrStr
from ..models.enums.has_expiration import HasExpiration, HasExpirationOrStr
from ..models.enums.has_render_customizations import HasRenderCustomizations, HasRenderCustomizationsOrStr
from ..models.enums.is_expired import IsExpired, IsExpiredOrStr
from ..models.enums.is_gs1 import IsGs1, IsGs1OrStr
from ..models.enums.qrc_type import QrcTypeOrStr
from ..models.enums.time_unit import TimeUnit, TimeUnitOrStr
from ..models.public_create_qr_code_request import PublicCreateQrCodeRequest, PublicCreateQrCodeRequestDict
from ..models.public_create_static_qr_code_request import (
    PublicCreateStaticQrCodeRequest,
    PublicCreateStaticQrCodeRequestDict,
)
from ..models.public_delete_qr_code_response import PublicDeleteQrCodeResponse
from ..models.public_qr_code_image_response import PublicQrCodeImageResponse
from ..models.public_static_qr_code_response import PublicStaticQrCodeResponse
from ..models.public_update_qr_code_request import PublicUpdateQrCodeRequest, PublicUpdateQrCodeRequestDict
from ..models.qr_code_details import QrCodeDetails
from ..models.qr_code_minimal import QrCodeMinimal
from ..models.qr_codes_minimal import QrCodesMinimal
from ..models.qrc_bulk_update import QrcBulkUpdate
from ..models.qrc_bulk_update_request import QrcBulkUpdateRequest, QrcBulkUpdateRequestDict
from ..models.redirect_qr_code_request import RedirectQrCodeRequest, RedirectQrCodeRequestDict
from ..models.scan_metrics import ScanMetrics
from ..server.server import Server


class QrCodes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QrCodesWithRawResponse(client, server, auth)

    def create_qr_code_public(
        self,
        body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCodeMinimal:
        """Create a new QR Code and return its metadata

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CREATED

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED GONE INTERNAL_ERROR
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.create_qr_code_public(body, request_options=request_options))

    def create_static_qr_code_public(
        self,
        body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: AcceptOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicStaticQrCodeResponse:
        """Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are
        supported via the Accept header Contact your Account Manager to discuss enabling this feature for your account.

        The ``render_customizations`` field supports basic appearance options. Customizations that require the rasterize
        API are not supported: ``gradient``, ``background_gradient``, ``frame``, ``text``, and ``logo``.

        The Accept header controls the response format:
        - ``application/json`` (default): Returns a JSON object with the image as a base64-encoded byte string.
        - ``image/svg+xml``: Returns the raw SVG image.
        - ``image/png``: Returns the raw PNG image.

        Args:
            body: The request body.
            format_: The image format. Supports ``svg`` and ``png``. Ignored if the Accept header specifies an image
                type.
            accept: Controls the response format. Use ``application/json`` (default) to receive a JSON-wrapped base64
                image, ``image/svg+xml`` to receive the raw SVG, or ``image/png`` to receive the raw PNG.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_ACCEPTABLE UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.create_static_qr_code_public(
                body, format_=format_, accept=accept, request_options=request_options
            ),
        )

    def delete_qr_code(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicDeleteQrCodeResponse:
        """Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link
        (if applicable).

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error |
                SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.delete_qr_code(qrcode_id, request_options=request_options))

    def get_qr_code_by_id_public(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> QrCodeDetails:
        """Gets the QR code with a matching id.

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_qr_code_by_id_public(qrcode_id, request_options=request_options))

    def get_qr_code_image_public(
        self,
        qrcode_id: str,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicQrCodeImageResponse:
        """Get the image of a given QR Code. The Accept header controls how this is returned (options are
        "application/json", "image/svg+xml", and "image/png"). If the Accept header is "application/json" the format
        query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed
        with its mime type as would be suitable for a HTML image src tag). To Return the QR Code image itself, set the
        Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter
        to “svg” or “png” (if no format is specified the default will be “svg”).

        Args:
            qrcode_id: The QR Code ID
            format_: The format type of the image. If there is an image format in the header it takes precedence.
            accept: The file format for the QR code's image. If the accept header is application/json the image data
                will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable
                for a HTML image src tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_qr_code_image_public(
                qrcode_id, format_=format_, accept=accept, request_options=request_options
            ),
        )

    def get_scan_metrics_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BitlinkScans:
        """Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each
        time window, where the window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            self._with_raw_response.get_scan_metrics_for_qr_code(
                qrcode_id, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_scan_metrics_for_qr_code_by_browser(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScanMetrics:
        """Returns the browsers generating scan traffic to the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_scan_metrics_for_qr_code_by_browser(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_scan_metrics_for_qr_code_by_cities(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CityScanMetrics:
        """Returns the city origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_scan_metrics_for_qr_code_by_cities(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_scan_metrics_for_qr_code_by_countries(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScanMetrics:
        """Returns the country origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            self._with_raw_response.get_scan_metrics_for_qr_code_by_countries(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_scan_metrics_for_qr_code_by_devices_os(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScanMetrics:
        """Returns the device os generating scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_scan_metrics_for_qr_code_by_devices_os(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_scan_metrics_summary_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BitlinkScansSummary:
        """Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the
        window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            self._with_raw_response.get_scan_metrics_summary_for_qr_code(
                qrcode_id, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def list_qr_minimal(
        self,
        group_guid: str,
        *,
        has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        creating_login: list[str] | None = None,
        qrc_type: list[QrcTypeOrStr] | None = None,
        is_gs1: IsGs1OrStr | None = IsGs1.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCodesMinimal:
        """Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order. The
        pagination occurs by calling the next link in the pagination response object.

        Args:
            group_guid: A GUID for a Bitly group
            has_render_customizations: Whether or not QRCode has any render customizations (like color or shape changes)
            size: The quantity of items to be be returned
            search_after: Token used to search next batch of qr codes, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            creating_login: Filter by the login of the authenticated user that created the QR Code
            qrc_type: Value sent with the request.
            is_gs1: a filter value if the resource is a GS1 QR code
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_qr_minimal(
                group_guid,
                has_render_customizations=has_render_customizations,
                size=size,
                search_after=search_after,
                query=query,
                hostname_path_query=hostname_path_query,
                created_before=created_before,
                created_after=created_after,
                archived=archived,
                creating_login=creating_login,
                qrc_type=qrc_type,
                is_gs1=is_gs1,
                is_expired=is_expired,
                has_expiration=has_expiration,
                has_dynamic_routing=has_dynamic_routing,
                tags=tags,
                request_options=request_options,
            ),
        )

    def redirect_qr_code_destination(
        self,
        qrcode_id: str,
        body: RedirectQrCodeRequest | RedirectQrCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCodeMinimal:
        """Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR
        Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

        Args:
            qrcode_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.redirect_qr_code_destination(qrcode_id, body, request_options=request_options)
        )

    def update_qr_code_public(
        self,
        qrcode_id: str,
        *,
        body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCodeMinimal:
        """Updates the QR code with a matching id and returns it.

        Args:
            qrcode_id: The QR code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_qr_code_public(qrcode_id, body=body, request_options=request_options)
        )

    def update_qr_codes_by_group(
        self,
        group_guid: str,
        body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrcBulkUpdate:
        """Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time. Pages QR codes
        cannot be updated with this endpoint. The response includes a list of QR code ids that were updated.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.update_qr_codes_by_group(group_guid, body, request_options=request_options)
        )

    def upgrade_qr_code_to_bitlink(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BitlinkBody:
        """Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly
        short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is
        already coupled, no encode is consumed.

        Args:
            qrcode_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error |
                SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.upgrade_qr_code_to_bitlink(qrcode_id, request_options=request_options))

    @property
    def with_raw_response(self) -> QrCodesWithRawResponse:
        return self._with_raw_response


class AsyncQrCodes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQrCodesWithRawResponse(client, server, auth)

    async def create_qr_code_public(
        self,
        body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCodeMinimal:
        """Create a new QR Code and return its metadata

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CREATED

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED GONE INTERNAL_ERROR
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.create_qr_code_public(body, request_options=request_options))

    async def create_static_qr_code_public(
        self,
        body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: AcceptOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicStaticQrCodeResponse:
        """Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are
        supported via the Accept header Contact your Account Manager to discuss enabling this feature for your account.

        The ``render_customizations`` field supports basic appearance options. Customizations that require the rasterize
        API are not supported: ``gradient``, ``background_gradient``, ``frame``, ``text``, and ``logo``.

        The Accept header controls the response format:
        - ``application/json`` (default): Returns a JSON object with the image as a base64-encoded byte string.
        - ``image/svg+xml``: Returns the raw SVG image.
        - ``image/png``: Returns the raw PNG image.

        Args:
            body: The request body.
            format_: The image format. Supports ``svg`` and ``png``. Ignored if the Accept header specifies an image
                type.
            accept: Controls the response format. Use ``application/json`` (default) to receive a JSON-wrapped base64
                image, ``image/svg+xml`` to receive the raw SVG, or ``image/png`` to receive the raw PNG.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_ACCEPTABLE UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_static_qr_code_public(
                body, format_=format_, accept=accept, request_options=request_options
            ),
        )

    async def delete_qr_code(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicDeleteQrCodeResponse:
        """Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link
        (if applicable).

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error |
                SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.delete_qr_code(qrcode_id, request_options=request_options))

    async def get_qr_code_by_id_public(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QrCodeDetails:
        """Gets the QR code with a matching id.

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_qr_code_by_id_public(qrcode_id, request_options=request_options)
        )

    async def get_qr_code_image_public(
        self,
        qrcode_id: str,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicQrCodeImageResponse:
        """Get the image of a given QR Code. The Accept header controls how this is returned (options are
        "application/json", "image/svg+xml", and "image/png"). If the Accept header is "application/json" the format
        query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed
        with its mime type as would be suitable for a HTML image src tag). To Return the QR Code image itself, set the
        Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter
        to “svg” or “png” (if no format is specified the default will be “svg”).

        Args:
            qrcode_id: The QR Code ID
            format_: The format type of the image. If there is an image format in the header it takes precedence.
            accept: The file format for the QR code's image. If the accept header is application/json the image data
                will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable
                for a HTML image src tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_qr_code_image_public(
                qrcode_id, format_=format_, accept=accept, request_options=request_options
            ),
        )

    async def get_scan_metrics_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BitlinkScans:
        """Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each
        time window, where the window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            await self._with_raw_response.get_scan_metrics_for_qr_code(
                qrcode_id, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_scan_metrics_for_qr_code_by_browser(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScanMetrics:
        """Returns the browsers generating scan traffic to the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_scan_metrics_for_qr_code_by_browser(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_scan_metrics_for_qr_code_by_cities(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CityScanMetrics:
        """Returns the city origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_scan_metrics_for_qr_code_by_cities(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_scan_metrics_for_qr_code_by_countries(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScanMetrics:
        """Returns the country origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            await self._with_raw_response.get_scan_metrics_for_qr_code_by_countries(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_scan_metrics_for_qr_code_by_devices_os(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScanMetrics:
        """Returns the device os generating scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_scan_metrics_for_qr_code_by_devices_os(
                qrcode_id,
                unit=unit,
                units=units,
                size=size,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_scan_metrics_summary_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BitlinkScansSummary:
        """Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the
        window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            await self._with_raw_response.get_scan_metrics_summary_for_qr_code(
                qrcode_id, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def list_qr_minimal(
        self,
        group_guid: str,
        *,
        has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        creating_login: list[str] | None = None,
        qrc_type: list[QrcTypeOrStr] | None = None,
        is_gs1: IsGs1OrStr | None = IsGs1.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCodesMinimal:
        """Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order. The
        pagination occurs by calling the next link in the pagination response object.

        Args:
            group_guid: A GUID for a Bitly group
            has_render_customizations: Whether or not QRCode has any render customizations (like color or shape changes)
            size: The quantity of items to be be returned
            search_after: Token used to search next batch of qr codes, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            creating_login: Filter by the login of the authenticated user that created the QR Code
            qrc_type: Value sent with the request.
            is_gs1: a filter value if the resource is a GS1 QR code
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_qr_minimal(
                group_guid,
                has_render_customizations=has_render_customizations,
                size=size,
                search_after=search_after,
                query=query,
                hostname_path_query=hostname_path_query,
                created_before=created_before,
                created_after=created_after,
                archived=archived,
                creating_login=creating_login,
                qrc_type=qrc_type,
                is_gs1=is_gs1,
                is_expired=is_expired,
                has_expiration=has_expiration,
                has_dynamic_routing=has_dynamic_routing,
                tags=tags,
                request_options=request_options,
            ),
        )

    async def redirect_qr_code_destination(
        self,
        qrcode_id: str,
        body: RedirectQrCodeRequest | RedirectQrCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCodeMinimal:
        """Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR
        Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

        Args:
            qrcode_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.redirect_qr_code_destination(qrcode_id, body, request_options=request_options)
        )

    async def update_qr_code_public(
        self,
        qrcode_id: str,
        *,
        body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCodeMinimal:
        """Updates the QR code with a matching id and returns it.

        Args:
            qrcode_id: The QR code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE INTERNAL_ERROR ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_qr_code_public(qrcode_id, body=body, request_options=request_options)
        )

    async def update_qr_codes_by_group(
        self,
        group_guid: str,
        body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrcBulkUpdate:
        """Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time. Pages QR codes
        cannot be updated with this endpoint. The response includes a list of QR code ids that were updated.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND GONE UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_qr_codes_by_group(group_guid, body, request_options=request_options)
        )

    async def upgrade_qr_code_to_bitlink(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BitlinkBody:
        """Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly
        short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is
        already coupled, no encode is consumed.

        Args:
            qrcode_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR ``error`` is ``Error |
                SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.upgrade_qr_code_to_bitlink(qrcode_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncQrCodesWithRawResponse:
        return self._with_raw_response


class QrCodesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_qr_code_public(
        self,
        body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodeMinimal, CreateQrCodePublicErrorBody]:
        """Create a new QR Code and return its metadata

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qr-codes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QrCodeMinimal],
            error_mapper=create_qr_code_public_error_mapper,
            request_options=request_options,
        )

    def create_static_qr_code_public(
        self,
        body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: AcceptOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicStaticQrCodeResponse, CreateStaticQrCodePublicErrorBody]:
        """Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are
        supported via the Accept header Contact your Account Manager to discuss enabling this feature for your account.

        The ``render_customizations`` field supports basic appearance options. Customizations that require the rasterize
        API are not supported: ``gradient``, ``background_gradient``, ``frame``, ``text``, and ``logo``.

        The Accept header controls the response format:
        - ``application/json`` (default): Returns a JSON object with the image as a base64-encoded byte string.
        - ``image/svg+xml``: Returns the raw SVG image.
        - ``image/png``: Returns the raw PNG image.

        Args:
            body: The request body.
            format_: The image format. Supports ``svg`` and ``png``. Ignored if the Accept header specifies an image
                type.
            accept: Controls the response format. Use ``application/json`` (default) to receive a JSON-wrapped base64
                image, ``image/svg+xml`` to receive the raw SVG, or ``image/png`` to receive the raw PNG.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qr-codes/static"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            headers=[param[AcceptOrStr | None]("Accept", accept), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicStaticQrCodeResponse],
            error_mapper=create_static_qr_code_public_error_mapper,
            request_options=request_options,
        )

    def delete_qr_code(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicDeleteQrCodeResponse, DeleteQrCodeErrorBody]:
        """Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link
        (if applicable).

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/qr-codes/{qrcode_id}"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicDeleteQrCodeResponse],
            error_mapper=delete_qr_code_error_mapper,
            request_options=request_options,
        )

    def get_qr_code_by_id_public(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QrCodeDetails, GetQrCodeByIdPublicErrorBody]:
        """Gets the QR code with a matching id.

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qr-codes/{qrcode_id}"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QrCodeDetails],
            error_mapper=get_qr_code_by_id_public_error_mapper,
            request_options=request_options,
        )

    def get_qr_code_image_public(
        self,
        qrcode_id: str,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicQrCodeImageResponse, GetQrCodeImagePublicErrorBody]:
        """Get the image of a given QR Code. The Accept header controls how this is returned (options are
        "application/json", "image/svg+xml", and "image/png"). If the Accept header is "application/json" the format
        query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed
        with its mime type as would be suitable for a HTML image src tag). To Return the QR Code image itself, set the
        Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter
        to “svg” or “png” (if no format is specified the default will be “svg”).

        Args:
            qrcode_id: The QR Code ID
            format_: The format type of the image. If there is an image format in the header it takes precedence.
            accept: The file format for the QR code's image. If the accept header is application/json the image data
                will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable
                for a HTML image src tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qr-codes/{qrcode_id}/image"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            headers=[param[str | None]("Accept", accept)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicQrCodeImageResponse],
            error_mapper=get_qr_code_image_public_error_mapper,
            request_options=request_options,
        )

    def get_scan_metrics_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BitlinkScans, GetScanMetricsForQrCodeErrorBody]:
        """Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each
        time window, where the window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BitlinkScans],
            error_mapper=get_scan_metrics_for_qr_code_error_mapper,
            request_options=request_options,
        )

    def get_scan_metrics_for_qr_code_by_browser(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByBrowserErrorBody]:
        """Returns the browsers generating scan traffic to the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/browsers"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_browser_error_mapper,
            request_options=request_options,
        )

    def get_scan_metrics_for_qr_code_by_cities(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CityScanMetrics, GetScanMetricsForQrCodeByCitiesErrorBody]:
        """Returns the city origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/cities"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CityScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_cities_error_mapper,
            request_options=request_options,
        )

    def get_scan_metrics_for_qr_code_by_countries(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByCountriesErrorBody]:
        """Returns the country origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/countries"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_countries_error_mapper,
            request_options=request_options,
        )

    def get_scan_metrics_for_qr_code_by_devices_os(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByDevicesOsErrorBody]:
        """Returns the device os generating scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/device_os"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_devices_os_error_mapper,
            request_options=request_options,
        )

    def get_scan_metrics_summary_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BitlinkScansSummary, GetScanMetricsSummaryForQrCodeErrorBody]:
        """Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the
        window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/summary"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BitlinkScansSummary],
            error_mapper=get_scan_metrics_summary_for_qr_code_error_mapper,
            request_options=request_options,
        )

    def list_qr_minimal(
        self,
        group_guid: str,
        *,
        has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        creating_login: list[str] | None = None,
        qrc_type: list[QrcTypeOrStr] | None = None,
        is_gs1: IsGs1OrStr | None = IsGs1.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodesMinimal, ListQrMinimalErrorBody]:
        """Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order. The
        pagination occurs by calling the next link in the pagination response object.

        Args:
            group_guid: A GUID for a Bitly group
            has_render_customizations: Whether or not QRCode has any render customizations (like color or shape changes)
            size: The quantity of items to be be returned
            search_after: Token used to search next batch of qr codes, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            creating_login: Filter by the login of the authenticated user that created the QR Code
            qrc_type: Value sent with the request.
            is_gs1: a filter value if the resource is a GS1 QR code
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/qr-codes"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[HasRenderCustomizationsOrStr | None]("has_render_customizations", has_render_customizations),
                param[int | None]("size", size),
                param[str | None]("search_after", search_after),
                param[str | None]("query", query),
                param[str | None]("hostname_path_query", hostname_path_query),
                param[int | None]("created_before", created_before),
                param[int | None]("created_after", created_after),
                param[ArchivedOrStr | None]("archived", archived),
                param[list[str] | None]("creating_login", creating_login),
                param[list[QrcTypeOrStr] | None]("qrc_type", qrc_type),
                param[IsGs1OrStr | None]("is_gs1", is_gs1),
                param[IsExpiredOrStr | None]("is_expired", is_expired),
                param[HasExpirationOrStr | None]("has_expiration", has_expiration),
                param[HasDynamicRoutingOrStr | None]("has_dynamic_routing", has_dynamic_routing),
                param[list[str] | None]("tags", tags),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QrCodesMinimal],
            error_mapper=list_qr_minimal_error_mapper,
            request_options=request_options,
        )

    def redirect_qr_code_destination(
        self,
        qrcode_id: str,
        body: RedirectQrCodeRequest | RedirectQrCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodeMinimal, RedirectQrCodeDestinationErrorBody]:
        """Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR
        Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

        Args:
            qrcode_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/qr-codes/{qrcode_id}/redirect"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RedirectQrCodeRequest | RedirectQrCodeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QrCodeMinimal],
            error_mapper=redirect_qr_code_destination_error_mapper,
            request_options=request_options,
        )

    def update_qr_code_public(
        self,
        qrcode_id: str,
        *,
        body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodeMinimal, UpdateQrCodePublicErrorBody]:
        """Updates the QR code with a matching id and returns it.

        Args:
            qrcode_id: The QR code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/qr-codes/{qrcode_id}"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QrCodeMinimal],
            error_mapper=update_qr_code_public_error_mapper,
            request_options=request_options,
        )

    def update_qr_codes_by_group(
        self,
        group_guid: str,
        body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrcBulkUpdate, UpdateQrCodesByGroupErrorBody]:
        """Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time. Pages QR codes
        cannot be updated with this endpoint. The response includes a list of QR code ids that were updated.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}/qr-codes"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QrcBulkUpdateRequest | QrcBulkUpdateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QrcBulkUpdate],
            error_mapper=update_qr_codes_by_group_error_mapper,
            request_options=request_options,
        )

    def upgrade_qr_code_to_bitlink(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BitlinkBody, UpgradeQrCodeToBitlinkErrorBody]:
        """Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly
        short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is
        already coupled, no encode is consumed.

        Args:
            qrcode_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/qr-codes/{qrcode_id}/to-bitlink"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BitlinkBody],
            error_mapper=upgrade_qr_code_to_bitlink_error_mapper,
            request_options=request_options,
        )


class AsyncQrCodesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_qr_code_public(
        self,
        body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodeMinimal, CreateQrCodePublicErrorBody]:
        """Create a new QR Code and return its metadata

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qr-codes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QrCodeMinimal],
            error_mapper=create_qr_code_public_error_mapper,
            request_options=request_options,
        )

    async def create_static_qr_code_public(
        self,
        body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: AcceptOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicStaticQrCodeResponse, CreateStaticQrCodePublicErrorBody]:
        """Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are
        supported via the Accept header Contact your Account Manager to discuss enabling this feature for your account.

        The ``render_customizations`` field supports basic appearance options. Customizations that require the rasterize
        API are not supported: ``gradient``, ``background_gradient``, ``frame``, ``text``, and ``logo``.

        The Accept header controls the response format:
        - ``application/json`` (default): Returns a JSON object with the image as a base64-encoded byte string.
        - ``image/svg+xml``: Returns the raw SVG image.
        - ``image/png``: Returns the raw PNG image.

        Args:
            body: The request body.
            format_: The image format. Supports ``svg`` and ``png``. Ignored if the Accept header specifies an image
                type.
            accept: Controls the response format. Use ``application/json`` (default) to receive a JSON-wrapped base64
                image, ``image/svg+xml`` to receive the raw SVG, or ``image/png`` to receive the raw PNG.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qr-codes/static"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            headers=[param[AcceptOrStr | None]("Accept", accept), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicStaticQrCodeResponse],
            error_mapper=create_static_qr_code_public_error_mapper,
            request_options=request_options,
        )

    async def delete_qr_code(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicDeleteQrCodeResponse, DeleteQrCodeErrorBody]:
        """Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link
        (if applicable).

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/qr-codes/{qrcode_id}"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicDeleteQrCodeResponse],
            error_mapper=delete_qr_code_error_mapper,
            request_options=request_options,
        )

    async def get_qr_code_by_id_public(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QrCodeDetails, GetQrCodeByIdPublicErrorBody]:
        """Gets the QR code with a matching id.

        Args:
            qrcode_id: The QR Code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qr-codes/{qrcode_id}"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QrCodeDetails],
            error_mapper=get_qr_code_by_id_public_error_mapper,
            request_options=request_options,
        )

    async def get_qr_code_image_public(
        self,
        qrcode_id: str,
        *,
        format_: FormatOrStr | None = Format.SVG,
        accept: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicQrCodeImageResponse, GetQrCodeImagePublicErrorBody]:
        """Get the image of a given QR Code. The Accept header controls how this is returned (options are
        "application/json", "image/svg+xml", and "image/png"). If the Accept header is "application/json" the format
        query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed
        with its mime type as would be suitable for a HTML image src tag). To Return the QR Code image itself, set the
        Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter
        to “svg” or “png” (if no format is specified the default will be “svg”).

        Args:
            qrcode_id: The QR Code ID
            format_: The format type of the image. If there is an image format in the header it takes precedence.
            accept: The file format for the QR code's image. If the accept header is application/json the image data
                will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable
                for a HTML image src tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qr-codes/{qrcode_id}/image"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            headers=[param[str | None]("Accept", accept)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicQrCodeImageResponse],
            error_mapper=get_qr_code_image_public_error_mapper,
            request_options=request_options,
        )

    async def get_scan_metrics_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BitlinkScans, GetScanMetricsForQrCodeErrorBody]:
        """Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each
        time window, where the window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BitlinkScans],
            error_mapper=get_scan_metrics_for_qr_code_error_mapper,
            request_options=request_options,
        )

    async def get_scan_metrics_for_qr_code_by_browser(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByBrowserErrorBody]:
        """Returns the browsers generating scan traffic to the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/browsers"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_browser_error_mapper,
            request_options=request_options,
        )

    async def get_scan_metrics_for_qr_code_by_cities(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CityScanMetrics, GetScanMetricsForQrCodeByCitiesErrorBody]:
        """Returns the city origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/cities"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CityScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_cities_error_mapper,
            request_options=request_options,
        )

    async def get_scan_metrics_for_qr_code_by_countries(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByCountriesErrorBody]:
        """Returns the country origins of scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/countries"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_countries_error_mapper,
            request_options=request_options,
        )

    async def get_scan_metrics_for_qr_code_by_devices_os(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        size: int | None = 50,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanMetrics, GetScanMetricsForQrCodeByDevicesOsErrorBody]:
        """Returns the device os generating scan traffic for the specified QR Code.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/device_os"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[int | None]("size", size),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScanMetrics],
            error_mapper=get_scan_metrics_for_qr_code_by_devices_os_error_mapper,
            request_options=request_options,
        )

    async def get_scan_metrics_summary_for_qr_code(
        self,
        qrcode_id: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BitlinkScansSummary, GetScanMetricsSummaryForQrCodeErrorBody]:
        """Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the
        window is based on the provided unit.

        Args:
            qrcode_id: The QR Code ID
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
            url_template=self._server.default("/qr-codes/{qrcode_id}/scans/summary"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BitlinkScansSummary],
            error_mapper=get_scan_metrics_summary_for_qr_code_error_mapper,
            request_options=request_options,
        )

    async def list_qr_minimal(
        self,
        group_guid: str,
        *,
        has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH,
        size: int | None = 50,
        search_after: str | None = None,
        query: str | None = None,
        hostname_path_query: str | None = None,
        created_before: int | None = None,
        created_after: int | None = None,
        archived: ArchivedOrStr | None = Archived.OFF,
        creating_login: list[str] | None = None,
        qrc_type: list[QrcTypeOrStr] | None = None,
        is_gs1: IsGs1OrStr | None = IsGs1.BOTH,
        is_expired: IsExpiredOrStr | None = IsExpired.BOTH,
        has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH,
        has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH,
        tags: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodesMinimal, ListQrMinimalErrorBody]:
        """Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order. The
        pagination occurs by calling the next link in the pagination response object.

        Args:
            group_guid: A GUID for a Bitly group
            has_render_customizations: Whether or not QRCode has any render customizations (like color or shape changes)
            size: The quantity of items to be be returned
            search_after: Token used to search next batch of qr codes, only use response from API as input value.
            query: The value that you would like to search
            hostname_path_query: The hostname and/or path you would like to search (case-insensitive). Subdomains
                included; query params and fragment ignored.
            created_before: Timestamp as an integer unix epoch (seconds only)
            created_after: Timestamp as an integer unix epoch (seconds only)
            archived: Whether or not to include archived resources
            creating_login: Filter by the login of the authenticated user that created the QR Code
            qrc_type: Value sent with the request.
            is_gs1: a filter value if the resource is a GS1 QR code
            is_expired: filter bitlinks by expiration status
            has_expiration: filter bitlinks by presence of expiration
            has_dynamic_routing: filter bitlinks by presence of dynamic routing rules
            tags: Filter by given tags
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/groups/{group_guid}/qr-codes"),
            path_params=[param[str]("group_guid", group_guid)],
            query_params=[
                param[HasRenderCustomizationsOrStr | None]("has_render_customizations", has_render_customizations),
                param[int | None]("size", size),
                param[str | None]("search_after", search_after),
                param[str | None]("query", query),
                param[str | None]("hostname_path_query", hostname_path_query),
                param[int | None]("created_before", created_before),
                param[int | None]("created_after", created_after),
                param[ArchivedOrStr | None]("archived", archived),
                param[list[str] | None]("creating_login", creating_login),
                param[list[QrcTypeOrStr] | None]("qrc_type", qrc_type),
                param[IsGs1OrStr | None]("is_gs1", is_gs1),
                param[IsExpiredOrStr | None]("is_expired", is_expired),
                param[HasExpirationOrStr | None]("has_expiration", has_expiration),
                param[HasDynamicRoutingOrStr | None]("has_dynamic_routing", has_dynamic_routing),
                param[list[str] | None]("tags", tags),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QrCodesMinimal],
            error_mapper=list_qr_minimal_error_mapper,
            request_options=request_options,
        )

    async def redirect_qr_code_destination(
        self,
        qrcode_id: str,
        body: RedirectQrCodeRequest | RedirectQrCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodeMinimal, RedirectQrCodeDestinationErrorBody]:
        """Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR
        Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

        Args:
            qrcode_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/qr-codes/{qrcode_id}/redirect"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RedirectQrCodeRequest | RedirectQrCodeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QrCodeMinimal],
            error_mapper=redirect_qr_code_destination_error_mapper,
            request_options=request_options,
        )

    async def update_qr_code_public(
        self,
        qrcode_id: str,
        *,
        body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCodeMinimal, UpdateQrCodePublicErrorBody]:
        """Updates the QR code with a matching id and returns it.

        Args:
            qrcode_id: The QR code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/qr-codes/{qrcode_id}"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QrCodeMinimal],
            error_mapper=update_qr_code_public_error_mapper,
            request_options=request_options,
        )

    async def update_qr_codes_by_group(
        self,
        group_guid: str,
        body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrcBulkUpdate, UpdateQrCodesByGroupErrorBody]:
        """Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time. Pages QR codes
        cannot be updated with this endpoint. The response includes a list of QR code ids that were updated.

        Args:
            group_guid: A GUID for a Bitly group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/groups/{group_guid}/qr-codes"),
            path_params=[param[str]("group_guid", group_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QrcBulkUpdateRequest | QrcBulkUpdateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QrcBulkUpdate],
            error_mapper=update_qr_codes_by_group_error_mapper,
            request_options=request_options,
        )

    async def upgrade_qr_code_to_bitlink(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BitlinkBody, UpgradeQrCodeToBitlinkErrorBody]:
        """Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly
        short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is
        already coupled, no encode is consumed.

        Args:
            qrcode_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/qr-codes/{qrcode_id}/to-bitlink"),
            path_params=[param[str]("qrcode_id", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BitlinkBody],
            error_mapper=upgrade_qr_code_to_bitlink_error_mapper,
            request_options=request_options,
        )
