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
from ..errors.post_app_event_batch_error import PostAppEventBatchErrorBody, post_app_event_batch_error_mapper
from ..models.app_event_batch import AppEventBatch, AppEventBatchDict
from ..models.batch_error_response import BatchErrorResponse
from ..server.server import Server


class AppEvents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppEventsWithRawResponse(client, server, auth)

    def post_app_event_batch(
        self, body: list[AppEventBatch | AppEventBatchDict], *, request_options: RequestOptionsOrDict | None = None
    ) -> list[BatchErrorResponse]:
        """Sends batches of batches of events where each inner batch is for a single app and user. Follows a bulk
        processing paradigm where individual AppEventBatches in the InputBatch are processed independently from each
        other. If an AppEventBatch fails to be processed, this does not affect the processing of the other
        AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is set for its
        batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing". After acceptance
        of a batch, there is delayed processing of it in subsequent components where additional validation happens. This
        means that even though a batch was successfully accepted, not necessarily all events will pass processing. This
        subsequent processing includes but is not limited to:
        - deduplication
        - additional semantic validation
        - user identity resolution
        User Identity is determined once for the whole batch for an app user combination, using the newest information
        which predates the newest event in the batch.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Input. Check the response for details Unauthorized. Please check you authentication
                details. Internal Server Error. Please try again or contact us if the error persists Bad Gateway while
                committing the events, please try again after a short backoff. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.post_app_event_batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AppEventsWithRawResponse:
        return self._with_raw_response


class AsyncAppEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppEventsWithRawResponse(client, server, auth)

    async def post_app_event_batch(
        self, body: list[AppEventBatch | AppEventBatchDict], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[BatchErrorResponse]:
        """Sends batches of batches of events where each inner batch is for a single app and user. Follows a bulk
        processing paradigm where individual AppEventBatches in the InputBatch are processed independently from each
        other. If an AppEventBatch fails to be processed, this does not affect the processing of the other
        AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is set for its
        batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing". After acceptance
        of a batch, there is delayed processing of it in subsequent components where additional validation happens. This
        means that even though a batch was successfully accepted, not necessarily all events will pass processing. This
        subsequent processing includes but is not limited to:
        - deduplication
        - additional semantic validation
        - user identity resolution
        User Identity is determined once for the whole batch for an app user combination, using the newest information
        which predates the newest event in the batch.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Input. Check the response for details Unauthorized. Please check you authentication
                details. Internal Server Error. Please try again or contact us if the error persists Bad Gateway while
                committing the events, please try again after a short backoff. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.post_app_event_batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAppEventsWithRawResponse:
        return self._with_raw_response


class AppEventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_app_event_batch(
        self, body: list[AppEventBatch | AppEventBatchDict], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[BatchErrorResponse], PostAppEventBatchErrorBody]:
        """Sends batches of batches of events where each inner batch is for a single app and user. Follows a bulk
        processing paradigm where individual AppEventBatches in the InputBatch are processed independently from each
        other. If an AppEventBatch fails to be processed, this does not affect the processing of the other
        AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is set for its
        batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing". After acceptance
        of a batch, there is delayed processing of it in subsequent components where additional validation happens. This
        means that even though a batch was successfully accepted, not necessarily all events will pass processing. This
        subsequent processing includes but is not limited to:
        - deduplication
        - additional semantic validation
        - user identity resolution
        User Identity is determined once for the whole batch for an app user combination, using the newest information
        which predates the newest event in the batch.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/appevents/v1"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[AppEventBatch | AppEventBatchDict]](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[BatchErrorResponse]],
            error_mapper=post_app_event_batch_error_mapper,
            request_options=request_options,
        )


class AsyncAppEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_app_event_batch(
        self, body: list[AppEventBatch | AppEventBatchDict], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[BatchErrorResponse], PostAppEventBatchErrorBody]:
        """Sends batches of batches of events where each inner batch is for a single app and user. Follows a bulk
        processing paradigm where individual AppEventBatches in the InputBatch are processed independently from each
        other. If an AppEventBatch fails to be processed, this does not affect the processing of the other
        AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is set for its
        batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing". After acceptance
        of a batch, there is delayed processing of it in subsequent components where additional validation happens. This
        means that even though a batch was successfully accepted, not necessarily all events will pass processing. This
        subsequent processing includes but is not limited to:
        - deduplication
        - additional semantic validation
        - user identity resolution
        User Identity is determined once for the whole batch for an app user combination, using the newest information
        which predates the newest event in the batch.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/appevents/v1"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[AppEventBatch | AppEventBatchDict]](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[BatchErrorResponse]],
            error_mapper=post_app_event_batch_error_mapper,
            request_options=request_options,
        )
