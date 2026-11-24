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
from ..errors.describe_anomaly_error import DescribeAnomalyErrorBody, describe_anomaly_error_mapper
from ..errors.list_anomalies_for_insight_error import (
    ListAnomaliesForInsightErrorBody,
    list_anomalies_for_insight_error_mapper,
)
from ..models.anomalies_insight_request import AnomaliesInsightRequest, AnomaliesInsightRequestDict
from ..models.describe_anomaly_response import DescribeAnomalyResponse
from ..models.list_anomalies_for_insight_response import ListAnomaliesForInsightResponse
from ..server.server import Server


class Anomalies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnomaliesWithRawResponse(client, server, auth)

    def describe_anomaly(
        self, id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeAnomalyResponse:
        """Returns details about an anomaly that you specify using its ID.

        Args:
            id_: The ID of the anomaly.
            account_id: The ID of the member account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_anomaly(id_, account_id=account_id, request_options=request_options)
        )

    def list_anomalies_for_insight(
        self,
        insight_id: str,
        *,
        body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAnomaliesForInsightResponse:
        """Returns a list of the anomalies that belong to an insight that you specify using its ID.

        Args:
            insight_id: The ID of the insight. The returned anomalies belong to this insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_anomalies_for_insight(insight_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AnomaliesWithRawResponse:
        return self._with_raw_response


class AsyncAnomalies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnomaliesWithRawResponse(client, server, auth)

    async def describe_anomaly(
        self, id_: str, *, account_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeAnomalyResponse:
        """Returns details about an anomaly that you specify using its ID.

        Args:
            id_: The ID of the anomaly.
            account_id: The ID of the member account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_anomaly(id_, account_id=account_id, request_options=request_options)
        )

    async def list_anomalies_for_insight(
        self,
        insight_id: str,
        *,
        body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAnomaliesForInsightResponse:
        """Returns a list of the anomalies that belong to an insight that you specify using its ID.

        Args:
            insight_id: The ID of the insight. The returned anomalies belong to this insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_anomalies_for_insight(
                insight_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAnomaliesWithRawResponse:
        return self._with_raw_response


class AnomaliesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_anomaly(
        self, id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeAnomalyResponse, DescribeAnomalyErrorBody]:
        """Returns details about an anomaly that you specify using its ID.

        Args:
            id_: The ID of the anomaly.
            account_id: The ID of the member account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/{Id}"),
            path_params=[param[str]("Id", id_)],
            query_params=[param[str | None]("AccountId", account_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeAnomalyResponse],
            error_mapper=describe_anomaly_error_mapper,
            request_options=request_options,
        )

    def list_anomalies_for_insight(
        self,
        insight_id: str,
        *,
        body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAnomaliesForInsightResponse, ListAnomaliesForInsightErrorBody]:
        """Returns a list of the anomalies that belong to an insight that you specify using its ID.

        Args:
            insight_id: The ID of the insight. The returned anomalies belong to this insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/anomalies/insight/{InsightId}"),
            path_params=[param[str]("InsightId", insight_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnomaliesInsightRequest | AnomaliesInsightRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListAnomaliesForInsightResponse],
            error_mapper=list_anomalies_for_insight_error_mapper,
            request_options=request_options,
        )


class AsyncAnomaliesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_anomaly(
        self, id_: str, *, account_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeAnomalyResponse, DescribeAnomalyErrorBody]:
        """Returns details about an anomaly that you specify using its ID.

        Args:
            id_: The ID of the anomaly.
            account_id: The ID of the member account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/{Id}"),
            path_params=[param[str]("Id", id_)],
            query_params=[param[str | None]("AccountId", account_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeAnomalyResponse],
            error_mapper=describe_anomaly_error_mapper,
            request_options=request_options,
        )

    async def list_anomalies_for_insight(
        self,
        insight_id: str,
        *,
        body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAnomaliesForInsightResponse, ListAnomaliesForInsightErrorBody]:
        """Returns a list of the anomalies that belong to an insight that you specify using its ID.

        Args:
            insight_id: The ID of the insight. The returned anomalies belong to this insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/anomalies/insight/{InsightId}"),
            path_params=[param[str]("InsightId", insight_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnomaliesInsightRequest | AnomaliesInsightRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListAnomaliesForInsightResponse],
            error_mapper=list_anomalies_for_insight_error_mapper,
            request_options=request_options,
        )
