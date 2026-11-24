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
    async_text_decoder,
    json_body,
    json_decoder,
    param,
    text_decoder,
    unwrap,
)
from ..errors.download_recalls_batch_results_error import (
    DownloadRecallsBatchResultsErrorBody,
    download_recalls_batch_results_error_mapper,
)
from ..errors.get_recalls_batch_results_error import (
    GetRecallsBatchResultsErrorBody,
    get_recalls_batch_results_error_mapper,
)
from ..errors.get_recalls_batch_status_error import (
    GetRecallsBatchStatusErrorBody,
    get_recalls_batch_status_error_mapper,
)
from ..errors.get_recalls_by_ymm_error import GetRecallsByYmmErrorBody, get_recalls_by_ymm_error_mapper
from ..errors.get_vehicle_recalls_error import GetVehicleRecallsErrorBody, get_vehicle_recalls_error_mapper
from ..errors.submit_recalls_batch_error import SubmitRecallsBatchErrorBody, submit_recalls_batch_error_mapper
from ..models.v1_recalls_batch_results_response import V1RecallsBatchResultsResponse
from ..models.v1_recalls_batch_status_response import V1RecallsBatchStatusResponse
from ..models.v1_recalls_batch_submit_request import V1RecallsBatchSubmitRequest, V1RecallsBatchSubmitRequestDict
from ..models.v1_recalls_batch_submit_response import V1RecallsBatchSubmitResponse
from ..models.v1_recalls_response import V1RecallsResponse
from ..models.v1_recalls_ymm_response import V1RecallsYmmResponse
from ..server.server import Server


