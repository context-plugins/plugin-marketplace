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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.overrides_controller_delete_overrides_for_feature_error import (
    OverridesControllerDeleteOverridesForFeatureErrorBody,
    overrides_controller_delete_overrides_for_feature_error_mapper,
)
from ..errors.overrides_controller_delete_overrides_for_project_error import (
    OverridesControllerDeleteOverridesForProjectErrorBody,
    overrides_controller_delete_overrides_for_project_error_mapper,
)
from ..errors.overrides_controller_find_one_error import (
    OverridesControllerFindOneErrorBody,
    overrides_controller_find_one_error_mapper,
)
from ..errors.overrides_controller_find_overrides_for_feature_error import (
    OverridesControllerFindOverridesForFeatureErrorBody,
    overrides_controller_find_overrides_for_feature_error_mapper,
)
from ..errors.overrides_controller_find_overrides_for_project_error import (
    OverridesControllerFindOverridesForProjectErrorBody,
    overrides_controller_find_overrides_for_project_error_mapper,
)
from ..errors.overrides_controller_update_feature_override_error import (
    OverridesControllerUpdateFeatureOverrideErrorBody,
    overrides_controller_update_feature_override_error_mapper,
)
from ..models.feature_overrides import FeatureOverrides
from ..models.override import Override
from ..models.override_response import OverrideResponse
from ..models.update_override_dto import UpdateOverrideDto, UpdateOverrideDtoDict
from ..models.user_override import UserOverride
from ..server.server import Server


