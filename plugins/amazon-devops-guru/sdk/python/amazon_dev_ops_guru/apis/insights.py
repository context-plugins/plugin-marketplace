from __future__ import annotations

from typing import Any
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
from ..errors.delete_insight_error import DeleteInsightErrorBody, delete_insight_error_mapper
from ..errors.describe_insight_error import DescribeInsightErrorBody, describe_insight_error_mapper
from ..errors.list_insights_error import ListInsightsErrorBody, list_insights_error_mapper
from ..errors.search_insights_error import SearchInsightsErrorBody, search_insights_error_mapper
from ..models.describe_insight_response import DescribeInsightResponse
from ..models.insights_request import InsightsRequest, InsightsRequestDict
from ..models.insights_search_request import InsightsSearchRequest, InsightsSearchRequestDict
from ..models.list_insights_response import ListInsightsResponse
from ..models.search_insights_response import SearchInsightsResponse
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server, auth)

    def delete_insight(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the insight along with the associated anomalies, events and recommendations.

        Args:
            id_: The ID of the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.delete_insight(id_, request_options=request_options))

    def describe_insight(
        self, id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeInsightResponse:
        """Returns details about an insight that you specify using its ID.

        Args:
            id_: The ID of the insight.
            account_id: The ID of the member account in the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_insight(id_, account_id=account_id, request_options=request_options)
        )

    def list_insights(
        self,
        *,
        body: InsightsRequest | InsightsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListInsightsResponse:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time and status (ONGOING, CLOSED, or ANY).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.list_insights(body=body, request_options=request_options))

    def search_insights(
        self,
        *,
        body: InsightsSearchRequest | InsightsSearchRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchInsightsResponse:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH),
        and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters.
        Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.search_insights(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server, auth)

    async def delete_insight(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the insight along with the associated anomalies, events and recommendations.

        Args:
            id_: The ID of the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_insight(id_, request_options=request_options))

    async def describe_insight(
        self, id_: str, *, account_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeInsightResponse:
        """Returns details about an insight that you specify using its ID.

        Args:
            id_: The ID of the insight.
            account_id: The ID of the member account in the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_insight(id_, account_id=account_id, request_options=request_options)
        )

    async def list_insights(
        self,
        *,
        body: InsightsRequest | InsightsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListInsightsResponse:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time and status (ONGOING, CLOSED, or ANY).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.list_insights(body=body, request_options=request_options))

    async def search_insights(
        self,
        *,
        body: InsightsSearchRequest | InsightsSearchRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchInsightsResponse:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH),
        and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters.
        Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.search_insights(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_insight(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteInsightErrorBody]:
        """Deletes the insight along with the associated anomalies, events and recommendations.

        Args:
            id_: The ID of the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/insights/{Id}"),
            path_params=[param[str]("Id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_insight_error_mapper,
            request_options=request_options,
        )

    def describe_insight(
        self, id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeInsightResponse, DescribeInsightErrorBody]:
        """Returns details about an insight that you specify using its ID.

        Args:
            id_: The ID of the insight.
            account_id: The ID of the member account in the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/{Id}"),
            path_params=[param[str]("Id", id_)],
            query_params=[param[str | None]("AccountId", account_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeInsightResponse],
            error_mapper=describe_insight_error_mapper,
            request_options=request_options,
        )

    def list_insights(
        self,
        *,
        body: InsightsRequest | InsightsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListInsightsResponse, ListInsightsErrorBody]:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time and status (ONGOING, CLOSED, or ANY).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightsRequest | InsightsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListInsightsResponse],
            error_mapper=list_insights_error_mapper,
            request_options=request_options,
        )

    def search_insights(
        self,
        *,
        body: InsightsSearchRequest | InsightsSearchRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchInsightsResponse, SearchInsightsErrorBody]:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH),
        and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters.
        Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightsSearchRequest | InsightsSearchRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[SearchInsightsResponse],
            error_mapper=search_insights_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_insight(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteInsightErrorBody]:
        """Deletes the insight along with the associated anomalies, events and recommendations.

        Args:
            id_: The ID of the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/insights/{Id}"),
            path_params=[param[str]("Id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_insight_error_mapper,
            request_options=request_options,
        )

    async def describe_insight(
        self, id_: str, *, account_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeInsightResponse, DescribeInsightErrorBody]:
        """Returns details about an insight that you specify using its ID.

        Args:
            id_: The ID of the insight.
            account_id: The ID of the member account in the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/{Id}"),
            path_params=[param[str]("Id", id_)],
            query_params=[param[str | None]("AccountId", account_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeInsightResponse],
            error_mapper=describe_insight_error_mapper,
            request_options=request_options,
        )

    async def list_insights(
        self,
        *,
        body: InsightsRequest | InsightsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListInsightsResponse, ListInsightsErrorBody]:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time and status (ONGOING, CLOSED, or ANY).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightsRequest | InsightsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListInsightsResponse],
            error_mapper=list_insights_error_mapper,
            request_options=request_options,
        )

    async def search_insights(
        self,
        *,
        body: InsightsSearchRequest | InsightsSearchRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchInsightsResponse, SearchInsightsErrorBody]:
        """Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned
        by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH),
        and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters.
        Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightsSearchRequest | InsightsSearchRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[SearchInsightsResponse],
            error_mapper=search_insights_error_mapper,
            request_options=request_options,
        )
