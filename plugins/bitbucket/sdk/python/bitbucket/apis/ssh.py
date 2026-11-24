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
from ..errors.delete_users_by_selected_user_ssh_keys_by_key_id_error import (
    DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody,
    delete_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
)
from ..errors.get_users_by_selected_user_ssh_keys_by_key_id_error import (
    GetUsersBySelectedUserSshKeysByKeyIdErrorBody,
    get_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
)
from ..errors.get_users_by_selected_user_ssh_keys_error import (
    GetUsersBySelectedUserSshKeysErrorBody,
    get_users_by_selected_user_ssh_keys_error_mapper,
)
from ..errors.post_users_by_selected_user_ssh_keys_error import (
    PostUsersBySelectedUserSshKeysErrorBody,
    post_users_by_selected_user_ssh_keys_error_mapper,
)
from ..errors.put_users_by_selected_user_ssh_keys_by_key_id_error import (
    PutUsersBySelectedUserSshKeysByKeyIdErrorBody,
    put_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
)
from ..models.paginated_ssh_user_keys import PaginatedSshUserKeys
from ..models.ssh_account_key import SshAccountKey, SshAccountKeyDict
from ..server.server import Server


class Ssh:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SshWithRawResponse(client, server, auth)

    def delete_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a specific SSH public key from a user's account.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key has been deleted

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_users_by_selected_user_ssh_keys_by_key_id(
                key_id, selected_user, request_options=request_options
            ),
        )

    def get_users_by_selected_user_ssh_keys(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedSshUserKeys:
        """Returns a paginated list of the user's SSH public keys.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of the SSH keys associated with the account.

        Raises:
            ApiError: If the specified user's keys are not accessible to the current user If the specified user does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_users_by_selected_user_ssh_keys(selected_user, request_options=request_options)
        )

    def get_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SshAccountKey:
        """Returns a specific SSH public key belonging to a user.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specific SSH key matching the user and UUID

        Raises:
            ApiError: If the specified user or key is not accessible to the current user If the specified user or key
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_users_by_selected_user_ssh_keys_by_key_id(
                key_id, selected_user, request_options=request_options
            ),
        )

    def post_users_by_selected_user_ssh_keys(
        self,
        selected_user: str,
        *,
        expires_on: str | None = None,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SshAccountKey:
        """Adds a new SSH public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519
        AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            expires_on: The date or date-time of when the key will expire, in `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ format. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            body: The new SSH key object. Note that the username property has been deprecated due to `privacy changes
                <https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SSH key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_users_by_selected_user_ssh_keys(
                selected_user, expires_on=expires_on, body=body, request_options=request_options
            ),
        )

    def put_users_by_selected_user_ssh_keys_by_key_id(
        self,
        key_id: str,
        selected_user: str,
        *,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SshAccountKey:
        """Updates a specific SSH public key on a user's account

        Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must
        delete and add the key again.

        Example:

        ```
        $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
        ```

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The updated SSH key object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly updated SSH key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_users_by_selected_user_ssh_keys_by_key_id(
                key_id, selected_user, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SshWithRawResponse:
        return self._with_raw_response


class AsyncSsh:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSshWithRawResponse(client, server, auth)

    async def delete_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a specific SSH public key from a user's account.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key has been deleted

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_users_by_selected_user_ssh_keys_by_key_id(
                key_id, selected_user, request_options=request_options
            ),
        )

    async def get_users_by_selected_user_ssh_keys(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedSshUserKeys:
        """Returns a paginated list of the user's SSH public keys.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of the SSH keys associated with the account.

        Raises:
            ApiError: If the specified user's keys are not accessible to the current user If the specified user does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_users_by_selected_user_ssh_keys(
                selected_user, request_options=request_options
            ),
        )

    async def get_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SshAccountKey:
        """Returns a specific SSH public key belonging to a user.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specific SSH key matching the user and UUID

        Raises:
            ApiError: If the specified user or key is not accessible to the current user If the specified user or key
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_users_by_selected_user_ssh_keys_by_key_id(
                key_id, selected_user, request_options=request_options
            ),
        )

    async def post_users_by_selected_user_ssh_keys(
        self,
        selected_user: str,
        *,
        expires_on: str | None = None,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SshAccountKey:
        """Adds a new SSH public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519
        AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            expires_on: The date or date-time of when the key will expire, in `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ format. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            body: The new SSH key object. Note that the username property has been deprecated due to `privacy changes
                <https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SSH key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_users_by_selected_user_ssh_keys(
                selected_user, expires_on=expires_on, body=body, request_options=request_options
            ),
        )

    async def put_users_by_selected_user_ssh_keys_by_key_id(
        self,
        key_id: str,
        selected_user: str,
        *,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SshAccountKey:
        """Updates a specific SSH public key on a user's account

        Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must
        delete and add the key again.

        Example:

        ```
        $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
        ```

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The updated SSH key object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly updated SSH key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_users_by_selected_user_ssh_keys_by_key_id(
                key_id, selected_user, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSshWithRawResponse:
        return self._with_raw_response


class SshWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody]:
        """Deletes a specific SSH public key from a user's account.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/ssh-keys/{key_id}"),
            path_params=[param[str]("key_id", key_id), param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def get_users_by_selected_user_ssh_keys(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSshUserKeys, GetUsersBySelectedUserSshKeysErrorBody]:
        """Returns a paginated list of the user's SSH public keys.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/ssh-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedSshUserKeys],
            error_mapper=get_users_by_selected_user_ssh_keys_error_mapper,
            request_options=request_options,
        )

    def get_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SshAccountKey, GetUsersBySelectedUserSshKeysByKeyIdErrorBody]:
        """Returns a specific SSH public key belonging to a user.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/ssh-keys/{key_id}"),
            path_params=[param[str]("key_id", key_id), param[str]("selected_user", selected_user)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SshAccountKey],
            error_mapper=get_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def post_users_by_selected_user_ssh_keys(
        self,
        selected_user: str,
        *,
        expires_on: str | None = None,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SshAccountKey, PostUsersBySelectedUserSshKeysErrorBody]:
        """Adds a new SSH public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519
        AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            expires_on: The date or date-time of when the key will expire, in `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ format. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            body: The new SSH key object. Note that the username property has been deprecated due to `privacy changes
                <https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{selected_user}/ssh-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            query_params=[param[str | None]("expires_on", expires_on)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SshAccountKey | SshAccountKeyDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SshAccountKey],
            error_mapper=post_users_by_selected_user_ssh_keys_error_mapper,
            request_options=request_options,
        )

    def put_users_by_selected_user_ssh_keys_by_key_id(
        self,
        key_id: str,
        selected_user: str,
        *,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SshAccountKey, PutUsersBySelectedUserSshKeysByKeyIdErrorBody]:
        """Updates a specific SSH public key on a user's account

        Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must
        delete and add the key again.

        Example:

        ```
        $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
        ```

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The updated SSH key object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/users/{selected_user}/ssh-keys/{key_id}"),
            path_params=[param[str]("key_id", key_id), param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SshAccountKey | SshAccountKeyDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SshAccountKey],
            error_mapper=put_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
            request_options=request_options,
        )


class AsyncSshWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody]:
        """Deletes a specific SSH public key from a user's account.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/ssh-keys/{key_id}"),
            path_params=[param[str]("key_id", key_id), param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def get_users_by_selected_user_ssh_keys(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSshUserKeys, GetUsersBySelectedUserSshKeysErrorBody]:
        """Returns a paginated list of the user's SSH public keys.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/ssh-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedSshUserKeys],
            error_mapper=get_users_by_selected_user_ssh_keys_error_mapper,
            request_options=request_options,
        )

    async def get_users_by_selected_user_ssh_keys_by_key_id(
        self, key_id: str, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SshAccountKey, GetUsersBySelectedUserSshKeysByKeyIdErrorBody]:
        """Returns a specific SSH public key belonging to a user.

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/ssh-keys/{key_id}"),
            path_params=[param[str]("key_id", key_id), param[str]("selected_user", selected_user)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SshAccountKey],
            error_mapper=get_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def post_users_by_selected_user_ssh_keys(
        self,
        selected_user: str,
        *,
        expires_on: str | None = None,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SshAccountKey, PostUsersBySelectedUserSshKeysErrorBody]:
        """Adds a new SSH public key to the specified user account and returns the resulting key.

        Example:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519
        AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
        ```

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            expires_on: The date or date-time of when the key will expire, in `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ format. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            body: The new SSH key object. Note that the username property has been deprecated due to `privacy changes
                <https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{selected_user}/ssh-keys"),
            path_params=[param[str]("selected_user", selected_user)],
            query_params=[param[str | None]("expires_on", expires_on)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SshAccountKey | SshAccountKeyDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SshAccountKey],
            error_mapper=post_users_by_selected_user_ssh_keys_error_mapper,
            request_options=request_options,
        )

    async def put_users_by_selected_user_ssh_keys_by_key_id(
        self,
        key_id: str,
        selected_user: str,
        *,
        body: SshAccountKey | SshAccountKeyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SshAccountKey, PutUsersBySelectedUserSshKeysByKeyIdErrorBody]:
        """Updates a specific SSH public key on a user's account

        Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must
        delete and add the key again.

        Example:

        ```
        $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}'
        https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
        ```

        Args:
            key_id: The SSH key's UUID value.
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            body: The updated SSH key object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/users/{selected_user}/ssh-keys/{key_id}"),
            path_params=[param[str]("key_id", key_id), param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SshAccountKey | SshAccountKeyDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SshAccountKey],
            error_mapper=put_users_by_selected_user_ssh_keys_by_key_id_error_mapper,
            request_options=request_options,
        )
