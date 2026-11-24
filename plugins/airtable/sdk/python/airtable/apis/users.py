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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_scim_user_error import CreateScimUserErrorBody, create_scim_user_error_mapper
from ..errors.delete_scim_user_error import DeleteScimUserErrorBody, delete_scim_user_error_mapper
from ..errors.get_scim_user_error import GetScimUserErrorBody, get_scim_user_error_mapper
from ..errors.list_scim_users_error import ListScimUsersErrorBody, list_scim_users_error_mapper
from ..errors.replace_scim_user_error import ReplaceScimUserErrorBody, replace_scim_user_error_mapper
from ..errors.update_scim_user_error import UpdateScimUserErrorBody, update_scim_user_error_mapper
from ..models.scim_patch_request import ScimPatchRequest, ScimPatchRequestDict
from ..models.scim_user import ScimUser
from ..models.scim_user_create_request import ScimUserCreateRequest, ScimUserCreateRequestDict
from ..models.scim_user_list_response import ScimUserListResponse
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def create_scim_user(
        self,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise
        account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SCIM user resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. A user with the same
                userName already exists. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.create_scim_user(body, request_options=request_options))

    def delete_scim_user(self, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all
        Airtable resources associated with the enterprise.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user was successfully deleted. No content returned.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.delete_scim_user(user_id, request_options=request_options))

    def get_scim_user(self, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ScimUser:
        """Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including
        name, email, and active status.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested SCIM user resource.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.get_scim_user(user_id, request_options=request_options))

    def list_scim_users(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUserListResponse:
        """Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using
        startIndex and count parameters per the SCIM 2.0 specification.

        Args:
            filter_: SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName.
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing user resources.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.list_scim_users(
                filter_=filter_, start_index=start_index, count=count, request_options=request_options
            ),
        )

    def replace_scim_user(
        self,
        user_id: str,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body.
        This is a full replacement, not a partial update.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The replaced SCIM user resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.replace_scim_user(user_id, body, request_options=request_options))

    def update_scim_user(
        self,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove
        operations on user attributes. Commonly used to activate or deactivate users.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM user resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.update_scim_user(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def create_scim_user(
        self,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise
        account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SCIM user resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. A user with the same
                userName already exists. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.create_scim_user(body, request_options=request_options))

    async def delete_scim_user(self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all
        Airtable resources associated with the enterprise.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user was successfully deleted. No content returned.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.delete_scim_user(user_id, request_options=request_options))

    async def get_scim_user(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ScimUser:
        """Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including
        name, email, and active status.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested SCIM user resource.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.get_scim_user(user_id, request_options=request_options))

    async def list_scim_users(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUserListResponse:
        """Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using
        startIndex and count parameters per the SCIM 2.0 specification.

        Args:
            filter_: SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName.
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing user resources.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_scim_users(
                filter_=filter_, start_index=start_index, count=count, request_options=request_options
            ),
        )

    async def replace_scim_user(
        self,
        user_id: str,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body.
        This is a full replacement, not a partial update.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The replaced SCIM user resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.replace_scim_user(user_id, body, request_options=request_options))

    async def update_scim_user(
        self,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove
        operations on user attributes. Commonly used to activate or deactivate users.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM user resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.update_scim_user(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_scim_user(
        self,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, CreateScimUserErrorBody]:
        """Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise
        account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_airtable_scim_groups_api("/Users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUserCreateRequest | ScimUserCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=create_scim_user_error_mapper,
            request_options=request_options,
        )

    def delete_scim_user(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteScimUserErrorBody]:
        """Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all
        Airtable resources associated with the enterprise.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_scim_user_error_mapper,
            request_options=request_options,
        )

    def get_scim_user(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimUser, GetScimUserErrorBody]:
        """Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including
        name, email, and active status.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=get_scim_user_error_mapper,
            request_options=request_options,
        )

    def list_scim_users(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUserListResponse, ListScimUsersErrorBody]:
        """Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using
        startIndex and count parameters per the SCIM 2.0 specification.

        Args:
            filter_: SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName.
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Users"),
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("startIndex", start_index),
                param[int | None]("count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUserListResponse],
            error_mapper=list_scim_users_error_mapper,
            request_options=request_options,
        )

    def replace_scim_user(
        self,
        user_id: str,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, ReplaceScimUserErrorBody]:
        """Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body.
        This is a full replacement, not a partial update.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUserCreateRequest | ScimUserCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=replace_scim_user_error_mapper,
            request_options=request_options,
        )

    def update_scim_user(
        self,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, UpdateScimUserErrorBody]:
        """Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove
        operations on user attributes. Commonly used to activate or deactivate users.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=update_scim_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_scim_user(
        self,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, CreateScimUserErrorBody]:
        """Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise
        account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_airtable_scim_groups_api("/Users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUserCreateRequest | ScimUserCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=create_scim_user_error_mapper,
            request_options=request_options,
        )

    async def delete_scim_user(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteScimUserErrorBody]:
        """Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all
        Airtable resources associated with the enterprise.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_scim_user_error_mapper,
            request_options=request_options,
        )

    async def get_scim_user(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScimUser, GetScimUserErrorBody]:
        """Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including
        name, email, and active status.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=get_scim_user_error_mapper,
            request_options=request_options,
        )

    async def list_scim_users(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUserListResponse, ListScimUsersErrorBody]:
        """Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using
        startIndex and count parameters per the SCIM 2.0 specification.

        Args:
            filter_: SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName.
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Users"),
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("startIndex", start_index),
                param[int | None]("count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUserListResponse],
            error_mapper=list_scim_users_error_mapper,
            request_options=request_options,
        )

    async def replace_scim_user(
        self,
        user_id: str,
        body: ScimUserCreateRequest | ScimUserCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, ReplaceScimUserErrorBody]:
        """Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body.
        This is a full replacement, not a partial update.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUserCreateRequest | ScimUserCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=replace_scim_user_error_mapper,
            request_options=request_options,
        )

    async def update_scim_user(
        self,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, UpdateScimUserErrorBody]:
        """Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove
        operations on user attributes. Commonly used to activate or deactivate users.

        Args:
            user_id: The unique identifier of the SCIM user resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_airtable_scim_groups_api("/Users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=update_scim_user_error_mapper,
            request_options=request_options,
        )
