from __future__ import annotations

from uuid import UUID, uuid4

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_users_by_selected_user_gpg_keys_by_fingerprint_error import (
    DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody,
    delete_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper,
)
from ..errors.get_users_by_selected_user_gpg_keys_by_fingerprint_error import (
    GetUsersBySelectedUserGpgKeysByFingerprintErrorBody,
    get_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper,
)
from ..errors.get_users_by_selected_user_gpg_keys_error import (
    GetUsersBySelectedUserGpgKeysErrorBody,
    get_users_by_selected_user_gpg_keys_error_mapper,
)
from ..errors.post_users_by_selected_user_gpg_keys_error import (
    PostUsersBySelectedUserGpgKeysErrorBody,
    post_users_by_selected_user_gpg_keys_error_mapper,
)
from ..models.gpg_account_key import GpgAccountKey, GpgAccountKeyDict
from ..models.paginated_gpg_user_keys import PaginatedGpgUserKeys
from ..server.server import Server


class Gpg:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GpgWithRawResponse(client, server, auth)

    def delete_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a specific GPG public key from a user's account.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key has been deleted

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                delete a key for the specified user, or the submitted key is a subkey If the specified key does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_users_by_selected_user_gpg_keys_by_fingerprint(
                fingerprint, selected_user, request_options=request_options
            ),
        )

    def get_users_by_selected_user_gpg_keys(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedGpgUserKeys:
        """Returns a paginated list of the user's GPG public keys. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of the GPG keys associated with the account.

        Raises:
            ApiError: If the specified user's keys are not accessible to the current user If the specified user does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_users_by_selected_user_gpg_keys(selected_user, request_options=request_options)
        )

    def get_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GpgAccountKey:
        """Returns a specific GPG public key belonging to a user. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specific GPG key matching the user and fingerprint.

        Raises:
            ApiError: If the specified user's keys are not accessible to the current user If the specified user does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_users_by_selected_user_gpg_keys_by_fingerprint(
                fingerprint, selected_user, request_options=request_options
            ),
        )

    def post_users_by_selected_user_gpg_keys(
        self,
        selected_user: str,
        *,
        body: GpgAccountKey | GpgAccountKeyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GpgAccountKey:
        """Adds a new GPG public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": ""}'
        https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The new GPG key object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created GPG key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_users_by_selected_user_gpg_keys(
                selected_user, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> GpgWithRawResponse:
        return self._with_raw_response


class AsyncGpg:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGpgWithRawResponse(client, server, auth)

    async def delete_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a specific GPG public key from a user's account.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key has been deleted

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                delete a key for the specified user, or the submitted key is a subkey If the specified key does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_users_by_selected_user_gpg_keys_by_fingerprint(
                fingerprint, selected_user, request_options=request_options
            ),
        )

    async def get_users_by_selected_user_gpg_keys(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedGpgUserKeys:
        """Returns a paginated list of the user's GPG public keys. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of the GPG keys associated with the account.

        Raises:
            ApiError: If the specified user's keys are not accessible to the current user If the specified user does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_users_by_selected_user_gpg_keys(
                selected_user, request_options=request_options
            ),
        )

    async def get_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GpgAccountKey:
        """Returns a specific GPG public key belonging to a user. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specific GPG key matching the user and fingerprint.

        Raises:
            ApiError: If the specified user's keys are not accessible to the current user If the specified user does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_users_by_selected_user_gpg_keys_by_fingerprint(
                fingerprint, selected_user, request_options=request_options
            ),
        )

    async def post_users_by_selected_user_gpg_keys(
        self,
        selected_user: str,
        *,
        body: GpgAccountKey | GpgAccountKeyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GpgAccountKey:
        """Adds a new GPG public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": ""}'
        https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The new GPG key object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created GPG key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_users_by_selected_user_gpg_keys(
                selected_user, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGpgWithRawResponse:
        return self._with_raw_response


class GpgWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody]:
        """Deletes a specific GPG public key from a user's account.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/gpg-keys/{fingerprint}"),
            path_params=[param[str]("fingerprint", fingerprint), param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper,
            request_options=request_options,
        )

    def get_users_by_selected_user_gpg_keys(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedGpgUserKeys, GetUsersBySelectedUserGpgKeysErrorBody]:
        """Returns a paginated list of the user's GPG public keys. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/gpg-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedGpgUserKeys],
            error_mapper=get_users_by_selected_user_gpg_keys_error_mapper,
            request_options=request_options,
        )

    def get_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GpgAccountKey, GetUsersBySelectedUserGpgKeysByFingerprintErrorBody]:
        """Returns a specific GPG public key belonging to a user. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/gpg-keys/{fingerprint}"),
            path_params=[param[str]("fingerprint", fingerprint), param[str]("selected_user", selected_user)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[GpgAccountKey],
            error_mapper=get_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper,
            request_options=request_options,
        )

    def post_users_by_selected_user_gpg_keys(
        self,
        selected_user: str,
        *,
        body: GpgAccountKey | GpgAccountKeyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GpgAccountKey, PostUsersBySelectedUserGpgKeysErrorBody]:
        """Adds a new GPG public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": ""}'
        https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The new GPG key object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{selected_user}/gpg-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GpgAccountKey | GpgAccountKeyDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[GpgAccountKey],
            error_mapper=post_users_by_selected_user_gpg_keys_error_mapper,
            request_options=request_options,
        )


class AsyncGpgWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody]:
        """Deletes a specific GPG public key from a user's account.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/gpg-keys/{fingerprint}"),
            path_params=[param[str]("fingerprint", fingerprint), param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper,
            request_options=request_options,
        )

    async def get_users_by_selected_user_gpg_keys(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedGpgUserKeys, GetUsersBySelectedUserGpgKeysErrorBody]:
        """Returns a paginated list of the user's GPG public keys. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/gpg-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedGpgUserKeys],
            error_mapper=get_users_by_selected_user_gpg_keys_error_mapper,
            request_options=request_options,
        )

    async def get_users_by_selected_user_gpg_keys_by_fingerprint(
        self, fingerprint: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GpgAccountKey, GetUsersBySelectedUserGpgKeysByFingerprintErrorBody]:
        """Returns a specific GPG public key belonging to a user. The ``key`` and ``subkeys`` fields can also be
        requested from the endpoint. See Partial Responses for more details.

        Args:
            fingerprint: A GPG key fingerprint.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/gpg-keys/{fingerprint}"),
            path_params=[param[str]("fingerprint", fingerprint), param[str]("selected_user", selected_user)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[GpgAccountKey],
            error_mapper=get_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper,
            request_options=request_options,
        )

    async def post_users_by_selected_user_gpg_keys(
        self,
        selected_user: str,
        *,
        body: GpgAccountKey | GpgAccountKeyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GpgAccountKey, PostUsersBySelectedUserGpgKeysErrorBody]:
        """Adds a new GPG public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": ""}'
        https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The new GPG key object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{selected_user}/gpg-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GpgAccountKey | GpgAccountKeyDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[GpgAccountKey],
            error_mapper=post_users_by_selected_user_gpg_keys_error_mapper,
            request_options=request_options,
        )
