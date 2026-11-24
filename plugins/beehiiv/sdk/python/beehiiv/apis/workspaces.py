from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.identify2_error import Identify2ErrorBody, identify2_error_mapper
from ..errors.permissions_error import PermissionsErrorBody, permissions_error_mapper
from ..errors.publications_by_subscription_email_error import (
    PublicationsBySubscriptionEmailErrorBody,
    publications_by_subscription_email_error_mapper,
)
from ..models.enums.publications_by_subscription_email_request_expand_item import (
    PublicationsBySubscriptionEmailRequestExpandItemOrStr,
)
from ..models.publications_by_subscription_email_response_item import PublicationsBySubscriptionEmailResponseItem
from ..models.workspace_identify_response import WorkspaceIdentifyResponse
from ..models.workspace_permissions_response import WorkspacePermissionsResponse
from ..server.server import Server


class Workspaces:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WorkspacesWithRawResponse(client, server)

    def identify2(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspaceIdentifyResponse:
        """Retrieve information about the workspace the OAuth or API token is associated with.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.identify2(authorization, request_options=request_options))

    def permissions(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspacePermissionsResponse:
        """Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular
        OAuth scopes. OAuth tokens return only the scopes they were authorized for.

        ``posts`` write access is only included when the Send API feature is enabled; tokens with ``posts:write`` but
        without Send API receive ``posts`` as ``["read"]``.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.permissions(authorization, request_options=request_options))

    def publications_by_subscription_email(
        self,
        email: str,
        authorization: str,
        *,
        expand: list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[PublicationsBySubscriptionEmailResponseItem]:
        """Retrieve all publications in the workspace that have a subscription for the specified email address. The
        workspace is determined by the provided API key.

        Args:
            email: The email address to search for subscriptions
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``subscription`` - Returns the
                full Subscription object for the email address in each publication. <br>``publication`` - Returns the
                full Publication object instead of just ID and name. <br>``subscription_custom_fields`` - Returns custom
                field values nested within the subscription object. (Returns the subscription object regardless of
                whether ``subscription`` is requested.)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.publications_by_subscription_email(
                email, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WorkspacesWithRawResponse:
        return self._with_raw_response


class AsyncWorkspaces:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWorkspacesWithRawResponse(client, server)

    async def identify2(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceIdentifyResponse:
        """Retrieve information about the workspace the OAuth or API token is associated with.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.identify2(authorization, request_options=request_options))

    async def permissions(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspacePermissionsResponse:
        """Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular
        OAuth scopes. OAuth tokens return only the scopes they were authorized for.

        ``posts`` write access is only included when the Send API feature is enabled; tokens with ``posts:write`` but
        without Send API receive ``posts`` as ``["read"]``.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.permissions(authorization, request_options=request_options))

    async def publications_by_subscription_email(
        self,
        email: str,
        authorization: str,
        *,
        expand: list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[PublicationsBySubscriptionEmailResponseItem]:
        """Retrieve all publications in the workspace that have a subscription for the specified email address. The
        workspace is determined by the provided API key.

        Args:
            email: The email address to search for subscriptions
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``subscription`` - Returns the
                full Subscription object for the email address in each publication. <br>``publication`` - Returns the
                full Publication object instead of just ID and name. <br>``subscription_custom_fields`` - Returns custom
                field values nested within the subscription object. (Returns the subscription object regardless of
                whether ``subscription`` is requested.)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.publications_by_subscription_email(
                email, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWorkspacesWithRawResponse:
        return self._with_raw_response


class WorkspacesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def identify2(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceIdentifyResponse, Identify2ErrorBody]:
        """Retrieve information about the workspace the OAuth or API token is associated with.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/identify"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[WorkspaceIdentifyResponse],
            error_mapper=identify2_error_mapper,
            request_options=request_options,
        )

    def permissions(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspacePermissionsResponse, PermissionsErrorBody]:
        """Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular
        OAuth scopes. OAuth tokens return only the scopes they were authorized for.

        ``posts`` write access is only included when the Send API feature is enabled; tokens with ``posts:write`` but
        without Send API receive ``posts`` as ``["read"]``.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/permissions"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[WorkspacePermissionsResponse],
            error_mapper=permissions_error_mapper,
            request_options=request_options,
        )

    def publications_by_subscription_email(
        self,
        email: str,
        authorization: str,
        *,
        expand: list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PublicationsBySubscriptionEmailResponseItem], PublicationsBySubscriptionEmailErrorBody]:
        """Retrieve all publications in the workspace that have a subscription for the specified email address. The
        workspace is determined by the provided API key.

        Args:
            email: The email address to search for subscriptions
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``subscription`` - Returns the
                full Subscription object for the email address in each publication. <br>``publication`` - Returns the
                full Publication object instead of just ID and name. <br>``subscription_custom_fields`` - Returns custom
                field values nested within the subscription object. (Returns the subscription object regardless of
                whether ``subscription`` is requested.)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/publications/by_subscription_email/{email}"),
            path_params=[param[str]("email", email)],
            query_params=[param[list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None]("expand", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[PublicationsBySubscriptionEmailResponseItem]],
            error_mapper=publications_by_subscription_email_error_mapper,
            request_options=request_options,
        )


class AsyncWorkspacesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def identify2(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceIdentifyResponse, Identify2ErrorBody]:
        """Retrieve information about the workspace the OAuth or API token is associated with.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/identify"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[WorkspaceIdentifyResponse],
            error_mapper=identify2_error_mapper,
            request_options=request_options,
        )

    async def permissions(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspacePermissionsResponse, PermissionsErrorBody]:
        """Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular
        OAuth scopes. OAuth tokens return only the scopes they were authorized for.

        ``posts`` write access is only included when the Send API feature is enabled; tokens with ``posts:write`` but
        without Send API receive ``posts`` as ``["read"]``.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/permissions"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[WorkspacePermissionsResponse],
            error_mapper=permissions_error_mapper,
            request_options=request_options,
        )

    async def publications_by_subscription_email(
        self,
        email: str,
        authorization: str,
        *,
        expand: list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PublicationsBySubscriptionEmailResponseItem], PublicationsBySubscriptionEmailErrorBody]:
        """Retrieve all publications in the workspace that have a subscription for the specified email address. The
        workspace is determined by the provided API key.

        Args:
            email: The email address to search for subscriptions
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``subscription`` - Returns the
                full Subscription object for the email address in each publication. <br>``publication`` - Returns the
                full Publication object instead of just ID and name. <br>``subscription_custom_fields`` - Returns custom
                field values nested within the subscription object. (Returns the subscription object regardless of
                whether ``subscription`` is requested.)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/publications/by_subscription_email/{email}"),
            path_params=[param[str]("email", email)],
            query_params=[param[list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None]("expand", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[PublicationsBySubscriptionEmailResponseItem]],
            error_mapper=publications_by_subscription_email_error_mapper,
            request_options=request_options,
        )
