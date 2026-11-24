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
from ..errors.get_income_error import GetIncomeErrorBody, get_income_error_mapper
from ..errors.post_income_error import PostIncomeErrorBody, post_income_error_mapper
from ..models.income_response import IncomeResponse
from ..models.users_income_request import UsersIncomeRequest, UsersIncomeRequestDict
from ..server.server import Server


class IncomeApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IncomeApiWithRawResponse(client, server, auth)

    def get_income(
        self, user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IncomeResponse:
        """Retrieve an existing income summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the income summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a saved income resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersIncome400Error1 | UsersIncome403Error1 |
                UsersIncome404Error1 | UsersIncome500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_income(user_id, snapshot_id, request_options=request_options))

    def post_income(
        self,
        user_id: str,
        *,
        body: UsersIncomeRequest | UsersIncomeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IncomeResponse:
        """Create an income summary for a specific user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created income resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersIncome400Error1 | UsersIncome403Error1 |
                UsersIncome404Error1 | UsersIncome500Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_income(user_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> IncomeApiWithRawResponse:
        return self._with_raw_response


class AsyncIncomeApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIncomeApiWithRawResponse(client, server, auth)

    async def get_income(
        self, user_id: str, snapshot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IncomeResponse:
        """Retrieve an existing income summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the income summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a saved income resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersIncome400Error1 | UsersIncome403Error1 |
                UsersIncome404Error1 | UsersIncome500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_income(user_id, snapshot_id, request_options=request_options))

    async def post_income(
        self,
        user_id: str,
        *,
        body: UsersIncomeRequest | UsersIncomeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IncomeResponse:
        """Create an income summary for a specific user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created income resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersIncome400Error1 | UsersIncome403Error1 |
                UsersIncome404Error1 | UsersIncome500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_income(user_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncIncomeApiWithRawResponse:
        return self._with_raw_response


class IncomeApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_income(
        self, user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IncomeResponse, GetIncomeErrorBody]:
        """Retrieve an existing income summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the income summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/income/{snapshotId}"),
            path_params=[param[str]("userId", user_id), param[str]("snapshotId", snapshot_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[IncomeResponse],
            error_mapper=get_income_error_mapper,
            request_options=request_options,
        )

    def post_income(
        self,
        user_id: str,
        *,
        body: UsersIncomeRequest | UsersIncomeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IncomeResponse, PostIncomeErrorBody]:
        """Create an income summary for a specific user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/income"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersIncomeRequest | UsersIncomeRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[IncomeResponse],
            error_mapper=post_income_error_mapper,
            request_options=request_options,
        )


class AsyncIncomeApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_income(
        self, user_id: str, snapshot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IncomeResponse, GetIncomeErrorBody]:
        """Retrieve an existing income summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the income summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/income/{snapshotId}"),
            path_params=[param[str]("userId", user_id), param[str]("snapshotId", snapshot_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[IncomeResponse],
            error_mapper=get_income_error_mapper,
            request_options=request_options,
        )

    async def post_income(
        self,
        user_id: str,
        *,
        body: UsersIncomeRequest | UsersIncomeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IncomeResponse, PostIncomeErrorBody]:
        """Create an income summary for a specific user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/income"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersIncomeRequest | UsersIncomeRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[IncomeResponse],
            error_mapper=post_income_error_mapper,
            request_options=request_options,
        )
