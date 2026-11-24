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
from ..errors.feature_configs_controller_find_all_error import (
    FeatureConfigsControllerFindAllErrorBody,
    feature_configs_controller_find_all_error_mapper,
)
from ..errors.feature_configs_controller_update_error import (
    FeatureConfigsControllerUpdateErrorBody,
    feature_configs_controller_update_error_mapper,
)
from ..models.feature_config import FeatureConfig
from ..models.update_feature_config_dto import UpdateFeatureConfigDto, UpdateFeatureConfigDtoDict
from ..server.server import Server


class FeatureConfigurations:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FeatureConfigurationsWithRawResponse(client, server)

    def feature_configs_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FeatureConfig]:
        """List Feature configurations for all environments or by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureConfig]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.feature_configs_controller_find_all(
                feature, project, environment=environment, request_options=request_options
            ),
        )

    def feature_configs_controller_update(
        self,
        feature: str,
        project: str,
        environment: str,
        body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureConfig:
        """Update a Feature configuration by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureConfig`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.feature_configs_controller_update(
                feature, project, environment, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FeatureConfigurationsWithRawResponse:
        return self._with_raw_response


class AsyncFeatureConfigurations:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFeatureConfigurationsWithRawResponse(client, server)

    async def feature_configs_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FeatureConfig]:
        """List Feature configurations for all environments or by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureConfig]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.feature_configs_controller_find_all(
                feature, project, environment=environment, request_options=request_options
            ),
        )

    async def feature_configs_controller_update(
        self,
        feature: str,
        project: str,
        environment: str,
        body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureConfig:
        """Update a Feature configuration by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureConfig`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.feature_configs_controller_update(
                feature, project, environment, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFeatureConfigurationsWithRawResponse:
        return self._with_raw_response


class FeatureConfigurationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def feature_configs_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureConfig], FeatureConfigsControllerFindAllErrorBody]:
        """List Feature configurations for all environments or by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/configurations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[str | None]("environment", environment)],
            decoder=json_decoder[list[FeatureConfig]],
            error_mapper=feature_configs_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def feature_configs_controller_update(
        self,
        feature: str,
        project: str,
        environment: str,
        body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureConfig, FeatureConfigsControllerUpdateErrorBody]:
        """Update a Feature configuration by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/configurations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[str]("environment", environment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict](body),
            decoder=json_decoder[FeatureConfig],
            error_mapper=feature_configs_controller_update_error_mapper,
            request_options=request_options,
        )


class AsyncFeatureConfigurationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def feature_configs_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureConfig], FeatureConfigsControllerFindAllErrorBody]:
        """List Feature configurations for all environments or by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/configurations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[str | None]("environment", environment)],
            decoder=async_json_decoder[list[FeatureConfig]],
            error_mapper=feature_configs_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def feature_configs_controller_update(
        self,
        feature: str,
        project: str,
        environment: str,
        body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureConfig, FeatureConfigsControllerUpdateErrorBody]:
        """Update a Feature configuration by environment key or ID

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/configurations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[str]("environment", environment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict](body),
            decoder=async_json_decoder[FeatureConfig],
            error_mapper=feature_configs_controller_update_error_mapper,
            request_options=request_options,
        )
