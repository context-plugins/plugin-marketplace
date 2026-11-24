from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bulk_create_qr_codes_error import BulkCreateQrCodesErrorBody, bulk_create_qr_codes_error_mapper
from ..errors.bulk_delete_qr_codes_error import BulkDeleteQrCodesErrorBody, bulk_delete_qr_codes_error_mapper
from ..errors.create_qr_code_error import CreateQrCodeErrorBody, create_qr_code_error_mapper
from ..errors.delete_qr_code_error import DeleteQrCodeErrorBody, delete_qr_code_error_mapper
from ..errors.get_qr_code_info_error import GetQrCodeInfoErrorBody, get_qr_code_info_error_mapper
from ..errors.get_qr_codes_count_error import GetQrCodesCountErrorBody, get_qr_codes_count_error_mapper
from ..errors.get_qr_codes_error import GetQrCodesErrorBody, get_qr_codes_error_mapper
from ..errors.update_qr_code_error import UpdateQrCodeErrorBody, update_qr_code_error_mapper
from ..models.enums.format import FormatOrStr
from ..models.enums.sort_codeqr_io_qr_codes_api import SortCodeqrIoQrCodesApi, SortCodeqrIoQrCodesApiOrStr
from ..models.enums.type2 import Type2OrStr
from ..models.qr_code import QrCode
from ..models.qrcodes_bulk_request import QrcodesBulkRequest, QrcodesBulkRequestDict
from ..models.qrcodes_bulk_response import QrcodesBulkResponse
from ..models.qrcodes_request import QrcodesRequest, QrcodesRequestDict
from ..models.qrcodes_request1 import QrcodesRequest1, QrcodesRequest1Dict
from ..models.qrcodes_response import QrcodesResponse
from ..models.unions.group_by4_codeqr_io_qr_codes_api import GroupBy4CodeqrIoQrCodesApi, GroupBy4CodeqrIoQrCodesApiDict
from ..models.unions.qrcodes_bulk_response1 import QrcodesBulkResponse1
from ..models.unions.tag_ids_model import TagIdsModel, TagIdsModelDict
from ..models.unions.tag_names import TagNames, TagNamesDict
from ..server.server import Server


