from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from pydantic import EmailStr

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_invite_error import CancelInviteErrorBody, cancel_invite_error_mapper
from ..errors.delete_user_error import DeleteUserErrorBody, delete_user_error_mapper
from ..errors.invite_user_error import InviteUserErrorBody, invite_user_error_mapper
from ..errors.list_users_error import ListUsersErrorBody, list_users_error_mapper
from ..errors.resend_invite_error import ResendInviteErrorBody, resend_invite_error_mapper
from ..errors.update_user_error import UpdateUserErrorBody, update_user_error_mapper
from ..models.cancel_invite_response import CancelInviteResponse
from ..models.delete_user_response import DeleteUserResponse
from ..models.invite_response import InviteResponse
from ..models.invite_user_request import InviteUserRequest, InviteUserRequestDict
from ..models.list_users_response_body import ListUsersResponseBody
from ..models.resend_invite_response import ResendInviteResponse
from ..models.update_user_request import UpdateUserRequest, UpdateUserRequestDict
from ..models.update_user_response import UpdateUserResponse
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def cancel_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CancelInviteResponse:
        """Marks the invite as ``Cancelled`` and invalidates the invite token so any outstanding email links stop
        working. The invite document is retained (soft cancel) — the user row remains visible in ``GET /iam/v1/users``
        with ``inviteStatus: Cancelled``. Use ``DELETE /iam/v1/users/{id}`` to fully remove the record.

        Returns ``404`` if no invite exists for the given ID, and ``409`` if the invite is already cancelled.

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Invite cancelled.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - Invite already cancelled. Internal Server
                Error - Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_invite(
                id_, idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    def delete_user(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DeleteUserResponse:
        """Deletes a user.

        Args:
            id_: The unique ID of the user to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - User deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_user(id_, request_options=request_options))

    def invite_user(
        self, body: InviteUserRequest | InviteUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> InviteResponse:
        """Invites a new user to the organization with specified role and organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - User invitation created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.invite_user(body, request_options=request_options))

    def list_users(
        self, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ListUsersResponseBody:
        """Returns a list of users in the organization, including both active users and invited users. When the
        ``email`` query parameter is provided, returns only the user matching that email address. If no user is found
        for the given email, an empty list is returned.

        Args:
            email: Filter by exact email address. When provided, returns at most one user matching this email. The email
                is matched case-insensitively.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of users returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_users(email=email, request_options=request_options))

    def resend_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResendInviteResponse:
        """Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so old email links stop
        working), and triggers a fresh invitation email. Works on invites in any state including ``Cancelled`` —
        resending a cancelled invite reactivates it to ``Pending``.

        Returns ``404`` if no invite exists for the given ID (never created, or already accepted and removed).

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Invite resent and expiry reset.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.resend_invite(
                id_, idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    def update_user(
        self,
        id_: str,
        body: UpdateUserRequest | UpdateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateUserResponse:
        """Updates user information, including name, job function, phone, language, and role.

        Args:
            id_: The unique ID of the user to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - User updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_user(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def cancel_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CancelInviteResponse:
        """Marks the invite as ``Cancelled`` and invalidates the invite token so any outstanding email links stop
        working. The invite document is retained (soft cancel) — the user row remains visible in ``GET /iam/v1/users``
        with ``inviteStatus: Cancelled``. Use ``DELETE /iam/v1/users/{id}`` to fully remove the record.

        Returns ``404`` if no invite exists for the given ID, and ``409`` if the invite is already cancelled.

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Invite cancelled.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - Invite already cancelled. Internal Server
                Error - Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_invite(
                id_, idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    async def delete_user(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeleteUserResponse:
        """Deletes a user.

        Args:
            id_: The unique ID of the user to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - User deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_user(id_, request_options=request_options))

    async def invite_user(
        self,
        body: InviteUserRequest | InviteUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InviteResponse:
        """Invites a new user to the organization with specified role and organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - User invitation created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.invite_user(body, request_options=request_options))

    async def list_users(
        self, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ListUsersResponseBody:
        """Returns a list of users in the organization, including both active users and invited users. When the
        ``email`` query parameter is provided, returns only the user matching that email address. If no user is found
        for the given email, an empty list is returned.

        Args:
            email: Filter by exact email address. When provided, returns at most one user matching this email. The email
                is matched case-insensitively.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of users returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_users(email=email, request_options=request_options))

    async def resend_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResendInviteResponse:
        """Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so old email links stop
        working), and triggers a fresh invitation email. Works on invites in any state including ``Cancelled`` —
        resending a cancelled invite reactivates it to ``Pending``.

        Returns ``404`` if no invite exists for the given ID (never created, or already accepted and removed).

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Invite resent and expiry reset.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.resend_invite(
                id_, idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    async def update_user(
        self,
        id_: str,
        body: UpdateUserRequest | UpdateUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateUserResponse:
        """Updates user information, including name, job function, phone, language, and role.

        Args:
            id_: The unique ID of the user to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - User updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.update_user(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelInviteResponse, CancelInviteErrorBody]:
        """Marks the invite as ``Cancelled`` and invalidates the invite token so any outstanding email links stop
        working. The invite document is retained (soft cancel) — the user row remains visible in ``GET /iam/v1/users``
        with ``inviteStatus: Cancelled``. Use ``DELETE /iam/v1/users/{id}`` to fully remove the record.

        Returns ``404`` if no invite exists for the given ID, and ``409`` if the invite is already cancelled.

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/users/{id}/actions/cancel"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[Any | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CancelInviteResponse],
            error_mapper=cancel_invite_error_mapper,
            request_options=request_options,
        )

    def delete_user(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeleteUserResponse, DeleteUserErrorBody]:
        """Deletes a user.

        Args:
            id_: The unique ID of the user to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/users/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DeleteUserResponse],
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    def invite_user(
        self, body: InviteUserRequest | InviteUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InviteResponse, InviteUserErrorBody]:
        """Invites a new user to the organization with specified role and organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/users/invite"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InviteUserRequest | InviteUserRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[InviteResponse],
            error_mapper=invite_user_error_mapper,
            request_options=request_options,
        )

    def list_users(
        self, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ListUsersResponseBody, ListUsersErrorBody]:
        """Returns a list of users in the organization, including both active users and invited users. When the
        ``email`` query parameter is provided, returns only the user matching that email address. If no user is found
        for the given email, an empty list is returned.

        Args:
            email: Filter by exact email address. When provided, returns at most one user matching this email. The email
                is matched case-insensitively.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/users"),
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ListUsersResponseBody],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    def resend_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResendInviteResponse, ResendInviteErrorBody]:
        """Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so old email links stop
        working), and triggers a fresh invitation email. Works on invites in any state including ``Cancelled`` —
        resending a cancelled invite reactivates it to ``Pending``.

        Returns ``404`` if no invite exists for the given ID (never created, or already accepted and removed).

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/users/{id}/actions/resend"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[Any | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResendInviteResponse],
            error_mapper=resend_invite_error_mapper,
            request_options=request_options,
        )

    def update_user(
        self,
        id_: str,
        body: UpdateUserRequest | UpdateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateUserResponse, UpdateUserErrorBody]:
        """Updates user information, including name, job function, phone, language, and role.

        Args:
            id_: The unique ID of the user to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/users/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserRequest | UpdateUserRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[UpdateUserResponse],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelInviteResponse, CancelInviteErrorBody]:
        """Marks the invite as ``Cancelled`` and invalidates the invite token so any outstanding email links stop
        working. The invite document is retained (soft cancel) — the user row remains visible in ``GET /iam/v1/users``
        with ``inviteStatus: Cancelled``. Use ``DELETE /iam/v1/users/{id}`` to fully remove the record.

        Returns ``404`` if no invite exists for the given ID, and ``409`` if the invite is already cancelled.

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/users/{id}/actions/cancel"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[Any | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CancelInviteResponse],
            error_mapper=cancel_invite_error_mapper,
            request_options=request_options,
        )

    async def delete_user(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeleteUserResponse, DeleteUserErrorBody]:
        """Deletes a user.

        Args:
            id_: The unique ID of the user to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/users/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DeleteUserResponse],
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    async def invite_user(
        self,
        body: InviteUserRequest | InviteUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InviteResponse, InviteUserErrorBody]:
        """Invites a new user to the organization with specified role and organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/users/invite"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InviteUserRequest | InviteUserRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[InviteResponse],
            error_mapper=invite_user_error_mapper,
            request_options=request_options,
        )

    async def list_users(
        self, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ListUsersResponseBody, ListUsersErrorBody]:
        """Returns a list of users in the organization, including both active users and invited users. When the
        ``email`` query parameter is provided, returns only the user matching that email address. If no user is found
        for the given email, an empty list is returned.

        Args:
            email: Filter by exact email address. When provided, returns at most one user matching this email. The email
                is matched case-insensitively.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/users"),
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ListUsersResponseBody],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    async def resend_invite(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResendInviteResponse, ResendInviteErrorBody]:
        """Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so old email links stop
        working), and triggers a fresh invitation email. Works on invites in any state including ``Cancelled`` —
        resending a cancelled invite reactivates it to ``Pending``.

        Returns ``404`` if no invite exists for the given ID (never created, or already accepted and removed).

        Requires ``usersManager`` permission.

        Args:
            id_: The unique ID of the invited user.
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            dry_run: If ``true``, validates and simulates the operation without committing changes. The response shape
                is identical to a real execution.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/users/{id}/actions/resend"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[Any | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResendInviteResponse],
            error_mapper=resend_invite_error_mapper,
            request_options=request_options,
        )

    async def update_user(
        self,
        id_: str,
        body: UpdateUserRequest | UpdateUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateUserResponse, UpdateUserErrorBody]:
        """Updates user information, including name, job function, phone, language, and role.

        Args:
            id_: The unique ID of the user to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/users/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserRequest | UpdateUserRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[UpdateUserResponse],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )
