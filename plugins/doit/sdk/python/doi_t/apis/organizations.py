from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.list_organizations_error import ListOrganizationsErrorBody, list_organizations_error_mapper
from ..models.iam_v1_organizations_response import IamV1OrganizationsResponse
from ..server.server import Server


class Organizations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationsWithRawResponse(client, server, auth)

    def list_organizations(self, *, request_options: RequestOptionsOrDict | None = None) -> IamV1OrganizationsResponse:
        """Returns a list of organizations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of organizations returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_organizations(request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationsWithRawResponse:
        return self._with_raw_response


class AsyncOrganizations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationsWithRawResponse(client, server, auth)

    async def list_organizations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IamV1OrganizationsResponse:
        """Returns a list of organizations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of organizations returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_organizations(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrganizationsWithRawResponse:
        return self._with_raw_response


class OrganizationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_organizations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IamV1OrganizationsResponse, ListOrganizationsErrorBody]:
        """Returns a list of organizations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/organizations"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[IamV1OrganizationsResponse],
            error_mapper=list_organizations_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_organizations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IamV1OrganizationsResponse, ListOrganizationsErrorBody]:
        """Returns a list of organizations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/organizations"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[IamV1OrganizationsResponse],
            error_mapper=list_organizations_error_mapper,
            request_options=request_options,
        )
