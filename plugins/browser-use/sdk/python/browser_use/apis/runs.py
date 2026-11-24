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
from ..errors.cancel_run_runs_run_id_cancel_post_error import (
    CancelRunRunsRunIdCancelPostErrorBody,
    cancel_run_runs_run_id_cancel_post_error_mapper,
)
from ..errors.create_run_runs_post_error import CreateRunRunsPostErrorBody, create_run_runs_post_error_mapper
from ..errors.get_run_events_runs_run_id_events_get_error import (
    GetRunEventsRunsRunIdEventsGetErrorBody,
    get_run_events_runs_run_id_events_get_error_mapper,
)
from ..errors.get_run_runs_run_id_get_error import GetRunRunsRunIdGetErrorBody, get_run_runs_run_id_get_error_mapper
from ..errors.get_run_status_runs_run_id_status_get_error import (
    GetRunStatusRunsRunIdStatusGetErrorBody,
    get_run_status_runs_run_id_status_get_error_mapper,
)
from ..errors.list_run_attachments_runs_run_id_attachments_get_error import (
    ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody,
    list_run_attachments_runs_run_id_attachments_get_error_mapper,
)
from ..errors.list_runs_runs_get_error import ListRunsRunsGetErrorBody, list_runs_runs_get_error_mapper
from ..models.run_attachments_response import RunAttachmentsResponse
from ..models.run_create_request import RunCreateRequest, RunCreateRequestDict
from ..models.run_create_response import RunCreateResponse
from ..models.run_events_response import RunEventsResponse
from ..models.run_list_response import RunListResponse
from ..models.run_status_response import RunStatusResponse
from ..models.run_summary import RunSummary
from ..server.server import Server


