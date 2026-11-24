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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_card_batch_error import CancelCardBatchErrorBody, cancel_card_batch_error_mapper
from ..errors.get_card_batch_error import GetCardBatchErrorBody, get_card_batch_error_mapper
from ..errors.submit_card_batch_error import SubmitCardBatchErrorBody, submit_card_batch_error_mapper
from ..models.card_batch_accepted import CardBatchAccepted
from ..models.card_batch_job import CardBatchJob
from ..models.card_batch_request import CardBatchRequest, CardBatchRequestDict
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..server.server import Server


class Cards:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CardsWithRawResponse(client, server, auth)

    def cancel_card_batch(self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancellation requested or existing terminal status returned.

        Raises:
            ApiError: Batch not found. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.cancel_card_batch(job_id, request_options=request_options))

    def get_card_batch(self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CardBatchJob:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current progress, including completed per-card results.

        Raises:
            ApiError: Batch not found. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.get_card_batch(job_id, request_options=request_options))

    def submit_card_batch(
        self,
        body: CardBatchRequest | CardBatchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CardBatchAccepted:
        """Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each
        successfully processed card consumes one normal monthly request.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Safely retry a submission without creating a duplicate job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch accepted.

        Raises:
            ApiError: Invalid card batch. Missing or invalid API key. Another card batch is already active for this
                account. Submission rate limit exceeded. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.submit_card_batch(
                body, x_credit_source=x_credit_source, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CardsWithRawResponse:
        return self._with_raw_response


class AsyncCards:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCardsWithRawResponse(client, server, auth)

    async def cancel_card_batch(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancellation requested or existing terminal status returned.

        Raises:
            ApiError: Batch not found. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.cancel_card_batch(job_id, request_options=request_options))

    async def get_card_batch(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CardBatchJob:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current progress, including completed per-card results.

        Raises:
            ApiError: Batch not found. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.get_card_batch(job_id, request_options=request_options))

    async def submit_card_batch(
        self,
        body: CardBatchRequest | CardBatchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CardBatchAccepted:
        """Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each
        successfully processed card consumes one normal monthly request.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Safely retry a submission without creating a duplicate job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch accepted.

        Raises:
            ApiError: Invalid card batch. Missing or invalid API key. Another card batch is already active for this
                account. Submission rate limit exceeded. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.submit_card_batch(
                body, x_credit_source=x_credit_source, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCardsWithRawResponse:
        return self._with_raw_response


class CardsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_card_batch(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelCardBatchErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/cards/batch/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=cancel_card_batch_error_mapper,
            request_options=request_options,
        )

    def get_card_batch(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CardBatchJob, GetCardBatchErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cards/batch/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CardBatchJob],
            error_mapper=get_card_batch_error_mapper,
            request_options=request_options,
        )

    def submit_card_batch(
        self,
        body: CardBatchRequest | CardBatchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CardBatchAccepted, SubmitCardBatchErrorBody]:
        """Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each
        successfully processed card consumes one normal monthly request.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Safely retry a submission without creating a duplicate job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/cards/batch"),
            headers=[
                param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source),
                param[str | None]("Idempotency-Key", idempotency_key),
            ],
            body=json_body[CardBatchRequest | CardBatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CardBatchAccepted],
            error_mapper=submit_card_batch_error_mapper,
            request_options=request_options,
        )


class AsyncCardsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_card_batch(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelCardBatchErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/cards/batch/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=cancel_card_batch_error_mapper,
            request_options=request_options,
        )

    async def get_card_batch(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CardBatchJob, GetCardBatchErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cards/batch/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CardBatchJob],
            error_mapper=get_card_batch_error_mapper,
            request_options=request_options,
        )

    async def submit_card_batch(
        self,
        body: CardBatchRequest | CardBatchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CardBatchAccepted, SubmitCardBatchErrorBody]:
        """Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each
        successfully processed card consumes one normal monthly request.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Safely retry a submission without creating a duplicate job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/cards/batch"),
            headers=[
                param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source),
                param[str | None]("Idempotency-Key", idempotency_key),
            ],
            body=json_body[CardBatchRequest | CardBatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CardBatchAccepted],
            error_mapper=submit_card_batch_error_mapper,
            request_options=request_options,
        )
