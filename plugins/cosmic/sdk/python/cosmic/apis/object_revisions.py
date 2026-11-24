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
from ..errors.create_object_revision_error import CreateObjectRevisionErrorBody, create_object_revision_error_mapper
from ..errors.get_object_revision_error import GetObjectRevisionErrorBody, get_object_revision_error_mapper
from ..errors.list_object_revisions_error import ListObjectRevisionsErrorBody, list_object_revisions_error_mapper
from ..models.enums.sort_cosmic_rest_api_v3_object_revisions_api import (
    SortCosmicRestApiV3ObjectRevisionsApi,
    SortCosmicRestApiV3ObjectRevisionsApiOrStr,
)
from ..models.revision_create import RevisionCreate, RevisionCreateDict
from ..models.revision_list_response import RevisionListResponse
from ..models.revision_response import RevisionResponse
from ..server.server import Server


class ObjectRevisions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ObjectRevisionsWithRawResponse(client, server, auth)

    def create_object_revision(
        self,
        slug: str,
        object_id: str,
        body: RevisionCreate | RevisionCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RevisionResponse:
        """Create a new revision of an Object without publishing it. The revision is created with status ``draft``;
        publish it by updating the Object itself with ``status: published``. Use this to stage an edit for review rather
        than changing live content.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created revision.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_object_revision(slug, object_id, body, request_options=request_options)
        )

    def get_object_revision(
        self,
        slug: str,
        object_id: str,
        revision_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RevisionResponse:
        """Retrieve one revision of an Object by its id, including the ``metadata`` values as they were at that point in
        history.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            revision_id: The revision id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested revision.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_object_revision(
                slug,
                object_id,
                revision_id,
                read_key=read_key,
                preview_token=preview_token,
                props=props,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    def list_object_revisions(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RevisionListResponse:
        """Retrieve the version history of an Object, newest first by default. Revisions are immutable.

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
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object's revisions.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_object_revisions(
                slug,
                object_id,
                read_key=read_key,
                preview_token=preview_token,
                props=props,
                sort=sort,
                limit=limit,
                skip=skip,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ObjectRevisionsWithRawResponse:
        return self._with_raw_response


class AsyncObjectRevisions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncObjectRevisionsWithRawResponse(client, server, auth)

    async def create_object_revision(
        self,
        slug: str,
        object_id: str,
        body: RevisionCreate | RevisionCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RevisionResponse:
        """Create a new revision of an Object without publishing it. The revision is created with status ``draft``;
        publish it by updating the Object itself with ``status: published``. Use this to stage an edit for review rather
        than changing live content.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created revision.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_object_revision(slug, object_id, body, request_options=request_options)
        )

    async def get_object_revision(
        self,
        slug: str,
        object_id: str,
        revision_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RevisionResponse:
        """Retrieve one revision of an Object by its id, including the ``metadata`` values as they were at that point in
        history.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            revision_id: The revision id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested revision.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_object_revision(
                slug,
                object_id,
                revision_id,
                read_key=read_key,
                preview_token=preview_token,
                props=props,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    async def list_object_revisions(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RevisionListResponse:
        """Retrieve the version history of an Object, newest first by default. Revisions are immutable.

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
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Object's revisions.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_object_revisions(
                slug,
                object_id,
                read_key=read_key,
                preview_token=preview_token,
                props=props,
                sort=sort,
                limit=limit,
                skip=skip,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncObjectRevisionsWithRawResponse:
        return self._with_raw_response


class ObjectRevisionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_object_revision(
        self,
        slug: str,
        object_id: str,
        body: RevisionCreate | RevisionCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RevisionResponse, CreateObjectRevisionErrorBody]:
        """Create a new revision of an Object without publishing it. The revision is created with status ``draft``;
        publish it by updating the Object itself with ``status: published``. Use this to stage an edit for review rather
        than changing live content.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}/revisions"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RevisionCreate | RevisionCreateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[RevisionResponse],
            error_mapper=create_object_revision_error_mapper,
            request_options=request_options,
        )

    def get_object_revision(
        self,
        slug: str,
        object_id: str,
        revision_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RevisionResponse, GetObjectRevisionErrorBody]:
        """Retrieve one revision of an Object by its id, including the ``metadata`` values as they were at that point in
        history.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            revision_id: The revision id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}/revisions/{revision_id}"),
            path_params=[
                param[str]("slug", slug), param[str]("object_id", object_id), param[str]("revision_id", revision_id)
            ],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("props", props),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[RevisionResponse],
            error_mapper=get_object_revision_error_mapper,
            request_options=request_options,
        )

    def list_object_revisions(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RevisionListResponse, ListObjectRevisionsErrorBody]:
        """Retrieve the version history of an Object, newest first by default. Revisions are immutable.

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
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}/revisions"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("props", props),
                param[SortCosmicRestApiV3ObjectRevisionsApiOrStr | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("skip", skip),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[RevisionListResponse],
            error_mapper=list_object_revisions_error_mapper,
            request_options=request_options,
        )


class AsyncObjectRevisionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_object_revision(
        self,
        slug: str,
        object_id: str,
        body: RevisionCreate | RevisionCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RevisionResponse, CreateObjectRevisionErrorBody]:
        """Create a new revision of an Object without publishing it. The revision is created with status ``draft``;
        publish it by updating the Object itself with ``status: published``. Use this to stage an edit for review rather
        than changing live content.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}/revisions"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RevisionCreate | RevisionCreateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[RevisionResponse],
            error_mapper=create_object_revision_error_mapper,
            request_options=request_options,
        )

    async def get_object_revision(
        self,
        slug: str,
        object_id: str,
        revision_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RevisionResponse, GetObjectRevisionErrorBody]:
        """Retrieve one revision of an Object by its id, including the ``metadata`` values as they were at that point in
        history.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            object_id: The Object id.
            revision_id: The revision id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            preview_token: A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
                valid, the request is treated as ``status=any`` so the latest draft is returned. Bound to one Bucket for
                one hour. Still requires ``read_key``. Invalid or expired tokens return 401.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}/revisions/{revision_id}"),
            path_params=[
                param[str]("slug", slug), param[str]("object_id", object_id), param[str]("revision_id", revision_id)
            ],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("props", props),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[RevisionResponse],
            error_mapper=get_object_revision_error_mapper,
            request_options=request_options,
        )

    async def list_object_revisions(
        self,
        slug: str,
        object_id: str,
        *,
        read_key: str | None = None,
        preview_token: str | None = None,
        props: str | None = None,
        sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RevisionListResponse, ListObjectRevisionsErrorBody]:
        """Retrieve the version history of an Object, newest first by default. Revisions are immutable.

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
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/objects/{object_id}/revisions"),
            path_params=[param[str]("slug", slug), param[str]("object_id", object_id)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("preview_token", preview_token),
                param[str | None]("props", props),
                param[SortCosmicRestApiV3ObjectRevisionsApiOrStr | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("skip", skip),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[RevisionListResponse],
            error_mapper=list_object_revisions_error_mapper,
            request_options=request_options,
        )
