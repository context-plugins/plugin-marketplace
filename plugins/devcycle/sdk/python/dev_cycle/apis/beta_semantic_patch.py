from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.semantic_patch_controller_semantic_update_error import (
    SemanticPatchControllerSemanticUpdateErrorBody,
    semantic_patch_controller_semantic_update_error_mapper,
)
from ..models.audience_patch_dto import AudiencePatchDto, AudiencePatchDtoDict
from ..server.server import Server


class BetaSemanticPatch:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BetaSemanticPatchWithRawResponse(client, server)

    def semantic_patch_controller_semantic_update(
        self,
        key: str,
        project: str,
        body: AudiencePatchDto | AudiencePatchDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Semantic Patch Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.semantic_patch_controller_semantic_update(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BetaSemanticPatchWithRawResponse:
        return self._with_raw_response


class AsyncBetaSemanticPatch:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBetaSemanticPatchWithRawResponse(client, server)

    async def semantic_patch_controller_semantic_update(
        self,
        key: str,
        project: str,
        body: AudiencePatchDto | AudiencePatchDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Semantic Patch Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.semantic_patch_controller_semantic_update(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBetaSemanticPatchWithRawResponse:
        return self._with_raw_response


class BetaSemanticPatchWithRawResponse(BaseRawResponse[RawClient, Server]):
    def semantic_patch_controller_semantic_update(
        self,
        key: str,
        project: str,
        body: AudiencePatchDto | AudiencePatchDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SemanticPatchControllerSemanticUpdateErrorBody]:
        """Semantic Patch Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/semantic/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AudiencePatchDto | AudiencePatchDtoDict](body),
            decoder=empty_response,
            error_mapper=semantic_patch_controller_semantic_update_error_mapper,
            request_options=request_options,
        )


class AsyncBetaSemanticPatchWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def semantic_patch_controller_semantic_update(
        self,
        key: str,
        project: str,
        body: AudiencePatchDto | AudiencePatchDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SemanticPatchControllerSemanticUpdateErrorBody]:
        """Semantic Patch Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/semantic/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AudiencePatchDto | AudiencePatchDtoDict](body),
            decoder=async_empty_response,
            error_mapper=semantic_patch_controller_semantic_update_error_mapper,
            request_options=request_options,
        )
