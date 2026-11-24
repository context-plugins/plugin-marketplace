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
from ..errors.list_security_groups_error import ListSecurityGroupsErrorBody, list_security_groups_error_mapper
from ..models.companies_api_security_groups_response import CompaniesApiSecurityGroupsResponse
from ..server.server import Server


class SecurityGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SecurityGroupsWithRawResponse(client, server, auth)

    def list_security_groups(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiSecurityGroupsResponse:
        """Returns a list of security groups.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved security groups

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_security_groups(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> SecurityGroupsWithRawResponse:
        return self._with_raw_response


class AsyncSecurityGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSecurityGroupsWithRawResponse(client, server, auth)

    async def list_security_groups(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiSecurityGroupsResponse:
        """Returns a list of security groups.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved security groups

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_security_groups(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSecurityGroupsWithRawResponse:
        return self._with_raw_response


class SecurityGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_security_groups(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiSecurityGroupsResponse, ListSecurityGroupsErrorBody]:
        """Returns a list of security groups.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/securityGroups"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiSecurityGroupsResponse],
            error_mapper=list_security_groups_error_mapper,
            request_options=request_options,
        )


class AsyncSecurityGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_security_groups(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiSecurityGroupsResponse, ListSecurityGroupsErrorBody]:
        """Returns a list of security groups.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/securityGroups"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiSecurityGroupsResponse],
            error_mapper=list_security_groups_error_mapper,
            request_options=request_options,
        )
