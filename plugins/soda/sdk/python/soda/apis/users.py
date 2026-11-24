from __future__ import annotations

from typing import Any
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
from ..errors.delete_api_v1_user_groups_user_group_id_error import (
    DeleteApiV1UserGroupsUserGroupIdErrorBody,
    delete_api_v1_user_groups_user_group_id_error_mapper,
)
from ..errors.get_api_v1_user_groups_error import GetApiV1UserGroupsErrorBody, get_api_v1_user_groups_error_mapper
from ..errors.get_api_v1_user_groups_user_group_id_error import (
    GetApiV1UserGroupsUserGroupIdErrorBody,
    get_api_v1_user_groups_user_group_id_error_mapper,
)
from ..errors.get_api_v1_users_error import GetApiV1UsersErrorBody, get_api_v1_users_error_mapper
from ..errors.post_api_v1_user_groups_error import PostApiV1UserGroupsErrorBody, post_api_v1_user_groups_error_mapper
from ..errors.post_api_v1_user_groups_user_group_id_error import (
    PostApiV1UserGroupsUserGroupIdErrorBody,
    post_api_v1_user_groups_user_group_id_error_mapper,
)
from ..errors.post_api_v1_users_error import PostApiV1UsersErrorBody, post_api_v1_users_error_mapper
from ..errors.post_api_v1_users_user_id_disable_error import (
    PostApiV1UsersUserIdDisableErrorBody,
    post_api_v1_users_user_id_disable_error_mapper,
)
from ..models.public_api_create_user_group_request_dto import (
    PublicApiCreateUserGroupRequestDto,
    PublicApiCreateUserGroupRequestDtoDict,
)
from ..models.public_api_invite_user_request_dto import PublicApiInviteUserRequestDto, PublicApiInviteUserRequestDtoDict
from ..models.public_api_invite_user_response import PublicApiInviteUserResponse
from ..models.public_api_update_user_group_request_dto import (
    PublicApiUpdateUserGroupRequestDto,
    PublicApiUpdateUserGroupRequestDtoDict,
)
from ..models.public_api_user_groups_response import PublicApiUserGroupsResponse
from ..models.public_api_users_response import PublicApiUsersResponse
from ..models.user_group_content_dto import UserGroupContentDto
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def delete_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """This endpoint enables you to delete an existing user group from your organization's Soda Cloud account.

        In case of success, the response returns a ``200`` (OK) response.

        In case user group is not found, the response returns a ``404`` (Not found) response.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_user_groups_user_group_id(
                user_group_id, request_options=request_options
            ),
        )

    def get_api_v1_user_groups(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUserGroupsResponse:
        """This endpoint enables you to gather information about the user groups in your organization's Soda Cloud
        account, including lists of members.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user group name.

        If not specified, the query gathers information for all user groups in the account and sorts the results by user
        group name in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_user_groups(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    def get_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> UserGroupContentDto:
        """This endpoint enables you to gather information about a single user group in your organization's Soda Cloud
        account, including lists of members.

        This GET is a non-paginated API that returns a single organization based on its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_user_groups_user_group_id(user_group_id, request_options=request_options)
        )

    def get_api_v1_users(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUsersResponse:
        """This endpoint enables you to gather information about the users in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user first name, last name, or
            email address.

        If not specified, the query gathers information for all users in the account and sorts the results by user name
        in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_users(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    def post_api_v1_user_groups(
        self,
        body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint enables you to create a new user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``201`` and contains headers ``Location`` which is a reference to
        the newly created User Group.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_user_groups(body, request_options=request_options))

    def post_api_v1_user_groups_user_group_id(
        self,
        user_group_id: str,
        body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UserGroupContentDto:
        """This endpoint enables you to update an existing user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``200`` and contains updated User Group details.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_user_groups_user_group_id(
                user_group_id, body, request_options=request_options
            ),
        )

    def post_api_v1_users(
        self,
        body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiInviteUserResponse:
        """This endpoint enables you to invite users to your organization's Soda Cloud account.

        Invited users will receive an email with a link to set their password and join your organization in Soda Cloud.
        Once they complete the setup, they will have access to Soda Cloud based on the roles and permissions you assign.

        If your organization is using SSO, invited users will receive an invitation email with a link to Soda Cloud.
        When they log in using SSO, they are immediately added to the Soda Cloud organization.

        You can invite up to 10 users per request. The response contains lists of successful and failed invitations.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_users(body, request_options=request_options))

    def post_api_v1_users_user_id_disable(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """This endpoint disables a user in your organization's Soda Cloud account.

        Disabling a user deactivates their membership in the organization. The user is not deleted and can be
        reactivated later.

        Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by the identity
        provider.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_users_user_id_disable(user_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def delete_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """This endpoint enables you to delete an existing user group from your organization's Soda Cloud account.

        In case of success, the response returns a ``200`` (OK) response.

        In case user group is not found, the response returns a ``404`` (Not found) response.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_user_groups_user_group_id(
                user_group_id, request_options=request_options
            ),
        )

    async def get_api_v1_user_groups(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUserGroupsResponse:
        """This endpoint enables you to gather information about the user groups in your organization's Soda Cloud
        account, including lists of members.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user group name.

        If not specified, the query gathers information for all user groups in the account and sorts the results by user
        group name in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_user_groups(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserGroupContentDto:
        """This endpoint enables you to gather information about a single user group in your organization's Soda Cloud
        account, including lists of members.

        This GET is a non-paginated API that returns a single organization based on its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_user_groups_user_group_id(
                user_group_id, request_options=request_options
            ),
        )

    async def get_api_v1_users(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUsersResponse:
        """This endpoint enables you to gather information about the users in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user first name, last name, or
            email address.

        If not specified, the query gathers information for all users in the account and sorts the results by user name
        in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_users(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_user_groups(
        self,
        body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint enables you to create a new user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``201`` and contains headers ``Location`` which is a reference to
        the newly created User Group.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_user_groups(body, request_options=request_options))

    async def post_api_v1_user_groups_user_group_id(
        self,
        user_group_id: str,
        body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserGroupContentDto:
        """This endpoint enables you to update an existing user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``200`` and contains updated User Group details.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_user_groups_user_group_id(
                user_group_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_users(
        self,
        body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiInviteUserResponse:
        """This endpoint enables you to invite users to your organization's Soda Cloud account.

        Invited users will receive an email with a link to set their password and join your organization in Soda Cloud.
        Once they complete the setup, they will have access to Soda Cloud based on the roles and permissions you assign.

        If your organization is using SSO, invited users will receive an invitation email with a link to Soda Cloud.
        When they log in using SSO, they are immediately added to the Soda Cloud organization.

        You can invite up to 10 users per request. The response contains lists of successful and failed invitations.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_users(body, request_options=request_options))

    async def post_api_v1_users_user_id_disable(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """This endpoint disables a user in your organization's Soda Cloud account.

        Disabling a user deactivates their membership in the organization. The user is not deleted and can be
        reactivated later.

        Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by the identity
        provider.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_users_user_id_disable(user_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiV1UserGroupsUserGroupIdErrorBody]:
        """This endpoint enables you to delete an existing user group from your organization's Soda Cloud account.

        In case of success, the response returns a ``200`` (OK) response.

        In case user group is not found, the response returns a ``404`` (Not found) response.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/userGroups/{userGroupId}"),
            path_params=[param[str]("userGroupId", user_group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[Any],
            error_mapper=delete_api_v1_user_groups_user_group_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_user_groups(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUserGroupsResponse, GetApiV1UserGroupsErrorBody]:
        """This endpoint enables you to gather information about the user groups in your organization's Soda Cloud
        account, including lists of members.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user group name.

        If not specified, the query gathers information for all user groups in the account and sorts the results by user
        group name in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/userGroups"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUserGroupsResponse],
            error_mapper=get_api_v1_user_groups_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserGroupContentDto, GetApiV1UserGroupsUserGroupIdErrorBody]:
        """This endpoint enables you to gather information about a single user group in your organization's Soda Cloud
        account, including lists of members.

        This GET is a non-paginated API that returns a single organization based on its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/userGroups/{userGroupId}"),
            path_params=[param[str]("userGroupId", user_group_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[UserGroupContentDto],
            error_mapper=get_api_v1_user_groups_user_group_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_users(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUsersResponse, GetApiV1UsersErrorBody]:
        """This endpoint enables you to gather information about the users in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user first name, last name, or
            email address.

        If not specified, the query gathers information for all users in the account and sorts the results by user name
        in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/users"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUsersResponse],
            error_mapper=get_api_v1_users_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_user_groups(
        self,
        body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1UserGroupsErrorBody]:
        """This endpoint enables you to create a new user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``201`` and contains headers ``Location`` which is a reference to
        the newly created User Group.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/userGroups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_user_groups_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_user_groups_user_group_id(
        self,
        user_group_id: str,
        body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UserGroupContentDto, PostApiV1UserGroupsUserGroupIdErrorBody]:
        """This endpoint enables you to update an existing user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``200`` and contains updated User Group details.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/userGroups/{userGroupId}"),
            path_params=[param[str]("userGroupId", user_group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[UserGroupContentDto],
            error_mapper=post_api_v1_user_groups_user_group_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_users(
        self,
        body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiInviteUserResponse, PostApiV1UsersErrorBody]:
        """This endpoint enables you to invite users to your organization's Soda Cloud account.

        Invited users will receive an email with a link to set their password and join your organization in Soda Cloud.
        Once they complete the setup, they will have access to Soda Cloud based on the roles and permissions you assign.

        If your organization is using SSO, invited users will receive an invitation email with a link to Soda Cloud.
        When they log in using SSO, they are immediately added to the Soda Cloud organization.

        You can invite up to 10 users per request. The response contains lists of successful and failed invitations.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiInviteUserResponse],
            error_mapper=post_api_v1_users_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_users_user_id_disable(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, PostApiV1UsersUserIdDisableErrorBody]:
        """This endpoint disables a user in your organization's Soda Cloud account.

        Disabling a user deactivates their membership in the organization. The user is not deleted and can be
        reactivated later.

        Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by the identity
        provider.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/users/{userId}/disable"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[Any],
            error_mapper=post_api_v1_users_user_id_disable_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiV1UserGroupsUserGroupIdErrorBody]:
        """This endpoint enables you to delete an existing user group from your organization's Soda Cloud account.

        In case of success, the response returns a ``200`` (OK) response.

        In case user group is not found, the response returns a ``404`` (Not found) response.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/userGroups/{userGroupId}"),
            path_params=[param[str]("userGroupId", user_group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[Any],
            error_mapper=delete_api_v1_user_groups_user_group_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_user_groups(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUserGroupsResponse, GetApiV1UserGroupsErrorBody]:
        """This endpoint enables you to gather information about the user groups in your organization's Soda Cloud
        account, including lists of members.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user group name.

        If not specified, the query gathers information for all user groups in the account and sorts the results by user
        group name in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/userGroups"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUserGroupsResponse],
            error_mapper=get_api_v1_user_groups_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_user_groups_user_group_id(
        self, user_group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserGroupContentDto, GetApiV1UserGroupsUserGroupIdErrorBody]:
        """This endpoint enables you to gather information about a single user group in your organization's Soda Cloud
        account, including lists of members.

        This GET is a non-paginated API that returns a single organization based on its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/userGroups/{userGroupId}"),
            path_params=[param[str]("userGroupId", user_group_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[UserGroupContentDto],
            error_mapper=get_api_v1_user_groups_user_group_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_users(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUsersResponse, GetApiV1UsersErrorBody]:
        """This endpoint enables you to gather information about the users in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the user first name, last name, or
            email address.

        If not specified, the query gathers information for all users in the account and sorts the results by user name
        in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/users"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUsersResponse],
            error_mapper=get_api_v1_users_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_user_groups(
        self,
        body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1UserGroupsErrorBody]:
        """This endpoint enables you to create a new user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``201`` and contains headers ``Location`` which is a reference to
        the newly created User Group.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/userGroups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_user_groups_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_user_groups_user_group_id(
        self,
        user_group_id: str,
        body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserGroupContentDto, PostApiV1UserGroupsUserGroupIdErrorBody]:
        """This endpoint enables you to update an existing user group in your organization's Soda Cloud account.

        The Response of this call, when successful, is ``200`` and contains updated User Group details.

        ## Authorization

        Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for
        more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_group_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/userGroups/{userGroupId}"),
            path_params=[param[str]("userGroupId", user_group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[UserGroupContentDto],
            error_mapper=post_api_v1_user_groups_user_group_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_users(
        self,
        body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiInviteUserResponse, PostApiV1UsersErrorBody]:
        """This endpoint enables you to invite users to your organization's Soda Cloud account.

        Invited users will receive an email with a link to set their password and join your organization in Soda Cloud.
        Once they complete the setup, they will have access to Soda Cloud based on the roles and permissions you assign.

        If your organization is using SSO, invited users will receive an invitation email with a link to Soda Cloud.
        When they log in using SSO, they are immediately added to the Soda Cloud organization.

        You can invite up to 10 users per request. The response contains lists of successful and failed invitations.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiInviteUserResponse],
            error_mapper=post_api_v1_users_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_users_user_id_disable(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, PostApiV1UsersUserIdDisableErrorBody]:
        """This endpoint disables a user in your organization's Soda Cloud account.

        Disabling a user deactivates their membership in the organization. The user is not deleted and can be
        reactivated later.

        Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by the identity
        provider.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Users``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/users/{userId}/disable"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[Any],
            error_mapper=post_api_v1_users_user_id_disable_error_mapper,
            request_options=request_options,
        )
