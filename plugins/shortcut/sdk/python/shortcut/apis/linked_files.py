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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_linked_file_error import CreateLinkedFileErrorBody, create_linked_file_error_mapper
from ..errors.delete_linked_file_error import DeleteLinkedFileErrorBody, delete_linked_file_error_mapper
from ..errors.get_linked_file_error import GetLinkedFileErrorBody, get_linked_file_error_mapper
from ..errors.list_linked_files_error import ListLinkedFilesErrorBody, list_linked_files_error_mapper
from ..errors.update_linked_file_error import UpdateLinkedFileErrorBody, update_linked_file_error_mapper
from ..models.create_linked_file import CreateLinkedFile, CreateLinkedFileDict
from ..models.linked_file import LinkedFile
from ..models.update_linked_file import UpdateLinkedFile, UpdateLinkedFileDict
from ..server.server import Server


class LinkedFiles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LinkedFilesWithRawResponse(client, server, auth)

    def create_linked_file(
        self, body: CreateLinkedFile | CreateLinkedFileDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> LinkedFile:
        """Create Linked File allows you to create a new Linked File in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_linked_file(body, request_options=request_options))

    def delete_linked_file(
        self, linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete Linked File can be used to delete any previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_linked_file(linked_file_public_id, request_options=request_options)
        )

    def get_linked_file(
        self, linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> LinkedFile:
        """Get File returns information about the selected Linked File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_linked_file(linked_file_public_id, request_options=request_options))

    def list_linked_files(self, *, request_options: RequestOptionsOrDict | None = None) -> list[LinkedFile]:
        """List Linked Files returns a list of all Linked-Files and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_linked_files(request_options=request_options))

    def update_linked_file(
        self,
        linked_file_public_id: int,
        body: UpdateLinkedFile | UpdateLinkedFileDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LinkedFile:
        """Updated Linked File allows you to update properties of a previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_linked_file(linked_file_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> LinkedFilesWithRawResponse:
        return self._with_raw_response


class AsyncLinkedFiles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLinkedFilesWithRawResponse(client, server, auth)

    async def create_linked_file(
        self, body: CreateLinkedFile | CreateLinkedFileDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinkedFile:
        """Create Linked File allows you to create a new Linked File in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_linked_file(body, request_options=request_options))

    async def delete_linked_file(
        self, linked_file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Linked File can be used to delete any previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_linked_file(linked_file_public_id, request_options=request_options)
        )

    async def get_linked_file(
        self, linked_file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinkedFile:
        """Get File returns information about the selected Linked File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_linked_file(linked_file_public_id, request_options=request_options)
        )

    async def list_linked_files(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[LinkedFile]:
        """List Linked Files returns a list of all Linked-Files and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_linked_files(request_options=request_options))

    async def update_linked_file(
        self,
        linked_file_public_id: int,
        body: UpdateLinkedFile | UpdateLinkedFileDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkedFile:
        """Updated Linked File allows you to update properties of a previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_linked_file(
                linked_file_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLinkedFilesWithRawResponse:
        return self._with_raw_response


class LinkedFilesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_linked_file(
        self, body: CreateLinkedFile | CreateLinkedFileDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedFile, CreateLinkedFileErrorBody]:
        """Create Linked File allows you to create a new Linked File in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/linked-files"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLinkedFile | CreateLinkedFileDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[LinkedFile],
            error_mapper=create_linked_file_error_mapper,
            request_options=request_options,
        )

    def delete_linked_file(
        self, linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLinkedFileErrorBody]:
        """Delete Linked File can be used to delete any previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/linked-files/{linked-file-public-id}"),
            path_params=[param[int]("linked-file-public-id", linked_file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_linked_file_error_mapper,
            request_options=request_options,
        )

    def get_linked_file(
        self, linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedFile, GetLinkedFileErrorBody]:
        """Get File returns information about the selected Linked File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/linked-files/{linked-file-public-id}"),
            path_params=[param[int]("linked-file-public-id", linked_file_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[LinkedFile],
            error_mapper=get_linked_file_error_mapper,
            request_options=request_options,
        )

    def list_linked_files(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[LinkedFile], ListLinkedFilesErrorBody]:
        """List Linked Files returns a list of all Linked-Files and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/linked-files"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[LinkedFile]],
            error_mapper=list_linked_files_error_mapper,
            request_options=request_options,
        )

    def update_linked_file(
        self,
        linked_file_public_id: int,
        body: UpdateLinkedFile | UpdateLinkedFileDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedFile, UpdateLinkedFileErrorBody]:
        """Updated Linked File allows you to update properties of a previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/linked-files/{linked-file-public-id}"),
            path_params=[param[int]("linked-file-public-id", linked_file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateLinkedFile | UpdateLinkedFileDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[LinkedFile],
            error_mapper=update_linked_file_error_mapper,
            request_options=request_options,
        )


class AsyncLinkedFilesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_linked_file(
        self, body: CreateLinkedFile | CreateLinkedFileDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedFile, CreateLinkedFileErrorBody]:
        """Create Linked File allows you to create a new Linked File in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/linked-files"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLinkedFile | CreateLinkedFileDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[LinkedFile],
            error_mapper=create_linked_file_error_mapper,
            request_options=request_options,
        )

    async def delete_linked_file(
        self, linked_file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLinkedFileErrorBody]:
        """Delete Linked File can be used to delete any previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/linked-files/{linked-file-public-id}"),
            path_params=[param[int]("linked-file-public-id", linked_file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_linked_file_error_mapper,
            request_options=request_options,
        )

    async def get_linked_file(
        self, linked_file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedFile, GetLinkedFileErrorBody]:
        """Get File returns information about the selected Linked File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/linked-files/{linked-file-public-id}"),
            path_params=[param[int]("linked-file-public-id", linked_file_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[LinkedFile],
            error_mapper=get_linked_file_error_mapper,
            request_options=request_options,
        )

    async def list_linked_files(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[LinkedFile], ListLinkedFilesErrorBody]:
        """List Linked Files returns a list of all Linked-Files and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/linked-files"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[LinkedFile]],
            error_mapper=list_linked_files_error_mapper,
            request_options=request_options,
        )

    async def update_linked_file(
        self,
        linked_file_public_id: int,
        body: UpdateLinkedFile | UpdateLinkedFileDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedFile, UpdateLinkedFileErrorBody]:
        """Updated Linked File allows you to update properties of a previously attached Linked-File.

        Args:
            linked_file_public_id: The unique identifier of the linked file.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/linked-files/{linked-file-public-id}"),
            path_params=[param[int]("linked-file-public-id", linked_file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateLinkedFile | UpdateLinkedFileDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[LinkedFile],
            error_mapper=update_linked_file_error_mapper,
            request_options=request_options,
        )
