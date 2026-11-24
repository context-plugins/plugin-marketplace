from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_watch_error import CreateWatchErrorBody, create_watch_error_mapper
from ..errors.delete_watch_error import DeleteWatchErrorBody, delete_watch_error_mapper
from ..errors.get_watch_error import GetWatchErrorBody, get_watch_error_mapper
from ..errors.list_watch_runs_error import ListWatchRunsErrorBody, list_watch_runs_error_mapper
from ..errors.run_watch_now_error import RunWatchNowErrorBody, run_watch_now_error_mapper
from ..errors.test_watch_error import TestWatchErrorBody, test_watch_error_mapper
from ..errors.update_watch_error import UpdateWatchErrorBody, update_watch_error_mapper
from ..models.create_watch_request import CreateWatchRequest, CreateWatchRequestDict
from ..models.enums.status2_rendex_rendering_watch_api import (
    Status2RendexRenderingWatchApi,
    Status2RendexRenderingWatchApiOrStr,
)
from ..models.update_watch_request import UpdateWatchRequest, UpdateWatchRequestDict
from ..models.v1_watches_response import V1WatchesResponse
from ..models.v1_watches_response1 import V1WatchesResponse1
from ..models.v1_watches_run_response import V1WatchesRunResponse
from ..models.v1_watches_runs_response import V1WatchesRunsResponse
from ..models.v1_watches_test_response import V1WatchesTestResponse
from ..server.server import Server


class WatchApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WatchApiWithRawResponse(client, server, auth)

    def create_watch(
        self, body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WatchesResponse:
        """Start monitoring a URL for changes. Rendex renders the page in real Chrome on your schedule, runs a
        before/after visual diff (and/or a text diff), and alerts you over a webhook and/or email when it changes. An
        active watch captures its baseline immediately, drawing 1 credit from your shared pool; a failed check is
        refunded. The same ``rdx_`` key and credit pool as the rendering endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watch created (baseline run enqueued when active)

        Raises:
            ApiError: Invalid parameters, SSRF/Safe-Browsing block, or an incompatible combination (pdf + a visual
                diffMode, or geo + a text diffMode) Plan wall — watch cap (WATCH_LIMIT_REACHED; counts active + paused
                watches), per-host cap (WATCH_HOST_LIMIT_REACHED), interval floor (WATCH_INTERVAL_TOO_FAST), or a
                paid-only channel (webhook = Starter+, AI summary & geo = Pro+). Monthly credit pool exhausted (hard
                cap, no overage) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_watch(body, request_options=request_options))

    def delete_watch(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted (run rows cascade; stored images age out via the bucket lifecycle)

        Raises:
            ApiError: Watch not found — WATCH_NOT_FOUND ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_watch(id_, request_options=request_options))

    def get_watch(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesResponse:
        """Fetch a single watch by id, including its current status and configuration.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The watch

        Raises:
            ApiError: Watch not found (or not owned by the caller) — WATCH_NOT_FOUND ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_watch(id_, request_options=request_options))

    def list_watch_runs(
        self,
        id_: UUID,
        *,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WatchesRunsResponse:
        """Newest first. Each run carries short-lived signed before/after/overlay image URLs.

        Args:
            id_: Watch UUID
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of runs, newest first

        Raises:
            ApiError: Watch not found — WATCH_NOT_FOUND ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_watch_runs(id_, cursor=cursor, limit=limit, request_options=request_options)
        )

    def list_watches(
        self,
        *,
        status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WatchesResponse1:
        """List your watches, newest first. Filter by state and page with the cursor.

        Args:
            status: Filter by state
            cursor: Opaque pagination cursor from a prior response's nextCursor
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of watches, newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_watches(
                status=status, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    def run_watch_now(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesRunResponse:
        """Enqueue an immediate check (draws 1 credit). The watch must be active.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Run enqueued

        Raises:
            ApiError: Watch not found (or not owned by the caller) — WATCH_NOT_FOUND Watch is paused — resume it before
                running (WATCH_PAUSED) Monthly credit pool exhausted (hard cap, no overage) ``error`` is ``ErrorResponse
                | RawError``."""
        return unwrap(self._with_raw_response.run_watch_now(id_, request_options=request_options))

    def test_watch(
        self, body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WatchesTestResponse:
        """Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks,
        geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can
        validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule.
        Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A
        blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Render result (reachable or not — both are valid test outcomes)

        Raises:
            ApiError: Invalid config, SSRF-blocked URL, or unsafe URL Paid-only feature on a free plan — the dry-run
                applies the same paid-feature gate as create (but NO watch-count/interval walls, since a test creates
                nothing). Today only URL-embedded credentials (``user:pass@host``) bite here: free plans get
                PLAN_UPGRADE_REQUIRED. Monthly credit pool exhausted (hard cap, no overage) ``error`` is ``ErrorResponse
                | RawError``."""
        return unwrap(self._with_raw_response.test_watch(body, request_options=request_options))

    def update_watch(
        self,
        id_: UUID,
        body: UpdateWatchRequest | UpdateWatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WatchesResponse:
        """All fields optional. Set ``paused`` true to pause or false to resume. ``webhookUrl`` and ``notifyEmail``
        accept ``null`` to switch a channel off.

        **renderParams is MERGED, not replaced.** A partial ``renderParams`` is deep-merged over the watch's existing
        render config, so you can change one knob (e.g. ``{ "renderParams": { "darkMode": true } }``) without re-sending
        the whole object. To clear a knob, set it to its default explicitly.

        **Re-baselining.** Changing ``url`` clears the baseline so the next run re-baselines. A renderParams edit that
        changes WHAT is captured (a scope change — e.g. ``selector``, ``fullPage``, ``width``/``height``, or ``device``)
        likewise invalidates the baseline and re-baselines on the next run; a noise-only edit (e.g. ``threshold``,
        ``ignoreRegions``) does not.

        Args:
            id_: Watch UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated watch

        Raises:
            ApiError: Plan wall (resume re-checks the caps; a faster interval or the webhook channel may be gated) Watch
                not found — WATCH_NOT_FOUND ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_watch(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WatchApiWithRawResponse:
        return self._with_raw_response


class AsyncWatchApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWatchApiWithRawResponse(client, server, auth)

    async def create_watch(
        self,
        body: CreateWatchRequest | CreateWatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WatchesResponse:
        """Start monitoring a URL for changes. Rendex renders the page in real Chrome on your schedule, runs a
        before/after visual diff (and/or a text diff), and alerts you over a webhook and/or email when it changes. An
        active watch captures its baseline immediately, drawing 1 credit from your shared pool; a failed check is
        refunded. The same ``rdx_`` key and credit pool as the rendering endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watch created (baseline run enqueued when active)

        Raises:
            ApiError: Invalid parameters, SSRF/Safe-Browsing block, or an incompatible combination (pdf + a visual
                diffMode, or geo + a text diffMode) Plan wall — watch cap (WATCH_LIMIT_REACHED; counts active + paused
                watches), per-host cap (WATCH_HOST_LIMIT_REACHED), interval floor (WATCH_INTERVAL_TOO_FAST), or a
                paid-only channel (webhook = Starter+, AI summary & geo = Pro+). Monthly credit pool exhausted (hard
                cap, no overage) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_watch(body, request_options=request_options))

    async def delete_watch(self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted (run rows cascade; stored images age out via the bucket lifecycle)

        Raises:
            ApiError: Watch not found — WATCH_NOT_FOUND ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_watch(id_, request_options=request_options))

    async def get_watch(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WatchesResponse:
        """Fetch a single watch by id, including its current status and configuration.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The watch

        Raises:
            ApiError: Watch not found (or not owned by the caller) — WATCH_NOT_FOUND ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_watch(id_, request_options=request_options))

    async def list_watch_runs(
        self,
        id_: UUID,
        *,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WatchesRunsResponse:
        """Newest first. Each run carries short-lived signed before/after/overlay image URLs.

        Args:
            id_: Watch UUID
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of runs, newest first

        Raises:
            ApiError: Watch not found — WATCH_NOT_FOUND ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_watch_runs(
                id_, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def list_watches(
        self,
        *,
        status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WatchesResponse1:
        """List your watches, newest first. Filter by state and page with the cursor.

        Args:
            status: Filter by state
            cursor: Opaque pagination cursor from a prior response's nextCursor
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of watches, newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_watches(
                status=status, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def run_watch_now(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WatchesRunResponse:
        """Enqueue an immediate check (draws 1 credit). The watch must be active.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Run enqueued

        Raises:
            ApiError: Watch not found (or not owned by the caller) — WATCH_NOT_FOUND Watch is paused — resume it before
                running (WATCH_PAUSED) Monthly credit pool exhausted (hard cap, no overage) ``error`` is ``ErrorResponse
                | RawError``."""
        return unwrap(await self._with_raw_response.run_watch_now(id_, request_options=request_options))

    async def test_watch(
        self,
        body: CreateWatchRequest | CreateWatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WatchesTestResponse:
        """Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks,
        geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can
        validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule.
        Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A
        blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Render result (reachable or not — both are valid test outcomes)

        Raises:
            ApiError: Invalid config, SSRF-blocked URL, or unsafe URL Paid-only feature on a free plan — the dry-run
                applies the same paid-feature gate as create (but NO watch-count/interval walls, since a test creates
                nothing). Today only URL-embedded credentials (``user:pass@host``) bite here: free plans get
                PLAN_UPGRADE_REQUIRED. Monthly credit pool exhausted (hard cap, no overage) ``error`` is ``ErrorResponse
                | RawError``."""
        return unwrap(await self._with_raw_response.test_watch(body, request_options=request_options))

    async def update_watch(
        self,
        id_: UUID,
        body: UpdateWatchRequest | UpdateWatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WatchesResponse:
        """All fields optional. Set ``paused`` true to pause or false to resume. ``webhookUrl`` and ``notifyEmail``
        accept ``null`` to switch a channel off.

        **renderParams is MERGED, not replaced.** A partial ``renderParams`` is deep-merged over the watch's existing
        render config, so you can change one knob (e.g. ``{ "renderParams": { "darkMode": true } }``) without re-sending
        the whole object. To clear a knob, set it to its default explicitly.

        **Re-baselining.** Changing ``url`` clears the baseline so the next run re-baselines. A renderParams edit that
        changes WHAT is captured (a scope change — e.g. ``selector``, ``fullPage``, ``width``/``height``, or ``device``)
        likewise invalidates the baseline and re-baselines on the next run; a noise-only edit (e.g. ``threshold``,
        ``ignoreRegions``) does not.

        Args:
            id_: Watch UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated watch

        Raises:
            ApiError: Plan wall (resume re-checks the caps; a faster interval or the webhook channel may be gated) Watch
                not found — WATCH_NOT_FOUND ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_watch(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWatchApiWithRawResponse:
        return self._with_raw_response


class WatchApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_watch(
        self, body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WatchesResponse, CreateWatchErrorBody]:
        """Start monitoring a URL for changes. Rendex renders the page in real Chrome on your schedule, runs a
        before/after visual diff (and/or a text diff), and alerts you over a webhook and/or email when it changes. An
        active watch captures its baseline immediately, drawing 1 credit from your shared pool; a failed check is
        refunded. The same ``rdx_`` key and credit pool as the rendering endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watches"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWatchRequest | CreateWatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesResponse],
            error_mapper=create_watch_error_mapper,
            request_options=request_options,
        )

    def delete_watch(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWatchErrorBody]:
        """Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/watches/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_watch_error_mapper,
            request_options=request_options,
        )

    def get_watch(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WatchesResponse, GetWatchErrorBody]:
        """Fetch a single watch by id, including its current status and configuration.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watches/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesResponse],
            error_mapper=get_watch_error_mapper,
            request_options=request_options,
        )

    def list_watch_runs(
        self,
        id_: UUID,
        *,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesRunsResponse, ListWatchRunsErrorBody]:
        """Newest first. Each run carries short-lived signed before/after/overlay image URLs.

        Args:
            id_: Watch UUID
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watches/{id}/runs"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesRunsResponse],
            error_mapper=list_watch_runs_error_mapper,
            request_options=request_options,
        )

    def list_watches(
        self,
        *,
        status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesResponse1, RawError]:
        """List your watches, newest first. Filter by state and page with the cursor.

        Args:
            status: Filter by state
            cursor: Opaque pagination cursor from a prior response's nextCursor
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watches"),
            query_params=[
                param[Status2RendexRenderingWatchApiOrStr | None]("status", status),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def run_watch_now(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WatchesRunResponse, RunWatchNowErrorBody]:
        """Enqueue an immediate check (draws 1 credit). The watch must be active.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watches/{id}/run"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesRunResponse],
            error_mapper=run_watch_now_error_mapper,
            request_options=request_options,
        )

    def test_watch(
        self, body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WatchesTestResponse, TestWatchErrorBody]:
        """Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks,
        geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can
        validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule.
        Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A
        blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watches/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWatchRequest | CreateWatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesTestResponse],
            error_mapper=test_watch_error_mapper,
            request_options=request_options,
        )

    def update_watch(
        self,
        id_: UUID,
        body: UpdateWatchRequest | UpdateWatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesResponse, UpdateWatchErrorBody]:
        """All fields optional. Set ``paused`` true to pause or false to resume. ``webhookUrl`` and ``notifyEmail``
        accept ``null`` to switch a channel off.

        **renderParams is MERGED, not replaced.** A partial ``renderParams`` is deep-merged over the watch's existing
        render config, so you can change one knob (e.g. ``{ "renderParams": { "darkMode": true } }``) without re-sending
        the whole object. To clear a knob, set it to its default explicitly.

        **Re-baselining.** Changing ``url`` clears the baseline so the next run re-baselines. A renderParams edit that
        changes WHAT is captured (a scope change — e.g. ``selector``, ``fullPage``, ``width``/``height``, or ``device``)
        likewise invalidates the baseline and re-baselines on the next run; a noise-only edit (e.g. ``threshold``,
        ``ignoreRegions``) does not.

        Args:
            id_: Watch UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/watches/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWatchRequest | UpdateWatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WatchesResponse],
            error_mapper=update_watch_error_mapper,
            request_options=request_options,
        )


class AsyncWatchApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_watch(
        self,
        body: CreateWatchRequest | CreateWatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesResponse, CreateWatchErrorBody]:
        """Start monitoring a URL for changes. Rendex renders the page in real Chrome on your schedule, runs a
        before/after visual diff (and/or a text diff), and alerts you over a webhook and/or email when it changes. An
        active watch captures its baseline immediately, drawing 1 credit from your shared pool; a failed check is
        refunded. The same ``rdx_`` key and credit pool as the rendering endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watches"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWatchRequest | CreateWatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesResponse],
            error_mapper=create_watch_error_mapper,
            request_options=request_options,
        )

    async def delete_watch(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWatchErrorBody]:
        """Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/watches/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_watch_error_mapper,
            request_options=request_options,
        )

    async def get_watch(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WatchesResponse, GetWatchErrorBody]:
        """Fetch a single watch by id, including its current status and configuration.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watches/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesResponse],
            error_mapper=get_watch_error_mapper,
            request_options=request_options,
        )

    async def list_watch_runs(
        self,
        id_: UUID,
        *,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesRunsResponse, ListWatchRunsErrorBody]:
        """Newest first. Each run carries short-lived signed before/after/overlay image URLs.

        Args:
            id_: Watch UUID
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watches/{id}/runs"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesRunsResponse],
            error_mapper=list_watch_runs_error_mapper,
            request_options=request_options,
        )

    async def list_watches(
        self,
        *,
        status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesResponse1, RawError]:
        """List your watches, newest first. Filter by state and page with the cursor.

        Args:
            status: Filter by state
            cursor: Opaque pagination cursor from a prior response's nextCursor
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watches"),
            query_params=[
                param[Status2RendexRenderingWatchApiOrStr | None]("status", status),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def run_watch_now(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WatchesRunResponse, RunWatchNowErrorBody]:
        """Enqueue an immediate check (draws 1 credit). The watch must be active.

        Args:
            id_: Watch UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watches/{id}/run"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesRunResponse],
            error_mapper=run_watch_now_error_mapper,
            request_options=request_options,
        )

    async def test_watch(
        self,
        body: CreateWatchRequest | CreateWatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesTestResponse, TestWatchErrorBody]:
        """Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks,
        geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can
        validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule.
        Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A
        blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watches/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWatchRequest | CreateWatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesTestResponse],
            error_mapper=test_watch_error_mapper,
            request_options=request_options,
        )

    async def update_watch(
        self,
        id_: UUID,
        body: UpdateWatchRequest | UpdateWatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WatchesResponse, UpdateWatchErrorBody]:
        """All fields optional. Set ``paused`` true to pause or false to resume. ``webhookUrl`` and ``notifyEmail``
        accept ``null`` to switch a channel off.

        **renderParams is MERGED, not replaced.** A partial ``renderParams`` is deep-merged over the watch's existing
        render config, so you can change one knob (e.g. ``{ "renderParams": { "darkMode": true } }``) without re-sending
        the whole object. To clear a knob, set it to its default explicitly.

        **Re-baselining.** Changing ``url`` clears the baseline so the next run re-baselines. A renderParams edit that
        changes WHAT is captured (a scope change — e.g. ``selector``, ``fullPage``, ``width``/``height``, or ``device``)
        likewise invalidates the baseline and re-baselines on the next run; a noise-only edit (e.g. ``threshold``,
        ``ignoreRegions``) does not.

        Args:
            id_: Watch UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/watches/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWatchRequest | UpdateWatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WatchesResponse],
            error_mapper=update_watch_error_mapper,
            request_options=request_options,
        )
