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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.click2_call_create_error import Click2CallCreateErrorBody, click2_call_create_error_mapper
from ..errors.click2_call_destroy_error import Click2CallDestroyErrorBody, click2_call_destroy_error_mapper
from ..errors.click2_call_show_error import Click2CallShowErrorBody, click2_call_show_error_mapper
from ..errors.recordings_show_error import RecordingsShowErrorBody, recordings_show_error_mapper
from ..models.api_v1_click2_call_request import ApiV1Click2CallRequest, ApiV1Click2CallRequestDict
from ..models.api_v1_click2_call_response import ApiV1Click2CallResponse
from ..models.api_v1_click2_call_response1 import ApiV1Click2CallResponse1
from ..server.server import Server


class Click2Call:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = Click2CallWithRawResponse(client, server, auth)

    def click2call_create(
        self,
        *,
        body: ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1Click2CallResponse:
        """Places one call: the platform connects the agent leg first and, once it answers, dials the destination number
        (the customer leg) and bridges the two. The agent leg is one of your SIP accounts by default, or your own
        WebSocket endpoint with ``a_type: stream``. The response is the call resource in its initial ``accepted`` state.
        Poll ``GET /api/v1/click2call/{id}`` for progress. > **``a_type: stream`` requires an endpoint that speaks our
        protocol.** The
        > message shapes, the audio format and what answers the call are described in
        > WebSocket Calls. ### States

        ``accepted`` → ``agent_ringing`` → ``agent_answered`` → ``customer_ringing`` → ``bridged`` → ``completed``, with
        ``failed`` reachable from any of them. > **``agent_ringing`` is best-effort.** It is derived from a ringing
        > indication on the agent leg, which some user agents never send, so it may
        > be skipped entirely — a call can go straight from ``accepted`` to
        > ``agent_answered``. Do not require ``agent_ringing`` in client logic. ### Webhooks

        Pass ``callback_url`` and we POST a JSON body to it on every transition of the call. It must be an ``https`` URL
        on a public host, at most 255 characters; anything else is refused with ``422`` and no call is placed. Delivery
        is per call — there is no per-account setting, and calls placed without the field get no webhooks. | Event |
        Fires when |
        |-------|-----------|
        | ``click2call.agent_ringing`` | the agent leg starts ringing |
        | ``click2call.agent_answered`` | the agent leg answers |
        | ``click2call.customer_ringing`` | the destination is dialled |
        | ``click2call.bridged`` | the two legs are bridged |
        | ``click2call.completed`` | the call ends normally |
        | ``click2call.failed`` | the call ends any other way |
        | ``click2call.finalized`` | the billed record is committed |

        The body is ``{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}``, where ``data`` is the same call
        resource this endpoint returns. New fields may appear in ``data`` and new names in the ``click2call.*``
        namespace at any time: ignore what you do not recognise. > **``click2call.completed`` and ``.failed`` fire
        immediately, with ``cost`` still
        > ``null``.** ``click2call.finalized`` follows once billing has settled and
        > carries the priced document. The two can arrive out of order — ``.finalized``
        > does not mean nothing more is coming. Order is recoverable only from
        > ``event_seq``, which increases within a call. Requests are **not signed**. Treat the call id as unguessable,
            not as proof
        of origin, and confirm anything that matters with ``GET /api/v1/click2call/{id}``. **Delivery.** Answer ``2xx``
        within 15 seconds. A ``408``, ``429``, ``5xx`` or a transport failure is retried up to five times with
        exponential backoff from 30 seconds, honouring ``Retry-After``; any other ``4xx`` is treated as permanent and
        never retried. Delivery is at-least-once, so the same ``event_seq`` can arrive twice. ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded. It
        rides in the same ``data`` of every ``click2call.*`` webhook, so ``click2call.finalized`` is where it first
        appears. **Default.** ``recording_url`` is a signed S3 link valid for 1 hour. Each read of the call
        (click2call_show) mints a fresh one. Once it has expired, fetch the file through calls_recording. **Permanent
        links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes, ``404`` when the recording is no longer retained or the option is turned off, and ``429``
        with ``Retry-After`` past the per-minute download limit. Details: recordings_show. ### Caller ID

        While the agent's phone rings it shows the destination number as the caller. Pass ``a_cli`` to show a number of
        your choice instead — for example when your agents must not see where the call is going.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call was placed. Poll the read operation for progress.

        Raises:
            ApiError: The API token is missing or incorrect. This endpoint answers ``401``; the rest of v1 answers
                ``403`` for the same refusal. The account has no funds available — ``insufficient_funds``. The request
                was well formed and permitted; it simply cannot be paid for. No call is placed. The account may not use
                this endpoint: the request is refused with ``click2call_api_disabled`` or ``account_not_verified``. No
                call is placed. The account is in a state that forbids placing a call — ``account_suspended``. The
                request itself was well formed and permitted; no call is placed. The request failed validation.
                ``error.code`` is always ``validation_failed``; each violation appears in ``error.details`` with its own
                ``code`` and the ``field`` it belongs to — ``caller_id_unsupported`` (``b_cli`` is not supported in v1),
                ``a_type_unsupported``, ``invalid_a_endpoint``, ``invalid_stream_url``, ``invalid_stream_token``,
                ``unknown_sip_account``, ``invalid_b_number``, ``invalid_a_cli``, ``callback_url_insecure``,
                ``invalid_callback_url`` or ``invalid_client_call_id``. No call is placed. ``error`` is
                ``ApiV1Click2Call401Error1 | ApiV1Click2Call402Error1 | ApiV1Click2Call403Error1 |
                ApiV1Click2Call409Error1 | ApiV1Click2Call422Error1 | RawError``."""
        return unwrap(self._with_raw_response.click2call_create(body=body, request_options=request_options))

    def click2call_destroy(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Hangs the call up, whatever leg it has reached — before anyone answered, or mid-conversation. The response is
        ``204 No Content`` with an empty body.

        ### Repeating the cancel is safe

        A repeated ``DELETE`` also answers ``204``. The request is recorded once and every repeat gets the same answer,
        so a client that retries on a timeout cannot get a spurious failure. Do **not** read a second ``204`` as "there
        was still a call to hang up".

        ### What the cancel shows up as

        A cancel that actually ended the call reads back with ``reason`` ``canceled``. Its ``state`` is ``completed`` if
        the two legs had already been bridged, and ``failed`` if the call was hung up before it came together.

        If the call had **already** ended on its own before your ``DELETE`` arrived, its original ``reason`` is kept — a
        call nobody answered still reads ``no_answer``. Cleaning up with a defensive ``DELETE`` therefore cannot hide
        why a call ended.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it is older than the 12-hour retention window — which runs from when the call was
        **placed**, not from when it ended. The cases are deliberately indistinguishable.

        See also: click2call_show, which reads the call back after the cancel.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call was hung up. The body is empty, and repeating the request answers 204 again.

        Raises:
            ApiError: The API token is missing or incorrect. This endpoint answers ``401``; the rest of v1 answers
                ``403`` for the same refusal. The API token is missing or incorrect, or the Click2Call API is not
                enabled for this account (``click2call_api_disabled``). No such call: it never existed, the ID is
                malformed, it belongs to another account, or it is older than the 12-hour retention window. ``error`` is
                ``ApiV1Click2Call401Error1 | ApiV1Click2Call403Error1 | ApiV1Click2Call404Error1 | RawError``."""
        return unwrap(self._with_raw_response.click2call_destroy(id_, request_options=request_options))

    def click2call_show(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1Click2CallResponse1:
        """Returns the current state of one call. This is the polling endpoint: call it until ``state`` is ``completed``
        or ``failed``.

        ### States

        | State | Meaning |
        |---|---|
        | ``accepted`` | The call was placed; no leg has moved yet |
        | ``agent_ringing`` | Your SIP account is ringing — **best-effort, may be skipped** |
        | ``agent_answered`` | Your SIP account answered |
        | ``customer_ringing`` | The destination is being dialled |
        | ``bridged`` | Both legs are up and talking |
        | ``completed`` | The call ended normally |
        | ``failed`` | The call did not come together |

        ``agent_ringing`` is derived from a ringing indication on the agent leg, which some user agents never send. A
        call may therefore go straight from ``accepted`` to ``agent_answered``; clients must not require
        ``agent_ringing``.

        ### ``reason``

        ``reason`` answers *why the call ended*, on its own axis from ``state``. It is ``null`` while the call is live
        **and** on a normal end. Otherwise it is one of ``no_answer``, ``busy``, ``unreachable``, ``canceled``,
        ``timed_out`` or ``platform_error``. A call your own ``DELETE`` ended reports ``canceled`` — including when it
        had already been answered, in which case ``state`` is ``completed``. A ``DELETE`` that arrives after the call
        has already ended leaves the original reason in place.

        ### Retention

        A call is readable for **12 hours from the moment it was placed** — not from the moment it ended. After that the
        record is gone and this endpoint answers ``404``. Call history is a separate product surface.

        ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded.

        **Default.** ``recording_url`` is a signed S3 link valid for 1 hour, minted fresh on each read. Once it has
        expired, fetch the file through calls_recording.

        **Permanent links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes. It answers ``404`` when the recording is no longer retained or the option is turned off,
        and ``429`` with ``Retry-After`` past the per-minute download limit. Details: recordings_show.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook. Without permanent links enabled, ``recording_url`` holds a
        temporary pre-signed URL; to fetch a recording after it expires, use calls_recording.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it has fallen out of the 12-hour window. The cases are deliberately indistinguishable.

        ``data.recording_url`` feeds recordings_show. See also: click2call_destroy.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current state of the call.

        Raises:
            ApiError: The API token is missing or incorrect. This endpoint answers ``401``; the rest of v1 answers
                ``403`` for the same refusal. The API token is missing or incorrect, or the Click2Call API is not
                enabled for this account (``click2call_api_disabled``). No such call: it never existed, the ID is
                malformed, it belongs to another account, or it is older than the 12-hour retention window. ``error`` is
                ``ApiV1Click2Call401Error1 | ApiV1Click2Call403Error1 | ApiV1Click2Call404Error1 | RawError``."""
        return unwrap(self._with_raw_response.click2call_show(id_, request_options=request_options))

    def recordings_show(self, user_id: int, token: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Downloads a call recording from the permanent link carried in ``recording_url`` when the account has
        permanent recording links enabled. The link needs no authentication.

        - ``302`` redirects to a signed download of the recording, valid for 5 minutes.
        - ``404`` when the link is invalid, the recording is no longer retained, or permanent
        recording links are turned off for the account.
        - ``429`` with a ``Retry-After`` header when the account exceeds its per-minute download limit.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook.

        Without permanent links enabled, ``recording_url`` holds a temporary pre-signed URL instead; to fetch a
        recording after it expires, use calls_recording.

        Args:
            user_id: User ID in the permanent ``recording_url`` from click2call_create, click2call_show
            token: Encrypted recording token in the permanent ``recording_url`` from click2call_create, click2call_show
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: The recording link is invalid or unavailable. Returns 429 with ``Retry-After`` seconds to wait.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.recordings_show(user_id, token, request_options=request_options))

    @property
    def with_raw_response(self) -> Click2CallWithRawResponse:
        return self._with_raw_response


class AsyncClick2Call:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncClick2CallWithRawResponse(client, server, auth)

    async def click2call_create(
        self,
        *,
        body: ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1Click2CallResponse:
        """Places one call: the platform connects the agent leg first and, once it answers, dials the destination number
        (the customer leg) and bridges the two. The agent leg is one of your SIP accounts by default, or your own
        WebSocket endpoint with ``a_type: stream``. The response is the call resource in its initial ``accepted`` state.
        Poll ``GET /api/v1/click2call/{id}`` for progress. > **``a_type: stream`` requires an endpoint that speaks our
        protocol.** The
        > message shapes, the audio format and what answers the call are described in
        > WebSocket Calls. ### States

        ``accepted`` → ``agent_ringing`` → ``agent_answered`` → ``customer_ringing`` → ``bridged`` → ``completed``, with
        ``failed`` reachable from any of them. > **``agent_ringing`` is best-effort.** It is derived from a ringing
        > indication on the agent leg, which some user agents never send, so it may
        > be skipped entirely — a call can go straight from ``accepted`` to
        > ``agent_answered``. Do not require ``agent_ringing`` in client logic. ### Webhooks

        Pass ``callback_url`` and we POST a JSON body to it on every transition of the call. It must be an ``https`` URL
        on a public host, at most 255 characters; anything else is refused with ``422`` and no call is placed. Delivery
        is per call — there is no per-account setting, and calls placed without the field get no webhooks. | Event |
        Fires when |
        |-------|-----------|
        | ``click2call.agent_ringing`` | the agent leg starts ringing |
        | ``click2call.agent_answered`` | the agent leg answers |
        | ``click2call.customer_ringing`` | the destination is dialled |
        | ``click2call.bridged`` | the two legs are bridged |
        | ``click2call.completed`` | the call ends normally |
        | ``click2call.failed`` | the call ends any other way |
        | ``click2call.finalized`` | the billed record is committed |

        The body is ``{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}``, where ``data`` is the same call
        resource this endpoint returns. New fields may appear in ``data`` and new names in the ``click2call.*``
        namespace at any time: ignore what you do not recognise. > **``click2call.completed`` and ``.failed`` fire
        immediately, with ``cost`` still
        > ``null``.** ``click2call.finalized`` follows once billing has settled and
        > carries the priced document. The two can arrive out of order — ``.finalized``
        > does not mean nothing more is coming. Order is recoverable only from
        > ``event_seq``, which increases within a call. Requests are **not signed**. Treat the call id as unguessable,
            not as proof
        of origin, and confirm anything that matters with ``GET /api/v1/click2call/{id}``. **Delivery.** Answer ``2xx``
        within 15 seconds. A ``408``, ``429``, ``5xx`` or a transport failure is retried up to five times with
        exponential backoff from 30 seconds, honouring ``Retry-After``; any other ``4xx`` is treated as permanent and
        never retried. Delivery is at-least-once, so the same ``event_seq`` can arrive twice. ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded. It
        rides in the same ``data`` of every ``click2call.*`` webhook, so ``click2call.finalized`` is where it first
        appears. **Default.** ``recording_url`` is a signed S3 link valid for 1 hour. Each read of the call
        (click2call_show) mints a fresh one. Once it has expired, fetch the file through calls_recording. **Permanent
        links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes, ``404`` when the recording is no longer retained or the option is turned off, and ``429``
        with ``Retry-After`` past the per-minute download limit. Details: recordings_show. ### Caller ID

        While the agent's phone rings it shows the destination number as the caller. Pass ``a_cli`` to show a number of
        your choice instead — for example when your agents must not see where the call is going.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call was placed. Poll the read operation for progress.

        Raises:
            ApiError: The API token is missing or incorrect. This endpoint answers ``401``; the rest of v1 answers
                ``403`` for the same refusal. The account has no funds available — ``insufficient_funds``. The request
                was well formed and permitted; it simply cannot be paid for. No call is placed. The account may not use
                this endpoint: the request is refused with ``click2call_api_disabled`` or ``account_not_verified``. No
                call is placed. The account is in a state that forbids placing a call — ``account_suspended``. The
                request itself was well formed and permitted; no call is placed. The request failed validation.
                ``error.code`` is always ``validation_failed``; each violation appears in ``error.details`` with its own
                ``code`` and the ``field`` it belongs to — ``caller_id_unsupported`` (``b_cli`` is not supported in v1),
                ``a_type_unsupported``, ``invalid_a_endpoint``, ``invalid_stream_url``, ``invalid_stream_token``,
                ``unknown_sip_account``, ``invalid_b_number``, ``invalid_a_cli``, ``callback_url_insecure``,
                ``invalid_callback_url`` or ``invalid_client_call_id``. No call is placed. ``error`` is
                ``ApiV1Click2Call401Error1 | ApiV1Click2Call402Error1 | ApiV1Click2Call403Error1 |
                ApiV1Click2Call409Error1 | ApiV1Click2Call422Error1 | RawError``."""
        return unwrap(await self._with_raw_response.click2call_create(body=body, request_options=request_options))

    async def click2call_destroy(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Hangs the call up, whatever leg it has reached — before anyone answered, or mid-conversation. The response is
        ``204 No Content`` with an empty body.

        ### Repeating the cancel is safe

        A repeated ``DELETE`` also answers ``204``. The request is recorded once and every repeat gets the same answer,
        so a client that retries on a timeout cannot get a spurious failure. Do **not** read a second ``204`` as "there
        was still a call to hang up".

        ### What the cancel shows up as

        A cancel that actually ended the call reads back with ``reason`` ``canceled``. Its ``state`` is ``completed`` if
        the two legs had already been bridged, and ``failed`` if the call was hung up before it came together.

        If the call had **already** ended on its own before your ``DELETE`` arrived, its original ``reason`` is kept — a
        call nobody answered still reads ``no_answer``. Cleaning up with a defensive ``DELETE`` therefore cannot hide
        why a call ended.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it is older than the 12-hour retention window — which runs from when the call was
        **placed**, not from when it ended. The cases are deliberately indistinguishable.

        See also: click2call_show, which reads the call back after the cancel.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The call was hung up. The body is empty, and repeating the request answers 204 again.

        Raises:
            ApiError: The API token is missing or incorrect. This endpoint answers ``401``; the rest of v1 answers
                ``403`` for the same refusal. The API token is missing or incorrect, or the Click2Call API is not
                enabled for this account (``click2call_api_disabled``). No such call: it never existed, the ID is
                malformed, it belongs to another account, or it is older than the 12-hour retention window. ``error`` is
                ``ApiV1Click2Call401Error1 | ApiV1Click2Call403Error1 | ApiV1Click2Call404Error1 | RawError``."""
        return unwrap(await self._with_raw_response.click2call_destroy(id_, request_options=request_options))

    async def click2call_show(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1Click2CallResponse1:
        """Returns the current state of one call. This is the polling endpoint: call it until ``state`` is ``completed``
        or ``failed``.

        ### States

        | State | Meaning |
        |---|---|
        | ``accepted`` | The call was placed; no leg has moved yet |
        | ``agent_ringing`` | Your SIP account is ringing — **best-effort, may be skipped** |
        | ``agent_answered`` | Your SIP account answered |
        | ``customer_ringing`` | The destination is being dialled |
        | ``bridged`` | Both legs are up and talking |
        | ``completed`` | The call ended normally |
        | ``failed`` | The call did not come together |

        ``agent_ringing`` is derived from a ringing indication on the agent leg, which some user agents never send. A
        call may therefore go straight from ``accepted`` to ``agent_answered``; clients must not require
        ``agent_ringing``.

        ### ``reason``

        ``reason`` answers *why the call ended*, on its own axis from ``state``. It is ``null`` while the call is live
        **and** on a normal end. Otherwise it is one of ``no_answer``, ``busy``, ``unreachable``, ``canceled``,
        ``timed_out`` or ``platform_error``. A call your own ``DELETE`` ended reports ``canceled`` — including when it
        had already been answered, in which case ``state`` is ``completed``. A ``DELETE`` that arrives after the call
        has already ended leaves the original reason in place.

        ### Retention

        A call is readable for **12 hours from the moment it was placed** — not from the moment it ended. After that the
        record is gone and this endpoint answers ``404``. Call history is a separate product surface.

        ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded.

        **Default.** ``recording_url`` is a signed S3 link valid for 1 hour, minted fresh on each read. Once it has
        expired, fetch the file through calls_recording.

        **Permanent links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes. It answers ``404`` when the recording is no longer retained or the option is turned off,
        and ``429`` with ``Retry-After`` past the per-minute download limit. Details: recordings_show.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook. Without permanent links enabled, ``recording_url`` holds a
        temporary pre-signed URL; to fetch a recording after it expires, use calls_recording.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it has fallen out of the 12-hour window. The cases are deliberately indistinguishable.

        ``data.recording_url`` feeds recordings_show. See also: click2call_destroy.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current state of the call.

        Raises:
            ApiError: The API token is missing or incorrect. This endpoint answers ``401``; the rest of v1 answers
                ``403`` for the same refusal. The API token is missing or incorrect, or the Click2Call API is not
                enabled for this account (``click2call_api_disabled``). No such call: it never existed, the ID is
                malformed, it belongs to another account, or it is older than the 12-hour retention window. ``error`` is
                ``ApiV1Click2Call401Error1 | ApiV1Click2Call403Error1 | ApiV1Click2Call404Error1 | RawError``."""
        return unwrap(await self._with_raw_response.click2call_show(id_, request_options=request_options))

    async def recordings_show(
        self, user_id: int, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Downloads a call recording from the permanent link carried in ``recording_url`` when the account has
        permanent recording links enabled. The link needs no authentication.

        - ``302`` redirects to a signed download of the recording, valid for 5 minutes.
        - ``404`` when the link is invalid, the recording is no longer retained, or permanent
        recording links are turned off for the account.
        - ``429`` with a ``Retry-After`` header when the account exceeds its per-minute download limit.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook.

        Without permanent links enabled, ``recording_url`` holds a temporary pre-signed URL instead; to fetch a
        recording after it expires, use calls_recording.

        Args:
            user_id: User ID in the permanent ``recording_url`` from click2call_create, click2call_show
            token: Encrypted recording token in the permanent ``recording_url`` from click2call_create, click2call_show
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: The recording link is invalid or unavailable. Returns 429 with ``Retry-After`` seconds to wait.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.recordings_show(user_id, token, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncClick2CallWithRawResponse:
        return self._with_raw_response


class Click2CallWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def click2call_create(
        self,
        *,
        body: ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1Click2CallResponse, Click2CallCreateErrorBody]:
        """Places one call: the platform connects the agent leg first and, once it answers, dials the destination number
        (the customer leg) and bridges the two. The agent leg is one of your SIP accounts by default, or your own
        WebSocket endpoint with ``a_type: stream``. The response is the call resource in its initial ``accepted`` state.
        Poll ``GET /api/v1/click2call/{id}`` for progress. > **``a_type: stream`` requires an endpoint that speaks our
        protocol.** The
        > message shapes, the audio format and what answers the call are described in
        > WebSocket Calls. ### States

        ``accepted`` → ``agent_ringing`` → ``agent_answered`` → ``customer_ringing`` → ``bridged`` → ``completed``, with
        ``failed`` reachable from any of them. > **``agent_ringing`` is best-effort.** It is derived from a ringing
        > indication on the agent leg, which some user agents never send, so it may
        > be skipped entirely — a call can go straight from ``accepted`` to
        > ``agent_answered``. Do not require ``agent_ringing`` in client logic. ### Webhooks

        Pass ``callback_url`` and we POST a JSON body to it on every transition of the call. It must be an ``https`` URL
        on a public host, at most 255 characters; anything else is refused with ``422`` and no call is placed. Delivery
        is per call — there is no per-account setting, and calls placed without the field get no webhooks. | Event |
        Fires when |
        |-------|-----------|
        | ``click2call.agent_ringing`` | the agent leg starts ringing |
        | ``click2call.agent_answered`` | the agent leg answers |
        | ``click2call.customer_ringing`` | the destination is dialled |
        | ``click2call.bridged`` | the two legs are bridged |
        | ``click2call.completed`` | the call ends normally |
        | ``click2call.failed`` | the call ends any other way |
        | ``click2call.finalized`` | the billed record is committed |

        The body is ``{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}``, where ``data`` is the same call
        resource this endpoint returns. New fields may appear in ``data`` and new names in the ``click2call.*``
        namespace at any time: ignore what you do not recognise. > **``click2call.completed`` and ``.failed`` fire
        immediately, with ``cost`` still
        > ``null``.** ``click2call.finalized`` follows once billing has settled and
        > carries the priced document. The two can arrive out of order — ``.finalized``
        > does not mean nothing more is coming. Order is recoverable only from
        > ``event_seq``, which increases within a call. Requests are **not signed**. Treat the call id as unguessable,
            not as proof
        of origin, and confirm anything that matters with ``GET /api/v1/click2call/{id}``. **Delivery.** Answer ``2xx``
        within 15 seconds. A ``408``, ``429``, ``5xx`` or a transport failure is retried up to five times with
        exponential backoff from 30 seconds, honouring ``Retry-After``; any other ``4xx`` is treated as permanent and
        never retried. Delivery is at-least-once, so the same ``event_seq`` can arrive twice. ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded. It
        rides in the same ``data`` of every ``click2call.*`` webhook, so ``click2call.finalized`` is where it first
        appears. **Default.** ``recording_url`` is a signed S3 link valid for 1 hour. Each read of the call
        (click2call_show) mints a fresh one. Once it has expired, fetch the file through calls_recording. **Permanent
        links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes, ``404`` when the recording is no longer retained or the option is turned off, and ``429``
        with ``Retry-After`` past the per-minute download limit. Details: recordings_show. ### Caller ID

        While the agent's phone rings it shows the destination number as the caller. Pass ``a_cli`` to show a number of
        your choice instead — for example when your agents must not see where the call is going.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/click2call"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1Click2CallResponse],
            error_mapper=click2_call_create_error_mapper,
            request_options=request_options,
        )

    def click2call_destroy(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, Click2CallDestroyErrorBody]:
        """Hangs the call up, whatever leg it has reached — before anyone answered, or mid-conversation. The response is
        ``204 No Content`` with an empty body.

        ### Repeating the cancel is safe

        A repeated ``DELETE`` also answers ``204``. The request is recorded once and every repeat gets the same answer,
        so a client that retries on a timeout cannot get a spurious failure. Do **not** read a second ``204`` as "there
        was still a call to hang up".

        ### What the cancel shows up as

        A cancel that actually ended the call reads back with ``reason`` ``canceled``. Its ``state`` is ``completed`` if
        the two legs had already been bridged, and ``failed`` if the call was hung up before it came together.

        If the call had **already** ended on its own before your ``DELETE`` arrived, its original ``reason`` is kept — a
        call nobody answered still reads ``no_answer``. Cleaning up with a defensive ``DELETE`` therefore cannot hide
        why a call ended.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it is older than the 12-hour retention window — which runs from when the call was
        **placed**, not from when it ended. The cases are deliberately indistinguishable.

        See also: click2call_show, which reads the call back after the cancel.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/click2call/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=click2_call_destroy_error_mapper,
            request_options=request_options,
        )

    def click2call_show(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1Click2CallResponse1, Click2CallShowErrorBody]:
        """Returns the current state of one call. This is the polling endpoint: call it until ``state`` is ``completed``
        or ``failed``.

        ### States

        | State | Meaning |
        |---|---|
        | ``accepted`` | The call was placed; no leg has moved yet |
        | ``agent_ringing`` | Your SIP account is ringing — **best-effort, may be skipped** |
        | ``agent_answered`` | Your SIP account answered |
        | ``customer_ringing`` | The destination is being dialled |
        | ``bridged`` | Both legs are up and talking |
        | ``completed`` | The call ended normally |
        | ``failed`` | The call did not come together |

        ``agent_ringing`` is derived from a ringing indication on the agent leg, which some user agents never send. A
        call may therefore go straight from ``accepted`` to ``agent_answered``; clients must not require
        ``agent_ringing``.

        ### ``reason``

        ``reason`` answers *why the call ended*, on its own axis from ``state``. It is ``null`` while the call is live
        **and** on a normal end. Otherwise it is one of ``no_answer``, ``busy``, ``unreachable``, ``canceled``,
        ``timed_out`` or ``platform_error``. A call your own ``DELETE`` ended reports ``canceled`` — including when it
        had already been answered, in which case ``state`` is ``completed``. A ``DELETE`` that arrives after the call
        has already ended leaves the original reason in place.

        ### Retention

        A call is readable for **12 hours from the moment it was placed** — not from the moment it ended. After that the
        record is gone and this endpoint answers ``404``. Call history is a separate product surface.

        ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded.

        **Default.** ``recording_url`` is a signed S3 link valid for 1 hour, minted fresh on each read. Once it has
        expired, fetch the file through calls_recording.

        **Permanent links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes. It answers ``404`` when the recording is no longer retained or the option is turned off,
        and ``429`` with ``Retry-After`` past the per-minute download limit. Details: recordings_show.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook. Without permanent links enabled, ``recording_url`` holds a
        temporary pre-signed URL; to fetch a recording after it expires, use calls_recording.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it has fallen out of the 12-hour window. The cases are deliberately indistinguishable.

        ``data.recording_url`` feeds recordings_show. See also: click2call_destroy.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/click2call/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1Click2CallResponse1],
            error_mapper=click2_call_show_error_mapper,
            request_options=request_options,
        )

    def recordings_show(
        self, user_id: int, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecordingsShowErrorBody]:
        """Downloads a call recording from the permanent link carried in ``recording_url`` when the account has
        permanent recording links enabled. The link needs no authentication.

        - ``302`` redirects to a signed download of the recording, valid for 5 minutes.
        - ``404`` when the link is invalid, the recording is no longer retained, or permanent
        recording links are turned off for the account.
        - ``429`` with a ``Retry-After`` header when the account exceeds its per-minute download limit.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook.

        Without permanent links enabled, ``recording_url`` holds a temporary pre-signed URL instead; to fetch a
        recording after it expires, use calls_recording.

        Args:
            user_id: User ID in the permanent ``recording_url`` from click2call_create, click2call_show
            token: Encrypted recording token in the permanent ``recording_url`` from click2call_create, click2call_show
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/recordings/{user_id}/{token}"),
            path_params=[param[int]("user_id", user_id), param[str]("token", token)],
            decoder=empty_response,
            error_mapper=recordings_show_error_mapper,
            request_options=request_options,
        )


class AsyncClick2CallWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def click2call_create(
        self,
        *,
        body: ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1Click2CallResponse, Click2CallCreateErrorBody]:
        """Places one call: the platform connects the agent leg first and, once it answers, dials the destination number
        (the customer leg) and bridges the two. The agent leg is one of your SIP accounts by default, or your own
        WebSocket endpoint with ``a_type: stream``. The response is the call resource in its initial ``accepted`` state.
        Poll ``GET /api/v1/click2call/{id}`` for progress. > **``a_type: stream`` requires an endpoint that speaks our
        protocol.** The
        > message shapes, the audio format and what answers the call are described in
        > WebSocket Calls. ### States

        ``accepted`` → ``agent_ringing`` → ``agent_answered`` → ``customer_ringing`` → ``bridged`` → ``completed``, with
        ``failed`` reachable from any of them. > **``agent_ringing`` is best-effort.** It is derived from a ringing
        > indication on the agent leg, which some user agents never send, so it may
        > be skipped entirely — a call can go straight from ``accepted`` to
        > ``agent_answered``. Do not require ``agent_ringing`` in client logic. ### Webhooks

        Pass ``callback_url`` and we POST a JSON body to it on every transition of the call. It must be an ``https`` URL
        on a public host, at most 255 characters; anything else is refused with ``422`` and no call is placed. Delivery
        is per call — there is no per-account setting, and calls placed without the field get no webhooks. | Event |
        Fires when |
        |-------|-----------|
        | ``click2call.agent_ringing`` | the agent leg starts ringing |
        | ``click2call.agent_answered`` | the agent leg answers |
        | ``click2call.customer_ringing`` | the destination is dialled |
        | ``click2call.bridged`` | the two legs are bridged |
        | ``click2call.completed`` | the call ends normally |
        | ``click2call.failed`` | the call ends any other way |
        | ``click2call.finalized`` | the billed record is committed |

        The body is ``{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}``, where ``data`` is the same call
        resource this endpoint returns. New fields may appear in ``data`` and new names in the ``click2call.*``
        namespace at any time: ignore what you do not recognise. > **``click2call.completed`` and ``.failed`` fire
        immediately, with ``cost`` still
        > ``null``.** ``click2call.finalized`` follows once billing has settled and
        > carries the priced document. The two can arrive out of order — ``.finalized``
        > does not mean nothing more is coming. Order is recoverable only from
        > ``event_seq``, which increases within a call. Requests are **not signed**. Treat the call id as unguessable,
            not as proof
        of origin, and confirm anything that matters with ``GET /api/v1/click2call/{id}``. **Delivery.** Answer ``2xx``
        within 15 seconds. A ``408``, ``429``, ``5xx`` or a transport failure is retried up to five times with
        exponential backoff from 30 seconds, honouring ``Retry-After``; any other ``4xx`` is treated as permanent and
        never retried. Delivery is at-least-once, so the same ``event_seq`` can arrive twice. ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded. It
        rides in the same ``data`` of every ``click2call.*`` webhook, so ``click2call.finalized`` is where it first
        appears. **Default.** ``recording_url`` is a signed S3 link valid for 1 hour. Each read of the call
        (click2call_show) mints a fresh one. Once it has expired, fetch the file through calls_recording. **Permanent
        links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes, ``404`` when the recording is no longer retained or the option is turned off, and ``429``
        with ``Retry-After`` past the per-minute download limit. Details: recordings_show. ### Caller ID

        While the agent's phone rings it shows the destination number as the caller. Pass ``a_cli`` to show a number of
        your choice instead — for example when your agents must not see where the call is going.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/click2call"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1Click2CallResponse],
            error_mapper=click2_call_create_error_mapper,
            request_options=request_options,
        )

    async def click2call_destroy(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, Click2CallDestroyErrorBody]:
        """Hangs the call up, whatever leg it has reached — before anyone answered, or mid-conversation. The response is
        ``204 No Content`` with an empty body.

        ### Repeating the cancel is safe

        A repeated ``DELETE`` also answers ``204``. The request is recorded once and every repeat gets the same answer,
        so a client that retries on a timeout cannot get a spurious failure. Do **not** read a second ``204`` as "there
        was still a call to hang up".

        ### What the cancel shows up as

        A cancel that actually ended the call reads back with ``reason`` ``canceled``. Its ``state`` is ``completed`` if
        the two legs had already been bridged, and ``failed`` if the call was hung up before it came together.

        If the call had **already** ended on its own before your ``DELETE`` arrived, its original ``reason`` is kept — a
        call nobody answered still reads ``no_answer``. Cleaning up with a defensive ``DELETE`` therefore cannot hide
        why a call ended.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it is older than the 12-hour retention window — which runs from when the call was
        **placed**, not from when it ended. The cases are deliberately indistinguishable.

        See also: click2call_show, which reads the call back after the cancel.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/click2call/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=click2_call_destroy_error_mapper,
            request_options=request_options,
        )

    async def click2call_show(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1Click2CallResponse1, Click2CallShowErrorBody]:
        """Returns the current state of one call. This is the polling endpoint: call it until ``state`` is ``completed``
        or ``failed``.

        ### States

        | State | Meaning |
        |---|---|
        | ``accepted`` | The call was placed; no leg has moved yet |
        | ``agent_ringing`` | Your SIP account is ringing — **best-effort, may be skipped** |
        | ``agent_answered`` | Your SIP account answered |
        | ``customer_ringing`` | The destination is being dialled |
        | ``bridged`` | Both legs are up and talking |
        | ``completed`` | The call ended normally |
        | ``failed`` | The call did not come together |

        ``agent_ringing`` is derived from a ringing indication on the agent leg, which some user agents never send. A
        call may therefore go straight from ``accepted`` to ``agent_answered``; clients must not require
        ``agent_ringing``.

        ### ``reason``

        ``reason`` answers *why the call ended*, on its own axis from ``state``. It is ``null`` while the call is live
        **and** on a normal end. Otherwise it is one of ``no_answer``, ``busy``, ``unreachable``, ``canceled``,
        ``timed_out`` or ``platform_error``. A call your own ``DELETE`` ended reports ``canceled`` — including when it
        had already been answered, in which case ``state`` is ``completed``. A ``DELETE`` that arrives after the call
        has already ended leaves the original reason in place.

        ### Retention

        A call is readable for **12 hours from the moment it was placed** — not from the moment it ended. After that the
        record is gone and this endpoint answers ``404``. Call history is a separate product surface.

        ### Recordings

        ``recording_url`` is ``null`` until the call is settled, and stays ``null`` for a call that was not recorded.

        **Default.** ``recording_url`` is a signed S3 link valid for 1 hour, minted fresh on each read. Once it has
        expired, fetch the file through calls_recording.

        **Permanent links.** Enabled on request through your account manager or support. ``recording_url`` becomes
        ``/api/v1/recordings/{user_id}/{token}``, which needs no authentication and answers ``302`` to a signed URL
        valid for 5 minutes. It answers ``404`` when the recording is no longer retained or the option is turned off,
        and ``429`` with ``Retry-After`` past the per-minute download limit. Details: recordings_show.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook. Without permanent links enabled, ``recording_url`` holds a
        temporary pre-signed URL; to fetch a recording after it expires, use calls_recording.

        ### ``404``

        ``404 call_not_found`` means the call is unknown to you: it never existed, the ID is malformed, it belongs to
        another account, or it has fallen out of the 12-hour window. The cases are deliberately indistinguishable.

        ``data.recording_url`` feeds recordings_show. See also: click2call_destroy.

        Args:
            id_: Call ID (``data.id``) from click2call_create, a 26-character ULID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/click2call/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1Click2CallResponse1],
            error_mapper=click2_call_show_error_mapper,
            request_options=request_options,
        )

    async def recordings_show(
        self, user_id: int, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecordingsShowErrorBody]:
        """Downloads a call recording from the permanent link carried in ``recording_url`` when the account has
        permanent recording links enabled. The link needs no authentication.

        - ``302`` redirects to a signed download of the recording, valid for 5 minutes.
        - ``404`` when the link is invalid, the recording is no longer retained, or permanent
        recording links are turned off for the account.
        - ``429`` with a ``Retry-After`` header when the account exceeds its per-minute download limit.

        This link is the ``recording_url`` returned by click2call_create, click2call_show and their ``click2call.*``
        webhooks, and sent in the call-recording webhook.

        Without permanent links enabled, ``recording_url`` holds a temporary pre-signed URL instead; to fetch a
        recording after it expires, use calls_recording.

        Args:
            user_id: User ID in the permanent ``recording_url`` from click2call_create, click2call_show
            token: Encrypted recording token in the permanent ``recording_url`` from click2call_create, click2call_show
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/recordings/{user_id}/{token}"),
            path_params=[param[int]("user_id", user_id), param[str]("token", token)],
            decoder=async_empty_response,
            error_mapper=recordings_show_error_mapper,
            request_options=request_options,
        )
