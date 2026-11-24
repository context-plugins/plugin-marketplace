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
from ..errors.validate_document_async_error import ValidateDocumentAsyncErrorBody, validate_document_async_error_mapper
from ..models.async_job_start_response_ui_path_document_understanding_extraction_api import (
    AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi,
)
from ..models.validation_request import ValidationRequest, ValidationRequestDict
from ..server.server import Server


class Validation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ValidationWithRawResponse(client, server, auth)

    def validate_document_async(
        self,
        project_id: str,
        body: ValidationRequest | ValidationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi:
        """Submits digitization, classification, and extraction results for asynchronous validation. Validation checks
        the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence
        extractions. Returns a requestId for polling.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation job started successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.validate_document_async(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ValidationWithRawResponse:
        return self._with_raw_response


class AsyncValidation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncValidationWithRawResponse(client, server, auth)

    async def validate_document_async(
        self,
        project_id: str,
        body: ValidationRequest | ValidationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi:
        """Submits digitization, classification, and extraction results for asynchronous validation. Validation checks
        the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence
        extractions. Returns a requestId for polling.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation job started successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.validate_document_async(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncValidationWithRawResponse:
        return self._with_raw_response


class ValidationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def validate_document_async(
        self,
        project_id: str,
        body: ValidationRequest | ValidationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ValidateDocumentAsyncErrorBody]:
        """Submits digitization, classification, and extraction results for asynchronous validation. Validation checks
        the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence
        extractions. Returns a requestId for polling.

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
                "/projects/{projectId}/validation/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ValidationRequest | ValidationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi],
            error_mapper=validate_document_async_error_mapper,
            request_options=request_options,
        )


class AsyncValidationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def validate_document_async(
        self,
        project_id: str,
        body: ValidationRequest | ValidationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ValidateDocumentAsyncErrorBody]:
        """Submits digitization, classification, and extraction results for asynchronous validation. Validation checks
        the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence
        extractions. Returns a requestId for polling.

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
                "/projects/{projectId}/validation/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ValidationRequest | ValidationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi],
            error_mapper=validate_document_async_error_mapper,
            request_options=request_options,
        )
