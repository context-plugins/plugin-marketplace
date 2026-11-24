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
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody,
    delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
)
from ..errors.delete_workspaces_by_workspace_hooks_by_uid_error import (
    DeleteWorkspacesByWorkspaceHooksByUidErrorBody,
    delete_workspaces_by_workspace_hooks_by_uid_error_mapper,
)
from ..errors.get_hook_events_by_subject_type_error import (
    GetHookEventsBySubjectTypeErrorBody,
    get_hook_events_by_subject_type_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_hooks2_error import (
    GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody,
    get_repositories_by_workspace_by_repo_slug_hooks2_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error import (
    GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody,
    get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
)
from ..errors.get_workspaces_by_workspace_hooks_by_uid_error import (
    GetWorkspacesByWorkspaceHooksByUidErrorBody,
    get_workspaces_by_workspace_hooks_by_uid_error_mapper,
)
from ..errors.get_workspaces_by_workspace_hooks_error import (
    GetWorkspacesByWorkspaceHooksErrorBody,
    get_workspaces_by_workspace_hooks_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_hooks2_error import (
    PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody,
    post_repositories_by_workspace_by_repo_slug_hooks2_error_mapper,
)
from ..errors.post_workspaces_by_workspace_hooks_error import (
    PostWorkspacesByWorkspaceHooksErrorBody,
    post_workspaces_by_workspace_hooks_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error import (
    PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody,
    put_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
)
from ..errors.put_workspaces_by_workspace_hooks_by_uid_error import (
    PutWorkspacesByWorkspaceHooksByUidErrorBody,
    put_workspaces_by_workspace_hooks_by_uid_error_mapper,
)
from ..models.enums.subject_type1 import SubjectType1OrStr
from ..models.paginated_hook_events import PaginatedHookEvents
from ..models.paginated_webhook_subscriptions import PaginatedWebhookSubscriptions
from ..models.subject_types import SubjectTypes
from ..models.webhook_subscription import WebhookSubscription
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    def delete_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_hooks_by_uid(
                uid, workspace, request_options=request_options
            ),
        )

    def get_hook_events(self, *, request_options: RequestOptionsOrDict | None = None) -> SubjectTypes:
        """Returns the webhook resource or subject types on which webhooks can be registered.

        Each resource/subject type contains an ``events`` link that returns the paginated list of specific events each
        individual subject type can emit.

        This endpoint is publicly accessible and does not require authentication or scopes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A mapping of resource/subject types pointing to their individual event types.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_hook_events(request_options=request_options))

    def get_hook_events_by_subject_type(
        self, subject_type: SubjectType1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedHookEvents:
        """Returns a paginated list of all valid webhook events for the specified entity. **The team and user webhooks
        are deprecated, and you should use workspace instead. For more information, see the announcement.**

        This is public data that does not require any scopes or authentication.

        NOTE: The example response is a truncated response object for the ``workspace`` ``subject_type``. We return the
        same structure for the other ``subject_type`` objects.

        Args:
            subject_type: A resource or subject type.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of webhook types available to subscribe on.

        Raises:
            ApiError: If an invalid ``{subject_type}`` value was specified. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_hook_events_by_subject_type(subject_type, request_options=request_options)
        )

    def get_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user does not have permission to access the webhooks. If the repository does
                not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks2(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user is not an owner on the specified workspace. If the specified workspace
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_hooks(workspace, request_options=request_options)
        )

    def get_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_hooks_by_uid(
                uid, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified
                repository. If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_hooks2(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def post_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified workspace.
                If the specified workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_workspaces_by_workspace_hooks(workspace, request_options=request_options)
        )

    def put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    def put_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_hooks_by_uid(
                uid, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    async def delete_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_hooks_by_uid(
                uid, workspace, request_options=request_options
            ),
        )

    async def get_hook_events(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SubjectTypes:
        """Returns the webhook resource or subject types on which webhooks can be registered.

        Each resource/subject type contains an ``events`` link that returns the paginated list of specific events each
        individual subject type can emit.

        This endpoint is publicly accessible and does not require authentication or scopes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A mapping of resource/subject types pointing to their individual event types.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_hook_events(request_options=request_options))

    async def get_hook_events_by_subject_type(
        self, subject_type: SubjectType1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedHookEvents:
        """Returns a paginated list of all valid webhook events for the specified entity. **The team and user webhooks
        are deprecated, and you should use workspace instead. For more information, see the announcement.**

        This is public data that does not require any scopes or authentication.

        NOTE: The example response is a truncated response object for the ``workspace`` ``subject_type``. We return the
        same structure for the other ``subject_type`` objects.

        Args:
            subject_type: A resource or subject type.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of webhook types available to subscribe on.

        Raises:
            ApiError: If an invalid ``{subject_type}`` value was specified. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_hook_events_by_subject_type(subject_type, request_options=request_options)
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user does not have permission to access the webhooks. If the repository does
                not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks2(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user is not an owner on the specified workspace. If the specified workspace
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_hooks(workspace, request_options=request_options)
        )

    async def get_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_hooks_by_uid(
                uid, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified
                repository. If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_hooks2(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified workspace.
                If the specified workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_workspaces_by_workspace_hooks(workspace, request_options=request_options)
        )

    async def put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_hooks_by_uid(
                uid, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    def delete_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceHooksByUidErrorBody]:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    def get_hook_events(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubjectTypes, RawError]:
        """Returns the webhook resource or subject types on which webhooks can be registered.

        Each resource/subject type contains an ``events`` link that returns the paginated list of specific events each
        individual subject type can emit.

        This endpoint is publicly accessible and does not require authentication or scopes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/hook_events"),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SubjectTypes],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_hook_events_by_subject_type(
        self, subject_type: SubjectType1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedHookEvents, GetHookEventsBySubjectTypeErrorBody]:
        """Returns a paginated list of all valid webhook events for the specified entity. **The team and user webhooks
        are deprecated, and you should use workspace instead. For more information, see the announcement.**

        This is public data that does not require any scopes or authentication.

        NOTE: The example response is a truncated response object for the ``workspace`` ``subject_type``. We return the
        same structure for the other ``subject_type`` objects.

        Args:
            subject_type: A resource or subject type.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/hook_events/{subject_type}"),
            path_params=[param[SubjectType1OrStr]("subject_type", subject_type)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedHookEvents],
            error_mapper=get_hook_events_by_subject_type_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]:
        """Returns a paginated list of webhooks installed on this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks2_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetWorkspacesByWorkspaceHooksErrorBody]:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_workspaces_by_workspace_hooks_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetWorkspacesByWorkspaceHooksByUidErrorBody]:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=get_workspaces_by_workspace_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=post_repositories_by_workspace_by_repo_slug_hooks2_error_mapper,
            request_options=request_options,
        )

    def post_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostWorkspacesByWorkspaceHooksErrorBody]:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=post_workspaces_by_workspace_hooks_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=put_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutWorkspacesByWorkspaceHooksByUidErrorBody]:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=put_workspaces_by_workspace_hooks_by_uid_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    async def delete_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceHooksByUidErrorBody]:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    async def get_hook_events(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubjectTypes, RawError]:
        """Returns the webhook resource or subject types on which webhooks can be registered.

        Each resource/subject type contains an ``events`` link that returns the paginated list of specific events each
        individual subject type can emit.

        This endpoint is publicly accessible and does not require authentication or scopes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/hook_events"),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SubjectTypes],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_hook_events_by_subject_type(
        self, subject_type: SubjectType1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedHookEvents, GetHookEventsBySubjectTypeErrorBody]:
        """Returns a paginated list of all valid webhook events for the specified entity. **The team and user webhooks
        are deprecated, and you should use workspace instead. For more information, see the announcement.**

        This is public data that does not require any scopes or authentication.

        NOTE: The example response is a truncated response object for the ``workspace`` ``subject_type``. We return the
        same structure for the other ``subject_type`` objects.

        Args:
            subject_type: A resource or subject type.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/hook_events/{subject_type}"),
            path_params=[param[SubjectType1OrStr]("subject_type", subject_type)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedHookEvents],
            error_mapper=get_hook_events_by_subject_type_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]:
        """Returns a paginated list of webhooks installed on this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks2_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetWorkspacesByWorkspaceHooksErrorBody]:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_workspaces_by_workspace_hooks_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetWorkspacesByWorkspaceHooksByUidErrorBody]:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=get_workspaces_by_workspace_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_hooks2(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=post_repositories_by_workspace_by_repo_slug_hooks2_error_mapper,
            request_options=request_options,
        )

    async def post_workspaces_by_workspace_hooks(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostWorkspacesByWorkspaceHooksErrorBody]:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=post_workspaces_by_workspace_hooks_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=put_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_hooks_by_uid(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutWorkspacesByWorkspaceHooksByUidErrorBody]:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=put_workspaces_by_workspace_hooks_by_uid_error_mapper,
            request_options=request_options,
        )
