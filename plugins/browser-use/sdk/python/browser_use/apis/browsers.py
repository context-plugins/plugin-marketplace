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
from ..errors.create_browser_session_browsers_post_error import (
    CreateBrowserSessionBrowsersPostErrorBody,
    create_browser_session_browsers_post_error_mapper,
)
from ..errors.get_browser_session_browsers_session_id_get_error import (
    GetBrowserSessionBrowsersSessionIdGetErrorBody,
    get_browser_session_browsers_session_id_get_error_mapper,
)
from ..errors.list_browser_session_downloads_browsers_session_id_downloads_get_error import (
    ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody,
    list_browser_session_downloads_browsers_session_id_downloads_get_error_mapper,
)
from ..errors.list_browser_sessions_browsers_get_error import (
    ListBrowserSessionsBrowsersGetErrorBody,
    list_browser_sessions_browsers_get_error_mapper,
)
from ..errors.update_browser_session_browsers_session_id_patch_error import (
    UpdateBrowserSessionBrowsersSessionIdPatchErrorBody,
    update_browser_session_browsers_session_id_patch_error_mapper,
)
from ..models.browser_download_list_response import BrowserDownloadListResponse
from ..models.browser_session_item_view import BrowserSessionItemView
from ..models.browser_session_list_response import BrowserSessionListResponse
from ..models.browser_session_view import BrowserSessionView
from ..models.create_browser_session_request import CreateBrowserSessionRequest, CreateBrowserSessionRequestDict
from ..models.enums.browser_session_status import BrowserSessionStatusOrStr
from ..models.update_browser_session_request import UpdateBrowserSessionRequest, UpdateBrowserSessionRequestDict
from ..server.server import Server


