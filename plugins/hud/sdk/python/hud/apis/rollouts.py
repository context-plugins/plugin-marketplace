from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_job_v2_rollouts_cancel_job_post_error import (
    CancelJobV2RolloutsCancelJobPostErrorBody,
    cancel_job_v2_rollouts_cancel_job_post_error_mapper,
)
from ..errors.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error import (
    CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody,
    cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error_mapper,
)
from ..errors.cancel_v2_rollouts_cancel_post_error import (
    CancelV2RolloutsCancelPostErrorBody,
    cancel_v2_rollouts_cancel_post_error_mapper,
)
from ..errors.run_list_v2_rollouts_run_list_post_error import (
    RunListV2RolloutsRunListPostErrorBody,
    run_list_v2_rollouts_run_list_post_error_mapper,
)
from ..errors.run_v2_rollouts_run_post_error import RunV2RolloutsRunPostErrorBody, run_v2_rollouts_run_post_error_mapper
from ..errors.submit_v2_rollouts_submit_post_error import (
    SubmitV2RolloutsSubmitPostErrorBody,
    submit_v2_rollouts_submit_post_error_mapper,
)
from ..models.cancel_job_request import CancelJobRequest, CancelJobRequestDict
from ..models.cancel_job_response import CancelJobResponse
from ..models.cancel_request import CancelRequest, CancelRequestDict
from ..models.cancel_response import CancelResponse
from ..models.cancel_user_jobs_response import CancelUserJobsResponse
from ..models.rollout_batch_response import RolloutBatchResponse
from ..models.rollout_response import RolloutResponse
from ..models.rollout_run_list_request import RolloutRunListRequest, RolloutRunListRequestDict
from ..models.rollout_run_request import RolloutRunRequest, RolloutRunRequestDict
from ..models.rollout_submit_request import RolloutSubmitRequest, RolloutSubmitRequestDict
from ..server.server import Server


class Rollouts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RolloutsWithRawResponse(client, server)

    def cancel_job_v2_rollouts_cancel_job_post(
        self, body: CancelJobRequest | CancelJobRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CancelJobResponse:
        """Cancel all non-terminal traces in a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_job_v2_rollouts_cancel_job_post(body, request_options=request_options)
        )

    def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> CancelUserJobsResponse:
        """Cancel all of the caller's active jobs, reporting per-job cancellation counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(request_options=request_options)
        )

    def cancel_v2_rollouts_cancel_post(
        self, body: CancelRequest | CancelRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CancelResponse:
        """Cancel a single rollout trace; noop if it already reached a terminal state.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.cancel_v2_rollouts_cancel_post(body, request_options=request_options))

    def run_list_v2_rollouts_run_list_post(
        self,
        body: RolloutRunListRequest | RolloutRunListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RolloutBatchResponse:
        """Launch a batch of hosted rollouts under one job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.run_list_v2_rollouts_run_list_post(body, request_options=request_options))

    def run_v2_rollouts_run_post(
        self, body: RolloutRunRequest | RolloutRunRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> RolloutResponse:
        """Launch a single hosted rollout and return its trace and job identifiers.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.run_v2_rollouts_run_post(body, request_options=request_options))

    def submit_v2_rollouts_submit_post(
        self,
        body: RolloutSubmitRequest | RolloutSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RolloutResponse:
        """v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

        The SDK polls GET /v2/trace/{trace_id} to completion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.submit_v2_rollouts_submit_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> RolloutsWithRawResponse:
        return self._with_raw_response


class AsyncRollouts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRolloutsWithRawResponse(client, server)

    async def cancel_job_v2_rollouts_cancel_job_post(
        self, body: CancelJobRequest | CancelJobRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CancelJobResponse:
        """Cancel all non-terminal traces in a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_job_v2_rollouts_cancel_job_post(body, request_options=request_options)
        )

    async def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CancelUserJobsResponse:
        """Cancel all of the caller's active jobs, reporting per-job cancellation counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(
                request_options=request_options
            ),
        )

    async def cancel_v2_rollouts_cancel_post(
        self, body: CancelRequest | CancelRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CancelResponse:
        """Cancel a single rollout trace; noop if it already reached a terminal state.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_v2_rollouts_cancel_post(body, request_options=request_options)
        )

    async def run_list_v2_rollouts_run_list_post(
        self,
        body: RolloutRunListRequest | RolloutRunListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RolloutBatchResponse:
        """Launch a batch of hosted rollouts under one job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.run_list_v2_rollouts_run_list_post(body, request_options=request_options)
        )

    async def run_v2_rollouts_run_post(
        self,
        body: RolloutRunRequest | RolloutRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RolloutResponse:
        """Launch a single hosted rollout and return its trace and job identifiers.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.run_v2_rollouts_run_post(body, request_options=request_options))

    async def submit_v2_rollouts_submit_post(
        self,
        body: RolloutSubmitRequest | RolloutSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RolloutResponse:
        """v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

        The SDK polls GET /v2/trace/{trace_id} to completion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.submit_v2_rollouts_submit_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncRolloutsWithRawResponse:
        return self._with_raw_response


class RolloutsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def cancel_job_v2_rollouts_cancel_job_post(
        self, body: CancelJobRequest | CancelJobRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelJobResponse, CancelJobV2RolloutsCancelJobPostErrorBody]:
        """Cancel all non-terminal traces in a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/cancel_job"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelJobRequest | CancelJobRequestDict](body),
            decoder=json_decoder[CancelJobResponse],
            error_mapper=cancel_job_v2_rollouts_cancel_job_post_error_mapper,
            request_options=request_options,
        )

    def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelUserJobsResponse, CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody]:
        """Cancel all of the caller's active jobs, reporting per-job cancellation counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/cancel_user_jobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[CancelUserJobsResponse],
            error_mapper=cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error_mapper,
            request_options=request_options,
        )

    def cancel_v2_rollouts_cancel_post(
        self, body: CancelRequest | CancelRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelResponse, CancelV2RolloutsCancelPostErrorBody]:
        """Cancel a single rollout trace; noop if it already reached a terminal state.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/cancel"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelRequest | CancelRequestDict](body),
            decoder=json_decoder[CancelResponse],
            error_mapper=cancel_v2_rollouts_cancel_post_error_mapper,
            request_options=request_options,
        )

    def run_list_v2_rollouts_run_list_post(
        self,
        body: RolloutRunListRequest | RolloutRunListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RolloutBatchResponse, RunListV2RolloutsRunListPostErrorBody]:
        """Launch a batch of hosted rollouts under one job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/run_list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RolloutRunListRequest | RolloutRunListRequestDict](body),
            decoder=json_decoder[RolloutBatchResponse],
            error_mapper=run_list_v2_rollouts_run_list_post_error_mapper,
            request_options=request_options,
        )

    def run_v2_rollouts_run_post(
        self, body: RolloutRunRequest | RolloutRunRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RolloutResponse, RunV2RolloutsRunPostErrorBody]:
        """Launch a single hosted rollout and return its trace and job identifiers.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/run"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RolloutRunRequest | RolloutRunRequestDict](body),
            decoder=json_decoder[RolloutResponse],
            error_mapper=run_v2_rollouts_run_post_error_mapper,
            request_options=request_options,
        )

    def submit_v2_rollouts_submit_post(
        self,
        body: RolloutSubmitRequest | RolloutSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RolloutResponse, SubmitV2RolloutsSubmitPostErrorBody]:
        """v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

        The SDK polls GET /v2/trace/{trace_id} to completion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/submit"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RolloutSubmitRequest | RolloutSubmitRequestDict](body),
            decoder=json_decoder[RolloutResponse],
            error_mapper=submit_v2_rollouts_submit_post_error_mapper,
            request_options=request_options,
        )


class AsyncRolloutsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def cancel_job_v2_rollouts_cancel_job_post(
        self, body: CancelJobRequest | CancelJobRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CancelJobResponse, CancelJobV2RolloutsCancelJobPostErrorBody]:
        """Cancel all non-terminal traces in a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/cancel_job"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelJobRequest | CancelJobRequestDict](body),
            decoder=async_json_decoder[CancelJobResponse],
            error_mapper=cancel_job_v2_rollouts_cancel_job_post_error_mapper,
            request_options=request_options,
        )

    async def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CancelUserJobsResponse, CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody]:
        """Cancel all of the caller's active jobs, reporting per-job cancellation counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/cancel_user_jobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[CancelUserJobsResponse],
            error_mapper=cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error_mapper,
            request_options=request_options,
        )

    async def cancel_v2_rollouts_cancel_post(
        self, body: CancelRequest | CancelRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CancelResponse, CancelV2RolloutsCancelPostErrorBody]:
        """Cancel a single rollout trace; noop if it already reached a terminal state.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/cancel"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelRequest | CancelRequestDict](body),
            decoder=async_json_decoder[CancelResponse],
            error_mapper=cancel_v2_rollouts_cancel_post_error_mapper,
            request_options=request_options,
        )

    async def run_list_v2_rollouts_run_list_post(
        self,
        body: RolloutRunListRequest | RolloutRunListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RolloutBatchResponse, RunListV2RolloutsRunListPostErrorBody]:
        """Launch a batch of hosted rollouts under one job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/run_list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RolloutRunListRequest | RolloutRunListRequestDict](body),
            decoder=async_json_decoder[RolloutBatchResponse],
            error_mapper=run_list_v2_rollouts_run_list_post_error_mapper,
            request_options=request_options,
        )

    async def run_v2_rollouts_run_post(
        self,
        body: RolloutRunRequest | RolloutRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RolloutResponse, RunV2RolloutsRunPostErrorBody]:
        """Launch a single hosted rollout and return its trace and job identifiers.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/run"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RolloutRunRequest | RolloutRunRequestDict](body),
            decoder=async_json_decoder[RolloutResponse],
            error_mapper=run_v2_rollouts_run_post_error_mapper,
            request_options=request_options,
        )

    async def submit_v2_rollouts_submit_post(
        self,
        body: RolloutSubmitRequest | RolloutSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RolloutResponse, SubmitV2RolloutsSubmitPostErrorBody]:
        """v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

        The SDK polls GET /v2/trace/{trace_id} to completion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/rollouts/submit"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RolloutSubmitRequest | RolloutSubmitRequestDict](body),
            decoder=async_json_decoder[RolloutResponse],
            error_mapper=submit_v2_rollouts_submit_post_error_mapper,
            request_options=request_options,
        )
