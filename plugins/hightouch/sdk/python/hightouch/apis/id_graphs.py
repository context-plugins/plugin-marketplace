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
from ..errors.trigger_run_id_graph_error import TriggerRunIdGraphErrorBody, trigger_run_id_graph_error_mapper
from ..models.trigger_run_idr_input import TriggerRunIdrInput, TriggerRunIdrInputDict
from ..models.trigger_run_idr_output import TriggerRunIdrOutput
from ..server.server import Server


class IdGraphs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IdGraphsWithRawResponse(client, server, auth)

    def trigger_run_id_graph(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TriggerRunIdrOutput:
        """DEPRECATED: use ``/idr/{graphId}/trigger`` instead

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
            self._with_raw_response.trigger_run_id_graph(graph_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> IdGraphsWithRawResponse:
        return self._with_raw_response


class AsyncIdGraphs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIdGraphsWithRawResponse(client, server, auth)

    async def trigger_run_id_graph(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TriggerRunIdrOutput:
        """DEPRECATED: use ``/idr/{graphId}/trigger`` instead

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
            await self._with_raw_response.trigger_run_id_graph(graph_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncIdGraphsWithRawResponse:
        return self._with_raw_response


class IdGraphsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def trigger_run_id_graph(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TriggerRunIdrOutput, TriggerRunIdGraphErrorBody]:
        """DEPRECATED: use ``/idr/{graphId}/trigger`` instead

        Args:
            graph_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/id_graphs/{graphId}/trigger"),
            path_params=[param[str]("graphId", graph_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunIdrInput | TriggerRunIdrInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TriggerRunIdrOutput],
            error_mapper=trigger_run_id_graph_error_mapper,
            request_options=request_options,
        )


class AsyncIdGraphsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def trigger_run_id_graph(
        self,
        graph_id: str,
        *,
        body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TriggerRunIdrOutput, TriggerRunIdGraphErrorBody]:
        """DEPRECATED: use ``/idr/{graphId}/trigger`` instead

        Args:
            graph_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/id_graphs/{graphId}/trigger"),
            path_params=[param[str]("graphId", graph_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunIdrInput | TriggerRunIdrInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TriggerRunIdrOutput],
            error_mapper=trigger_run_id_graph_error_mapper,
            request_options=request_options,
        )
