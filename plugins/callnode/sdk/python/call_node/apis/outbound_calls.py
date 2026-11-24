from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.cancel_call_error import CancelCallErrorBody, cancel_call_error_mapper
from ..errors.get_call_error import GetCallErrorBody, get_call_error_mapper
from ..errors.list_calls_error import ListCallsErrorBody, list_calls_error_mapper
from ..errors.originate_call_error import OriginateCallErrorBody, originate_call_error_mapper
from ..errors.transfer_call_error import TransferCallErrorBody, transfer_call_error_mapper
from ..models.api_v1_calls_transfer_request import ApiV1CallsTransferRequest, ApiV1CallsTransferRequestDict
from ..models.api_v1_calls_transfer_response import ApiV1CallsTransferResponse
from ..models.api_v1_outbound_calls_response import ApiV1OutboundCallsResponse
from ..models.api_v1_outbound_calls_response1 import ApiV1OutboundCallsResponse1
from ..models.call import Call
from ..models.enums.call_status import CallStatusOrStr
from ..models.originate_request import OriginateRequest, OriginateRequestDict
from ..models.originate_response import OriginateResponse
from ..server.server import Server


class OutboundCalls:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OutboundCallsWithRawResponse(client, server, auth)

    def cancel_call(
        self, call_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1OutboundCallsResponse1:
        """Hangs up an in-progress call, or cancels one that has not yet connected. Calls already in a terminal state
        are returned unchanged (also 202) — the operation is safe to retry.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancellation accepted, or the call was already terminal.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_call(call_id, request_options=request_options))

    def get_call(self, call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Call:
        """Send a ``GET`` request.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_call(call_id, request_options=request_options))

    def list_calls(
        self,
        *,
        status: CallStatusOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1OutboundCallsResponse:
        """Returns your outbound calls, newest first, with cursor pagination.

        Args:
            status: Filter by status. Repeat the parameter to filter on several.
            limit: Page size. Defaults to 50, capped at 200.
            cursor: Opaque cursor from a previous response's ``nextCursor``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of calls.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Rate limit
                exceeded. See the rate-limit response headers. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_calls(
                status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def originate_call(
        self,
        body: OriginateRequest | OriginateRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OriginateResponse:
        """Places an outbound call. Returns 202 once CallNode accepts the originate command. The call lifecycle is then
        visible via GET on the same ``callId``, or via the optional status webhook.

        The destination takes one of three mutually exclusive forms:

        1. **PSTN** — ``to`` is E.164; the call is completed over the phone network.
        2. **Direct SIP URI** — ``to`` is ``sip:user@host[:port][;transport=udp|tcp]``;
        the call is delivered straight to your SIP endpoint.
        3. **Saved trunk (BYOC)** — ``sipTrunkId`` selects a trunk created in the
        dashboard, and ``to`` is an E.164 number (terminated by your carrier) or an extension your host understands.

        In every form ``from`` must be a CallNode number you own — it becomes the caller ID presented to the called
        party or your SIP endpoint. SIP destinations bill at your plan's SIP egress rate and must accept traffic from
        198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF RFC 2833).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Originate command accepted.

        Raises:
            ApiError: Malformed request or failed validation. SIP-destination codes: ``sip_egress_disabled`` (SIP
                destinations not enabled for this account), ``invalid_sip_uri`` (``to`` starts with ``sip:`` but does
                not parse), ``invalid_request`` (``sipTrunkId`` together with a ``sip:`` ``to`` — the forms are mutually
                exclusive), and ``blocked_destination`` (the SIP host resolves to a private address or CallNode
                infrastructure). Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew.
                Blocked by a compliance gate. ``error`` is ``tcpa_window_violation`` when the called party's local time
                is outside the 8am–9pm window, ``trunk_disabled`` when the referenced SIP trunk is disabled or has no
                egress destination configured, ``account_not_verified`` before business verification,
                ``destination_not_enabled`` for a destination class not enabled on the account, or ``policy_blocked``
                when a webhook, status webhook, realtime or SIP destination on the call (or configured on the
                from-number) points at a service CallNode identifies as fraud tooling, such as one-time-passcode
                interception. ``trunk_not_found`` — the ``sipTrunkId`` does not exist on this account. Rate limit
                exceeded. See the rate-limit response headers. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.originate_call(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    def transfer_call(
        self,
        call_id: str,
        body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CallsTransferResponse:
        """Moves the caller on an in-progress call to another destination, and hangs up whatever they were connected to.

        Built for calls delivered to your own SIP endpoint via a number's ``voice.sipUri``: those bridge straight to you
        without running the conversational webhook, so returning ``transfer: true`` from a webhook is not available on
        them. It also works on calls answered by a CallNode AI agent.

        Every transfer originates a new leg on your behalf, so it clears the same gates as placing an outbound call:
        KYC, DNC/suppression, and the destination-class guard. A CallLog and UsageRecord are written for the transferred
        leg, so it is attributed and billable.

        A transfer blocked by a gate returns the caller to the agent rather than hanging up, so the agent can take a
        message.

        ``202`` means accepted, not yet connected; the bridge follows immediately.

        Args:
            call_id: The **caller's** channel id — the ``callId`` CallNode sends you in the webhook/stream query string
                for that call. On a bridged call this is the A-leg, not the leg your own endpoint sees.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer accepted; the caller is being bridged.

        Raises:
            ApiError: ``invalid_destination`` — not E.164 and not a ``sip:`` URI. ``blocked_destination`` — the SIP host
                is private or not allowed. Missing, unknown, or badly signed credentials — check the HMAC and the
                timestamp skew. ``destination_not_enabled`` — the destination's class (premium-rate or high-cost
                international) is not enabled on this account; contact support. ``account_not_verified`` — KYC gate.
                ``call_not_found`` — no active call with that id **on your account**. Deliberately does not distinguish
                "does not exist" from "not yours". ``call_already_bridged`` — the caller is connected elsewhere and
                re-routing is currently disabled. Not returned in normal operation. ``dnc_blocked`` — the destination is
                on a suppression list. ``transfer_unavailable`` — transient; safe to retry. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.transfer_call(call_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> OutboundCallsWithRawResponse:
        return self._with_raw_response


class AsyncOutboundCalls:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOutboundCallsWithRawResponse(client, server, auth)

    async def cancel_call(
        self, call_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1OutboundCallsResponse1:
        """Hangs up an in-progress call, or cancels one that has not yet connected. Calls already in a terminal state
        are returned unchanged (also 202) — the operation is safe to retry.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancellation accepted, or the call was already terminal.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.cancel_call(call_id, request_options=request_options))

    async def get_call(self, call_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Call:
        """Send a ``GET`` request.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_call(call_id, request_options=request_options))

    async def list_calls(
        self,
        *,
        status: CallStatusOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1OutboundCallsResponse:
        """Returns your outbound calls, newest first, with cursor pagination.

        Args:
            status: Filter by status. Repeat the parameter to filter on several.
            limit: Page size. Defaults to 50, capped at 200.
            cursor: Opaque cursor from a previous response's ``nextCursor``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of calls.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Rate limit
                exceeded. See the rate-limit response headers. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_calls(
                status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def originate_call(
        self,
        body: OriginateRequest | OriginateRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OriginateResponse:
        """Places an outbound call. Returns 202 once CallNode accepts the originate command. The call lifecycle is then
        visible via GET on the same ``callId``, or via the optional status webhook.

        The destination takes one of three mutually exclusive forms:

        1. **PSTN** — ``to`` is E.164; the call is completed over the phone network.
        2. **Direct SIP URI** — ``to`` is ``sip:user@host[:port][;transport=udp|tcp]``;
        the call is delivered straight to your SIP endpoint.
        3. **Saved trunk (BYOC)** — ``sipTrunkId`` selects a trunk created in the
        dashboard, and ``to`` is an E.164 number (terminated by your carrier) or an extension your host understands.

        In every form ``from`` must be a CallNode number you own — it becomes the caller ID presented to the called
        party or your SIP endpoint. SIP destinations bill at your plan's SIP egress rate and must accept traffic from
        198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF RFC 2833).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Originate command accepted.

        Raises:
            ApiError: Malformed request or failed validation. SIP-destination codes: ``sip_egress_disabled`` (SIP
                destinations not enabled for this account), ``invalid_sip_uri`` (``to`` starts with ``sip:`` but does
                not parse), ``invalid_request`` (``sipTrunkId`` together with a ``sip:`` ``to`` — the forms are mutually
                exclusive), and ``blocked_destination`` (the SIP host resolves to a private address or CallNode
                infrastructure). Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew.
                Blocked by a compliance gate. ``error`` is ``tcpa_window_violation`` when the called party's local time
                is outside the 8am–9pm window, ``trunk_disabled`` when the referenced SIP trunk is disabled or has no
                egress destination configured, ``account_not_verified`` before business verification,
                ``destination_not_enabled`` for a destination class not enabled on the account, or ``policy_blocked``
                when a webhook, status webhook, realtime or SIP destination on the call (or configured on the
                from-number) points at a service CallNode identifies as fraud tooling, such as one-time-passcode
                interception. ``trunk_not_found`` — the ``sipTrunkId`` does not exist on this account. Rate limit
                exceeded. See the rate-limit response headers. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.originate_call(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    async def transfer_call(
        self,
        call_id: str,
        body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CallsTransferResponse:
        """Moves the caller on an in-progress call to another destination, and hangs up whatever they were connected to.

        Built for calls delivered to your own SIP endpoint via a number's ``voice.sipUri``: those bridge straight to you
        without running the conversational webhook, so returning ``transfer: true`` from a webhook is not available on
        them. It also works on calls answered by a CallNode AI agent.

        Every transfer originates a new leg on your behalf, so it clears the same gates as placing an outbound call:
        KYC, DNC/suppression, and the destination-class guard. A CallLog and UsageRecord are written for the transferred
        leg, so it is attributed and billable.

        A transfer blocked by a gate returns the caller to the agent rather than hanging up, so the agent can take a
        message.

        ``202`` means accepted, not yet connected; the bridge follows immediately.

        Args:
            call_id: The **caller's** channel id — the ``callId`` CallNode sends you in the webhook/stream query string
                for that call. On a bridged call this is the A-leg, not the leg your own endpoint sees.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer accepted; the caller is being bridged.

        Raises:
            ApiError: ``invalid_destination`` — not E.164 and not a ``sip:`` URI. ``blocked_destination`` — the SIP host
                is private or not allowed. Missing, unknown, or badly signed credentials — check the HMAC and the
                timestamp skew. ``destination_not_enabled`` — the destination's class (premium-rate or high-cost
                international) is not enabled on this account; contact support. ``account_not_verified`` — KYC gate.
                ``call_not_found`` — no active call with that id **on your account**. Deliberately does not distinguish
                "does not exist" from "not yours". ``call_already_bridged`` — the caller is connected elsewhere and
                re-routing is currently disabled. Not returned in normal operation. ``dnc_blocked`` — the destination is
                on a suppression list. ``transfer_unavailable`` — transient; safe to retry. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.transfer_call(call_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOutboundCallsWithRawResponse:
        return self._with_raw_response


class OutboundCallsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_call(
        self, call_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OutboundCallsResponse1, CancelCallErrorBody]:
        """Hangs up an in-progress call, or cancels one that has not yet connected. Calls already in a terminal state
        are returned unchanged (also 202) — the operation is safe to retry.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/outbound/calls/{callId}"),
            path_params=[param[str]("callId", call_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1OutboundCallsResponse1],
            error_mapper=cancel_call_error_mapper,
            request_options=request_options,
        )

    def get_call(
        self, call_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Call, GetCallErrorBody]:
        """Send a ``GET`` request.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/outbound/calls/{callId}"),
            path_params=[param[str]("callId", call_id)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[Call],
            error_mapper=get_call_error_mapper,
            request_options=request_options,
        )

    def list_calls(
        self,
        *,
        status: CallStatusOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OutboundCallsResponse, ListCallsErrorBody]:
        """Returns your outbound calls, newest first, with cursor pagination.

        Args:
            status: Filter by status. Repeat the parameter to filter on several.
            limit: Page size. Defaults to 50, capped at 200.
            cursor: Opaque cursor from a previous response's ``nextCursor``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/outbound/calls"),
            query_params=[
                param[CallStatusOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1OutboundCallsResponse],
            error_mapper=list_calls_error_mapper,
            request_options=request_options,
        )

    def originate_call(
        self,
        body: OriginateRequest | OriginateRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OriginateResponse, OriginateCallErrorBody]:
        """Places an outbound call. Returns 202 once CallNode accepts the originate command. The call lifecycle is then
        visible via GET on the same ``callId``, or via the optional status webhook.

        The destination takes one of three mutually exclusive forms:

        1. **PSTN** — ``to`` is E.164; the call is completed over the phone network.
        2. **Direct SIP URI** — ``to`` is ``sip:user@host[:port][;transport=udp|tcp]``;
        the call is delivered straight to your SIP endpoint.
        3. **Saved trunk (BYOC)** — ``sipTrunkId`` selects a trunk created in the
        dashboard, and ``to`` is an E.164 number (terminated by your carrier) or an extension your host understands.

        In every form ``from`` must be a CallNode number you own — it becomes the caller ID presented to the called
        party or your SIP endpoint. SIP destinations bill at your plan's SIP egress rate and must accept traffic from
        198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF RFC 2833).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/outbound/calls"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[OriginateRequest | OriginateRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[OriginateResponse],
            error_mapper=originate_call_error_mapper,
            request_options=request_options,
        )

    def transfer_call(
        self,
        call_id: str,
        body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CallsTransferResponse, TransferCallErrorBody]:
        """Moves the caller on an in-progress call to another destination, and hangs up whatever they were connected to.

        Built for calls delivered to your own SIP endpoint via a number's ``voice.sipUri``: those bridge straight to you
        without running the conversational webhook, so returning ``transfer: true`` from a webhook is not available on
        them. It also works on calls answered by a CallNode AI agent.

        Every transfer originates a new leg on your behalf, so it clears the same gates as placing an outbound call:
        KYC, DNC/suppression, and the destination-class guard. A CallLog and UsageRecord are written for the transferred
        leg, so it is attributed and billable.

        A transfer blocked by a gate returns the caller to the agent rather than hanging up, so the agent can take a
        message.

        ``202`` means accepted, not yet connected; the bridge follows immediately.

        Args:
            call_id: The **caller's** channel id — the ``callId`` CallNode sends you in the webhook/stream query string
                for that call. On a bridged call this is the A-leg, not the leg your own endpoint sees.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/calls/{callId}/transfer"),
            path_params=[param[str]("callId", call_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1CallsTransferResponse],
            error_mapper=transfer_call_error_mapper,
            request_options=request_options,
        )


class AsyncOutboundCallsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_call(
        self, call_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OutboundCallsResponse1, CancelCallErrorBody]:
        """Hangs up an in-progress call, or cancels one that has not yet connected. Calls already in a terminal state
        are returned unchanged (also 202) — the operation is safe to retry.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/outbound/calls/{callId}"),
            path_params=[param[str]("callId", call_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1OutboundCallsResponse1],
            error_mapper=cancel_call_error_mapper,
            request_options=request_options,
        )

    async def get_call(
        self, call_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Call, GetCallErrorBody]:
        """Send a ``GET`` request.

        Args:
            call_id: The ``callId`` returned by originate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/outbound/calls/{callId}"),
            path_params=[param[str]("callId", call_id)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[Call],
            error_mapper=get_call_error_mapper,
            request_options=request_options,
        )

    async def list_calls(
        self,
        *,
        status: CallStatusOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OutboundCallsResponse, ListCallsErrorBody]:
        """Returns your outbound calls, newest first, with cursor pagination.

        Args:
            status: Filter by status. Repeat the parameter to filter on several.
            limit: Page size. Defaults to 50, capped at 200.
            cursor: Opaque cursor from a previous response's ``nextCursor``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/outbound/calls"),
            query_params=[
                param[CallStatusOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1OutboundCallsResponse],
            error_mapper=list_calls_error_mapper,
            request_options=request_options,
        )

    async def originate_call(
        self,
        body: OriginateRequest | OriginateRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OriginateResponse, OriginateCallErrorBody]:
        """Places an outbound call. Returns 202 once CallNode accepts the originate command. The call lifecycle is then
        visible via GET on the same ``callId``, or via the optional status webhook.

        The destination takes one of three mutually exclusive forms:

        1. **PSTN** — ``to`` is E.164; the call is completed over the phone network.
        2. **Direct SIP URI** — ``to`` is ``sip:user@host[:port][;transport=udp|tcp]``;
        the call is delivered straight to your SIP endpoint.
        3. **Saved trunk (BYOC)** — ``sipTrunkId`` selects a trunk created in the
        dashboard, and ``to`` is an E.164 number (terminated by your carrier) or an extension your host understands.

        In every form ``from`` must be a CallNode number you own — it becomes the caller ID presented to the called
        party or your SIP endpoint. SIP destinations bill at your plan's SIP egress rate and must accept traffic from
        198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF RFC 2833).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/outbound/calls"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[OriginateRequest | OriginateRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[OriginateResponse],
            error_mapper=originate_call_error_mapper,
            request_options=request_options,
        )

    async def transfer_call(
        self,
        call_id: str,
        body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CallsTransferResponse, TransferCallErrorBody]:
        """Moves the caller on an in-progress call to another destination, and hangs up whatever they were connected to.

        Built for calls delivered to your own SIP endpoint via a number's ``voice.sipUri``: those bridge straight to you
        without running the conversational webhook, so returning ``transfer: true`` from a webhook is not available on
        them. It also works on calls answered by a CallNode AI agent.

        Every transfer originates a new leg on your behalf, so it clears the same gates as placing an outbound call:
        KYC, DNC/suppression, and the destination-class guard. A CallLog and UsageRecord are written for the transferred
        leg, so it is attributed and billable.

        A transfer blocked by a gate returns the caller to the agent rather than hanging up, so the agent can take a
        message.

        ``202`` means accepted, not yet connected; the bridge follows immediately.

        Args:
            call_id: The **caller's** channel id — the ``callId`` CallNode sends you in the webhook/stream query string
                for that call. On a bridged call this is the A-leg, not the leg your own endpoint sees.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/calls/{callId}/transfer"),
            path_params=[param[str]("callId", call_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1CallsTransferResponse],
            error_mapper=transfer_call_error_mapper,
            request_options=request_options,
        )
