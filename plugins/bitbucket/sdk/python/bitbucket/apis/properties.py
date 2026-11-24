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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.application_property import ApplicationProperty, ApplicationPropertyDict
from ..server.server import Server


class Properties:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PropertiesWithRawResponse(client, server, auth)

    def delete_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_commit_hosted_property_value(
                workspace, repo_slug, commit, app_key, property_name, request_options=request_options
            ),
        )

    def delete_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_pull_request_hosted_property_value(
                workspace, repo_slug, pullrequest_id, app_key, property_name, request_options=request_options
            ),
        )

    def delete_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_hosted_property_value(
                workspace, repo_slug, app_key, property_name, request_options=request_options
            ),
        )

    def delete_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_user_hosted_property_value(
                selected_user, app_key, property_name, request_options=request_options
            ),
        )

    def get_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_commit_hosted_property_value(
                workspace, repo_slug, commit, app_key, property_name, request_options=request_options
            ),
        )

    def get_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pull_request_hosted_property_value(
                workspace, repo_slug, pullrequest_id, app_key, property_name, request_options=request_options
            ),
        )

    def get_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_hosted_property_value(
                workspace, repo_slug, app_key, property_name, request_options=request_options
            ),
        )

    def retrieve_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_user_hosted_property_value(
                selected_user, app_key, property_name, request_options=request_options
            ),
        )

    def update_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_commit_hosted_property_value(
                workspace, repo_slug, commit, app_key, property_name, body, request_options=request_options
            ),
        )

    def update_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_pull_request_hosted_property_value(
                workspace, repo_slug, pullrequest_id, app_key, property_name, body, request_options=request_options
            ),
        )

    def update_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_hosted_property_value(
                workspace, repo_slug, app_key, property_name, body, request_options=request_options
            ),
        )

    def update_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_user_hosted_property_value(
                selected_user, app_key, property_name, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PropertiesWithRawResponse:
        return self._with_raw_response


class AsyncProperties:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPropertiesWithRawResponse(client, server, auth)

    async def delete_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_commit_hosted_property_value(
                workspace, repo_slug, commit, app_key, property_name, request_options=request_options
            ),
        )

    async def delete_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_pull_request_hosted_property_value(
                workspace, repo_slug, pullrequest_id, app_key, property_name, request_options=request_options
            ),
        )

    async def delete_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_hosted_property_value(
                workspace, repo_slug, app_key, property_name, request_options=request_options
            ),
        )

    async def delete_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_user_hosted_property_value(
                selected_user, app_key, property_name, request_options=request_options
            ),
        )

    async def get_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_commit_hosted_property_value(
                workspace, repo_slug, commit, app_key, property_name, request_options=request_options
            ),
        )

    async def get_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pull_request_hosted_property_value(
                workspace, repo_slug, pullrequest_id, app_key, property_name, request_options=request_options
            ),
        )

    async def get_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_hosted_property_value(
                workspace, repo_slug, app_key, property_name, request_options=request_options
            ),
        )

    async def retrieve_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationProperty:
        """Retrieve an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The value of the property.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_user_hosted_property_value(
                selected_user, app_key, property_name, request_options=request_options
            ),
        )

    async def update_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_commit_hosted_property_value(
                workspace, repo_slug, commit, app_key, property_name, body, request_options=request_options
            ),
        )

    async def update_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_pull_request_hosted_property_value(
                workspace, repo_slug, pullrequest_id, app_key, property_name, body, request_options=request_options
            ),
        )

    async def update_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_hosted_property_value(
                workspace, repo_slug, app_key, property_name, body, request_options=request_options
            ),
        )

    async def update_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Update an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_user_hosted_property_value(
                selected_user, app_key, property_name, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPropertiesWithRawResponse:
        return self._with_raw_response


class PropertiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pullrequest_id", pullrequest_id),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            path_params=[
                param[str]("selected_user", selected_user),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pullrequest_id", pullrequest_id),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def retrieve_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            path_params=[
                param[str]("selected_user", selected_user),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pullrequest_id", pullrequest_id),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            path_params=[
                param[str]("selected_user", selected_user),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPropertiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pullrequest_id", pullrequest_id),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            path_params=[
                param[str]("selected_user", selected_user),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pullrequest_id", pullrequest_id),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def retrieve_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationProperty, RawError]:
        """Retrieve an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            path_params=[
                param[str]("selected_user", selected_user),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ApplicationProperty],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_commit_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a commit.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            commit: The commit.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_pull_request_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        pullrequest_id: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a pull request.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            pullrequest_id: The pull request ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pullrequest_id", pullrequest_id),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_repository_hosted_property_value(
        self,
        workspace: str,
        repo_slug: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a repository.

        Args:
            workspace: The repository container; either the workspace slug or the UUID in curly braces.
            repo_slug: The repository.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_user_hosted_property_value(
        self,
        selected_user: str,
        app_key: str,
        property_name: str,
        body: ApplicationProperty | ApplicationPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Update an application property value stored against a user.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            app_key: The key of the Connect app.
            property_name: The name of the property.
            body: The application property to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            path_params=[
                param[str]("selected_user", selected_user),
                param[str]("app_key", app_key),
                param[str]("property_name", property_name),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationProperty | ApplicationPropertyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
