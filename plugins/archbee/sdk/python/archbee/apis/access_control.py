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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.request_magic_link_access_error import (
    RequestMagicLinkAccessErrorBody,
    request_magic_link_access_error_mapper,
)
from ..models.access_control_request_request import AccessControlRequestRequest, AccessControlRequestRequestDict
from ..models.access_control_request_response import AccessControlRequestResponse
from ..server.server import Server


class AccessControl:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccessControlWithRawResponse(client, server, auth)

    def request_magic_link_access(
        self,
        body: AccessControlRequestRequest | AccessControlRequestRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AccessControlRequestResponse:
        """Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request
        does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic
        Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with
        400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a
        Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also
        returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request,
        is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always
        re-apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``AccessControlRequest400Error1 | RawError``."""
        return unwrap(self._with_raw_response.request_magic_link_access(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AccessControlWithRawResponse:
        return self._with_raw_response


class AsyncAccessControl:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccessControlWithRawResponse(client, server, auth)

    async def request_magic_link_access(
        self,
        body: AccessControlRequestRequest | AccessControlRequestRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AccessControlRequestResponse:
        """Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request
        does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic
        Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with
        400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a
        Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also
        returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request,
        is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always
        re-apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``AccessControlRequest400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.request_magic_link_access(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccessControlWithRawResponse:
        return self._with_raw_response


class AccessControlWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def request_magic_link_access(
        self,
        body: AccessControlRequestRequest | AccessControlRequestRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AccessControlRequestResponse, RequestMagicLinkAccessErrorBody]:
        """Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request
        does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic
        Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with
        400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a
        Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also
        returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request,
        is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always
        re-apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/access-control/request"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AccessControlRequestRequest | AccessControlRequestRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AccessControlRequestResponse],
            error_mapper=request_magic_link_access_error_mapper,
            request_options=request_options,
        )


class AsyncAccessControlWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def request_magic_link_access(
        self,
        body: AccessControlRequestRequest | AccessControlRequestRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AccessControlRequestResponse, RequestMagicLinkAccessErrorBody]:
        """Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request
        does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic
        Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with
        400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a
        Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also
        returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request,
        is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always
        re-apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/access-control/request"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AccessControlRequestRequest | AccessControlRequestRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AccessControlRequestResponse],
            error_mapper=request_magic_link_access_error_mapper,
            request_options=request_options,
        )
