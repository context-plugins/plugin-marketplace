from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_idr_runs_error import ListIdrRunsErrorBody, list_idr_runs_error_mapper
from ..errors.queue_for_reprocessing_error import QueueForReprocessingErrorBody, queue_for_reprocessing_error_mapper
from ..errors.reprocess_status_error import ReprocessStatusErrorBody, reprocess_status_error_mapper
from ..errors.trigger_idr_run_error import TriggerIdrRunErrorBody, trigger_idr_run_error_mapper
from ..models.enums.order_by_hightouch_idr_api import OrderByHightouchIdrApi, OrderByHightouchIdrApiOrStr
from ..models.idr_queue_for_reprocessing_input import IdrQueueForReprocessingInput, IdrQueueForReprocessingInputDict
from ..models.idr_queue_for_reprocessing_output import IdrQueueForReprocessingOutput
from ..models.idr_reprocess_status_output import IdrReprocessStatusOutput
from ..models.list_idr_runs_output import ListIdrRunsOutput
from ..models.trigger_run_idr_input import TriggerRunIdrInput, TriggerRunIdrInputDict
from ..models.trigger_run_idr_output import TriggerRunIdrOutput
from ..server.server import Server


class Idr:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IdrWithRawResponse(client, server, auth)

    def list_idr_runs(
        self,
        graph_id: str,
        *,
        run_id: str | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: float | None = 20.0,
        offset: float | None = 0.0,
        order_by: OrderByHightouchIdrApiOrStr | None = OrderByHightouchIdrApi.CREATED_AT,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListIdrRunsOutput:
        """List runs for a given IDR graph

        Args:
            graph_id: Required. ID of the graph to list runs for.
            run_id: Run ID to query for.
            after: Select runs that started on or after this ISO timestamp.
            before: Select runs that started on or before this ISO timestamp.
            limit: Maximum number of runs to return.
            offset: Offset to start at for pagination.
            order_by: Field to sort by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_idr_runs(
                graph_id,
                run_id=run_id,
                after=after,
                before=before,
                limit=limit,
                offset=offset,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    def queue_for_reprocessing(
        self,
        graph_id: str,
        *,
        body: IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IdrQueueForReprocessingOutput:
        """Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist. If
        ``block`` is true (the default), identifier values will be added to the blocklist and ignored in future runs.
        Clusters containing these identifier values will be queued for reprocessing.

        Args:
            graph_id: Required. ID of the graph containing the identifiers.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ID associated with the reprocessing request. This can be used to query the status of the request.

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(
            self._with_raw_response.queue_for_reprocessing(graph_id, body=body, request_options=request_options)
        )

    def reprocess_status(
        self, graph_id: str, request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IdrReprocessStatusOutput:
        """Get the status of a reprocessing request

        Args:
            graph_id: Required. ID of the graph for the reprocessing request.
            request_id: Required. ID of the reprocessing request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The status of the reprocessing request.

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(self._with_raw_response.reprocess_status(graph_id, request_id, request_options=request_options))

    def trigger_idr_run(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TriggerRunIdrOutput:
        """Trigger a new IDR run for a graph

        Args:
            graph_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(self._with_raw_response.trigger_idr_run(graph_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> IdrWithRawResponse:
        return self._with_raw_response


class AsyncIdr:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIdrWithRawResponse(client, server, auth)

    async def list_idr_runs(
        self,
        graph_id: str,
        *,
        run_id: str | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: float | None = 20.0,
        offset: float | None = 0.0,
        order_by: OrderByHightouchIdrApiOrStr | None = OrderByHightouchIdrApi.CREATED_AT,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListIdrRunsOutput:
        """List runs for a given IDR graph

        Args:
            graph_id: Required. ID of the graph to list runs for.
            run_id: Run ID to query for.
            after: Select runs that started on or after this ISO timestamp.
            before: Select runs that started on or before this ISO timestamp.
            limit: Maximum number of runs to return.
            offset: Offset to start at for pagination.
            order_by: Field to sort by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_idr_runs(
                graph_id,
                run_id=run_id,
                after=after,
                before=before,
                limit=limit,
                offset=offset,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    async def queue_for_reprocessing(
        self,
        graph_id: str,
        *,
        body: IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IdrQueueForReprocessingOutput:
        """Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist. If
        ``block`` is true (the default), identifier values will be added to the blocklist and ignored in future runs.
        Clusters containing these identifier values will be queued for reprocessing.

        Args:
            graph_id: Required. ID of the graph containing the identifiers.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ID associated with the reprocessing request. This can be used to query the status of the request.

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(
            await self._with_raw_response.queue_for_reprocessing(graph_id, body=body, request_options=request_options)
        )

    async def reprocess_status(
        self, graph_id: str, request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IdrReprocessStatusOutput:
        """Get the status of a reprocessing request

        Args:
            graph_id: Required. ID of the graph for the reprocessing request.
            request_id: Required. ID of the reprocessing request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The status of the reprocessing request.

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(
            await self._with_raw_response.reprocess_status(graph_id, request_id, request_options=request_options)
        )

    async def trigger_idr_run(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TriggerRunIdrOutput:
        """Trigger a new IDR run for a graph

        Args:
            graph_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Validation Failed ``error`` is ``ValidateErrorJson |
                RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_idr_run(graph_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncIdrWithRawResponse:
        return self._with_raw_response


class IdrWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_idr_runs(
        self,
        graph_id: str,
        *,
        run_id: str | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: float | None = 20.0,
        offset: float | None = 0.0,
        order_by: OrderByHightouchIdrApiOrStr | None = OrderByHightouchIdrApi.CREATED_AT,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIdrRunsOutput, ListIdrRunsErrorBody]:
        """List runs for a given IDR graph

        Args:
            graph_id: Required. ID of the graph to list runs for.
            run_id: Run ID to query for.
            after: Select runs that started on or after this ISO timestamp.
            before: Select runs that started on or before this ISO timestamp.
            limit: Maximum number of runs to return.
            offset: Offset to start at for pagination.
            order_by: Field to sort by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/idr/{graphId}/runs"),
            path_params=[param[str]("graphId", graph_id)],
            query_params=[
                param[str | None]("runId", run_id),
                param[RFC3339DateTime | None]("after", after),
                param[RFC3339DateTime | None]("before", before),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[OrderByHightouchIdrApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ListIdrRunsOutput],
            error_mapper=list_idr_runs_error_mapper,
            request_options=request_options,
        )

    def queue_for_reprocessing(
        self,
        graph_id: str,
        *,
        body: IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IdrQueueForReprocessingOutput, QueueForReprocessingErrorBody]:
        """Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist. If
        ``block`` is true (the default), identifier values will be added to the blocklist and ignored in future runs.
        Clusters containing these identifier values will be queued for reprocessing.

        Args:
            graph_id: Required. ID of the graph containing the identifiers.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idr/{graphId}/queue-for-reprocessing"),
            path_params=[param[str]("graphId", graph_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IdrQueueForReprocessingOutput],
            error_mapper=queue_for_reprocessing_error_mapper,
            request_options=request_options,
        )

    def reprocess_status(
        self, graph_id: str, request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IdrReprocessStatusOutput, ReprocessStatusErrorBody]:
        """Get the status of a reprocessing request

        Args:
            graph_id: Required. ID of the graph for the reprocessing request.
            request_id: Required. ID of the reprocessing request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/idr/{graphId}/reprocess-status/{requestId}"),
            path_params=[param[str]("graphId", graph_id), param[str]("requestId", request_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IdrReprocessStatusOutput],
            error_mapper=reprocess_status_error_mapper,
            request_options=request_options,
        )

    def trigger_idr_run(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TriggerRunIdrOutput, TriggerIdrRunErrorBody]:
        """Trigger a new IDR run for a graph

        Args:
            graph_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idr/{graphId}/trigger"),
            path_params=[param[str]("graphId", graph_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunIdrInput | TriggerRunIdrInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TriggerRunIdrOutput],
            error_mapper=trigger_idr_run_error_mapper,
            request_options=request_options,
        )


class AsyncIdrWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_idr_runs(
        self,
        graph_id: str,
        *,
        run_id: str | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        limit: float | None = 20.0,
        offset: float | None = 0.0,
        order_by: OrderByHightouchIdrApiOrStr | None = OrderByHightouchIdrApi.CREATED_AT,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIdrRunsOutput, ListIdrRunsErrorBody]:
        """List runs for a given IDR graph

        Args:
            graph_id: Required. ID of the graph to list runs for.
            run_id: Run ID to query for.
            after: Select runs that started on or after this ISO timestamp.
            before: Select runs that started on or before this ISO timestamp.
            limit: Maximum number of runs to return.
            offset: Offset to start at for pagination.
            order_by: Field to sort by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/idr/{graphId}/runs"),
            path_params=[param[str]("graphId", graph_id)],
            query_params=[
                param[str | None]("runId", run_id),
                param[RFC3339DateTime | None]("after", after),
                param[RFC3339DateTime | None]("before", before),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[OrderByHightouchIdrApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ListIdrRunsOutput],
            error_mapper=list_idr_runs_error_mapper,
            request_options=request_options,
        )

    async def queue_for_reprocessing(
        self,
        graph_id: str,
        *,
        body: IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IdrQueueForReprocessingOutput, QueueForReprocessingErrorBody]:
        """Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist. If
        ``block`` is true (the default), identifier values will be added to the blocklist and ignored in future runs.
        Clusters containing these identifier values will be queued for reprocessing.

        Args:
            graph_id: Required. ID of the graph containing the identifiers.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idr/{graphId}/queue-for-reprocessing"),
            path_params=[param[str]("graphId", graph_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IdrQueueForReprocessingOutput],
            error_mapper=queue_for_reprocessing_error_mapper,
            request_options=request_options,
        )

    async def reprocess_status(
        self, graph_id: str, request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IdrReprocessStatusOutput, ReprocessStatusErrorBody]:
        """Get the status of a reprocessing request

        Args:
            graph_id: Required. ID of the graph for the reprocessing request.
            request_id: Required. ID of the reprocessing request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/idr/{graphId}/reprocess-status/{requestId}"),
            path_params=[param[str]("graphId", graph_id), param[str]("requestId", request_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IdrReprocessStatusOutput],
            error_mapper=reprocess_status_error_mapper,
            request_options=request_options,
        )

    async def trigger_idr_run(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TriggerRunIdrOutput, TriggerIdrRunErrorBody]:
        """Trigger a new IDR run for a graph

        Args:
            graph_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idr/{graphId}/trigger"),
            path_params=[param[str]("graphId", graph_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunIdrInput | TriggerRunIdrInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TriggerRunIdrOutput],
            error_mapper=trigger_idr_run_error_mapper,
            request_options=request_options,
        )
