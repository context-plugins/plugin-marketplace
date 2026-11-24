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
from ..errors.cancel_queued_message_sessions_session_id_queue_message_id_delete_error import (
    CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody,
    cancel_queued_message_sessions_session_id_queue_message_id_delete_error_mapper,
)
from ..errors.create_session_share_sessions_session_id_share_post_error import (
    CreateSessionShareSessionsSessionIdSharePostErrorBody,
    create_session_share_sessions_session_id_share_post_error_mapper,
)
from ..errors.delete_session_sessions_session_id_delete_error import (
    DeleteSessionSessionsSessionIdDeleteErrorBody,
    delete_session_sessions_session_id_delete_error_mapper,
)
from ..errors.get_session_cost_sessions_session_id_cost_get_error import (
    GetSessionCostSessionsSessionIdCostGetErrorBody,
    get_session_cost_sessions_session_id_cost_get_error_mapper,
)
from ..errors.get_session_queue_message_sessions_session_id_queue_message_id_get_error import (
    GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody,
    get_session_queue_message_sessions_session_id_queue_message_id_get_error_mapper,
)
from ..errors.get_session_sessions_session_id_get_error import (
    GetSessionSessionsSessionIdGetErrorBody,
    get_session_sessions_session_id_get_error_mapper,
)
from ..errors.get_session_share_sessions_session_id_share_get_error import (
    GetSessionShareSessionsSessionIdShareGetErrorBody,
    get_session_share_sessions_session_id_share_get_error_mapper,
)
from ..errors.list_session_queue_sessions_session_id_queue_get_error import (
    ListSessionQueueSessionsSessionIdQueueGetErrorBody,
    list_session_queue_sessions_session_id_queue_get_error_mapper,
)
from ..errors.list_sessions_sessions_get_error import (
    ListSessionsSessionsGetErrorBody,
    list_sessions_sessions_get_error_mapper,
)
from ..errors.purge_session_sessions_session_id_purge_post_error import (
    PurgeSessionSessionsSessionIdPurgePostErrorBody,
    purge_session_sessions_session_id_purge_post_error_mapper,
)
from ..errors.queue_session_message_sessions_session_id_queue_post_error import (
    QueueSessionMessageSessionsSessionIdQueuePostErrorBody,
    queue_session_message_sessions_session_id_queue_post_error_mapper,
)
from ..errors.update_session_cost_cap_sessions_session_id_cost_cap_patch_error import (
    UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody,
    update_session_cost_cap_sessions_session_id_cost_cap_patch_error_mapper,
)
from ..errors.update_session_sessions_session_id_patch_error import (
    UpdateSessionSessionsSessionIdPatchErrorBody,
    update_session_sessions_session_id_patch_error_mapper,
)
from ..errors.update_session_share_sessions_session_id_share_put_error import (
    UpdateSessionShareSessionsSessionIdSharePutErrorBody,
    update_session_share_sessions_session_id_share_put_error_mapper,
)
from ..models.queue_list_response import QueueListResponse
from ..models.queue_message_request import QueueMessageRequest, QueueMessageRequestDict
from ..models.queued_message import QueuedMessage
from ..models.session_cost_cap_request import SessionCostCapRequest, SessionCostCapRequestDict
from ..models.session_cost_cap_response import SessionCostCapResponse
from ..models.session_cost_response import SessionCostResponse
from ..models.session_info import SessionInfo
from ..models.session_list_response import SessionListResponse
from ..models.session_share_info import SessionShareInfo
from ..models.session_share_update_request import SessionShareUpdateRequest, SessionShareUpdateRequestDict
from ..models.session_update_request import SessionUpdateRequest, SessionUpdateRequestDict
from ..server.server import Server


