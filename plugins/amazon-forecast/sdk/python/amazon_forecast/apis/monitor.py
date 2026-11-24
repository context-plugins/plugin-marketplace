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
    empty_response,
    param,
    unwrap,
)
from ..errors.create_monitor_error import CreateMonitorErrorBody, create_monitor_error_mapper
from ..errors.delete_monitor_error import DeleteMonitorErrorBody, delete_monitor_error_mapper
from ..errors.describe_monitor_error import DescribeMonitorErrorBody, describe_monitor_error_mapper
from ..errors.list_monitors_error import ListMonitorsErrorBody, list_monitors_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_monitor_api import (
    XAmzTarget1AmazonForecastServiceMonitorApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_monitor_api import (
    XAmzTarget2AmazonForecastServiceMonitorApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_monitor_api import (
    XAmzTarget3AmazonForecastServiceMonitorApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_monitor_api import (
    XAmzTargetAmazonForecastServiceMonitorApiOrStr,
)
from ..server.server import Server


class Monitor:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitorWithRawResponse(client, server, auth)

    def create_monitor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see
        how your predictor's performance changes over time. For more information, see Predictor Monitoring.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_monitor(x_amz_target, request_options=request_options))

    def delete_monitor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED,
        CREATE_FAILED, or CREATE_STOPPED.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_monitor(x_amz_target, request_options=request_options))

    def describe_monitor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request,
        this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState
        LastModificationTime Message Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_monitor(x_amz_target, request_options=request_options))

    def list_monitors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For
        each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the
        DescribeMonitor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_monitors(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> MonitorWithRawResponse:
        return self._with_raw_response


class AsyncMonitor:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitorWithRawResponse(client, server, auth)

    async def create_monitor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see
        how your predictor's performance changes over time. For more information, see Predictor Monitoring.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_monitor(x_amz_target, request_options=request_options))

    async def delete_monitor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED,
        CREATE_FAILED, or CREATE_STOPPED.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_monitor(x_amz_target, request_options=request_options))

    async def describe_monitor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request,
        this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState
        LastModificationTime Message Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_monitor(x_amz_target, request_options=request_options))

    async def list_monitors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For
        each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the
        DescribeMonitor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_monitors(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMonitorWithRawResponse:
        return self._with_raw_response


class MonitorWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_monitor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateMonitorErrorBody]:
        """Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see
        how your predictor's performance changes over time. For more information, see Predictor Monitoring.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateMonitor"),
            headers=[
                param[XAmzTargetAmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_monitor_error_mapper,
            request_options=request_options,
        )

    def delete_monitor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMonitorErrorBody]:
        """Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED,
        CREATE_FAILED, or CREATE_STOPPED.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMonitor"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_monitor_error_mapper,
            request_options=request_options,
        )

    def describe_monitor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeMonitorErrorBody]:
        """Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request,
        this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState
        LastModificationTime Message Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeMonitor"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_monitor_error_mapper,
            request_options=request_options,
        )

    def list_monitors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMonitorsErrorBody]:
        """Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For
        each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the
        DescribeMonitor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMonitors"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_monitors_error_mapper,
            request_options=request_options,
        )


class AsyncMonitorWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_monitor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateMonitorErrorBody]:
        """Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see
        how your predictor's performance changes over time. For more information, see Predictor Monitoring.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateMonitor"),
            headers=[
                param[XAmzTargetAmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_monitor_error_mapper,
            request_options=request_options,
        )

    async def delete_monitor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMonitorErrorBody]:
        """Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED,
        CREATE_FAILED, or CREATE_STOPPED.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMonitor"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_monitor_error_mapper,
            request_options=request_options,
        )

    async def describe_monitor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeMonitorErrorBody]:
        """Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request,
        this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState
        LastModificationTime Message Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeMonitor"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_monitor_error_mapper,
            request_options=request_options,
        )

    async def list_monitors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceMonitorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMonitorsErrorBody]:
        """Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For
        each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the
        DescribeMonitor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMonitors"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceMonitorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_monitors_error_mapper,
            request_options=request_options,
        )
