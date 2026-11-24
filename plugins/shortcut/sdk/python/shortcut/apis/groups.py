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
from ..errors.create_group_error import CreateGroupErrorBody, create_group_error_mapper
from ..errors.get_group_error import GetGroupErrorBody, get_group_error_mapper
from ..errors.list_group_stories_error import ListGroupStoriesErrorBody, list_group_stories_error_mapper
from ..errors.list_groups_error import ListGroupsErrorBody, list_groups_error_mapper
from ..errors.update_group_error import UpdateGroupErrorBody, update_group_error_mapper
from ..models.create_group import CreateGroup, CreateGroupDict
from ..models.group import Group
from ..models.story_slim import StorySlim
from ..models.update_group import UpdateGroup, UpdateGroupDict
from ..server.server import Server


class Groups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GroupsWithRawResponse(client, server, auth)

    def create_group(
        self, body: CreateGroup | CreateGroupDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Group:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(self._with_raw_response.create_group(body, request_options=request_options))

    def get_group(self, group_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Group:
        """Send a ``GET`` request.

        Args:
            group_public_id: The unique ID of the Group.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_group(group_public_id, request_options=request_options))

    def list_group_stories(
        self,
        group_public_id: UUID,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """List the Stories assigned to the Group. (By default, limited to 1,000).

        Args:
            group_public_id: The unique ID of the Group.
            limit: The maximum number of results to return. (Defaults to 1000, max 1000)
            offset: The offset at which to begin returning results. (Defaults to 0)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_group_stories(
                group_public_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_groups(
        self, *, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[Group]:
        """A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be
        associated to Stories, Epics, and Iterations within Shortcut.

        Args:
            archived: Filter groups by their archived state. If true, returns only archived groups. If false, returns
                only unarchived groups. If not provided, returns all groups
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_groups(archived=archived, request_options=request_options))

    def update_group(
        self,
        group_public_id: UUID,
        body: UpdateGroup | UpdateGroupDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Group:
        """Send a ``PUT`` request.

        Args:
            group_public_id: The unique ID of the Group.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(self._with_raw_response.update_group(group_public_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> GroupsWithRawResponse:
        return self._with_raw_response


class AsyncGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGroupsWithRawResponse(client, server, auth)

    async def create_group(
        self, body: CreateGroup | CreateGroupDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Group:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(await self._with_raw_response.create_group(body, request_options=request_options))

    async def get_group(
        self, group_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Group:
        """Send a ``GET`` request.

        Args:
            group_public_id: The unique ID of the Group.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_group(group_public_id, request_options=request_options))

    async def list_group_stories(
        self,
        group_public_id: UUID,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """List the Stories assigned to the Group. (By default, limited to 1,000).

        Args:
            group_public_id: The unique ID of the Group.
            limit: The maximum number of results to return. (Defaults to 1000, max 1000)
            offset: The offset at which to begin returning results. (Defaults to 0)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_group_stories(
                group_public_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_groups(
        self, *, archived: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Group]:
        """A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be
        associated to Stories, Epics, and Iterations within Shortcut.

        Args:
            archived: Filter groups by their archived state. If true, returns only archived groups. If false, returns
                only unarchived groups. If not provided, returns all groups
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_groups(archived=archived, request_options=request_options))

    async def update_group(
        self,
        group_public_id: UUID,
        body: UpdateGroup | UpdateGroupDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Group:
        """Send a ``PUT`` request.

        Args:
            group_public_id: The unique ID of the Group.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_group(group_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncGroupsWithRawResponse:
        return self._with_raw_response


class GroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_group(
        self, body: CreateGroup | CreateGroupDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Group, CreateGroupErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGroup | CreateGroupDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Group],
            error_mapper=create_group_error_mapper,
            request_options=request_options,
        )

    def get_group(
        self, group_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Group, GetGroupErrorBody]:
        """Send a ``GET`` request.

        Args:
            group_public_id: The unique ID of the Group.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/groups/{group-public-id}"),
            path_params=[param[UUID]("group-public-id", group_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Group],
            error_mapper=get_group_error_mapper,
            request_options=request_options,
        )

    def list_group_stories(
        self,
        group_public_id: UUID,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListGroupStoriesErrorBody]:
        """List the Stories assigned to the Group. (By default, limited to 1,000).

        Args:
            group_public_id: The unique ID of the Group.
            limit: The maximum number of results to return. (Defaults to 1000, max 1000)
            offset: The offset at which to begin returning results. (Defaults to 0)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/groups/{group-public-id}/stories"),
            path_params=[param[UUID]("group-public-id", group_public_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=list_group_stories_error_mapper,
            request_options=request_options,
        )

    def list_groups(
        self, *, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Group], ListGroupsErrorBody]:
        """A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be
        associated to Stories, Epics, and Iterations within Shortcut.

        Args:
            archived: Filter groups by their archived state. If true, returns only archived groups. If false, returns
                only unarchived groups. If not provided, returns all groups
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/groups"),
            query_params=[param[bool | None]("archived", archived)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Group]],
            error_mapper=list_groups_error_mapper,
            request_options=request_options,
        )

    def update_group(
        self,
        group_public_id: UUID,
        body: UpdateGroup | UpdateGroupDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, UpdateGroupErrorBody]:
        """Send a ``PUT`` request.

        Args:
            group_public_id: The unique ID of the Group.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/groups/{group-public-id}"),
            path_params=[param[UUID]("group-public-id", group_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGroup | UpdateGroupDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Group],
            error_mapper=update_group_error_mapper,
            request_options=request_options,
        )


class AsyncGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_group(
        self, body: CreateGroup | CreateGroupDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Group, CreateGroupErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGroup | CreateGroupDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Group],
            error_mapper=create_group_error_mapper,
            request_options=request_options,
        )

    async def get_group(
        self, group_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Group, GetGroupErrorBody]:
        """Send a ``GET`` request.

        Args:
            group_public_id: The unique ID of the Group.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/groups/{group-public-id}"),
            path_params=[param[UUID]("group-public-id", group_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Group],
            error_mapper=get_group_error_mapper,
            request_options=request_options,
        )

    async def list_group_stories(
        self,
        group_public_id: UUID,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListGroupStoriesErrorBody]:
        """List the Stories assigned to the Group. (By default, limited to 1,000).

        Args:
            group_public_id: The unique ID of the Group.
            limit: The maximum number of results to return. (Defaults to 1000, max 1000)
            offset: The offset at which to begin returning results. (Defaults to 0)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/groups/{group-public-id}/stories"),
            path_params=[param[UUID]("group-public-id", group_public_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=list_group_stories_error_mapper,
            request_options=request_options,
        )

    async def list_groups(
        self, *, archived: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Group], ListGroupsErrorBody]:
        """A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be
        associated to Stories, Epics, and Iterations within Shortcut.

        Args:
            archived: Filter groups by their archived state. If true, returns only archived groups. If false, returns
                only unarchived groups. If not provided, returns all groups
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/groups"),
            query_params=[param[bool | None]("archived", archived)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Group]],
            error_mapper=list_groups_error_mapper,
            request_options=request_options,
        )

    async def update_group(
        self,
        group_public_id: UUID,
        body: UpdateGroup | UpdateGroupDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, UpdateGroupErrorBody]:
        """Send a ``PUT`` request.

        Args:
            group_public_id: The unique ID of the Group.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/groups/{group-public-id}"),
            path_params=[param[UUID]("group-public-id", group_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGroup | UpdateGroupDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Group],
            error_mapper=update_group_error_mapper,
            request_options=request_options,
        )
