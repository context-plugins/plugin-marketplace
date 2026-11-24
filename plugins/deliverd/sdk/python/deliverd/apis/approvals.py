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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_api_v1_approvals_by_id_error import (
    GetApiV1ApprovalsByIdErrorBody,
    get_api_v1_approvals_by_id_error_mapper,
)
from ..errors.post_api_v1_approvals_by_id_answers_error import (
    PostApiV1ApprovalsByIdAnswersErrorBody,
    post_api_v1_approvals_by_id_answers_error_mapper,
)
from ..errors.post_api_v1_approvals_by_id_cancel_error import (
    PostApiV1ApprovalsByIdCancelErrorBody,
    post_api_v1_approvals_by_id_cancel_error_mapper,
)
from ..errors.post_api_v1_approvals_by_id_sessions_error import (
    PostApiV1ApprovalsByIdSessionsErrorBody,
    post_api_v1_approvals_by_id_sessions_error_mapper,
)
from ..errors.post_api_v1_approvals_error import PostApiV1ApprovalsErrorBody, post_api_v1_approvals_error_mapper
from ..models.api_v1_approvals_answers_request import ApiV1ApprovalsAnswersRequest, ApiV1ApprovalsAnswersRequestDict
from ..models.api_v1_approvals_answers_response import ApiV1ApprovalsAnswersResponse
from ..models.api_v1_approvals_cancel_response import ApiV1ApprovalsCancelResponse
from ..models.api_v1_approvals_request import ApiV1ApprovalsRequest, ApiV1ApprovalsRequestDict
from ..models.api_v1_approvals_response import ApiV1ApprovalsResponse
from ..models.api_v1_approvals_response1 import ApiV1ApprovalsResponse1
from ..models.api_v1_approvals_sessions_request import ApiV1ApprovalsSessionsRequest, ApiV1ApprovalsSessionsRequestDict
from ..models.api_v1_approvals_sessions_response import ApiV1ApprovalsSessionsResponse
from ..models.enums.status1 import Status1OrStr
from ..server.server import Server


