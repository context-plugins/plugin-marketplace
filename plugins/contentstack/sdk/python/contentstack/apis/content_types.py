from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.create_content_type_error import CreateContentTypeErrorBody, create_content_type_error_mapper
from ..errors.delete_content_type_error import DeleteContentTypeErrorBody, delete_content_type_error_mapper
from ..errors.get_all_content_types_error import GetAllContentTypesErrorBody, get_all_content_types_error_mapper
from ..errors.get_single_content_type_error import GetSingleContentTypeErrorBody, get_single_content_type_error_mapper
from ..errors.update_content_type_error import UpdateContentTypeErrorBody, update_content_type_error_mapper
from ..models.content_type import ContentType
from ..models.content_type2 import ContentType2
from ..models.content_type_list import ContentTypeList
from ..models.create_content_type_request import CreateContentTypeRequest, CreateContentTypeRequestDict
from ..server.server import Server


class ContentTypes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContentTypesWithRawResponse(client, server, auth)

    def create_content_type(
        self,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContentType2:
        """Creates a new content type in the stack with a defined schema of fields. The schema determines the structure
        of all entries created from this content type.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created content type.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(self._with_raw_response.create_content_type(api_key, body, request_options=request_options))

    def delete_content_type(
        self, content_type_uid: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a content type from the stack. All entries of this content type must be deleted before
        the content type can be removed.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Content type deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.delete_content_type(content_type_uid, api_key, request_options=request_options)
        )

    def get_all_content_types(
        self,
        api_key: str,
        access_token: str,
        *,
        include_count: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContentTypeList:
        """Retrieves comprehensive information of all content types available in a stack. Supports include_count
        parameter to return the total count of content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            include_count: Set to true to include the total count of content types in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of content types in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_all_content_types(
                api_key, access_token, include_count=include_count, request_options=request_options
            ),
        )

    def get_single_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContentType:
        """Returns detailed information for a specific content type identified by its UID, including all field
        definitions and schema metadata.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            version: Retrieve a specific version of the content type schema.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Details of the specified content type.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_single_content_type(
                content_type_uid, api_key, access_token, version=version, request_options=request_options
            ),
        )

    def update_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContentType2:
        """Updates the schema and options of an existing content type. Changes to the schema may affect existing entries
        that use this content type.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated content type.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_content_type(
                content_type_uid, api_key, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ContentTypesWithRawResponse:
        return self._with_raw_response


class AsyncContentTypes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContentTypesWithRawResponse(client, server, auth)

    async def create_content_type(
        self,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContentType2:
        """Creates a new content type in the stack with a defined schema of fields. The schema determines the structure
        of all entries created from this content type.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created content type.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_content_type(api_key, body, request_options=request_options))

    async def delete_content_type(
        self, content_type_uid: str, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a content type from the stack. All entries of this content type must be deleted before
        the content type can be removed.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Content type deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_content_type(
                content_type_uid, api_key, request_options=request_options
            ),
        )

    async def get_all_content_types(
        self,
        api_key: str,
        access_token: str,
        *,
        include_count: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContentTypeList:
        """Retrieves comprehensive information of all content types available in a stack. Supports include_count
        parameter to return the total count of content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            include_count: Set to true to include the total count of content types in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of content types in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_content_types(
                api_key, access_token, include_count=include_count, request_options=request_options
            ),
        )

    async def get_single_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        version: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContentType:
        """Returns detailed information for a specific content type identified by its UID, including all field
        definitions and schema metadata.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            version: Retrieve a specific version of the content type schema.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Details of the specified content type.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_single_content_type(
                content_type_uid, api_key, access_token, version=version, request_options=request_options
            ),
        )

    async def update_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContentType2:
        """Updates the schema and options of an existing content type. Changes to the schema may affect existing entries
        that use this content type.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated content type.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_content_type(
                content_type_uid, api_key, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncContentTypesWithRawResponse:
        return self._with_raw_response


class ContentTypesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_content_type(
        self,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentType2, CreateContentTypeErrorBody]:
        """Creates a new content type in the stack with a defined schema of fields. The schema determines the structure
        of all entries created from this content type.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api("/content_types"),
            headers=[param[str]("api_key", api_key), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContentTypeRequest | CreateContentTypeRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[ContentType2],
            error_mapper=create_content_type_error_mapper,
            request_options=request_options,
        )

    def delete_content_type(
        self, content_type_uid: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteContentTypeErrorBody]:
        """Permanently deletes a content type from the stack. All entries of this content type must be deleted before
        the content type can be removed.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            headers=[param[str]("api_key", api_key), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=empty_response,
            error_mapper=delete_content_type_error_mapper,
            request_options=request_options,
        )

    def get_all_content_types(
        self,
        api_key: str,
        access_token: str,
        *,
        include_count: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentTypeList, GetAllContentTypesErrorBody]:
        """Retrieves comprehensive information of all content types available in a stack. Supports include_count
        parameter to return the total count of content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            include_count: Set to true to include the total count of content types in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/content_types"),
            query_params=[param[bool | None]("include_count", include_count)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[ContentTypeList],
            error_mapper=get_all_content_types_error_mapper,
            request_options=request_options,
        )

    def get_single_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentType, GetSingleContentTypeErrorBody]:
        """Returns detailed information for a specific content type identified by its UID, including all field
        definitions and schema metadata.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            version: Retrieve a specific version of the content type schema.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            query_params=[param[int | None]("version", version)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[ContentType],
            error_mapper=get_single_content_type_error_mapper,
            request_options=request_options,
        )

    def update_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentType2, UpdateContentTypeErrorBody]:
        """Updates the schema and options of an existing content type. Changes to the schema may affect existing entries
        that use this content type.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            headers=[param[str]("api_key", api_key), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContentTypeRequest | CreateContentTypeRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[ContentType2],
            error_mapper=update_content_type_error_mapper,
            request_options=request_options,
        )


class AsyncContentTypesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_content_type(
        self,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentType2, CreateContentTypeErrorBody]:
        """Creates a new content type in the stack with a defined schema of fields. The schema determines the structure
        of all entries created from this content type.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api("/content_types"),
            headers=[param[str]("api_key", api_key), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContentTypeRequest | CreateContentTypeRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[ContentType2],
            error_mapper=create_content_type_error_mapper,
            request_options=request_options,
        )

    async def delete_content_type(
        self, content_type_uid: str, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteContentTypeErrorBody]:
        """Permanently deletes a content type from the stack. All entries of this content type must be deleted before
        the content type can be removed.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            headers=[param[str]("api_key", api_key), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_empty_response,
            error_mapper=delete_content_type_error_mapper,
            request_options=request_options,
        )

    async def get_all_content_types(
        self,
        api_key: str,
        access_token: str,
        *,
        include_count: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentTypeList, GetAllContentTypesErrorBody]:
        """Retrieves comprehensive information of all content types available in a stack. Supports include_count
        parameter to return the total count of content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            include_count: Set to true to include the total count of content types in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/content_types"),
            query_params=[param[bool | None]("include_count", include_count)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[ContentTypeList],
            error_mapper=get_all_content_types_error_mapper,
            request_options=request_options,
        )

    async def get_single_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        version: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentType, GetSingleContentTypeErrorBody]:
        """Returns detailed information for a specific content type identified by its UID, including all field
        definitions and schema metadata.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            version: Retrieve a specific version of the content type schema.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            query_params=[param[int | None]("version", version)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[ContentType],
            error_mapper=get_single_content_type_error_mapper,
            request_options=request_options,
        )

    async def update_content_type(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateContentTypeRequest | CreateContentTypeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentType2, UpdateContentTypeErrorBody]:
        """Updates the schema and options of an existing content type. Changes to the schema may affect existing entries
        that use this content type.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            headers=[param[str]("api_key", api_key), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContentTypeRequest | CreateContentTypeRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[ContentType2],
            error_mapper=update_content_type_error_mapper,
            request_options=request_options,
        )
