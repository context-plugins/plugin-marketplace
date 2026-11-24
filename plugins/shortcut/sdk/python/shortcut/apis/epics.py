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
from ..errors.create_epic_comment_comment_error import (
    CreateEpicCommentCommentErrorBody,
    create_epic_comment_comment_error_mapper,
)
from ..errors.create_epic_comment_error import CreateEpicCommentErrorBody, create_epic_comment_error_mapper
from ..errors.create_epic_error import CreateEpicErrorBody, create_epic_error_mapper
from ..errors.create_epic_health_error import CreateEpicHealthErrorBody, create_epic_health_error_mapper
from ..errors.delete_epic_comment_error import DeleteEpicCommentErrorBody, delete_epic_comment_error_mapper
from ..errors.delete_epic_error import DeleteEpicErrorBody, delete_epic_error_mapper
from ..errors.get_epic_comment_error import GetEpicCommentErrorBody, get_epic_comment_error_mapper
from ..errors.get_epic_error import GetEpicErrorBody, get_epic_error_mapper
from ..errors.get_epic_health_error import GetEpicHealthErrorBody, get_epic_health_error_mapper
from ..errors.list_epic_comments_error import ListEpicCommentsErrorBody, list_epic_comments_error_mapper
from ..errors.list_epic_documents_error import ListEpicDocumentsErrorBody, list_epic_documents_error_mapper
from ..errors.list_epic_healths_error import ListEpicHealthsErrorBody, list_epic_healths_error_mapper
from ..errors.list_epic_stories_error import ListEpicStoriesErrorBody, list_epic_stories_error_mapper
from ..errors.list_epics_error import ListEpicsErrorBody, list_epics_error_mapper
from ..errors.list_epics_paginated_error import ListEpicsPaginatedErrorBody, list_epics_paginated_error_mapper
from ..errors.update_epic_comment_error import UpdateEpicCommentErrorBody, update_epic_comment_error_mapper
from ..errors.update_epic_error import UpdateEpicErrorBody, update_epic_error_mapper
from ..models.create_comment_comment import CreateCommentComment, CreateCommentCommentDict
from ..models.create_epic import CreateEpic, CreateEpicDict
from ..models.create_epic_comment import CreateEpicComment, CreateEpicCommentDict
from ..models.create_epic_health import CreateEpicHealth, CreateEpicHealthDict
from ..models.doc_slim import DocSlim
from ..models.epic import Epic
from ..models.epic_paginated_results import EpicPaginatedResults
from ..models.epic_slim import EpicSlim
from ..models.health import Health
from ..models.story_slim import StorySlim
from ..models.threaded_comment import ThreadedComment
from ..models.update_comment import UpdateComment, UpdateCommentDict
from ..models.update_epic import UpdateEpic, UpdateEpicDict
from ..server.server import Server


