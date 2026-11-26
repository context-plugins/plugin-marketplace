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
from ..errors.list_profiles_error import ListProfilesErrorBody, list_profiles_error_mapper
from ..models.companies_api_profiles_response import CompaniesApiProfilesResponse
from ..server.server import Server


class Profiles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProfilesWithRawResponse(client, server, auth)

    def list_profiles(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiProfilesResponse:
        """Returns a list of user profiles.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved profiles

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_profiles(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> ProfilesWithRawResponse:
        return self._with_raw_response


class AsyncProfiles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProfilesWithRawResponse(client, server, auth)

    async def list_profiles(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiProfilesResponse:
        """Returns a list of user profiles.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved profiles

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_profiles(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProfilesWithRawResponse:
        return self._with_raw_response


class ProfilesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_profiles(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiProfilesResponse, ListProfilesErrorBody]:
        """Returns a list of user profiles.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/profiles"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiProfilesResponse],
            error_mapper=list_profiles_error_mapper,
            request_options=request_options,
        )


class AsyncProfilesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_profiles(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiProfilesResponse, ListProfilesErrorBody]:
        """Returns a list of user profiles.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/profiles"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiProfilesResponse],
            error_mapper=list_profiles_error_mapper,
            request_options=request_options,
        )
