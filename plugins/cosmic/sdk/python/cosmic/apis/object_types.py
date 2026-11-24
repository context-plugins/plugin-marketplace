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
from ..errors.create_object_type_error import CreateObjectTypeErrorBody, create_object_type_error_mapper
from ..errors.delete_object_type_error import DeleteObjectTypeErrorBody, delete_object_type_error_mapper
from ..errors.get_object_type_error import GetObjectTypeErrorBody, get_object_type_error_mapper
from ..errors.list_object_types_error import ListObjectTypesErrorBody, list_object_types_error_mapper
from ..errors.update_object_type_error import UpdateObjectTypeErrorBody, update_object_type_error_mapper
from ..models.message_response import MessageResponse
from ..models.object_type_create import ObjectTypeCreate, ObjectTypeCreateDict
from ..models.object_type_list_response import ObjectTypeListResponse
from ..models.object_type_response import ObjectTypeResponse
from ..models.object_type_update import ObjectTypeUpdate, ObjectTypeUpdateDict
from ..server.server import Server


class ObjectTypes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ObjectTypesWithRawResponse(client, server, auth)

    def create_object_type(
        self,
        slug: str,
        body: ObjectTypeCreate | ObjectTypeCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectTypeResponse:
        """Create a new Object type, defining the content model that its Objects will follow. Only ``title`` is
        required; the ``slug`` is derived from the title when omitted. Define ``metafields`` here so that Objects
        created in this type can carry the corresponding ``metadata`` values.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created Object type.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_object_type(slug, body, request_options=request_options))

    def delete_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm
        with the user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object type was deleted.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_object_type(
                slug, type_slug, trigger_webhook=trigger_webhook, request_options=request_options
            ),
        )

    def get_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectTypeResponse:
        """Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know
        the type and want its field definitions without listing every type in the Bucket.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Object type.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_object_type(
                slug, type_slug, read_key=read_key, pretty=pretty, request_options=request_options
            ),
        )

    def list_object_types(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectTypeListResponse:
        """Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the
        content model before creating or querying Objects: the ``slug`` of each type is what you pass as ``type`` in
        Object queries, and the ``metafields`` array tells you which ``metadata`` keys an Object of that type accepts.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object types in the Bucket.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_object_types(
                slug, read_key=read_key, pretty=pretty, request_options=request_options
            ),
        )

    def update_object_type(
        self,
        slug: str,
        type_slug: str,
        body: ObjectTypeUpdate | ObjectTypeUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectTypeResponse:
        """Update an Object type in place. Only the properties you send are changed. Sending ``metafields`` replaces the
        whole array, so read the type first and send the complete list rather than only the field you want to alter.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Object type.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_object_type(slug, type_slug, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ObjectTypesWithRawResponse:
        return self._with_raw_response


class AsyncObjectTypes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncObjectTypesWithRawResponse(client, server, auth)

    async def create_object_type(
        self,
        slug: str,
        body: ObjectTypeCreate | ObjectTypeCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectTypeResponse:
        """Create a new Object type, defining the content model that its Objects will follow. Only ``title`` is
        required; the ``slug`` is derived from the title when omitted. Define ``metafields`` here so that Objects
        created in this type can carry the corresponding ``metadata`` values.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created Object type.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_object_type(slug, body, request_options=request_options))

    async def delete_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm
        with the user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object type was deleted.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_object_type(
                slug, type_slug, trigger_webhook=trigger_webhook, request_options=request_options
            ),
        )

    async def get_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectTypeResponse:
        """Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know
        the type and want its field definitions without listing every type in the Bucket.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Object type.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_object_type(
                slug, type_slug, read_key=read_key, pretty=pretty, request_options=request_options
            ),
        )

    async def list_object_types(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectTypeListResponse:
        """Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the
        content model before creating or querying Objects: the ``slug`` of each type is what you pass as ``type`` in
        Object queries, and the ``metafields`` array tells you which ``metadata`` keys an Object of that type accepts.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object types in the Bucket.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_object_types(
                slug, read_key=read_key, pretty=pretty, request_options=request_options
            ),
        )

    async def update_object_type(
        self,
        slug: str,
        type_slug: str,
        body: ObjectTypeUpdate | ObjectTypeUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectTypeResponse:
        """Update an Object type in place. Only the properties you send are changed. Sending ``metafields`` replaces the
        whole array, so read the type first and send the complete list rather than only the field you want to alter.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Object type.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_object_type(slug, type_slug, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncObjectTypesWithRawResponse:
        return self._with_raw_response


class ObjectTypesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_object_type(
        self,
        slug: str,
        body: ObjectTypeCreate | ObjectTypeCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeResponse, CreateObjectTypeErrorBody]:
        """Create a new Object type, defining the content model that its Objects will follow. Only ``title`` is
        required; the ``slug`` is derived from the title when omitted. Define ``metafields`` here so that Objects
        created in this type can carry the corresponding ``metadata`` values.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/object-types"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectTypeCreate | ObjectTypeCreateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[ObjectTypeResponse],
            error_mapper=create_object_type_error_mapper,
            request_options=request_options,
        )

    def delete_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, DeleteObjectTypeErrorBody]:
        """Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm
        with the user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/buckets/{slug}/object-types/{type_slug}"),
            path_params=[param[str]("slug", slug), param[str]("type_slug", type_slug)],
            query_params=[param[bool | None]("trigger_webhook", trigger_webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_object_type_error_mapper,
            request_options=request_options,
        )

    def get_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeResponse, GetObjectTypeErrorBody]:
        """Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know
        the type and want its field definitions without listing every type in the Bucket.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/object-types/{type_slug}"),
            path_params=[param[str]("slug", slug), param[str]("type_slug", type_slug)],
            query_params=[param[str | None]("read_key", read_key), param[bool | None]("pretty", pretty)],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[ObjectTypeResponse],
            error_mapper=get_object_type_error_mapper,
            request_options=request_options,
        )

    def list_object_types(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeListResponse, ListObjectTypesErrorBody]:
        """Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the
        content model before creating or querying Objects: the ``slug`` of each type is what you pass as ``type`` in
        Object queries, and the ``metafields`` array tells you which ``metadata`` keys an Object of that type accepts.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/object-types"),
            path_params=[param[str]("slug", slug)],
            query_params=[param[str | None]("read_key", read_key), param[bool | None]("pretty", pretty)],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[ObjectTypeListResponse],
            error_mapper=list_object_types_error_mapper,
            request_options=request_options,
        )

    def update_object_type(
        self,
        slug: str,
        type_slug: str,
        body: ObjectTypeUpdate | ObjectTypeUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeResponse, UpdateObjectTypeErrorBody]:
        """Update an Object type in place. Only the properties you send are changed. Sending ``metafields`` replaces the
        whole array, so read the type first and send the complete list rather than only the field you want to alter.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/buckets/{slug}/object-types/{type_slug}"),
            path_params=[param[str]("slug", slug), param[str]("type_slug", type_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectTypeUpdate | ObjectTypeUpdateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[ObjectTypeResponse],
            error_mapper=update_object_type_error_mapper,
            request_options=request_options,
        )


class AsyncObjectTypesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_object_type(
        self,
        slug: str,
        body: ObjectTypeCreate | ObjectTypeCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeResponse, CreateObjectTypeErrorBody]:
        """Create a new Object type, defining the content model that its Objects will follow. Only ``title`` is
        required; the ``slug`` is derived from the title when omitted. Define ``metafields`` here so that Objects
        created in this type can carry the corresponding ``metadata`` values.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/object-types"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectTypeCreate | ObjectTypeCreateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[ObjectTypeResponse],
            error_mapper=create_object_type_error_mapper,
            request_options=request_options,
        )

    async def delete_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, DeleteObjectTypeErrorBody]:
        """Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm
        with the user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/buckets/{slug}/object-types/{type_slug}"),
            path_params=[param[str]("slug", slug), param[str]("type_slug", type_slug)],
            query_params=[param[bool | None]("trigger_webhook", trigger_webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_object_type_error_mapper,
            request_options=request_options,
        )

    async def get_object_type(
        self,
        slug: str,
        type_slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeResponse, GetObjectTypeErrorBody]:
        """Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know
        the type and want its field definitions without listing every type in the Bucket.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/object-types/{type_slug}"),
            path_params=[param[str]("slug", slug), param[str]("type_slug", type_slug)],
            query_params=[param[str | None]("read_key", read_key), param[bool | None]("pretty", pretty)],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[ObjectTypeResponse],
            error_mapper=get_object_type_error_mapper,
            request_options=request_options,
        )

    async def list_object_types(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeListResponse, ListObjectTypesErrorBody]:
        """Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the
        content model before creating or querying Objects: the ``slug`` of each type is what you pass as ``type`` in
        Object queries, and the ``metafields`` array tells you which ``metadata`` keys an Object of that type accepts.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/object-types"),
            path_params=[param[str]("slug", slug)],
            query_params=[param[str | None]("read_key", read_key), param[bool | None]("pretty", pretty)],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[ObjectTypeListResponse],
            error_mapper=list_object_types_error_mapper,
            request_options=request_options,
        )

    async def update_object_type(
        self,
        slug: str,
        type_slug: str,
        body: ObjectTypeUpdate | ObjectTypeUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectTypeResponse, UpdateObjectTypeErrorBody]:
        """Update an Object type in place. Only the properties you send are changed. Sending ``metafields`` replaces the
        whole array, so read the type first and send the complete list rather than only the field you want to alter.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            type_slug: The Object type slug, unique within the Bucket.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/buckets/{slug}/object-types/{type_slug}"),
            path_params=[param[str]("slug", slug), param[str]("type_slug", type_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectTypeUpdate | ObjectTypeUpdateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[ObjectTypeResponse],
            error_mapper=update_object_type_error_mapper,
            request_options=request_options,
        )
