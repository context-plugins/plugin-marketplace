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
from ..errors.create_story_link_error import CreateStoryLinkErrorBody, create_story_link_error_mapper
from ..errors.delete_story_link_error import DeleteStoryLinkErrorBody, delete_story_link_error_mapper
from ..errors.get_story_link_error import GetStoryLinkErrorBody, get_story_link_error_mapper
from ..errors.update_story_link_error import UpdateStoryLinkErrorBody, update_story_link_error_mapper
from ..models.create_story_link import CreateStoryLink, CreateStoryLinkDict
from ..models.story_link import StoryLink
from ..models.update_story_link import UpdateStoryLink, UpdateStoryLinkDict
from ..server.server import Server


class StoryLinks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StoryLinksWithRawResponse(client, server, auth)

    def create_story_link(
        self, body: CreateStoryLink | CreateStoryLinkDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoryLink:
        """Story Links (called Story Relationships in the UI) allow you create semantic relationships between two
        stories. The parameters read like an active voice grammatical sentence: subject -> verb -> object.

        The subject story acts on the object Story; the object story is the direct object of the sentence.

        The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
        - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
        - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be
            archived).
        - "story 7 relates to story 3”

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_story_link(body, request_options=request_options))

    def delete_story_link(
        self, story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes the relationship between the stories for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_story_link(story_link_public_id, request_options=request_options))

    def get_story_link(
        self, story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoryLink:
        """Returns the stories and their relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_story_link(story_link_public_id, request_options=request_options))

    def update_story_link(
        self,
        story_link_public_id: int,
        body: UpdateStoryLink | UpdateStoryLinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StoryLink:
        """Updates the stories and/or the relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_story_link(story_link_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> StoryLinksWithRawResponse:
        return self._with_raw_response


class AsyncStoryLinks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStoryLinksWithRawResponse(client, server, auth)

    async def create_story_link(
        self, body: CreateStoryLink | CreateStoryLinkDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoryLink:
        """Story Links (called Story Relationships in the UI) allow you create semantic relationships between two
        stories. The parameters read like an active voice grammatical sentence: subject -> verb -> object.

        The subject story acts on the object Story; the object story is the direct object of the sentence.

        The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
        - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
        - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be
            archived).
        - "story 7 relates to story 3”

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_story_link(body, request_options=request_options))

    async def delete_story_link(
        self, story_link_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes the relationship between the stories for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_story_link(story_link_public_id, request_options=request_options)
        )

    async def get_story_link(
        self, story_link_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoryLink:
        """Returns the stories and their relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_story_link(story_link_public_id, request_options=request_options)
        )

    async def update_story_link(
        self,
        story_link_public_id: int,
        body: UpdateStoryLink | UpdateStoryLinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoryLink:
        """Updates the stories and/or the relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_story_link(story_link_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncStoryLinksWithRawResponse:
        return self._with_raw_response


class StoryLinksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_story_link(
        self, body: CreateStoryLink | CreateStoryLinkDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoryLink, CreateStoryLinkErrorBody]:
        """Story Links (called Story Relationships in the UI) allow you create semantic relationships between two
        stories. The parameters read like an active voice grammatical sentence: subject -> verb -> object.

        The subject story acts on the object Story; the object story is the direct object of the sentence.

        The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
        - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
        - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be
            archived).
        - "story 7 relates to story 3”

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/story-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryLink | CreateStoryLinkDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryLink],
            error_mapper=create_story_link_error_mapper,
            request_options=request_options,
        )

    def delete_story_link(
        self, story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStoryLinkErrorBody]:
        """Removes the relationship between the stories for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/story-links/{story-link-public-id}"),
            path_params=[param[int]("story-link-public-id", story_link_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_story_link_error_mapper,
            request_options=request_options,
        )

    def get_story_link(
        self, story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoryLink, GetStoryLinkErrorBody]:
        """Returns the stories and their relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/story-links/{story-link-public-id}"),
            path_params=[param[int]("story-link-public-id", story_link_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryLink],
            error_mapper=get_story_link_error_mapper,
            request_options=request_options,
        )

    def update_story_link(
        self,
        story_link_public_id: int,
        body: UpdateStoryLink | UpdateStoryLinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryLink, UpdateStoryLinkErrorBody]:
        """Updates the stories and/or the relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/story-links/{story-link-public-id}"),
            path_params=[param[int]("story-link-public-id", story_link_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStoryLink | UpdateStoryLinkDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryLink],
            error_mapper=update_story_link_error_mapper,
            request_options=request_options,
        )


class AsyncStoryLinksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_story_link(
        self, body: CreateStoryLink | CreateStoryLinkDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoryLink, CreateStoryLinkErrorBody]:
        """Story Links (called Story Relationships in the UI) allow you create semantic relationships between two
        stories. The parameters read like an active voice grammatical sentence: subject -> verb -> object.

        The subject story acts on the object Story; the object story is the direct object of the sentence.

        The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
        - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
        - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be
            archived).
        - "story 7 relates to story 3”

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/story-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryLink | CreateStoryLinkDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryLink],
            error_mapper=create_story_link_error_mapper,
            request_options=request_options,
        )

    async def delete_story_link(
        self, story_link_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStoryLinkErrorBody]:
        """Removes the relationship between the stories for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/story-links/{story-link-public-id}"),
            path_params=[param[int]("story-link-public-id", story_link_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_story_link_error_mapper,
            request_options=request_options,
        )

    async def get_story_link(
        self, story_link_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoryLink, GetStoryLinkErrorBody]:
        """Returns the stories and their relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/story-links/{story-link-public-id}"),
            path_params=[param[int]("story-link-public-id", story_link_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryLink],
            error_mapper=get_story_link_error_mapper,
            request_options=request_options,
        )

    async def update_story_link(
        self,
        story_link_public_id: int,
        body: UpdateStoryLink | UpdateStoryLinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryLink, UpdateStoryLinkErrorBody]:
        """Updates the stories and/or the relationship for the given Story Link.

        Args:
            story_link_public_id: The unique ID of the Story Link.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/story-links/{story-link-public-id}"),
            path_params=[param[int]("story-link-public-id", story_link_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStoryLink | UpdateStoryLinkDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryLink],
            error_mapper=update_story_link_error_mapper,
            request_options=request_options,
        )
