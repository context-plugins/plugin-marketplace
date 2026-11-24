from __future__ import annotations

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_attribute_error import CreateAttributeErrorBody, create_attribute_error_mapper
from ..errors.delete_attribute_error import DeleteAttributeErrorBody, delete_attribute_error_mapper
from ..errors.get_all_attributes_error import GetAllAttributesErrorBody, get_all_attributes_error_mapper
from ..errors.update_attribute_error import UpdateAttributeErrorBody, update_attribute_error_mapper
from ..models.attribute import Attribute
from ..models.attribute_list import AttributeList
from ..models.create_attribute_request import CreateAttributeRequest, CreateAttributeRequestDict
from ..server.server import Server


class Attributes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AttributesWithRawResponse(client, server, auth)

    def create_attribute(
        self,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Attribute:
        """Creates a new user attribute definition in the Personalize project. Attributes can be of various types
        including string, number, boolean, and date, and are used to build audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created attribute.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.create_attribute(x_project_uid, body, request_options=request_options))

    def delete_attribute(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot
        be deleted until those references are removed.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Attribute deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.delete_attribute(id_, x_project_uid, request_options=request_options))

    def get_all_attributes(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AttributeList:
        """Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build
        audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all attributes in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_all_attributes(x_project_uid, request_options=request_options))

    def update_attribute(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Attribute:
        """Updates the configuration of an existing attribute in the Personalize project including its name, key, and
        data type.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated attribute.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_attribute(id_, x_project_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AttributesWithRawResponse:
        return self._with_raw_response


class AsyncAttributes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAttributesWithRawResponse(client, server, auth)

    async def create_attribute(
        self,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Attribute:
        """Creates a new user attribute definition in the Personalize project. Attributes can be of various types
        including string, number, boolean, and date, and are used to build audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created attribute.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_attribute(x_project_uid, body, request_options=request_options)
        )

    async def delete_attribute(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot
        be deleted until those references are removed.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Attribute deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_attribute(id_, x_project_uid, request_options=request_options)
        )

    async def get_all_attributes(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AttributeList:
        """Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build
        audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all attributes in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_all_attributes(x_project_uid, request_options=request_options))

    async def update_attribute(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Attribute:
        """Updates the configuration of an existing attribute in the Personalize project including its name, key, and
        data type.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated attribute.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_attribute(id_, x_project_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAttributesWithRawResponse:
        return self._with_raw_response


class AttributesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_attribute(
        self,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Attribute, CreateAttributeErrorBody]:
        """Creates a new user attribute definition in the Personalize project. Attributes can be of various types
        including string, number, boolean, and date, and are used to build audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAttributeRequest | CreateAttributeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Attribute],
            error_mapper=create_attribute_error_mapper,
            request_options=request_options,
        )

    def delete_attribute(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAttributeErrorBody]:
        """Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot
        be deleted until those references are removed.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_attribute_error_mapper,
            request_options=request_options,
        )

    def get_all_attributes(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AttributeList, GetAllAttributesErrorBody]:
        """Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build
        audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[AttributeList],
            error_mapper=get_all_attributes_error_mapper,
            request_options=request_options,
        )

    def update_attribute(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Attribute, UpdateAttributeErrorBody]:
        """Updates the configuration of an existing attribute in the Personalize project including its name, key, and
        data type.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAttributeRequest | CreateAttributeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Attribute],
            error_mapper=update_attribute_error_mapper,
            request_options=request_options,
        )


class AsyncAttributesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_attribute(
        self,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Attribute, CreateAttributeErrorBody]:
        """Creates a new user attribute definition in the Personalize project. Attributes can be of various types
        including string, number, boolean, and date, and are used to build audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAttributeRequest | CreateAttributeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Attribute],
            error_mapper=create_attribute_error_mapper,
            request_options=request_options,
        )

    async def delete_attribute(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAttributeErrorBody]:
        """Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot
        be deleted until those references are removed.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_attribute_error_mapper,
            request_options=request_options,
        )

    async def get_all_attributes(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AttributeList, GetAllAttributesErrorBody]:
        """Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build
        audience segment rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[AttributeList],
            error_mapper=get_all_attributes_error_mapper,
            request_options=request_options,
        )

    async def update_attribute(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAttributeRequest | CreateAttributeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Attribute, UpdateAttributeErrorBody]:
        """Updates the configuration of an existing attribute in the Personalize project including its name, key, and
        data type.

        Args:
            id_: The unique identifier of the attribute.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/attributes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAttributeRequest | CreateAttributeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Attribute],
            error_mapper=update_attribute_error_mapper,
            request_options=request_options,
        )
