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
from ..errors.variations_controller_create_error import (
    VariationsControllerCreateErrorBody,
    variations_controller_create_error_mapper,
)
from ..errors.variations_controller_find_all_error import (
    VariationsControllerFindAllErrorBody,
    variations_controller_find_all_error_mapper,
)
from ..errors.variations_controller_find_one_error import (
    VariationsControllerFindOneErrorBody,
    variations_controller_find_one_error_mapper,
)
from ..errors.variations_controller_update_error import (
    VariationsControllerUpdateErrorBody,
    variations_controller_update_error_mapper,
)
from ..models.feature_dev_cycle_management_metric_associations_api import FeatureDevCycleManagementMetricAssociationsApi
from ..models.feature_variation_dto import FeatureVariationDto, FeatureVariationDtoDict
from ..models.update_feature_variation_dto import UpdateFeatureVariationDto, UpdateFeatureVariationDtoDict
from ..models.variation import Variation
from ..server.server import Server


class Variations:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VariationsWithRawResponse(client, server)

    def variations_controller_create(
        self,
        project: str,
        feature: str,
        body: FeatureVariationDto | FeatureVariationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementMetricAssociationsApi:
        """Create a new variation within a Feature

        Args:
            project: A Project key or ID
            feature: A Feature key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementMetricAssociationsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.variations_controller_create(
                project, feature, body, request_options=request_options
            ),
        )

    def variations_controller_find_all(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Variation]:
        """Get a list of variations for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Variation]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.variations_controller_find_all(feature, project, request_options=request_options)
        )

    def variations_controller_find_one(
        self, key: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Variation:
        """Get a variation by ID or key

        Args:
            key: A Variation key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Variation`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.variations_controller_find_one(
                key, feature, project, request_options=request_options
            ),
        )

    def variations_controller_update(
        self,
        key: str,
        feature: str,
        project: str,
        body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementMetricAssociationsApi:
        """Update a variation by ID or key

        Args:
            key: A Feature key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementMetricAssociationsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.variations_controller_update(
                key, feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VariationsWithRawResponse:
        return self._with_raw_response


class AsyncVariations:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVariationsWithRawResponse(client, server)

    async def variations_controller_create(
        self,
        project: str,
        feature: str,
        body: FeatureVariationDto | FeatureVariationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementMetricAssociationsApi:
        """Create a new variation within a Feature

        Args:
            project: A Project key or ID
            feature: A Feature key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementMetricAssociationsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.variations_controller_create(
                project, feature, body, request_options=request_options
            ),
        )

    async def variations_controller_find_all(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Variation]:
        """Get a list of variations for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Variation]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.variations_controller_find_all(
                feature, project, request_options=request_options
            ),
        )

    async def variations_controller_find_one(
        self, key: str, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Variation:
        """Get a variation by ID or key

        Args:
            key: A Variation key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Variation`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.variations_controller_find_one(
                key, feature, project, request_options=request_options
            ),
        )

    async def variations_controller_update(
        self,
        key: str,
        feature: str,
        project: str,
        body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementMetricAssociationsApi:
        """Update a variation by ID or key

        Args:
            key: A Feature key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementMetricAssociationsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.variations_controller_update(
                key, feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVariationsWithRawResponse:
        return self._with_raw_response


class VariationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def variations_controller_create(
        self,
        project: str,
        feature: str,
        body: FeatureVariationDto | FeatureVariationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerCreateErrorBody]:
        """Create a new variation within a Feature

        Args:
            project: A Project key or ID
            feature: A Feature key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations"),
            path_params=[param[str]("project", project), param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FeatureVariationDto | FeatureVariationDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementMetricAssociationsApi],
            error_mapper=variations_controller_create_error_mapper,
            request_options=request_options,
        )

    def variations_controller_find_all(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Variation], VariationsControllerFindAllErrorBody]:
        """Get a list of variations for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[list[Variation]],
            error_mapper=variations_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def variations_controller_find_one(
        self, key: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Variation, VariationsControllerFindOneErrorBody]:
        """Get a variation by ID or key

        Args:
            key: A Variation key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations/{key}"),
            path_params=[param[str]("key", key), param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[Variation],
            error_mapper=variations_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def variations_controller_update(
        self,
        key: str,
        feature: str,
        project: str,
        body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerUpdateErrorBody]:
        """Update a variation by ID or key

        Args:
            key: A Feature key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations/{key}"),
            path_params=[param[str]("key", key), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementMetricAssociationsApi],
            error_mapper=variations_controller_update_error_mapper,
            request_options=request_options,
        )


class AsyncVariationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def variations_controller_create(
        self,
        project: str,
        feature: str,
        body: FeatureVariationDto | FeatureVariationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerCreateErrorBody]:
        """Create a new variation within a Feature

        Args:
            project: A Project key or ID
            feature: A Feature key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations"),
            path_params=[param[str]("project", project), param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FeatureVariationDto | FeatureVariationDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementMetricAssociationsApi],
            error_mapper=variations_controller_create_error_mapper,
            request_options=request_options,
        )

    async def variations_controller_find_all(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Variation], VariationsControllerFindAllErrorBody]:
        """Get a list of variations for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[list[Variation]],
            error_mapper=variations_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def variations_controller_find_one(
        self, key: str, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Variation, VariationsControllerFindOneErrorBody]:
        """Get a variation by ID or key

        Args:
            key: A Variation key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations/{key}"),
            path_params=[param[str]("key", key), param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[Variation],
            error_mapper=variations_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def variations_controller_update(
        self,
        key: str,
        feature: str,
        project: str,
        body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerUpdateErrorBody]:
        """Update a variation by ID or key

        Args:
            key: A Feature key or ID
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/variations/{key}"),
            path_params=[param[str]("key", key), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementMetricAssociationsApi],
            error_mapper=variations_controller_update_error_mapper,
            request_options=request_options,
        )