class Runs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RunsWithRawResponse(client, server, auth)

    def cancel_run_runs_run_id_cancel_post(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunSummary:
        """Cancel an in-flight run.

        Idempotent: a run already in a terminal state (completed / failed / cancelled) is returned as-is. Once
        cancelled, the gateway refuses every subsequent ``chat_completions`` call from the worker — so the project
        cannot be billed further regardless of whether the worker subprocess notices the cancel itself.

        The worker keeps running for at most one more bcode step (consuming no LLM tokens because CP 409s them) and then
        exits when bcode realizes the next tool call has no model behind it.

        Args:
            run_id: Value sent with the request.
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
            self._with_raw_response.cancel_run_runs_run_id_cancel_post(run_id, request_options=request_options)
        )

    def create_run_runs_post(
        self, body: RunCreateRequest | RunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunCreateResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid request (bad session/workspace pairing or file path). The project has no credits
                available, or the authenticating API key has reached its recorded monthly total-spend soft stop. Zero
                Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or profile not
                found. The session already has an active run. The project is at its concurrent-session limit. Validation
                Error ``error`` is ``ApiKeySpendLimitError | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_run_runs_post(body, request_options=request_options))

    def get_run_events_runs_run_id_events_get(
        self,
        run_id: UUID,
        *,
        limit: int | None = 200,
        after: int | None = 0,
        include_output: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunEventsResponse:
        """Paginated event read. ``after`` is the event id cursor — clients doing periodic polls pass back the highest
        id they've seen to get only the delta. Default 0 returns from the start.

        Args:
            run_id: Value sent with the request.
            limit: Value sent with the request.
            after: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_run_events_runs_run_id_events_get(
                run_id, limit=limit, after=after, include_output=include_output, request_options=request_options
            ),
        )

    def get_run_runs_run_id_get(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunSummary:
        """Send a ``GET`` request.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_run_runs_run_id_get(run_id, request_options=request_options))

    def get_run_status_runs_run_id_status_get(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunStatusResponse:
        """Minimal status poll (see RunStatusResponse). POLL rate bucket: selects ONLY the status/project columns — a 2s
        poll never drags the task/result text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then fetch
        the full summary once.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_run_status_runs_run_id_status_get(run_id, request_options=request_options)
        )

    def list_run_attachments_runs_run_id_attachments_get(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunAttachmentsResponse:
        """The upload files attached to a run, for rendering attachment chips. Ordered to match the run's
        attached_file_ids.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_run_attachments_runs_run_id_attachments_get(
                run_id, request_options=request_options
            ),
        )

    def list_runs_runs_get(
        self,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        session_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunListResponse:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: Keyset cursor from a prior response.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Malformed pagination cursor.
                Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_runs_runs_get(
                limit=limit, cursor=cursor, session_id=session_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RunsWithRawResponse:
        return self._with_raw_response


class AsyncRuns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRunsWithRawResponse(client, server, auth)

    async def cancel_run_runs_run_id_cancel_post(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunSummary:
        """Cancel an in-flight run.

        Idempotent: a run already in a terminal state (completed / failed / cancelled) is returned as-is. Once
        cancelled, the gateway refuses every subsequent ``chat_completions`` call from the worker — so the project
        cannot be billed further regardless of whether the worker subprocess notices the cancel itself.

        The worker keeps running for at most one more bcode step (consuming no LLM tokens because CP 409s them) and then
        exits when bcode realizes the next tool call has no model behind it.

        Args:
            run_id: Value sent with the request.
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
            await self._with_raw_response.cancel_run_runs_run_id_cancel_post(run_id, request_options=request_options)
        )

    async def create_run_runs_post(
        self, body: RunCreateRequest | RunCreateRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunCreateResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid request (bad session/workspace pairing or file path). The project has no credits
                available, or the authenticating API key has reached its recorded monthly total-spend soft stop. Zero
                Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or profile not
                found. The session already has an active run. The project is at its concurrent-session limit. Validation
                Error ``error`` is ``ApiKeySpendLimitError | HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.create_run_runs_post(body, request_options=request_options))

    async def get_run_events_runs_run_id_events_get(
        self,
        run_id: UUID,
        *,
        limit: int | None = 200,
        after: int | None = 0,
        include_output: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunEventsResponse:
        """Paginated event read. ``after`` is the event id cursor — clients doing periodic polls pass back the highest
        id they've seen to get only the delta. Default 0 returns from the start.

        Args:
            run_id: Value sent with the request.
            limit: Value sent with the request.
            after: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_run_events_runs_run_id_events_get(
                run_id, limit=limit, after=after, include_output=include_output, request_options=request_options
            ),
        )

    async def get_run_runs_run_id_get(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunSummary:
        """Send a ``GET`` request.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.get_run_runs_run_id_get(run_id, request_options=request_options))

    async def get_run_status_runs_run_id_status_get(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunStatusResponse:
        """Minimal status poll (see RunStatusResponse). POLL rate bucket: selects ONLY the status/project columns — a 2s
        poll never drags the task/result text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then fetch
        the full summary once.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_run_status_runs_run_id_status_get(run_id, request_options=request_options)
        )

    async def list_run_attachments_runs_run_id_attachments_get(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunAttachmentsResponse:
        """The upload files attached to a run, for rendering attachment chips. Ordered to match the run's
        attached_file_ids.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_run_attachments_runs_run_id_attachments_get(
                run_id, request_options=request_options
            ),
        )

    async def list_runs_runs_get(
        self,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        session_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunListResponse:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: Keyset cursor from a prior response.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Malformed pagination cursor.
                Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_runs_runs_get(
                limit=limit, cursor=cursor, session_id=session_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRunsWithRawResponse:
        return self._with_raw_response


class RunsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_run_runs_run_id_cancel_post(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunSummary, CancelRunRunsRunIdCancelPostErrorBody]:
        """Cancel an in-flight run.

        Idempotent: a run already in a terminal state (completed / failed / cancelled) is returned as-is. Once
        cancelled, the gateway refuses every subsequent ``chat_completions`` call from the worker — so the project
        cannot be billed further regardless of whether the worker subprocess notices the cancel itself.

        The worker keeps running for at most one more bcode step (consuming no LLM tokens because CP 409s them) and then
        exits when bcode realizes the next tool call has no model behind it.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/runs/{run_id}/cancel"),
            path_params=[param[UUID]("run_id", run_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunSummary],
            error_mapper=cancel_run_runs_run_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    def create_run_runs_post(
        self, body: RunCreateRequest | RunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunCreateResponse, CreateRunRunsPostErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/runs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunCreateRequest | RunCreateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunCreateResponse],
            error_mapper=create_run_runs_post_error_mapper,
            request_options=request_options,
        )

    def get_run_events_runs_run_id_events_get(
        self,
        run_id: UUID,
        *,
        limit: int | None = 200,
        after: int | None = 0,
        include_output: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunEventsResponse, GetRunEventsRunsRunIdEventsGetErrorBody]:
        """Paginated event read. ``after`` is the event id cursor — clients doing periodic polls pass back the highest
        id they've seen to get only the delta. Default 0 returns from the start.

        Args:
            run_id: Value sent with the request.
            limit: Value sent with the request.
            after: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}/events"),
            path_params=[param[UUID]("run_id", run_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("after", after),
                param[bool | None]("include_output", include_output),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunEventsResponse],
            error_mapper=get_run_events_runs_run_id_events_get_error_mapper,
            request_options=request_options,
        )

    def get_run_runs_run_id_get(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunSummary, GetRunRunsRunIdGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}"),
            path_params=[param[UUID]("run_id", run_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunSummary],
            error_mapper=get_run_runs_run_id_get_error_mapper,
            request_options=request_options,
        )

    def get_run_status_runs_run_id_status_get(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunStatusResponse, GetRunStatusRunsRunIdStatusGetErrorBody]:
        """Minimal status poll (see RunStatusResponse). POLL rate bucket: selects ONLY the status/project columns — a 2s
        poll never drags the task/result text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then fetch
        the full summary once.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}/status"),
            path_params=[param[UUID]("run_id", run_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunStatusResponse],
            error_mapper=get_run_status_runs_run_id_status_get_error_mapper,
            request_options=request_options,
        )

    def list_run_attachments_runs_run_id_attachments_get(
        self, run_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunAttachmentsResponse, ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody]:
        """The upload files attached to a run, for rendering attachment chips. Ordered to match the run's
        attached_file_ids.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}/attachments"),
            path_params=[param[UUID]("run_id", run_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunAttachmentsResponse],
            error_mapper=list_run_attachments_runs_run_id_attachments_get_error_mapper,
            request_options=request_options,
        )

    def list_runs_runs_get(
        self,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        session_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunListResponse, ListRunsRunsGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: Keyset cursor from a prior response.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[UUID | None]("sessionId", session_id),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[RunListResponse],
            error_mapper=list_runs_runs_get_error_mapper,
            request_options=request_options,
        )


class AsyncRunsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_run_runs_run_id_cancel_post(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunSummary, CancelRunRunsRunIdCancelPostErrorBody]:
        """Cancel an in-flight run.

        Idempotent: a run already in a terminal state (completed / failed / cancelled) is returned as-is. Once
        cancelled, the gateway refuses every subsequent ``chat_completions`` call from the worker — so the project
        cannot be billed further regardless of whether the worker subprocess notices the cancel itself.

        The worker keeps running for at most one more bcode step (consuming no LLM tokens because CP 409s them) and then
        exits when bcode realizes the next tool call has no model behind it.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/runs/{run_id}/cancel"),
            path_params=[param[UUID]("run_id", run_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunSummary],
            error_mapper=cancel_run_runs_run_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    async def create_run_runs_post(
        self, body: RunCreateRequest | RunCreateRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunCreateResponse, CreateRunRunsPostErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/runs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunCreateRequest | RunCreateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunCreateResponse],
            error_mapper=create_run_runs_post_error_mapper,
            request_options=request_options,
        )

    async def get_run_events_runs_run_id_events_get(
        self,
        run_id: UUID,
        *,
        limit: int | None = 200,
        after: int | None = 0,
        include_output: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunEventsResponse, GetRunEventsRunsRunIdEventsGetErrorBody]:
        """Paginated event read. ``after`` is the event id cursor — clients doing periodic polls pass back the highest
        id they've seen to get only the delta. Default 0 returns from the start.

        Args:
            run_id: Value sent with the request.
            limit: Value sent with the request.
            after: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}/events"),
            path_params=[param[UUID]("run_id", run_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("after", after),
                param[bool | None]("include_output", include_output),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunEventsResponse],
            error_mapper=get_run_events_runs_run_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def get_run_runs_run_id_get(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunSummary, GetRunRunsRunIdGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}"),
            path_params=[param[UUID]("run_id", run_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunSummary],
            error_mapper=get_run_runs_run_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_run_status_runs_run_id_status_get(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunStatusResponse, GetRunStatusRunsRunIdStatusGetErrorBody]:
        """Minimal status poll (see RunStatusResponse). POLL rate bucket: selects ONLY the status/project columns — a 2s
        poll never drags the task/result text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then fetch
        the full summary once.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}/status"),
            path_params=[param[UUID]("run_id", run_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunStatusResponse],
            error_mapper=get_run_status_runs_run_id_status_get_error_mapper,
            request_options=request_options,
        )

    async def list_run_attachments_runs_run_id_attachments_get(
        self, run_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunAttachmentsResponse, ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody]:
        """The upload files attached to a run, for rendering attachment chips. Ordered to match the run's
        attached_file_ids.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs/{run_id}/attachments"),
            path_params=[param[UUID]("run_id", run_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunAttachmentsResponse],
            error_mapper=list_run_attachments_runs_run_id_attachments_get_error_mapper,
            request_options=request_options,
        )

    async def list_runs_runs_get(
        self,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        session_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunListResponse, ListRunsRunsGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: Keyset cursor from a prior response.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runs"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[UUID | None]("sessionId", session_id),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[RunListResponse],
            error_mapper=list_runs_runs_get_error_mapper,
            request_options=request_options,
        )
