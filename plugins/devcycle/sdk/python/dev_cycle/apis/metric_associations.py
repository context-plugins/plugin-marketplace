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
from ..errors.metric_associations_controller_create_error import (
    MetricAssociationsControllerCreateErrorBody,
    metric_associations_controller_create_error_mapper,
)
from ..errors.metric_associations_controller_find_all_error import (
    MetricAssociationsControllerFindAllErrorBody,
    metric_associations_controller_find_all_error_mapper,
)
from ..errors.metric_associations_controller_remove_error import (
    MetricAssociationsControllerRemoveErrorBody,
    metric_associations_controller_remove_error_mapper,
)
from ..models.create_metric_association_dto import CreateMetricAssociationDto, CreateMetricAssociationDtoDict
from ..models.metric_association import MetricAssociation
from ..server.server import Server


class MetricAssociations:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MetricAssociationsWithRawResponse(client, server)

    def metric_associations_controller_create(
        self,
        project: str,
        body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MetricAssociation:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricAssociation`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.metric_associations_controller_create(
                project, body, request_options=request_options
            ),
        )

    def metric_associations_controller_find_all(
        self,
        project: str,
        *,
        metric: str | None = None,
        feature: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[MetricAssociation]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[MetricAssociation]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.metric_associations_controller_find_all(
                project, metric=metric, feature=feature, request_options=request_options
            ),
        )

    def metric_associations_controller_remove(
        self, project: str, metric: str, feature: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.metric_associations_controller_remove(
                project, metric, feature, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MetricAssociationsWithRawResponse:
        return self._with_raw_response


class AsyncMetricAssociations:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMetricAssociationsWithRawResponse(client, server)

    async def metric_associations_controller_create(
        self,
        project: str,
        body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MetricAssociation:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricAssociation`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.metric_associations_controller_create(
                project, body, request_options=request_options
            ),
        )

    async def metric_associations_controller_find_all(
        self,
        project: str,
        *,
        metric: str | None = None,
        feature: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[MetricAssociation]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[MetricAssociation]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.metric_associations_controller_find_all(
                project, metric=metric, feature=feature, request_options=request_options
            ),
        )

    async def metric_associations_controller_remove(
        self, project: str, metric: str, feature: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.metric_associations_controller_remove(
                project, metric, feature, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMetricAssociationsWithRawResponse:
        return self._with_raw_response


class MetricAssociationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def metric_associations_controller_create(
        self,
        project: str,
        body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricAssociation, MetricAssociationsControllerCreateErrorBody]:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/metric-associations"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMetricAssociationDto | CreateMetricAssociationDtoDict](body),
            decoder=json_decoder[MetricAssociation],
            error_mapper=metric_associations_controller_create_error_mapper,
            request_options=request_options,
        )

    def metric_associations_controller_find_all(
        self,
        project: str,
        *,
        metric: str | None = None,
        feature: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[MetricAssociation], MetricAssociationsControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metric-associations"),
            path_params=[param[str]("project", project)],
            query_params=[param[str | None]("metric", metric), param[str | None]("feature", feature)],
            decoder=json_decoder[list[MetricAssociation]],
            error_mapper=metric_associations_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def metric_associations_controller_remove(
        self, project: str, metric: str, feature: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, MetricAssociationsControllerRemoveErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/metric-associations"),
            path_params=[param[str]("project", project)],
            query_params=[param[str]("metric", metric), param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=metric_associations_controller_remove_error_mapper,
            request_options=request_options,
        )


class AsyncMetricAssociationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def metric_associations_controller_create(
        self,
        project: str,
        body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricAssociation, MetricAssociationsControllerCreateErrorBody]:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/metric-associations"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMetricAssociationDto | CreateMetricAssociationDtoDict](body),
            decoder=async_json_decoder[MetricAssociation],
            error_mapper=metric_associations_controller_create_error_mapper,
            request_options=request_options,
        )

    async def metric_associations_controller_find_all(
        self,
        project: str,
        *,
        metric: str | None = None,
        feature: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[MetricAssociation], MetricAssociationsControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metric-associations"),
            path_params=[param[str]("project", project)],
            query_params=[param[str | None]("metric", metric), param[str | None]("feature", feature)],
            decoder=async_json_decoder[list[MetricAssociation]],
            error_mapper=metric_associations_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def metric_associations_controller_remove(
        self, project: str, metric: str, feature: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, MetricAssociationsControllerRemoveErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            project: A Project key or ID
            metric: Value sent with the request.
            feature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/metric-associations"),
            path_params=[param[str]("project", project)],
            query_params=[param[str]("metric", metric), param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=metric_associations_controller_remove_error_mapper,
            request_options=request_options,
        )
