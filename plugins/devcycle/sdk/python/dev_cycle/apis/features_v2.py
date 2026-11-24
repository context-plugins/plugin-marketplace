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
from ..errors.features_controller_create_error import (
    FeaturesControllerCreateErrorBody,
    features_controller_create_error_mapper,
)
from ..errors.features_controller_find_all_error import (
    FeaturesControllerFindAllErrorBody,
    features_controller_find_all_error_mapper,
)
from ..errors.features_controller_find_one_error import (
    FeaturesControllerFindOneErrorBody,
    features_controller_find_one_error_mapper,
)
from ..errors.features_controller_find_static_configuration_error import (
    FeaturesControllerFindStaticConfigurationErrorBody,
    features_controller_find_static_configuration_error_mapper,
)
from ..errors.features_controller_get_staleness_error import (
    FeaturesControllerGetStalenessErrorBody,
    features_controller_get_staleness_error_mapper,
)
from ..errors.features_controller_update_error import (
    FeaturesControllerUpdateErrorBody,
    features_controller_update_error_mapper,
)
from ..errors.features_controller_update_staleness_error import (
    FeaturesControllerUpdateStalenessErrorBody,
    features_controller_update_staleness_error_mapper,
)
from ..errors.features_controller_update_static_configuration_error import (
    FeaturesControllerUpdateStaticConfigurationErrorBody,
    features_controller_update_static_configuration_error_mapper,
)
from ..errors.features_controller_update_status_error import (
    FeaturesControllerUpdateStatusErrorBody,
    features_controller_update_status_error_mapper,
)
from ..errors.features_controller_update_summary_error import (
    FeaturesControllerUpdateSummaryErrorBody,
    features_controller_update_summary_error_mapper,
)
from ..models.create_feature_dto import CreateFeatureDto, CreateFeatureDtoDict
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.enums.staleness import StalenessOrStr
from ..models.enums.status5 import Status5OrStr
from ..models.enums.type9 import Type9OrStr
from ..models.feature_dev_cycle_management_deprecated_features_v1_api import (
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
)
from ..models.feature_staleness_entity import FeatureStalenessEntity
from ..models.feature_summary import FeatureSummary
from ..models.static_configuration import StaticConfiguration
from ..models.update_feature_dto import UpdateFeatureDto, UpdateFeatureDtoDict
from ..models.update_feature_status_dto import UpdateFeatureStatusDto, UpdateFeatureStatusDtoDict
from ..models.update_feature_summary_dto import UpdateFeatureSummaryDto, UpdateFeatureSummaryDtoDict
from ..models.update_staleness_dto import UpdateStalenessDto, UpdateStalenessDtoDict
from ..models.update_static_configuration_dto import UpdateStaticConfigurationDto, UpdateStaticConfigurationDtoDict
from ..server.server import Server


