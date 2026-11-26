from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_vendor_audit_trail_error import GetVendorAuditTrailErrorBody, get_vendor_audit_trail_error_mapper
from ..models.audit_trail_entry import AuditTrailEntry
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server)

    def get_vendor_audit_trail(
        self,
        vendor_id: str,
        *,
        include_archived: bool | None = None,
        start: int | None = None,
        max_: int | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[AuditTrailEntry]:
        """Get audit trail details about changes made to a vendor object. The audit trail lists records for each create
        and edit operation.

        See Get audit trail details in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            include_archived: Value sent with the request.
            start: Value sent with the request.
            max_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get audit trail details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_vendor_audit_trail(
                vendor_id,
                include_archived=include_archived,
                start=start,
                max_=max_,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server)

    async def get_vendor_audit_trail(
        self,
        vendor_id: str,
        *,
        include_archived: bool | None = None,
        start: int | None = None,
        max_: int | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[AuditTrailEntry]:
        """Get audit trail details about changes made to a vendor object. The audit trail lists records for each create
        and edit operation.

        See Get audit trail details in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            include_archived: Value sent with the request.
            start: Value sent with the request.
            max_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get audit trail details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vendor_audit_trail(
                vendor_id,
                include_archived=include_archived,
                start=start,
                max_=max_,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_vendor_audit_trail(
        self,
        vendor_id: str,
        *,
        include_archived: bool | None = None,
        start: int | None = None,
        max_: int | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AuditTrailEntry], GetVendorAuditTrailErrorBody]:
        """Get audit trail details about changes made to a vendor object. The audit trail lists records for each create
        and edit operation.

        See Get audit trail details in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            include_archived: Value sent with the request.
            start: Value sent with the request.
            max_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/reports/audit-trail/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            query_params=[
                param[bool | None]("includeArchived", include_archived),
                param[int | None]("start", start),
                param[int | None]("max", max_),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[list[AuditTrailEntry]],
            error_mapper=get_vendor_audit_trail_error_mapper,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_vendor_audit_trail(
        self,
        vendor_id: str,
        *,
        include_archived: bool | None = None,
        start: int | None = None,
        max_: int | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AuditTrailEntry], GetVendorAuditTrailErrorBody]:
        """Get audit trail details about changes made to a vendor object. The audit trail lists records for each create
        and edit operation.

        See Get audit trail details in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            include_archived: Value sent with the request.
            start: Value sent with the request.
            max_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/reports/audit-trail/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            query_params=[
                param[bool | None]("includeArchived", include_archived),
                param[int | None]("start", start),
                param[int | None]("max", max_),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[list[AuditTrailEntry]],
            error_mapper=get_vendor_audit_trail_error_mapper,
            request_options=request_options,
        )
