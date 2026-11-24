from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_call_record_error import GetCallRecordErrorBody, get_call_record_error_mapper
from ..errors.list_call_records_error import ListCallRecordsErrorBody, list_call_records_error_mapper
from ..models.api_v1_calls_response import ApiV1CallsResponse
from ..models.api_v1_calls_response1 import ApiV1CallsResponse1
from ..models.enums.direction import DirectionOrStr
from ..models.enums.status import StatusOrStr
from ..server.server import Server


class CallRecords:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CallRecordsWithRawResponse(client, server, auth)

    def get_call_record(
        self, call_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CallsResponse1:
        """One record by call id — the same uuid CallNode hands you everywhere else for that call: the
        ``X-CallNode-Call-Id`` header on a BYOC delivery INVITE, and the ``callId`` in webhook and audio-stream query
        strings. Returns 404 for a call that does not exist **or is not yours**.

        Args:
            call_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call record.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_call_record(call_id, request_options=request_options))

    def list_call_records(
        self,
        *,
        number: str | None = None,
        direction: DirectionOrStr | None = None,
        status: StatusOrStr | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CallsResponse:
        """Records of calls on your numbers, newest first — the same rows the dashboard's call history shows. Covers
        inbound calls (webhook-answered, BYOC ``voice.sipUri`` deliveries, SIP-trunk ingress) and outbound calls logged
        against your numbers.

        ``endReason`` and ``sipCause`` say **why a call ended**: ``endReason`` is CallNode's own vocabulary (for example
        ``idle_timeout`` or ``insufficient_balance``; null means an ordinary hangup), and ``sipCause`` is the SIP-level
        hangup cause of the caller leg (for example ``NORMAL_CLEARING`` or ``RECOVERY_ON_TIMER_EXPIRE``). Records from
        before 2026-09-22 predate these fields and return null for both.

        Args:
            number: Limit to one of your numbers — E.164 or the number's id.
            direction: Value sent with the request.
            status: Value sent with the request.
            since: Only calls starting at or after this instant.
            until: Only calls starting at or before this instant.
            before: Keyset cursor — pass the previous page's ``nextBefore``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Call records, newest first.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Rate limit
                exceeded. See the rate-limit response headers. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_call_records(
                number=number,
                direction=direction,
                status=status,
                since=since,
                until=until,
                before=before,
                limit=limit,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CallRecordsWithRawResponse:
        return self._with_raw_response


class AsyncCallRecords:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCallRecordsWithRawResponse(client, server, auth)

    async def get_call_record(
        self, call_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CallsResponse1:
        """One record by call id — the same uuid CallNode hands you everywhere else for that call: the
        ``X-CallNode-Call-Id`` header on a BYOC delivery INVITE, and the ``callId`` in webhook and audio-stream query
        strings. Returns 404 for a call that does not exist **or is not yours**.

        Args:
            call_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call record.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_call_record(call_id, request_options=request_options))

    async def list_call_records(
        self,
        *,
        number: str | None = None,
        direction: DirectionOrStr | None = None,
        status: StatusOrStr | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CallsResponse:
        """Records of calls on your numbers, newest first — the same rows the dashboard's call history shows. Covers
        inbound calls (webhook-answered, BYOC ``voice.sipUri`` deliveries, SIP-trunk ingress) and outbound calls logged
        against your numbers.

        ``endReason`` and ``sipCause`` say **why a call ended**: ``endReason`` is CallNode's own vocabulary (for example
        ``idle_timeout`` or ``insufficient_balance``; null means an ordinary hangup), and ``sipCause`` is the SIP-level
        hangup cause of the caller leg (for example ``NORMAL_CLEARING`` or ``RECOVERY_ON_TIMER_EXPIRE``). Records from
        before 2026-09-22 predate these fields and return null for both.

        Args:
            number: Limit to one of your numbers — E.164 or the number's id.
            direction: Value sent with the request.
            status: Value sent with the request.
            since: Only calls starting at or after this instant.
            until: Only calls starting at or before this instant.
            before: Keyset cursor — pass the previous page's ``nextBefore``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Call records, newest first.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Rate limit
                exceeded. See the rate-limit response headers. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_call_records(
                number=number,
                direction=direction,
                status=status,
                since=since,
                until=until,
                before=before,
                limit=limit,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCallRecordsWithRawResponse:
        return self._with_raw_response


class CallRecordsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_call_record(
        self, call_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CallsResponse1, GetCallRecordErrorBody]:
        """One record by call id — the same uuid CallNode hands you everywhere else for that call: the
        ``X-CallNode-Call-Id`` header on a BYOC delivery INVITE, and the ``callId`` in webhook and audio-stream query
        strings. Returns 404 for a call that does not exist **or is not yours**.

        Args:
            call_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls/{callId}"),
            path_params=[param[str]("callId", call_id)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1CallsResponse1],
            error_mapper=get_call_record_error_mapper,
            request_options=request_options,
        )

    def list_call_records(
        self,
        *,
        number: str | None = None,
        direction: DirectionOrStr | None = None,
        status: StatusOrStr | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CallsResponse, ListCallRecordsErrorBody]:
        """Records of calls on your numbers, newest first — the same rows the dashboard's call history shows. Covers
        inbound calls (webhook-answered, BYOC ``voice.sipUri`` deliveries, SIP-trunk ingress) and outbound calls logged
        against your numbers.

        ``endReason`` and ``sipCause`` say **why a call ended**: ``endReason`` is CallNode's own vocabulary (for example
        ``idle_timeout`` or ``insufficient_balance``; null means an ordinary hangup), and ``sipCause`` is the SIP-level
        hangup cause of the caller leg (for example ``NORMAL_CLEARING`` or ``RECOVERY_ON_TIMER_EXPIRE``). Records from
        before 2026-09-22 predate these fields and return null for both.

        Args:
            number: Limit to one of your numbers — E.164 or the number's id.
            direction: Value sent with the request.
            status: Value sent with the request.
            since: Only calls starting at or after this instant.
            until: Only calls starting at or before this instant.
            before: Keyset cursor — pass the previous page's ``nextBefore``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls"),
            query_params=[
                param[str | None]("number", number),
                param[DirectionOrStr | None]("direction", direction),
                param[StatusOrStr | None]("status", status),
                param[RFC3339DateTime | None]("since", since),
                param[RFC3339DateTime | None]("until", until),
                param[RFC3339DateTime | None]("before", before),
                param[int | None]("limit", limit),
            ],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1CallsResponse],
            error_mapper=list_call_records_error_mapper,
            request_options=request_options,
        )


class AsyncCallRecordsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_call_record(
        self, call_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CallsResponse1, GetCallRecordErrorBody]:
        """One record by call id — the same uuid CallNode hands you everywhere else for that call: the
        ``X-CallNode-Call-Id`` header on a BYOC delivery INVITE, and the ``callId`` in webhook and audio-stream query
        strings. Returns 404 for a call that does not exist **or is not yours**.

        Args:
            call_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls/{callId}"),
            path_params=[param[str]("callId", call_id)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1CallsResponse1],
            error_mapper=get_call_record_error_mapper,
            request_options=request_options,
        )

    async def list_call_records(
        self,
        *,
        number: str | None = None,
        direction: DirectionOrStr | None = None,
        status: StatusOrStr | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CallsResponse, ListCallRecordsErrorBody]:
        """Records of calls on your numbers, newest first — the same rows the dashboard's call history shows. Covers
        inbound calls (webhook-answered, BYOC ``voice.sipUri`` deliveries, SIP-trunk ingress) and outbound calls logged
        against your numbers.

        ``endReason`` and ``sipCause`` say **why a call ended**: ``endReason`` is CallNode's own vocabulary (for example
        ``idle_timeout`` or ``insufficient_balance``; null means an ordinary hangup), and ``sipCause`` is the SIP-level
        hangup cause of the caller leg (for example ``NORMAL_CLEARING`` or ``RECOVERY_ON_TIMER_EXPIRE``). Records from
        before 2026-09-22 predate these fields and return null for both.

        Args:
            number: Limit to one of your numbers — E.164 or the number's id.
            direction: Value sent with the request.
            status: Value sent with the request.
            since: Only calls starting at or after this instant.
            until: Only calls starting at or before this instant.
            before: Keyset cursor — pass the previous page's ``nextBefore``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls"),
            query_params=[
                param[str | None]("number", number),
                param[DirectionOrStr | None]("direction", direction),
                param[StatusOrStr | None]("status", status),
                param[RFC3339DateTime | None]("since", since),
                param[RFC3339DateTime | None]("until", until),
                param[RFC3339DateTime | None]("before", before),
                param[int | None]("limit", limit),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1CallsResponse],
            error_mapper=list_call_records_error_mapper,
            request_options=request_options,
        )
