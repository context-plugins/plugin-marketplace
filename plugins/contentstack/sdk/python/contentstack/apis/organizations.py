from __future__ import annotations

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
from ..errors.get_all_organizations_error import GetAllOrganizationsErrorBody, get_all_organizations_error_mapper
from ..errors.get_organization_error import GetOrganizationErrorBody, get_organization_error_mapper
from ..errors.get_organization_stacks_error import GetOrganizationStacksErrorBody, get_organization_stacks_error_mapper
from ..models.organization import Organization
from ..models.organization_list import OrganizationList
from ..models.stack_list import StackList
from ..server.server import Server


class Organizations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationsWithRawResponse(client, server, auth)

    def get_all_organizations(self, *, request_options: RequestOptionsOrDict | None = None) -> OrganizationList:
        """Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their
        roles and permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of organizations the user belongs to.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.get_all_organizations(request_options=request_options))

    def get_organization(
        self, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Organization:
        """Retrieves details for a specific organization identified by its UID, including plan information and
        configuration settings.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested organization details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.get_organization(organization_uid, request_options=request_options))

    def get_organization_stacks(
        self, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> StackList:
        """Returns a list of all stacks within a given organization that the authenticated user has access to.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of stacks in the organization.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            self._with_raw_response.get_organization_stacks(organization_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OrganizationsWithRawResponse:
        return self._with_raw_response


class AsyncOrganizations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationsWithRawResponse(client, server, auth)

    async def get_all_organizations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrganizationList:
        """Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their
        roles and permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of organizations the user belongs to.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.get_all_organizations(request_options=request_options))

    async def get_organization(
        self, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Organization:
        """Retrieves details for a specific organization identified by its UID, including plan information and
        configuration settings.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested organization details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.get_organization(organization_uid, request_options=request_options))

    async def get_organization_stacks(
        self, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StackList:
        """Returns a list of all stacks within a given organization that the authenticated user has access to.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of stacks in the organization.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization_stacks(organization_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOrganizationsWithRawResponse:
        return self._with_raw_response


class OrganizationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_organizations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrganizationList, GetAllOrganizationsErrorBody]:
        """Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their
        roles and permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/organizations"),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[OrganizationList],
            error_mapper=get_all_organizations_error_mapper,
            request_options=request_options,
        )

    def get_organization(
        self, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Organization, GetOrganizationErrorBody]:
        """Retrieves details for a specific organization identified by its UID, including plan information and
        configuration settings.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/organizations/{organization_uid}"),
            path_params=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[Organization],
            error_mapper=get_organization_error_mapper,
            request_options=request_options,
        )

    def get_organization_stacks(
        self, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StackList, GetOrganizationStacksErrorBody]:
        """Returns a list of all stacks within a given organization that the authenticated user has access to.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/organizations/{organization_uid}/stacks"),
            path_params=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[StackList],
            error_mapper=get_organization_stacks_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_organizations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrganizationList, GetAllOrganizationsErrorBody]:
        """Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their
        roles and permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/organizations"),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[OrganizationList],
            error_mapper=get_all_organizations_error_mapper,
            request_options=request_options,
        )

    async def get_organization(
        self, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Organization, GetOrganizationErrorBody]:
        """Retrieves details for a specific organization identified by its UID, including plan information and
        configuration settings.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/organizations/{organization_uid}"),
            path_params=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[Organization],
            error_mapper=get_organization_error_mapper,
            request_options=request_options,
        )

    async def get_organization_stacks(
        self, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StackList, GetOrganizationStacksErrorBody]:
        """Returns a list of all stacks within a given organization that the authenticated user has access to.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/organizations/{organization_uid}/stacks"),
            path_params=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[StackList],
            error_mapper=get_organization_stacks_error_mapper,
            request_options=request_options,
        )
