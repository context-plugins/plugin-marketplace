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
from ..errors.batch_objects_error import BatchObjectsErrorBody, batch_objects_error_mapper
from ..errors.create_object_error import CreateObjectErrorBody, create_object_error_mapper
from ..errors.delete_object_error import DeleteObjectErrorBody, delete_object_error_mapper
from ..errors.get_object_error import GetObjectErrorBody, get_object_error_mapper
from ..errors.list_objects_error import ListObjectsErrorBody, list_objects_error_mapper
from ..errors.update_object_error import UpdateObjectErrorBody, update_object_error_mapper
from ..models.batch_request import BatchRequest, BatchRequestDict
from ..models.batch_response import BatchResponse
from ..models.enums.status4 import Status4, Status4OrStr
from ..models.message_response import MessageResponse
from ..models.object_create import ObjectCreate, ObjectCreateDict
from ..models.object_list_response import ObjectListResponse
from ..models.object_response import ObjectResponse
from ..models.object_update import ObjectUpdate, ObjectUpdateDict
from ..server.server import Server


class Objects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ObjectsWithRawResponse(client, server, auth)

    def batch_objects(
        self, slug: str, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchResponse:
        """Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so
        inspect the ``status`` of every entry in the response rather than relying on the HTTP status alone. Prefer this
        over repeated single-Object calls when changing many Objects.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The per-operation results, in request order.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.batch_objects(slug, body, request_options=request_options))

    def create_object(
        self, slug: str, body: ObjectCreate | ObjectCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ObjectResponse:
        """Create a single Object. ``title`` and ``type`` are required; the ``slug`` is derived from the title when
        omitted. Values in ``metadata`` must satisfy any validation configured on the Object type's Metafields. To
        create several Objects at once, use the batch endpoint instead of looping over this one.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created Object.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_object(slug, body, request_options=request_options))

    def delete_object(
        self,
        slug: str,
        object_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the
        user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object was deleted.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_object(
                slug, object_id, trigger_webhook=trigger_webhook, request_options=request_options
            ),
        )

    def get_object(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        depth: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectResponse:
        """Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with
        ``query={"type":"...","slug":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Object.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_object(
                slug,
                object_id,
                read_key=read_key,
                preview_token=preview_token,
                props=props,
                status=status,
                depth=depth,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    def list_objects(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        query: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        sort: str | None = "-order",
        limit: int | None = 1000,
        skip: int | None = 0,
        depth: int | None = 0,
        after: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectListResponse:
        """Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by
        slug: pass ``query={"type":"posts","slug":"my-post"}`` and read the first element of ``objects``.

        The ``query`` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax.
        Use ``props`` to limit the response to the fields you need, which matters because the API rejects responses over
        roughly 6 MB with a 413. Use ``depth`` to resolve Object Relationship Metafields into nested Objects. For large
        collections, prefer cursor pagination with ``after`` over large ``skip`` offsets.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            sort: Sort order. Prefix with ``-`` for descending. Sorting by ``metadata.$key`` requires that Metafield to
                be marked sortable under Object type > Settings, and is limited to two sortable Metafields per type.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            after: Cursor pagination: the ``id`` of the last Object from the previous page. Follows the current ``sort``
                order with ``id`` as a tiebreaker, works with any ``sort`` except ``random``, and is more efficient than
                large ``skip`` offsets. Only one of ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching Objects.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. No Objects matched the query. The response exceeded the 6 MB limit. Narrow ``props``, lower
                ``limit``, or paginate. Too many requests hit the API too quickly. Back off and retry. Something went
                wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_objects(
                slug,
                read_key=read_key,
                preview_token=preview_token,
                query=query,
                props=props,
                status=status,
                sort=sort,
                limit=limit,
                skip=skip,
                depth=depth,
                after=after,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    def update_object(
        self,
        slug: str,
        object_id: str,
        body: ObjectUpdate | ObjectUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectResponse:
        """Update an Object in place. Only the properties you send are changed, and within ``metadata`` only the keys
        you send are changed, so you can update a single Metafield without resending the rest. Set ``status`` to
        ``published`` to publish a draft.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Object.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_object(slug, object_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ObjectsWithRawResponse:
        return self._with_raw_response


class AsyncObjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncObjectsWithRawResponse(client, server, auth)

    async def batch_objects(
        self,
        slug: str,
        body: BatchRequest | BatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchResponse:
        """Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so
        inspect the ``status`` of every entry in the response rather than relying on the HTTP status alone. Prefer this
        over repeated single-Object calls when changing many Objects.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The per-operation results, in request order.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.batch_objects(slug, body, request_options=request_options))

    async def create_object(
        self,
        slug: str,
        body: ObjectCreate | ObjectCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectResponse:
        """Create a single Object. ``title`` and ``type`` are required; the ``slug`` is derived from the title when
        omitted. Values in ``metadata`` must satisfy any validation configured on the Object type's Metafields. To
        create several Objects at once, use the batch endpoint instead of looping over this one.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created Object.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_object(slug, body, request_options=request_options))

    async def delete_object(
        self,
        slug: str,
        object_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the
        user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object was deleted.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_object(
                slug, object_id, trigger_webhook=trigger_webhook, request_options=request_options
            ),
        )

    async def get_object(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        depth: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectResponse:
        """Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with
        ``query={"type":"...","slug":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Object.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_object(
                slug,
                object_id,
                read_key=read_key,
                preview_token=preview_token,
                props=props,
                status=status,
                depth=depth,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    async def list_objects(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        query: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        sort: str | None = "-order",
        limit: int | None = 1000,
        skip: int | None = 0,
        depth: int | None = 0,
        after: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectListResponse:
        """Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by
        slug: pass ``query={"type":"posts","slug":"my-post"}`` and read the first element of ``objects``.

        The ``query`` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax.
        Use ``props`` to limit the response to the fields you need, which matters because the API rejects responses over
        roughly 6 MB with a 413. Use ``depth`` to resolve Object Relationship Metafields into nested Objects. For large
        collections, prefer cursor pagination with ``after`` over large ``skip`` offsets.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            sort: Sort order. Prefix with ``-`` for descending. Sorting by ``metadata.$key`` requires that Metafield to
                be marked sortable under Object type > Settings, and is limited to two sortable Metafields per type.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            after: Cursor pagination: the ``id`` of the last Object from the previous page. Follows the current ``sort``
                order with ``id`` as a tiebreaker, works with any ``sort`` except ``random``, and is more efficient than
                large ``skip`` offsets. Only one of ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching Objects.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. No Objects matched the query. The response exceeded the 6 MB limit. Narrow ``props``, lower
                ``limit``, or paginate. Too many requests hit the API too quickly. Back off and retry. Something went
                wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_objects(
                slug,
                read_key=read_key,
                preview_token=preview_token,
                query=query,
                props=props,
                status=status,
                sort=sort,
                limit=limit,
                skip=skip,
                depth=depth,
                after=after,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    async def update_object(
        self,
        slug: str,
        object_id: str,
        body: ObjectUpdate | ObjectUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectResponse:
        """Update an Object in place. Only the properties you send are changed, and within ``metadata`` only the keys
        you send are changed, so you can update a single Metafield without resending the rest. Set ``status`` to
        ``published`` to publish a draft.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Object.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_object(slug, object_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncObjectsWithRawResponse:
        return self._with_raw_response


class ObjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_objects(
        self, slug: str, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchResponse, BatchObjectsErrorBody]:
        """Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so
        inspect the ``status`` of every entry in the response rather than relying on the HTTP status alone. Prefer this
        over repeated single-Object calls when changing many Objects.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/objects/batch"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[BatchResponse],
            error_mapper=batch_objects_error_mapper,
            request_options=request_options,
        )

    def create_object(
        self, slug: str, body: ObjectCreate | ObjectCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ObjectResponse, CreateObjectErrorBody]:
        """Create a single Object. ``title`` and ``type`` are required; the ``slug`` is derived from the title when
        omitted. Values in ``metadata`` must satisfy any validation configured on the Object type's Metafields. To
        create several Objects at once, use the batch endpoint instead of looping over this one.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/objects"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectCreate | ObjectCreateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[ObjectResponse],
            error_mapper=create_object_error_mapper,
            request_options=request_options,
        )

    def delete_object(
        self,
        slug: str,
        object_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, DeleteObjectErrorBody]:
        """Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the
        user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            query_params=[param[bool | None]("trigger_webhook", trigger_webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_object_error_mapper,
            request_options=request_options,
        )

    def get_object(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        depth: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectResponse, GetObjectErrorBody]:
        """Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with
        ``query={"type":"...","slug":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("props", props),
                param[Status4OrStr | None]("status", status),
                param[int | None]("depth", depth),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[ObjectResponse],
            error_mapper=get_object_error_mapper,
            request_options=request_options,
        )

    def list_objects(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        query: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        sort: str | None = "-order",
        limit: int | None = 1000,
        skip: int | None = 0,
        depth: int | None = 0,
        after: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectListResponse, ListObjectsErrorBody]:
        """Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by
        slug: pass ``query={"type":"posts","slug":"my-post"}`` and read the first element of ``objects``.

        The ``query`` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax.
        Use ``props`` to limit the response to the fields you need, which matters because the API rejects responses over
        roughly 6 MB with a 413. Use ``depth`` to resolve Object Relationship Metafields into nested Objects. For large
        collections, prefer cursor pagination with ``after`` over large ``skip`` offsets.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            sort: Sort order. Prefix with ``-`` for descending. Sorting by ``metadata.$key`` requires that Metafield to
                be marked sortable under Object type > Settings, and is limited to two sortable Metafields per type.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            after: Cursor pagination: the ``id`` of the last Object from the previous page. Follows the current ``sort``
                order with ``id`` as a tiebreaker, works with any ``sort`` except ``random``, and is more efficient than
                large ``skip`` offsets. Only one of ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects"),
            path_params=[param[str]("slug", slug)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("query", query),
                param[str | None]("props", props),
                param[Status4OrStr | None]("status", status),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("skip", skip),
                param[int | None]("depth", depth),
                param[str | None]("after", after),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[ObjectListResponse],
            error_mapper=list_objects_error_mapper,
            request_options=request_options,
        )

    def update_object(
        self,
        slug: str,
        object_id: str,
        body: ObjectUpdate | ObjectUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectResponse, UpdateObjectErrorBody]:
        """Update an Object in place. Only the properties you send are changed, and within ``metadata`` only the keys
        you send are changed, so you can update a single Metafield without resending the rest. Set ``status`` to
        ``published`` to publish a draft.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectUpdate | ObjectUpdateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[ObjectResponse],
            error_mapper=update_object_error_mapper,
            request_options=request_options,
        )


class AsyncObjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_objects(
        self,
        slug: str,
        body: BatchRequest | BatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchResponse, BatchObjectsErrorBody]:
        """Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so
        inspect the ``status`` of every entry in the response rather than relying on the HTTP status alone. Prefer this
        over repeated single-Object calls when changing many Objects.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/objects/batch"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[BatchResponse],
            error_mapper=batch_objects_error_mapper,
            request_options=request_options,
        )

    async def create_object(
        self,
        slug: str,
        body: ObjectCreate | ObjectCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectResponse, CreateObjectErrorBody]:
        """Create a single Object. ``title`` and ``type`` are required; the ``slug`` is derived from the title when
        omitted. Values in ``metadata`` must satisfy any validation configured on the Object type's Metafields. To
        create several Objects at once, use the batch endpoint instead of looping over this one.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/objects"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectCreate | ObjectCreateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[ObjectResponse],
            error_mapper=create_object_error_mapper,
            request_options=request_options,
        )

    async def delete_object(
        self,
        slug: str,
        object_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, DeleteObjectErrorBody]:
        """Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the
        user before calling it.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            query_params=[param[bool | None]("trigger_webhook", trigger_webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_object_error_mapper,
            request_options=request_options,
        )

    async def get_object(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        depth: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectResponse, GetObjectErrorBody]:
        """Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with
        ``query={"type":"...","slug":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("props", props),
                param[Status4OrStr | None]("status", status),
                param[int | None]("depth", depth),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[ObjectResponse],
            error_mapper=get_object_error_mapper,
            request_options=request_options,
        )

    async def list_objects(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        query: str | None = None,
        props: str | None = None,
        status: Status4OrStr | None = Status4.PUBLISHED,
        sort: str | None = "-order",
        limit: int | None = 1000,
        skip: int | None = 0,
        depth: int | None = 0,
        after: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectListResponse, ListObjectsErrorBody]:
        """Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by
        slug: pass ``query={"type":"posts","slug":"my-post"}`` and read the first element of ``objects``.

        The ``query`` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax.
        Use ``props`` to limit the response to the fields you need, which matters because the API rejects responses over
        roughly 6 MB with a 413. Use ``depth`` to resolve Object Relationship Metafields into nested Objects. For large
        collections, prefer cursor pagination with ``after`` over large ``skip`` offsets.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            status: Which version of each Object to return. ``any`` returns the latest draft or published version.
            sort: Sort order. Prefix with ``-`` for descending. Sorting by ``metadata.$key`` requires that Metafield to
                be marked sortable under Object type > Settings, and is limited to two sortable Metafields per type.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            depth: How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references
                are rejected.
            after: Cursor pagination: the ``id`` of the last Object from the previous page. Follows the current ``sort``
                order with ``id`` as a tiebreaker, works with any ``sort`` except ``random``, and is more efficient than
                large ``skip`` offsets. Only one of ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects"),
            path_params=[param[str]("slug", slug)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("query", query),
                param[str | None]("props", props),
                param[Status4OrStr | None]("status", status),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("skip", skip),
                param[int | None]("depth", depth),
                param[str | None]("after", after),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[ObjectListResponse],
            error_mapper=list_objects_error_mapper,
            request_options=request_options,
        )

    async def update_object(
        self,
        slug: str,
        object_id: str,
        body: ObjectUpdate | ObjectUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectResponse, UpdateObjectErrorBody]:
        """Update an Object in place. Only the properties you send are changed, and within ``metadata`` only the keys
        you send are changed, so you can update a single Metafield without resending the rest. Set ``status`` to
        ``published`` to publish a draft.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ObjectUpdate | ObjectUpdateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[ObjectResponse],
            error_mapper=update_object_error_mapper,
            request_options=request_options,
        )
