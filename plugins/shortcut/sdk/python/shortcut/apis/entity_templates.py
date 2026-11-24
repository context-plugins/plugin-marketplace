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
from ..errors.create_entity_template_error import CreateEntityTemplateErrorBody, create_entity_template_error_mapper
from ..errors.delete_entity_template_error import DeleteEntityTemplateErrorBody, delete_entity_template_error_mapper
from ..errors.disable_story_templates_error import DisableStoryTemplatesErrorBody, disable_story_templates_error_mapper
from ..errors.enable_story_templates_error import EnableStoryTemplatesErrorBody, enable_story_templates_error_mapper
from ..errors.get_entity_template_error import GetEntityTemplateErrorBody, get_entity_template_error_mapper
from ..errors.list_entity_templates_error import ListEntityTemplatesErrorBody, list_entity_templates_error_mapper
from ..errors.update_entity_template_error import UpdateEntityTemplateErrorBody, update_entity_template_error_mapper
from ..models.create_entity_template import CreateEntityTemplate, CreateEntityTemplateDict
from ..models.entity_template import EntityTemplate
from ..models.update_entity_template import UpdateEntityTemplate, UpdateEntityTemplateDict
from ..server.server import Server


class EntityTemplates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EntityTemplatesWithRawResponse(client, server, auth)

    def create_entity_template(
        self,
        body: CreateEntityTemplate | CreateEntityTemplateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntityTemplate:
        """Create a new entity template for the Workspace.

        Args:
            body: Request parameters for creating an entirely new entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_entity_template(body, request_options=request_options))

    def delete_entity_template(
        self, entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_entity_template(entity_template_public_id, request_options=request_options)
        )

    def disable_story_templates(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Disables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disable_story_templates(request_options=request_options))

    def enable_story_templates(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Enables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.enable_story_templates(request_options=request_options))

    def get_entity_template(
        self, entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> EntityTemplate:
        """Get Entity Template returns information about a given entity template.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_entity_template(entity_template_public_id, request_options=request_options)
        )

    def list_entity_templates(self, *, request_options: RequestOptionsOrDict | None = None) -> list[EntityTemplate]:
        """List all the entity templates for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_entity_templates(request_options=request_options))

    def update_entity_template(
        self,
        entity_template_public_id: UUID,
        body: UpdateEntityTemplate | UpdateEntityTemplateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntityTemplate:
        """Update an entity template's name or its contents.

        Args:
            entity_template_public_id: The unique ID of the template to be updated.
            body: Request parameters for changing either a template's name or any of the attributes it is designed to
                pre-populate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_entity_template(
                entity_template_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EntityTemplatesWithRawResponse:
        return self._with_raw_response


class AsyncEntityTemplates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEntityTemplatesWithRawResponse(client, server, auth)

    async def create_entity_template(
        self,
        body: CreateEntityTemplate | CreateEntityTemplateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityTemplate:
        """Create a new entity template for the Workspace.

        Args:
            body: Request parameters for creating an entirely new entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_entity_template(body, request_options=request_options))

    async def delete_entity_template(
        self, entity_template_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_entity_template(
                entity_template_public_id, request_options=request_options
            ),
        )

    async def disable_story_templates(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Disables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.disable_story_templates(request_options=request_options))

    async def enable_story_templates(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Enables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.enable_story_templates(request_options=request_options))

    async def get_entity_template(
        self, entity_template_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EntityTemplate:
        """Get Entity Template returns information about a given entity template.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_entity_template(
                entity_template_public_id, request_options=request_options
            ),
        )

    async def list_entity_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EntityTemplate]:
        """List all the entity templates for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_entity_templates(request_options=request_options))

    async def update_entity_template(
        self,
        entity_template_public_id: UUID,
        body: UpdateEntityTemplate | UpdateEntityTemplateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityTemplate:
        """Update an entity template's name or its contents.

        Args:
            entity_template_public_id: The unique ID of the template to be updated.
            body: Request parameters for changing either a template's name or any of the attributes it is designed to
                pre-populate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_entity_template(
                entity_template_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEntityTemplatesWithRawResponse:
        return self._with_raw_response


class EntityTemplatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_entity_template(
        self,
        body: CreateEntityTemplate | CreateEntityTemplateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityTemplate, CreateEntityTemplateErrorBody]:
        """Create a new entity template for the Workspace.

        Args:
            body: Request parameters for creating an entirely new entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/entity-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEntityTemplate | CreateEntityTemplateDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EntityTemplate],
            error_mapper=create_entity_template_error_mapper,
            request_options=request_options,
        )

    def delete_entity_template(
        self, entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEntityTemplateErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/entity-templates/{entity-template-public-id}"),
            path_params=[param[UUID]("entity-template-public-id", entity_template_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_entity_template_error_mapper,
            request_options=request_options,
        )

    def disable_story_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisableStoryTemplatesErrorBody]:
        """Disables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/entity-templates/disable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=disable_story_templates_error_mapper,
            request_options=request_options,
        )

    def enable_story_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, EnableStoryTemplatesErrorBody]:
        """Enables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/entity-templates/enable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=enable_story_templates_error_mapper,
            request_options=request_options,
        )

    def get_entity_template(
        self, entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EntityTemplate, GetEntityTemplateErrorBody]:
        """Get Entity Template returns information about a given entity template.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/entity-templates/{entity-template-public-id}"),
            path_params=[param[UUID]("entity-template-public-id", entity_template_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EntityTemplate],
            error_mapper=get_entity_template_error_mapper,
            request_options=request_options,
        )

    def list_entity_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EntityTemplate], ListEntityTemplatesErrorBody]:
        """List all the entity templates for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/entity-templates"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[EntityTemplate]],
            error_mapper=list_entity_templates_error_mapper,
            request_options=request_options,
        )

    def update_entity_template(
        self,
        entity_template_public_id: UUID,
        body: UpdateEntityTemplate | UpdateEntityTemplateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityTemplate, UpdateEntityTemplateErrorBody]:
        """Update an entity template's name or its contents.

        Args:
            entity_template_public_id: The unique ID of the template to be updated.
            body: Request parameters for changing either a template's name or any of the attributes it is designed to
                pre-populate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/entity-templates/{entity-template-public-id}"),
            path_params=[param[UUID]("entity-template-public-id", entity_template_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateEntityTemplate | UpdateEntityTemplateDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EntityTemplate],
            error_mapper=update_entity_template_error_mapper,
            request_options=request_options,
        )


class AsyncEntityTemplatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_entity_template(
        self,
        body: CreateEntityTemplate | CreateEntityTemplateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityTemplate, CreateEntityTemplateErrorBody]:
        """Create a new entity template for the Workspace.

        Args:
            body: Request parameters for creating an entirely new entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/entity-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEntityTemplate | CreateEntityTemplateDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EntityTemplate],
            error_mapper=create_entity_template_error_mapper,
            request_options=request_options,
        )

    async def delete_entity_template(
        self, entity_template_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEntityTemplateErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/entity-templates/{entity-template-public-id}"),
            path_params=[param[UUID]("entity-template-public-id", entity_template_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_entity_template_error_mapper,
            request_options=request_options,
        )

    async def disable_story_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisableStoryTemplatesErrorBody]:
        """Disables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/entity-templates/disable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=disable_story_templates_error_mapper,
            request_options=request_options,
        )

    async def enable_story_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, EnableStoryTemplatesErrorBody]:
        """Enables the Story Template feature for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/entity-templates/enable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=enable_story_templates_error_mapper,
            request_options=request_options,
        )

    async def get_entity_template(
        self, entity_template_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EntityTemplate, GetEntityTemplateErrorBody]:
        """Get Entity Template returns information about a given entity template.

        Args:
            entity_template_public_id: The unique ID of the entity template.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/entity-templates/{entity-template-public-id}"),
            path_params=[param[UUID]("entity-template-public-id", entity_template_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EntityTemplate],
            error_mapper=get_entity_template_error_mapper,
            request_options=request_options,
        )

    async def list_entity_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EntityTemplate], ListEntityTemplatesErrorBody]:
        """List all the entity templates for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/entity-templates"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[EntityTemplate]],
            error_mapper=list_entity_templates_error_mapper,
            request_options=request_options,
        )

    async def update_entity_template(
        self,
        entity_template_public_id: UUID,
        body: UpdateEntityTemplate | UpdateEntityTemplateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityTemplate, UpdateEntityTemplateErrorBody]:
        """Update an entity template's name or its contents.

        Args:
            entity_template_public_id: The unique ID of the template to be updated.
            body: Request parameters for changing either a template's name or any of the attributes it is designed to
                pre-populate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/entity-templates/{entity-template-public-id}"),
            path_params=[param[UUID]("entity-template-public-id", entity_template_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateEntityTemplate | UpdateEntityTemplateDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EntityTemplate],
            error_mapper=update_entity_template_error_mapper,
            request_options=request_options,
        )
