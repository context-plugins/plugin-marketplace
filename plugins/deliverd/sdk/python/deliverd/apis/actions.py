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
from ..models.api_v1_actions_request import ApiV1ActionsRequest, ApiV1ActionsRequestDict
from ..models.api_v1_actions_response import ApiV1ActionsResponse
from ..models.api_v1_actions_response1 import ApiV1ActionsResponse1
from ..server.server import Server


class Actions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ActionsWithRawResponse(client, server, auth)

    def get_api_v1_actions(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ActionsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first. Titles and risk reflect any administrator override; sensitivity labels are not returned,
            because telling the caller which values are confidential tells it which are worth taking.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_actions(limit=limit, cursor=cursor, request_options=request_options)
        )

    def post_api_v1_actions(
        self,
        *,
        body: ApiV1ActionsRequest | ApiV1ActionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ActionsResponse:
        """Actions are stable organisational vocabulary and tools are implementation details — several agents calling
        three differently named functions may all be performing finance.refund, and policy is written about the business
        action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id
        again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and
        sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could
        loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id,
        so an agent able to name actions could name its way around the rule that governs it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The action as registered

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_actions(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ActionsWithRawResponse:
        return self._with_raw_response


class AsyncActions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncActionsWithRawResponse(client, server, auth)

    async def get_api_v1_actions(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ActionsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first. Titles and risk reflect any administrator override; sensitivity labels are not returned,
            because telling the caller which values are confidential tells it which are worth taking.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_actions(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def post_api_v1_actions(
        self,
        *,
        body: ApiV1ActionsRequest | ApiV1ActionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ActionsResponse:
        """Actions are stable organisational vocabulary and tools are implementation details — several agents calling
        three differently named functions may all be performing finance.refund, and policy is written about the business
        action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id
        again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and
        sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could
        loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id,
        so an agent able to name actions could name its way around the rule that governs it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The action as registered

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_actions(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncActionsWithRawResponse:
        return self._with_raw_response


class ActionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_actions(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ActionsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/actions"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ActionsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_actions(
        self,
        *,
        body: ApiV1ActionsRequest | ApiV1ActionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ActionsResponse, RawError]:
        """Actions are stable organisational vocabulary and tools are implementation details — several agents calling
        three differently named functions may all be performing finance.refund, and policy is written about the business
        action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id
        again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and
        sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could
        loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id,
        so an agent able to name actions could name its way around the rule that governs it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/actions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ActionsRequest | ApiV1ActionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ActionsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncActionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_actions(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ActionsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/actions"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ActionsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_actions(
        self,
        *,
        body: ApiV1ActionsRequest | ApiV1ActionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ActionsResponse, RawError]:
        """Actions are stable organisational vocabulary and tools are implementation details — several agents calling
        three differently named functions may all be performing finance.refund, and policy is written about the business
        action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id
        again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and
        sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could
        loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id,
        so an agent able to name actions could name its way around the rule that governs it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/actions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ActionsRequest | ApiV1ActionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ActionsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
