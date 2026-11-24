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
from ..errors.extract_document_async_error import ExtractDocumentAsyncErrorBody, extract_document_async_error_mapper
from ..errors.get_extraction_result_error import GetExtractionResultErrorBody, get_extraction_result_error_mapper
from ..models.async_job_start_response_ui_path_document_understanding_extraction_api import (
    AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi,
)
from ..models.extraction_request import ExtractionRequest, ExtractionRequestDict
from ..models.extraction_result import ExtractionResult
from ..server.server import Server


class Extraction:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExtractionWithRawResponse(client, server, auth)

    def extract_document_async(
        self,
        project_id: str,
        body: ExtractionRequest | ExtractionRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi:
        """Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the
        document type must be specified in the request body. Returns a requestId to poll for results. Results are
        retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing
        completes.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extraction job started; use the returned requestId to poll for results

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.extract_document_async(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    def get_extraction_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExtractionResult:
        """Retrieves the result of an asynchronous extraction request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns
        extracted field values with associated confidence scores. Results are available for 24 hours from the time the
        job completed.

        Args:
            project_id: Unique identifier of the Document Understanding project
            request_id: Unique identifier of the asynchronous job request to retrieve results for
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extraction result or current job status

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_extraction_result(
                project_id, request_id, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ExtractionWithRawResponse:
        return self._with_raw_response


class AsyncExtraction:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExtractionWithRawResponse(client, server, auth)

    async def extract_document_async(
        self,
        project_id: str,
        body: ExtractionRequest | ExtractionRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi:
        """Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the
        document type must be specified in the request body. Returns a requestId to poll for results. Results are
        retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing
        completes.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extraction job started; use the returned requestId to poll for results

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.extract_document_async(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    async def get_extraction_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExtractionResult:
        """Retrieves the result of an asynchronous extraction request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns
        extracted field values with associated confidence scores. Results are available for 24 hours from the time the
        job completed.

        Args:
            project_id: Unique identifier of the Document Understanding project
            request_id: Unique identifier of the asynchronous job request to retrieve results for
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extraction result or current job status

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_extraction_result(
                project_id, request_id, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncExtractionWithRawResponse:
        return self._with_raw_response


class ExtractionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def extract_document_async(
        self,
        project_id: str,
        body: ExtractionRequest | ExtractionRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ExtractDocumentAsyncErrorBody]:
        """Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the
        document type must be specified in the request body. Returns a requestId to poll for results. Results are
        retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing
        completes.

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
                "/projects/{projectId}/extraction/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExtractionRequest | ExtractionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi],
            error_mapper=extract_document_async_error_mapper,
            request_options=request_options,
        )

    def get_extraction_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExtractionResult, GetExtractionResultErrorBody]:
        """Retrieves the result of an asynchronous extraction request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns
        extracted field values with associated confidence scores. Results are available for 24 hours from the time the
        job completed.

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
                "/projects/{projectId}/extraction/{requestId}/result"
            ),
            path_params=[param[str]("projectId", project_id), param[str]("requestId", request_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ExtractionResult],
            error_mapper=get_extraction_result_error_mapper,
            request_options=request_options,
        )


class AsyncExtractionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def extract_document_async(
        self,
        project_id: str,
        body: ExtractionRequest | ExtractionRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ExtractDocumentAsyncErrorBody]:
        """Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the
        document type must be specified in the request body. Returns a requestId to poll for results. Results are
        retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing
        completes.

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
                "/projects/{projectId}/extraction/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExtractionRequest | ExtractionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi],
            error_mapper=extract_document_async_error_mapper,
            request_options=request_options,
        )

    async def get_extraction_result(
        self,
        project_id: str,
        request_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExtractionResult, GetExtractionResultErrorBody]:
        """Retrieves the result of an asynchronous extraction request by its requestId. The job status can be
        NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns
        extracted field values with associated confidence scores. Results are available for 24 hours from the time the
        job completed.

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
                "/projects/{projectId}/extraction/{requestId}/result"
            ),
            path_params=[param[str]("projectId", project_id), param[str]("requestId", request_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ExtractionResult],
            error_mapper=get_extraction_result_error_mapper,
            request_options=request_options,
        )