class Overrides:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OverridesWithRawResponse(client, server)

    def overrides_controller_delete_overrides_for_feature(
        self, feature: str, project: str, environment: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.overrides_controller_delete_overrides_for_feature(
                feature, project, environment, request_options=request_options
            ),
        )

    def overrides_controller_delete_overrides_for_project(
        self, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.overrides_controller_delete_overrides_for_project(
                project, request_options=request_options
            ),
        )

    def overrides_controller_find_one(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OverrideResponse:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``OverrideResponse`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.overrides_controller_find_one(feature, project, request_options=request_options)
        )

    def overrides_controller_find_overrides_for_feature(
        self,
        feature: str,
        project: str,
        *,
        add_metadata: bool | None = None,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureOverrides:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            add_metadata: Value sent with the request.
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureOverrides`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.overrides_controller_find_overrides_for_feature(
                feature, project, add_metadata=add_metadata, environment=environment, request_options=request_options
            ),
        )

    def overrides_controller_find_overrides_for_project(
        self, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[UserOverride]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[UserOverride]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.overrides_controller_find_overrides_for_project(
                project, request_options=request_options
            ),
        )

    def overrides_controller_update_feature_override(
        self,
        feature: str,
        project: str,
        body: UpdateOverrideDto | UpdateOverrideDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Override:
        """Send a ``PUT`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Override`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.overrides_controller_update_feature_override(
                feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> OverridesWithRawResponse:
        return self._with_raw_response


class AsyncOverrides:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOverridesWithRawResponse(client, server)

    async def overrides_controller_delete_overrides_for_feature(
        self, feature: str, project: str, environment: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.overrides_controller_delete_overrides_for_feature(
                feature, project, environment, request_options=request_options
            ),
        )

    async def overrides_controller_delete_overrides_for_project(
        self, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.overrides_controller_delete_overrides_for_project(
                project, request_options=request_options
            ),
        )

    async def overrides_controller_find_one(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OverrideResponse:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``OverrideResponse`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.overrides_controller_find_one(
                feature, project, request_options=request_options
            ),
        )

    async def overrides_controller_find_overrides_for_feature(
        self,
        feature: str,
        project: str,
        *,
        add_metadata: bool | None = None,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureOverrides:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            add_metadata: Value sent with the request.
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureOverrides`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.overrides_controller_find_overrides_for_feature(
                feature, project, add_metadata=add_metadata, environment=environment, request_options=request_options
            ),
        )

    async def overrides_controller_find_overrides_for_project(
        self, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[UserOverride]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[UserOverride]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.overrides_controller_find_overrides_for_project(
                project, request_options=request_options
            ),
        )

    async def overrides_controller_update_feature_override(
        self,
        feature: str,
        project: str,
        body: UpdateOverrideDto | UpdateOverrideDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Override:
        """Send a ``PUT`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Override`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.overrides_controller_update_feature_override(
                feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOverridesWithRawResponse:
        return self._with_raw_response


class OverridesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def overrides_controller_delete_overrides_for_feature(
        self, feature: str, project: str, environment: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverridesControllerDeleteOverridesForFeatureErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides/current"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[str]("environment", environment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=overrides_controller_delete_overrides_for_feature_error_mapper,
            request_options=request_options,
        )

    def overrides_controller_delete_overrides_for_project(
        self, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverridesControllerDeleteOverridesForProjectErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/overrides/current"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=overrides_controller_delete_overrides_for_project_error_mapper,
            request_options=request_options,
        )

    def overrides_controller_find_one(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OverrideResponse, OverridesControllerFindOneErrorBody]:
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
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides/current"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[OverrideResponse],
            error_mapper=overrides_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def overrides_controller_find_overrides_for_feature(
        self,
        feature: str,
        project: str,
        *,
        add_metadata: bool | None = None,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureOverrides, OverridesControllerFindOverridesForFeatureErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            add_metadata: Value sent with the request.
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[
                param[bool | None]("addMetadata", add_metadata), param[str | None]("environment", environment)
            ],
            decoder=json_decoder[FeatureOverrides],
            error_mapper=overrides_controller_find_overrides_for_feature_error_mapper,
            request_options=request_options,
        )

    def overrides_controller_find_overrides_for_project(
        self, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[UserOverride], OverridesControllerFindOverridesForProjectErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/overrides/current"),
            path_params=[param[str]("project", project)],
            decoder=json_decoder[list[UserOverride]],
            error_mapper=overrides_controller_find_overrides_for_project_error_mapper,
            request_options=request_options,
        )

    def overrides_controller_update_feature_override(
        self,
        feature: str,
        project: str,
        body: UpdateOverrideDto | UpdateOverrideDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Override, OverridesControllerUpdateFeatureOverrideErrorBody]:
        """Send a ``PUT`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides/current"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateOverrideDto | UpdateOverrideDtoDict](body),
            decoder=json_decoder[Override],
            error_mapper=overrides_controller_update_feature_override_error_mapper,
            request_options=request_options,
        )


class AsyncOverridesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def overrides_controller_delete_overrides_for_feature(
        self, feature: str, project: str, environment: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverridesControllerDeleteOverridesForFeatureErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides/current"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[str]("environment", environment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=overrides_controller_delete_overrides_for_feature_error_mapper,
            request_options=request_options,
        )

    async def overrides_controller_delete_overrides_for_project(
        self, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverridesControllerDeleteOverridesForProjectErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/overrides/current"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=overrides_controller_delete_overrides_for_project_error_mapper,
            request_options=request_options,
        )

    async def overrides_controller_find_one(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OverrideResponse, OverridesControllerFindOneErrorBody]:
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
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides/current"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[OverrideResponse],
            error_mapper=overrides_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def overrides_controller_find_overrides_for_feature(
        self,
        feature: str,
        project: str,
        *,
        add_metadata: bool | None = None,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureOverrides, OverridesControllerFindOverridesForFeatureErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            add_metadata: Value sent with the request.
            environment: A Environment key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[
                param[bool | None]("addMetadata", add_metadata), param[str | None]("environment", environment)
            ],
            decoder=async_json_decoder[FeatureOverrides],
            error_mapper=overrides_controller_find_overrides_for_feature_error_mapper,
            request_options=request_options,
        )

    async def overrides_controller_find_overrides_for_project(
        self, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[UserOverride], OverridesControllerFindOverridesForProjectErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/overrides/current"),
            path_params=[param[str]("project", project)],
            decoder=async_json_decoder[list[UserOverride]],
            error_mapper=overrides_controller_find_overrides_for_project_error_mapper,
            request_options=request_options,
        )

    async def overrides_controller_update_feature_override(
        self,
        feature: str,
        project: str,
        body: UpdateOverrideDto | UpdateOverrideDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Override, OverridesControllerUpdateFeatureOverrideErrorBody]:
        """Send a ``PUT`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/overrides/current"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateOverrideDto | UpdateOverrideDtoDict](body),
            decoder=async_json_decoder[Override],
            error_mapper=overrides_controller_update_feature_override_error_mapper,
            request_options=request_options,
        )