class Epics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EpicsWithRawResponse(client, server, auth)

    def create_epic(
        self, body: CreateEpic | CreateEpicDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Epic:
        """Create Epic allows you to create a new Epic in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_epic(body, request_options=request_options))

    def create_epic_comment(
        self,
        epic_public_id: int,
        body: CreateEpicComment | CreateEpicCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ThreadedComment:
        """This endpoint allows you to create a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_epic_comment(epic_public_id, body, request_options=request_options)
        )

    def create_epic_comment_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: CreateCommentComment | CreateCommentCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ThreadedComment:
        """This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the parent Epic Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_epic_comment_comment(
                epic_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    def create_epic_health(
        self,
        epic_public_id: int,
        body: CreateEpicHealth | CreateEpicHealthDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Health:
        """Create a new health status for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_epic_health(epic_public_id, body, request_options=request_options))

    def delete_epic(self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_epic(epic_public_id, request_options=request_options))

    def delete_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint allows you to delete a Comment from an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_epic_comment(
                epic_public_id, comment_public_id, request_options=request_options
            ),
        )

    def get_epic(self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Epic:
        """Get Epic returns information about the selected Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_epic(epic_public_id, request_options=request_options))

    def get_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ThreadedComment:
        """This endpoint returns information about the selected Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_epic_comment(epic_public_id, comment_public_id, request_options=request_options)
        )

    def get_epic_health(self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Health:
        """Get the current health for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_epic_health(epic_public_id, request_options=request_options))

    def list_epic_comments(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[ThreadedComment]:
        """Get a list of all Comments on an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_epic_comments(epic_public_id, request_options=request_options))

    def list_epic_documents(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[DocSlim]:
        """Get a list of all Documents related to this Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_epic_documents(epic_public_id, request_options=request_options))

    def list_epic_healths(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Health]:
        """List the history of health statuses for the specified Epic, most recent first.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_epic_healths(epic_public_id, request_options=request_options))

    def list_epic_stories(
        self,
        epic_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """Get a list of all Stories in an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_epic_stories(
                epic_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    def list_epics(
        self, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """List Epics returns a list of all Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_epics(
                includes_description=includes_description, request_options=request_options
            ),
        )

    def list_epics_paginated(
        self,
        *,
        includes_description: bool | None = None,
        page: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EpicPaginatedResults:
        """List Epics with pagination returns a paginated list of Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            page: The page number to return, starting with 1. Defaults to 1.
            page_size: The number of Epics to return per page. Minimum 1, maximum 250, default 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_epics_paginated(
                includes_description=includes_description,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def update_epic(
        self,
        epic_public_id: int,
        body: UpdateEpic | UpdateEpicDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Epic:
        """Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which
        can be found in the Shortcut UI.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_epic(epic_public_id, body, request_options=request_options))

    def update_epic_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: UpdateComment | UpdateCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ThreadedComment:
        """This endpoint allows you to update a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_epic_comment(
                epic_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EpicsWithRawResponse:
        return self._with_raw_response


class AsyncEpics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEpicsWithRawResponse(client, server, auth)

    async def create_epic(
        self, body: CreateEpic | CreateEpicDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Epic:
        """Create Epic allows you to create a new Epic in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_epic(body, request_options=request_options))

    async def create_epic_comment(
        self,
        epic_public_id: int,
        body: CreateEpicComment | CreateEpicCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ThreadedComment:
        """This endpoint allows you to create a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_epic_comment(epic_public_id, body, request_options=request_options)
        )

    async def create_epic_comment_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: CreateCommentComment | CreateCommentCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ThreadedComment:
        """This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the parent Epic Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_epic_comment_comment(
                epic_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    async def create_epic_health(
        self,
        epic_public_id: int,
        body: CreateEpicHealth | CreateEpicHealthDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Health:
        """Create a new health status for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_epic_health(epic_public_id, body, request_options=request_options)
        )

    async def delete_epic(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_epic(epic_public_id, request_options=request_options))

    async def delete_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint allows you to delete a Comment from an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_epic_comment(
                epic_public_id, comment_public_id, request_options=request_options
            ),
        )

    async def get_epic(self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Epic:
        """Get Epic returns information about the selected Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_epic(epic_public_id, request_options=request_options))

    async def get_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ThreadedComment:
        """This endpoint returns information about the selected Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_epic_comment(
                epic_public_id, comment_public_id, request_options=request_options
            ),
        )

    async def get_epic_health(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Health:
        """Get the current health for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_epic_health(epic_public_id, request_options=request_options))

    async def list_epic_comments(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[ThreadedComment]:
        """Get a list of all Comments on an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_epic_comments(epic_public_id, request_options=request_options))

    async def list_epic_documents(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[DocSlim]:
        """Get a list of all Documents related to this Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_epic_documents(epic_public_id, request_options=request_options)
        )

    async def list_epic_healths(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Health]:
        """List the history of health statuses for the specified Epic, most recent first.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_epic_healths(epic_public_id, request_options=request_options))

    async def list_epic_stories(
        self,
        epic_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """Get a list of all Stories in an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_epic_stories(
                epic_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    async def list_epics(
        self, *, includes_description: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """List Epics returns a list of all Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_epics(
                includes_description=includes_description, request_options=request_options
            ),
        )

    async def list_epics_paginated(
        self,
        *,
        includes_description: bool | None = None,
        page: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EpicPaginatedResults:
        """List Epics with pagination returns a paginated list of Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            page: The page number to return, starting with 1. Defaults to 1.
            page_size: The number of Epics to return per page. Minimum 1, maximum 250, default 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_epics_paginated(
                includes_description=includes_description,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def update_epic(
        self,
        epic_public_id: int,
        body: UpdateEpic | UpdateEpicDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Epic:
        """Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which
        can be found in the Shortcut UI.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_epic(epic_public_id, body, request_options=request_options))

    async def update_epic_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: UpdateComment | UpdateCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ThreadedComment:
        """This endpoint allows you to update a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_epic_comment(
                epic_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEpicsWithRawResponse:
        return self._with_raw_response


class EpicsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_epic(
        self, body: CreateEpic | CreateEpicDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Epic, CreateEpicErrorBody]:
        """Create Epic allows you to create a new Epic in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEpic | CreateEpicDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Epic],
            error_mapper=create_epic_error_mapper,
            request_options=request_options,
        )

    def create_epic_comment(
        self,
        epic_public_id: int,
        body: CreateEpicComment | CreateEpicCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreadedComment, CreateEpicCommentErrorBody]:
        """This endpoint allows you to create a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEpicComment | CreateEpicCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ThreadedComment],
            error_mapper=create_epic_comment_error_mapper,
            request_options=request_options,
        )

    def create_epic_comment_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: CreateCommentComment | CreateCommentCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreadedComment, CreateEpicCommentCommentErrorBody]:
        """This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the parent Epic Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCommentComment | CreateCommentCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ThreadedComment],
            error_mapper=create_epic_comment_comment_error_mapper,
            request_options=request_options,
        )

    def create_epic_health(
        self,
        epic_public_id: int,
        body: CreateEpicHealth | CreateEpicHealthDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Health, CreateEpicHealthErrorBody]:
        """Create a new health status for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/health"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEpicHealth | CreateEpicHealthDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Health],
            error_mapper=create_epic_health_error_mapper,
            request_options=request_options,
        )

    def delete_epic(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEpicErrorBody]:
        """Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_epic_error_mapper,
            request_options=request_options,
        )

    def delete_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEpicCommentErrorBody]:
        """This endpoint allows you to delete a Comment from an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_epic_comment_error_mapper,
            request_options=request_options,
        )

    def get_epic(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Epic, GetEpicErrorBody]:
        """Get Epic returns information about the selected Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Epic],
            error_mapper=get_epic_error_mapper,
            request_options=request_options,
        )

    def get_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ThreadedComment, GetEpicCommentErrorBody]:
        """This endpoint returns information about the selected Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ThreadedComment],
            error_mapper=get_epic_comment_error_mapper,
            request_options=request_options,
        )

    def get_epic_health(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetEpicHealthErrorBody]:
        """Get the current health for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/health"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Health],
            error_mapper=get_epic_health_error_mapper,
            request_options=request_options,
        )

    def list_epic_comments(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ThreadedComment], ListEpicCommentsErrorBody]:
        """Get a list of all Comments on an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[ThreadedComment]],
            error_mapper=list_epic_comments_error_mapper,
            request_options=request_options,
        )

    def list_epic_documents(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[DocSlim], ListEpicDocumentsErrorBody]:
        """Get a list of all Documents related to this Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/documents"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[DocSlim]],
            error_mapper=list_epic_documents_error_mapper,
            request_options=request_options,
        )

    def list_epic_healths(
        self, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Health], ListEpicHealthsErrorBody]:
        """List the history of health statuses for the specified Epic, most recent first.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/health-history"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Health]],
            error_mapper=list_epic_healths_error_mapper,
            request_options=request_options,
        )

    def list_epic_stories(
        self,
        epic_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListEpicStoriesErrorBody]:
        """Get a list of all Stories in an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/stories"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=list_epic_stories_error_mapper,
            request_options=request_options,
        )

    def list_epics(
        self, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListEpicsErrorBody]:
        """List Epics returns a list of all Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics"),
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[EpicSlim]],
            error_mapper=list_epics_error_mapper,
            request_options=request_options,
        )

    def list_epics_paginated(
        self,
        *,
        includes_description: bool | None = None,
        page: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EpicPaginatedResults, ListEpicsPaginatedErrorBody]:
        """List Epics with pagination returns a paginated list of Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            page: The page number to return, starting with 1. Defaults to 1.
            page_size: The number of Epics to return per page. Minimum 1, maximum 250, default 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/paginated"),
            query_params=[
                param[bool | None]("includes_description", includes_description),
                param[int | None]("page", page),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EpicPaginatedResults],
            error_mapper=list_epics_paginated_error_mapper,
            request_options=request_options,
        )

    def update_epic(
        self,
        epic_public_id: int,
        body: UpdateEpic | UpdateEpicDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Epic, UpdateEpicErrorBody]:
        """Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which
        can be found in the Shortcut UI.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateEpic | UpdateEpicDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Epic],
            error_mapper=update_epic_error_mapper,
            request_options=request_options,
        )

    def update_epic_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: UpdateComment | UpdateCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreadedComment, UpdateEpicCommentErrorBody]:
        """This endpoint allows you to update a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateComment | UpdateCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ThreadedComment],
            error_mapper=update_epic_comment_error_mapper,
            request_options=request_options,
        )


class AsyncEpicsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_epic(
        self, body: CreateEpic | CreateEpicDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Epic, CreateEpicErrorBody]:
        """Create Epic allows you to create a new Epic in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEpic | CreateEpicDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Epic],
            error_mapper=create_epic_error_mapper,
            request_options=request_options,
        )

    async def create_epic_comment(
        self,
        epic_public_id: int,
        body: CreateEpicComment | CreateEpicCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreadedComment, CreateEpicCommentErrorBody]:
        """This endpoint allows you to create a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEpicComment | CreateEpicCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ThreadedComment],
            error_mapper=create_epic_comment_error_mapper,
            request_options=request_options,
        )

    async def create_epic_comment_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: CreateCommentComment | CreateCommentCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreadedComment, CreateEpicCommentCommentErrorBody]:
        """This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the parent Epic Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCommentComment | CreateCommentCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ThreadedComment],
            error_mapper=create_epic_comment_comment_error_mapper,
            request_options=request_options,
        )

    async def create_epic_health(
        self,
        epic_public_id: int,
        body: CreateEpicHealth | CreateEpicHealthDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Health, CreateEpicHealthErrorBody]:
        """Create a new health status for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/health"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEpicHealth | CreateEpicHealthDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Health],
            error_mapper=create_epic_health_error_mapper,
            request_options=request_options,
        )

    async def delete_epic(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEpicErrorBody]:
        """Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_epic_error_mapper,
            request_options=request_options,
        )

    async def delete_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEpicCommentErrorBody]:
        """This endpoint allows you to delete a Comment from an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_epic_comment_error_mapper,
            request_options=request_options,
        )

    async def get_epic(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Epic, GetEpicErrorBody]:
        """Get Epic returns information about the selected Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Epic],
            error_mapper=get_epic_error_mapper,
            request_options=request_options,
        )

    async def get_epic_comment(
        self, epic_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ThreadedComment, GetEpicCommentErrorBody]:
        """This endpoint returns information about the selected Epic Comment.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ThreadedComment],
            error_mapper=get_epic_comment_error_mapper,
            request_options=request_options,
        )

    async def get_epic_health(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetEpicHealthErrorBody]:
        """Get the current health for the specified Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/health"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Health],
            error_mapper=get_epic_health_error_mapper,
            request_options=request_options,
        )

    async def list_epic_comments(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ThreadedComment], ListEpicCommentsErrorBody]:
        """Get a list of all Comments on an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[ThreadedComment]],
            error_mapper=list_epic_comments_error_mapper,
            request_options=request_options,
        )

    async def list_epic_documents(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[DocSlim], ListEpicDocumentsErrorBody]:
        """Get a list of all Documents related to this Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/documents"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[DocSlim]],
            error_mapper=list_epic_documents_error_mapper,
            request_options=request_options,
        )

    async def list_epic_healths(
        self, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Health], ListEpicHealthsErrorBody]:
        """List the history of health statuses for the specified Epic, most recent first.

        Args:
            epic_public_id: The unique ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/health-history"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Health]],
            error_mapper=list_epic_healths_error_mapper,
            request_options=request_options,
        )

    async def list_epic_stories(
        self,
        epic_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListEpicStoriesErrorBody]:
        """Get a list of all Stories in an Epic.

        Args:
            epic_public_id: The unique ID of the Epic.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/stories"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=list_epic_stories_error_mapper,
            request_options=request_options,
        )

    async def list_epics(
        self, *, includes_description: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListEpicsErrorBody]:
        """List Epics returns a list of all Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics"),
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[EpicSlim]],
            error_mapper=list_epics_error_mapper,
            request_options=request_options,
        )

    async def list_epics_paginated(
        self,
        *,
        includes_description: bool | None = None,
        page: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EpicPaginatedResults, ListEpicsPaginatedErrorBody]:
        """List Epics with pagination returns a paginated list of Epics and their attributes.

        Args:
            includes_description: A true/false boolean indicating whether to return Epics with their descriptions.
            page: The page number to return, starting with 1. Defaults to 1.
            page_size: The number of Epics to return per page. Minimum 1, maximum 250, default 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epics/paginated"),
            query_params=[
                param[bool | None]("includes_description", includes_description),
                param[int | None]("page", page),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EpicPaginatedResults],
            error_mapper=list_epics_paginated_error_mapper,
            request_options=request_options,
        )

    async def update_epic(
        self,
        epic_public_id: int,
        body: UpdateEpic | UpdateEpicDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Epic, UpdateEpicErrorBody]:
        """Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which
        can be found in the Shortcut UI.

        Args:
            epic_public_id: The unique ID of the Epic.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}"),
            path_params=[param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateEpic | UpdateEpicDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Epic],
            error_mapper=update_epic_error_mapper,
            request_options=request_options,
        )

    async def update_epic_comment(
        self,
        epic_public_id: int,
        comment_public_id: int,
        body: UpdateComment | UpdateCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreadedComment, UpdateEpicCommentErrorBody]:
        """This endpoint allows you to update a threaded Comment on an Epic.

        Args:
            epic_public_id: The ID of the associated Epic.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("epic-public-id", epic_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateComment | UpdateCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ThreadedComment],
            error_mapper=update_epic_comment_error_mapper,
            request_options=request_options,
        )
