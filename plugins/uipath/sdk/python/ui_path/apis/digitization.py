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
from ..errors.digitize_document_error import DigitizeDocumentErrorBody, digitize_document_error_mapper
from ..models.digitization_request import DigitizationRequest, DigitizationRequestDict
from ..models.digitization_result import DigitizationResult
from ..server.server import Server


class Digitization:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DigitizationWithRawResponse(client, server, auth)

    def digitize_document(
        self,
        project_id: str,
        body: DigitizationRequest | DigitizationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> DigitizationResult:
        """Submits a document for digitization, converting it into a structured digital representation that can be used
        for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The
        response includes a documentId that must be used in subsequent classification, extraction, and validation
        requests. Digitized results are retained for seven days.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document digitized successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.digitize_document(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DigitizationWithRawResponse:
        return self._with_raw_response


class AsyncDigitization:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDigitizationWithRawResponse(client, server, auth)

    async def digitize_document(
        self,
        project_id: str,
        body: DigitizationRequest | DigitizationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DigitizationResult:
        """Submits a document for digitization, converting it into a structured digital representation that can be used
        for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The
        response includes a documentId that must be used in subsequent classification, extraction, and validation
        requests. Digitized results are retained for seven days.

        Args:
            project_id: Unique identifier of the Document Understanding project
            body: The request body.
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document digitized successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.digitize_document(
                project_id, body, api_version=api_version, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDigitizationWithRawResponse:
        return self._with_raw_response


class DigitizationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def digitize_document(
        self,
        project_id: str,
        body: DigitizationRequest | DigitizationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DigitizationResult, DigitizeDocumentErrorBody]:
        """Submits a document for digitization, converting it into a structured digital representation that can be used
        for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The
        response includes a documentId that must be used in subsequent classification, extraction, and validation
        requests. Digitized results are retained for seven days.

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
                "/projects/{projectId}/digitization/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DigitizationRequest | DigitizationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DigitizationResult],
            error_mapper=digitize_document_error_mapper,
            request_options=request_options,
        )


class AsyncDigitizationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def digitize_document(
        self,
        project_id: str,
        body: DigitizationRequest | DigitizationRequestDict,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DigitizationResult, DigitizeDocumentErrorBody]:
        """Submits a document for digitization, converting it into a structured digital representation that can be used
        for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The
        response includes a documentId that must be used in subsequent classification, extraction, and validation
        requests. Digitized results are retained for seven days.

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
                "/projects/{projectId}/digitization/start"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DigitizationRequest | DigitizationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DigitizationResult],
            error_mapper=digitize_document_error_mapper,
            request_options=request_options,
        )