class Approvals:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApprovalsWithRawResponse(client, server, auth)

    def get_api_v1_approvals(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status1OrStr | None = None,
        external_id: str | None = None,
        approver: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            approver: The requests naming one person: a member's id or email, or an admitted guest's email. An
                approver's inbox, for your own UI.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_approvals(
                limit=limit,
                cursor=cursor,
                status=status,
                external_id=external_id,
                approver=approver,
                request_options=request_options,
            ),
        )

    def get_api_v1_approvals_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ApprovalsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_approvals_by_id(id_, request_options=request_options))

    def post_api_v1_approvals(
        self,
        *,
        body: ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsResponse:
        """Creates a request and returns its page. The decision is a person's: read it by polling GET
        /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired),
        or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when
        omitted. The requester cannot be an approver of their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, pending

        Raises:
            ApiError: An approver is not a member, or the requester named only themselves ``plan_limit`` — the plan's
                approval requests for this month are used (Free only). The message says when the count starts again.
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_approvals(body=body, request_options=request_options))

    def post_api_v1_approvals_by_id_answers(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsAnswersResponse:
        """Only the requester may answer. The answer is shown on the page and the asker is told.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request

        Raises:
            ApiError: Not the requester Already answered ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_approvals_by_id_answers(id_, body=body, request_options=request_options)
        )

    def post_api_v1_approvals_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ApprovalsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, cancelled

        Raises:
            ApiError: Already decided ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_approvals_by_id_cancel(id_, request_options=request_options))

    def post_api_v1_approvals_by_id_sessions(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsSessionsResponse:
        """Decision sessions are how an approval is decided in your own app. ``mode: "hosted"`` returns a ``url`` to
        send the approver to, with an optional ``returnUrl`` for afterwards (``deliverd_session`` and
        ``deliverd_decision`` are added to it). ``mode: "embedded"`` returns a ``clientSecret`` to mount with
        https://deliverd.dev/elements/v1.js, framed only by ``origin``, which must be on the organisation's embedding
        allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The ``url`` and
        ``clientSecret`` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to
        their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The session, with its url and clientSecret

        Raises:
            ApiError: The origin is not on the embedding allow-list, or the approver asked No such request The request
                is no longer pending, or it has too many open sessions ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_approvals_by_id_sessions(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ApprovalsWithRawResponse:
        return self._with_raw_response


class AsyncApprovals:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApprovalsWithRawResponse(client, server, auth)

    async def get_api_v1_approvals(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status1OrStr | None = None,
        external_id: str | None = None,
        approver: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            approver: The requests naming one person: a member's id or email, or an admitted guest's email. An
                approver's inbox, for your own UI.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_approvals(
                limit=limit,
                cursor=cursor,
                status=status,
                external_id=external_id,
                approver=approver,
                request_options=request_options,
            ),
        )

    async def get_api_v1_approvals_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ApprovalsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_approvals_by_id(id_, request_options=request_options))

    async def post_api_v1_approvals(
        self,
        *,
        body: ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsResponse:
        """Creates a request and returns its page. The decision is a person's: read it by polling GET
        /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired),
        or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when
        omitted. The requester cannot be an approver of their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, pending

        Raises:
            ApiError: An approver is not a member, or the requester named only themselves ``plan_limit`` — the plan's
                approval requests for this month are used (Free only). The message says when the count starts again.
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_approvals(body=body, request_options=request_options))

    async def post_api_v1_approvals_by_id_answers(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsAnswersResponse:
        """Only the requester may answer. The answer is shown on the page and the asker is told.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request

        Raises:
            ApiError: Not the requester Already answered ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_approvals_by_id_answers(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_approvals_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ApprovalsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, cancelled

        Raises:
            ApiError: Already decided ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_approvals_by_id_cancel(id_, request_options=request_options)
        )

    async def post_api_v1_approvals_by_id_sessions(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ApprovalsSessionsResponse:
        """Decision sessions are how an approval is decided in your own app. ``mode: "hosted"`` returns a ``url`` to
        send the approver to, with an optional ``returnUrl`` for afterwards (``deliverd_session`` and
        ``deliverd_decision`` are added to it). ``mode: "embedded"`` returns a ``clientSecret`` to mount with
        https://deliverd.dev/elements/v1.js, framed only by ``origin``, which must be on the organisation's embedding
        allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The ``url`` and
        ``clientSecret`` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to
        their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The session, with its url and clientSecret

        Raises:
            ApiError: The origin is not on the embedding allow-list, or the approver asked No such request The request
                is no longer pending, or it has too many open sessions ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_approvals_by_id_sessions(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncApprovalsWithRawResponse:
        return self._with_raw_response


class ApprovalsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_approvals(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status1OrStr | None = None,
        external_id: str | None = None,
        approver: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            approver: The requests naming one person: a member's id or email, or an admitted guest's email. An
                approver's inbox, for your own UI.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/approvals"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[Status1OrStr | None]("status", status),
                param[str | None]("externalId", external_id),
                param[str | None]("approver", approver),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ApprovalsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_approvals_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ApprovalsResponse, GetApiV1ApprovalsByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/approvals/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ApprovalsResponse],
            error_mapper=get_api_v1_approvals_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_approvals(
        self,
        *,
        body: ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsResponse, PostApiV1ApprovalsErrorBody]:
        """Creates a request and returns its page. The decision is a person's: read it by polling GET
        /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired),
        or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when
        omitted. The requester cannot be an approver of their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ApprovalsResponse],
            error_mapper=post_api_v1_approvals_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_approvals_by_id_answers(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsAnswersResponse, PostApiV1ApprovalsByIdAnswersErrorBody]:
        """Only the requester may answer. The answer is shown on the page and the asker is told.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals/{id}/answers"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ApprovalsAnswersResponse],
            error_mapper=post_api_v1_approvals_by_id_answers_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_approvals_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ApprovalsCancelResponse, PostApiV1ApprovalsByIdCancelErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ApprovalsCancelResponse],
            error_mapper=post_api_v1_approvals_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_approvals_by_id_sessions(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsSessionsResponse, PostApiV1ApprovalsByIdSessionsErrorBody]:
        """Decision sessions are how an approval is decided in your own app. ``mode: "hosted"`` returns a ``url`` to
        send the approver to, with an optional ``returnUrl`` for afterwards (``deliverd_session`` and
        ``deliverd_decision`` are added to it). ``mode: "embedded"`` returns a ``clientSecret`` to mount with
        https://deliverd.dev/elements/v1.js, framed only by ``origin``, which must be on the organisation's embedding
        allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The ``url`` and
        ``clientSecret`` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to
        their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals/{id}/sessions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ApprovalsSessionsResponse],
            error_mapper=post_api_v1_approvals_by_id_sessions_error_mapper,
            request_options=request_options,
        )


class AsyncApprovalsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_approvals(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status1OrStr | None = None,
        external_id: str | None = None,
        approver: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            approver: The requests naming one person: a member's id or email, or an admitted guest's email. An
                approver's inbox, for your own UI.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/approvals"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[Status1OrStr | None]("status", status),
                param[str | None]("externalId", external_id),
                param[str | None]("approver", approver),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ApprovalsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_approvals_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ApprovalsResponse, GetApiV1ApprovalsByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/approvals/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ApprovalsResponse],
            error_mapper=get_api_v1_approvals_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_approvals(
        self,
        *,
        body: ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsResponse, PostApiV1ApprovalsErrorBody]:
        """Creates a request and returns its page. The decision is a person's: read it by polling GET
        /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired),
        or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when
        omitted. The requester cannot be an approver of their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ApprovalsResponse],
            error_mapper=post_api_v1_approvals_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_approvals_by_id_answers(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsAnswersResponse, PostApiV1ApprovalsByIdAnswersErrorBody]:
        """Only the requester may answer. The answer is shown on the page and the asker is told.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals/{id}/answers"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ApprovalsAnswersResponse],
            error_mapper=post_api_v1_approvals_by_id_answers_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_approvals_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ApprovalsCancelResponse, PostApiV1ApprovalsByIdCancelErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ApprovalsCancelResponse],
            error_mapper=post_api_v1_approvals_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_approvals_by_id_sessions(
        self,
        id_: UUID,
        *,
        body: ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ApprovalsSessionsResponse, PostApiV1ApprovalsByIdSessionsErrorBody]:
        """Decision sessions are how an approval is decided in your own app. ``mode: "hosted"`` returns a ``url`` to
        send the approver to, with an optional ``returnUrl`` for afterwards (``deliverd_session`` and
        ``deliverd_decision`` are added to it). ``mode: "embedded"`` returns a ``clientSecret`` to mount with
        https://deliverd.dev/elements/v1.js, framed only by ``origin``, which must be on the organisation's embedding
        allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The ``url`` and
        ``clientSecret`` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to
        their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/approvals/{id}/sessions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ApprovalsSessionsResponse],
            error_mapper=post_api_v1_approvals_by_id_sessions_error_mapper,
            request_options=request_options,
        )
