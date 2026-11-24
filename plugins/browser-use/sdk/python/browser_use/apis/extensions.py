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
    async_empty_response,
    async_json_decoder,
    empty_response,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_extension_extensions_extension_id_delete_error import (
    DeleteExtensionExtensionsExtensionIdDeleteErrorBody,
    delete_extension_extensions_extension_id_delete_error_mapper,
)
from ..errors.get_extension_extensions_extension_id_get_error import (
    GetExtensionExtensionsExtensionIdGetErrorBody,
    get_extension_extensions_extension_id_get_error_mapper,
)
from ..errors.list_extensions_extensions_get_error import (
    ListExtensionsExtensionsGetErrorBody,
    list_extensions_extensions_get_error_mapper,
)
from ..errors.upload_extension_extensions_post_error import (
    UploadExtensionExtensionsPostErrorBody,
    upload_extension_extensions_post_error_mapper,
)
from ..models.extension_list_response import ExtensionListResponse
from ..models.extension_view import ExtensionView
from ..server.server import Server


class Extensions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExtensionsWithRawResponse(client, server, auth)

    def delete_extension_extensions_extension_id_delete(
        self, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently delete an extension without affecting running browsers.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Extension not found The extension could not be deleted Validation Error ``error`` is
                ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_extension_extensions_extension_id_delete(
                extension_id, request_options=request_options
            ),
        )

    def get_extension_extensions_extension_id_get(
        self, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExtensionView:
        """Get an uploaded extension by its ID.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Extension not found Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_extension_extensions_extension_id_get(
                extension_id, request_options=request_options
            ),
        )

    def list_extensions_extensions_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExtensionListResponse:
        """List the extensions uploaded to this project.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_extensions_extensions_get(
                page_size=page_size, page_number=page_number, request_options=request_options
            ),
        )

    def upload_extension_extensions_post(
        self, file: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExtensionView:
        """Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Extensions are not available for Zero Data Retention projects The upload is larger than 100 MiB
                The extension is invalid or the project has 100 extensions The extension could not be stored ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.upload_extension_extensions_post(file, request_options=request_options))

    @property
    def with_raw_response(self) -> ExtensionsWithRawResponse:
        return self._with_raw_response


class AsyncExtensions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExtensionsWithRawResponse(client, server, auth)

    async def delete_extension_extensions_extension_id_delete(
        self, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently delete an extension without affecting running browsers.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Extension not found The extension could not be deleted Validation Error ``error`` is
                ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_extension_extensions_extension_id_delete(
                extension_id, request_options=request_options
            ),
        )

    async def get_extension_extensions_extension_id_get(
        self, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExtensionView:
        """Get an uploaded extension by its ID.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Extension not found Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_extension_extensions_extension_id_get(
                extension_id, request_options=request_options
            ),
        )

    async def list_extensions_extensions_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExtensionListResponse:
        """List the extensions uploaded to this project.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_extensions_extensions_get(
                page_size=page_size, page_number=page_number, request_options=request_options
            ),
        )

    async def upload_extension_extensions_post(
        self, file: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExtensionView:
        """Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Extensions are not available for Zero Data Retention projects The upload is larger than 100 MiB
                The extension is invalid or the project has 100 extensions The extension could not be stored ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.upload_extension_extensions_post(file, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExtensionsWithRawResponse:
        return self._with_raw_response


class ExtensionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_extension_extensions_extension_id_delete(
        self, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteExtensionExtensionsExtensionIdDeleteErrorBody]:
        """Permanently delete an extension without affecting running browsers.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/extensions/{extension_id}"),
            path_params=[param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=delete_extension_extensions_extension_id_delete_error_mapper,
            request_options=request_options,
        )

    def get_extension_extensions_extension_id_get(
        self, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExtensionView, GetExtensionExtensionsExtensionIdGetErrorBody]:
        """Get an uploaded extension by its ID.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/extensions/{extension_id}"),
            path_params=[param[UUID]("extension_id", extension_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ExtensionView],
            error_mapper=get_extension_extensions_extension_id_get_error_mapper,
            request_options=request_options,
        )

    def list_extensions_extensions_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExtensionListResponse, ListExtensionsExtensionsGetErrorBody]:
        """List the extensions uploaded to this project.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/extensions"),
            query_params=[param[int | None]("pageSize", page_size), param[int | None]("pageNumber", page_number)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ExtensionListResponse],
            error_mapper=list_extensions_extensions_get_error_mapper,
            request_options=request_options,
        )

    def upload_extension_extensions_post(
        self, file: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExtensionView, UploadExtensionExtensionsPostErrorBody]:
        """Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/extensions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ExtensionView],
            error_mapper=upload_extension_extensions_post_error_mapper,
            request_options=request_options,
        )


class AsyncExtensionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_extension_extensions_extension_id_delete(
        self, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteExtensionExtensionsExtensionIdDeleteErrorBody]:
        """Permanently delete an extension without affecting running browsers.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/extensions/{extension_id}"),
            path_params=[param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=delete_extension_extensions_extension_id_delete_error_mapper,
            request_options=request_options,
        )

    async def get_extension_extensions_extension_id_get(
        self, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExtensionView, GetExtensionExtensionsExtensionIdGetErrorBody]:
        """Get an uploaded extension by its ID.

        Args:
            extension_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/extensions/{extension_id}"),
            path_params=[param[UUID]("extension_id", extension_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ExtensionView],
            error_mapper=get_extension_extensions_extension_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_extensions_extensions_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExtensionListResponse, ListExtensionsExtensionsGetErrorBody]:
        """List the extensions uploaded to this project.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/extensions"),
            query_params=[param[int | None]("pageSize", page_size), param[int | None]("pageNumber", page_number)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ExtensionListResponse],
            error_mapper=list_extensions_extensions_get_error_mapper,
            request_options=request_options,
        )

    async def upload_extension_extensions_post(
        self, file: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExtensionView, UploadExtensionExtensionsPostErrorBody]:
        """Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/extensions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ExtensionView],
            error_mapper=upload_extension_extensions_post_error_mapper,
            request_options=request_options,
        )
