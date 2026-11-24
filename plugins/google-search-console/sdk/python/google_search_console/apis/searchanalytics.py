from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.webmasters_searchanalytics_query_error import (
    WebmastersSearchanalyticsQueryErrorBody,
    webmasters_searchanalytics_query_error_mapper,
)
from ..models.search_analytics_query_request import SearchAnalyticsQueryRequest, SearchAnalyticsQueryRequestDict
from ..models.search_analytics_query_response import SearchAnalyticsQueryResponse
from ..server.server import Server


class Searchanalytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchanalyticsWithRawResponse(client, server, auth)

    def webmasters_searchanalytics_query(
        self,
        site_url: str,
        body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchAnalyticsQueryResponse:
        """Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row
        keys that you define. You must define a date range of one or more days. When date is one of the group by values,
        any days without data are omitted from the result list. If you need to know which days have data, issue a broad
        date range query grouped by date for any metric, and see which day rows are returned.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.webmasters_searchanalytics_query(site_url, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SearchanalyticsWithRawResponse:
        return self._with_raw_response


class AsyncSearchanalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchanalyticsWithRawResponse(client, server, auth)

    async def webmasters_searchanalytics_query(
        self,
        site_url: str,
        body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchAnalyticsQueryResponse:
        """Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row
        keys that you define. You must define a date range of one or more days. When date is one of the group by values,
        any days without data are omitted from the result list. If you need to know which days have data, issue a broad
        date range query grouped by date for any metric, and see which day rows are returned.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.webmasters_searchanalytics_query(
                site_url, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchanalyticsWithRawResponse:
        return self._with_raw_response


class SearchanalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def webmasters_searchanalytics_query(
        self,
        site_url: str,
        body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchAnalyticsQueryResponse, WebmastersSearchanalyticsQueryErrorBody]:
        """Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row
        keys that you define. You must define a date range of one or more days. When date is one of the group by values,
        any days without data are omitted from the result list. If you need to know which days have data, issue a broad
        date range query grouped by date for any metric, and see which day rows are returned.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/searchAnalytics/query"),
            path_params=[param[str]("siteUrl", site_url)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[SearchAnalyticsQueryResponse],
            error_mapper=webmasters_searchanalytics_query_error_mapper,
            request_options=request_options,
        )


class AsyncSearchanalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def webmasters_searchanalytics_query(
        self,
        site_url: str,
        body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchAnalyticsQueryResponse, WebmastersSearchanalyticsQueryErrorBody]:
        """Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row
        keys that you define. You must define a date range of one or more days. When date is one of the group by values,
        any days without data are omitted from the result list. If you need to know which days have data, issue a broad
        date range query grouped by date for any metric, and see which day rows are returned.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/searchAnalytics/query"),
            path_params=[param[str]("siteUrl", site_url)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SearchAnalyticsQueryResponse],
            error_mapper=webmasters_searchanalytics_query_error_mapper,
            request_options=request_options,
        )
