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
from ..errors.create_model_error import CreateModelErrorBody, create_model_error_mapper
from ..errors.delete_model_error import DeleteModelErrorBody, delete_model_error_mapper
from ..errors.get_model_error import GetModelErrorBody, get_model_error_mapper
from ..errors.list_models_error import ListModelsErrorBody, list_models_error_mapper
from ..errors.publish_model_error import PublishModelErrorBody, publish_model_error_mapper
from ..models.model import Model
from ..models.model_input import ModelInput, ModelInputDict
from ..models.repositories_models_response import RepositoriesModelsResponse
from ..server.server import Server


class ModelsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ModelsApiWithRawResponse(client, server, auth)

    def create_model(
        self,
        repository_id: str,
        body: ModelInput | ModelInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Model:
        """Creates a new data model within the repository that defines the schema for a master data domain.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created data model.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.create_model(repository_id, body, request_options=request_options))

    def delete_model(
        self, repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a data model from the repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.delete_model(repository_id, model_id, request_options=request_options))

    def get_model(
        self, repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Model:
        """Retrieves the details and schema of a specific data model.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The data model details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.get_model(repository_id, model_id, request_options=request_options))

    def list_models(
        self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RepositoriesModelsResponse:
        """Returns all data models defined within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of data models.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.list_models(repository_id, request_options=request_options))

    def publish_model(
        self, repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Model:
        """Publishes a data model, making it available for domain deployment and data ingestion.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The published model.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.publish_model(repository_id, model_id, request_options=request_options))

    @property
    def with_raw_response(self) -> ModelsApiWithRawResponse:
        return self._with_raw_response


class AsyncModelsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncModelsApiWithRawResponse(client, server, auth)

    async def create_model(
        self,
        repository_id: str,
        body: ModelInput | ModelInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Model:
        """Creates a new data model within the repository that defines the schema for a master data domain.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created data model.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_model(repository_id, body, request_options=request_options))

    async def delete_model(
        self, repository_id: str, model_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a data model from the repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_model(repository_id, model_id, request_options=request_options)
        )

    async def get_model(
        self, repository_id: str, model_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Model:
        """Retrieves the details and schema of a specific data model.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The data model details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.get_model(repository_id, model_id, request_options=request_options))

    async def list_models(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RepositoriesModelsResponse:
        """Returns all data models defined within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of data models.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.list_models(repository_id, request_options=request_options))

    async def publish_model(
        self, repository_id: str, model_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Model:
        """Publishes a data model, making it available for domain deployment and data ingestion.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The published model.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.publish_model(repository_id, model_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncModelsApiWithRawResponse:
        return self._with_raw_response


class ModelsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_model(
        self,
        repository_id: str,
        body: ModelInput | ModelInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Model, CreateModelErrorBody]:
        """Creates a new data model within the repository that defines the schema for a master data domain.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/models"),
            path_params=[param[str]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelInput | ModelInputDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[Model],
            error_mapper=create_model_error_mapper,
            request_options=request_options,
        )

    def delete_model(
        self, repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteModelErrorBody]:
        """Permanently deletes a data model from the repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/models/{modelId}"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=empty_response,
            error_mapper=delete_model_error_mapper,
            request_options=request_options,
        )

    def get_model(
        self, repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Model, GetModelErrorBody]:
        """Retrieves the details and schema of a specific data model.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/models/{modelId}"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("modelId", model_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[Model],
            error_mapper=get_model_error_mapper,
            request_options=request_options,
        )

    def list_models(
        self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesModelsResponse, ListModelsErrorBody]:
        """Returns all data models defined within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/models"),
            path_params=[param[str]("repositoryId", repository_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[RepositoriesModelsResponse],
            error_mapper=list_models_error_mapper,
            request_options=request_options,
        )

    def publish_model(
        self, repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Model, PublishModelErrorBody]:
        """Publishes a data model, making it available for domain deployment and data ingestion.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/models/{modelId}/publish"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[Model],
            error_mapper=publish_model_error_mapper,
            request_options=request_options,
        )


class AsyncModelsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_model(
        self,
        repository_id: str,
        body: ModelInput | ModelInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Model, CreateModelErrorBody]:
        """Creates a new data model within the repository that defines the schema for a master data domain.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/models"),
            path_params=[param[str]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelInput | ModelInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Model],
            error_mapper=create_model_error_mapper,
            request_options=request_options,
        )

    async def delete_model(
        self, repository_id: str, model_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteModelErrorBody]:
        """Permanently deletes a data model from the repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/models/{modelId}"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_empty_response,
            error_mapper=delete_model_error_mapper,
            request_options=request_options,
        )

    async def get_model(
        self, repository_id: str, model_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Model, GetModelErrorBody]:
        """Retrieves the details and schema of a specific data model.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/models/{modelId}"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("modelId", model_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Model],
            error_mapper=get_model_error_mapper,
            request_options=request_options,
        )

    async def list_models(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesModelsResponse, ListModelsErrorBody]:
        """Returns all data models defined within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/models"),
            path_params=[param[str]("repositoryId", repository_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[RepositoriesModelsResponse],
            error_mapper=list_models_error_mapper,
            request_options=request_options,
        )

    async def publish_model(
        self, repository_id: str, model_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Model, PublishModelErrorBody]:
        """Publishes a data model, making it available for domain deployment and data ingestion.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            model_id: Unique identifier of the data model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/models/{modelId}/publish"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("modelId", model_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Model],
            error_mapper=publish_model_error_mapper,
            request_options=request_options,
        )
