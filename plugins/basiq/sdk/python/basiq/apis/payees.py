from __future__ import annotations

from uuid import UUID

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
from ..errors.get_payee_details_error import GetPayeeDetailsErrorBody, get_payee_details_error_mapper
from ..errors.get_payees_error import GetPayeesErrorBody, get_payees_error_mapper
from ..models.payee_details_response import PayeeDetailsResponse
from ..models.payees_list_response import PayeesListResponse
from ..server.server import Server


class Payees:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PayeesWithRawResponse(client, server, auth)

    def get_payee_details(
        self, user_id: UUID, payee_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PayeeDetailsResponse:
        """Retrieves detailed information for a specific payee. The response includes type-specific details based on the
        payee type (domestic, biller, international, or digitalWallet).

        Args:
            user_id: The unique identifier of the user.
            payee_id: The unique identifier of the payee.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with payee details. The response structure varies based on the payee type.

        Raises:
            ApiError: Invalid payee ID format. Authentication credentials are missing or invalid. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Payee not found.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``BadRequestErrorSchema | UnauthorizedErrorSchema |
                ForbiddenAccessError1 | NotFoundErrorSchema | RawError``."""
        return unwrap(self._with_raw_response.get_payee_details(user_id, payee_id, request_options=request_options))

    def get_payees(
        self,
        user_id: UUID,
        *,
        limit: int | None = 25,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PayeesListResponse:
        """Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID,
        and creation date.

        Args:
            user_id: The unique identifier of the user.
            limit: The maximum number of payees to return per page. Valid values are 1-500. Default is 25.
            filter_: Filter expression to narrow down results. Supports the following filters: - ``type.eq('value')`` -
                Filter by payee type (domestic, biller, international, digitalWallet) - ``connectionId.eq('value')`` -
                Filter by connection ID - ``created.bt('startDate','endDate')`` - Filter by creation date range -
                ``created.gt('date')`` - Filter by creation date greater than - ``created.gteq('date')`` - Filter by
                creation date greater than or equal - ``created.lt('date')`` - Filter by creation date less than -
                ``created.lteq('date')`` - Filter by creation date less than or equal - ``created.eq('date')`` - Filter
                by creation date equal to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with a list of payees.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Authentication credentials are missing or invalid. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                response code indicates that the server encountered an unexpected condition that prevented it from
                fulfilling the request. ``error`` is ``BadRequestErrorSchema | UnauthorizedErrorSchema |
                ForbiddenAccessError1 | NotFoundErrorSchema | RawError``."""
        return unwrap(
            self._with_raw_response.get_payees(user_id, limit=limit, filter_=filter_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PayeesWithRawResponse:
        return self._with_raw_response


class AsyncPayees:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPayeesWithRawResponse(client, server, auth)

    async def get_payee_details(
        self, user_id: UUID, payee_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PayeeDetailsResponse:
        """Retrieves detailed information for a specific payee. The response includes type-specific details based on the
        payee type (domestic, biller, international, or digitalWallet).

        Args:
            user_id: The unique identifier of the user.
            payee_id: The unique identifier of the payee.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with payee details. The response structure varies based on the payee type.

        Raises:
            ApiError: Invalid payee ID format. Authentication credentials are missing or invalid. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Payee not found.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``BadRequestErrorSchema | UnauthorizedErrorSchema |
                ForbiddenAccessError1 | NotFoundErrorSchema | RawError``."""
        return unwrap(
            await self._with_raw_response.get_payee_details(user_id, payee_id, request_options=request_options)
        )

    async def get_payees(
        self,
        user_id: UUID,
        *,
        limit: int | None = 25,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PayeesListResponse:
        """Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID,
        and creation date.

        Args:
            user_id: The unique identifier of the user.
            limit: The maximum number of payees to return per page. Valid values are 1-500. Default is 25.
            filter_: Filter expression to narrow down results. Supports the following filters: - ``type.eq('value')`` -
                Filter by payee type (domestic, biller, international, digitalWallet) - ``connectionId.eq('value')`` -
                Filter by connection ID - ``created.bt('startDate','endDate')`` - Filter by creation date range -
                ``created.gt('date')`` - Filter by creation date greater than - ``created.gteq('date')`` - Filter by
                creation date greater than or equal - ``created.lt('date')`` - Filter by creation date less than -
                ``created.lteq('date')`` - Filter by creation date less than or equal - ``created.eq('date')`` - Filter
                by creation date equal to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with a list of payees.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Authentication credentials are missing or invalid. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                response code indicates that the server encountered an unexpected condition that prevented it from
                fulfilling the request. ``error`` is ``BadRequestErrorSchema | UnauthorizedErrorSchema |
                ForbiddenAccessError1 | NotFoundErrorSchema | RawError``."""
        return unwrap(
            await self._with_raw_response.get_payees(
                user_id, limit=limit, filter_=filter_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPayeesWithRawResponse:
        return self._with_raw_response


class PayeesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_payee_details(
        self, user_id: UUID, payee_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayeeDetailsResponse, GetPayeeDetailsErrorBody]:
        """Retrieves detailed information for a specific payee. The response includes type-specific details based on the
        payee type (domestic, biller, international, or digitalWallet).

        Args:
            user_id: The unique identifier of the user.
            payee_id: The unique identifier of the payee.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/payees/{payeeId}"),
            path_params=[param[UUID]("userId", user_id), param[UUID]("payeeId", payee_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[PayeeDetailsResponse],
            error_mapper=get_payee_details_error_mapper,
            request_options=request_options,
        )

    def get_payees(
        self,
        user_id: UUID,
        *,
        limit: int | None = 25,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PayeesListResponse, GetPayeesErrorBody]:
        """Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID,
        and creation date.

        Args:
            user_id: The unique identifier of the user.
            limit: The maximum number of payees to return per page. Valid values are 1-500. Default is 25.
            filter_: Filter expression to narrow down results. Supports the following filters: - ``type.eq('value')`` -
                Filter by payee type (domestic, biller, international, digitalWallet) - ``connectionId.eq('value')`` -
                Filter by connection ID - ``created.bt('startDate','endDate')`` - Filter by creation date range -
                ``created.gt('date')`` - Filter by creation date greater than - ``created.gteq('date')`` - Filter by
                creation date greater than or equal - ``created.lt('date')`` - Filter by creation date less than -
                ``created.lteq('date')`` - Filter by creation date less than or equal - ``created.eq('date')`` - Filter
                by creation date equal to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/payees"),
            path_params=[param[UUID]("userId", user_id)],
            query_params=[param[int | None]("limit", limit), param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[PayeesListResponse],
            error_mapper=get_payees_error_mapper,
            request_options=request_options,
        )


class AsyncPayeesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_payee_details(
        self, user_id: UUID, payee_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PayeeDetailsResponse, GetPayeeDetailsErrorBody]:
        """Retrieves detailed information for a specific payee. The response includes type-specific details based on the
        payee type (domestic, biller, international, or digitalWallet).

        Args:
            user_id: The unique identifier of the user.
            payee_id: The unique identifier of the payee.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/payees/{payeeId}"),
            path_params=[param[UUID]("userId", user_id), param[UUID]("payeeId", payee_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[PayeeDetailsResponse],
            error_mapper=get_payee_details_error_mapper,
            request_options=request_options,
        )

    async def get_payees(
        self,
        user_id: UUID,
        *,
        limit: int | None = 25,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PayeesListResponse, GetPayeesErrorBody]:
        """Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID,
        and creation date.

        Args:
            user_id: The unique identifier of the user.
            limit: The maximum number of payees to return per page. Valid values are 1-500. Default is 25.
            filter_: Filter expression to narrow down results. Supports the following filters: - ``type.eq('value')`` -
                Filter by payee type (domestic, biller, international, digitalWallet) - ``connectionId.eq('value')`` -
                Filter by connection ID - ``created.bt('startDate','endDate')`` - Filter by creation date range -
                ``created.gt('date')`` - Filter by creation date greater than - ``created.gteq('date')`` - Filter by
                creation date greater than or equal - ``created.lt('date')`` - Filter by creation date less than -
                ``created.lteq('date')`` - Filter by creation date less than or equal - ``created.eq('date')`` - Filter
                by creation date equal to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/payees"),
            path_params=[param[UUID]("userId", user_id)],
            query_params=[param[int | None]("limit", limit), param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[PayeesListResponse],
            error_mapper=get_payees_error_mapper,
            request_options=request_options,
        )