class Browsers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BrowsersWithRawResponse(client, server, auth)

    def create_browser_session_browsers_post(
        self,
        body: CreateBrowserSessionRequest | CreateBrowserSessionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrowserSessionItemView:
        """Create a new browser session.

        **Pricing:** Browser sessions are charged at $0.02/hour for all users.

        The full rate is charged upfront when the session starts. When you stop the session, any unused time is
        automatically refunded proportionally.

        Billing is rounded up to the minute (minimum 1 minute). For example, if you stop a session after 30 minutes,
        you'll be refunded half the charged amount.

        **Session Limits:**
        - All users: Up to 4 hours per session

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Insufficient credits, or the API key reached its monthly spend limit. Session timeout limit
                exceeded (maximum 4 hours), or extensions are not available to this project Profile or extension not
                found Request validation failed Too many concurrent active sessions ``error`` is ``ApiKeySpendLimitError
                | SessionTimeoutLimitExceededError | ProfileNotFoundError | ValidationError |
                TooManyConcurrentActiveSessionsError | RawError``."""
        return unwrap(
            self._with_raw_response.create_browser_session_browsers_post(body, request_options=request_options)
        )

    def get_browser_session_browsers_session_id_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BrowserSessionView:
        """Get detailed browser session information including status and URLs.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Session not found Validation Error ``error`` is ``SessionNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_browser_session_browsers_session_id_get(
                session_id, request_options=request_options
            ),
        )

    def list_browser_session_downloads_browsers_session_id_downloads_get(
        self,
        session_id: UUID,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrowserDownloadListResponse:
        """List files the browser downloaded to S3 during the session.

        Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline. Files are stored at
        ``downloads/projects/{project_id}/sessions/{session_id}/`` in the private bucket.

        Args:
            session_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Session not found Validation Error ``error`` is ``SessionNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_browser_session_downloads_browsers_session_id_downloads_get(
                session_id, limit=limit, cursor=cursor, include_urls=include_urls, request_options=request_options
            ),
        )

    def list_browser_sessions_browsers_get(
        self,
        *,
        metadata: list[str] | None = None,
        page_size: int | None = 10,
        page_number: int | None = 1,
        filter_by: BrowserSessionStatusOrStr | None = None,
        agent_session_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrowserSessionListResponse:
        """Get paginated list of browser sessions with optional status filtering.

        List responses intentionally omit per-session presigned recording URLs (``recording_url`` is always ``null``
        here). Each recording URL requires a synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
        and blocks the event loop. With page_size up to the max this CPU-pegs the worker and starves the DB pool,
        cascading into pool exhaustion across the fleet. Clients should fetch the recording URL on demand via ``GET
        /api/v2/browsers/{id}``, which signs exactly one URL for a single session. Mirrors the v3 sessions list fix
        (ENG-4904, PR #4621).

        Args:
            metadata: Only browsers tagged with every one of these terms. ``key`` matches any value; ``key=value``
                matches exactly. Repeat the param to require more than one (AND).
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            filter_by: Value sent with the request.
            agent_session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_browser_sessions_browsers_get(
                metadata=metadata,
                page_size=page_size,
                page_number=page_number,
                filter_by=filter_by,
                agent_session_id=agent_session_id,
                request_options=request_options,
            ),
        )

    def update_browser_session_browsers_session_id_patch(
        self,
        session_id: UUID,
        body: UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrowserSessionView:
        """Stop a browser session.

        **Refund:** When you stop a session, unused time is automatically refunded. If the session ran for less than 1
        hour, you'll receive a proportional refund. Billing is ceil to the nearest minute (minimum 1 minute).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Session not found Request validation failed ``error`` is ``SessionNotFoundError | ValidationError
                | RawError``."""
        return unwrap(
            self._with_raw_response.update_browser_session_browsers_session_id_patch(
                session_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BrowsersWithRawResponse:
        return self._with_raw_response


class AsyncBrowsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBrowsersWithRawResponse(client, server, auth)

    async def create_browser_session_browsers_post(
        self,
        body: CreateBrowserSessionRequest | CreateBrowserSessionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrowserSessionItemView:
        """Create a new browser session.

        **Pricing:** Browser sessions are charged at $0.02/hour for all users.

        The full rate is charged upfront when the session starts. When you stop the session, any unused time is
        automatically refunded proportionally.

        Billing is rounded up to the minute (minimum 1 minute). For example, if you stop a session after 30 minutes,
        you'll be refunded half the charged amount.

        **Session Limits:**
        - All users: Up to 4 hours per session

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Insufficient credits, or the API key reached its monthly spend limit. Session timeout limit
                exceeded (maximum 4 hours), or extensions are not available to this project Profile or extension not
                found Request validation failed Too many concurrent active sessions ``error`` is ``ApiKeySpendLimitError
                | SessionTimeoutLimitExceededError | ProfileNotFoundError | ValidationError |
                TooManyConcurrentActiveSessionsError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_browser_session_browsers_post(body, request_options=request_options)
        )

    async def get_browser_session_browsers_session_id_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BrowserSessionView:
        """Get detailed browser session information including status and URLs.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Session not found Validation Error ``error`` is ``SessionNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_browser_session_browsers_session_id_get(
                session_id, request_options=request_options
            ),
        )

    async def list_browser_session_downloads_browsers_session_id_downloads_get(
        self,
        session_id: UUID,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrowserDownloadListResponse:
        """List files the browser downloaded to S3 during the session.

        Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline. Files are stored at
        ``downloads/projects/{project_id}/sessions/{session_id}/`` in the private bucket.

        Args:
            session_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Session not found Validation Error ``error`` is ``SessionNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_browser_session_downloads_browsers_session_id_downloads_get(
                session_id, limit=limit, cursor=cursor, include_urls=include_urls, request_options=request_options
            ),
        )

    async def list_browser_sessions_browsers_get(
        self,
        *,
        metadata: list[str] | None = None,
        page_size: int | None = 10,
        page_number: int | None = 1,
        filter_by: BrowserSessionStatusOrStr | None = None,
        agent_session_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrowserSessionListResponse:
        """Get paginated list of browser sessions with optional status filtering.

        List responses intentionally omit per-session presigned recording URLs (``recording_url`` is always ``null``
        here). Each recording URL requires a synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
        and blocks the event loop. With page_size up to the max this CPU-pegs the worker and starves the DB pool,
        cascading into pool exhaustion across the fleet. Clients should fetch the recording URL on demand via ``GET
        /api/v2/browsers/{id}``, which signs exactly one URL for a single session. Mirrors the v3 sessions list fix
        (ENG-4904, PR #4621).

        Args:
            metadata: Only browsers tagged with every one of these terms. ``key`` matches any value; ``key=value``
                matches exactly. Repeat the param to require more than one (AND).
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            filter_by: Value sent with the request.
            agent_session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_browser_sessions_browsers_get(
                metadata=metadata,
                page_size=page_size,
                page_number=page_number,
                filter_by=filter_by,
                agent_session_id=agent_session_id,
                request_options=request_options,
            ),
        )

    async def update_browser_session_browsers_session_id_patch(
        self,
        session_id: UUID,
        body: UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrowserSessionView:
        """Stop a browser session.

        **Refund:** When you stop a session, unused time is automatically refunded. If the session ran for less than 1
        hour, you'll receive a proportional refund. Billing is ceil to the nearest minute (minimum 1 minute).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Session not found Request validation failed ``error`` is ``SessionNotFoundError | ValidationError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.update_browser_session_browsers_session_id_patch(
                session_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBrowsersWithRawResponse:
        return self._with_raw_response


class BrowsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_browser_session_browsers_post(
        self,
        body: CreateBrowserSessionRequest | CreateBrowserSessionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserSessionItemView, CreateBrowserSessionBrowsersPostErrorBody]:
        """Create a new browser session.

        **Pricing:** Browser sessions are charged at $0.02/hour for all users.

        The full rate is charged upfront when the session starts. When you stop the session, any unused time is
        automatically refunded proportionally.

        Billing is rounded up to the minute (minimum 1 minute). For example, if you stop a session after 30 minutes,
        you'll be refunded half the charged amount.

        **Session Limits:**
        - All users: Up to 4 hours per session

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/browsers"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBrowserSessionRequest | CreateBrowserSessionRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[BrowserSessionItemView],
            error_mapper=create_browser_session_browsers_post_error_mapper,
            request_options=request_options,
        )

    def get_browser_session_browsers_session_id_get(
        self, session_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BrowserSessionView, GetBrowserSessionBrowsersSessionIdGetErrorBody]:
        """Get detailed browser session information including status and URLs.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/browsers/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[BrowserSessionView],
            error_mapper=get_browser_session_browsers_session_id_get_error_mapper,
            request_options=request_options,
        )

    def list_browser_session_downloads_browsers_session_id_downloads_get(
        self,
        session_id: UUID,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserDownloadListResponse, ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody]:
        """List files the browser downloaded to S3 during the session.

        Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline. Files are stored at
        ``downloads/projects/{project_id}/sessions/{session_id}/`` in the private bucket.

        Args:
            session_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/browsers/{session_id}/downloads"),
            path_params=[param[UUID]("session_id", session_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("includeUrls", include_urls),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[BrowserDownloadListResponse],
            error_mapper=list_browser_session_downloads_browsers_session_id_downloads_get_error_mapper,
            request_options=request_options,
        )

    def list_browser_sessions_browsers_get(
        self,
        *,
        metadata: list[str] | None = None,
        page_size: int | None = 10,
        page_number: int | None = 1,
        filter_by: BrowserSessionStatusOrStr | None = None,
        agent_session_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserSessionListResponse, ListBrowserSessionsBrowsersGetErrorBody]:
        """Get paginated list of browser sessions with optional status filtering.

        List responses intentionally omit per-session presigned recording URLs (``recording_url`` is always ``null``
        here). Each recording URL requires a synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
        and blocks the event loop. With page_size up to the max this CPU-pegs the worker and starves the DB pool,
        cascading into pool exhaustion across the fleet. Clients should fetch the recording URL on demand via ``GET
        /api/v2/browsers/{id}``, which signs exactly one URL for a single session. Mirrors the v3 sessions list fix
        (ENG-4904, PR #4621).

        Args:
            metadata: Only browsers tagged with every one of these terms. ``key`` matches any value; ``key=value``
                matches exactly. Repeat the param to require more than one (AND).
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            filter_by: Value sent with the request.
            agent_session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/browsers"),
            query_params=[
                param[list[str] | None]("metadata", metadata),
                param[int | None]("pageSize", page_size),
                param[int | None]("pageNumber", page_number),
                param[BrowserSessionStatusOrStr | None]("filterBy", filter_by),
                param[UUID | None]("agentSessionId", agent_session_id),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[BrowserSessionListResponse],
            error_mapper=list_browser_sessions_browsers_get_error_mapper,
            request_options=request_options,
        )

    def update_browser_session_browsers_session_id_patch(
        self,
        session_id: UUID,
        body: UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserSessionView, UpdateBrowserSessionBrowsersSessionIdPatchErrorBody]:
        """Stop a browser session.

        **Refund:** When you stop a session, unused time is automatically refunded. If the session ran for less than 1
        hour, you'll receive a proportional refund. Billing is ceil to the nearest minute (minimum 1 minute).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/browsers/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[BrowserSessionView],
            error_mapper=update_browser_session_browsers_session_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncBrowsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_browser_session_browsers_post(
        self,
        body: CreateBrowserSessionRequest | CreateBrowserSessionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserSessionItemView, CreateBrowserSessionBrowsersPostErrorBody]:
        """Create a new browser session.

        **Pricing:** Browser sessions are charged at $0.02/hour for all users.

        The full rate is charged upfront when the session starts. When you stop the session, any unused time is
        automatically refunded proportionally.

        Billing is rounded up to the minute (minimum 1 minute). For example, if you stop a session after 30 minutes,
        you'll be refunded half the charged amount.

        **Session Limits:**
        - All users: Up to 4 hours per session

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/browsers"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBrowserSessionRequest | CreateBrowserSessionRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[BrowserSessionItemView],
            error_mapper=create_browser_session_browsers_post_error_mapper,
            request_options=request_options,
        )

    async def get_browser_session_browsers_session_id_get(
        self, session_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BrowserSessionView, GetBrowserSessionBrowsersSessionIdGetErrorBody]:
        """Get detailed browser session information including status and URLs.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/browsers/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[BrowserSessionView],
            error_mapper=get_browser_session_browsers_session_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_browser_session_downloads_browsers_session_id_downloads_get(
        self,
        session_id: UUID,
        *,
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserDownloadListResponse, ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody]:
        """List files the browser downloaded to S3 during the session.

        Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline. Files are stored at
        ``downloads/projects/{project_id}/sessions/{session_id}/`` in the private bucket.

        Args:
            session_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/browsers/{session_id}/downloads"),
            path_params=[param[UUID]("session_id", session_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("includeUrls", include_urls),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[BrowserDownloadListResponse],
            error_mapper=list_browser_session_downloads_browsers_session_id_downloads_get_error_mapper,
            request_options=request_options,
        )

    async def list_browser_sessions_browsers_get(
        self,
        *,
        metadata: list[str] | None = None,
        page_size: int | None = 10,
        page_number: int | None = 1,
        filter_by: BrowserSessionStatusOrStr | None = None,
        agent_session_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserSessionListResponse, ListBrowserSessionsBrowsersGetErrorBody]:
        """Get paginated list of browser sessions with optional status filtering.

        List responses intentionally omit per-session presigned recording URLs (``recording_url`` is always ``null``
        here). Each recording URL requires a synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
        and blocks the event loop. With page_size up to the max this CPU-pegs the worker and starves the DB pool,
        cascading into pool exhaustion across the fleet. Clients should fetch the recording URL on demand via ``GET
        /api/v2/browsers/{id}``, which signs exactly one URL for a single session. Mirrors the v3 sessions list fix
        (ENG-4904, PR #4621).

        Args:
            metadata: Only browsers tagged with every one of these terms. ``key`` matches any value; ``key=value``
                matches exactly. Repeat the param to require more than one (AND).
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            filter_by: Value sent with the request.
            agent_session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/browsers"),
            query_params=[
                param[list[str] | None]("metadata", metadata),
                param[int | None]("pageSize", page_size),
                param[int | None]("pageNumber", page_number),
                param[BrowserSessionStatusOrStr | None]("filterBy", filter_by),
                param[UUID | None]("agentSessionId", agent_session_id),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[BrowserSessionListResponse],
            error_mapper=list_browser_sessions_browsers_get_error_mapper,
            request_options=request_options,
        )

    async def update_browser_session_browsers_session_id_patch(
        self,
        session_id: UUID,
        body: UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrowserSessionView, UpdateBrowserSessionBrowsersSessionIdPatchErrorBody]:
        """Stop a browser session.

        **Refund:** When you stop a session, unused time is automatically refunded. If the session ran for less than 1
        hour, you'll receive a proportional refund. Billing is ceil to the nearest minute (minimum 1 minute).

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/browsers/{session_id}"),
            path_params=[param[UUID]("session_id", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[BrowserSessionView],
            error_mapper=update_browser_session_browsers_session_id_patch_error_mapper,
            request_options=request_options,
        )
