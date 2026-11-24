from __future__ import annotations

from typing import Any
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
from ..errors.storagetransfer_transfer_jobs_create_error import (
    StoragetransferTransferJobsCreateErrorBody,
    storagetransfer_transfer_jobs_create_error_mapper,
)
from ..errors.storagetransfer_transfer_jobs_delete_error import (
    StoragetransferTransferJobsDeleteErrorBody,
    storagetransfer_transfer_jobs_delete_error_mapper,
)
from ..errors.storagetransfer_transfer_jobs_get_error import (
    StoragetransferTransferJobsGetErrorBody,
    storagetransfer_transfer_jobs_get_error_mapper,
)
from ..errors.storagetransfer_transfer_jobs_list_error import (
    StoragetransferTransferJobsListErrorBody,
    storagetransfer_transfer_jobs_list_error_mapper,
)
from ..errors.storagetransfer_transfer_jobs_patch_error import (
    StoragetransferTransferJobsPatchErrorBody,
    storagetransfer_transfer_jobs_patch_error_mapper,
)
from ..errors.storagetransfer_transfer_jobs_run_error import (
    StoragetransferTransferJobsRunErrorBody,
    storagetransfer_transfer_jobs_run_error_mapper,
)
from ..models.list_transfer_jobs_response import ListTransferJobsResponse
from ..models.operation import Operation
from ..models.run_transfer_job_request import RunTransferJobRequest, RunTransferJobRequestDict
from ..models.transfer_job import TransferJob, TransferJobDict
from ..models.update_transfer_job_request import UpdateTransferJobRequest, UpdateTransferJobRequestDict
from ..server.server import Server


class TransferJobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransferJobsWithRawResponse(client, server, auth)

    def storagetransfer_transfer_jobs_create(
        self, body: TransferJob | TransferJobDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TransferJob:
        """Creates a transfer job that runs periodically.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_jobs_create(body, request_options=request_options)
        )

    def storagetransfer_transfer_jobs_delete(
        self, transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_jobs_delete(
                transfer_jobs_id, project_id, request_options=request_options
            ),
        )

    def storagetransfer_transfer_jobs_get(
        self, transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TransferJob:
        """Gets a transfer job.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_jobs_get(
                transfer_jobs_id, project_id, request_options=request_options
            ),
        )

    def storagetransfer_transfer_jobs_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTransferJobsResponse:
        """Lists transfer jobs.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of: ```` {
                "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...],
                "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS",
                "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ```` The JSON formatting in the
                example is for display only; provide the query parameters without spaces or line breaks. * ``projectId``
                is required. * Since ``jobNames`` and ``jobStatuses`` support multiple values, their values must be
                specified with array notation. ``jobNames`` and ``jobStatuses`` are optional. Valid values are
                case-insensitive: * ENABLED * DISABLED * DELETED * Specify ``"dataBackend":"QUERY_REPLICATION_CONFIGS"``
                to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket
                with ``sourceBucket`` and/or to a particular bucket with ``sinkBucket``.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_jobs_list(
                filter_, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def storagetransfer_transfer_jobs_patch(
        self,
        transfer_jobs_id: str,
        body: UpdateTransferJobRequest | UpdateTransferJobRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransferJob:
        """Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running
        already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to
        DELETED, DISABLED, or ENABLED).

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_jobs_patch(
                transfer_jobs_id, body, request_options=request_options
            ),
        )

    def storagetransfer_transfer_jobs_run(
        self,
        transfer_jobs_id: str,
        body: RunTransferJobRequest | RunTransferJobRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Starts a new operation for the specified transfer job. A ``TransferJob`` has a maximum of one active
        ``TransferOperation``. If this method is called while a ``TransferOperation`` is active, an error is returned.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_jobs_run(
                transfer_jobs_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TransferJobsWithRawResponse:
        return self._with_raw_response


class AsyncTransferJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransferJobsWithRawResponse(client, server, auth)

    async def storagetransfer_transfer_jobs_create(
        self, body: TransferJob | TransferJobDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TransferJob:
        """Creates a transfer job that runs periodically.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_jobs_create(body, request_options=request_options)
        )

    async def storagetransfer_transfer_jobs_delete(
        self, transfer_jobs_id: str, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_jobs_delete(
                transfer_jobs_id, project_id, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_jobs_get(
        self, transfer_jobs_id: str, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TransferJob:
        """Gets a transfer job.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_jobs_get(
                transfer_jobs_id, project_id, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_jobs_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTransferJobsResponse:
        """Lists transfer jobs.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of: ```` {
                "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...],
                "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS",
                "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ```` The JSON formatting in the
                example is for display only; provide the query parameters without spaces or line breaks. * ``projectId``
                is required. * Since ``jobNames`` and ``jobStatuses`` support multiple values, their values must be
                specified with array notation. ``jobNames`` and ``jobStatuses`` are optional. Valid values are
                case-insensitive: * ENABLED * DISABLED * DELETED * Specify ``"dataBackend":"QUERY_REPLICATION_CONFIGS"``
                to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket
                with ``sourceBucket`` and/or to a particular bucket with ``sinkBucket``.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_jobs_list(
                filter_, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_jobs_patch(
        self,
        transfer_jobs_id: str,
        body: UpdateTransferJobRequest | UpdateTransferJobRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransferJob:
        """Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running
        already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to
        DELETED, DISABLED, or ENABLED).

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_jobs_patch(
                transfer_jobs_id, body, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_jobs_run(
        self,
        transfer_jobs_id: str,
        body: RunTransferJobRequest | RunTransferJobRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Starts a new operation for the specified transfer job. A ``TransferJob`` has a maximum of one active
        ``TransferOperation``. If this method is called while a ``TransferOperation`` is active, an error is returned.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_jobs_run(
                transfer_jobs_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTransferJobsWithRawResponse:
        return self._with_raw_response


class TransferJobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def storagetransfer_transfer_jobs_create(
        self, body: TransferJob | TransferJobDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TransferJob, StoragetransferTransferJobsCreateErrorBody]:
        """Creates a transfer job that runs periodically.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferJobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransferJob | TransferJobDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TransferJob],
            error_mapper=storagetransfer_transfer_jobs_create_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_jobs_delete(
        self, transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferJobsDeleteErrorBody]:
        """Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            query_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=storagetransfer_transfer_jobs_delete_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_jobs_get(
        self, transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TransferJob, StoragetransferTransferJobsGetErrorBody]:
        """Gets a transfer job.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            query_params=[param[str]("projectId", project_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TransferJob],
            error_mapper=storagetransfer_transfer_jobs_get_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_jobs_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTransferJobsResponse, StoragetransferTransferJobsListErrorBody]:
        """Lists transfer jobs.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of: ```` {
                "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...],
                "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS",
                "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ```` The JSON formatting in the
                example is for display only; provide the query parameters without spaces or line breaks. * ``projectId``
                is required. * Since ``jobNames`` and ``jobStatuses`` support multiple values, their values must be
                specified with array notation. ``jobNames`` and ``jobStatuses`` are optional. Valid values are
                case-insensitive: * ENABLED * DISABLED * DELETED * Specify ``"dataBackend":"QUERY_REPLICATION_CONFIGS"``
                to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket
                with ``sourceBucket`` and/or to a particular bucket with ``sinkBucket``.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferJobs"),
            query_params=[
                param[str]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListTransferJobsResponse],
            error_mapper=storagetransfer_transfer_jobs_list_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_jobs_patch(
        self,
        transfer_jobs_id: str,
        body: UpdateTransferJobRequest | UpdateTransferJobRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransferJob, StoragetransferTransferJobsPatchErrorBody]:
        """Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running
        already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to
        DELETED, DISABLED, or ENABLED).

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTransferJobRequest | UpdateTransferJobRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TransferJob],
            error_mapper=storagetransfer_transfer_jobs_patch_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_jobs_run(
        self,
        transfer_jobs_id: str,
        body: RunTransferJobRequest | RunTransferJobRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, StoragetransferTransferJobsRunErrorBody]:
        """Starts a new operation for the specified transfer job. A ``TransferJob`` has a maximum of one active
        ``TransferOperation``. If this method is called while a ``TransferOperation`` is active, an error is returned.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}:run"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunTransferJobRequest | RunTransferJobRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=storagetransfer_transfer_jobs_run_error_mapper,
            request_options=request_options,
        )


class AsyncTransferJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def storagetransfer_transfer_jobs_create(
        self, body: TransferJob | TransferJobDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TransferJob, StoragetransferTransferJobsCreateErrorBody]:
        """Creates a transfer job that runs periodically.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferJobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransferJob | TransferJobDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[TransferJob],
            error_mapper=storagetransfer_transfer_jobs_create_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_jobs_delete(
        self, transfer_jobs_id: str, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferJobsDeleteErrorBody]:
        """Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            query_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=storagetransfer_transfer_jobs_delete_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_jobs_get(
        self, transfer_jobs_id: str, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TransferJob, StoragetransferTransferJobsGetErrorBody]:
        """Gets a transfer job.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            project_id: Required. The ID of the Google Cloud project that owns the job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            query_params=[param[str]("projectId", project_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[TransferJob],
            error_mapper=storagetransfer_transfer_jobs_get_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_jobs_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTransferJobsResponse, StoragetransferTransferJobsListErrorBody]:
        """Lists transfer jobs.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of: ```` {
                "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...],
                "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS",
                "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ```` The JSON formatting in the
                example is for display only; provide the query parameters without spaces or line breaks. * ``projectId``
                is required. * Since ``jobNames`` and ``jobStatuses`` support multiple values, their values must be
                specified with array notation. ``jobNames`` and ``jobStatuses`` are optional. Valid values are
                case-insensitive: * ENABLED * DISABLED * DELETED * Specify ``"dataBackend":"QUERY_REPLICATION_CONFIGS"``
                to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket
                with ``sourceBucket`` and/or to a particular bucket with ``sinkBucket``.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferJobs"),
            query_params=[
                param[str]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListTransferJobsResponse],
            error_mapper=storagetransfer_transfer_jobs_list_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_jobs_patch(
        self,
        transfer_jobs_id: str,
        body: UpdateTransferJobRequest | UpdateTransferJobRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransferJob, StoragetransferTransferJobsPatchErrorBody]:
        """Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running
        already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to
        DELETED, DISABLED, or ENABLED).

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTransferJobRequest | UpdateTransferJobRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[TransferJob],
            error_mapper=storagetransfer_transfer_jobs_patch_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_jobs_run(
        self,
        transfer_jobs_id: str,
        body: RunTransferJobRequest | RunTransferJobRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, StoragetransferTransferJobsRunErrorBody]:
        """Starts a new operation for the specified transfer job. A ``TransferJob`` has a maximum of one active
        ``TransferOperation``. If this method is called while a ``TransferOperation`` is active, an error is returned.

        Args:
            transfer_jobs_id: Resource name segment (transferJobsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferJobs/{transferJobsId}:run"),
            path_params=[param[str]("transferJobsId", transfer_jobs_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunTransferJobRequest | RunTransferJobRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=storagetransfer_transfer_jobs_run_error_mapper,
            request_options=request_options,
        )
