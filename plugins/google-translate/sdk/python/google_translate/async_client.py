from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AsyncAuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleTranslateClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
    ApiResult,
    AsyncAnySchemes,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    client_secret_basic,
    json_body,
    no_auth,
    param,
    unwrap,
)
from .errors.translate_projects_detect_language_error import (
    TranslateProjectsDetectLanguageErrorBody,
    translate_projects_detect_language_error_mapper,
)
from .errors.translate_projects_get_supported_languages_error import (
    TranslateProjectsGetSupportedLanguagesErrorBody,
    translate_projects_get_supported_languages_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody,
    translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody,
    translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody,
    translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody,
    translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody,
    translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_create_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody,
    translate_projects_locations_adaptive_mt_datasets_create_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_delete_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody,
    translate_projects_locations_adaptive_mt_datasets_delete_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_get_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody,
    translate_projects_locations_adaptive_mt_datasets_get_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody,
    translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_datasets_list_error import (
    TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody,
    translate_projects_locations_adaptive_mt_datasets_list_error_mapper,
)
from .errors.translate_projects_locations_adaptive_mt_translate_error import (
    TranslateProjectsLocationsAdaptiveMtTranslateErrorBody,
    translate_projects_locations_adaptive_mt_translate_error_mapper,
)
from .errors.translate_projects_locations_batch_translate_document_error import (
    TranslateProjectsLocationsBatchTranslateDocumentErrorBody,
    translate_projects_locations_batch_translate_document_error_mapper,
)
from .errors.translate_projects_locations_batch_translate_text_error import (
    TranslateProjectsLocationsBatchTranslateTextErrorBody,
    translate_projects_locations_batch_translate_text_error_mapper,
)
from .errors.translate_projects_locations_datasets_create_error import (
    TranslateProjectsLocationsDatasetsCreateErrorBody,
    translate_projects_locations_datasets_create_error_mapper,
)
from .errors.translate_projects_locations_datasets_delete_error import (
    TranslateProjectsLocationsDatasetsDeleteErrorBody,
    translate_projects_locations_datasets_delete_error_mapper,
)
from .errors.translate_projects_locations_datasets_examples_list_error import (
    TranslateProjectsLocationsDatasetsExamplesListErrorBody,
    translate_projects_locations_datasets_examples_list_error_mapper,
)
from .errors.translate_projects_locations_datasets_export_data_error import (
    TranslateProjectsLocationsDatasetsExportDataErrorBody,
    translate_projects_locations_datasets_export_data_error_mapper,
)
from .errors.translate_projects_locations_datasets_get_error import (
    TranslateProjectsLocationsDatasetsGetErrorBody,
    translate_projects_locations_datasets_get_error_mapper,
)
from .errors.translate_projects_locations_datasets_import_data_error import (
    TranslateProjectsLocationsDatasetsImportDataErrorBody,
    translate_projects_locations_datasets_import_data_error_mapper,
)
from .errors.translate_projects_locations_datasets_list_error import (
    TranslateProjectsLocationsDatasetsListErrorBody,
    translate_projects_locations_datasets_list_error_mapper,
)
from .errors.translate_projects_locations_detect_language_error import (
    TranslateProjectsLocationsDetectLanguageErrorBody,
    translate_projects_locations_detect_language_error_mapper,
)
from .errors.translate_projects_locations_get_error import (
    TranslateProjectsLocationsGetErrorBody,
    translate_projects_locations_get_error_mapper,
)
from .errors.translate_projects_locations_get_supported_languages_error import (
    TranslateProjectsLocationsGetSupportedLanguagesErrorBody,
    translate_projects_locations_get_supported_languages_error_mapper,
)
from .errors.translate_projects_locations_glossaries_create_error import (
    TranslateProjectsLocationsGlossariesCreateErrorBody,
    translate_projects_locations_glossaries_create_error_mapper,
)
from .errors.translate_projects_locations_glossaries_delete_error import (
    TranslateProjectsLocationsGlossariesDeleteErrorBody,
    translate_projects_locations_glossaries_delete_error_mapper,
)
from .errors.translate_projects_locations_glossaries_get_error import (
    TranslateProjectsLocationsGlossariesGetErrorBody,
    translate_projects_locations_glossaries_get_error_mapper,
)
from .errors.translate_projects_locations_glossaries_glossary_entries_create_error import (
    TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody,
    translate_projects_locations_glossaries_glossary_entries_create_error_mapper,
)
from .errors.translate_projects_locations_glossaries_glossary_entries_delete_error import (
    TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody,
    translate_projects_locations_glossaries_glossary_entries_delete_error_mapper,
)
from .errors.translate_projects_locations_glossaries_glossary_entries_get_error import (
    TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody,
    translate_projects_locations_glossaries_glossary_entries_get_error_mapper,
)
from .errors.translate_projects_locations_glossaries_glossary_entries_list_error import (
    TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody,
    translate_projects_locations_glossaries_glossary_entries_list_error_mapper,
)
from .errors.translate_projects_locations_glossaries_glossary_entries_patch_error import (
    TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody,
    translate_projects_locations_glossaries_glossary_entries_patch_error_mapper,
)
from .errors.translate_projects_locations_glossaries_list_error import (
    TranslateProjectsLocationsGlossariesListErrorBody,
    translate_projects_locations_glossaries_list_error_mapper,
)
from .errors.translate_projects_locations_glossaries_patch_error import (
    TranslateProjectsLocationsGlossariesPatchErrorBody,
    translate_projects_locations_glossaries_patch_error_mapper,
)
from .errors.translate_projects_locations_list_error import (
    TranslateProjectsLocationsListErrorBody,
    translate_projects_locations_list_error_mapper,
)
from .errors.translate_projects_locations_models_create_error import (
    TranslateProjectsLocationsModelsCreateErrorBody,
    translate_projects_locations_models_create_error_mapper,
)
from .errors.translate_projects_locations_models_delete_error import (
    TranslateProjectsLocationsModelsDeleteErrorBody,
    translate_projects_locations_models_delete_error_mapper,
)
from .errors.translate_projects_locations_models_get_error import (
    TranslateProjectsLocationsModelsGetErrorBody,
    translate_projects_locations_models_get_error_mapper,
)
from .errors.translate_projects_locations_models_list_error import (
    TranslateProjectsLocationsModelsListErrorBody,
    translate_projects_locations_models_list_error_mapper,
)
from .errors.translate_projects_locations_operations_cancel_error import (
    TranslateProjectsLocationsOperationsCancelErrorBody,
    translate_projects_locations_operations_cancel_error_mapper,
)
from .errors.translate_projects_locations_operations_delete_error import (
    TranslateProjectsLocationsOperationsDeleteErrorBody,
    translate_projects_locations_operations_delete_error_mapper,
)
from .errors.translate_projects_locations_operations_get_error import (
    TranslateProjectsLocationsOperationsGetErrorBody,
    translate_projects_locations_operations_get_error_mapper,
)
from .errors.translate_projects_locations_operations_list_error import (
    TranslateProjectsLocationsOperationsListErrorBody,
    translate_projects_locations_operations_list_error_mapper,
)
from .errors.translate_projects_locations_operations_wait_error import (
    TranslateProjectsLocationsOperationsWaitErrorBody,
    translate_projects_locations_operations_wait_error_mapper,
)
from .errors.translate_projects_locations_refine_text_error import (
    TranslateProjectsLocationsRefineTextErrorBody,
    translate_projects_locations_refine_text_error_mapper,
)
from .errors.translate_projects_locations_romanize_text_error import (
    TranslateProjectsLocationsRomanizeTextErrorBody,
    translate_projects_locations_romanize_text_error_mapper,
)
from .errors.translate_projects_locations_translate_document_error import (
    TranslateProjectsLocationsTranslateDocumentErrorBody,
    translate_projects_locations_translate_document_error_mapper,
)
from .errors.translate_projects_locations_translate_text_error import (
    TranslateProjectsLocationsTranslateTextErrorBody,
    translate_projects_locations_translate_text_error_mapper,
)
from .errors.translate_projects_romanize_text_error import (
    TranslateProjectsRomanizeTextErrorBody,
    translate_projects_romanize_text_error_mapper,
)
from .errors.translate_projects_translate_text_error import (
    TranslateProjectsTranslateTextErrorBody,
    translate_projects_translate_text_error_mapper,
)
from .models.adaptive_mt_dataset import AdaptiveMtDataset, AdaptiveMtDatasetDict
from .models.adaptive_mt_file import AdaptiveMtFile
from .models.adaptive_mt_translate_request import AdaptiveMtTranslateRequest, AdaptiveMtTranslateRequestDict
from .models.adaptive_mt_translate_response import AdaptiveMtTranslateResponse
from .models.batch_translate_document_request import BatchTranslateDocumentRequest, BatchTranslateDocumentRequestDict
from .models.batch_translate_text_request import BatchTranslateTextRequest, BatchTranslateTextRequestDict
from .models.dataset import Dataset, DatasetDict
from .models.detect_language_request import DetectLanguageRequest, DetectLanguageRequestDict
from .models.detect_language_response import DetectLanguageResponse
from .models.export_data_request import ExportDataRequest, ExportDataRequestDict
from .models.glossary import Glossary, GlossaryDict
from .models.glossary_entry import GlossaryEntry, GlossaryEntryDict
from .models.import_adaptive_mt_file_request import ImportAdaptiveMtFileRequest, ImportAdaptiveMtFileRequestDict
from .models.import_adaptive_mt_file_response import ImportAdaptiveMtFileResponse
from .models.import_data_request import ImportDataRequest, ImportDataRequestDict
from .models.list_adaptive_mt_datasets_response import ListAdaptiveMtDatasetsResponse
from .models.list_adaptive_mt_files_response import ListAdaptiveMtFilesResponse
from .models.list_adaptive_mt_sentences_response import ListAdaptiveMtSentencesResponse
from .models.list_datasets_response import ListDatasetsResponse
from .models.list_examples_response import ListExamplesResponse
from .models.list_glossaries_response import ListGlossariesResponse
from .models.list_glossary_entries_response import ListGlossaryEntriesResponse
from .models.list_locations_response import ListLocationsResponse
from .models.list_models_response import ListModelsResponse
from .models.list_operations_response import ListOperationsResponse
from .models.location import Location
from .models.model import Model, ModelDict
from .models.operation import Operation
from .models.refine_text_request import RefineTextRequest, RefineTextRequestDict
from .models.refine_text_response import RefineTextResponse
from .models.romanize_text_request import RomanizeTextRequest, RomanizeTextRequestDict
from .models.romanize_text_response import RomanizeTextResponse
from .models.supported_languages import SupportedLanguages
from .models.translate_document_request import TranslateDocumentRequest, TranslateDocumentRequestDict
from .models.translate_document_response import TranslateDocumentResponse
from .models.translate_text_request import TranslateTextRequest, TranslateTextRequestDict
from .models.translate_text_response import TranslateTextResponse
from .models.wait_operation_request import WaitOperationRequest, WaitOperationRequestDict
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class AsyncGoogleTranslateClient(BaseGoogleTranslateClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
        oauth2: AsyncAuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "GoogleTranslateClient/v3 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v3"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyQueryScheme("key", api_key) if api_key is not None else no_auth,
            oauth2=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/auth"),
                            token_url=self._server.access_token_server("/token"),
                            refresh_url=self._server.access_token_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server, self._auth)

    async def translate_projects_detect_language(
        self,
        projects_id: str,
        body: DetectLanguageRequest | DetectLanguageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DetectLanguageResponse:
        """Detects the language of text within a request.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_detect_language(
                projects_id, body, request_options=request_options
            ),
        )

    async def translate_projects_get_supported_languages(
        self,
        projects_id: str,
        *,
        display_language_code: str | None = None,
        model: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SupportedLanguages:
        """Returns a list of supported languages for translation.

        Args:
            projects_id: Resource name segment (projectsId).
            display_language_code: Optional. The language to use to return localized, human readable names of supported
                languages. If missing, then display names are not returned in a response.
            model: Optional. Get supported languages of this model. The format depends on model type: - AutoML
                Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` -
                General (built-in) models:
                ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, Returns languages
                supported by the specified model. If missing, we get supported languages of Google general NMT model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_get_supported_languages(
                projects_id, display_language_code=display_language_code, model=model, request_options=request_options
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        adaptive_mt_files_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAdaptiveMtSentencesResponse:
        """Lists all AdaptiveMtSentences under a given file/dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            adaptive_mt_files_id: Resource name segment (adaptiveMtFilesId).
            page_size: Value sent with the request.
            page_token: A token identifying a page of results the server should return. Typically, this is the value of
                ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to
                ``ListTranslationMemories`` method. The first page is returned if ``page_token`` is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(
                projects_id,
                locations_id,
                adaptive_mt_datasets_id,
                adaptive_mt_files_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        adaptive_mt_files_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes an AdaptiveMtFile along with its sentences.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            adaptive_mt_files_id: Resource name segment (adaptiveMtFilesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(
                projects_id,
                locations_id,
                adaptive_mt_datasets_id,
                adaptive_mt_files_id,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        adaptive_mt_files_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdaptiveMtFile:
        """Gets and AdaptiveMtFile

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            adaptive_mt_files_id: Resource name segment (adaptiveMtFilesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(
                projects_id,
                locations_id,
                adaptive_mt_datasets_id,
                adaptive_mt_files_id,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAdaptiveMtFilesResponse:
        """Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            page_size: Optional.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to
                ``ListAdaptiveMtFiles`` method. The first page is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(
                projects_id,
                locations_id,
                adaptive_mt_datasets_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAdaptiveMtSentencesResponse:
        """Lists all AdaptiveMtSentences under a given file/dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            page_size: Value sent with the request.
            page_token: A token identifying a page of results the server should return. Typically, this is the value of
                ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to
                ``ListTranslationMemories`` method. The first page is returned if ``page_token`` is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(
                projects_id,
                locations_id,
                adaptive_mt_datasets_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: AdaptiveMtDataset | AdaptiveMtDatasetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdaptiveMtDataset:
        """Creates an Adaptive MT dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_delete(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes an Adaptive MT dataset, including all its entries and associated metadata.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_delete(
                projects_id, locations_id, adaptive_mt_datasets_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_get(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdaptiveMtDataset:
        """Gets the Adaptive MT dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_get(
                projects_id, locations_id, adaptive_mt_datasets_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        body: ImportAdaptiveMtFileRequest | ImportAdaptiveMtFileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ImportAdaptiveMtFileResponse:
        """Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(
                projects_id, locations_id, adaptive_mt_datasets_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_adaptive_mt_datasets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAdaptiveMtDatasetsResponse:
        """Lists all Adaptive MT datasets for which the caller has read permission.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression for filtering the results of the request. Filter is not supported yet.
            page_size: Optional. Requested page size. The server may return fewer results than requested. If
                unspecified, the server picks an appropriate default.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to
                ``ListAdaptiveMtDatasets`` method. The first page is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_datasets_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_adaptive_mt_translate(
        self,
        projects_id: str,
        locations_id: str,
        body: AdaptiveMtTranslateRequest | AdaptiveMtTranslateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdaptiveMtTranslateResponse:
        """Translate text using Adaptive MT.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_adaptive_mt_translate(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_batch_translate_document(
        self,
        projects_id: str,
        locations_id: str,
        body: BatchTranslateDocumentRequest | BatchTranslateDocumentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Translates a large volume of document in asynchronous batch mode. This function provides real-time output as
        the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or
        nothing) may still be available on the specified output location. This call returns immediately and you can use
        google.longrunning.Operation.name to poll the status of the call.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_batch_translate_document(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_batch_translate_text(
        self,
        projects_id: str,
        locations_id: str,
        body: BatchTranslateTextRequest | BatchTranslateTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the
        inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or
        nothing) may still be available on the specified output location. This call returns immediately and you can use
        google.longrunning.Operation.name to poll the status of the call.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_batch_translate_text(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_datasets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Dataset | DatasetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates a Dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_datasets_delete(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Deletes a dataset and all of its contents.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_delete(
                projects_id, locations_id, datasets_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_datasets_examples_list(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListExamplesResponse:
        """Lists sentence pairs in the dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            filter_: Optional. An expression for filtering the examples that will be returned. Example filter: *
                ``usage=TRAIN``
            page_size: Optional. Requested page size. The server can return fewer results than requested.
            page_token: Optional. A token identifying a page of results for the server to return. Typically obtained
                from next_page_token field in the response of a ListExamples call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_examples_list(
                projects_id,
                locations_id,
                datasets_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_datasets_export_data(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        body: ExportDataRequest | ExportDataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Exports dataset's data to the provided output location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_export_data(
                projects_id, locations_id, datasets_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_datasets_get(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Dataset:
        """Gets a Dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_get(
                projects_id, locations_id, datasets_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_datasets_import_data(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        body: ImportDataRequest | ImportDataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Import sentence pairs into translation Dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_import_data(
                projects_id, locations_id, datasets_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_datasets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListDatasetsResponse:
        """Lists datasets.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. Requested page size. The server can return fewer results than requested.
            page_token: Optional. A token identifying a page of results for the server to return. Typically obtained
                from next_page_token field in the response of a ListDatasets call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_datasets_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def translate_projects_locations_detect_language(
        self,
        projects_id: str,
        locations_id: str,
        body: DetectLanguageRequest | DetectLanguageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DetectLanguageResponse:
        """Detects the language of text within a request.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_detect_language(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Location:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_get_supported_languages(
        self,
        projects_id: str,
        locations_id: str,
        *,
        display_language_code: str | None = None,
        model: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SupportedLanguages:
        """Returns a list of supported languages for translation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            display_language_code: Optional. The language to use to return localized, human readable names of supported
                languages. If missing, then display names are not returned in a response.
            model: Optional. Get supported languages of this model. The format depends on model type: - AutoML
                Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` -
                General (built-in) models:
                ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, Returns languages
                supported by the specified model. If missing, we get supported languages of Google general NMT model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_get_supported_languages(
                projects_id,
                locations_id,
                display_language_code=display_language_code,
                model=model,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_glossaries_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Glossary | GlossaryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_delete(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if
        the glossary doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_delete(
                projects_id, locations_id, glossaries_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_get(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Glossary:
        """Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_get(
                projects_id, locations_id, glossaries_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_glossary_entries_create(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        body: GlossaryEntry | GlossaryEntryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GlossaryEntry:
        """Creates a glossary entry.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_glossary_entries_create(
                projects_id, locations_id, glossaries_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_glossary_entries_delete(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        glossary_entries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a single entry from the glossary

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            glossary_entries_id: Resource name segment (glossaryEntriesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_glossary_entries_delete(
                projects_id, locations_id, glossaries_id, glossary_entries_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_glossary_entries_get(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        glossary_entries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GlossaryEntry:
        """Gets a single glossary entry by the given id.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            glossary_entries_id: Resource name segment (glossaryEntriesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_glossary_entries_get(
                projects_id, locations_id, glossaries_id, glossary_entries_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_glossary_entries_list(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListGlossaryEntriesResponse:
        """List the entries for the glossary.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            page_size: Optional. Requested page size. The server may return fewer glossary entries than requested. If
                unspecified, the server picks an appropriate default.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page
                is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_glossary_entries_list(
                projects_id,
                locations_id,
                glossaries_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_glossaries_glossary_entries_patch(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        glossary_entries_id: str,
        body: GlossaryEntry | GlossaryEntryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GlossaryEntry:
        """Updates a glossary entry.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            glossary_entries_id: Resource name segment (glossaryEntriesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_glossary_entries_patch(
                projects_id, locations_id, glossaries_id, glossary_entries_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_glossaries_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListGlossariesResponse:
        """Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter specifying constraints of a list operation. Specify the constraint by the format
                of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For
                multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN".
                Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different
                results, which depends on the language code you used when you create the glossary. For the
                unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code
                separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term
                set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly
                match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term
                set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no
                filtering is performed.
            page_size: Optional. Requested page size. The server may return fewer glossaries than requested. If
                unspecified, the server picks an appropriate default.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of [ListGlossariesResponse.next_page_token] returned from the previous call to ``ListGlossaries``
                method. The first page is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_glossaries_patch(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        body: Glossary | GlossaryDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            body: The request body.
            update_mask: The list of fields to be updated. Currently, only ``display_name`` and ``input_config`` are
                supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_glossaries_patch(
                projects_id, locations_id, glossaries_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def translate_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListLocationsResponse:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_models_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Model | ModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates a Model.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_models_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_models_delete(
        self,
        projects_id: str,
        locations_id: str,
        models_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Deletes a model.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            models_id: Resource name segment (modelsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_models_delete(
                projects_id, locations_id, models_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_models_get(
        self,
        projects_id: str,
        locations_id: str,
        models_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Model:
        """Gets a model.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            models_id: Resource name segment (modelsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_models_get(
                projects_id, locations_id, models_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_models_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListModelsResponse:
        """Lists models.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression for filtering the models that will be returned. Supported filter:
                ``dataset_id=${dataset_id}``
            page_size: Optional. Requested page size. The server can return fewer results than requested.
            page_token: Optional. A token identifying a page of results for the server to return. Typically obtained
                from next_page_token field in the response of a ListModels call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_models_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_operations_delete(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    async def translate_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListOperationsResponse:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
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
            await self.with_raw_response.translate_projects_locations_operations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    async def translate_projects_locations_operations_wait(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: WaitOperationRequest | WaitOperationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Waits until the specified long-running operation is done or reaches at most a specified timeout, returning
        the latest state. If the operation is already done, the latest state is immediately returned. If the timeout
        specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not
        support this method, it returns ``google.rpc.Code.UNIMPLEMENTED``. Note that this method is on a best-effort
        basis. It may return the latest state before the specified timeout (including immediately), meaning even an
        immediate response is no guarantee that the operation is done.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_operations_wait(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_refine_text(
        self,
        projects_id: str,
        locations_id: str,
        body: RefineTextRequest | RefineTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RefineTextResponse:
        """Refines the input translated text to improve the quality.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_refine_text(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_romanize_text(
        self,
        projects_id: str,
        locations_id: str,
        body: RomanizeTextRequest | RomanizeTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RomanizeTextResponse:
        """Romanize input text written in non-Latin scripts to Latin text.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_romanize_text(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_translate_document(
        self,
        projects_id: str,
        locations_id: str,
        body: TranslateDocumentRequest | TranslateDocumentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TranslateDocumentResponse:
        """Translates documents in synchronous mode.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_translate_document(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_locations_translate_text(
        self,
        projects_id: str,
        locations_id: str,
        body: TranslateTextRequest | TranslateTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TranslateTextResponse:
        """Translates input text and returns translated text.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_locations_translate_text(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def translate_projects_romanize_text(
        self,
        projects_id: str,
        body: RomanizeTextRequest | RomanizeTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RomanizeTextResponse:
        """Romanize input text written in non-Latin scripts to Latin text.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_romanize_text(
                projects_id, body, request_options=request_options
            ),
        )

    async def translate_projects_translate_text(
        self,
        projects_id: str,
        body: TranslateTextRequest | TranslateTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TranslateTextResponse:
        """Translates input text and returns translated text.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.translate_projects_translate_text(
                projects_id, body, request_options=request_options
            ),
        )

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def translate_projects_detect_language(
        self,
        projects_id: str,
        body: DetectLanguageRequest | DetectLanguageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DetectLanguageResponse, TranslateProjectsDetectLanguageErrorBody]:
        """Detects the language of text within a request.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}:detectLanguage"),
            path_params=[param[str]("projectsId", projects_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DetectLanguageRequest | DetectLanguageRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[DetectLanguageResponse],
            error_mapper=translate_projects_detect_language_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_get_supported_languages(
        self,
        projects_id: str,
        *,
        display_language_code: str | None = None,
        model: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SupportedLanguages, TranslateProjectsGetSupportedLanguagesErrorBody]:
        """Returns a list of supported languages for translation.

        Args:
            projects_id: Resource name segment (projectsId).
            display_language_code: Optional. The language to use to return localized, human readable names of supported
                languages. If missing, then display names are not returned in a response.
            model: Optional. Get supported languages of this model. The format depends on model type: - AutoML
                Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` -
                General (built-in) models:
                ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, Returns languages
                supported by the specified model. If missing, we get supported languages of Google general NMT model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/supportedLanguages"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[str | None]("displayLanguageCode", display_language_code), param[str | None]("model", model)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SupportedLanguages],
            error_mapper=translate_projects_get_supported_languages_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        adaptive_mt_files_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ListAdaptiveMtSentencesResponse,
        TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody,
    ]:
        """Lists all AdaptiveMtSentences under a given file/dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            adaptive_mt_files_id: Resource name segment (adaptiveMtFilesId).
            page_size: Value sent with the request.
            page_token: A token identifying a page of results the server should return. Typically, this is the value of
                ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to
                ``ListTranslationMemories`` method. The first page is returned if ``page_token`` is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
                param[str]("adaptiveMtFilesId", adaptive_mt_files_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListAdaptiveMtSentencesResponse],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        adaptive_mt_files_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody]:
        """Deletes an AdaptiveMtFile along with its sentences.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            adaptive_mt_files_id: Resource name segment (adaptiveMtFilesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
                param[str]("adaptiveMtFilesId", adaptive_mt_files_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        adaptive_mt_files_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdaptiveMtFile, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody]:
        """Gets and AdaptiveMtFile

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            adaptive_mt_files_id: Resource name segment (adaptiveMtFilesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
                param[str]("adaptiveMtFilesId", adaptive_mt_files_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AdaptiveMtFile],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ListAdaptiveMtFilesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody
    ]:
        """Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            page_size: Optional.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to
                ``ListAdaptiveMtFiles`` method. The first page is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListAdaptiveMtFilesResponse],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ListAdaptiveMtSentencesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody
    ]:
        """Lists all AdaptiveMtSentences under a given file/dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            page_size: Value sent with the request.
            page_token: A token identifying a page of results the server should return. Typically, this is the value of
                ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to
                ``ListTranslationMemories`` method. The first page is returned if ``page_token`` is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtSentences",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListAdaptiveMtSentencesResponse],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: AdaptiveMtDataset | AdaptiveMtDatasetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdaptiveMtDataset, TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody]:
        """Creates an Adaptive MT dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdaptiveMtDataset | AdaptiveMtDatasetDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AdaptiveMtDataset],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_create_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_delete(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody]:
        """Deletes an Adaptive MT dataset, including all its entries and associated metadata.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_get(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdaptiveMtDataset, TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody]:
        """Gets the Adaptive MT dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AdaptiveMtDataset],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(
        self,
        projects_id: str,
        locations_id: str,
        adaptive_mt_datasets_id: str,
        body: ImportAdaptiveMtFileRequest | ImportAdaptiveMtFileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ImportAdaptiveMtFileResponse, TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody
    ]:
        """Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            adaptive_mt_datasets_id: Resource name segment (adaptiveMtDatasetsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("adaptiveMtDatasetsId", adaptive_mt_datasets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ImportAdaptiveMtFileRequest | ImportAdaptiveMtFileRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ImportAdaptiveMtFileResponse],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_datasets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAdaptiveMtDatasetsResponse, TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody]:
        """Lists all Adaptive MT datasets for which the caller has read permission.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression for filtering the results of the request. Filter is not supported yet.
            page_size: Optional. Requested page size. The server may return fewer results than requested. If
                unspecified, the server picks an appropriate default.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to
                ``ListAdaptiveMtDatasets`` method. The first page is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListAdaptiveMtDatasetsResponse],
            error_mapper=translate_projects_locations_adaptive_mt_datasets_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_adaptive_mt_translate(
        self,
        projects_id: str,
        locations_id: str,
        body: AdaptiveMtTranslateRequest | AdaptiveMtTranslateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdaptiveMtTranslateResponse, TranslateProjectsLocationsAdaptiveMtTranslateErrorBody]:
        """Translate text using Adaptive MT.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdaptiveMtTranslateRequest | AdaptiveMtTranslateRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AdaptiveMtTranslateResponse],
            error_mapper=translate_projects_locations_adaptive_mt_translate_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_batch_translate_document(
        self,
        projects_id: str,
        locations_id: str,
        body: BatchTranslateDocumentRequest | BatchTranslateDocumentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsBatchTranslateDocumentErrorBody]:
        """Translates a large volume of document in asynchronous batch mode. This function provides real-time output as
        the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or
        nothing) may still be available on the specified output location. This call returns immediately and you can use
        google.longrunning.Operation.name to poll the status of the call.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}:batchTranslateDocument"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchTranslateDocumentRequest | BatchTranslateDocumentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_batch_translate_document_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_batch_translate_text(
        self,
        projects_id: str,
        locations_id: str,
        body: BatchTranslateTextRequest | BatchTranslateTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsBatchTranslateTextErrorBody]:
        """Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the
        inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or
        nothing) may still be available on the specified output location. This call returns immediately and you can use
        google.longrunning.Operation.name to poll the status of the call.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchTranslateTextRequest | BatchTranslateTextRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_batch_translate_text_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Dataset | DatasetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsCreateErrorBody]:
        """Creates a Dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/datasets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Dataset | DatasetDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_datasets_create_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_delete(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsDeleteErrorBody]:
        """Deletes a dataset and all of its contents.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("datasetsId", datasets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_datasets_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_examples_list(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListExamplesResponse, TranslateProjectsLocationsDatasetsExamplesListErrorBody]:
        """Lists sentence pairs in the dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            filter_: Optional. An expression for filtering the examples that will be returned. Example filter: *
                ``usage=TRAIN``
            page_size: Optional. Requested page size. The server can return fewer results than requested.
            page_token: Optional. A token identifying a page of results for the server to return. Typically obtained
                from next_page_token field in the response of a ListExamples call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("datasetsId", datasets_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListExamplesResponse],
            error_mapper=translate_projects_locations_datasets_examples_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_export_data(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        body: ExportDataRequest | ExportDataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsExportDataErrorBody]:
        """Exports dataset's data to the provided output location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("datasetsId", datasets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExportDataRequest | ExportDataRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_datasets_export_data_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_get(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Dataset, TranslateProjectsLocationsDatasetsGetErrorBody]:
        """Gets a Dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("datasetsId", datasets_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Dataset],
            error_mapper=translate_projects_locations_datasets_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_import_data(
        self,
        projects_id: str,
        locations_id: str,
        datasets_id: str,
        body: ImportDataRequest | ImportDataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsImportDataErrorBody]:
        """Import sentence pairs into translation Dataset.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            datasets_id: Resource name segment (datasetsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("datasetsId", datasets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ImportDataRequest | ImportDataRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_datasets_import_data_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_datasets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListDatasetsResponse, TranslateProjectsLocationsDatasetsListErrorBody]:
        """Lists datasets.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. Requested page size. The server can return fewer results than requested.
            page_token: Optional. A token identifying a page of results for the server to return. Typically obtained
                from next_page_token field in the response of a ListDatasets call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/datasets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListDatasetsResponse],
            error_mapper=translate_projects_locations_datasets_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_detect_language(
        self,
        projects_id: str,
        locations_id: str,
        body: DetectLanguageRequest | DetectLanguageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DetectLanguageResponse, TranslateProjectsLocationsDetectLanguageErrorBody]:
        """Detects the language of text within a request.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:detectLanguage"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DetectLanguageRequest | DetectLanguageRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[DetectLanguageResponse],
            error_mapper=translate_projects_locations_detect_language_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Location, TranslateProjectsLocationsGetErrorBody]:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Location],
            error_mapper=translate_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_get_supported_languages(
        self,
        projects_id: str,
        locations_id: str,
        *,
        display_language_code: str | None = None,
        model: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SupportedLanguages, TranslateProjectsLocationsGetSupportedLanguagesErrorBody]:
        """Returns a list of supported languages for translation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            display_language_code: Optional. The language to use to return localized, human readable names of supported
                languages. If missing, then display names are not returned in a response.
            model: Optional. Get supported languages of this model. The format depends on model type: - AutoML
                Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` -
                General (built-in) models:
                ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, Returns languages
                supported by the specified model. If missing, we get supported languages of Google general NMT model.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("displayLanguageCode", display_language_code), param[str | None]("model", model)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SupportedLanguages],
            error_mapper=translate_projects_locations_get_supported_languages_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Glossary | GlossaryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsGlossariesCreateErrorBody]:
        """Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Glossary | GlossaryDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_glossaries_create_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_delete(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsGlossariesDeleteErrorBody]:
        """Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if
        the glossary doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_glossaries_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_get(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Glossary, TranslateProjectsLocationsGlossariesGetErrorBody]:
        """Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Glossary],
            error_mapper=translate_projects_locations_glossaries_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_glossary_entries_create(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        body: GlossaryEntry | GlossaryEntryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody]:
        """Creates a glossary entry.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GlossaryEntry | GlossaryEntryDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GlossaryEntry],
            error_mapper=translate_projects_locations_glossaries_glossary_entries_create_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_glossary_entries_delete(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        glossary_entries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody]:
        """Deletes a single entry from the glossary

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            glossary_entries_id: Resource name segment (glossaryEntriesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
                param[str]("glossaryEntriesId", glossary_entries_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=translate_projects_locations_glossaries_glossary_entries_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_glossary_entries_get(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        glossary_entries_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody]:
        """Gets a single glossary entry by the given id.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            glossary_entries_id: Resource name segment (glossaryEntriesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
                param[str]("glossaryEntriesId", glossary_entries_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GlossaryEntry],
            error_mapper=translate_projects_locations_glossaries_glossary_entries_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_glossary_entries_list(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGlossaryEntriesResponse, TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody]:
        """List the entries for the glossary.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            page_size: Optional. Requested page size. The server may return fewer glossary entries than requested. If
                unspecified, the server picks an appropriate default.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page
                is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListGlossaryEntriesResponse],
            error_mapper=translate_projects_locations_glossaries_glossary_entries_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_glossary_entries_patch(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        glossary_entries_id: str,
        body: GlossaryEntry | GlossaryEntryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody]:
        """Updates a glossary entry.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            glossary_entries_id: Resource name segment (glossaryEntriesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
                param[str]("glossaryEntriesId", glossary_entries_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GlossaryEntry | GlossaryEntryDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GlossaryEntry],
            error_mapper=translate_projects_locations_glossaries_glossary_entries_patch_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGlossariesResponse, TranslateProjectsLocationsGlossariesListErrorBody]:
        """Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter specifying constraints of a list operation. Specify the constraint by the format
                of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For
                multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN".
                Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different
                results, which depends on the language code you used when you create the glossary. For the
                unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code
                separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term
                set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly
                match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term
                set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no
                filtering is performed.
            page_size: Optional. Requested page size. The server may return fewer glossaries than requested. If
                unspecified, the server picks an appropriate default.
            page_token: Optional. A token identifying a page of results the server should return. Typically, this is the
                value of [ListGlossariesResponse.next_page_token] returned from the previous call to ``ListGlossaries``
                method. The first page is returned if ``page_token``is empty or missing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListGlossariesResponse],
            error_mapper=translate_projects_locations_glossaries_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_glossaries_patch(
        self,
        projects_id: str,
        locations_id: str,
        glossaries_id: str,
        body: Glossary | GlossaryDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsGlossariesPatchErrorBody]:
        """Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            glossaries_id: Resource name segment (glossariesId).
            body: The request body.
            update_mask: The list of fields to be updated. Currently, only ``display_name`` and ``input_config`` are
                supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("glossariesId", glossaries_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Glossary | GlossaryDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_glossaries_patch_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListLocationsResponse, TranslateProjectsLocationsListErrorBody]:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[list[str] | None]("extraLocationTypes", extra_location_types),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListLocationsResponse],
            error_mapper=translate_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_models_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Model | ModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsModelsCreateErrorBody]:
        """Creates a Model.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/models"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Model | ModelDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_models_create_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_models_delete(
        self,
        projects_id: str,
        locations_id: str,
        models_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsModelsDeleteErrorBody]:
        """Deletes a model.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            models_id: Resource name segment (modelsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("modelsId", models_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_models_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_models_get(
        self,
        projects_id: str,
        locations_id: str,
        models_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Model, TranslateProjectsLocationsModelsGetErrorBody]:
        """Gets a model.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            models_id: Resource name segment (modelsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("modelsId", models_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Model],
            error_mapper=translate_projects_locations_models_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_models_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListModelsResponse, TranslateProjectsLocationsModelsListErrorBody]:
        """Lists models.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression for filtering the models that will be returned. Supported filter:
                ``dataset_id=${dataset_id}``
            page_size: Optional. Requested page size. The server can return fewer results than requested.
            page_token: Optional. A token identifying a page of results for the server to return. Typically obtained
                from next_page_token field in the response of a ListModels call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/models"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListModelsResponse],
            error_mapper=translate_projects_locations_models_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TranslateProjectsLocationsOperationsCancelErrorBody]:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=translate_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TranslateProjectsLocationsOperationsDeleteErrorBody]:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=translate_projects_locations_operations_delete_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOperationsResponse, TranslateProjectsLocationsOperationsListErrorBody]:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
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
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}/operations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListOperationsResponse],
            error_mapper=translate_projects_locations_operations_list_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_operations_wait(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: WaitOperationRequest | WaitOperationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, TranslateProjectsLocationsOperationsWaitErrorBody]:
        """Waits until the specified long-running operation is done or reaches at most a specified timeout, returning
        the latest state. If the operation is already done, the latest state is immediately returned. If the timeout
        specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not
        support this method, it returns ``google.rpc.Code.UNIMPLEMENTED``. Note that this method is on a best-effort
        basis. It may return the latest state before the specified timeout (including immediately), meaning even an
        immediate response is no guarantee that the operation is done.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WaitOperationRequest | WaitOperationRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=translate_projects_locations_operations_wait_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_refine_text(
        self,
        projects_id: str,
        locations_id: str,
        body: RefineTextRequest | RefineTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RefineTextResponse, TranslateProjectsLocationsRefineTextErrorBody]:
        """Refines the input translated text to improve the quality.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:refineText"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefineTextRequest | RefineTextRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RefineTextResponse],
            error_mapper=translate_projects_locations_refine_text_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_romanize_text(
        self,
        projects_id: str,
        locations_id: str,
        body: RomanizeTextRequest | RomanizeTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RomanizeTextResponse, TranslateProjectsLocationsRomanizeTextErrorBody]:
        """Romanize input text written in non-Latin scripts to Latin text.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:romanizeText"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RomanizeTextRequest | RomanizeTextRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RomanizeTextResponse],
            error_mapper=translate_projects_locations_romanize_text_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_translate_document(
        self,
        projects_id: str,
        locations_id: str,
        body: TranslateDocumentRequest | TranslateDocumentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TranslateDocumentResponse, TranslateProjectsLocationsTranslateDocumentErrorBody]:
        """Translates documents in synchronous mode.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:translateDocument"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TranslateDocumentRequest | TranslateDocumentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[TranslateDocumentResponse],
            error_mapper=translate_projects_locations_translate_document_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_locations_translate_text(
        self,
        projects_id: str,
        locations_id: str,
        body: TranslateTextRequest | TranslateTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TranslateTextResponse, TranslateProjectsLocationsTranslateTextErrorBody]:
        """Translates input text and returns translated text.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}/locations/{locationsId}:translateText"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TranslateTextRequest | TranslateTextRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[TranslateTextResponse],
            error_mapper=translate_projects_locations_translate_text_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_romanize_text(
        self,
        projects_id: str,
        body: RomanizeTextRequest | RomanizeTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RomanizeTextResponse, TranslateProjectsRomanizeTextErrorBody]:
        """Romanize input text written in non-Latin scripts to Latin text.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}:romanizeText"),
            path_params=[param[str]("projectsId", projects_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RomanizeTextRequest | RomanizeTextRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RomanizeTextResponse],
            error_mapper=translate_projects_romanize_text_error_mapper,
            request_options=request_options,
        )

    async def translate_projects_translate_text(
        self,
        projects_id: str,
        body: TranslateTextRequest | TranslateTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TranslateTextResponse, TranslateProjectsTranslateTextErrorBody]:
        """Translates input text and returns translated text.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/projects/{projectsId}:translateText"),
            path_params=[param[str]("projectsId", projects_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TranslateTextRequest | TranslateTextRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[TranslateTextResponse],
            error_mapper=translate_projects_translate_text_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncGoogleTranslateClient
