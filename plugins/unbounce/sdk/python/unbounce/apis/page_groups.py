from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.page_collection import PageCollection
from ..models.sub_accounts_page_groups_response import SubAccountsPageGroupsResponse
from ..server.server import Server


class PageGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PageGroupsWithRawResponse(client, server, auth)

    def list_page_groups_for_sub_account(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SubAccountsPageGroupsResponse:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page group collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_page_groups_for_sub_account(sub_account_id, request_options=request_options)
        )

    def list_pages_for_page_group(
        self, page_group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            page_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_pages_for_page_group(page_group_id, request_options=request_options))

    @property
    def with_raw_response(self) -> PageGroupsWithRawResponse:
        return self._with_raw_response


class AsyncPageGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPageGroupsWithRawResponse(client, server, auth)

    async def list_page_groups_for_sub_account(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubAccountsPageGroupsResponse:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page group collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_page_groups_for_sub_account(
                sub_account_id, request_options=request_options
            ),
        )

    async def list_pages_for_page_group(
        self, page_group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            page_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_pages_for_page_group(page_group_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPageGroupsWithRawResponse:
        return self._with_raw_response


class PageGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_page_groups_for_sub_account(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubAccountsPageGroupsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}/page_groups"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[SubAccountsPageGroupsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_pages_for_page_group(
        self, page_group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            page_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/page_groups/{page_group_id}/pages"),
            path_params=[param[str]("page_group_id", page_group_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPageGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_page_groups_for_sub_account(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubAccountsPageGroupsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}/page_groups"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[SubAccountsPageGroupsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_pages_for_page_group(
        self, page_group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            page_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/page_groups/{page_group_id}/pages"),
            path_params=[param[str]("page_group_id", page_group_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
