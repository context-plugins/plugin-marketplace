from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.fork_model_v2_models_fork_post_error import (
    ForkModelV2ModelsForkPostErrorBody,
    fork_model_v2_models_fork_post_error_mapper,
)
from ..errors.get_model_v2_models_model_id_get_error import (
    GetModelV2ModelsModelIdGetErrorBody,
    get_model_v2_models_model_id_get_error_mapper,
)
from ..errors.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error import (
    ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody,
    list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error_mapper,
)
from ..errors.list_model_checkpoints_v2_models_model_id_checkpoints_get_error import (
    ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody,
    list_model_checkpoints_v2_models_model_id_checkpoints_get_error_mapper,
)
from ..errors.list_model_inference_logs_v2_models_model_id_logs_get_error import (
    ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody,
    list_model_inference_logs_v2_models_model_id_logs_get_error_mapper,
)
from ..errors.list_models_v2_models_get_error import (
    ListModelsV2ModelsGetErrorBody,
    list_models_v2_models_get_error_mapper,
)
from ..errors.model_results_v2_models_model_id_results_get_error import (
    ModelResultsV2ModelsModelIdResultsGetErrorBody,
    model_results_v2_models_model_id_results_get_error_mapper,
)
from ..errors.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error import (
    ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody,
    model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error_mapper,
)
from ..errors.resolve_model_v2_models_resolve_get_error import (
    ResolveModelV2ModelsResolveGetErrorBody,
    resolve_model_v2_models_resolve_get_error_mapper,
)
from ..errors.set_model_head_v2_models_model_id_head_put_error import (
    SetModelHeadV2ModelsModelIdHeadPutErrorBody,
    set_model_head_v2_models_model_id_head_put_error_mapper,
)
from ..errors.update_model_v2_models_model_id_patch_error import (
    UpdateModelV2ModelsModelIdPatchErrorBody,
    update_model_v2_models_model_id_patch_error_mapper,
)
from ..models.checkpoint_response import CheckpointResponse
from ..models.checkpoint_trace_row import CheckpointTraceRow
from ..models.enums.model_list_scope import ModelListScopeOrStr
from ..models.enums.model_list_sort1 import ModelListSort1OrStr
from ..models.enums.purpose import PurposeOrStr
from ..models.model_fork_request import ModelForkRequest, ModelForkRequestDict
from ..models.model_response import ModelResponse
from ..models.model_results_response import ModelResultsResponse
from ..models.model_update import ModelUpdate, ModelUpdateDict
from ..models.paginated_response_model_inference_log_entry import PaginatedResponseModelInferenceLogEntry
from ..models.paginated_response_model_response import PaginatedResponseModelResponse
from ..models.set_head_request import SetHeadRequest, SetHeadRequestDict
from ..models.suggested_tasksets_response import SuggestedTasksetsResponse
from ..server.server import Server


class ModelsApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ModelsApiWithRawResponse(client, server)

    def fork_model_v2_models_fork_post(
        self, body: ModelForkRequest | ModelForkRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModelResponse:
        """Create an owned trainable model derived from a source trainable model.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.fork_model_v2_models_fork_post(body, request_options=request_options))

    def get_model_v2_models_model_id_get(
        self, model_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModelResponse:
        """Get a catalog model by id.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_model_v2_models_model_id_get(model_id, request_options=request_options)
        )

    def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
        self,
        model_id: UUID,
        checkpoint_id: UUID,
        *,
        limit: int | None = 200,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CheckpointTraceRow]:
        """List recent traces produced by a specific model checkpoint.

        Args:
            model_id: Value sent with the request.
            checkpoint_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
                model_id, checkpoint_id, limit=limit, request_options=request_options
            ),
        )

    def list_model_checkpoints_v2_models_model_id_checkpoints_get(
        self, model_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[CheckpointResponse]:
        """List a trainable model's checkpoint tree.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_model_checkpoints_v2_models_model_id_checkpoints_get(
                model_id, request_options=request_options
            ),
        )

    def list_model_inference_logs_v2_models_model_id_logs_get(
        self,
        model_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseModelInferenceLogEntry:
        """List the caller team's gateway inference logs for a model, excluding QA analysis calls.

        Args:
            model_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_model_inference_logs_v2_models_model_id_logs_get(
                model_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_models_v2_models_get(
        self,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        scope: ModelListScopeOrStr | None = None,
        search: str | None = None,
        trainable: bool | None = False,
        include_deprecated: bool | None = True,
        sort: ModelListSort1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseModelResponse:
        """List catalog models visible to the caller.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            scope: ``catalog`` for global base models, ``owned`` for the team's trainable forks; both when omitted.
                Signed-out callers must pass ``catalog``.
            search: Case-insensitive match on display name, model name, or provider name.
            trainable: Only models that can be fine-tuned.
            include_deprecated: Include models whose deprecation date has passed.
            sort: Row order. Signed-out callers cannot sort by ``usage``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_models_v2_models_get(
                limit=limit,
                offset=offset,
                scope=scope,
                search=search,
                trainable=trainable,
                include_deprecated=include_deprecated,
                sort=sort,
                request_options=request_options,
            ),
        )

    def model_results_v2_models_model_id_results_get(
        self,
        model_id: UUID,
        *,
        checkpoint_ids: str | None = None,
        purpose: PurposeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelResultsResponse:
        """Get per-taskset evaluation results for a model's checkpoints.

        Args:
            model_id: Value sent with the request.
            checkpoint_ids: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.model_results_v2_models_model_id_results_get(
                model_id, checkpoint_ids=checkpoint_ids, purpose=purpose, request_options=request_options
            ),
        )

    def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
        self,
        model_id: UUID,
        *,
        exclude: str | None = None,
        search: str | None = None,
        limit: int | None = 50,
        purpose: PurposeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuggestedTasksetsResponse:
        """Suggest tasksets to evaluate or train a model on.

        Args:
            model_id: Value sent with the request.
            exclude: Value sent with the request.
            search: Value sent with the request.
            limit: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
                model_id, exclude=exclude, search=search, limit=limit, purpose=purpose, request_options=request_options
            ),
        )

    def resolve_model_v2_models_resolve_get(
        self, model: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModelResponse:
        """Resolve a model string (slug or id) to its catalog record.

        General slug→id lookup: any client holding a model string (e.g. a trainable model's gateway slug) can map it to
        the id and metadata. Declared before ``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
        query param (not a path segment) so slugs with ``/`` or ``:`` need no encoding. Team-scoping still hides other
        teams' private fine-tunes.

        Args:
            model: Model slug (or id) to resolve to its catalog record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.resolve_model_v2_models_resolve_get(model, request_options=request_options)
        )

    def set_model_head_v2_models_model_id_head_put(
        self,
        model_id: UUID,
        body: SetHeadRequest | SetHeadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelResponse:
        """Point the model's active checkpoint (head) at one of its checkpoint nodes.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.set_model_head_v2_models_model_id_head_put(
                model_id, body, request_options=request_options
            ),
        )

    def update_model_v2_models_model_id_patch(
        self,
        model_id: UUID,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelResponse:
        """Update a model's catalog fields, such as name or visibility.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_model_v2_models_model_id_patch(
                model_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ModelsApiWithRawResponse:
        return self._with_raw_response


class AsyncModelsApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncModelsApiWithRawResponse(client, server)

    async def fork_model_v2_models_fork_post(
        self, body: ModelForkRequest | ModelForkRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelResponse:
        """Create an owned trainable model derived from a source trainable model.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.fork_model_v2_models_fork_post(body, request_options=request_options)
        )

    async def get_model_v2_models_model_id_get(
        self, model_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelResponse:
        """Get a catalog model by id.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_model_v2_models_model_id_get(model_id, request_options=request_options)
        )

    async def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
        self,
        model_id: UUID,
        checkpoint_id: UUID,
        *,
        limit: int | None = 200,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CheckpointTraceRow]:
        """List recent traces produced by a specific model checkpoint.

        Args:
            model_id: Value sent with the request.
            checkpoint_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
                model_id, checkpoint_id, limit=limit, request_options=request_options
            ),
        )

    async def list_model_checkpoints_v2_models_model_id_checkpoints_get(
        self, model_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[CheckpointResponse]:
        """List a trainable model's checkpoint tree.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_model_checkpoints_v2_models_model_id_checkpoints_get(
                model_id, request_options=request_options
            ),
        )

    async def list_model_inference_logs_v2_models_model_id_logs_get(
        self,
        model_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseModelInferenceLogEntry:
        """List the caller team's gateway inference logs for a model, excluding QA analysis calls.

        Args:
            model_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_model_inference_logs_v2_models_model_id_logs_get(
                model_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_models_v2_models_get(
        self,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        scope: ModelListScopeOrStr | None = None,
        search: str | None = None,
        trainable: bool | None = False,
        include_deprecated: bool | None = True,
        sort: ModelListSort1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseModelResponse:
        """List catalog models visible to the caller.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            scope: ``catalog`` for global base models, ``owned`` for the team's trainable forks; both when omitted.
                Signed-out callers must pass ``catalog``.
            search: Case-insensitive match on display name, model name, or provider name.
            trainable: Only models that can be fine-tuned.
            include_deprecated: Include models whose deprecation date has passed.
            sort: Row order. Signed-out callers cannot sort by ``usage``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_models_v2_models_get(
                limit=limit,
                offset=offset,
                scope=scope,
                search=search,
                trainable=trainable,
                include_deprecated=include_deprecated,
                sort=sort,
                request_options=request_options,
            ),
        )

    async def model_results_v2_models_model_id_results_get(
        self,
        model_id: UUID,
        *,
        checkpoint_ids: str | None = None,
        purpose: PurposeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelResultsResponse:
        """Get per-taskset evaluation results for a model's checkpoints.

        Args:
            model_id: Value sent with the request.
            checkpoint_ids: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.model_results_v2_models_model_id_results_get(
                model_id, checkpoint_ids=checkpoint_ids, purpose=purpose, request_options=request_options
            ),
        )

    async def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
        self,
        model_id: UUID,
        *,
        exclude: str | None = None,
        search: str | None = None,
        limit: int | None = 50,
        purpose: PurposeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuggestedTasksetsResponse:
        """Suggest tasksets to evaluate or train a model on.

        Args:
            model_id: Value sent with the request.
            exclude: Value sent with the request.
            search: Value sent with the request.
            limit: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
                model_id, exclude=exclude, search=search, limit=limit, purpose=purpose, request_options=request_options
            ),
        )

    async def resolve_model_v2_models_resolve_get(
        self, model: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelResponse:
        """Resolve a model string (slug or id) to its catalog record.

        General slug→id lookup: any client holding a model string (e.g. a trainable model's gateway slug) can map it to
        the id and metadata. Declared before ``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
        query param (not a path segment) so slugs with ``/`` or ``:`` need no encoding. Team-scoping still hides other
        teams' private fine-tunes.

        Args:
            model: Model slug (or id) to resolve to its catalog record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.resolve_model_v2_models_resolve_get(model, request_options=request_options)
        )

    async def set_model_head_v2_models_model_id_head_put(
        self,
        model_id: UUID,
        body: SetHeadRequest | SetHeadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelResponse:
        """Point the model's active checkpoint (head) at one of its checkpoint nodes.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.set_model_head_v2_models_model_id_head_put(
                model_id, body, request_options=request_options
            ),
        )

    async def update_model_v2_models_model_id_patch(
        self,
        model_id: UUID,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelResponse:
        """Update a model's catalog fields, such as name or visibility.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_model_v2_models_model_id_patch(
                model_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncModelsApiWithRawResponse:
        return self._with_raw_response


class ModelsApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def fork_model_v2_models_fork_post(
        self, body: ModelForkRequest | ModelForkRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelResponse, ForkModelV2ModelsForkPostErrorBody]:
        """Create an owned trainable model derived from a source trainable model.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/models/fork"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelForkRequest | ModelForkRequestDict](body),
            decoder=json_decoder[ModelResponse],
            error_mapper=fork_model_v2_models_fork_post_error_mapper,
            request_options=request_options,
        )

    def get_model_v2_models_model_id_get(
        self, model_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelResponse, GetModelV2ModelsModelIdGetErrorBody]:
        """Get a catalog model by id.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}"),
            path_params=[param[UUID]("model_id", model_id)],
            decoder=json_decoder[ModelResponse],
            error_mapper=get_model_v2_models_model_id_get_error_mapper,
            request_options=request_options,
        )

    def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
        self,
        model_id: UUID,
        checkpoint_id: UUID,
        *,
        limit: int | None = 200,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        list[CheckpointTraceRow], ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody
    ]:
        """List recent traces produced by a specific model checkpoint.

        Args:
            model_id: Value sent with the request.
            checkpoint_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/checkpoints/{checkpoint_id}/traces"),
            path_params=[param[UUID]("model_id", model_id), param[UUID]("checkpoint_id", checkpoint_id)],
            query_params=[param[int | None]("limit", limit)],
            decoder=json_decoder[list[CheckpointTraceRow]],
            error_mapper=list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error_mapper,
            request_options=request_options,
        )

    def list_model_checkpoints_v2_models_model_id_checkpoints_get(
        self, model_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CheckpointResponse], ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody]:
        """List a trainable model's checkpoint tree.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/checkpoints"),
            path_params=[param[UUID]("model_id", model_id)],
            decoder=json_decoder[list[CheckpointResponse]],
            error_mapper=list_model_checkpoints_v2_models_model_id_checkpoints_get_error_mapper,
            request_options=request_options,
        )

    def list_model_inference_logs_v2_models_model_id_logs_get(
        self,
        model_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseModelInferenceLogEntry, ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody]:
        """List the caller team's gateway inference logs for a model, excluding QA analysis calls.

        Args:
            model_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/logs"),
            path_params=[param[UUID]("model_id", model_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=json_decoder[PaginatedResponseModelInferenceLogEntry],
            error_mapper=list_model_inference_logs_v2_models_model_id_logs_get_error_mapper,
            request_options=request_options,
        )

    def list_models_v2_models_get(
        self,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        scope: ModelListScopeOrStr | None = None,
        search: str | None = None,
        trainable: bool | None = False,
        include_deprecated: bool | None = True,
        sort: ModelListSort1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseModelResponse, ListModelsV2ModelsGetErrorBody]:
        """List catalog models visible to the caller.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            scope: ``catalog`` for global base models, ``owned`` for the team's trainable forks; both when omitted.
                Signed-out callers must pass ``catalog``.
            search: Case-insensitive match on display name, model name, or provider name.
            trainable: Only models that can be fine-tuned.
            include_deprecated: Include models whose deprecation date has passed.
            sort: Row order. Signed-out callers cannot sort by ``usage``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[ModelListScopeOrStr | None]("scope", scope),
                param[str | None]("search", search),
                param[bool | None]("trainable", trainable),
                param[bool | None]("include_deprecated", include_deprecated),
                param[ModelListSort1OrStr | None]("sort", sort),
            ],
            decoder=json_decoder[PaginatedResponseModelResponse],
            error_mapper=list_models_v2_models_get_error_mapper,
            request_options=request_options,
        )

    def model_results_v2_models_model_id_results_get(
        self,
        model_id: UUID,
        *,
        checkpoint_ids: str | None = None,
        purpose: PurposeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelResultsResponse, ModelResultsV2ModelsModelIdResultsGetErrorBody]:
        """Get per-taskset evaluation results for a model's checkpoints.

        Args:
            model_id: Value sent with the request.
            checkpoint_ids: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/results"),
            path_params=[param[UUID]("model_id", model_id)],
            query_params=[
                param[str | None]("checkpoint_ids", checkpoint_ids), param[PurposeOrStr | None]("purpose", purpose)
            ],
            decoder=json_decoder[ModelResultsResponse],
            error_mapper=model_results_v2_models_model_id_results_get_error_mapper,
            request_options=request_options,
        )

    def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
        self,
        model_id: UUID,
        *,
        exclude: str | None = None,
        search: str | None = None,
        limit: int | None = 50,
        purpose: PurposeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuggestedTasksetsResponse, ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody]:
        """Suggest tasksets to evaluate or train a model on.

        Args:
            model_id: Value sent with the request.
            exclude: Value sent with the request.
            search: Value sent with the request.
            limit: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/suggested-tasksets"),
            path_params=[param[UUID]("model_id", model_id)],
            query_params=[
                param[str | None]("exclude", exclude),
                param[str | None]("search", search),
                param[int | None]("limit", limit),
                param[PurposeOrStr | None]("purpose", purpose),
            ],
            decoder=json_decoder[SuggestedTasksetsResponse],
            error_mapper=model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error_mapper,
            request_options=request_options,
        )

    def resolve_model_v2_models_resolve_get(
        self, model: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelResponse, ResolveModelV2ModelsResolveGetErrorBody]:
        """Resolve a model string (slug or id) to its catalog record.

        General slug→id lookup: any client holding a model string (e.g. a trainable model's gateway slug) can map it to
        the id and metadata. Declared before ``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
        query param (not a path segment) so slugs with ``/`` or ``:`` need no encoding. Team-scoping still hides other
        teams' private fine-tunes.

        Args:
            model: Model slug (or id) to resolve to its catalog record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/resolve"),
            query_params=[param[str]("model", model)],
            decoder=json_decoder[ModelResponse],
            error_mapper=resolve_model_v2_models_resolve_get_error_mapper,
            request_options=request_options,
        )

    def set_model_head_v2_models_model_id_head_put(
        self,
        model_id: UUID,
        body: SetHeadRequest | SetHeadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelResponse, SetModelHeadV2ModelsModelIdHeadPutErrorBody]:
        """Point the model's active checkpoint (head) at one of its checkpoint nodes.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/models/{model_id}/head"),
            path_params=[param[UUID]("model_id", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetHeadRequest | SetHeadRequestDict](body),
            decoder=json_decoder[ModelResponse],
            error_mapper=set_model_head_v2_models_model_id_head_put_error_mapper,
            request_options=request_options,
        )

    def update_model_v2_models_model_id_patch(
        self,
        model_id: UUID,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelResponse, UpdateModelV2ModelsModelIdPatchErrorBody]:
        """Update a model's catalog fields, such as name or visibility.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/models/{model_id}"),
            path_params=[param[UUID]("model_id", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelUpdate | ModelUpdateDict](body),
            decoder=json_decoder[ModelResponse],
            error_mapper=update_model_v2_models_model_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncModelsApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def fork_model_v2_models_fork_post(
        self, body: ModelForkRequest | ModelForkRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelResponse, ForkModelV2ModelsForkPostErrorBody]:
        """Create an owned trainable model derived from a source trainable model.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/models/fork"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelForkRequest | ModelForkRequestDict](body),
            decoder=async_json_decoder[ModelResponse],
            error_mapper=fork_model_v2_models_fork_post_error_mapper,
            request_options=request_options,
        )

    async def get_model_v2_models_model_id_get(
        self, model_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelResponse, GetModelV2ModelsModelIdGetErrorBody]:
        """Get a catalog model by id.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}"),
            path_params=[param[UUID]("model_id", model_id)],
            decoder=async_json_decoder[ModelResponse],
            error_mapper=get_model_v2_models_model_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
        self,
        model_id: UUID,
        checkpoint_id: UUID,
        *,
        limit: int | None = 200,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        list[CheckpointTraceRow], ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody
    ]:
        """List recent traces produced by a specific model checkpoint.

        Args:
            model_id: Value sent with the request.
            checkpoint_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/checkpoints/{checkpoint_id}/traces"),
            path_params=[param[UUID]("model_id", model_id), param[UUID]("checkpoint_id", checkpoint_id)],
            query_params=[param[int | None]("limit", limit)],
            decoder=async_json_decoder[list[CheckpointTraceRow]],
            error_mapper=list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error_mapper,
            request_options=request_options,
        )

    async def list_model_checkpoints_v2_models_model_id_checkpoints_get(
        self, model_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[CheckpointResponse], ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody]:
        """List a trainable model's checkpoint tree.

        Args:
            model_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/checkpoints"),
            path_params=[param[UUID]("model_id", model_id)],
            decoder=async_json_decoder[list[CheckpointResponse]],
            error_mapper=list_model_checkpoints_v2_models_model_id_checkpoints_get_error_mapper,
            request_options=request_options,
        )

    async def list_model_inference_logs_v2_models_model_id_logs_get(
        self,
        model_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseModelInferenceLogEntry, ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody]:
        """List the caller team's gateway inference logs for a model, excluding QA analysis calls.

        Args:
            model_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/logs"),
            path_params=[param[UUID]("model_id", model_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=async_json_decoder[PaginatedResponseModelInferenceLogEntry],
            error_mapper=list_model_inference_logs_v2_models_model_id_logs_get_error_mapper,
            request_options=request_options,
        )

    async def list_models_v2_models_get(
        self,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        scope: ModelListScopeOrStr | None = None,
        search: str | None = None,
        trainable: bool | None = False,
        include_deprecated: bool | None = True,
        sort: ModelListSort1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseModelResponse, ListModelsV2ModelsGetErrorBody]:
        """List catalog models visible to the caller.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            scope: ``catalog`` for global base models, ``owned`` for the team's trainable forks; both when omitted.
                Signed-out callers must pass ``catalog``.
            search: Case-insensitive match on display name, model name, or provider name.
            trainable: Only models that can be fine-tuned.
            include_deprecated: Include models whose deprecation date has passed.
            sort: Row order. Signed-out callers cannot sort by ``usage``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[ModelListScopeOrStr | None]("scope", scope),
                param[str | None]("search", search),
                param[bool | None]("trainable", trainable),
                param[bool | None]("include_deprecated", include_deprecated),
                param[ModelListSort1OrStr | None]("sort", sort),
            ],
            decoder=async_json_decoder[PaginatedResponseModelResponse],
            error_mapper=list_models_v2_models_get_error_mapper,
            request_options=request_options,
        )

    async def model_results_v2_models_model_id_results_get(
        self,
        model_id: UUID,
        *,
        checkpoint_ids: str | None = None,
        purpose: PurposeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelResultsResponse, ModelResultsV2ModelsModelIdResultsGetErrorBody]:
        """Get per-taskset evaluation results for a model's checkpoints.

        Args:
            model_id: Value sent with the request.
            checkpoint_ids: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/results"),
            path_params=[param[UUID]("model_id", model_id)],
            query_params=[
                param[str | None]("checkpoint_ids", checkpoint_ids), param[PurposeOrStr | None]("purpose", purpose)
            ],
            decoder=async_json_decoder[ModelResultsResponse],
            error_mapper=model_results_v2_models_model_id_results_get_error_mapper,
            request_options=request_options,
        )

    async def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
        self,
        model_id: UUID,
        *,
        exclude: str | None = None,
        search: str | None = None,
        limit: int | None = 50,
        purpose: PurposeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuggestedTasksetsResponse, ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody]:
        """Suggest tasksets to evaluate or train a model on.

        Args:
            model_id: Value sent with the request.
            exclude: Value sent with the request.
            search: Value sent with the request.
            limit: Value sent with the request.
            purpose: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/{model_id}/suggested-tasksets"),
            path_params=[param[UUID]("model_id", model_id)],
            query_params=[
                param[str | None]("exclude", exclude),
                param[str | None]("search", search),
                param[int | None]("limit", limit),
                param[PurposeOrStr | None]("purpose", purpose),
            ],
            decoder=async_json_decoder[SuggestedTasksetsResponse],
            error_mapper=model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error_mapper,
            request_options=request_options,
        )

    async def resolve_model_v2_models_resolve_get(
        self, model: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelResponse, ResolveModelV2ModelsResolveGetErrorBody]:
        """Resolve a model string (slug or id) to its catalog record.

        General slug→id lookup: any client holding a model string (e.g. a trainable model's gateway slug) can map it to
        the id and metadata. Declared before ``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
        query param (not a path segment) so slugs with ``/`` or ``:`` need no encoding. Team-scoping still hides other
        teams' private fine-tunes.

        Args:
            model: Model slug (or id) to resolve to its catalog record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/models/resolve"),
            query_params=[param[str]("model", model)],
            decoder=async_json_decoder[ModelResponse],
            error_mapper=resolve_model_v2_models_resolve_get_error_mapper,
            request_options=request_options,
        )

    async def set_model_head_v2_models_model_id_head_put(
        self,
        model_id: UUID,
        body: SetHeadRequest | SetHeadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelResponse, SetModelHeadV2ModelsModelIdHeadPutErrorBody]:
        """Point the model's active checkpoint (head) at one of its checkpoint nodes.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/models/{model_id}/head"),
            path_params=[param[UUID]("model_id", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetHeadRequest | SetHeadRequestDict](body),
            decoder=async_json_decoder[ModelResponse],
            error_mapper=set_model_head_v2_models_model_id_head_put_error_mapper,
            request_options=request_options,
        )

    async def update_model_v2_models_model_id_patch(
        self,
        model_id: UUID,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelResponse, UpdateModelV2ModelsModelIdPatchErrorBody]:
        """Update a model's catalog fields, such as name or visibility.

        Args:
            model_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/models/{model_id}"),
            path_params=[param[UUID]("model_id", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelUpdate | ModelUpdateDict](body),
            decoder=async_json_decoder[ModelResponse],
            error_mapper=update_model_v2_models_model_id_patch_error_mapper,
            request_options=request_options,
        )
