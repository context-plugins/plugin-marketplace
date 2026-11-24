from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncEventStream,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    EventStream,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    async_json_event_decoder,
    empty_response,
    json_body,
    json_decoder,
    json_event_decoder,
    param,
    unwrap,
)
from ..errors.cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error import (
    CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody,
    cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error_mapper,
)
from ..errors.enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error import (
    EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody,
    enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error_mapper,
)
from ..errors.extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error import (
    ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody,
    extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error_mapper,
)
from ..errors.findall_entity_search_v1_beta_findall_entity_search_post_error import (
    FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody,
    findall_entity_search_v1_beta_findall_entity_search_post_error_mapper,
)
from ..errors.findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error import (
    FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody,
    findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error_mapper,
)
from ..errors.findall_runs_v1_v1_beta_findall_runs_post_error import (
    FindallRunsV1V1BetaFindallRunsPostErrorBody,
    findall_runs_v1_v1_beta_findall_runs_post_error_mapper,
)
from ..errors.get_findall_events_v1_beta_findall_runs_findall_id_events_get_error import (
    GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody,
    get_findall_events_v1_beta_findall_runs_findall_id_events_get_error_mapper,
)
from ..errors.get_findall_result_v1_beta_findall_runs_findall_id_result_get_error import (
    GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody,
    get_findall_result_v1_beta_findall_runs_findall_id_result_get_error_mapper,
)
from ..errors.get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error import (
    GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody,
    get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error_mapper,
)
from ..errors.ingest_findall_run_v1_beta_findall_ingest_post_error import (
    IngestFindallRunV1BetaFindallIngestPostErrorBody,
    ingest_findall_run_v1_beta_findall_ingest_post_error_mapper,
)
from ..models.find_all_enrich_input import FindAllEnrichInput, FindAllEnrichInputDict
from ..models.find_all_entity_search_request import FindAllEntitySearchRequest, FindAllEntitySearchRequestDict
from ..models.find_all_entity_search_response import FindAllEntitySearchResponse
from ..models.find_all_extend_input import FindAllExtendInput, FindAllExtendInputDict
from ..models.find_all_run import FindAllRun
from ..models.find_all_run_input import FindAllRunInput, FindAllRunInputDict
from ..models.find_all_run_result import FindAllRunResult
from ..models.find_all_schema import FindAllSchema
from ..models.ingest_input import IngestInput, IngestInputDict
from ..models.unions.response200_get_findall_events_v1_beta_findall_runs_findall_id_events_get import (
    Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet,
)
from ..server.server import Server


