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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_attributes_attribute_id_error import (
    DeleteApiV1AttributesAttributeIdErrorBody,
    delete_api_v1_attributes_attribute_id_error_mapper,
)
from ..errors.get_api_v1_attributes_error import GetApiV1AttributesErrorBody, get_api_v1_attributes_error_mapper
from ..errors.post_api_v1_attributes_attribute_id_error import (
    PostApiV1AttributesAttributeIdErrorBody,
    post_api_v1_attributes_attribute_id_error_mapper,
)
from ..errors.post_api_v1_attributes_error import PostApiV1AttributesErrorBody, post_api_v1_attributes_error_mapper
from ..models.enums.attribute_resource_type_dto import AttributeResourceTypeDtoOrStr
from ..models.public_api_create_attribute_request_dto import (
    PublicApiCreateAttributeRequestDto,
    PublicApiCreateAttributeRequestDtoDict,
)
from ..models.public_api_create_attribute_response import PublicApiCreateAttributeResponse
from ..models.public_api_delete_attribute_response import PublicApiDeleteAttributeResponse
from ..models.public_api_list_attributes_response import PublicApiListAttributesResponse
from ..models.public_api_update_attribute_request_dto import (
    PublicApiUpdateAttributeRequestDto,
    PublicApiUpdateAttributeRequestDtoDict,
)
from ..models.public_api_update_attribute_response import PublicApiUpdateAttributeResponse
from ..server.server import Server


