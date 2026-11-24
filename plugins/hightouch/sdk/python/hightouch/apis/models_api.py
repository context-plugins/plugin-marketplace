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
from ..errors.create_model_error import CreateModelErrorBody, create_model_error_mapper
from ..errors.delete_model_error import DeleteModelErrorBody, delete_model_error_mapper
from ..errors.get_audience_size_error import GetAudienceSizeErrorBody, get_audience_size_error_mapper
from ..errors.get_model_error import GetModelErrorBody, get_model_error_mapper
from ..errors.list_enrichment_runs_error import ListEnrichmentRunsErrorBody, list_enrichment_runs_error_mapper
from ..errors.list_model_error import ListModelErrorBody, list_model_error_mapper
from ..errors.start_audience_size_job_error import StartAudienceSizeJobErrorBody, start_audience_size_job_error_mapper
from ..errors.trigger_enrichment_error import TriggerEnrichmentErrorBody, trigger_enrichment_error_mapper
from ..errors.update_model_error import UpdateModelErrorBody, update_model_error_mapper
from ..models.enums.order_by_hightouch_destinations_api import (
    OrderByHightouchDestinationsApi,
    OrderByHightouchDestinationsApiOrStr,
)
from ..models.enums.region1 import Region1OrStr
from ..models.match_booster_trigger_input import MatchBoosterTriggerInput, MatchBoosterTriggerInputDict
from ..models.model import Model
from ..models.model_create import ModelCreate, ModelCreateDict
from ..models.model_update import ModelUpdate, ModelUpdateDict
from ..models.models_response import ModelsResponse
from ..models.unions.models_match_booster_runs_response import ModelsMatchBoosterRunsResponse
from ..models.unions.models_match_booster_trigger_response import ModelsMatchBoosterTriggerResponse
from ..models.unions.models_response1 import ModelsResponse1
from ..models.unions.models_response11 import ModelsResponse11
from ..models.unions.models_size_response import ModelsSizeResponse
from ..models.unions.models_size_response1 import ModelsSizeResponse1
from ..server.server import Server


class ModelsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ModelsApiWithRawResponse(client, server, auth)

    def create_model(
        self,
        body: ModelCreate | ModelCreateDict,
        *,
        skip_column_query: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsResponse1:
        """Create a new model

        Args:
            body: The request body.
            skip_column_query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Conflict Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            self._with_raw_response.create_model(
                body, skip_column_query=skip_column_query, request_options=request_options
            ),
        )

    def delete_model(self, model_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ModelsResponse11:
        """Delete a model

        Deletes a model based on its Hightouch ID. Any syncs that use the model are deleted as well. Deleting a parent
        model also deletes every audience built on it. A model that is still referenced by a journey, priority list,
        decision engine agent, dynamic content condition, saved chart, or identity resolution graph cannot be deleted
        until those references are removed.

        Args:
            model_id: The model's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Conflict Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.delete_model(model_id, request_options=request_options))

    def get_audience_size(
        self, model_id: float, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModelsSizeResponse1:
        """Get the state of an audience size job.

        Args:
            model_id: The id of the audience
            job_id: The id returned when the size job was started
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.get_audience_size(model_id, job_id, request_options=request_options))

    def get_model(self, model_id: float, *, request_options: RequestOptionsOrDict | None = None) -> Model:
        """Retrieve models from model ID

        Args:
            model_id: The id of the model
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_model(model_id, request_options=request_options))

    def list_enrichment_runs(
        self,
        model_id: float,
        *,
        region: Region1OrStr | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsMatchBoosterRunsResponse:
        """List Match Booster enrichment runs for a model, most recent first.

        Args:
            model_id: The id of the model
            region: Filter runs to a Match Booster region
            limit: limit the number of objects returned (default is 100)
            offset: set the offset on results (for pagination)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            self._with_raw_response.list_enrichment_runs(
                model_id, region=region, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_model(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        tags: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsResponse:
        """List all the models in the current workspace including parent and related models

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            tags: filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for
                multiple tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_model(
                name=name,
                slug=slug,
                offset=offset,
                limit=limit,
                order_by=order_by,
                tags=tags,
                request_options=request_options,
            ),
        )

    def start_audience_size_job(
        self, model_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModelsSizeResponse:
        """Start a background job to compute audience size.

        Args:
            model_id: The id of the audience
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.start_audience_size_job(model_id, request_options=request_options))

    def trigger_enrichment(
        self,
        model_id: float,
        *,
        body: MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsMatchBoosterTriggerResponse:
        """Trigger a Match Booster enrichment run for a model. The model must have Match Booster enabled.

        Args:
            model_id: The id of the model to enrich
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.trigger_enrichment(model_id, body=body, request_options=request_options))

    def update_model(
        self,
        model_id: float,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsResponse1:
        """Update an existing model

        Patch a model based on its Hightouch ID

        Args:
            model_id: The model's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.update_model(model_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ModelsApiWithRawResponse:
        return self._with_raw_response


class AsyncModelsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncModelsApiWithRawResponse(client, server, auth)

    async def create_model(
        self,
        body: ModelCreate | ModelCreateDict,
        *,
        skip_column_query: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsResponse1:
        """Create a new model

        Args:
            body: The request body.
            skip_column_query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Conflict Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.create_model(
                body, skip_column_query=skip_column_query, request_options=request_options
            ),
        )

    async def delete_model(
        self, model_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelsResponse11:
        """Delete a model

        Deletes a model based on its Hightouch ID. Any syncs that use the model are deleted as well. Deleting a parent
        model also deletes every audience built on it. A model that is still referenced by a journey, priority list,
        decision engine agent, dynamic content condition, saved chart, or identity resolution graph cannot be deleted
        until those references are removed.

        Args:
            model_id: The model's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Conflict Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.delete_model(model_id, request_options=request_options))

    async def get_audience_size(
        self, model_id: float, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelsSizeResponse1:
        """Get the state of an audience size job.

        Args:
            model_id: The id of the audience
            job_id: The id returned when the size job was started
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.get_audience_size(model_id, job_id, request_options=request_options)
        )

    async def get_model(self, model_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Model:
        """Retrieve models from model ID

        Args:
            model_id: The id of the model
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_model(model_id, request_options=request_options))

    async def list_enrichment_runs(
        self,
        model_id: float,
        *,
        region: Region1OrStr | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsMatchBoosterRunsResponse:
        """List Match Booster enrichment runs for a model, most recent first.

        Args:
            model_id: The id of the model
            region: Filter runs to a Match Booster region
            limit: limit the number of objects returned (default is 100)
            offset: set the offset on results (for pagination)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.list_enrichment_runs(
                model_id, region=region, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_model(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        tags: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsResponse:
        """List all the models in the current workspace including parent and related models

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            tags: filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for
                multiple tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_model(
                name=name,
                slug=slug,
                offset=offset,
                limit=limit,
                order_by=order_by,
                tags=tags,
                request_options=request_options,
            ),
        )

    async def start_audience_size_job(
        self, model_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelsSizeResponse:
        """Start a background job to compute audience size.

        Args:
            model_id: The id of the audience
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.start_audience_size_job(model_id, request_options=request_options))

    async def trigger_enrichment(
        self,
        model_id: float,
        *,
        body: MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsMatchBoosterTriggerResponse:
        """Trigger a Match Booster enrichment run for a model. The model must have Match Booster enabled.

        Args:
            model_id: The id of the model to enrich
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not Found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_enrichment(model_id, body=body, request_options=request_options)
        )

    async def update_model(
        self,
        model_id: float,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsResponse1:
        """Update an existing model

        Patch a model based on its Hightouch ID

        Args:
            model_id: The model's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.update_model(model_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncModelsApiWithRawResponse:
        return self._with_raw_response


class ModelsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_model(
        self,
        body: ModelCreate | ModelCreateDict,
        *,
        skip_column_query: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsResponse1, CreateModelErrorBody]:
        """Create a new model

        Args:
            body: The request body.
            skip_column_query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/models"),
            query_params=[param[bool | None]("skipColumnQuery", skip_column_query)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelCreate | ModelCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsResponse1],
            error_mapper=create_model_error_mapper,
            request_options=request_options,
        )

    def delete_model(
        self, model_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsResponse11, DeleteModelErrorBody]:
        """Delete a model

        Deletes a model based on its Hightouch ID. Any syncs that use the model are deleted as well. Deleting a parent
        model also deletes every audience built on it. A model that is still referenced by a journey, priority list,
        decision engine agent, dynamic content condition, saved chart, or identity resolution graph cannot be deleted
        until those references are removed.

        Args:
            model_id: The model's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/models/{modelId}"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsResponse11],
            error_mapper=delete_model_error_mapper,
            request_options=request_options,
        )

    def get_audience_size(
        self, model_id: float, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsSizeResponse1, GetAudienceSizeErrorBody]:
        """Get the state of an audience size job.

        Args:
            model_id: The id of the audience
            job_id: The id returned when the size job was started
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models/{modelId}/size/{jobId}"),
            path_params=[param[float]("modelId", model_id), param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsSizeResponse1],
            error_mapper=get_audience_size_error_mapper,
            request_options=request_options,
        )

    def get_model(
        self, model_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Model, GetModelErrorBody]:
        """Retrieve models from model ID

        Args:
            model_id: The id of the model
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models/{modelId}"),
            path_params=[param[float]("modelId", model_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Model],
            error_mapper=get_model_error_mapper,
            request_options=request_options,
        )

    def list_enrichment_runs(
        self,
        model_id: float,
        *,
        region: Region1OrStr | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsMatchBoosterRunsResponse, ListEnrichmentRunsErrorBody]:
        """List Match Booster enrichment runs for a model, most recent first.

        Args:
            model_id: The id of the model
            region: Filter runs to a Match Booster region
            limit: limit the number of objects returned (default is 100)
            offset: set the offset on results (for pagination)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models/{modelId}/match-booster/runs"),
            path_params=[param[float]("modelId", model_id)],
            query_params=[
                param[Region1OrStr | None]("region", region),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsMatchBoosterRunsResponse],
            error_mapper=list_enrichment_runs_error_mapper,
            request_options=request_options,
        )

    def list_model(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        tags: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsResponse, ListModelErrorBody]:
        """List all the models in the current workspace including parent and related models

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            tags: filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for
                multiple tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("slug", slug),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
                param[list[str] | None]("tags", tags),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsResponse],
            error_mapper=list_model_error_mapper,
            request_options=request_options,
        )

    def start_audience_size_job(
        self, model_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsSizeResponse, StartAudienceSizeJobErrorBody]:
        """Start a background job to compute audience size.

        Args:
            model_id: The id of the audience
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/models/{modelId}/size"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsSizeResponse],
            error_mapper=start_audience_size_job_error_mapper,
            request_options=request_options,
        )

    def trigger_enrichment(
        self,
        model_id: float,
        *,
        body: MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsMatchBoosterTriggerResponse, TriggerEnrichmentErrorBody]:
        """Trigger a Match Booster enrichment run for a model. The model must have Match Booster enabled.

        Args:
            model_id: The id of the model to enrich
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/models/{modelId}/match-booster/trigger"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsMatchBoosterTriggerResponse],
            error_mapper=trigger_enrichment_error_mapper,
            request_options=request_options,
        )

    def update_model(
        self,
        model_id: float,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsResponse1, UpdateModelErrorBody]:
        """Update an existing model

        Patch a model based on its Hightouch ID

        Args:
            model_id: The model's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/models/{modelId}"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelUpdate | ModelUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ModelsResponse1],
            error_mapper=update_model_error_mapper,
            request_options=request_options,
        )


class AsyncModelsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_model(
        self,
        body: ModelCreate | ModelCreateDict,
        *,
        skip_column_query: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsResponse1, CreateModelErrorBody]:
        """Create a new model

        Args:
            body: The request body.
            skip_column_query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/models"),
            query_params=[param[bool | None]("skipColumnQuery", skip_column_query)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelCreate | ModelCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsResponse1],
            error_mapper=create_model_error_mapper,
            request_options=request_options,
        )

    async def delete_model(
        self, model_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsResponse11, DeleteModelErrorBody]:
        """Delete a model

        Deletes a model based on its Hightouch ID. Any syncs that use the model are deleted as well. Deleting a parent
        model also deletes every audience built on it. A model that is still referenced by a journey, priority list,
        decision engine agent, dynamic content condition, saved chart, or identity resolution graph cannot be deleted
        until those references are removed.

        Args:
            model_id: The model's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/models/{modelId}"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsResponse11],
            error_mapper=delete_model_error_mapper,
            request_options=request_options,
        )

    async def get_audience_size(
        self, model_id: float, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsSizeResponse1, GetAudienceSizeErrorBody]:
        """Get the state of an audience size job.

        Args:
            model_id: The id of the audience
            job_id: The id returned when the size job was started
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models/{modelId}/size/{jobId}"),
            path_params=[param[float]("modelId", model_id), param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsSizeResponse1],
            error_mapper=get_audience_size_error_mapper,
            request_options=request_options,
        )

    async def get_model(
        self, model_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Model, GetModelErrorBody]:
        """Retrieve models from model ID

        Args:
            model_id: The id of the model
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models/{modelId}"),
            path_params=[param[float]("modelId", model_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Model],
            error_mapper=get_model_error_mapper,
            request_options=request_options,
        )

    async def list_enrichment_runs(
        self,
        model_id: float,
        *,
        region: Region1OrStr | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsMatchBoosterRunsResponse, ListEnrichmentRunsErrorBody]:
        """List Match Booster enrichment runs for a model, most recent first.

        Args:
            model_id: The id of the model
            region: Filter runs to a Match Booster region
            limit: limit the number of objects returned (default is 100)
            offset: set the offset on results (for pagination)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models/{modelId}/match-booster/runs"),
            path_params=[param[float]("modelId", model_id)],
            query_params=[
                param[Region1OrStr | None]("region", region),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsMatchBoosterRunsResponse],
            error_mapper=list_enrichment_runs_error_mapper,
            request_options=request_options,
        )

    async def list_model(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        tags: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsResponse, ListModelErrorBody]:
        """List all the models in the current workspace including parent and related models

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            tags: filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for
                multiple tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/models"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("slug", slug),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
                param[list[str] | None]("tags", tags),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsResponse],
            error_mapper=list_model_error_mapper,
            request_options=request_options,
        )

    async def start_audience_size_job(
        self, model_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsSizeResponse, StartAudienceSizeJobErrorBody]:
        """Start a background job to compute audience size.

        Args:
            model_id: The id of the audience
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/models/{modelId}/size"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsSizeResponse],
            error_mapper=start_audience_size_job_error_mapper,
            request_options=request_options,
        )

    async def trigger_enrichment(
        self,
        model_id: float,
        *,
        body: MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsMatchBoosterTriggerResponse, TriggerEnrichmentErrorBody]:
        """Trigger a Match Booster enrichment run for a model. The model must have Match Booster enabled.

        Args:
            model_id: The id of the model to enrich
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/models/{modelId}/match-booster/trigger"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsMatchBoosterTriggerResponse],
            error_mapper=trigger_enrichment_error_mapper,
            request_options=request_options,
        )

    async def update_model(
        self,
        model_id: float,
        body: ModelUpdate | ModelUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsResponse1, UpdateModelErrorBody]:
        """Update an existing model

        Patch a model based on its Hightouch ID

        Args:
            model_id: The model's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/models/{modelId}"),
            path_params=[param[float]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelUpdate | ModelUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ModelsResponse1],
            error_mapper=update_model_error_mapper,
            request_options=request_options,
        )