class FeaturesV2:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FeaturesV2WithRawResponse(client, server)

    def features_controller_create(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_create(project, body, request_options=request_options)
        )

    def features_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        custom_status: list[str] | None = None,
        keys: list[str] | None = None,
        include_latest_update: bool | None = None,
        staleness: StalenessOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            custom_status: Value sent with the request.
            keys: Value sent with the request.
            include_latest_update: Value sent with the request.
            staleness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                type_=type_,
                status=status,
                custom_status=custom_status,
                keys=keys,
                include_latest_update=include_latest_update,
                staleness=staleness,
                request_options=request_options,
            ),
        )

    def features_controller_find_one(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Get a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_one(feature, project, request_options=request_options)
        )

    def features_controller_find_static_configuration(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> StaticConfiguration:
        """Get a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_static_configuration(
                feature, project, request_options=request_options
            ),
        )

    def features_controller_get_staleness(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FeatureStalenessEntity:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureStalenessEntity`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_get_staleness(feature, project, request_options=request_options)
        )

    def features_controller_update(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update(feature, project, body, request_options=request_options)
        )

    def features_controller_update_staleness(
        self,
        feature: str,
        project: str,
        body: UpdateStalenessDto | UpdateStalenessDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureStalenessEntity:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureStalenessEntity`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_staleness(
                feature, project, body, request_options=request_options
            ),
        )

    def features_controller_update_static_configuration(
        self,
        feature: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StaticConfiguration:
        """Update a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_static_configuration(
                feature, project, body, request_options=request_options
            ),
        )

    def features_controller_update_status(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_status(
                feature, project, body, request_options=request_options
            ),
        )

    def features_controller_update_summary(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureSummary:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureSummary`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_summary(
                feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FeaturesV2WithRawResponse:
        return self._with_raw_response


class AsyncFeaturesV2:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFeaturesV2WithRawResponse(client, server)

    async def features_controller_create(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_create(project, body, request_options=request_options)
        )

    async def features_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        custom_status: list[str] | None = None,
        keys: list[str] | None = None,
        include_latest_update: bool | None = None,
        staleness: StalenessOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            custom_status: Value sent with the request.
            keys: Value sent with the request.
            include_latest_update: Value sent with the request.
            staleness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                type_=type_,
                status=status,
                custom_status=custom_status,
                keys=keys,
                include_latest_update=include_latest_update,
                staleness=staleness,
                request_options=request_options,
            ),
        )

    async def features_controller_find_one(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Get a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_one(
                feature, project, request_options=request_options
            ),
        )

    async def features_controller_find_static_configuration(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StaticConfiguration:
        """Get a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_static_configuration(
                feature, project, request_options=request_options
            ),
        )

    async def features_controller_get_staleness(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FeatureStalenessEntity:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureStalenessEntity`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_get_staleness(
                feature, project, request_options=request_options
            ),
        )

    async def features_controller_update(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update(
                feature, project, body, request_options=request_options
            ),
        )

    async def features_controller_update_staleness(
        self,
        feature: str,
        project: str,
        body: UpdateStalenessDto | UpdateStalenessDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureStalenessEntity:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureStalenessEntity`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_staleness(
                feature, project, body, request_options=request_options
            ),
        )

    async def features_controller_update_static_configuration(
        self,
        feature: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StaticConfiguration:
        """Update a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_static_configuration(
                feature, project, body, request_options=request_options
            ),
        )

    async def features_controller_update_status(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_status(
                feature, project, body, request_options=request_options
            ),
        )

    async def features_controller_update_summary(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureSummary:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureSummary`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_summary(
                feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFeaturesV2WithRawResponse:
        return self._with_raw_response


class FeaturesV2WithRawResponse(BaseRawResponse[RawClient, Server]):
    def features_controller_create(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateErrorBody]:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFeatureDto | CreateFeatureDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_create_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        custom_status: list[str] | None = None,
        keys: list[str] | None = None,
        include_latest_update: bool | None = None,
        staleness: StalenessOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            custom_status: Value sent with the request.
            keys: Value sent with the request.
            include_latest_update: Value sent with the request.
            staleness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[Type9OrStr | None]("type", type_),
                param[Status5OrStr | None]("status", status),
                param[list[str] | None]("customStatus", custom_status),
                param[list[str] | None]("keys", keys),
                param[bool | None]("includeLatestUpdate", include_latest_update),
                param[StalenessOrStr | None]("staleness", staleness),
            ],
            decoder=json_decoder[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]],
            error_mapper=features_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_one(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneErrorBody]:
        """Get a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_static_configuration(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationErrorBody]:
        """Get a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[StaticConfiguration],
            error_mapper=features_controller_find_static_configuration_error_mapper,
            request_options=request_options,
        )

    def features_controller_get_staleness(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureStalenessEntity, FeaturesControllerGetStalenessErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/staleness"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[FeatureStalenessEntity],
            error_mapper=features_controller_get_staleness_error_mapper,
            request_options=request_options,
        )

    def features_controller_update(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateErrorBody]:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureDto | UpdateFeatureDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_staleness(
        self,
        feature: str,
        project: str,
        body: UpdateStalenessDto | UpdateStalenessDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureStalenessEntity, FeaturesControllerUpdateStalenessErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/staleness"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStalenessDto | UpdateStalenessDtoDict](body),
            decoder=json_decoder[FeatureStalenessEntity],
            error_mapper=features_controller_update_staleness_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_static_configuration(
        self,
        feature: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationErrorBody]:
        """Update a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict](body),
            decoder=json_decoder[StaticConfiguration],
            error_mapper=features_controller_update_static_configuration_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_status(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/status"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_status_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_summary(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureSummary, FeaturesControllerUpdateSummaryErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/summary"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict](body),
            decoder=json_decoder[FeatureSummary],
            error_mapper=features_controller_update_summary_error_mapper,
            request_options=request_options,
        )


class AsyncFeaturesV2WithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def features_controller_create(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateErrorBody]:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFeatureDto | CreateFeatureDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_create_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        custom_status: list[str] | None = None,
        keys: list[str] | None = None,
        include_latest_update: bool | None = None,
        staleness: StalenessOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            custom_status: Value sent with the request.
            keys: Value sent with the request.
            include_latest_update: Value sent with the request.
            staleness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[Type9OrStr | None]("type", type_),
                param[Status5OrStr | None]("status", status),
                param[list[str] | None]("customStatus", custom_status),
                param[list[str] | None]("keys", keys),
                param[bool | None]("includeLatestUpdate", include_latest_update),
                param[StalenessOrStr | None]("staleness", staleness),
            ],
            decoder=async_json_decoder[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]],
            error_mapper=features_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_one(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneErrorBody]:
        """Get a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_static_configuration(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationErrorBody]:
        """Get a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[StaticConfiguration],
            error_mapper=features_controller_find_static_configuration_error_mapper,
            request_options=request_options,
        )

    async def features_controller_get_staleness(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureStalenessEntity, FeaturesControllerGetStalenessErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/staleness"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[FeatureStalenessEntity],
            error_mapper=features_controller_get_staleness_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateErrorBody]:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureDto | UpdateFeatureDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_staleness(
        self,
        feature: str,
        project: str,
        body: UpdateStalenessDto | UpdateStalenessDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureStalenessEntity, FeaturesControllerUpdateStalenessErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/staleness"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStalenessDto | UpdateStalenessDtoDict](body),
            decoder=async_json_decoder[FeatureStalenessEntity],
            error_mapper=features_controller_update_staleness_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_static_configuration(
        self,
        feature: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationErrorBody]:
        """Update a completed Feature's static configuration

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict](body),
            decoder=async_json_decoder[StaticConfiguration],
            error_mapper=features_controller_update_static_configuration_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_status(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/status"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_status_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_summary(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureSummary, FeaturesControllerUpdateSummaryErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/summary"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict](body),
            decoder=async_json_decoder[FeatureSummary],
            error_mapper=features_controller_update_summary_error_mapper,
            request_options=request_options,
        )
