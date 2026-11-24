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
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.merge_accounts_error import MergeAccountsErrorBody, merge_accounts_error_mapper
from ..models.accounts_merge_request import AccountsMergeRequest, AccountsMergeRequestDict
from ..server.server import Server


class Accounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsWithRawResponse(client, server, auth)

    def merge_accounts(
        self,
        body: AccountsMergeRequest | AccountsMergeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates or updates accounts (previously called organizations) using the same merge semantics as people.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accounts created or updated.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.merge_accounts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AccountsWithRawResponse:
        return self._with_raw_response


class AsyncAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsWithRawResponse(client, server, auth)

    async def merge_accounts(
        self,
        body: AccountsMergeRequest | AccountsMergeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates or updates accounts (previously called organizations) using the same merge semantics as people.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accounts created or updated.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.merge_accounts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountsWithRawResponse:
        return self._with_raw_response


class AccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def merge_accounts(
        self,
        body: AccountsMergeRequest | AccountsMergeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, MergeAccountsErrorBody]:
        """Creates or updates accounts (previously called organizations) using the same merge semantics as people.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/accounts/merge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AccountsMergeRequest | AccountsMergeRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=merge_accounts_error_mapper,
            request_options=request_options,
        )


class AsyncAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def merge_accounts(
        self,
        body: AccountsMergeRequest | AccountsMergeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, MergeAccountsErrorBody]:
        """Creates or updates accounts (previously called organizations) using the same merge semantics as people.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/accounts/merge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AccountsMergeRequest | AccountsMergeRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=merge_accounts_error_mapper,
            request_options=request_options,
        )
