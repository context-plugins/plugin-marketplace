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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_v1_decision_sessions_by_id_error import (
    GetApiV1DecisionSessionsByIdErrorBody,
    get_api_v1_decision_sessions_by_id_error_mapper,
)
from ..errors.post_api_v1_decision_sessions_by_id_expire_error import (
    PostApiV1DecisionSessionsByIdExpireErrorBody,
    post_api_v1_decision_sessions_by_id_expire_error_mapper,
)
from ..models.api_v1_decision_sessions_expire_response import ApiV1DecisionSessionsExpireResponse
from ..models.api_v1_decision_sessions_response import ApiV1DecisionSessionsResponse
from ..server.server import Server


class DecisionSessions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DecisionSessionsWithRawResponse(client, server, auth)

    def get_api_v1_decision_sessions_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DecisionSessionsResponse:
        """``open``, ``verified`` (the approver confirmed who they are), ``complete`` (they decided, here or anywhere
        else) or ``expired``, with their decision and the request's own status. Never the secret. Needs approvals:read.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The session

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_decision_sessions_by_id(id_, request_options=request_options))

    def post_api_v1_decision_sessions_by_id_expire(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DecisionSessionsExpireResponse:
        """A decision already made through it stays made. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The session

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_decision_sessions_by_id_expire(id_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DecisionSessionsWithRawResponse:
        return self._with_raw_response


class AsyncDecisionSessions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDecisionSessionsWithRawResponse(client, server, auth)

    async def get_api_v1_decision_sessions_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DecisionSessionsResponse:
        """``open``, ``verified`` (the approver confirmed who they are), ``complete`` (they decided, here or anywhere
        else) or ``expired``, with their decision and the request's own status. Never the secret. Needs approvals:read.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The session

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_decision_sessions_by_id(id_, request_options=request_options)
        )

    async def post_api_v1_decision_sessions_by_id_expire(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DecisionSessionsExpireResponse:
        """A decision already made through it stays made. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The session

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_decision_sessions_by_id_expire(
                id_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDecisionSessionsWithRawResponse:
        return self._with_raw_response


class DecisionSessionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_decision_sessions_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DecisionSessionsResponse, GetApiV1DecisionSessionsByIdErrorBody]:
        """``open``, ``verified`` (the approver confirmed who they are), ``complete`` (they decided, here or anywhere
        else) or ``expired``, with their decision and the request's own status. Never the secret. Needs approvals:read.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/decision-sessions/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DecisionSessionsResponse],
            error_mapper=get_api_v1_decision_sessions_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_decision_sessions_by_id_expire(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DecisionSessionsExpireResponse, PostApiV1DecisionSessionsByIdExpireErrorBody]:
        """A decision already made through it stays made. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/decision-sessions/{id}/expire"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DecisionSessionsExpireResponse],
            error_mapper=post_api_v1_decision_sessions_by_id_expire_error_mapper,
            request_options=request_options,
        )


class AsyncDecisionSessionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_decision_sessions_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DecisionSessionsResponse, GetApiV1DecisionSessionsByIdErrorBody]:
        """``open``, ``verified`` (the approver confirmed who they are), ``complete`` (they decided, here or anywhere
        else) or ``expired``, with their decision and the request's own status. Never the secret. Needs approvals:read.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/decision-sessions/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DecisionSessionsResponse],
            error_mapper=get_api_v1_decision_sessions_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_decision_sessions_by_id_expire(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DecisionSessionsExpireResponse, PostApiV1DecisionSessionsByIdExpireErrorBody]:
        """A decision already made through it stays made. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/decision-sessions/{id}/expire"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DecisionSessionsExpireResponse],
            error_mapper=post_api_v1_decision_sessions_by_id_expire_error_mapper,
            request_options=request_options,
        )
