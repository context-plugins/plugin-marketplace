from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.list_employees_error import ListEmployeesErrorBody, list_employees_error_mapper
from ..models.companies_api_employees_response import CompaniesApiEmployeesResponse
from ..server.server import Server


class Employees:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EmployeesWithRawResponse(client, server, auth)

    def list_employees(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiEmployeesResponse:
        """Returns a list of employee objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved employees

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_employees(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EmployeesWithRawResponse:
        return self._with_raw_response


class AsyncEmployees:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEmployeesWithRawResponse(client, server, auth)

    async def list_employees(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiEmployeesResponse:
        """Returns a list of employee objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved employees

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_employees(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEmployeesWithRawResponse:
        return self._with_raw_response


class EmployeesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_employees(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiEmployeesResponse, ListEmployeesErrorBody]:
        """Returns a list of employee objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/employees"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiEmployeesResponse],
            error_mapper=list_employees_error_mapper,
            request_options=request_options,
        )


class AsyncEmployeesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_employees(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiEmployeesResponse, ListEmployeesErrorBody]:
        """Returns a list of employee objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/employees"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiEmployeesResponse],
            error_mapper=list_employees_error_mapper,
            request_options=request_options,
        )
