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
from ..errors.get_all_accounts_error import GetAllAccountsErrorBody, get_all_accounts_error_mapper
from ..models.account_list import AccountList
from ..server.server import Server


class Accounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsWithRawResponse(client, server, auth)

    def get_all_accounts(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AccountList:
        """Retrieves all external service account connections configured for the automation project, such as connections
        to Slack, email services, or other third-party platforms.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of external service account connections.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_accounts(organization_uid, project_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AccountsWithRawResponse:
        return self._with_raw_response


class AsyncAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsWithRawResponse(client, server, auth)

    async def get_all_accounts(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AccountList:
        """Retrieves all external service account connections configured for the automation project, such as connections
        to Slack, email services, or other third-party platforms.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of external service account connections.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_accounts(
                organization_uid, project_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAccountsWithRawResponse:
        return self._with_raw_response


class AccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_accounts(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountList, GetAllAccountsErrorBody]:
        """Retrieves all external service account connections configured for the automation project, such as connections
        to Slack, email services, or other third-party platforms.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/accounts"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[AccountList],
            error_mapper=get_all_accounts_error_mapper,
            request_options=request_options,
        )


class AsyncAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_accounts(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountList, GetAllAccountsErrorBody]:
        """Retrieves all external service account connections configured for the automation project, such as connections
        to Slack, email services, or other third-party platforms.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/accounts"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[AccountList],
            error_mapper=get_all_accounts_error_mapper,
            request_options=request_options,
        )