class Attributes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AttributesWithRawResponse(client, server, auth)

    def delete_api_v1_attributes_attribute_id(
        self, attribute_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteAttributeResponse:
        """This endpoint enables you to delete an existing attribute from your organization's Soda Cloud account.

        The attribute will be removed from any resources where it is set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_attributes_attribute_id(attribute_id, request_options=request_options)
        )

    def get_api_v1_attributes(
        self,
        *,
        page: int | None = None,
        resource_type: AttributeResourceTypeDtoOrStr | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListAttributesResponse:
        """This endpoint enables you to list the attributes available in your organization's Soda Cloud account.

        Optionally filter by resource type using the ``resourceType`` query parameter.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``resourceType``: Optional. Filter by resource type (``dataset``, ``check``, or ``column``).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Attributes``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            resource_type: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_attributes(
                page=page, resource_type=resource_type, size=size, request_options=request_options
            ),
        )

    def post_api_v1_attributes(
        self,
        body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiCreateAttributeResponse:
        """This endpoint enables you to create a new attribute in your organization's Soda Cloud account.

        Attributes are scoped to a resource type (dataset, check, or column). Once an attribute is created, it can be
        set on the associated resource type. Attributes can be used to configure notification rules, dashboards,
        filters, etc. For example sending email alerts when checks marked as critical fail.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_attributes(body, request_options=request_options))

    def post_api_v1_attributes_attribute_id(
        self,
        attribute_id: str,
        body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateAttributeResponse:
        """This endpoint enables you to update an existing attribute in your organization's Soda Cloud account.

        Only label, description, and allowedValues (for select types) can be updated.

        When updating allowedValues, existing attribute values on resources are left in place, even if they are no
        longer in the allowed set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_attributes_attribute_id(
                attribute_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AttributesWithRawResponse:
        return self._with_raw_response


class AsyncAttributes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAttributesWithRawResponse(client, server, auth)

    async def delete_api_v1_attributes_attribute_id(
        self, attribute_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteAttributeResponse:
        """This endpoint enables you to delete an existing attribute from your organization's Soda Cloud account.

        The attribute will be removed from any resources where it is set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_attributes_attribute_id(
                attribute_id, request_options=request_options
            ),
        )

    async def get_api_v1_attributes(
        self,
        *,
        page: int | None = None,
        resource_type: AttributeResourceTypeDtoOrStr | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListAttributesResponse:
        """This endpoint enables you to list the attributes available in your organization's Soda Cloud account.

        Optionally filter by resource type using the ``resourceType`` query parameter.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``resourceType``: Optional. Filter by resource type (``dataset``, ``check``, or ``column``).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Attributes``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            resource_type: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_attributes(
                page=page, resource_type=resource_type, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_attributes(
        self,
        body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiCreateAttributeResponse:
        """This endpoint enables you to create a new attribute in your organization's Soda Cloud account.

        Attributes are scoped to a resource type (dataset, check, or column). Once an attribute is created, it can be
        set on the associated resource type. Attributes can be used to configure notification rules, dashboards,
        filters, etc. For example sending email alerts when checks marked as critical fail.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_attributes(body, request_options=request_options))

    async def post_api_v1_attributes_attribute_id(
        self,
        attribute_id: str,
        body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateAttributeResponse:
        """This endpoint enables you to update an existing attribute in your organization's Soda Cloud account.

        Only label, description, and allowedValues (for select types) can be updated.

        When updating allowedValues, existing attribute values on resources are left in place, even if they are no
        longer in the allowed set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_attributes_attribute_id(
                attribute_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAttributesWithRawResponse:
        return self._with_raw_response


class AttributesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_attributes_attribute_id(
        self, attribute_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteAttributeResponse, DeleteApiV1AttributesAttributeIdErrorBody]:
        """This endpoint enables you to delete an existing attribute from your organization's Soda Cloud account.

        The attribute will be removed from any resources where it is set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/attributes/{attributeId}"),
            path_params=[param[str]("attributeId", attribute_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteAttributeResponse],
            error_mapper=delete_api_v1_attributes_attribute_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_attributes(
        self,
        *,
        page: int | None = None,
        resource_type: AttributeResourceTypeDtoOrStr | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListAttributesResponse, GetApiV1AttributesErrorBody]:
        """This endpoint enables you to list the attributes available in your organization's Soda Cloud account.

        Optionally filter by resource type using the ``resourceType`` query parameter.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``resourceType``: Optional. Filter by resource type (``dataset``, ``check``, or ``column``).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Attributes``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            resource_type: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/attributes"),
            query_params=[
                param[int | None]("page", page),
                param[AttributeResourceTypeDtoOrStr | None]("resourceType", resource_type),
                param[int | None]("size", size),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListAttributesResponse],
            error_mapper=get_api_v1_attributes_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_attributes(
        self,
        body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateAttributeResponse, PostApiV1AttributesErrorBody]:
        """This endpoint enables you to create a new attribute in your organization's Soda Cloud account.

        Attributes are scoped to a resource type (dataset, check, or column). Once an attribute is created, it can be
        set on the associated resource type. Attributes can be used to configure notification rules, dashboards,
        filters, etc. For example sending email alerts when checks marked as critical fail.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/attributes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateAttributeResponse],
            error_mapper=post_api_v1_attributes_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_attributes_attribute_id(
        self,
        attribute_id: str,
        body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateAttributeResponse, PostApiV1AttributesAttributeIdErrorBody]:
        """This endpoint enables you to update an existing attribute in your organization's Soda Cloud account.

        Only label, description, and allowedValues (for select types) can be updated.

        When updating allowedValues, existing attribute values on resources are left in place, even if they are no
        longer in the allowed set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/attributes/{attributeId}"),
            path_params=[param[str]("attributeId", attribute_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateAttributeResponse],
            error_mapper=post_api_v1_attributes_attribute_id_error_mapper,
            request_options=request_options,
        )


class AsyncAttributesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_attributes_attribute_id(
        self, attribute_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteAttributeResponse, DeleteApiV1AttributesAttributeIdErrorBody]:
        """This endpoint enables you to delete an existing attribute from your organization's Soda Cloud account.

        The attribute will be removed from any resources where it is set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/attributes/{attributeId}"),
            path_params=[param[str]("attributeId", attribute_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteAttributeResponse],
            error_mapper=delete_api_v1_attributes_attribute_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_attributes(
        self,
        *,
        page: int | None = None,
        resource_type: AttributeResourceTypeDtoOrStr | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListAttributesResponse, GetApiV1AttributesErrorBody]:
        """This endpoint enables you to list the attributes available in your organization's Soda Cloud account.

        Optionally filter by resource type using the ``resourceType`` query parameter.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        - ``resourceType``: Optional. Filter by resource type (``dataset``, ``check``, or ``column``).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Attributes``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            resource_type: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/attributes"),
            query_params=[
                param[int | None]("page", page),
                param[AttributeResourceTypeDtoOrStr | None]("resourceType", resource_type),
                param[int | None]("size", size),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListAttributesResponse],
            error_mapper=get_api_v1_attributes_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_attributes(
        self,
        body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateAttributeResponse, PostApiV1AttributesErrorBody]:
        """This endpoint enables you to create a new attribute in your organization's Soda Cloud account.

        Attributes are scoped to a resource type (dataset, check, or column). Once an attribute is created, it can be
        set on the associated resource type. Attributes can be used to configure notification rules, dashboards,
        filters, etc. For example sending email alerts when checks marked as critical fail.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/attributes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateAttributeResponse],
            error_mapper=post_api_v1_attributes_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_attributes_attribute_id(
        self,
        attribute_id: str,
        body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateAttributeResponse, PostApiV1AttributesAttributeIdErrorBody]:
        """This endpoint enables you to update an existing attribute in your organization's Soda Cloud account.

        Only label, description, and allowedValues (for select types) can be updated.

        When updating allowedValues, existing attribute values on resources are left in place, even if they are no
        longer in the allowed set.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

        ## Tags

        ``Attributes``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            attribute_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/attributes/{attributeId}"),
            path_params=[param[str]("attributeId", attribute_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateAttributeResponse],
            error_mapper=post_api_v1_attributes_attribute_id_error_mapper,
            request_options=request_options,
        )