class Recalls:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecallsWithRawResponse(client, server, auth)

    def download_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Download the results of a completed batch as CSV.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV results file.

        Raises:
            ApiError: Missing batchId parameter. Missing API key, unknown/disabled API key, or inactive account. Batch
                not found or not accessible with these credentials. Batch processing is not yet complete. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.download_recalls_batch_results(
                batch_id, x_cars_xe_batch_token=x_cars_xe_batch_token, request_options=request_options
            ),
        )

    def get_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RecallsBatchResultsResponse:
        """Fetch the per-VIN recall results of a completed batch as JSON.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch results retrieved.

        Raises:
            ApiError: Missing batchId parameter. Missing API key, unknown/disabled API key, or inactive account. Batch
                not found or not accessible with this API key. Batch processing is not yet complete. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_recalls_batch_results(
                batch_id, x_cars_xe_batch_token=x_cars_xe_batch_token, request_options=request_options
            ),
        )

    def get_recalls_batch_status(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RecallsBatchStatusResponse:
        """Check the processing status of a previously submitted batch.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch status retrieved.

        Raises:
            ApiError: Missing batchId parameter. Missing API key, unknown/disabled API key, or inactive account. Batch
                not found or not accessible with this API key. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_recalls_batch_status(
                batch_id, x_cars_xe_batch_token=x_cars_xe_batch_token, request_options=request_options
            ),
        )

    def get_recalls_by_ymm(
        self, year: str, make: str, model: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1RecallsYmmResponse:
        """Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.

        Args:
            year: The 4-digit model year (e.g. ``2019``).
            make: The vehicle manufacturer name (e.g. ``Toyota``). Case-insensitive.
            model: The vehicle model name (e.g. ``Camry``). Case-insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recall data retrieved.

        Raises:
            ApiError: Missing or invalid year, make, or model. Missing API key, unknown/disabled API key, or inactive
                account. Feature not available on this plan. API usage limit exceeded for the current billing period.
                Internal server error. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.get_recalls_by_ymm(year, make, model, request_options=request_options))

    def get_vehicle_recalls(
        self, vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1RecallsResponse:
        """Retrieve open safety recalls for a vehicle by VIN.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recall data retrieved.

        Raises:
            ApiError: Missing VIN. Missing API key, unknown/disabled API key, or inactive account. No recall data found
                for this VIN. API usage limit exceeded for the current billing period. Internal server error. ``error``
                is ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.get_vehicle_recalls(vin, request_options=request_options))

    def submit_recalls_batch(
        self,
        body: V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RecallsBatchSubmitResponse:
        """Submit up to 10,000 VINs for asynchronous recall processing. Provide VINs as a JSON array (``vins``), inline
        CSV text (``csv``), or an HTTPS link to a CSV file (``csvUrl``). Optionally provide a ``webhookUrl`` that CarsXE
        will POST to when the batch finishes. Poll the status endpoint or wait for the webhook, then fetch results.

        x402 submissions must use the JSON ``vins`` array. The ``csv`` and ``csvUrl`` forms require CarsXE API-key
        authentication.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch accepted and queued for processing.

        Raises:
            ApiError: Invalid request body — missing VINs, invalid VINs, more than 10,000 VINs, invalid ``webhookUrl``,
                or a ``csvUrl`` that is invalid / not allowed / too large. Missing API key, unknown/disabled API key, or
                inactive account. Method not allowed (only POST is accepted). API usage limit exceeded for the current
                billing period. Internal server error. Could not download the CSV from ``csvUrl``. ``error`` is ``Error
                | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.submit_recalls_batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> RecallsWithRawResponse:
        return self._with_raw_response


class AsyncRecalls:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecallsWithRawResponse(client, server, auth)

    async def download_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Download the results of a completed batch as CSV.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV results file.

        Raises:
            ApiError: Missing batchId parameter. Missing API key, unknown/disabled API key, or inactive account. Batch
                not found or not accessible with these credentials. Batch processing is not yet complete. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.download_recalls_batch_results(
                batch_id, x_cars_xe_batch_token=x_cars_xe_batch_token, request_options=request_options
            ),
        )

    async def get_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RecallsBatchResultsResponse:
        """Fetch the per-VIN recall results of a completed batch as JSON.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch results retrieved.

        Raises:
            ApiError: Missing batchId parameter. Missing API key, unknown/disabled API key, or inactive account. Batch
                not found or not accessible with this API key. Batch processing is not yet complete. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recalls_batch_results(
                batch_id, x_cars_xe_batch_token=x_cars_xe_batch_token, request_options=request_options
            ),
        )

    async def get_recalls_batch_status(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RecallsBatchStatusResponse:
        """Check the processing status of a previously submitted batch.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch status retrieved.

        Raises:
            ApiError: Missing batchId parameter. Missing API key, unknown/disabled API key, or inactive account. Batch
                not found or not accessible with this API key. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recalls_batch_status(
                batch_id, x_cars_xe_batch_token=x_cars_xe_batch_token, request_options=request_options
            ),
        )

    async def get_recalls_by_ymm(
        self, year: str, make: str, model: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1RecallsYmmResponse:
        """Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.

        Args:
            year: The 4-digit model year (e.g. ``2019``).
            make: The vehicle manufacturer name (e.g. ``Toyota``). Case-insensitive.
            model: The vehicle model name (e.g. ``Camry``). Case-insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recall data retrieved.

        Raises:
            ApiError: Missing or invalid year, make, or model. Missing API key, unknown/disabled API key, or inactive
                account. Feature not available on this plan. API usage limit exceeded for the current billing period.
                Internal server error. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recalls_by_ymm(year, make, model, request_options=request_options)
        )

    async def get_vehicle_recalls(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1RecallsResponse:
        """Retrieve open safety recalls for a vehicle by VIN.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recall data retrieved.

        Raises:
            ApiError: Missing VIN. Missing API key, unknown/disabled API key, or inactive account. No recall data found
                for this VIN. API usage limit exceeded for the current billing period. Internal server error. ``error``
                is ``Error | UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.get_vehicle_recalls(vin, request_options=request_options))

    async def submit_recalls_batch(
        self,
        body: V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RecallsBatchSubmitResponse:
        """Submit up to 10,000 VINs for asynchronous recall processing. Provide VINs as a JSON array (``vins``), inline
        CSV text (``csv``), or an HTTPS link to a CSV file (``csvUrl``). Optionally provide a ``webhookUrl`` that CarsXE
        will POST to when the batch finishes. Poll the status endpoint or wait for the webhook, then fetch results.

        x402 submissions must use the JSON ``vins`` array. The ``csv`` and ``csvUrl`` forms require CarsXE API-key
        authentication.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch accepted and queued for processing.

        Raises:
            ApiError: Invalid request body — missing VINs, invalid VINs, more than 10,000 VINs, invalid ``webhookUrl``,
                or a ``csvUrl`` that is invalid / not allowed / too large. Missing API key, unknown/disabled API key, or
                inactive account. Method not allowed (only POST is accepted). API usage limit exceeded for the current
                billing period. Internal server error. Could not download the CSV from ``csvUrl``. ``error`` is ``Error
                | UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.submit_recalls_batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRecallsWithRawResponse:
        return self._with_raw_response


class RecallsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def download_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DownloadRecallsBatchResultsErrorBody]:
        """Download the results of a completed batch as CSV.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-batch/download"),
            query_params=[param[str]("batchId", batch_id)],
            headers=[param[str | None]("X-CarsXE-Batch-Token", x_cars_xe_batch_token)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.recalls_batch_token),
            decoder=text_decoder[str],
            error_mapper=download_recalls_batch_results_error_mapper,
            request_options=request_options,
        )

    def get_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RecallsBatchResultsResponse, GetRecallsBatchResultsErrorBody]:
        """Fetch the per-VIN recall results of a completed batch as JSON.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-batch/results"),
            query_params=[param[str]("batchId", batch_id)],
            headers=[param[str | None]("X-CarsXE-Batch-Token", x_cars_xe_batch_token)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.recalls_batch_token),
            decoder=json_decoder[V1RecallsBatchResultsResponse],
            error_mapper=get_recalls_batch_results_error_mapper,
            request_options=request_options,
        )

    def get_recalls_batch_status(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RecallsBatchStatusResponse, GetRecallsBatchStatusErrorBody]:
        """Check the processing status of a previously submitted batch.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-batch/status"),
            query_params=[param[str]("batchId", batch_id)],
            headers=[param[str | None]("X-CarsXE-Batch-Token", x_cars_xe_batch_token)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.recalls_batch_token),
            decoder=json_decoder[V1RecallsBatchStatusResponse],
            error_mapper=get_recalls_batch_status_error_mapper,
            request_options=request_options,
        )

    def get_recalls_by_ymm(
        self, year: str, make: str, model: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RecallsYmmResponse, GetRecallsByYmmErrorBody]:
        """Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.

        Args:
            year: The 4-digit model year (e.g. ``2019``).
            make: The vehicle manufacturer name (e.g. ``Toyota``). Case-insensitive.
            model: The vehicle model name (e.g. ``Camry``). Case-insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-ymm"),
            query_params=[param[str]("year", year), param[str]("make", make), param[str]("model", model)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1RecallsYmmResponse],
            error_mapper=get_recalls_by_ymm_error_mapper,
            request_options=request_options,
        )

    def get_vehicle_recalls(
        self, vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RecallsResponse, GetVehicleRecallsErrorBody]:
        """Retrieve open safety recalls for a vehicle by VIN.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1RecallsResponse],
            error_mapper=get_vehicle_recalls_error_mapper,
            request_options=request_options,
        )

    def submit_recalls_batch(
        self,
        body: V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RecallsBatchSubmitResponse, SubmitRecallsBatchErrorBody]:
        """Submit up to 10,000 VINs for asynchronous recall processing. Provide VINs as a JSON array (``vins``), inline
        CSV text (``csv``), or an HTTPS link to a CSV file (``csvUrl``). Optionally provide a ``webhookUrl`` that CarsXE
        will POST to when the batch finishes. Poll the status endpoint or wait for the webhook, then fetch results.

        x402 submissions must use the JSON ``vins`` array. The ``csv`` and ``csvUrl`` forms require CarsXE API-key
        authentication.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/recalls-batch/submit"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1RecallsBatchSubmitResponse],
            error_mapper=submit_recalls_batch_error_mapper,
            request_options=request_options,
        )


class AsyncRecallsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def download_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DownloadRecallsBatchResultsErrorBody]:
        """Download the results of a completed batch as CSV.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-batch/download"),
            query_params=[param[str]("batchId", batch_id)],
            headers=[param[str | None]("X-CarsXE-Batch-Token", x_cars_xe_batch_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.recalls_batch_token),
            decoder=async_text_decoder[str],
            error_mapper=download_recalls_batch_results_error_mapper,
            request_options=request_options,
        )

    async def get_recalls_batch_results(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RecallsBatchResultsResponse, GetRecallsBatchResultsErrorBody]:
        """Fetch the per-VIN recall results of a completed batch as JSON.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-batch/results"),
            query_params=[param[str]("batchId", batch_id)],
            headers=[param[str | None]("X-CarsXE-Batch-Token", x_cars_xe_batch_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.recalls_batch_token),
            decoder=async_json_decoder[V1RecallsBatchResultsResponse],
            error_mapper=get_recalls_batch_results_error_mapper,
            request_options=request_options,
        )

    async def get_recalls_batch_status(
        self,
        batch_id: str,
        *,
        x_cars_xe_batch_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RecallsBatchStatusResponse, GetRecallsBatchStatusErrorBody]:
        """Check the processing status of a previously submitted batch.

        Args:
            batch_id: The batch ID returned from the submit endpoint.
            x_cars_xe_batch_token: Batch-scoped token returned by an x402 submit call. Use this instead of the key query
                parameter for status, results, and download requests.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-batch/status"),
            query_params=[param[str]("batchId", batch_id)],
            headers=[param[str | None]("X-CarsXE-Batch-Token", x_cars_xe_batch_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.recalls_batch_token),
            decoder=async_json_decoder[V1RecallsBatchStatusResponse],
            error_mapper=get_recalls_batch_status_error_mapper,
            request_options=request_options,
        )

    async def get_recalls_by_ymm(
        self, year: str, make: str, model: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RecallsYmmResponse, GetRecallsByYmmErrorBody]:
        """Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.

        Args:
            year: The 4-digit model year (e.g. ``2019``).
            make: The vehicle manufacturer name (e.g. ``Toyota``). Case-insensitive.
            model: The vehicle model name (e.g. ``Camry``). Case-insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls-ymm"),
            query_params=[param[str]("year", year), param[str]("make", make), param[str]("model", model)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1RecallsYmmResponse],
            error_mapper=get_recalls_by_ymm_error_mapper,
            request_options=request_options,
        )

    async def get_vehicle_recalls(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RecallsResponse, GetVehicleRecallsErrorBody]:
        """Retrieve open safety recalls for a vehicle by VIN.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recalls"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1RecallsResponse],
            error_mapper=get_vehicle_recalls_error_mapper,
            request_options=request_options,
        )

    async def submit_recalls_batch(
        self,
        body: V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RecallsBatchSubmitResponse, SubmitRecallsBatchErrorBody]:
        """Submit up to 10,000 VINs for asynchronous recall processing. Provide VINs as a JSON array (``vins``), inline
        CSV text (``csv``), or an HTTPS link to a CSV file (``csvUrl``). Optionally provide a ``webhookUrl`` that CarsXE
        will POST to when the batch finishes. Poll the status endpoint or wait for the webhook, then fetch results.

        x402 submissions must use the JSON ``vins`` array. The ``csv`` and ``csvUrl`` forms require CarsXE API-key
        authentication.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/recalls-batch/submit"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1RecallsBatchSubmitResponse],
            error_mapper=submit_recalls_batch_error_mapper,
            request_options=request_options,
        )
