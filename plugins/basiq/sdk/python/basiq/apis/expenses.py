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
from ..errors.get_expenses_error import GetExpensesErrorBody, get_expenses_error_mapper
from ..errors.post_expenses_error import PostExpensesErrorBody, post_expenses_error_mapper
from ..models.expenses_response import ExpensesResponse
from ..models.users_expenses_request import UsersExpensesRequest, UsersExpensesRequestDict
from ..server.server import Server


class Expenses:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExpensesWithRawResponse(client, server, auth)

    def get_expenses(
        self, user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExpensesResponse:
        """Retrieve an existing expense summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the expense summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a saved expenses resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersExpenses400Error1 | UsersExpenses403Error1
                | UsersExpenses404Error1 | UsersExpenses500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_expenses(user_id, snapshot_id, request_options=request_options))

    def post_expenses(
        self,
        user_id: str,
        *,
        body: UsersExpensesRequest | UsersExpensesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExpensesResponse:
        """Create a new expense summary for a user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created expenses resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersExpenses400Error1 | UsersExpenses403Error1
                | UsersExpenses404Error1 | UsersExpenses500Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_expenses(user_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ExpensesWithRawResponse:
        return self._with_raw_response


class AsyncExpenses:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExpensesWithRawResponse(client, server, auth)

    async def get_expenses(
        self, user_id: str, snapshot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExpensesResponse:
        """Retrieve an existing expense summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the expense summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a saved expenses resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersExpenses400Error1 | UsersExpenses403Error1
                | UsersExpenses404Error1 | UsersExpenses500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_expenses(user_id, snapshot_id, request_options=request_options))

    async def post_expenses(
        self,
        user_id: str,
        *,
        body: UsersExpensesRequest | UsersExpensesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExpensesResponse:
        """Create a new expense summary for a user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created expenses resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersExpenses400Error1 | UsersExpenses403Error1
                | UsersExpenses404Error1 | UsersExpenses500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_expenses(user_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncExpensesWithRawResponse:
        return self._with_raw_response


class ExpensesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_expenses(
        self, user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExpensesResponse, GetExpensesErrorBody]:
        """Retrieve an existing expense summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the expense summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/expenses/{snapshotId}"),
            path_params=[param[str]("userId", user_id), param[str]("snapshotId", snapshot_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ExpensesResponse],
            error_mapper=get_expenses_error_mapper,
            request_options=request_options,
        )

    def post_expenses(
        self,
        user_id: str,
        *,
        body: UsersExpensesRequest | UsersExpensesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExpensesResponse, PostExpensesErrorBody]:
        """Create a new expense summary for a user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/expenses"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersExpensesRequest | UsersExpensesRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ExpensesResponse],
            error_mapper=post_expenses_error_mapper,
            request_options=request_options,
        )


class AsyncExpensesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_expenses(
        self, user_id: str, snapshot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExpensesResponse, GetExpensesErrorBody]:
        """Retrieve an existing expense summary for a specific user

        Args:
            user_id: The identifier of the user.
            snapshot_id: The identifier of the expense summary to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/expenses/{snapshotId}"),
            path_params=[param[str]("userId", user_id), param[str]("snapshotId", snapshot_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ExpensesResponse],
            error_mapper=get_expenses_error_mapper,
            request_options=request_options,
        )

    async def post_expenses(
        self,
        user_id: str,
        *,
        body: UsersExpensesRequest | UsersExpensesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExpensesResponse, PostExpensesErrorBody]:
        """Create a new expense summary for a user

        Args:
            user_id: The identifier of the user.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/expenses"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersExpensesRequest | UsersExpensesRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ExpensesResponse],
            error_mapper=post_expenses_error_mapper,
            request_options=request_options,
        )
