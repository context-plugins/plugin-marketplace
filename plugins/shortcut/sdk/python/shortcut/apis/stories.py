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
from ..errors.create_multiple_stories_error import CreateMultipleStoriesErrorBody, create_multiple_stories_error_mapper
from ..errors.create_story_comment_error import CreateStoryCommentErrorBody, create_story_comment_error_mapper
from ..errors.create_story_error import CreateStoryErrorBody, create_story_error_mapper
from ..errors.create_story_from_template_error import (
    CreateStoryFromTemplateErrorBody,
    create_story_from_template_error_mapper,
)
from ..errors.create_story_reaction_error import CreateStoryReactionErrorBody, create_story_reaction_error_mapper
from ..errors.create_task_error import CreateTaskErrorBody, create_task_error_mapper
from ..errors.delete_multiple_stories_error import DeleteMultipleStoriesErrorBody, delete_multiple_stories_error_mapper
from ..errors.delete_story_comment_error import DeleteStoryCommentErrorBody, delete_story_comment_error_mapper
from ..errors.delete_story_error import DeleteStoryErrorBody, delete_story_error_mapper
from ..errors.delete_story_reaction_error import DeleteStoryReactionErrorBody, delete_story_reaction_error_mapper
from ..errors.delete_task_error import DeleteTaskErrorBody, delete_task_error_mapper
from ..errors.get_story_comment_error import GetStoryCommentErrorBody, get_story_comment_error_mapper
from ..errors.get_story_error import GetStoryErrorBody, get_story_error_mapper
from ..errors.get_task_error import GetTaskErrorBody, get_task_error_mapper
from ..errors.list_story_comment_error import ListStoryCommentErrorBody, list_story_comment_error_mapper
from ..errors.list_story_sub_tasks_error import ListStorySubTasksErrorBody, list_story_sub_tasks_error_mapper
from ..errors.query_stories_error import QueryStoriesErrorBody, query_stories_error_mapper
from ..errors.story_history_error import StoryHistoryErrorBody, story_history_error_mapper
from ..errors.unlink_comment_thread_from_slack_error import (
    UnlinkCommentThreadFromSlackErrorBody,
    unlink_comment_thread_from_slack_error_mapper,
)
from ..errors.update_multiple_stories_error import UpdateMultipleStoriesErrorBody, update_multiple_stories_error_mapper
from ..errors.update_story_comment_error import UpdateStoryCommentErrorBody, update_story_comment_error_mapper
from ..errors.update_story_error import UpdateStoryErrorBody, update_story_error_mapper
from ..errors.update_task_error import UpdateTaskErrorBody, update_task_error_mapper
from ..models.create_or_delete_story_reaction import CreateOrDeleteStoryReaction, CreateOrDeleteStoryReactionDict
from ..models.create_stories import CreateStories, CreateStoriesDict
from ..models.create_story_comment import CreateStoryComment, CreateStoryCommentDict
from ..models.create_story_from_template_params import CreateStoryFromTemplateParams, CreateStoryFromTemplateParamsDict
from ..models.create_story_params import CreateStoryParams, CreateStoryParamsDict
from ..models.create_task import CreateTask, CreateTaskDict
from ..models.delete_stories import DeleteStories, DeleteStoriesDict
from ..models.history import History
from ..models.search_stories import SearchStories, SearchStoriesDict
from ..models.story import Story
from ..models.story_comment import StoryComment
from ..models.story_reaction import StoryReaction
from ..models.story_slim import StorySlim
from ..models.task import Task
from ..models.update_stories import UpdateStories, UpdateStoriesDict
from ..models.update_story import UpdateStory, UpdateStoryDict
from ..models.update_story_comment import UpdateStoryComment, UpdateStoryCommentDict
from ..models.update_task import UpdateTask, UpdateTaskDict
from ..server.server import Server


