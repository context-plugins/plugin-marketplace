from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.info_open_api_document_error import InfoOpenApiDocumentErrorBody, info_open_api_document_error_mapper
from ..errors.sync_open_api_document_error import SyncOpenApiDocumentErrorBody, sync_open_api_document_error_mapper
from ..models.enums.open_api_try_it import OpenApiTryItOrStr
from ..models.enums.open_api_use_own_backend import OpenApiUseOwnBackendOrStr
from ..models.enums.should_create_intro import ShouldCreateIntroOrStr
from ..models.enums.should_create_schema_category import ShouldCreateSchemaCategoryOrStr
from ..models.enums.show_download_open_api_file import ShowDownloadOpenApiFileOrStr
from ..models.enums.type import Type, TypeOrStr
from ..models.info_api_reference_response import InfoApiReferenceResponse
from ..models.sync_api_reference_response import SyncApiReferenceResponse
from ..server.server import Server


class ApiReference:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApiReferenceWithRawResponse(client, server, auth)

    def info_open_api_document(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> InfoApiReferenceResponse:
        """Get info of an existing Open Api tree

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Status

        Raises:
            ApiError: Invalid request ``error`` is ``InfoApiReference400Error1 | RawError``."""
        return unwrap(self._with_raw_response.info_open_api_document(request_options=request_options))

    def sync_open_api_document(
        self,
        file: FileInput,
        *,
        doc_tree_id: str | None = "21-character__string0",
        type_: TypeOrStr | None = Type.OPENAPI,
        open_api_try_it: OpenApiTryItOrStr | None = None,
        open_api_use_own_backend: OpenApiUseOwnBackendOrStr | None = None,
        show_download_open_api_file: ShowDownloadOpenApiFileOrStr | None = None,
        should_create_schema_category: ShouldCreateSchemaCategoryOrStr | None = None,
        should_create_intro: ShouldCreateIntroOrStr | None = None,
        open_api_language_examples: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncApiReferenceResponse:
        """Sync Open Api document with a new or existing Open Api tree

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            doc_tree_id: OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created
                and its id is returned
            type_: Type of import file. Default openapi
            open_api_try_it: OPTIONAL. You can now test your API's directly in the editor or on your published docs with
                the new API Try It!
            open_api_use_own_backend: OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the
                URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your
                backend.
            show_download_open_api_file: OPTIONAL. You can show/hide the download link of the imported Open API file in
                the Open API tree.
            should_create_schema_category: OPTIONAL. You can create models category to display all your models.
            should_create_intro: OPTIONAL. You can create an additional document to display open api intro.
            open_api_language_examples: OPTIONAL. Add your custom language examples. Maximum 5 programming language
                examples are allowed!
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import OK status

        Raises:
            ApiError: Invalid request ``error`` is ``SyncApiReference400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.sync_open_api_document(
                file,
                doc_tree_id=doc_tree_id,
                type_=type_,
                open_api_try_it=open_api_try_it,
                open_api_use_own_backend=open_api_use_own_backend,
                show_download_open_api_file=show_download_open_api_file,
                should_create_schema_category=should_create_schema_category,
                should_create_intro=should_create_intro,
                open_api_language_examples=open_api_language_examples,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ApiReferenceWithRawResponse:
        return self._with_raw_response


class AsyncApiReference:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApiReferenceWithRawResponse(client, server, auth)

    async def info_open_api_document(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InfoApiReferenceResponse:
        """Get info of an existing Open Api tree

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Status

        Raises:
            ApiError: Invalid request ``error`` is ``InfoApiReference400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.info_open_api_document(request_options=request_options))

    async def sync_open_api_document(
        self,
        file: AsyncFileInput,
        *,
        doc_tree_id: str | None = "21-character__string0",
        type_: TypeOrStr | None = Type.OPENAPI,
        open_api_try_it: OpenApiTryItOrStr | None = None,
        open_api_use_own_backend: OpenApiUseOwnBackendOrStr | None = None,
        show_download_open_api_file: ShowDownloadOpenApiFileOrStr | None = None,
        should_create_schema_category: ShouldCreateSchemaCategoryOrStr | None = None,
        should_create_intro: ShouldCreateIntroOrStr | None = None,
        open_api_language_examples: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncApiReferenceResponse:
        """Sync Open Api document with a new or existing Open Api tree

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            doc_tree_id: OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created
                and its id is returned
            type_: Type of import file. Default openapi
            open_api_try_it: OPTIONAL. You can now test your API's directly in the editor or on your published docs with
                the new API Try It!
            open_api_use_own_backend: OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the
                URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your
                backend.
            show_download_open_api_file: OPTIONAL. You can show/hide the download link of the imported Open API file in
                the Open API tree.
            should_create_schema_category: OPTIONAL. You can create models category to display all your models.
            should_create_intro: OPTIONAL. You can create an additional document to display open api intro.
            open_api_language_examples: OPTIONAL. Add your custom language examples. Maximum 5 programming language
                examples are allowed!
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import OK status

        Raises:
            ApiError: Invalid request ``error`` is ``SyncApiReference400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sync_open_api_document(
                file,
                doc_tree_id=doc_tree_id,
                type_=type_,
                open_api_try_it=open_api_try_it,
                open_api_use_own_backend=open_api_use_own_backend,
                show_download_open_api_file=show_download_open_api_file,
                should_create_schema_category=should_create_schema_category,
                should_create_intro=should_create_intro,
                open_api_language_examples=open_api_language_examples,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncApiReferenceWithRawResponse:
        return self._with_raw_response


class ApiReferenceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def info_open_api_document(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InfoApiReferenceResponse, InfoOpenApiDocumentErrorBody]:
        """Get info of an existing Open Api tree

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/info-api-reference"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[InfoApiReferenceResponse],
            error_mapper=info_open_api_document_error_mapper,
            request_options=request_options,
        )

    def sync_open_api_document(
        self,
        file: FileInput,
        *,
        doc_tree_id: str | None = "21-character__string0",
        type_: TypeOrStr | None = Type.OPENAPI,
        open_api_try_it: OpenApiTryItOrStr | None = None,
        open_api_use_own_backend: OpenApiUseOwnBackendOrStr | None = None,
        show_download_open_api_file: ShowDownloadOpenApiFileOrStr | None = None,
        should_create_schema_category: ShouldCreateSchemaCategoryOrStr | None = None,
        should_create_intro: ShouldCreateIntroOrStr | None = None,
        open_api_language_examples: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncApiReferenceResponse, SyncOpenApiDocumentErrorBody]:
        """Sync Open Api document with a new or existing Open Api tree

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            doc_tree_id: OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created
                and its id is returned
            type_: Type of import file. Default openapi
            open_api_try_it: OPTIONAL. You can now test your API's directly in the editor or on your published docs with
                the new API Try It!
            open_api_use_own_backend: OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the
                URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your
                backend.
            show_download_open_api_file: OPTIONAL. You can show/hide the download link of the imported Open API file in
                the Open API tree.
            should_create_schema_category: OPTIONAL. You can create models category to display all your models.
            should_create_intro: OPTIONAL. You can create an additional document to display open api intro.
            open_api_language_examples: OPTIONAL. Add your custom language examples. Maximum 5 programming language
                examples are allowed!
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sync-api-reference"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                param[str | None]("docTreeId", doc_tree_id),
                param[TypeOrStr | None]("type", type_),
                param[OpenApiTryItOrStr | None]("openApiTryIt", open_api_try_it),
                param[OpenApiUseOwnBackendOrStr | None]("openApiUseOwnBackend", open_api_use_own_backend),
                param[ShowDownloadOpenApiFileOrStr | None]("showDownloadOpenApiFile", show_download_open_api_file),
                param[ShouldCreateSchemaCategoryOrStr | None](
                    "shouldCreateSchemaCategory", should_create_schema_category
                ),
                param[ShouldCreateIntroOrStr | None]("shouldCreateIntro", should_create_intro),
                param[str | None]("openApiLanguageExamples", open_api_language_examples),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncApiReferenceResponse],
            error_mapper=sync_open_api_document_error_mapper,
            request_options=request_options,
        )


class AsyncApiReferenceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def info_open_api_document(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InfoApiReferenceResponse, InfoOpenApiDocumentErrorBody]:
        """Get info of an existing Open Api tree

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/info-api-reference"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[InfoApiReferenceResponse],
            error_mapper=info_open_api_document_error_mapper,
            request_options=request_options,
        )

    async def sync_open_api_document(
        self,
        file: AsyncFileInput,
        *,
        doc_tree_id: str | None = "21-character__string0",
        type_: TypeOrStr | None = Type.OPENAPI,
        open_api_try_it: OpenApiTryItOrStr | None = None,
        open_api_use_own_backend: OpenApiUseOwnBackendOrStr | None = None,
        show_download_open_api_file: ShowDownloadOpenApiFileOrStr | None = None,
        should_create_schema_category: ShouldCreateSchemaCategoryOrStr | None = None,
        should_create_intro: ShouldCreateIntroOrStr | None = None,
        open_api_language_examples: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncApiReferenceResponse, SyncOpenApiDocumentErrorBody]:
        """Sync Open Api document with a new or existing Open Api tree

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            doc_tree_id: OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created
                and its id is returned
            type_: Type of import file. Default openapi
            open_api_try_it: OPTIONAL. You can now test your API's directly in the editor or on your published docs with
                the new API Try It!
            open_api_use_own_backend: OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the
                URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your
                backend.
            show_download_open_api_file: OPTIONAL. You can show/hide the download link of the imported Open API file in
                the Open API tree.
            should_create_schema_category: OPTIONAL. You can create models category to display all your models.
            should_create_intro: OPTIONAL. You can create an additional document to display open api intro.
            open_api_language_examples: OPTIONAL. Add your custom language examples. Maximum 5 programming language
                examples are allowed!
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sync-api-reference"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                param[str | None]("docTreeId", doc_tree_id),
                param[TypeOrStr | None]("type", type_),
                param[OpenApiTryItOrStr | None]("openApiTryIt", open_api_try_it),
                param[OpenApiUseOwnBackendOrStr | None]("openApiUseOwnBackend", open_api_use_own_backend),
                param[ShowDownloadOpenApiFileOrStr | None]("showDownloadOpenApiFile", show_download_open_api_file),
                param[ShouldCreateSchemaCategoryOrStr | None](
                    "shouldCreateSchemaCategory", should_create_schema_category
                ),
                param[ShouldCreateIntroOrStr | None]("shouldCreateIntro", should_create_intro),
                param[str | None]("openApiLanguageExamples", open_api_language_examples),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncApiReferenceResponse],
            error_mapper=sync_open_api_document_error_mapper,
            request_options=request_options,
        )
