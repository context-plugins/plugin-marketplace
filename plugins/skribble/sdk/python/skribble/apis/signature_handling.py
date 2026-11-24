from __future__ import annotations

from uuid import UUID, uuid4

from pydantic import EmailStr

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_file_decoder,
    async_json_decoder,
    empty_response,
    file_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bulk_get_signature_requests_error import (
    BulkGetSignatureRequestsErrorBody,
    bulk_get_signature_requests_error_mapper,
)
from ..errors.delete_signature_request_expires_at_error import (
    DeleteSignatureRequestExpiresAtErrorBody,
    delete_signature_request_expires_at_error_mapper,
)
from ..errors.get_signature_report_error import GetSignatureReportErrorBody, get_signature_report_error_mapper
from ..errors.get_signature_request_callbacks_v3_error import (
    GetSignatureRequestCallbacksV3ErrorBody,
    get_signature_request_callbacks_v3_error_mapper,
)
from ..errors.get_signature_request_details2_error import (
    GetSignatureRequestDetails2ErrorBody,
    get_signature_request_details2_error_mapper,
)
from ..errors.get_signature_request_error import GetSignatureRequestErrorBody, get_signature_request_error_mapper
from ..errors.remind_signature_request_error import (
    RemindSignatureRequestErrorBody,
    remind_signature_request_error_mapper,
)
from ..errors.update_signature_request_error import (
    UpdateSignatureRequestErrorBody,
    update_signature_request_error_mapper,
)
from ..models.enums.signature_status_code import SignatureStatusCodeOrStr
from ..models.enums.signature_status_overall import SignatureStatusOverallOrStr
from ..models.enums.type_skribble_signature_handling_api import (
    TypeSkribbleSignatureHandlingApi,
    TypeSkribbleSignatureHandlingApiOrStr,
)
from ..models.signature_callbacks_in_response import SignatureCallbacksInResponse
from ..models.signature_response import SignatureResponse
from ..models.signature_response_v3 import SignatureResponseV3
from ..models.update_signature_request import UpdateSignatureRequest, UpdateSignatureRequestDict
from ..server.server import Server


class SignatureHandling:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignatureHandlingWithRawResponse(client, server, auth)

    def bulk_get_signature_requests(
        self, body: list[UUID], *, request_options: RequestOptionsOrDict | None = None
    ) -> list[SignatureResponse]:
        """Retrieves multiple ``SignatureRequest`` objects in a single call.

        Provide a JSON array of ``SignatureRequest`` IDs in the request body to specify which records to fetch. The
        response includes only the ``SignatureRequests`` that were successfully found. IDs that do not match any
        existing record are silently ignored.

        Args:
            body: Array of SignatureRequest IDs to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not acceptable Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.bulk_get_signature_requests(body, request_options=request_options))

    def delete_signature_request_expires_at(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """**Early access.** This endpoint is available to opted-in businesses only. To request access, contact
        support@skribble.com.

        Clearing the expiry requires the signature-request expiry feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Clears the owner-set ``expires_at`` date from a ``SignatureRequest`` in ``status_overall=DRAFT``.

        After this call the ``SignatureRequest`` no longer has an owner-set expiry. The ``auto_delete_at`` retention
        date (if any) is unaffected.

        **Constraints**

        - Only allowed while ``status_overall=DRAFT``. Calling this on a
        non-``DRAFT`` request returns ``400 Bad Request``.
        - Requires the same write access as updating the ``SignatureRequest``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Expiry date cleared.

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.delete_signature_request_expires_at(sr_id, request_options=request_options)
        )

    def get_signature_report(
        self,
        sr_id: UUID,
        *,
        type_: TypeSkribbleSignatureHandlingApiOrStr | None = TypeSkribbleSignatureHandlingApi.PDF,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Provides the signature report for a specific signature request.

        By default, the report is returned as a human-readable, digitally signed PDF document. Optionally, the report
        format can be changed using the ``type`` query parameter (e.g. JSON or HTML).

        The report contains all relevant information about the signature process, including signatories, timestamps, and
        verification details. It serves as legally valid proof of the completed signing process and can be stored or
        shared for auditing, compliance, or record-keeping purposes.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            type_: Format of the Report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_signature_report(sr_id, type_=type_, request_options=request_options))

    def get_signature_request(
        self,
        *,
        account_email: EmailStr | None = None,
        search: str | None = None,
        signature_status: SignatureStatusCodeOrStr | None = None,
        status_overall: SignatureStatusOverallOrStr | None = None,
        page_number: float | None = None,
        page_size: float | None = 50.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[SignatureResponseV3]:
        """Returns all ``SignatureRequest`` objects that the current user has sufficient access rights to.

        **Filter**

        You can optionally filter results using one or more of the optional parameters.

        Filters search for an exact match of the corresponding field value. This means the filter is case-sensitive and
        will not match partial values. For example, _account_email=john.doe@skribble.com_ will only match a
        ``SignatureRequest`` where the ``account_email`` field is exactly john.doe@skribble.com and will not match
        another.john.doe@skribble.com.

        Exception: The ``search`` parameter searches for document titles that contain the search term.

        **Pagination**

        The result set can be controlled using the optional pagination parameters ``page_number`` and ``page_size``,
        which helps prevent excessively large result sets.

        Args:
            account_email: Filter on the field ``signatures[].account_email``
            search: Filter on the field ``title`` to search for documents containing the serach term.
            signature_status: Filter on the field ``signatures[].status_code`` with one of the valid Signature states
            status_overall: Filter on the field ``status_overall`` with one of the valid Signature states
            page_number: Page number for pagination. By default pagination is disabled.
            page_size: Page size for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not acceptable Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_signature_request(
                account_email=account_email,
                search=search,
                signature_status=signature_status,
                status_overall=status_overall,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def get_signature_request_callbacks_v3(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[SignatureCallbacksInResponse]:
        """Returns detailed information about the callbacks associated with a ``SignatureRequest``. Use this endpoint to
        confirm whether a callback has been executed or to identify errors that occurred during the callback process.

        **Result**

        If no callbacks have been triggered yet, the response will be an empty array. Otherwise, it contains an array of
        ``callback`` objects that have already been executed.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_signature_request_callbacks_v3(sr_id, request_options=request_options)
        )

    def get_signature_request_details2(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignatureResponseV3:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_signature_request_details2(sr_id, request_options=request_options))

    def remind_signature_request(self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """In addition to the automatic signature reminders, manual reminders can also be initiated via the Skribble web
        application and also via the API.

        This allows for greater flexibility in managing signature requests, ensuring that important documents are signed
        promptly. By using both automatic and manual reminders, you can tailor your approach to suit the specific needs
        of your users or customers.

        **Limits**

        There is an hourly limit on the number of signature reminders that can be sent. This limit ensures that
        reminders are used responsibly and prevents excessive notifications. Generally, this restriction should not
        affect you if you use this feature appropriately. By adhering to this limit, you can effectively manage your
        signature requests without overwhelming your users or customers with frequent reminders.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.remind_signature_request(sr_id, request_options=request_options))

    def update_signature_request(
        self,
        body: UpdateSignatureRequest | UpdateSignatureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureResponseV3:
        """Updates an existing ``SignatureRequest``. We recommend creating the ``SignatureRequest`` with all necessary
        information upfront and using this endpoint only when changes are required.

        The following fields can be updated: ``title``, ``message``, ``legislation``, ``quality``, ``signatures``,
        ``callback_success_url``, ``callback_error_url``, ``callback_update_url``, ``custom``, ``attach_on_success``,
        ``read_access``, and ``write_access``.

        Observers are managed separately via the dedicated ``/observers`` endpoints.

        **Updating signers**

        To add or remove signers, provide the complete desired state of the ``signatures`` array:

        - To add a signer, include the new entry alongside all existing signers.
        - To remove a signer, omit their entry from the array.

        Alternatively, use the dedicated ``/signatures`` endpoints to add or remove individual signers without having to
        send the full list.

        > **Important:** When updating via this endpoint, any signer not present in the
        ``signatures`` array will be removed. Changes to signers can only be made as long as none of the signers have
        already completed their signature.

        Args:
            body: Request body to update a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.update_signature_request(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SignatureHandlingWithRawResponse:
        return self._with_raw_response


class AsyncSignatureHandling:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignatureHandlingWithRawResponse(client, server, auth)

    async def bulk_get_signature_requests(
        self, body: list[UUID], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[SignatureResponse]:
        """Retrieves multiple ``SignatureRequest`` objects in a single call.

        Provide a JSON array of ``SignatureRequest`` IDs in the request body to specify which records to fetch. The
        response includes only the ``SignatureRequests`` that were successfully found. IDs that do not match any
        existing record are silently ignored.

        Args:
            body: Array of SignatureRequest IDs to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not acceptable Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.bulk_get_signature_requests(body, request_options=request_options))

    async def delete_signature_request_expires_at(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """**Early access.** This endpoint is available to opted-in businesses only. To request access, contact
        support@skribble.com.

        Clearing the expiry requires the signature-request expiry feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Clears the owner-set ``expires_at`` date from a ``SignatureRequest`` in ``status_overall=DRAFT``.

        After this call the ``SignatureRequest`` no longer has an owner-set expiry. The ``auto_delete_at`` retention
        date (if any) is unaffected.

        **Constraints**

        - Only allowed while ``status_overall=DRAFT``. Calling this on a
        non-``DRAFT`` request returns ``400 Bad Request``.
        - Requires the same write access as updating the ``SignatureRequest``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Expiry date cleared.

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_signature_request_expires_at(sr_id, request_options=request_options)
        )

    async def get_signature_report(
        self,
        sr_id: UUID,
        *,
        type_: TypeSkribbleSignatureHandlingApiOrStr | None = TypeSkribbleSignatureHandlingApi.PDF,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Provides the signature report for a specific signature request.

        By default, the report is returned as a human-readable, digitally signed PDF document. Optionally, the report
        format can be changed using the ``type`` query parameter (e.g. JSON or HTML).

        The report contains all relevant information about the signature process, including signatories, timestamps, and
        verification details. It serves as legally valid proof of the completed signing process and can be stored or
        shared for auditing, compliance, or record-keeping purposes.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            type_: Format of the Report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_report(sr_id, type_=type_, request_options=request_options)
        )

    async def get_signature_request(
        self,
        *,
        account_email: EmailStr | None = None,
        search: str | None = None,
        signature_status: SignatureStatusCodeOrStr | None = None,
        status_overall: SignatureStatusOverallOrStr | None = None,
        page_number: float | None = None,
        page_size: float | None = 50.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[SignatureResponseV3]:
        """Returns all ``SignatureRequest`` objects that the current user has sufficient access rights to.

        **Filter**

        You can optionally filter results using one or more of the optional parameters.

        Filters search for an exact match of the corresponding field value. This means the filter is case-sensitive and
        will not match partial values. For example, _account_email=john.doe@skribble.com_ will only match a
        ``SignatureRequest`` where the ``account_email`` field is exactly john.doe@skribble.com and will not match
        another.john.doe@skribble.com.

        Exception: The ``search`` parameter searches for document titles that contain the search term.

        **Pagination**

        The result set can be controlled using the optional pagination parameters ``page_number`` and ``page_size``,
        which helps prevent excessively large result sets.

        Args:
            account_email: Filter on the field ``signatures[].account_email``
            search: Filter on the field ``title`` to search for documents containing the serach term.
            signature_status: Filter on the field ``signatures[].status_code`` with one of the valid Signature states
            status_overall: Filter on the field ``status_overall`` with one of the valid Signature states
            page_number: Page number for pagination. By default pagination is disabled.
            page_size: Page size for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not acceptable Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_request(
                account_email=account_email,
                search=search,
                signature_status=signature_status,
                status_overall=status_overall,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def get_signature_request_callbacks_v3(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[SignatureCallbacksInResponse]:
        """Returns detailed information about the callbacks associated with a ``SignatureRequest``. Use this endpoint to
        confirm whether a callback has been executed or to identify errors that occurred during the callback process.

        **Result**

        If no callbacks have been triggered yet, the response will be an empty array. Otherwise, it contains an array of
        ``callback`` objects that have already been executed.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_request_callbacks_v3(sr_id, request_options=request_options)
        )

    async def get_signature_request_details2(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignatureResponseV3:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_request_details2(sr_id, request_options=request_options)
        )

    async def remind_signature_request(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """In addition to the automatic signature reminders, manual reminders can also be initiated via the Skribble web
        application and also via the API.

        This allows for greater flexibility in managing signature requests, ensuring that important documents are signed
        promptly. By using both automatic and manual reminders, you can tailor your approach to suit the specific needs
        of your users or customers.

        **Limits**

        There is an hourly limit on the number of signature reminders that can be sent. This limit ensures that
        reminders are used responsibly and prevents excessive notifications. Generally, this restriction should not
        affect you if you use this feature appropriately. By adhering to this limit, you can effectively manage your
        signature requests without overwhelming your users or customers with frequent reminders.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.remind_signature_request(sr_id, request_options=request_options))

    async def update_signature_request(
        self,
        body: UpdateSignatureRequest | UpdateSignatureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureResponseV3:
        """Updates an existing ``SignatureRequest``. We recommend creating the ``SignatureRequest`` with all necessary
        information upfront and using this endpoint only when changes are required.

        The following fields can be updated: ``title``, ``message``, ``legislation``, ``quality``, ``signatures``,
        ``callback_success_url``, ``callback_error_url``, ``callback_update_url``, ``custom``, ``attach_on_success``,
        ``read_access``, and ``write_access``.

        Observers are managed separately via the dedicated ``/observers`` endpoints.

        **Updating signers**

        To add or remove signers, provide the complete desired state of the ``signatures`` array:

        - To add a signer, include the new entry alongside all existing signers.
        - To remove a signer, omit their entry from the array.

        Alternatively, use the dedicated ``/signatures`` endpoints to add or remove individual signers without having to
        send the full list.

        > **Important:** When updating via this endpoint, any signer not present in the
        ``signatures`` array will be removed. Changes to signers can only be made as long as none of the signers have
        already completed their signature.

        Args:
            body: Request body to update a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.update_signature_request(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignatureHandlingWithRawResponse:
        return self._with_raw_response


class SignatureHandlingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_get_signature_requests(
        self, body: list[UUID], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[SignatureResponse], BulkGetSignatureRequestsErrorBody]:
        """Retrieves multiple ``SignatureRequest`` objects in a single call.

        Provide a JSON array of ``SignatureRequest`` IDs in the request body to specify which records to fetch. The
        response includes only the ``SignatureRequests`` that were successfully found. IDs that do not match any
        existing record are silently ignored.

        Args:
            body: Array of SignatureRequest IDs to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[UUID]](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[SignatureResponse]],
            error_mapper=bulk_get_signature_requests_error_mapper,
            request_options=request_options,
        )

    def delete_signature_request_expires_at(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureRequestExpiresAtErrorBody]:
        """**Early access.** This endpoint is available to opted-in businesses only. To request access, contact
        support@skribble.com.

        Clearing the expiry requires the signature-request expiry feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Clears the owner-set ``expires_at`` date from a ``SignatureRequest`` in ``status_overall=DRAFT``.

        After this call the ``SignatureRequest`` no longer has an owner-set expiry. The ``auto_delete_at`` retention
        date (if any) is unaffected.

        **Constraints**

        - Only allowed while ``status_overall=DRAFT``. Calling this on a
        non-``DRAFT`` request returns ``400 Bad Request``.
        - Requires the same write access as updating the ``SignatureRequest``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/expires-at"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_signature_request_expires_at_error_mapper,
            request_options=request_options,
        )

    def get_signature_report(
        self,
        sr_id: UUID,
        *,
        type_: TypeSkribbleSignatureHandlingApiOrStr | None = TypeSkribbleSignatureHandlingApi.PDF,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, GetSignatureReportErrorBody]:
        """Provides the signature report for a specific signature request.

        By default, the report is returned as a human-readable, digitally signed PDF document. Optionally, the report
        format can be changed using the ``type`` query parameter (e.g. JSON or HTML).

        The report contains all relevant information about the signature process, including signatories, timestamps, and
        verification details. It serves as legally valid proof of the completed signing process and can be stored or
        shared for auditing, compliance, or record-keeping purposes.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            type_: Format of the Report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/report"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            query_params=[param[TypeSkribbleSignatureHandlingApiOrStr | None]("type", type_)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=get_signature_report_error_mapper,
            request_options=request_options,
        )

    def get_signature_request(
        self,
        *,
        account_email: EmailStr | None = None,
        search: str | None = None,
        signature_status: SignatureStatusCodeOrStr | None = None,
        status_overall: SignatureStatusOverallOrStr | None = None,
        page_number: float | None = None,
        page_size: float | None = 50.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[SignatureResponseV3], GetSignatureRequestErrorBody]:
        """Returns all ``SignatureRequest`` objects that the current user has sufficient access rights to.

        **Filter**

        You can optionally filter results using one or more of the optional parameters.

        Filters search for an exact match of the corresponding field value. This means the filter is case-sensitive and
        will not match partial values. For example, _account_email=john.doe@skribble.com_ will only match a
        ``SignatureRequest`` where the ``account_email`` field is exactly john.doe@skribble.com and will not match
        another.john.doe@skribble.com.

        Exception: The ``search`` parameter searches for document titles that contain the search term.

        **Pagination**

        The result set can be controlled using the optional pagination parameters ``page_number`` and ``page_size``,
        which helps prevent excessively large result sets.

        Args:
            account_email: Filter on the field ``signatures[].account_email``
            search: Filter on the field ``title`` to search for documents containing the serach term.
            signature_status: Filter on the field ``signatures[].status_code`` with one of the valid Signature states
            status_overall: Filter on the field ``status_overall`` with one of the valid Signature states
            page_number: Page number for pagination. By default pagination is disabled.
            page_size: Page size for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests"),
            query_params=[
                param[EmailStr | None]("account_email", account_email),
                param[str | None]("search", search),
                param[SignatureStatusCodeOrStr | None]("signature_status", signature_status),
                param[SignatureStatusOverallOrStr | None]("status_overall", status_overall),
                param[float | None]("page_number", page_number),
                param[float | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[SignatureResponseV3]],
            error_mapper=get_signature_request_error_mapper,
            request_options=request_options,
        )

    def get_signature_request_callbacks_v3(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[SignatureCallbacksInResponse], GetSignatureRequestCallbacksV3ErrorBody]:
        """Returns detailed information about the callbacks associated with a ``SignatureRequest``. Use this endpoint to
        confirm whether a callback has been executed or to identify errors that occurred during the callback process.

        **Result**

        If no callbacks have been triggered yet, the response will be an empty array. Otherwise, it contains an array of
        ``callback`` objects that have already been executed.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/callbacks"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[SignatureCallbacksInResponse]],
            error_mapper=get_signature_request_callbacks_v3_error_mapper,
            request_options=request_options,
        )

    def get_signature_request_details2(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignatureResponseV3, GetSignatureRequestDetails2ErrorBody]:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponseV3],
            error_mapper=get_signature_request_details2_error_mapper,
            request_options=request_options,
        )

    def remind_signature_request(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemindSignatureRequestErrorBody]:
        """In addition to the automatic signature reminders, manual reminders can also be initiated via the Skribble web
        application and also via the API.

        This allows for greater flexibility in managing signature requests, ensuring that important documents are signed
        promptly. By using both automatic and manual reminders, you can tailor your approach to suit the specific needs
        of your users or customers.

        **Limits**

        There is an hourly limit on the number of signature reminders that can be sent. This limit ensures that
        reminders are used responsibly and prevents excessive notifications. Generally, this restriction should not
        affect you if you use this feature appropriately. By adhering to this limit, you can effectively manage your
        signature requests without overwhelming your users or customers with frequent reminders.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/remind"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=remind_signature_request_error_mapper,
            request_options=request_options,
        )

    def update_signature_request(
        self,
        body: UpdateSignatureRequest | UpdateSignatureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseV3, UpdateSignatureRequestErrorBody]:
        """Updates an existing ``SignatureRequest``. We recommend creating the ``SignatureRequest`` with all necessary
        information upfront and using this endpoint only when changes are required.

        The following fields can be updated: ``title``, ``message``, ``legislation``, ``quality``, ``signatures``,
        ``callback_success_url``, ``callback_error_url``, ``callback_update_url``, ``custom``, ``attach_on_success``,
        ``read_access``, and ``write_access``.

        Observers are managed separately via the dedicated ``/observers`` endpoints.

        **Updating signers**

        To add or remove signers, provide the complete desired state of the ``signatures`` array:

        - To add a signer, include the new entry alongside all existing signers.
        - To remove a signer, omit their entry from the array.

        Alternatively, use the dedicated ``/signatures`` endpoints to add or remove individual signers without having to
        send the full list.

        > **Important:** When updating via this endpoint, any signer not present in the
        ``signatures`` array will be removed. Changes to signers can only be made as long as none of the signers have
        already completed their signature.

        Args:
            body: Request body to update a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSignatureRequest | UpdateSignatureRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponseV3],
            error_mapper=update_signature_request_error_mapper,
            request_options=request_options,
        )


class AsyncSignatureHandlingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_get_signature_requests(
        self, body: list[UUID], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[SignatureResponse], BulkGetSignatureRequestsErrorBody]:
        """Retrieves multiple ``SignatureRequest`` objects in a single call.

        Provide a JSON array of ``SignatureRequest`` IDs in the request body to specify which records to fetch. The
        response includes only the ``SignatureRequests`` that were successfully found. IDs that do not match any
        existing record are silently ignored.

        Args:
            body: Array of SignatureRequest IDs to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[UUID]](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[SignatureResponse]],
            error_mapper=bulk_get_signature_requests_error_mapper,
            request_options=request_options,
        )

    async def delete_signature_request_expires_at(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureRequestExpiresAtErrorBody]:
        """**Early access.** This endpoint is available to opted-in businesses only. To request access, contact
        support@skribble.com.

        Clearing the expiry requires the signature-request expiry feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Clears the owner-set ``expires_at`` date from a ``SignatureRequest`` in ``status_overall=DRAFT``.

        After this call the ``SignatureRequest`` no longer has an owner-set expiry. The ``auto_delete_at`` retention
        date (if any) is unaffected.

        **Constraints**

        - Only allowed while ``status_overall=DRAFT``. Calling this on a
        non-``DRAFT`` request returns ``400 Bad Request``.
        - Requires the same write access as updating the ``SignatureRequest``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/expires-at"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_signature_request_expires_at_error_mapper,
            request_options=request_options,
        )

    async def get_signature_report(
        self,
        sr_id: UUID,
        *,
        type_: TypeSkribbleSignatureHandlingApiOrStr | None = TypeSkribbleSignatureHandlingApi.PDF,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, GetSignatureReportErrorBody]:
        """Provides the signature report for a specific signature request.

        By default, the report is returned as a human-readable, digitally signed PDF document. Optionally, the report
        format can be changed using the ``type`` query parameter (e.g. JSON or HTML).

        The report contains all relevant information about the signature process, including signatories, timestamps, and
        verification details. It serves as legally valid proof of the completed signing process and can be stored or
        shared for auditing, compliance, or record-keeping purposes.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            type_: Format of the Report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/report"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            query_params=[param[TypeSkribbleSignatureHandlingApiOrStr | None]("type", type_)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=get_signature_report_error_mapper,
            request_options=request_options,
        )

    async def get_signature_request(
        self,
        *,
        account_email: EmailStr | None = None,
        search: str | None = None,
        signature_status: SignatureStatusCodeOrStr | None = None,
        status_overall: SignatureStatusOverallOrStr | None = None,
        page_number: float | None = None,
        page_size: float | None = 50.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[SignatureResponseV3], GetSignatureRequestErrorBody]:
        """Returns all ``SignatureRequest`` objects that the current user has sufficient access rights to.

        **Filter**

        You can optionally filter results using one or more of the optional parameters.

        Filters search for an exact match of the corresponding field value. This means the filter is case-sensitive and
        will not match partial values. For example, _account_email=john.doe@skribble.com_ will only match a
        ``SignatureRequest`` where the ``account_email`` field is exactly john.doe@skribble.com and will not match
        another.john.doe@skribble.com.

        Exception: The ``search`` parameter searches for document titles that contain the search term.

        **Pagination**

        The result set can be controlled using the optional pagination parameters ``page_number`` and ``page_size``,
        which helps prevent excessively large result sets.

        Args:
            account_email: Filter on the field ``signatures[].account_email``
            search: Filter on the field ``title`` to search for documents containing the serach term.
            signature_status: Filter on the field ``signatures[].status_code`` with one of the valid Signature states
            status_overall: Filter on the field ``status_overall`` with one of the valid Signature states
            page_number: Page number for pagination. By default pagination is disabled.
            page_size: Page size for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests"),
            query_params=[
                param[EmailStr | None]("account_email", account_email),
                param[str | None]("search", search),
                param[SignatureStatusCodeOrStr | None]("signature_status", signature_status),
                param[SignatureStatusOverallOrStr | None]("status_overall", status_overall),
                param[float | None]("page_number", page_number),
                param[float | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[SignatureResponseV3]],
            error_mapper=get_signature_request_error_mapper,
            request_options=request_options,
        )

    async def get_signature_request_callbacks_v3(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[SignatureCallbacksInResponse], GetSignatureRequestCallbacksV3ErrorBody]:
        """Returns detailed information about the callbacks associated with a ``SignatureRequest``. Use this endpoint to
        confirm whether a callback has been executed or to identify errors that occurred during the callback process.

        **Result**

        If no callbacks have been triggered yet, the response will be an empty array. Otherwise, it contains an array of
        ``callback`` objects that have already been executed.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/callbacks"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[SignatureCallbacksInResponse]],
            error_mapper=get_signature_request_callbacks_v3_error_mapper,
            request_options=request_options,
        )

    async def get_signature_request_details2(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignatureResponseV3, GetSignatureRequestDetails2ErrorBody]:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponseV3],
            error_mapper=get_signature_request_details2_error_mapper,
            request_options=request_options,
        )

    async def remind_signature_request(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemindSignatureRequestErrorBody]:
        """In addition to the automatic signature reminders, manual reminders can also be initiated via the Skribble web
        application and also via the API.

        This allows for greater flexibility in managing signature requests, ensuring that important documents are signed
        promptly. By using both automatic and manual reminders, you can tailor your approach to suit the specific needs
        of your users or customers.

        **Limits**

        There is an hourly limit on the number of signature reminders that can be sent. This limit ensures that
        reminders are used responsibly and prevents excessive notifications. Generally, this restriction should not
        affect you if you use this feature appropriately. By adhering to this limit, you can effectively manage your
        signature requests without overwhelming your users or customers with frequent reminders.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests/{SR_ID}/remind"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=remind_signature_request_error_mapper,
            request_options=request_options,
        )

    async def update_signature_request(
        self,
        body: UpdateSignatureRequest | UpdateSignatureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseV3, UpdateSignatureRequestErrorBody]:
        """Updates an existing ``SignatureRequest``. We recommend creating the ``SignatureRequest`` with all necessary
        information upfront and using this endpoint only when changes are required.

        The following fields can be updated: ``title``, ``message``, ``legislation``, ``quality``, ``signatures``,
        ``callback_success_url``, ``callback_error_url``, ``callback_update_url``, ``custom``, ``attach_on_success``,
        ``read_access``, and ``write_access``.

        Observers are managed separately via the dedicated ``/observers`` endpoints.

        **Updating signers**

        To add or remove signers, provide the complete desired state of the ``signatures`` array:

        - To add a signer, include the new entry alongside all existing signers.
        - To remove a signer, omit their entry from the array.

        Alternatively, use the dedicated ``/signatures`` endpoints to add or remove individual signers without having to
        send the full list.

        > **Important:** When updating via this endpoint, any signer not present in the
        ``signatures`` array will be removed. Changes to signers can only be made as long as none of the signers have
        already completed their signature.

        Args:
            body: Request body to update a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_skribble_signature_handling_api("/signature-requests"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSignatureRequest | UpdateSignatureRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponseV3],
            error_mapper=update_signature_request_error_mapper,
            request_options=request_options,
        )