class QrCodes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QrCodesWithRawResponse(client, server, auth)

    def bulk_create_qr_codes(
        self,
        *,
        body: list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[QrcodesBulkResponse1]:
        """Bulk create up to 100 QR Codes for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created QR Codes

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.bulk_create_qr_codes(body=body, request_options=request_options))

    def bulk_delete_qr_codes(
        self, qrcode_ids: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> QrcodesBulkResponse:
        """Bulk delete up to 100 QR Codes for the authenticated workspace.

        Args:
            qrcode_ids: Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be
                ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted QR Codes count.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.bulk_delete_qr_codes(qrcode_ids, request_options=request_options))

    def create_qr_code(
        self,
        *,
        body: QrcodesRequest | QrcodesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Create a new QR Code for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created QR Code

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.create_qr_code(body=body, request_options=request_options))

    def delete_qr_code(self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> QrcodesResponse:
        """Delete a QR Code for the authenticated workspace.

        Args:
            qrcode_id: The id of the QR Code to delete. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted QR Code ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.delete_qr_code(qrcode_id, request_options=request_options))

    def get_qr_code_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        qr_code_id: str | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Retrieve the info for a QR Code.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the QR code to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            qr_code_id: The unique ID of the QR code.
            external_id: This is the ID of the QR code in your database. It must be prefixed with ``ext_`` when passed
                as a query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved QR Code

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_qr_code_info(
                project_slug,
                domain,
                key,
                qr_code_id=qr_code_id,
                external_id=external_id,
                request_options=request_options,
            ),
        )

    def get_qr_codes(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortCodeqrIoQrCodesApiOrStr | None = SortCodeqrIoQrCodesApi.CREATED_AT,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[QrCode]:
        """Retrieve a paginated list of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to order the QR codes. The default is ``createdAt``, and the order of sorting is always
                descending.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of QR Codes

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_qr_codes(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                comments=comments,
                password=password,
                expires_at=expires_at,
                track_conversion=track_conversion,
                with_tags=with_tags,
                use_as_template=use_as_template,
                format_=format_,
                type_=type_,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                scans_min=scans_min,
                scans_max=scans_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                sort=sort,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def get_qr_codes_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> float:
        """Retrieve the number of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the QR codes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The count of QR Codes

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_qr_codes_count(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                comments=comments,
                password=password,
                expires_at=expires_at,
                track_conversion=track_conversion,
                with_tags=with_tags,
                use_as_template=use_as_template,
                format_=format_,
                type_=type_,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                scans_min=scans_min,
                scans_max=scans_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                group_by=group_by,
                request_options=request_options,
            ),
        )

    def update_qr_code(
        self,
        qrcode_id: str,
        *,
        body: QrcodesRequest1 | QrcodesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            qrcode_id: The id of the QR Code to update. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated QR Code

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.update_qr_code(qrcode_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> QrCodesWithRawResponse:
        return self._with_raw_response


class AsyncQrCodes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQrCodesWithRawResponse(client, server, auth)

    async def bulk_create_qr_codes(
        self,
        *,
        body: list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[QrcodesBulkResponse1]:
        """Bulk create up to 100 QR Codes for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created QR Codes

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.bulk_create_qr_codes(body=body, request_options=request_options))

    async def bulk_delete_qr_codes(
        self, qrcode_ids: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QrcodesBulkResponse:
        """Bulk delete up to 100 QR Codes for the authenticated workspace.

        Args:
            qrcode_ids: Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be
                ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted QR Codes count.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.bulk_delete_qr_codes(qrcode_ids, request_options=request_options))

    async def create_qr_code(
        self,
        *,
        body: QrcodesRequest | QrcodesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Create a new QR Code for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created QR Code

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.create_qr_code(body=body, request_options=request_options))

    async def delete_qr_code(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QrcodesResponse:
        """Delete a QR Code for the authenticated workspace.

        Args:
            qrcode_id: The id of the QR Code to delete. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted QR Code ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.delete_qr_code(qrcode_id, request_options=request_options))

    async def get_qr_code_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        qr_code_id: str | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Retrieve the info for a QR Code.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the QR code to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            qr_code_id: The unique ID of the QR code.
            external_id: This is the ID of the QR code in your database. It must be prefixed with ``ext_`` when passed
                as a query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved QR Code

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_qr_code_info(
                project_slug,
                domain,
                key,
                qr_code_id=qr_code_id,
                external_id=external_id,
                request_options=request_options,
            ),
        )

    async def get_qr_codes(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortCodeqrIoQrCodesApiOrStr | None = SortCodeqrIoQrCodesApi.CREATED_AT,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[QrCode]:
        """Retrieve a paginated list of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to order the QR codes. The default is ``createdAt``, and the order of sorting is always
                descending.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of QR Codes

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_qr_codes(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                comments=comments,
                password=password,
                expires_at=expires_at,
                track_conversion=track_conversion,
                with_tags=with_tags,
                use_as_template=use_as_template,
                format_=format_,
                type_=type_,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                scans_min=scans_min,
                scans_max=scans_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                sort=sort,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def get_qr_codes_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> float:
        """Retrieve the number of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the QR codes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The count of QR Codes

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_qr_codes_count(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                comments=comments,
                password=password,
                expires_at=expires_at,
                track_conversion=track_conversion,
                with_tags=with_tags,
                use_as_template=use_as_template,
                format_=format_,
                type_=type_,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                scans_min=scans_min,
                scans_max=scans_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                group_by=group_by,
                request_options=request_options,
            ),
        )

    async def update_qr_code(
        self,
        qrcode_id: str,
        *,
        body: QrcodesRequest1 | QrcodesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            qrcode_id: The id of the QR Code to update. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated QR Code

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.update_qr_code(qrcode_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncQrCodesWithRawResponse:
        return self._with_raw_response


class QrCodesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_create_qr_codes(
        self,
        *,
        body: list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QrcodesBulkResponse1], BulkCreateQrCodesErrorBody]:
        """Bulk create up to 100 QR Codes for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qrcodes/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[QrcodesBulkResponse1]],
            error_mapper=bulk_create_qr_codes_error_mapper,
            request_options=request_options,
        )

    def bulk_delete_qr_codes(
        self, qrcode_ids: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QrcodesBulkResponse, BulkDeleteQrCodesErrorBody]:
        """Bulk delete up to 100 QR Codes for the authenticated workspace.

        Args:
            qrcode_ids: Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be
                ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/qrcodes/bulk"),
            query_params=[param[list[str]]("qrcodeIds", qrcode_ids)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[QrcodesBulkResponse],
            error_mapper=bulk_delete_qr_codes_error_mapper,
            request_options=request_options,
        )

    def create_qr_code(
        self,
        *,
        body: QrcodesRequest | QrcodesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, CreateQrCodeErrorBody]:
        """Create a new QR Code for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qrcodes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QrcodesRequest | QrcodesRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[QrCode],
            error_mapper=create_qr_code_error_mapper,
            request_options=request_options,
        )

    def delete_qr_code(
        self, qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QrcodesResponse, DeleteQrCodeErrorBody]:
        """Delete a QR Code for the authenticated workspace.

        Args:
            qrcode_id: The id of the QR Code to delete. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/qrcodes/{qrcodeId}"),
            path_params=[param[str]("qrcodeId", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[QrcodesResponse],
            error_mapper=delete_qr_code_error_mapper,
            request_options=request_options,
        )

    def get_qr_code_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        qr_code_id: str | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, GetQrCodeInfoErrorBody]:
        """Retrieve the info for a QR Code.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the QR code to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            qr_code_id: The unique ID of the QR code.
            external_id: This is the ID of the QR code in your database. It must be prefixed with ``ext_`` when passed
                as a query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qrcodes/info"),
            query_params=[
                param[str]("projectSlug", project_slug),
                param[str]("domain", domain),
                param[str]("key", key),
                param[str | None]("qrCodeId", qr_code_id),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[QrCode],
            error_mapper=get_qr_code_info_error_mapper,
            request_options=request_options,
        )

    def get_qr_codes(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortCodeqrIoQrCodesApiOrStr | None = SortCodeqrIoQrCodesApi.CREATED_AT,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QrCode], GetQrCodesErrorBody]:
        """Retrieve a paginated list of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to order the QR codes. The default is ``createdAt``, and the order of sorting is always
                descending.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qrcodes"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("comments", comments),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("useAsTemplate", use_as_template),
                param[FormatOrStr | None]("format", format_),
                param[Type2OrStr | None]("type", type_),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("scansMin", scans_min),
                param[int | None]("scansMax", scans_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[SortCodeqrIoQrCodesApiOrStr | None]("sort", sort),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[QrCode]],
            error_mapper=get_qr_codes_error_mapper,
            request_options=request_options,
        )

    def get_qr_codes_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[float, GetQrCodesCountErrorBody]:
        """Retrieve the number of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the QR codes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qrcodes/count"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("comments", comments),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("useAsTemplate", use_as_template),
                param[FormatOrStr | None]("format", format_),
                param[Type2OrStr | None]("type", type_),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("scansMin", scans_min),
                param[int | None]("scansMax", scans_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None]("groupBy", group_by),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[float],
            error_mapper=get_qr_codes_count_error_mapper,
            request_options=request_options,
        )

    def update_qr_code(
        self,
        qrcode_id: str,
        *,
        body: QrcodesRequest1 | QrcodesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, UpdateQrCodeErrorBody]:
        """Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            qrcode_id: The id of the QR Code to update. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/qrcodes/{qrcodeId}"),
            path_params=[param[str]("qrcodeId", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QrcodesRequest1 | QrcodesRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[QrCode],
            error_mapper=update_qr_code_error_mapper,
            request_options=request_options,
        )


class AsyncQrCodesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_create_qr_codes(
        self,
        *,
        body: list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QrcodesBulkResponse1], BulkCreateQrCodesErrorBody]:
        """Bulk create up to 100 QR Codes for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qrcodes/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[QrcodesBulkResponse1]],
            error_mapper=bulk_create_qr_codes_error_mapper,
            request_options=request_options,
        )

    async def bulk_delete_qr_codes(
        self, qrcode_ids: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QrcodesBulkResponse, BulkDeleteQrCodesErrorBody]:
        """Bulk delete up to 100 QR Codes for the authenticated workspace.

        Args:
            qrcode_ids: Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be
                ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/qrcodes/bulk"),
            query_params=[param[list[str]]("qrcodeIds", qrcode_ids)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[QrcodesBulkResponse],
            error_mapper=bulk_delete_qr_codes_error_mapper,
            request_options=request_options,
        )

    async def create_qr_code(
        self,
        *,
        body: QrcodesRequest | QrcodesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, CreateQrCodeErrorBody]:
        """Create a new QR Code for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/qrcodes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QrcodesRequest | QrcodesRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[QrCode],
            error_mapper=create_qr_code_error_mapper,
            request_options=request_options,
        )

    async def delete_qr_code(
        self, qrcode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QrcodesResponse, DeleteQrCodeErrorBody]:
        """Delete a QR Code for the authenticated workspace.

        Args:
            qrcode_id: The id of the QR Code to delete. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/qrcodes/{qrcodeId}"),
            path_params=[param[str]("qrcodeId", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[QrcodesResponse],
            error_mapper=delete_qr_code_error_mapper,
            request_options=request_options,
        )

    async def get_qr_code_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        qr_code_id: str | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, GetQrCodeInfoErrorBody]:
        """Retrieve the info for a QR Code.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the QR code to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            qr_code_id: The unique ID of the QR code.
            external_id: This is the ID of the QR code in your database. It must be prefixed with ``ext_`` when passed
                as a query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qrcodes/info"),
            query_params=[
                param[str]("projectSlug", project_slug),
                param[str]("domain", domain),
                param[str]("key", key),
                param[str | None]("qrCodeId", qr_code_id),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[QrCode],
            error_mapper=get_qr_code_info_error_mapper,
            request_options=request_options,
        )

    async def get_qr_codes(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortCodeqrIoQrCodesApiOrStr | None = SortCodeqrIoQrCodesApi.CREATED_AT,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QrCode], GetQrCodesErrorBody]:
        """Retrieve a paginated list of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to order the QR codes. The default is ``createdAt``, and the order of sorting is always
                descending.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qrcodes"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("comments", comments),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("useAsTemplate", use_as_template),
                param[FormatOrStr | None]("format", format_),
                param[Type2OrStr | None]("type", type_),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("scansMin", scans_min),
                param[int | None]("scansMax", scans_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[SortCodeqrIoQrCodesApiOrStr | None]("sort", sort),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[QrCode]],
            error_mapper=get_qr_codes_error_mapper,
            request_options=request_options,
        )

    async def get_qr_codes_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        comments: str | None = None,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        track_conversion: bool | None = False,
        with_tags: bool | None = False,
        use_as_template: bool | None = None,
        format_: FormatOrStr | None = None,
        type_: Type2OrStr | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        scans_min: int | None = None,
        scans_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[float, GetQrCodesCountErrorBody]:
        """Retrieve the number of QR Codes for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the QR code belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the QR codes. For example, ``ac.me``. If not provided, all QR codes of the
                project will be returned.
            tag_id: [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
            tag_ids: The IDs of the tags to filter the QR codes.
            tag_names: The unique name of the tags assigned to the QR code (case insensitive).
            folder_id: The folder ID to filter the QR codes by.
            search: The search term to filter the QR codes. The search term will be matched against the QR code slug,
                title, and the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived QR codes in the response. The default is ``false`` if not
                provided.
            comments: The comments to filter by.
            password: The password to filter by.
            expires_at: Value sent with the request.
            track_conversion: If should include QR codes with conversion tracking enabled. The default is ``false`` if
                not provided.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            use_as_template: Filter QR codes marked as templates.
            format_: Filter by QR code format - static or dynamic
            type_: Filter by QR code type
            has_password: Filter QR codes with/without password protection
            has_expiration: Filter QR codes with/without expiration date
            has_utm: Filter QR codes with/without UTM parameters
            has_custom_social: Filter QR codes with/without custom social media cards
            has_geo: Filter QR codes with/without geo-targeting
            has_device: Filter QR codes with/without device targeting
            has_comments: Filter QR codes with/without comments
            has_tags: Filter QR codes with/without tags
            created_after: Filter QR codes created after this date
            created_before: Filter QR codes created before this date
            expires_after: Filter QR codes expiring after this date
            expires_before: Filter QR codes expiring before this date
            scans_min: Minimum number of scans
            scans_max: Maximum number of scans
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the QR codes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/qrcodes/count"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("comments", comments),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("useAsTemplate", use_as_template),
                param[FormatOrStr | None]("format", format_),
                param[Type2OrStr | None]("type", type_),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("scansMin", scans_min),
                param[int | None]("scansMax", scans_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None]("groupBy", group_by),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[float],
            error_mapper=get_qr_codes_count_error_mapper,
            request_options=request_options,
        )

    async def update_qr_code(
        self,
        qrcode_id: str,
        *,
        body: QrcodesRequest1 | QrcodesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, UpdateQrCodeErrorBody]:
        """Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            qrcode_id: The id of the QR Code to update. You may use either ``qrcodeId`` (obtained via ``/qrcodes/info``
                endpoint) or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/qrcodes/{qrcodeId}"),
            path_params=[param[str]("qrcodeId", qrcode_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QrcodesRequest1 | QrcodesRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[QrCode],
            error_mapper=update_qr_code_error_mapper,
            request_options=request_options,
        )
