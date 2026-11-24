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
from ..errors.classify_document_async_error import ClassifyDocumentAsyncErrorBody, classify_document_async_error_mapper
from ..errors.get_classification_result_error import (
    GetClassificationResultErrorBody,
    get_classification_result_error_mapper,
)
from ..models.async_job_start_response import AsyncJobStartResponse
from ..models.classification_request import ClassificationRequest, ClassificationRequestDict
from ..models.classification_result import ClassificationResult
from ..server.server import Server


class Classification:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ClassificationWithRawResponse(client, server, auth)

    def classify_document_async(
        self,
        project_id: str,
        body: ClassificationRequest | ClassificationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsyncJobStartResponse:
        """Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for
        results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are
        retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once
        processing is complete.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Classification job started; use the returned requestId to poll for results

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.classify_document_async(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    def get_classification_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationResult:
        """Retrieves the result of an asynchronous classification request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results
        are available for 24 hours from the time the job completed.

        Args:
            project_id: Unique identifier of the Document Understanding project
            request_id: Unique identifier of the asynchronous job request to retrieve results for
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Classification result or current job status

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_result(
                project_id, request_id, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ClassificationWithRawResponse:
        return self._with_raw_response


class AsyncClassification:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncClassificationWithRawResponse(client, server, auth)

    async def classify_document_async(
        self,
        project_id: str,
        body: ClassificationRequest | ClassificationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncJobStartResponse:
        """Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for
        results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are
        retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once
        processing is complete.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Classification job started; use the returned requestId to poll for results

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.classify_document_async(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    async def get_classification_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationResult:
        """Retrieves the result of an asynchronous classification request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results
        are available for 24 hours from the time the job completed.

        Args:
            project_id: Unique identifier of the Document Understanding project
            request_id: Unique identifier of the asynchronous job request to retrieve results for
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Classification result or current job status

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_result(
                project_id, request_id, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncClassificationWithRawResponse:
        return self._with_raw_response


class ClassificationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def classify_document_async(
        self,
        project_id: str,
        body: ClassificationRequest | ClassificationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncJobStartResponse, ClassifyDocumentAsyncErrorBody]:
        """Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for
        results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are
        retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once
        processing is complete.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/classification/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ClassificationRequest | ClassificationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AsyncJobStartResponse],
            error_mapper=classify_document_async_error_mapper,
            request_options=request_options,
        )

    def get_classification_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationResult, GetClassificationResultErrorBody]:
        """Retrieves the result of an asynchronous classification request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results
        are available for 24 hours from the time the job completed.

        Args:
            project_id: Unique identifier of the Document Understanding project
            request_id: Unique identifier of the asynchronous job request to retrieve results for
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/classification/{requestId}/result"
            ),
            path_params=[param[str]("projectId", project_id), param[str]("requestId", request_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClassificationResult],
            error_mapper=get_classification_result_error_mapper,
            request_options=request_options,
        )


class AsyncClassificationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def classify_document_async(
        self,
        project_id: str,
        body: ClassificationRequest | ClassificationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncJobStartResponse, ClassifyDocumentAsyncErrorBody]:
        """Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for
        results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are
        retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once
        processing is complete.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/classification/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ClassificationRequest | ClassificationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AsyncJobStartResponse],
            error_mapper=classify_document_async_error_mapper,
            request_options=request_options,
        )

    async def get_classification_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationResult, GetClassificationResultErrorBody]:
        """Retrieves the result of an asynchronous classification request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results
        are available for 24 hours from the time the job completed.

        Args:
            project_id: Unique identifier of the Document Understanding project
            request_id: Unique identifier of the asynchronous job request to retrieve results for
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/classification/{requestId}/result"
            ),
            path_params=[param[str]("projectId", project_id), param[str]("requestId", request_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClassificationResult],
            error_mapper=get_classification_result_error_mapper,
            request_options=request_options,
        )
