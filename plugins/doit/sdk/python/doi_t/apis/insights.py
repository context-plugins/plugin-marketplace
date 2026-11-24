from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_insight_result_error import DeleteInsightResultErrorBody, delete_insight_result_error_mapper
from ..errors.delete_insight_results_error import DeleteInsightResultsErrorBody, delete_insight_results_error_mapper
from ..errors.get_insight_resource_results_error import (
    GetInsightResourceResultsErrorBody,
    get_insight_resource_results_error_mapper,
)
from ..errors.get_insight_result_error import GetInsightResultErrorBody, get_insight_result_error_mapper
from ..errors.get_insight_results_error import GetInsightResultsErrorBody, get_insight_results_error_mapper
from ..errors.post_insight_resource_results_error import (
    PostInsightResourceResultsErrorBody,
    post_insight_resource_results_error_mapper,
)
from ..errors.post_insight_result_error import PostInsightResultErrorBody, post_insight_result_error_mapper
from ..errors.post_insight_results_error import PostInsightResultsErrorBody, post_insight_results_error_mapper
from ..errors.update_insight_status_error import UpdateInsightStatusErrorBody, update_insight_status_error_mapper
from ..models.create_resource_results_body import CreateResourceResultsBody, CreateResourceResultsBodyDict
from ..models.create_results_body import CreateResultsBody, CreateResultsBodyDict
from ..models.enums.category1 import Category1OrStr
from ..models.enums.display_status1 import DisplayStatus1OrStr
from ..models.enums.priority1 import Priority1OrStr
from ..models.enums.source_id import SourceIdOrStr
from ..models.insight_metadata_request import InsightMetadataRequest, InsightMetadataRequestDict
from ..models.insight_response import InsightResponse
from ..models.resource_results_response import ResourceResultsResponse
from ..models.results_body import ResultsBody
from ..models.results_error import ResultsError
from ..models.update_status_request import UpdateStatusRequest, UpdateStatusRequestDict
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server, auth)

    def delete_insight_result(
        self, source_id: SourceIdOrStr, insight_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a single insight and all its associated resource results. Only insights created via the
        public API can be deleted.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_insight_result(source_id, insight_key, request_options=request_options)
        )

    def delete_insight_results(self, insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes all insights matching the specified key from the batch source. This removes the insight and all its
        associated resource results. For single-insight deletion, use ``DELETE /source/{sourceID}/insight/{insightKey}``
        instead.

        Args:
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_insight_results(insight_key, request_options=request_options))

    def get_insight_resource_results(
        self,
        source_id: str,
        insight_key: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 1000,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResourceResultsResponse:
        """Returns a paginated list of individual resource-level results for a specific insight. Each resource result
        represents a single cloud resource (e.g. an EC2 instance, a GCS bucket) affected by the insight, along with its
        risk scores or potential savings.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_insight_resource_results(
                source_id, insight_key, page_token=page_token, max_results=max_results, request_options=request_options
            ),
        )

    def get_insight_result(
        self, source_id: str, insight_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> InsightResponse:
        """Returns the metadata and aggregate summary for a single insight identified by source and key. Does not
        include individual resource-level results — use the resource-results endpoint for those.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_insight_result(source_id, insight_key, request_options=request_options)
        )

    def get_insight_results(
        self,
        *,
        search_term: str | None = None,
        display_status: list[DisplayStatus1OrStr] | None = None,
        category: Category1OrStr | None = None,
        cloud_provider: str | None = None,
        source: list[str] | None = None,
        priority: list[Priority1OrStr] | None = None,
        tag: list[str] | None = None,
        easy_win: bool | None = None,
        cloud_flows: bool | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResultsBody:
        """Returns a paginated list of insights with their aggregate summaries (savings, risk counts). Use query
        parameters to filter by status, category, provider, or priority. Does not include individual resource-level
        results — use the resource-results endpoint for those.

        Args:
            search_term: Free-text search term to filter insights by title or description.
            display_status: Filter by one or more display statuses.
            category: Filter by insight category.
            cloud_provider: Filter by cloud provider (e.g. "aws", "gcp", "azure").
            source: the source that generated insights
            priority: Filter by one or more priority levels.
            tag: Filter by one or more tags (e.g. security certification labels like "ISO").
            easy_win: When true, return only insights flagged as easy wins.
            cloud_flows: When true, return only insights that have associated CloudFlow automations.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 50, max 500).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_insight_results(
                search_term=search_term,
                display_status=display_status,
                category=category,
                cloud_provider=cloud_provider,
                source=source,
                priority=priority,
                tag=tag,
                easy_win=easy_win,
                cloud_flows=cloud_flows,
                page_token=page_token,
                max_results=max_results,
                request_options=request_options,
            ),
        )

    def post_insight_resource_results(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: CreateResourceResultsBody | CreateResourceResultsBodyDict,
        *,
        max_results: int | None = 1000,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResourceResultsResponse:
        """Replaces all resource results for the specified insight. Any existing unresolved resource results not present
        in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement)
        for each resource result. To delete all resource results, send an empty array.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            max_results: Maximum number of results per page in the response (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource results created/replaced successfully

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_insight_resource_results(
                source_id, insight_key, body, max_results=max_results, request_options=request_options
            ),
        )

    def post_insight_result(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: InsightMetadataRequest | InsightMetadataRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightResponse:
        """Creates or updates a single insight for the given source and key. If an insight with the same key already
        exists for the source, it will be updated. Resource results are managed separately via the resource-results
        endpoint.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_insight_result(source_id, insight_key, body, request_options=request_options)
        )

    def post_insight_results(
        self,
        *,
        body: CreateResultsBody | CreateResultsBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ResultsError]:
        """Creates or updates multiple insights in a single batch request. Each insight in the batch includes its
        metadata and resource results inline. For granular control over insight metadata and resource results
        independently, use the single-insight and resource-results endpoints instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.post_insight_results(body=body, request_options=request_options))

    def update_insight_status(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: UpdateStatusRequest | UpdateStatusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight. Only insights
        created via the public API can have their status changed. Deprecated: use the status field on the create/update
        insight endpoint instead.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Status updated successfully

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_insight_status(source_id, insight_key, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server, auth)

    async def delete_insight_result(
        self, source_id: SourceIdOrStr, insight_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a single insight and all its associated resource results. Only insights created via the
        public API can be deleted.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_insight_result(source_id, insight_key, request_options=request_options)
        )

    async def delete_insight_results(
        self, insight_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes all insights matching the specified key from the batch source. This removes the insight and all its
        associated resource results. For single-insight deletion, use ``DELETE /source/{sourceID}/insight/{insightKey}``
        instead.

        Args:
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_insight_results(insight_key, request_options=request_options)
        )

    async def get_insight_resource_results(
        self,
        source_id: str,
        insight_key: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 1000,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResourceResultsResponse:
        """Returns a paginated list of individual resource-level results for a specific insight. Each resource result
        represents a single cloud resource (e.g. an EC2 instance, a GCS bucket) affected by the insight, along with its
        risk scores or potential savings.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_insight_resource_results(
                source_id, insight_key, page_token=page_token, max_results=max_results, request_options=request_options
            ),
        )

    async def get_insight_result(
        self, source_id: str, insight_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InsightResponse:
        """Returns the metadata and aggregate summary for a single insight identified by source and key. Does not
        include individual resource-level results — use the resource-results endpoint for those.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_insight_result(source_id, insight_key, request_options=request_options)
        )

    async def get_insight_results(
        self,
        *,
        search_term: str | None = None,
        display_status: list[DisplayStatus1OrStr] | None = None,
        category: Category1OrStr | None = None,
        cloud_provider: str | None = None,
        source: list[str] | None = None,
        priority: list[Priority1OrStr] | None = None,
        tag: list[str] | None = None,
        easy_win: bool | None = None,
        cloud_flows: bool | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResultsBody:
        """Returns a paginated list of insights with their aggregate summaries (savings, risk counts). Use query
        parameters to filter by status, category, provider, or priority. Does not include individual resource-level
        results — use the resource-results endpoint for those.

        Args:
            search_term: Free-text search term to filter insights by title or description.
            display_status: Filter by one or more display statuses.
            category: Filter by insight category.
            cloud_provider: Filter by cloud provider (e.g. "aws", "gcp", "azure").
            source: the source that generated insights
            priority: Filter by one or more priority levels.
            tag: Filter by one or more tags (e.g. security certification labels like "ISO").
            easy_win: When true, return only insights flagged as easy wins.
            cloud_flows: When true, return only insights that have associated CloudFlow automations.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 50, max 500).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_insight_results(
                search_term=search_term,
                display_status=display_status,
                category=category,
                cloud_provider=cloud_provider,
                source=source,
                priority=priority,
                tag=tag,
                easy_win=easy_win,
                cloud_flows=cloud_flows,
                page_token=page_token,
                max_results=max_results,
                request_options=request_options,
            ),
        )

    async def post_insight_resource_results(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: CreateResourceResultsBody | CreateResourceResultsBodyDict,
        *,
        max_results: int | None = 1000,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResourceResultsResponse:
        """Replaces all resource results for the specified insight. Any existing unresolved resource results not present
        in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement)
        for each resource result. To delete all resource results, send an empty array.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            max_results: Maximum number of results per page in the response (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource results created/replaced successfully

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_insight_resource_results(
                source_id, insight_key, body, max_results=max_results, request_options=request_options
            ),
        )

    async def post_insight_result(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: InsightMetadataRequest | InsightMetadataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightResponse:
        """Creates or updates a single insight for the given source and key. If an insight with the same key already
        exists for the source, it will be updated. Resource results are managed separately via the resource-results
        endpoint.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_insight_result(
                source_id, insight_key, body, request_options=request_options
            ),
        )

    async def post_insight_results(
        self,
        *,
        body: CreateResultsBody | CreateResultsBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ResultsError]:
        """Creates or updates multiple insights in a single batch request. Each insight in the batch includes its
        metadata and resource results inline. For granular control over insight metadata and resource results
        independently, use the single-insight and resource-results endpoints instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful operation

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.post_insight_results(body=body, request_options=request_options))

    async def update_insight_status(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: UpdateStatusRequest | UpdateStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight. Only insights
        created via the public API can have their status changed. Deprecated: use the status field on the create/update
        insight endpoint instead.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Status updated successfully

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_insight_status(
                source_id, insight_key, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_insight_result(
        self, source_id: SourceIdOrStr, insight_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteInsightResultErrorBody]:
        """Permanently deletes a single insight and all its associated resource results. Only insights created via the
        public API can be deleted.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_insight_result_error_mapper,
            request_options=request_options,
        )

    def delete_insight_results(
        self, insight_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteInsightResultsErrorBody]:
        """Deletes all insights matching the specified key from the batch source. This removes the insight and all its
        associated resource results. For single-insight deletion, use ``DELETE /source/{sourceID}/insight/{insightKey}``
        instead.

        Args:
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/insights/v1/results"),
            query_params=[param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_insight_results_error_mapper,
            request_options=request_options,
        )

    def get_insight_resource_results(
        self,
        source_id: str,
        insight_key: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 1000,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourceResultsResponse, GetInsightResourceResultsErrorBody]:
        """Returns a paginated list of individual resource-level results for a specific insight. Each resource result
        represents a single cloud resource (e.g. an EC2 instance, a GCS bucket) affected by the insight, along with its
        risk scores or potential savings.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results"
            ),
            path_params=[param[str]("sourceID", source_id), param[str]("insightKey", insight_key)],
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResourceResultsResponse],
            error_mapper=get_insight_resource_results_error_mapper,
            request_options=request_options,
        )

    def get_insight_result(
        self, source_id: str, insight_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InsightResponse, GetInsightResultErrorBody]:
        """Returns the metadata and aggregate summary for a single insight identified by source and key. Does not
        include individual resource-level results — use the resource-results endpoint for those.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            path_params=[param[str]("sourceID", source_id), param[str]("insightKey", insight_key)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[InsightResponse],
            error_mapper=get_insight_result_error_mapper,
            request_options=request_options,
        )

    def get_insight_results(
        self,
        *,
        search_term: str | None = None,
        display_status: list[DisplayStatus1OrStr] | None = None,
        category: Category1OrStr | None = None,
        cloud_provider: str | None = None,
        source: list[str] | None = None,
        priority: list[Priority1OrStr] | None = None,
        tag: list[str] | None = None,
        easy_win: bool | None = None,
        cloud_flows: bool | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultsBody, GetInsightResultsErrorBody]:
        """Returns a paginated list of insights with their aggregate summaries (savings, risk counts). Use query
        parameters to filter by status, category, provider, or priority. Does not include individual resource-level
        results — use the resource-results endpoint for those.

        Args:
            search_term: Free-text search term to filter insights by title or description.
            display_status: Filter by one or more display statuses.
            category: Filter by insight category.
            cloud_provider: Filter by cloud provider (e.g. "aws", "gcp", "azure").
            source: the source that generated insights
            priority: Filter by one or more priority levels.
            tag: Filter by one or more tags (e.g. security certification labels like "ISO").
            easy_win: When true, return only insights flagged as easy wins.
            cloud_flows: When true, return only insights that have associated CloudFlow automations.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 50, max 500).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v1/results"),
            query_params=[
                param[str | None]("searchTerm", search_term),
                param[list[DisplayStatus1OrStr] | None]("displayStatus", display_status),
                param[Category1OrStr | None]("category", category),
                param[str | None]("cloudProvider", cloud_provider),
                param[list[str] | None]("source", source),
                param[list[Priority1OrStr] | None]("priority", priority),
                param[list[str] | None]("tag", tag),
                param[bool | None]("easyWin", easy_win),
                param[bool | None]("cloudFlows", cloud_flows),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResultsBody],
            error_mapper=get_insight_results_error_mapper,
            request_options=request_options,
        )

    def post_insight_resource_results(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: CreateResourceResultsBody | CreateResourceResultsBodyDict,
        *,
        max_results: int | None = 1000,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourceResultsResponse, PostInsightResourceResultsErrorBody]:
        """Replaces all resource results for the specified insight. Any existing unresolved resource results not present
        in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement)
        for each resource result. To delete all resource results, send an empty array.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            max_results: Maximum number of results per page in the response (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results"
            ),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            query_params=[param[int | None]("maxResults", max_results)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResourceResultsBody | CreateResourceResultsBodyDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResourceResultsResponse],
            error_mapper=post_insight_resource_results_error_mapper,
            request_options=request_options,
        )

    def post_insight_result(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: InsightMetadataRequest | InsightMetadataRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightResponse, PostInsightResultErrorBody]:
        """Creates or updates a single insight for the given source and key. If an insight with the same key already
        exists for the source, it will be updated. Resource results are managed separately via the resource-results
        endpoint.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightMetadataRequest | InsightMetadataRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[InsightResponse],
            error_mapper=post_insight_result_error_mapper,
            request_options=request_options,
        )

    def post_insight_results(
        self,
        *,
        body: CreateResultsBody | CreateResultsBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ResultsError], PostInsightResultsErrorBody]:
        """Creates or updates multiple insights in a single batch request. Each insight in the batch includes its
        metadata and resource results inline. For granular control over insight metadata and resource results
        independently, use the single-insight and resource-results endpoints instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights/v1/results"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResultsBody | CreateResultsBodyDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[ResultsError]],
            error_mapper=post_insight_results_error_mapper,
            request_options=request_options,
        )

    def update_insight_status(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: UpdateStatusRequest | UpdateStatusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateInsightStatusErrorBody]:
        """Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight. Only insights
        created via the public API can have their status changed. Deprecated: use the status field on the create/update
        insight endpoint instead.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}/status"),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStatusRequest | UpdateStatusRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=update_insight_status_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_insight_result(
        self, source_id: SourceIdOrStr, insight_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteInsightResultErrorBody]:
        """Permanently deletes a single insight and all its associated resource results. Only insights created via the
        public API can be deleted.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_insight_result_error_mapper,
            request_options=request_options,
        )

    async def delete_insight_results(
        self, insight_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteInsightResultsErrorBody]:
        """Deletes all insights matching the specified key from the batch source. This removes the insight and all its
        associated resource results. For single-insight deletion, use ``DELETE /source/{sourceID}/insight/{insightKey}``
        instead.

        Args:
            insight_key: The unique key identifying the insight to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/insights/v1/results"),
            query_params=[param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_insight_results_error_mapper,
            request_options=request_options,
        )

    async def get_insight_resource_results(
        self,
        source_id: str,
        insight_key: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 1000,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourceResultsResponse, GetInsightResourceResultsErrorBody]:
        """Returns a paginated list of individual resource-level results for a specific insight. Each resource result
        represents a single cloud resource (e.g. an EC2 instance, a GCS bucket) affected by the insight, along with its
        risk scores or potential savings.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results"
            ),
            path_params=[param[str]("sourceID", source_id), param[str]("insightKey", insight_key)],
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResourceResultsResponse],
            error_mapper=get_insight_resource_results_error_mapper,
            request_options=request_options,
        )

    async def get_insight_result(
        self, source_id: str, insight_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InsightResponse, GetInsightResultErrorBody]:
        """Returns the metadata and aggregate summary for a single insight identified by source and key. Does not
        include individual resource-level results — use the resource-results endpoint for those.

        Args:
            source_id: The identifier of the source that generated the insight.
            insight_key: The unique key identifying the insight.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            path_params=[param[str]("sourceID", source_id), param[str]("insightKey", insight_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[InsightResponse],
            error_mapper=get_insight_result_error_mapper,
            request_options=request_options,
        )

    async def get_insight_results(
        self,
        *,
        search_term: str | None = None,
        display_status: list[DisplayStatus1OrStr] | None = None,
        category: Category1OrStr | None = None,
        cloud_provider: str | None = None,
        source: list[str] | None = None,
        priority: list[Priority1OrStr] | None = None,
        tag: list[str] | None = None,
        easy_win: bool | None = None,
        cloud_flows: bool | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultsBody, GetInsightResultsErrorBody]:
        """Returns a paginated list of insights with their aggregate summaries (savings, risk counts). Use query
        parameters to filter by status, category, provider, or priority. Does not include individual resource-level
        results — use the resource-results endpoint for those.

        Args:
            search_term: Free-text search term to filter insights by title or description.
            display_status: Filter by one or more display statuses.
            category: Filter by insight category.
            cloud_provider: Filter by cloud provider (e.g. "aws", "gcp", "azure").
            source: the source that generated insights
            priority: Filter by one or more priority levels.
            tag: Filter by one or more tags (e.g. security certification labels like "ISO").
            easy_win: When true, return only insights flagged as easy wins.
            cloud_flows: When true, return only insights that have associated CloudFlow automations.
            page_token: Token from a previous response to fetch the next page.
            max_results: Maximum number of results per page (default 50, max 500).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v1/results"),
            query_params=[
                param[str | None]("searchTerm", search_term),
                param[list[DisplayStatus1OrStr] | None]("displayStatus", display_status),
                param[Category1OrStr | None]("category", category),
                param[str | None]("cloudProvider", cloud_provider),
                param[list[str] | None]("source", source),
                param[list[Priority1OrStr] | None]("priority", priority),
                param[list[str] | None]("tag", tag),
                param[bool | None]("easyWin", easy_win),
                param[bool | None]("cloudFlows", cloud_flows),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResultsBody],
            error_mapper=get_insight_results_error_mapper,
            request_options=request_options,
        )

    async def post_insight_resource_results(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: CreateResourceResultsBody | CreateResourceResultsBodyDict,
        *,
        max_results: int | None = 1000,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourceResultsResponse, PostInsightResourceResultsErrorBody]:
        """Replaces all resource results for the specified insight. Any existing unresolved resource results not present
        in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement)
        for each resource result. To delete all resource results, send an empty array.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            max_results: Maximum number of results per page in the response (default 1000, max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results"
            ),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            query_params=[param[int | None]("maxResults", max_results)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResourceResultsBody | CreateResourceResultsBodyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResourceResultsResponse],
            error_mapper=post_insight_resource_results_error_mapper,
            request_options=request_options,
        )

    async def post_insight_result(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: InsightMetadataRequest | InsightMetadataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightResponse, PostInsightResultErrorBody]:
        """Creates or updates a single insight for the given source and key. If an insight with the same key already
        exists for the source, it will be updated. Resource results are managed separately via the resource-results
        endpoint.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightMetadataRequest | InsightMetadataRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[InsightResponse],
            error_mapper=post_insight_result_error_mapper,
            request_options=request_options,
        )

    async def post_insight_results(
        self,
        *,
        body: CreateResultsBody | CreateResultsBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ResultsError], PostInsightResultsErrorBody]:
        """Creates or updates multiple insights in a single batch request. Each insight in the batch includes its
        metadata and resource results inline. For granular control over insight metadata and resource results
        independently, use the single-insight and resource-results endpoints instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights/v1/results"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResultsBody | CreateResultsBodyDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[ResultsError]],
            error_mapper=post_insight_results_error_mapper,
            request_options=request_options,
        )

    async def update_insight_status(
        self,
        source_id: SourceIdOrStr,
        insight_key: str,
        body: UpdateStatusRequest | UpdateStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateInsightStatusErrorBody]:
        """Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight. Only insights
        created via the public API can have their status changed. Deprecated: use the status field on the create/update
        insight endpoint instead.

        Args:
            source_id: Only insights created via the public API can be managed. Currently only "public-api" is
                supported.
            insight_key: The unique key identifying the insight to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}/status"),
            path_params=[param[SourceIdOrStr]("sourceID", source_id), param[str]("insightKey", insight_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStatusRequest | UpdateStatusRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=update_insight_status_error_mapper,
            request_options=request_options,
        )