class Sessions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SessionsWithRawResponse(client, server, auth)

    def cancel_queued_message_sessions_session_id_queue_message_id_delete(
        self, session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> QueuedMessage:
        """Remove a still-pending queued message; 409 once the drain has claimed it.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. The message is no longer pending and cannot be cancelled. Validation Error ``error``
                is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_queued_message_sessions_session_id_queue_message_id_delete(
                session_id, message_id, request_options=request_options
            ),
        )

    def create_session_share_sessions_session_id_share_post(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SessionShareInfo:
        """Enable sharing: reactivates the session's existing share (stable token, so a link that was toggled off keeps
        working when re-enabled) or creates one on first use.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.create_session_share_sessions_session_id_share_post(
                session_id, request_options=request_options
            ),
        )

    def delete_session_sessions_session_id_delete(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a session: it disappears from the session lists and can no longer be opened or continued.

        Soft delete (mirrors V2's ``is_archived``): the runs, events and usage records stay in place so billing and
        analytics keep reconciling, and ZDR purge is the only thing that ever destroys V4 content. Idempotent — deleting
        twice is a no-op 204.

        An in-flight run is cancelled first, and pending queued messages are cancelled too; otherwise the drain would
        dispatch a follow-up run whose ``session_archived_at`` is NULL and resurrect the session. Cancel is forwarded to
        CP before anything is written (and outside the queue lock, per the enqueue path's ordering), so a CP failure
        (502) leaves the session visible rather than hiding a run that is still burning credits.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. The request could not be forwarded to the control plane. The run is finishing; retry
                the cancel after Retry-After seconds. Validation Error ``error`` is ``HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_session_sessions_session_id_delete(
                session_id, request_options=request_options
            ),
        )

    def get_session_cost_sessions_session_id_cost_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SessionCostResponse:
        """Everything this session has cost so far, split by source.

        A run's ``total_cost_usd`` is its LLM (and web-search) charge only. Browser time and proxy bandwidth are metered
        against the session's browser, which outlives any one run — so this is the endpoint for the session's full cost.

        These are recorded usage costs, not an invoice total: promotional waivers and credits are applied downstream in
        billing, so a session run under a promotion can report cost here that was never charged.

        Costs keep moving after a run reports ``finished``: LLM calls settle up to about 90 seconds later, and the
        browser accrues time and proxy traffic until it stops.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_session_cost_sessions_session_id_cost_get(
                session_id, request_options=request_options
            ),
        )

    def get_session_queue_message_sessions_session_id_queue_message_id_get(
        self, session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> QueuedMessage:
        """Read one queued message including terminal handoff states.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_session_queue_message_sessions_session_id_queue_message_id_get(
                session_id, message_id, request_options=request_options
            ),
        )

    def get_session_sessions_session_id_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SessionInfo:
        """Session detail — the same slim shape as one GET /sessions row (its latest run). Doubles as the busy/idle poll
        for a conversation (POLL rate bucket): slim columns only, indexed public_session_id lookup, never the heavy
        result/token fields.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_session_sessions_session_id_get(session_id, request_options=request_options)
        )

    def get_session_share_sessions_session_id_share_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SessionShareInfo:
        """The session's share link (active or not); null if never shared.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_session_share_sessions_session_id_share_get(
                session_id, request_options=request_options
            ),
        )

    def list_session_queue_sessions_session_id_queue_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> QueueListResponse:
        """List open messages, recently delivered queued messages, and steering cutoffs.

        Includes live dispatch claims so clients can restore an accepted queued message after a refresh without briefly
        losing its waiting state.

        Consumed QUEUE rows are returned too, capped at the most recent _DELIVERED_QUEUE_HISTORY, plus up to
        _AGENCY_DELIVERED_QUEUE_HISTORY compact Agency choice and generation receipts so inbox state survives refresh. A
        message absorbed mid-run is announced by a ``queued_input_injected`` event carrying only its input id, so the
        chat has no other source for the text to render. The cap bounds this response because clients poll it while a
        run is active; a session with more delivered follow-ups than the cap renders its oldest injected bubbles without
        text.

        The latest consumed interrupt bridges the primary-write/read-replica gap before its replacement run appears;
        clients discard it once that run is visible. Compact per-source cutoffs preserve every historical interrupted
        transcript boundary without returning every historical steering message and its attachments.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_session_queue_sessions_session_id_queue_get(
                session_id, request_options=request_options
            ),
        )

    def list_sessions_sessions_get(
        self, *, limit: int | None = 20, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SessionListResponse:
        """List the project's V4 sessions — one row per session (its most recent run), most-recent first.

        A session is a conversation: follow-up runs reuse the same public_session_id, so GET /api/v4/runs would list one
        row per RUN. This collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a chatty session
        with 100 runs is still a single row (no scan amplification), and selects only the slim columns the session list
        needs — never the heavy per-run text/token/cost fields.

        Keyset-paginated on the latest run's (created_at, id): pass ``next_cursor`` back as ``cursor`` to page.
        Offset/COUNT was dropped — it doesn't scale on projects with many sessions.

        Args:
            limit: Max sessions per page (max 100).
            cursor: Keyset cursor from a prior response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Malformed pagination cursor.
                Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_sessions_sessions_get(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def purge_session_sessions_session_id_purge_post(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Purge V4 session data; return 202 while active work or uploads defer deletion.

        Redacts DB records and deletes S3 objects (bcode state, workspace files, recordings, downloads, staging uploads)
        for every run in the session. Same cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer
        physical deletion. V4 analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live sibling run
        are deferred by the same guards the cron uses.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Project is not ZDR-enabled. Session not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            self._with_raw_response.purge_session_sessions_session_id_purge_post(
                session_id, request_options=request_options
            ),
        )

    def queue_session_message_sessions_session_id_queue_post(
        self,
        session_id: UUID,
        body: QueueMessageRequest | QueueMessageRequestDict,
        *,
        x_v4_queue_deduplicate: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QueuedMessage:
        """Send a message to a session. If the session is busy it waits on the queue and runs as the next turn; if idle
        it drains immediately.

        ``interrupt=true`` cancels the session's active run so this message takes effect now instead of waiting for the
        current turn (no-op when the session is idle).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            x_v4_queue_deduplicate: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The project has no credits available, or the authenticating API key has reached its recorded
                monthly total-spend soft stop. Zero Data Retention is enabled on the project (V4 unsupported). Run,
                session, workspace, or profile not found. The session message queue is full. Validation Error ``error``
                is ``ApiKeySpendLimitError | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.queue_session_message_sessions_session_id_queue_post(
                session_id, body, x_v4_queue_deduplicate=x_v4_queue_deduplicate, request_options=request_options
            ),
        )

    def update_session_cost_cap_sessions_session_id_cost_cap_patch(
        self,
        session_id: UUID,
        body: SessionCostCapRequest | SessionCostCapRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SessionCostCapResponse:
        """Update the active run cap without starting another run.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_session_cost_cap_sessions_session_id_cost_cap_patch(
                session_id, body, request_options=request_options
            ),
        )

    def update_session_sessions_session_id_patch(
        self,
        session_id: UUID,
        body: SessionUpdateRequest | SessionUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SessionInfo:
        """Rename a session.

        ``session_title`` is denormalized onto every run in the session (the session list reads the latest run), so a
        rename writes them all in one UPDATE. Null clears the name and the UI falls back to the opening task — it does
        NOT re-run title generation, which only fills rows where the title IS NULL and so would silently overwrite the
        clear.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_session_sessions_session_id_patch(
                session_id, body, request_options=request_options
            ),
        )

    def update_session_share_sessions_session_id_share_put(
        self,
        session_id: UUID,
        body: SessionShareUpdateRequest | SessionShareUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SessionShareInfo:
        """Toggle the session's share link on/off.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_session_share_sessions_session_id_share_put(
                session_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SessionsWithRawResponse:
        return self._with_raw_response


class AsyncSessions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSessionsWithRawResponse(client, server, auth)

    async def cancel_queued_message_sessions_session_id_queue_message_id_delete(
        self, session_id: UUID, message_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QueuedMessage:
        """Remove a still-pending queued message; 409 once the drain has claimed it.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. The message is no longer pending and cannot be cancelled. Validation Error ``error``
                is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_queued_message_sessions_session_id_queue_message_id_delete(
                session_id, message_id, request_options=request_options
            ),
        )

    async def create_session_share_sessions_session_id_share_post(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SessionShareInfo:
        """Enable sharing: reactivates the session's existing share (stable token, so a link that was toggled off keeps
        working when re-enabled) or creates one on first use.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_session_share_sessions_session_id_share_post(
                session_id, request_options=request_options
            ),
        )

    async def delete_session_sessions_session_id_delete(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a session: it disappears from the session lists and can no longer be opened or continued.

        Soft delete (mirrors V2's ``is_archived``): the runs, events and usage records stay in place so billing and
        analytics keep reconciling, and ZDR purge is the only thing that ever destroys V4 content. Idempotent — deleting
        twice is a no-op 204.

        An in-flight run is cancelled first, and pending queued messages are cancelled too; otherwise the drain would
        dispatch a follow-up run whose ``session_archived_at`` is NULL and resurrect the session. Cancel is forwarded to
        CP before anything is written (and outside the queue lock, per the enqueue path's ordering), so a CP failure
        (502) leaves the session visible rather than hiding a run that is still burning credits.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. The request could not be forwarded to the control plane. The run is finishing; retry
                the cancel after Retry-After seconds. Validation Error ``error`` is ``HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_session_sessions_session_id_delete(
                session_id, request_options=request_options
            ),
        )

    async def get_session_cost_sessions_session_id_cost_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SessionCostResponse:
        """Everything this session has cost so far, split by source.

        A run's ``total_cost_usd`` is its LLM (and web-search) charge only. Browser time and proxy bandwidth are metered
        against the session's browser, which outlives any one run — so this is the endpoint for the session's full cost.

        These are recorded usage costs, not an invoice total: promotional waivers and credits are applied downstream in
        billing, so a session run under a promotion can report cost here that was never charged.

        Costs keep moving after a run reports ``finished``: LLM calls settle up to about 90 seconds later, and the
        browser accrues time and proxy traffic until it stops.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_cost_sessions_session_id_cost_get(
                session_id, request_options=request_options
            ),
        )

    async def get_session_queue_message_sessions_session_id_queue_message_id_get(
        self, session_id: UUID, message_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QueuedMessage:
        """Read one queued message including terminal handoff states.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_queue_message_sessions_session_id_queue_message_id_get(
                session_id, message_id, request_options=request_options
            ),
        )

    async def get_session_sessions_session_id_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SessionInfo:
        """Session detail — the same slim shape as one GET /sessions row (its latest run). Doubles as the busy/idle poll
        for a conversation (POLL rate bucket): slim columns only, indexed public_session_id lookup, never the heavy
        result/token fields.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_sessions_session_id_get(
                session_id, request_options=request_options
            ),
        )

    async def get_session_share_sessions_session_id_share_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SessionShareInfo:
        """The session's share link (active or not); null if never shared.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_share_sessions_session_id_share_get(
                session_id, request_options=request_options
            ),
        )

    async def list_session_queue_sessions_session_id_queue_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QueueListResponse:
        """List open messages, recently delivered queued messages, and steering cutoffs.

        Includes live dispatch claims so clients can restore an accepted queued message after a refresh without briefly
        losing its waiting state.

        Consumed QUEUE rows are returned too, capped at the most recent _DELIVERED_QUEUE_HISTORY, plus up to
        _AGENCY_DELIVERED_QUEUE_HISTORY compact Agency choice and generation receipts so inbox state survives refresh. A
        message absorbed mid-run is announced by a ``queued_input_injected`` event carrying only its input id, so the
        chat has no other source for the text to render. The cap bounds this response because clients poll it while a
        run is active; a session with more delivered follow-ups than the cap renders its oldest injected bubbles without
        text.

        The latest consumed interrupt bridges the primary-write/read-replica gap before its replacement run appears;
        clients discard it once that run is visible. Compact per-source cutoffs preserve every historical interrupted
        transcript boundary without returning every historical steering message and its attachments.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_session_queue_sessions_session_id_queue_get(
                session_id, request_options=request_options
            ),
        )

    async def list_sessions_sessions_get(
        self,
        *,
        limit: int | None = 20,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SessionListResponse:
        """List the project's V4 sessions — one row per session (its most recent run), most-recent first.

        A session is a conversation: follow-up runs reuse the same public_session_id, so GET /api/v4/runs would list one
        row per RUN. This collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a chatty session
        with 100 runs is still a single row (no scan amplification), and selects only the slim columns the session list
        needs — never the heavy per-run text/token/cost fields.

        Keyset-paginated on the latest run's (created_at, id): pass ``next_cursor`` back as ``cursor`` to page.
        Offset/COUNT was dropped — it doesn't scale on projects with many sessions.

        Args:
            limit: Max sessions per page (max 100).
            cursor: Keyset cursor from a prior response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Malformed pagination cursor.
                Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sessions_sessions_get(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def purge_session_sessions_session_id_purge_post(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Purge V4 session data; return 202 while active work or uploads defer deletion.

        Redacts DB records and deletes S3 objects (bcode state, workspace files, recordings, downloads, staging uploads)
        for every run in the session. Same cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer
        physical deletion. V4 analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live sibling run
        are deferred by the same guards the cron uses.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Project is not ZDR-enabled. Session not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.purge_session_sessions_session_id_purge_post(
                session_id, request_options=request_options
            ),
        )

    async def queue_session_message_sessions_session_id_queue_post(
        self,
        session_id: UUID,
        body: QueueMessageRequest | QueueMessageRequestDict,
        *,
        x_v4_queue_deduplicate: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QueuedMessage:
        """Send a message to a session. If the session is busy it waits on the queue and runs as the next turn; if idle
        it drains immediately.

        ``interrupt=true`` cancels the session's active run so this message takes effect now instead of waiting for the
        current turn (no-op when the session is idle).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            x_v4_queue_deduplicate: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The project has no credits available, or the authenticating API key has reached its recorded
                monthly total-spend soft stop. Zero Data Retention is enabled on the project (V4 unsupported). Run,
                session, workspace, or profile not found. The session message queue is full. Validation Error ``error``
                is ``ApiKeySpendLimitError | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.queue_session_message_sessions_session_id_queue_post(
                session_id, body, x_v4_queue_deduplicate=x_v4_queue_deduplicate, request_options=request_options
            ),
        )

    async def update_session_cost_cap_sessions_session_id_cost_cap_patch(
        self,
        session_id: UUID,
        body: SessionCostCapRequest | SessionCostCapRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SessionCostCapResponse:
        """Update the active run cap without starting another run.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_session_cost_cap_sessions_session_id_cost_cap_patch(
                session_id, body, request_options=request_options
            ),
        )

    async def update_session_sessions_session_id_patch(
        self,
        session_id: UUID,
        body: SessionUpdateRequest | SessionUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SessionInfo:
        """Rename a session.

        ``session_title`` is denormalized onto every run in the session (the session list reads the latest run), so a
        rename writes them all in one UPDATE. Null clears the name and the UI falls back to the opening task — it does
        NOT re-run title generation, which only fills rows where the title IS NULL and so would silently overwrite the
        clear.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_session_sessions_session_id_patch(
                session_id, body, request_options=request_options
            ),
        )

    async def update_session_share_sessions_session_id_share_put(
        self,
        session_id: UUID,
        body: SessionShareUpdateRequest | SessionShareUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SessionShareInfo:
        """Toggle the session's share link on/off.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_session_share_sessions_session_id_share_put(
                session_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSessionsWithRawResponse:
        return self._with_raw_response


class SessionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_queued_message_sessions_session_id_queue_message_id_delete(
        self, session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QueuedMessage, CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody]:
        """Remove a still-pending queued message; 409 once the drain has claimed it.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sessions/{session_id}/queue/{message_id}"),
            path_params=[param[UUID]("session_id", session_id), param[int]("message_id", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[QueuedMessage],
            error_mapper=cancel_queued_message_sessions_session_id_queue_message_id_delete_error_mapper,
            request_options=request_options,
        )

    def create_session_share_sessions_session_id_share_post(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SessionShareInfo, CreateSessionShareSessionsSessionIdSharePostErrorBody]:
        """Enable sharing: reactivates the session's existing share (stable token, so a link that was toggled off keeps
        working when re-enabled) or creates one on first use.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sessions/{session_id}/share"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionShareInfo],
            error_mapper=create_session_share_sessions_session_id_share_post_error_mapper,
            request_options=request_options,
        )

    def delete_session_sessions_session_id_delete(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSessionSessionsSessionIdDeleteErrorBody]:
        """Delete a session: it disappears from the session lists and can no longer be opened or continued.

        Soft delete (mirrors V2's ``is_archived``): the runs, events and usage records stay in place so billing and
        analytics keep reconciling, and ZDR purge is the only thing that ever destroys V4 content. Idempotent — deleting
        twice is a no-op 204.

        An in-flight run is cancelled first, and pending queued messages are cancelled too; otherwise the drain would
        dispatch a follow-up run whose ``session_archived_at`` is NULL and resurrect the session. Cancel is forwarded to
        CP before anything is written (and outside the queue lock, per the enqueue path's ordering), so a CP failure
        (502) leaves the session visible rather than hiding a run that is still burning credits.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sessions/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=delete_session_sessions_session_id_delete_error_mapper,
            request_options=request_options,
        )

    def get_session_cost_sessions_session_id_cost_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SessionCostResponse, GetSessionCostSessionsSessionIdCostGetErrorBody]:
        """Everything this session has cost so far, split by source.

        A run's ``total_cost_usd`` is its LLM (and web-search) charge only. Browser time and proxy bandwidth are metered
        against the session's browser, which outlives any one run — so this is the endpoint for the session's full cost.

        These are recorded usage costs, not an invoice total: promotional waivers and credits are applied downstream in
        billing, so a session run under a promotion can report cost here that was never charged.

        Costs keep moving after a run reports ``finished``: LLM calls settle up to about 90 seconds later, and the
        browser accrues time and proxy traffic until it stops.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/cost"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionCostResponse],
            error_mapper=get_session_cost_sessions_session_id_cost_get_error_mapper,
            request_options=request_options,
        )

    def get_session_queue_message_sessions_session_id_queue_message_id_get(
        self, session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QueuedMessage, GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody]:
        """Read one queued message including terminal handoff states.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/queue/{message_id}"),
            path_params=[param[UUID]("session_id", session_id), param[int]("message_id", message_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[QueuedMessage],
            error_mapper=get_session_queue_message_sessions_session_id_queue_message_id_get_error_mapper,
            request_options=request_options,
        )

    def get_session_sessions_session_id_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SessionInfo, GetSessionSessionsSessionIdGetErrorBody]:
        """Session detail — the same slim shape as one GET /sessions row (its latest run). Doubles as the busy/idle poll
        for a conversation (POLL rate bucket): slim columns only, indexed public_session_id lookup, never the heavy
        result/token fields.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionInfo],
            error_mapper=get_session_sessions_session_id_get_error_mapper,
            request_options=request_options,
        )

    def get_session_share_sessions_session_id_share_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SessionShareInfo, GetSessionShareSessionsSessionIdShareGetErrorBody]:
        """The session's share link (active or not); null if never shared.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/share"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionShareInfo],
            error_mapper=get_session_share_sessions_session_id_share_get_error_mapper,
            request_options=request_options,
        )

    def list_session_queue_sessions_session_id_queue_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QueueListResponse, ListSessionQueueSessionsSessionIdQueueGetErrorBody]:
        """List open messages, recently delivered queued messages, and steering cutoffs.

        Includes live dispatch claims so clients can restore an accepted queued message after a refresh without briefly
        losing its waiting state.

        Consumed QUEUE rows are returned too, capped at the most recent _DELIVERED_QUEUE_HISTORY, plus up to
        _AGENCY_DELIVERED_QUEUE_HISTORY compact Agency choice and generation receipts so inbox state survives refresh. A
        message absorbed mid-run is announced by a ``queued_input_injected`` event carrying only its input id, so the
        chat has no other source for the text to render. The cap bounds this response because clients poll it while a
        run is active; a session with more delivered follow-ups than the cap renders its oldest injected bubbles without
        text.

        The latest consumed interrupt bridges the primary-write/read-replica gap before its replacement run appears;
        clients discard it once that run is visible. Compact per-source cutoffs preserve every historical interrupted
        transcript boundary without returning every historical steering message and its attachments.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/queue"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[QueueListResponse],
            error_mapper=list_session_queue_sessions_session_id_queue_get_error_mapper,
            request_options=request_options,
        )

    def list_sessions_sessions_get(
        self, *, limit: int | None = 20, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SessionListResponse, ListSessionsSessionsGetErrorBody]:
        """List the project's V4 sessions — one row per session (its most recent run), most-recent first.

        A session is a conversation: follow-up runs reuse the same public_session_id, so GET /api/v4/runs would list one
        row per RUN. This collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a chatty session
        with 100 runs is still a single row (no scan amplification), and selects only the slim columns the session list
        needs — never the heavy per-run text/token/cost fields.

        Keyset-paginated on the latest run's (created_at, id): pass ``next_cursor`` back as ``cursor`` to page.
        Offset/COUNT was dropped — it doesn't scale on projects with many sessions.

        Args:
            limit: Max sessions per page (max 100).
            cursor: Keyset cursor from a prior response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionListResponse],
            error_mapper=list_sessions_sessions_get_error_mapper,
            request_options=request_options,
        )

    def purge_session_sessions_session_id_purge_post(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PurgeSessionSessionsSessionIdPurgePostErrorBody]:
        """Purge V4 session data; return 202 while active work or uploads defer deletion.

        Redacts DB records and deletes S3 objects (bcode state, workspace files, recordings, downloads, staging uploads)
        for every run in the session. Same cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer
        physical deletion. V4 analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live sibling run
        are deferred by the same guards the cron uses.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sessions/{session_id}/purge"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=purge_session_sessions_session_id_purge_post_error_mapper,
            request_options=request_options,
        )

    def queue_session_message_sessions_session_id_queue_post(
        self,
        session_id: UUID,
        body: QueueMessageRequest | QueueMessageRequestDict,
        *,
        x_v4_queue_deduplicate: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QueuedMessage, QueueSessionMessageSessionsSessionIdQueuePostErrorBody]:
        """Send a message to a session. If the session is busy it waits on the queue and runs as the next turn; if idle
        it drains immediately.

        ``interrupt=true`` cancels the session's active run so this message takes effect now instead of waiting for the
        current turn (no-op when the session is idle).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            x_v4_queue_deduplicate: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sessions/{session_id}/queue"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[
                param[str | None]("X-V4-Queue-Deduplicate", x_v4_queue_deduplicate),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[QueueMessageRequest | QueueMessageRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[QueuedMessage],
            error_mapper=queue_session_message_sessions_session_id_queue_post_error_mapper,
            request_options=request_options,
        )

    def update_session_cost_cap_sessions_session_id_cost_cap_patch(
        self,
        session_id: UUID,
        body: SessionCostCapRequest | SessionCostCapRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionCostCapResponse, UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody]:
        """Update the active run cap without starting another run.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sessions/{session_id}/cost-cap"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SessionCostCapRequest | SessionCostCapRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionCostCapResponse],
            error_mapper=update_session_cost_cap_sessions_session_id_cost_cap_patch_error_mapper,
            request_options=request_options,
        )

    def update_session_sessions_session_id_patch(
        self,
        session_id: UUID,
        body: SessionUpdateRequest | SessionUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionInfo, UpdateSessionSessionsSessionIdPatchErrorBody]:
        """Rename a session.

        ``session_title`` is denormalized onto every run in the session (the session list reads the latest run), so a
        rename writes them all in one UPDATE. Null clears the name and the UI falls back to the opening task — it does
        NOT re-run title generation, which only fills rows where the title IS NULL and so would silently overwrite the
        clear.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sessions/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SessionUpdateRequest | SessionUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionInfo],
            error_mapper=update_session_sessions_session_id_patch_error_mapper,
            request_options=request_options,
        )

    def update_session_share_sessions_session_id_share_put(
        self,
        session_id: UUID,
        body: SessionShareUpdateRequest | SessionShareUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionShareInfo, UpdateSessionShareSessionsSessionIdSharePutErrorBody]:
        """Toggle the session's share link on/off.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sessions/{session_id}/share"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SessionShareUpdateRequest | SessionShareUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SessionShareInfo],
            error_mapper=update_session_share_sessions_session_id_share_put_error_mapper,
            request_options=request_options,
        )


class AsyncSessionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_queued_message_sessions_session_id_queue_message_id_delete(
        self, session_id: UUID, message_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QueuedMessage, CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody]:
        """Remove a still-pending queued message; 409 once the drain has claimed it.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sessions/{session_id}/queue/{message_id}"),
            path_params=[param[UUID]("session_id", session_id), param[int]("message_id", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[QueuedMessage],
            error_mapper=cancel_queued_message_sessions_session_id_queue_message_id_delete_error_mapper,
            request_options=request_options,
        )

    async def create_session_share_sessions_session_id_share_post(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SessionShareInfo, CreateSessionShareSessionsSessionIdSharePostErrorBody]:
        """Enable sharing: reactivates the session's existing share (stable token, so a link that was toggled off keeps
        working when re-enabled) or creates one on first use.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sessions/{session_id}/share"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionShareInfo],
            error_mapper=create_session_share_sessions_session_id_share_post_error_mapper,
            request_options=request_options,
        )

    async def delete_session_sessions_session_id_delete(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSessionSessionsSessionIdDeleteErrorBody]:
        """Delete a session: it disappears from the session lists and can no longer be opened or continued.

        Soft delete (mirrors V2's ``is_archived``): the runs, events and usage records stay in place so billing and
        analytics keep reconciling, and ZDR purge is the only thing that ever destroys V4 content. Idempotent — deleting
        twice is a no-op 204.

        An in-flight run is cancelled first, and pending queued messages are cancelled too; otherwise the drain would
        dispatch a follow-up run whose ``session_archived_at`` is NULL and resurrect the session. Cancel is forwarded to
        CP before anything is written (and outside the queue lock, per the enqueue path's ordering), so a CP failure
        (502) leaves the session visible rather than hiding a run that is still burning credits.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sessions/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=delete_session_sessions_session_id_delete_error_mapper,
            request_options=request_options,
        )

    async def get_session_cost_sessions_session_id_cost_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SessionCostResponse, GetSessionCostSessionsSessionIdCostGetErrorBody]:
        """Everything this session has cost so far, split by source.

        A run's ``total_cost_usd`` is its LLM (and web-search) charge only. Browser time and proxy bandwidth are metered
        against the session's browser, which outlives any one run — so this is the endpoint for the session's full cost.

        These are recorded usage costs, not an invoice total: promotional waivers and credits are applied downstream in
        billing, so a session run under a promotion can report cost here that was never charged.

        Costs keep moving after a run reports ``finished``: LLM calls settle up to about 90 seconds later, and the
        browser accrues time and proxy traffic until it stops.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/cost"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionCostResponse],
            error_mapper=get_session_cost_sessions_session_id_cost_get_error_mapper,
            request_options=request_options,
        )

    async def get_session_queue_message_sessions_session_id_queue_message_id_get(
        self, session_id: UUID, message_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QueuedMessage, GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody]:
        """Read one queued message including terminal handoff states.

        Args:
            session_id: Value sent with the request.
            message_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/queue/{message_id}"),
            path_params=[param[UUID]("session_id", session_id), param[int]("message_id", message_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[QueuedMessage],
            error_mapper=get_session_queue_message_sessions_session_id_queue_message_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_session_sessions_session_id_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SessionInfo, GetSessionSessionsSessionIdGetErrorBody]:
        """Session detail — the same slim shape as one GET /sessions row (its latest run). Doubles as the busy/idle poll
        for a conversation (POLL rate bucket): slim columns only, indexed public_session_id lookup, never the heavy
        result/token fields.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionInfo],
            error_mapper=get_session_sessions_session_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_session_share_sessions_session_id_share_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SessionShareInfo, GetSessionShareSessionsSessionIdShareGetErrorBody]:
        """The session's share link (active or not); null if never shared.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/share"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionShareInfo],
            error_mapper=get_session_share_sessions_session_id_share_get_error_mapper,
            request_options=request_options,
        )

    async def list_session_queue_sessions_session_id_queue_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QueueListResponse, ListSessionQueueSessionsSessionIdQueueGetErrorBody]:
        """List open messages, recently delivered queued messages, and steering cutoffs.

        Includes live dispatch claims so clients can restore an accepted queued message after a refresh without briefly
        losing its waiting state.

        Consumed QUEUE rows are returned too, capped at the most recent _DELIVERED_QUEUE_HISTORY, plus up to
        _AGENCY_DELIVERED_QUEUE_HISTORY compact Agency choice and generation receipts so inbox state survives refresh. A
        message absorbed mid-run is announced by a ``queued_input_injected`` event carrying only its input id, so the
        chat has no other source for the text to render. The cap bounds this response because clients poll it while a
        run is active; a session with more delivered follow-ups than the cap renders its oldest injected bubbles without
        text.

        The latest consumed interrupt bridges the primary-write/read-replica gap before its replacement run appears;
        clients discard it once that run is visible. Compact per-source cutoffs preserve every historical interrupted
        transcript boundary without returning every historical steering message and its attachments.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions/{session_id}/queue"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[QueueListResponse],
            error_mapper=list_session_queue_sessions_session_id_queue_get_error_mapper,
            request_options=request_options,
        )

    async def list_sessions_sessions_get(
        self,
        *,
        limit: int | None = 20,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionListResponse, ListSessionsSessionsGetErrorBody]:
        """List the project's V4 sessions — one row per session (its most recent run), most-recent first.

        A session is a conversation: follow-up runs reuse the same public_session_id, so GET /api/v4/runs would list one
        row per RUN. This collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a chatty session
        with 100 runs is still a single row (no scan amplification), and selects only the slim columns the session list
        needs — never the heavy per-run text/token/cost fields.

        Keyset-paginated on the latest run's (created_at, id): pass ``next_cursor`` back as ``cursor`` to page.
        Offset/COUNT was dropped — it doesn't scale on projects with many sessions.

        Args:
            limit: Max sessions per page (max 100).
            cursor: Keyset cursor from a prior response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sessions"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionListResponse],
            error_mapper=list_sessions_sessions_get_error_mapper,
            request_options=request_options,
        )

    async def purge_session_sessions_session_id_purge_post(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PurgeSessionSessionsSessionIdPurgePostErrorBody]:
        """Purge V4 session data; return 202 while active work or uploads defer deletion.

        Redacts DB records and deletes S3 objects (bcode state, workspace files, recordings, downloads, staging uploads)
        for every run in the session. Same cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer
        physical deletion. V4 analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live sibling run
        are deferred by the same guards the cron uses.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sessions/{session_id}/purge"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=purge_session_sessions_session_id_purge_post_error_mapper,
            request_options=request_options,
        )

    async def queue_session_message_sessions_session_id_queue_post(
        self,
        session_id: UUID,
        body: QueueMessageRequest | QueueMessageRequestDict,
        *,
        x_v4_queue_deduplicate: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QueuedMessage, QueueSessionMessageSessionsSessionIdQueuePostErrorBody]:
        """Send a message to a session. If the session is busy it waits on the queue and runs as the next turn; if idle
        it drains immediately.

        ``interrupt=true`` cancels the session's active run so this message takes effect now instead of waiting for the
        current turn (no-op when the session is idle).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            x_v4_queue_deduplicate: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sessions/{session_id}/queue"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[
                param[str | None]("X-V4-Queue-Deduplicate", x_v4_queue_deduplicate),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[QueueMessageRequest | QueueMessageRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[QueuedMessage],
            error_mapper=queue_session_message_sessions_session_id_queue_post_error_mapper,
            request_options=request_options,
        )

    async def update_session_cost_cap_sessions_session_id_cost_cap_patch(
        self,
        session_id: UUID,
        body: SessionCostCapRequest | SessionCostCapRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionCostCapResponse, UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody]:
        """Update the active run cap without starting another run.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sessions/{session_id}/cost-cap"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SessionCostCapRequest | SessionCostCapRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionCostCapResponse],
            error_mapper=update_session_cost_cap_sessions_session_id_cost_cap_patch_error_mapper,
            request_options=request_options,
        )

    async def update_session_sessions_session_id_patch(
        self,
        session_id: UUID,
        body: SessionUpdateRequest | SessionUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionInfo, UpdateSessionSessionsSessionIdPatchErrorBody]:
        """Rename a session.

        ``session_title`` is denormalized onto every run in the session (the session list reads the latest run), so a
        rename writes them all in one UPDATE. Null clears the name and the UI falls back to the opening task — it does
        NOT re-run title generation, which only fills rows where the title IS NULL and so would silently overwrite the
        clear.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sessions/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SessionUpdateRequest | SessionUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionInfo],
            error_mapper=update_session_sessions_session_id_patch_error_mapper,
            request_options=request_options,
        )

    async def update_session_share_sessions_session_id_share_put(
        self,
        session_id: UUID,
        body: SessionShareUpdateRequest | SessionShareUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionShareInfo, UpdateSessionShareSessionsSessionIdSharePutErrorBody]:
        """Toggle the session's share link on/off.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sessions/{session_id}/share"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SessionShareUpdateRequest | SessionShareUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SessionShareInfo],
            error_mapper=update_session_share_sessions_session_id_share_put_error_mapper,
            request_options=request_options,
        )
