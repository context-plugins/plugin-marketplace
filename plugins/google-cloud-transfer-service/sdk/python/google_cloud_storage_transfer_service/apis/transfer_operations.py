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
from ..errors.storagetransfer_transfer_operations_cancel_error import (
    StoragetransferTransferOperationsCancelErrorBody,
    storagetransfer_transfer_operations_cancel_error_mapper,
)
from ..errors.storagetransfer_transfer_operations_get_error import (
    StoragetransferTransferOperationsGetErrorBody,
    storagetransfer_transfer_operations_get_error_mapper,
)
from ..errors.storagetransfer_transfer_operations_list_error import (
    StoragetransferTransferOperationsListErrorBody,
    storagetransfer_transfer_operations_list_error_mapper,
)
from ..errors.storagetransfer_transfer_operations_pause_error import (
    StoragetransferTransferOperationsPauseErrorBody,
    storagetransfer_transfer_operations_pause_error_mapper,
)
from ..errors.storagetransfer_transfer_operations_resume_error import (
    StoragetransferTransferOperationsResumeErrorBody,
    storagetransfer_transfer_operations_resume_error_mapper,
)
from ..models.list_operations_response import ListOperationsResponse
from ..models.operation import Operation
from ..server.server import Server


class TransferOperations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransferOperationsWithRawResponse(client, server, auth)

    def storagetransfer_transfer_operations_cancel(
        self, transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the
        operation completed despite the ``cancel`` request. When you cancel an operation, the currently running transfer
        is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example,
        if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer
        will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running
        operations. If an operation is not currently running, ``cancel`` does nothing. *Caution:* Canceling a transfer
        job can leave your data in an unknown state. We recommend that you restore the state at both the destination and
        the source after the ``cancel`` request completes so that your data is in a consistent state. When you cancel a
        job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a
        job every day, and today's job found 10 new files and transferred five files before you canceled the job,
        tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any
        new files discovered tomorrow.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_operations_cancel(
                transfer_operations_id, body, request_options=request_options
            ),
        )

    def storagetransfer_transfer_operations_get(
        self, transfer_operations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_operations_get(
                transfer_operations_id, request_options=request_options
            ),
        )

    def storagetransfer_transfer_operations_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListOperationsResponse:
        """Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of:
                ``{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern":
                "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern":
                "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime":
                "max_creation_time", "transferStatuses":["status1","status2",...]}`` Since ``jobNames``,
                ``operationNames``, and ``transferStatuses`` support multiple values, they must be specified with array
                notation. ``projectId`` is the only argument that is required. If specified, ``jobNamePattern`` and
                ``operationNamePattern`` must match the full job or operation name respectively. '*' is a wildcard
                matching 0 or more characters. ``minCreationTime`` and ``maxCreationTime`` should be timestamps encoded
                as a string in the `RFC 3339 <https://www.ietf.org/rfc/rfc3339.txt>`__ format. The valid values for
                ``transferStatuses`` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_operations_list(
                filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    def storagetransfer_transfer_operations_pause(
        self, transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Pauses a transfer operation.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_operations_pause(
                transfer_operations_id, body, request_options=request_options
            ),
        )

    def storagetransfer_transfer_operations_resume(
        self, transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Resumes a transfer operation that is paused.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_transfer_operations_resume(
                transfer_operations_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TransferOperationsWithRawResponse:
        return self._with_raw_response


class AsyncTransferOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransferOperationsWithRawResponse(client, server, auth)

    async def storagetransfer_transfer_operations_cancel(
        self, transfer_operations_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the
        operation completed despite the ``cancel`` request. When you cancel an operation, the currently running transfer
        is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example,
        if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer
        will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running
        operations. If an operation is not currently running, ``cancel`` does nothing. *Caution:* Canceling a transfer
        job can leave your data in an unknown state. We recommend that you restore the state at both the destination and
        the source after the ``cancel`` request completes so that your data is in a consistent state. When you cancel a
        job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a
        job every day, and today's job found 10 new files and transferred five files before you canceled the job,
        tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any
        new files discovered tomorrow.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_operations_cancel(
                transfer_operations_id, body, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_operations_get(
        self, transfer_operations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_operations_get(
                transfer_operations_id, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_operations_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListOperationsResponse:
        """Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of:
                ``{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern":
                "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern":
                "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime":
                "max_creation_time", "transferStatuses":["status1","status2",...]}`` Since ``jobNames``,
                ``operationNames``, and ``transferStatuses`` support multiple values, they must be specified with array
                notation. ``projectId`` is the only argument that is required. If specified, ``jobNamePattern`` and
                ``operationNamePattern`` must match the full job or operation name respectively. '*' is a wildcard
                matching 0 or more characters. ``minCreationTime`` and ``maxCreationTime`` should be timestamps encoded
                as a string in the `RFC 3339 <https://www.ietf.org/rfc/rfc3339.txt>`__ format. The valid values for
                ``transferStatuses`` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_operations_list(
                filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    async def storagetransfer_transfer_operations_pause(
        self, transfer_operations_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Pauses a transfer operation.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_operations_pause(
                transfer_operations_id, body, request_options=request_options
            ),
        )

    async def storagetransfer_transfer_operations_resume(
        self, transfer_operations_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Resumes a transfer operation that is paused.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_transfer_operations_resume(
                transfer_operations_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTransferOperationsWithRawResponse:
        return self._with_raw_response


class TransferOperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def storagetransfer_transfer_operations_cancel(
        self, transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferOperationsCancelErrorBody]:
        """Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the
        operation completed despite the ``cancel`` request. When you cancel an operation, the currently running transfer
        is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example,
        if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer
        will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running
        operations. If an operation is not currently running, ``cancel`` does nothing. *Caution:* Canceling a transfer
        job can leave your data in an unknown state. We recommend that you restore the state at both the destination and
        the source after the ``cancel`` request completes so that your data is in a consistent state. When you cancel a
        job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a
        job every day, and today's job found 10 new files and transferred five files before you canceled the job,
        tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any
        new files discovered tomorrow.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}:cancel"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=storagetransfer_transfer_operations_cancel_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_operations_get(
        self, transfer_operations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Operation, StoragetransferTransferOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=storagetransfer_transfer_operations_get_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_operations_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOperationsResponse, StoragetransferTransferOperationsListErrorBody]:
        """Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of:
                ``{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern":
                "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern":
                "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime":
                "max_creation_time", "transferStatuses":["status1","status2",...]}`` Since ``jobNames``,
                ``operationNames``, and ``transferStatuses`` support multiple values, they must be specified with array
                notation. ``projectId`` is the only argument that is required. If specified, ``jobNamePattern`` and
                ``operationNamePattern`` must match the full job or operation name respectively. '*' is a wildcard
                matching 0 or more characters. ``minCreationTime`` and ``maxCreationTime`` should be timestamps encoded
                as a string in the `RFC 3339 <https://www.ietf.org/rfc/rfc3339.txt>`__ format. The valid values for
                ``transferStatuses`` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferOperations"),
            query_params=[
                param[str]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListOperationsResponse],
            error_mapper=storagetransfer_transfer_operations_list_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_operations_pause(
        self, transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferOperationsPauseErrorBody]:
        """Pauses a transfer operation.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}:pause"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=storagetransfer_transfer_operations_pause_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_transfer_operations_resume(
        self, transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferOperationsResumeErrorBody]:
        """Resumes a transfer operation that is paused.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}:resume"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=storagetransfer_transfer_operations_resume_error_mapper,
            request_options=request_options,
        )


class AsyncTransferOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def storagetransfer_transfer_operations_cancel(
        self, transfer_operations_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferOperationsCancelErrorBody]:
        """Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the
        operation completed despite the ``cancel`` request. When you cancel an operation, the currently running transfer
        is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example,
        if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer
        will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running
        operations. If an operation is not currently running, ``cancel`` does nothing. *Caution:* Canceling a transfer
        job can leave your data in an unknown state. We recommend that you restore the state at both the destination and
        the source after the ``cancel`` request completes so that your data is in a consistent state. When you cancel a
        job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a
        job every day, and today's job found 10 new files and transferred five files before you canceled the job,
        tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any
        new files discovered tomorrow.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}:cancel"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=storagetransfer_transfer_operations_cancel_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_operations_get(
        self, transfer_operations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Operation, StoragetransferTransferOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=storagetransfer_transfer_operations_get_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_operations_list(
        self,
        filter_: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOperationsResponse, StoragetransferTransferOperationsListErrorBody]:
        """Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

        Args:
            filter_: Required. A list of query parameters specified as JSON text in the form of:
                ``{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern":
                "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern":
                "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime":
                "max_creation_time", "transferStatuses":["status1","status2",...]}`` Since ``jobNames``,
                ``operationNames``, and ``transferStatuses`` support multiple values, they must be specified with array
                notation. ``projectId`` is the only argument that is required. If specified, ``jobNamePattern`` and
                ``operationNamePattern`` must match the full job or operation name respectively. '*' is a wildcard
                matching 0 or more characters. ``minCreationTime`` and ``maxCreationTime`` should be timestamps encoded
                as a string in the `RFC 3339 <https://www.ietf.org/rfc/rfc3339.txt>`__ format. The valid values for
                ``transferStatuses`` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
            page_size: The list page size. The max allowed value is 256.
            page_token: The list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transferOperations"),
            query_params=[
                param[str]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListOperationsResponse],
            error_mapper=storagetransfer_transfer_operations_list_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_operations_pause(
        self, transfer_operations_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferOperationsPauseErrorBody]:
        """Pauses a transfer operation.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}:pause"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=storagetransfer_transfer_operations_pause_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_transfer_operations_resume(
        self, transfer_operations_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferTransferOperationsResumeErrorBody]:
        """Resumes a transfer operation that is paused.

        Args:
            transfer_operations_id: Resource name segment (transferOperationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transferOperations/{transferOperationsId}:resume"),
            path_params=[param[str]("transferOperationsId", transfer_operations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=storagetransfer_transfer_operations_resume_error_mapper,
            request_options=request_options,
        )