class Stories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StoriesWithRawResponse(client, server, auth)

    def create_multiple_stories(
        self, body: CreateStories | CreateStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as
        Create Story.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_multiple_stories(body, request_options=request_options))

    def create_story(
        self, body: CreateStoryParams | CreateStoryParamsDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Story:
        """Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either
        **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are
        specified. The workflow_state_id has been marked as required and is the recommended field to specify because we
        are in the process of sunsetting Projects in Shortcut.

        Args:
            body: Request parameters for creating a story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_story(body, request_options=request_options))

    def create_story_comment(
        self,
        story_public_id: int,
        body: CreateStoryComment | CreateStoryCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StoryComment:
        """Create Comment allows you to create a Comment on any Story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_story_comment(story_public_id, body, request_options=request_options)
        )

    def create_story_from_template(
        self,
        body: CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Story:
        """Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

        Args:
            body: Request parameters for creating a story from a story template. These parameters are merged with the
                values derived from the template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_story_from_template(body, request_options=request_options))

    def create_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[StoryReaction]:
        """Create a reaction to a story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_story_reaction(
                story_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    def create_task(
        self,
        story_public_id: int,
        body: CreateTask | CreateTaskDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Task:
        """Create Task is used to create a new task in a Story.

        Args:
            story_public_id: The ID of the Story that the Task will be in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_task(story_public_id, body, request_options=request_options))

    def delete_multiple_stories(
        self, body: DeleteStories | DeleteStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete Multiple Stories allows you to delete multiple archived stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_multiple_stories(body, request_options=request_options))

    def delete_story(self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete Story can be used to delete any Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_story(story_public_id, request_options=request_options))

    def delete_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a Comment from any story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_story_comment(
                story_public_id, comment_public_id, request_options=request_options
            ),
        )

    def delete_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a reaction from any story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_story_reaction(
                story_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    def delete_task(
        self, story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete Task can be used to delete any previously created Task on a Story.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_task(story_public_id, task_public_id, request_options=request_options)
        )

    def get_story(self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Story:
        """Get Story returns information about a chosen Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_story(story_public_id, request_options=request_options))

    def get_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoryComment:
        """Get Comment is used to get Comment information.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_story_comment(
                story_public_id, comment_public_id, request_options=request_options
            ),
        )

    def get_task(
        self, story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Task:
        """Returns information about a chosen Task.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_task(story_public_id, task_public_id, request_options=request_options)
        )

    def list_story_comment(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[StoryComment]:
        """Lists Comments associated with a Story

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_story_comment(story_public_id, request_options=request_options))

    def list_story_sub_tasks(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_story_sub_tasks(story_public_id, request_options=request_options))

    def query_stories(
        self, body: SearchStories | SearchStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Search Stories lets you search Stories based on desired parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.query_stories(body, request_options=request_options))

    def story_history(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[History]:
        """Send a ``GET`` request.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.story_history(story_public_id, request_options=request_options))

    def unlink_comment_thread_from_slack(
        self, story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoryComment:
        """Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

        Args:
            story_public_id: The ID of the Story to unlink.
            comment_public_id: The ID of the Comment to unlink.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.unlink_comment_thread_from_slack(
                story_public_id, comment_public_id, request_options=request_options
            ),
        )

    def update_multiple_stories(
        self, body: UpdateStories | UpdateStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Update Multiple Stories allows you to make changes to numerous stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_multiple_stories(body, request_options=request_options))

    def update_story(
        self,
        story_public_id: int,
        body: UpdateStory | UpdateStoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Story:
        """Update Story can be used to update Story properties.

        Args:
            story_public_id: The unique identifier of this story.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_story(story_public_id, body, request_options=request_options))

    def update_story_comment(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: UpdateStoryComment | UpdateStoryCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StoryComment:
        """Update Comment replaces the text of the existing Comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_story_comment(
                story_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    def update_task(
        self,
        story_public_id: int,
        task_public_id: int,
        body: UpdateTask | UpdateTaskDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Task:
        """Update Task can be used to update Task properties.

        Args:
            story_public_id: The unique identifier of the parent Story.
            task_public_id: The unique identifier of the Task you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_task(story_public_id, task_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> StoriesWithRawResponse:
        return self._with_raw_response


class AsyncStories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStoriesWithRawResponse(client, server, auth)

    async def create_multiple_stories(
        self, body: CreateStories | CreateStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as
        Create Story.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_multiple_stories(body, request_options=request_options))

    async def create_story(
        self,
        body: CreateStoryParams | CreateStoryParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Story:
        """Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either
        **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are
        specified. The workflow_state_id has been marked as required and is the recommended field to specify because we
        are in the process of sunsetting Projects in Shortcut.

        Args:
            body: Request parameters for creating a story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_story(body, request_options=request_options))

    async def create_story_comment(
        self,
        story_public_id: int,
        body: CreateStoryComment | CreateStoryCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoryComment:
        """Create Comment allows you to create a Comment on any Story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_story_comment(story_public_id, body, request_options=request_options)
        )

    async def create_story_from_template(
        self,
        body: CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Story:
        """Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

        Args:
            body: Request parameters for creating a story from a story template. These parameters are merged with the
                values derived from the template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_story_from_template(body, request_options=request_options))

    async def create_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[StoryReaction]:
        """Create a reaction to a story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_story_reaction(
                story_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    async def create_task(
        self,
        story_public_id: int,
        body: CreateTask | CreateTaskDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Task:
        """Create Task is used to create a new task in a Story.

        Args:
            story_public_id: The ID of the Story that the Task will be in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_task(story_public_id, body, request_options=request_options))

    async def delete_multiple_stories(
        self, body: DeleteStories | DeleteStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Multiple Stories allows you to delete multiple archived stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_multiple_stories(body, request_options=request_options))

    async def delete_story(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Story can be used to delete any Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_story(story_public_id, request_options=request_options))

    async def delete_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a Comment from any story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_story_comment(
                story_public_id, comment_public_id, request_options=request_options
            ),
        )

    async def delete_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a reaction from any story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_story_reaction(
                story_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    async def delete_task(
        self, story_public_id: int, task_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Task can be used to delete any previously created Task on a Story.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_task(story_public_id, task_public_id, request_options=request_options)
        )

    async def get_story(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Story:
        """Get Story returns information about a chosen Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_story(story_public_id, request_options=request_options))

    async def get_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoryComment:
        """Get Comment is used to get Comment information.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_story_comment(
                story_public_id, comment_public_id, request_options=request_options
            ),
        )

    async def get_task(
        self, story_public_id: int, task_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Task:
        """Returns information about a chosen Task.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_task(story_public_id, task_public_id, request_options=request_options)
        )

    async def list_story_comment(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[StoryComment]:
        """Lists Comments associated with a Story

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_story_comment(story_public_id, request_options=request_options)
        )

    async def list_story_sub_tasks(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_story_sub_tasks(story_public_id, request_options=request_options)
        )

    async def query_stories(
        self, body: SearchStories | SearchStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Search Stories lets you search Stories based on desired parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.query_stories(body, request_options=request_options))

    async def story_history(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[History]:
        """Send a ``GET`` request.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.story_history(story_public_id, request_options=request_options))

    async def unlink_comment_thread_from_slack(
        self, story_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoryComment:
        """Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

        Args:
            story_public_id: The ID of the Story to unlink.
            comment_public_id: The ID of the Comment to unlink.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.unlink_comment_thread_from_slack(
                story_public_id, comment_public_id, request_options=request_options
            ),
        )

    async def update_multiple_stories(
        self, body: UpdateStories | UpdateStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Update Multiple Stories allows you to make changes to numerous stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_multiple_stories(body, request_options=request_options))

    async def update_story(
        self,
        story_public_id: int,
        body: UpdateStory | UpdateStoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Story:
        """Update Story can be used to update Story properties.

        Args:
            story_public_id: The unique identifier of this story.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_story(story_public_id, body, request_options=request_options)
        )

    async def update_story_comment(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: UpdateStoryComment | UpdateStoryCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoryComment:
        """Update Comment replaces the text of the existing Comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_story_comment(
                story_public_id, comment_public_id, body, request_options=request_options
            ),
        )

    async def update_task(
        self,
        story_public_id: int,
        task_public_id: int,
        body: UpdateTask | UpdateTaskDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Task:
        """Update Task can be used to update Task properties.

        Args:
            story_public_id: The unique identifier of the parent Story.
            task_public_id: The unique identifier of the Task you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_task(
                story_public_id, task_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncStoriesWithRawResponse:
        return self._with_raw_response


class StoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_multiple_stories(
        self, body: CreateStories | CreateStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], CreateMultipleStoriesErrorBody]:
        """Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as
        Create Story.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStories | CreateStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=create_multiple_stories_error_mapper,
            request_options=request_options,
        )

    def create_story(
        self, body: CreateStoryParams | CreateStoryParamsDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Story, CreateStoryErrorBody]:
        """Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either
        **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are
        specified. The workflow_state_id has been marked as required and is the recommended field to specify because we
        are in the process of sunsetting Projects in Shortcut.

        Args:
            body: Request parameters for creating a story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryParams | CreateStoryParamsDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Story],
            error_mapper=create_story_error_mapper,
            request_options=request_options,
        )

    def create_story_comment(
        self,
        story_public_id: int,
        body: CreateStoryComment | CreateStoryCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryComment, CreateStoryCommentErrorBody]:
        """Create Comment allows you to create a Comment on any Story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryComment | CreateStoryCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryComment],
            error_mapper=create_story_comment_error_mapper,
            request_options=request_options,
        )

    def create_story_from_template(
        self,
        body: CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Story, CreateStoryFromTemplateErrorBody]:
        """Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

        Args:
            body: Request parameters for creating a story from a story template. These parameters are merged with the
                values derived from the template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/from-template"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Story],
            error_mapper=create_story_from_template_error_mapper,
            request_options=request_options,
        )

    def create_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StoryReaction], CreateStoryReactionErrorBody]:
        """Create a reaction to a story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"
            ),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StoryReaction]],
            error_mapper=create_story_reaction_error_mapper,
            request_options=request_options,
        )

    def create_task(
        self,
        story_public_id: int,
        body: CreateTask | CreateTaskDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, CreateTaskErrorBody]:
        """Create Task is used to create a new task in a Story.

        Args:
            story_public_id: The ID of the Story that the Task will be in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTask | CreateTaskDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Task],
            error_mapper=create_task_error_mapper,
            request_options=request_options,
        )

    def delete_multiple_stories(
        self, body: DeleteStories | DeleteStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMultipleStoriesErrorBody]:
        """Delete Multiple Stories allows you to delete multiple archived stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteStories | DeleteStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_multiple_stories_error_mapper,
            request_options=request_options,
        )

    def delete_story(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStoryErrorBody]:
        """Delete Story can be used to delete any Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/{story-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_story_error_mapper,
            request_options=request_options,
        )

    def delete_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStoryCommentErrorBody]:
        """Delete a Comment from any story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_story_comment_error_mapper,
            request_options=request_options,
        )

    def delete_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStoryReactionErrorBody]:
        """Delete a reaction from any story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"
            ),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict](body),
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_story_reaction_error_mapper,
            request_options=request_options,
        )

    def delete_task(
        self, story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTaskErrorBody]:
        """Delete Task can be used to delete any previously created Task on a Story.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id), param[int]("task-public-id", task_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_task_error_mapper,
            request_options=request_options,
        )

    def get_story(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Story, GetStoryErrorBody]:
        """Get Story returns information about a chosen Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Story],
            error_mapper=get_story_error_mapper,
            request_options=request_options,
        )

    def get_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoryComment, GetStoryCommentErrorBody]:
        """Get Comment is used to get Comment information.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryComment],
            error_mapper=get_story_comment_error_mapper,
            request_options=request_options,
        )

    def get_task(
        self, story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Task, GetTaskErrorBody]:
        """Returns information about a chosen Task.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id), param[int]("task-public-id", task_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Task],
            error_mapper=get_task_error_mapper,
            request_options=request_options,
        )

    def list_story_comment(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[StoryComment], ListStoryCommentErrorBody]:
        """Lists Comments associated with a Story

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StoryComment]],
            error_mapper=list_story_comment_error_mapper,
            request_options=request_options,
        )

    def list_story_sub_tasks(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], ListStorySubTasksErrorBody]:
        """List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/sub-tasks"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=list_story_sub_tasks_error_mapper,
            request_options=request_options,
        )

    def query_stories(
        self, body: SearchStories | SearchStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], QueryStoriesErrorBody]:
        """Search Stories lets you search Stories based on desired parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchStories | SearchStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=query_stories_error_mapper,
            request_options=request_options,
        )

    def story_history(
        self, story_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[History], StoryHistoryErrorBody]:
        """Send a ``GET`` request.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/history"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[History]],
            error_mapper=story_history_error_mapper,
            request_options=request_options,
        )

    def unlink_comment_thread_from_slack(
        self, story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoryComment, UnlinkCommentThreadFromSlackErrorBody]:
        """Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

        Args:
            story_public_id: The ID of the Story to unlink.
            comment_public_id: The ID of the Comment to unlink.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack"
            ),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryComment],
            error_mapper=unlink_comment_thread_from_slack_error_mapper,
            request_options=request_options,
        )

    def update_multiple_stories(
        self, body: UpdateStories | UpdateStoriesDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], UpdateMultipleStoriesErrorBody]:
        """Update Multiple Stories allows you to make changes to numerous stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStories | UpdateStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=update_multiple_stories_error_mapper,
            request_options=request_options,
        )

    def update_story(
        self,
        story_public_id: int,
        body: UpdateStory | UpdateStoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Story, UpdateStoryErrorBody]:
        """Update Story can be used to update Story properties.

        Args:
            story_public_id: The unique identifier of this story.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/{story-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStory | UpdateStoryDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Story],
            error_mapper=update_story_error_mapper,
            request_options=request_options,
        )

    def update_story_comment(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: UpdateStoryComment | UpdateStoryCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryComment, UpdateStoryCommentErrorBody]:
        """Update Comment replaces the text of the existing Comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStoryComment | UpdateStoryCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StoryComment],
            error_mapper=update_story_comment_error_mapper,
            request_options=request_options,
        )

    def update_task(
        self,
        story_public_id: int,
        task_public_id: int,
        body: UpdateTask | UpdateTaskDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, UpdateTaskErrorBody]:
        """Update Task can be used to update Task properties.

        Args:
            story_public_id: The unique identifier of the parent Story.
            task_public_id: The unique identifier of the Task you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id), param[int]("task-public-id", task_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTask | UpdateTaskDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Task],
            error_mapper=update_task_error_mapper,
            request_options=request_options,
        )


class AsyncStoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_multiple_stories(
        self, body: CreateStories | CreateStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], CreateMultipleStoriesErrorBody]:
        """Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as
        Create Story.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStories | CreateStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=create_multiple_stories_error_mapper,
            request_options=request_options,
        )

    async def create_story(
        self,
        body: CreateStoryParams | CreateStoryParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Story, CreateStoryErrorBody]:
        """Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either
        **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are
        specified. The workflow_state_id has been marked as required and is the recommended field to specify because we
        are in the process of sunsetting Projects in Shortcut.

        Args:
            body: Request parameters for creating a story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryParams | CreateStoryParamsDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Story],
            error_mapper=create_story_error_mapper,
            request_options=request_options,
        )

    async def create_story_comment(
        self,
        story_public_id: int,
        body: CreateStoryComment | CreateStoryCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryComment, CreateStoryCommentErrorBody]:
        """Create Comment allows you to create a Comment on any Story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryComment | CreateStoryCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryComment],
            error_mapper=create_story_comment_error_mapper,
            request_options=request_options,
        )

    async def create_story_from_template(
        self,
        body: CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Story, CreateStoryFromTemplateErrorBody]:
        """Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

        Args:
            body: Request parameters for creating a story from a story template. These parameters are merged with the
                values derived from the template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/from-template"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Story],
            error_mapper=create_story_from_template_error_mapper,
            request_options=request_options,
        )

    async def create_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StoryReaction], CreateStoryReactionErrorBody]:
        """Create a reaction to a story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"
            ),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StoryReaction]],
            error_mapper=create_story_reaction_error_mapper,
            request_options=request_options,
        )

    async def create_task(
        self,
        story_public_id: int,
        body: CreateTask | CreateTaskDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, CreateTaskErrorBody]:
        """Create Task is used to create a new task in a Story.

        Args:
            story_public_id: The ID of the Story that the Task will be in.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTask | CreateTaskDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Task],
            error_mapper=create_task_error_mapper,
            request_options=request_options,
        )

    async def delete_multiple_stories(
        self, body: DeleteStories | DeleteStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMultipleStoriesErrorBody]:
        """Delete Multiple Stories allows you to delete multiple archived stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteStories | DeleteStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_multiple_stories_error_mapper,
            request_options=request_options,
        )

    async def delete_story(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStoryErrorBody]:
        """Delete Story can be used to delete any Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/{story-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_story_error_mapper,
            request_options=request_options,
        )

    async def delete_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStoryCommentErrorBody]:
        """Delete a Comment from any story.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_story_comment_error_mapper,
            request_options=request_options,
        )

    async def delete_story_reaction(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStoryReactionErrorBody]:
        """Delete a reaction from any story comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"
            ),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_story_reaction_error_mapper,
            request_options=request_options,
        )

    async def delete_task(
        self, story_public_id: int, task_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTaskErrorBody]:
        """Delete Task can be used to delete any previously created Task on a Story.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id), param[int]("task-public-id", task_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_task_error_mapper,
            request_options=request_options,
        )

    async def get_story(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Story, GetStoryErrorBody]:
        """Get Story returns information about a chosen Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Story],
            error_mapper=get_story_error_mapper,
            request_options=request_options,
        )

    async def get_story_comment(
        self, story_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoryComment, GetStoryCommentErrorBody]:
        """Get Comment is used to get Comment information.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryComment],
            error_mapper=get_story_comment_error_mapper,
            request_options=request_options,
        )

    async def get_task(
        self, story_public_id: int, task_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Task, GetTaskErrorBody]:
        """Returns information about a chosen Task.

        Args:
            story_public_id: The unique ID of the Story this Task is associated with.
            task_public_id: The unique ID of the Task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id), param[int]("task-public-id", task_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Task],
            error_mapper=get_task_error_mapper,
            request_options=request_options,
        )

    async def list_story_comment(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[StoryComment], ListStoryCommentErrorBody]:
        """Lists Comments associated with a Story

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StoryComment]],
            error_mapper=list_story_comment_error_mapper,
            request_options=request_options,
        )

    async def list_story_sub_tasks(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], ListStorySubTasksErrorBody]:
        """List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/sub-tasks"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=list_story_sub_tasks_error_mapper,
            request_options=request_options,
        )

    async def query_stories(
        self, body: SearchStories | SearchStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], QueryStoriesErrorBody]:
        """Search Stories lets you search Stories based on desired parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/stories/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchStories | SearchStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=query_stories_error_mapper,
            request_options=request_options,
        )

    async def story_history(
        self, story_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[History], StoryHistoryErrorBody]:
        """Send a ``GET`` request.

        Args:
            story_public_id: The ID of the Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/history"),
            path_params=[param[int]("story-public-id", story_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[History]],
            error_mapper=story_history_error_mapper,
            request_options=request_options,
        )

    async def unlink_comment_thread_from_slack(
        self, story_public_id: int, comment_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoryComment, UnlinkCommentThreadFromSlackErrorBody]:
        """Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

        Args:
            story_public_id: The ID of the Story to unlink.
            comment_public_id: The ID of the Comment to unlink.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack"
            ),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryComment],
            error_mapper=unlink_comment_thread_from_slack_error_mapper,
            request_options=request_options,
        )

    async def update_multiple_stories(
        self, body: UpdateStories | UpdateStoriesDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], UpdateMultipleStoriesErrorBody]:
        """Update Multiple Stories allows you to make changes to numerous stories at once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStories | UpdateStoriesDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=update_multiple_stories_error_mapper,
            request_options=request_options,
        )

    async def update_story(
        self,
        story_public_id: int,
        body: UpdateStory | UpdateStoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Story, UpdateStoryErrorBody]:
        """Update Story can be used to update Story properties.

        Args:
            story_public_id: The unique identifier of this story.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/{story-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStory | UpdateStoryDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Story],
            error_mapper=update_story_error_mapper,
            request_options=request_options,
        )

    async def update_story_comment(
        self,
        story_public_id: int,
        comment_public_id: int,
        body: UpdateStoryComment | UpdateStoryCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryComment, UpdateStoryCommentErrorBody]:
        """Update Comment replaces the text of the existing Comment.

        Args:
            story_public_id: The ID of the Story that the Comment is in.
            comment_public_id: The ID of the Comment
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            path_params=[
                param[int]("story-public-id", story_public_id), param[int]("comment-public-id", comment_public_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStoryComment | UpdateStoryCommentDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StoryComment],
            error_mapper=update_story_comment_error_mapper,
            request_options=request_options,
        )

    async def update_task(
        self,
        story_public_id: int,
        task_public_id: int,
        body: UpdateTask | UpdateTaskDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, UpdateTaskErrorBody]:
        """Update Task can be used to update Task properties.

        Args:
            story_public_id: The unique identifier of the parent Story.
            task_public_id: The unique identifier of the Task you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            path_params=[param[int]("story-public-id", story_public_id), param[int]("task-public-id", task_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTask | UpdateTaskDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Task],
            error_mapper=update_task_error_mapper,
            request_options=request_options,
        )