class FindAll:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FindAllWithRawResponse(client, server, auth)

    def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Cancel a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            FindAll run cancelled successfully.

        Raises:
            ApiError: FindAll run not found Cannot cancel a terminated FindAll run Validation Error ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
        self,
        findall_id: str,
        body: FindAllEnrichInput | FindAllEnrichInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Add an enrichment to a FindAll run.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: FindAll run not found Validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
                findall_id, body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
        self,
        findall_id: str,
        body: FindAllExtendInput | FindAllExtendInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Extend a FindAll run by adding additional matches to the current match limit.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: FindAll run not found Additional match limit must be greater than 0 ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
                findall_id, body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def findall_entity_search_v1beta_findall_entity_search_post(
        self,
        body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FindAllEntitySearchResponse:
        """Return ranked entities matching a natural language objective.

        This endpoint performs a best-effort search optimized for low latency. To keep responses fast, it returns a
        fixed set of attributes and supports queries of limited complexity.

        For comprehensive match evaluation and enrichment, use the FindAll API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.findall_entity_search_v1beta_findall_entity_search_post(
                body, request_options=request_options
            ),
        )

    def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FindAllRun:
        """Retrieve a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def findall_runs_v1_v1beta_findall_runs_post(
        self,
        body: FindAllRunInput | FindAllRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FindAllRun:
        """Starts a FindAll run.

        This endpoint immediately returns a FindAll run object with status set to 'queued'. You can get the run result
        snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint. You can track the progress of the run
        by:
        - Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
        - Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
        endpoint,
        - Or specifying a webhook with relevant event types during run creation to receive
        notifications.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Payment required: insufficient credit in account Unprocessable content: request validation error
                Too many requests: quota temporarily exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.findall_runs_v1_v1beta_findall_runs_post(
                body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def get_findall_events_v1beta_findall_runs_findall_id_events_get(
        self,
        findall_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]:
        """Stream events from a FindAll run.

        Args: request: The Shapi request findall_id: The FindAll run ID last_event_id: Optional event ID to resume from.
        timeout: Optional timeout in seconds. If None, keep connection alive as long as the run is going. If set, stop
        after specified duration.

        Args:
            findall_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: FindAll run not found Validation Error ``error`` is ``ErrorResponse | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_findall_events_v1beta_findall_runs_findall_id_events_get(
                findall_id,
                last_event_id=last_event_id,
                timeout=timeout,
                parallel_beta=parallel_beta,
                request_options=request_options,
            ),
        )

    def get_findall_result_v1beta_findall_runs_findall_id_result_get(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FindAllRunResult:
        """Retrieve the FindAll run result at the time of the request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_findall_result_v1beta_findall_runs_findall_id_result_get(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FindAllSchema:
        """Send a ``GET`` request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def ingest_findall_run_v1beta_findall_ingest_post(
        self,
        body: IngestInput | IngestInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Transforms a natural language search objective into a structured FindAll spec.

        The generated specification serves as a suggested starting point and can be further customized by the user.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.ingest_findall_run_v1beta_findall_ingest_post(
                body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FindAllWithRawResponse:
        return self._with_raw_response


class AsyncFindAll:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFindAllWithRawResponse(client, server, auth)

    async def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Cancel a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            FindAll run cancelled successfully.

        Raises:
            ApiError: FindAll run not found Cannot cancel a terminated FindAll run Validation Error ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
        self,
        findall_id: str,
        body: FindAllEnrichInput | FindAllEnrichInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Add an enrichment to a FindAll run.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: FindAll run not found Validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
                findall_id, body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
        self,
        findall_id: str,
        body: FindAllExtendInput | FindAllExtendInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Extend a FindAll run by adding additional matches to the current match limit.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: FindAll run not found Additional match limit must be greater than 0 ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
                findall_id, body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def findall_entity_search_v1beta_findall_entity_search_post(
        self,
        body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllEntitySearchResponse:
        """Return ranked entities matching a natural language objective.

        This endpoint performs a best-effort search optimized for low latency. To keep responses fast, it returns a
        fixed set of attributes and supports queries of limited complexity.

        For comprehensive match evaluation and enrichment, use the FindAll API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.findall_entity_search_v1beta_findall_entity_search_post(
                body, request_options=request_options
            ),
        )

    async def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllRun:
        """Retrieve a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def findall_runs_v1_v1beta_findall_runs_post(
        self,
        body: FindAllRunInput | FindAllRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllRun:
        """Starts a FindAll run.

        This endpoint immediately returns a FindAll run object with status set to 'queued'. You can get the run result
        snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint. You can track the progress of the run
        by:
        - Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
        - Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
        endpoint,
        - Or specifying a webhook with relevant event types during run creation to receive
        notifications.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Payment required: insufficient credit in account Unprocessable content: request validation error
                Too many requests: quota temporarily exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.findall_runs_v1_v1beta_findall_runs_post(
                body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def get_findall_events_v1beta_findall_runs_findall_id_events_get(
        self,
        findall_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncEventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]:
        """Stream events from a FindAll run.

        Args: request: The Shapi request findall_id: The FindAll run ID last_event_id: Optional event ID to resume from.
        timeout: Optional timeout in seconds. If None, keep connection alive as long as the run is going. If set, stop
        after specified duration.

        Args:
            findall_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: FindAll run not found Validation Error ``error`` is ``ErrorResponse | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_findall_events_v1beta_findall_runs_findall_id_events_get(
                findall_id,
                last_event_id=last_event_id,
                timeout=timeout,
                parallel_beta=parallel_beta,
                request_options=request_options,
            ),
        )

    async def get_findall_result_v1beta_findall_runs_findall_id_result_get(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllRunResult:
        """Retrieve the FindAll run result at the time of the request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_findall_result_v1beta_findall_runs_findall_id_result_get(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Send a ``GET`` request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
                findall_id, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def ingest_findall_run_v1beta_findall_ingest_post(
        self,
        body: IngestInput | IngestInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FindAllSchema:
        """Transforms a natural language search objective into a structured FindAll spec.

        The generated specification serves as a suggested starting point and can be further customized by the user.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.ingest_findall_run_v1beta_findall_ingest_post(
                body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFindAllWithRawResponse:
        return self._with_raw_response


class FindAllWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody]:
        """Cancel a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/cancel"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
        self,
        findall_id: str,
        body: FindAllEnrichInput | FindAllEnrichInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody]:
        """Add an enrichment to a FindAll run.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/enrich"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllEnrichInput | FindAllEnrichInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllSchema],
            error_mapper=enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error_mapper,
            request_options=request_options,
        )

    def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
        self,
        findall_id: str,
        body: FindAllExtendInput | FindAllExtendInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody]:
        """Extend a FindAll run by adding additional matches to the current match limit.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/extend"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllExtendInput | FindAllExtendInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllSchema],
            error_mapper=extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error_mapper,
            request_options=request_options,
        )

    def findall_entity_search_v1beta_findall_entity_search_post(
        self,
        body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllEntitySearchResponse, FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody]:
        """Return ranked entities matching a natural language objective.

        This endpoint performs a best-effort search optimized for low latency. To keep responses fast, it returns a
        fixed set of attributes and supports queries of limited complexity.

        For comprehensive match evaluation and enrichment, use the FindAll API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/entity-search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllEntitySearchRequest | FindAllEntitySearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllEntitySearchResponse],
            error_mapper=findall_entity_search_v1_beta_findall_entity_search_post_error_mapper,
            request_options=request_options,
        )

    def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FindAllRun, FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody]:
        """Retrieve a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllRun],
            error_mapper=findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error_mapper,
            request_options=request_options,
        )

    def findall_runs_v1_v1beta_findall_runs_post(
        self,
        body: FindAllRunInput | FindAllRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllRun, FindallRunsV1V1BetaFindallRunsPostErrorBody]:
        """Starts a FindAll run.

        This endpoint immediately returns a FindAll run object with status set to 'queued'. You can get the run result
        snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint. You can track the progress of the run
        by:
        - Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
        - Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
        endpoint,
        - Or specifying a webhook with relevant event types during run creation to receive
        notifications.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs"),
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllRunInput | FindAllRunInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllRun],
            error_mapper=findall_runs_v1_v1_beta_findall_runs_post_error_mapper,
            request_options=request_options,
        )

    def get_findall_events_v1beta_findall_runs_findall_id_events_get(
        self,
        findall_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet],
        GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody,
    ]:
        """Stream events from a FindAll run.

        Args: request: The Shapi request findall_id: The FindAll run ID last_event_id: Optional event ID to resume from.
        timeout: Optional timeout in seconds. If None, keep connection alive as long as the run is going. If set, stop
        after specified duration.

        Args:
            findall_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/events"),
            path_params=[param[str]("findall_id", findall_id)],
            query_params=[param[str | None]("last_event_id", last_event_id), param[float | None]("timeout", timeout)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_event_decoder[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](),
            error_mapper=get_findall_events_v1_beta_findall_runs_findall_id_events_get_error_mapper,
            request_options=request_options,
        )

    def get_findall_result_v1beta_findall_runs_findall_id_result_get(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FindAllRunResult, GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody]:
        """Retrieve the FindAll run result at the time of the request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/result"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllRunResult],
            error_mapper=get_findall_result_v1_beta_findall_runs_findall_id_result_get_error_mapper,
            request_options=request_options,
        )

    def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
        self, findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FindAllSchema, GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/schema"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllSchema],
            error_mapper=get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error_mapper,
            request_options=request_options,
        )

    def ingest_findall_run_v1beta_findall_ingest_post(
        self,
        body: IngestInput | IngestInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, IngestFindallRunV1BetaFindallIngestPostErrorBody]:
        """Transforms a natural language search objective into a structured FindAll spec.

        The generated specification serves as a suggested starting point and can be further customized by the user.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/ingest"),
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IngestInput | IngestInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FindAllSchema],
            error_mapper=ingest_findall_run_v1_beta_findall_ingest_post_error_mapper,
            request_options=request_options,
        )


class AsyncFindAllWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody]:
        """Cancel a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/cancel"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    async def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
        self,
        findall_id: str,
        body: FindAllEnrichInput | FindAllEnrichInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody]:
        """Add an enrichment to a FindAll run.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/enrich"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllEnrichInput | FindAllEnrichInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllSchema],
            error_mapper=enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error_mapper,
            request_options=request_options,
        )

    async def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
        self,
        findall_id: str,
        body: FindAllExtendInput | FindAllExtendInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody]:
        """Extend a FindAll run by adding additional matches to the current match limit.

        Args:
            findall_id: Value sent with the request.
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/extend"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllExtendInput | FindAllExtendInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllSchema],
            error_mapper=extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error_mapper,
            request_options=request_options,
        )

    async def findall_entity_search_v1beta_findall_entity_search_post(
        self,
        body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllEntitySearchResponse, FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody]:
        """Return ranked entities matching a natural language objective.

        This endpoint performs a best-effort search optimized for low latency. To keep responses fast, it returns a
        fixed set of attributes and supports queries of limited complexity.

        For comprehensive match evaluation and enrichment, use the FindAll API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/entity-search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllEntitySearchRequest | FindAllEntitySearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllEntitySearchResponse],
            error_mapper=findall_entity_search_v1_beta_findall_entity_search_post_error_mapper,
            request_options=request_options,
        )

    async def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllRun, FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody]:
        """Retrieve a FindAll run.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllRun],
            error_mapper=findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error_mapper,
            request_options=request_options,
        )

    async def findall_runs_v1_v1beta_findall_runs_post(
        self,
        body: FindAllRunInput | FindAllRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllRun, FindallRunsV1V1BetaFindallRunsPostErrorBody]:
        """Starts a FindAll run.

        This endpoint immediately returns a FindAll run object with status set to 'queued'. You can get the run result
        snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint. You can track the progress of the run
        by:
        - Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
        - Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
        endpoint,
        - Or specifying a webhook with relevant event types during run creation to receive
        notifications.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/runs"),
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindAllRunInput | FindAllRunInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllRun],
            error_mapper=findall_runs_v1_v1_beta_findall_runs_post_error_mapper,
            request_options=request_options,
        )

    async def get_findall_events_v1beta_findall_runs_findall_id_events_get(
        self,
        findall_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        AsyncEventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet],
        GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody,
    ]:
        """Stream events from a FindAll run.

        Args: request: The Shapi request findall_id: The FindAll run ID last_event_id: Optional event ID to resume from.
        timeout: Optional timeout in seconds. If None, keep connection alive as long as the run is going. If set, stop
        after specified duration.

        Args:
            findall_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/events"),
            path_params=[param[str]("findall_id", findall_id)],
            query_params=[param[str | None]("last_event_id", last_event_id), param[float | None]("timeout", timeout)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_event_decoder[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](),
            error_mapper=get_findall_events_v1_beta_findall_runs_findall_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def get_findall_result_v1beta_findall_runs_findall_id_result_get(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllRunResult, GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody]:
        """Retrieve the FindAll run result at the time of the request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/result"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllRunResult],
            error_mapper=get_findall_result_v1_beta_findall_runs_findall_id_result_get_error_mapper,
            request_options=request_options,
        )

    async def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
        self,
        findall_id: str,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            findall_id: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/findall/runs/{findall_id}/schema"),
            path_params=[param[str]("findall_id", findall_id)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllSchema],
            error_mapper=get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error_mapper,
            request_options=request_options,
        )

    async def ingest_findall_run_v1beta_findall_ingest_post(
        self,
        body: IngestInput | IngestInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FindAllSchema, IngestFindallRunV1BetaFindallIngestPostErrorBody]:
        """Transforms a natural language search objective into a structured FindAll spec.

        The generated specification serves as a suggested starting point and can be further customized by the user.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/findall/ingest"),
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IngestInput | IngestInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FindAllSchema],
            error_mapper=ingest_findall_run_v1_beta_findall_ingest_post_error_mapper,
            request_options=request_options,
        )
