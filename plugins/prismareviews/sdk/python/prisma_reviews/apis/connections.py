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
from ..errors.create_connect_link_error import CreateConnectLinkErrorBody, create_connect_link_error_mapper
from ..errors.create_connection_error import CreateConnectionErrorBody, create_connection_error_mapper
from ..errors.delete_connection_error import DeleteConnectionErrorBody, delete_connection_error_mapper
from ..errors.list_connections_error import ListConnectionsErrorBody, list_connections_error_mapper
from ..models.connect_link import ConnectLink
from ..models.connection_created import ConnectionCreated
from ..models.connection_deleted import ConnectionDeleted
from ..models.connection_input import ConnectionInput, ConnectionInputDict
from ..models.connection_list import ConnectionList
from ..models.v1_connect_links_request import V1ConnectLinksRequest, V1ConnectLinksRequestDict
from ..server.server import Server


class Connections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConnectionsWithRawResponse(client, server, auth)

    def create_connect_link(
        self,
        *,
        body: V1ConnectLinksRequest | V1ConnectLinksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConnectLink:
        """A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API
        key. Connections made through it belong to your workspace and to the mode of the key that created the link, and
        carry ``metadata: {"via": "connect_link"}``. Valid for 7 days and reusable: treat it like a password-reset link.
        The body is optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The connect link.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. Unknown ``platform``, or a
                ``redirect_url`` that isn't a URL or doesn't use https (``invalid_request``). More requests this minute
                than the plan allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable.
                Prisma is under maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_connect_link(body=body, request_options=request_options))

    def create_connection(
        self, body: ConnectionInput | ConnectionInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectionCreated:
        """Connects one platform account and imports its locations. How depends on the platform (see ``GET
        /v1/platforms``): ``oauth`` platforms need ``redirect_url`` and return ``status: "pending"`` with an
        ``authorization_url`` for the owner; ``credentials`` platforms need ``credentials``, which Prisma tries against
        the platform before storing anything; ``listing_url`` platforms need the public ``listing_url`` of the listing.
        With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations
        over the plan limit are not created and are counted in ``locations_over_plan_limit``. Not idempotent: retrying
        creates a second connection.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new connection, plus ``authorization_url`` (OAuth) or ``locations_created`` and
            ``locations_over_plan_limit``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The platform isn't in your plan (``plan_feature_unavailable``,
                with ``platform``, ``feature`` and ``upgrade_url``), isn't enabled for your account yet
                (``platform_not_enabled``), or the account is suspended (``account_suspended``). Unknown ``platform``
                (with ``platforms_url``), a missing ``redirect_url``, ``credentials`` or ``listing_url``, a listing URL
                from another site or a body that isn't valid JSON (``invalid_request``); credentials with the wrong
                shape or rejected by the platform (``invalid_credentials``). Errors about a known platform carry
                ``required_fields``, ``example`` and ``setup``. More requests this minute than the plan allows for this
                key. Not counted in usage. Something failed on Prisma's side. Retryable. The platform can't be connected
                with live keys yet (``live_ready: false`` in ``GET /v1/platforms``). Test keys work. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_connection(body, request_options=request_options))

    def delete_connection(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionDeleted:
        """Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become
        ``disconnected`` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are
        then deleted. To reauthorize a connection, delete it and create a new one.

        Args:
            id_: Connection ID (``con_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The disconnected connection, plus ``locations_disconnected``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No connection with that ID in this
                workspace and mode (``resource_not_found``). More requests this minute than the plan allows for this
                key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and
                the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_connection(id_, request_options=request_options))

    def list_connections(self, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionList:
        """Every connection of your workspace in the mode of your key, oldest first, including ``pending``,
        ``reauth_required`` and ``disconnected`` ones. Not paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All connections.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_connections(request_options=request_options))

    @property
    def with_raw_response(self) -> ConnectionsWithRawResponse:
        return self._with_raw_response


class AsyncConnections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConnectionsWithRawResponse(client, server, auth)

    async def create_connect_link(
        self,
        *,
        body: V1ConnectLinksRequest | V1ConnectLinksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConnectLink:
        """A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API
        key. Connections made through it belong to your workspace and to the mode of the key that created the link, and
        carry ``metadata: {"via": "connect_link"}``. Valid for 7 days and reusable: treat it like a password-reset link.
        The body is optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The connect link.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. Unknown ``platform``, or a
                ``redirect_url`` that isn't a URL or doesn't use https (``invalid_request``). More requests this minute
                than the plan allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable.
                Prisma is under maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_connect_link(body=body, request_options=request_options))

    async def create_connection(
        self, body: ConnectionInput | ConnectionInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionCreated:
        """Connects one platform account and imports its locations. How depends on the platform (see ``GET
        /v1/platforms``): ``oauth`` platforms need ``redirect_url`` and return ``status: "pending"`` with an
        ``authorization_url`` for the owner; ``credentials`` platforms need ``credentials``, which Prisma tries against
        the platform before storing anything; ``listing_url`` platforms need the public ``listing_url`` of the listing.
        With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations
        over the plan limit are not created and are counted in ``locations_over_plan_limit``. Not idempotent: retrying
        creates a second connection.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new connection, plus ``authorization_url`` (OAuth) or ``locations_created`` and
            ``locations_over_plan_limit``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The platform isn't in your plan (``plan_feature_unavailable``,
                with ``platform``, ``feature`` and ``upgrade_url``), isn't enabled for your account yet
                (``platform_not_enabled``), or the account is suspended (``account_suspended``). Unknown ``platform``
                (with ``platforms_url``), a missing ``redirect_url``, ``credentials`` or ``listing_url``, a listing URL
                from another site or a body that isn't valid JSON (``invalid_request``); credentials with the wrong
                shape or rejected by the platform (``invalid_credentials``). Errors about a known platform carry
                ``required_fields``, ``example`` and ``setup``. More requests this minute than the plan allows for this
                key. Not counted in usage. Something failed on Prisma's side. Retryable. The platform can't be connected
                with live keys yet (``live_ready: false`` in ``GET /v1/platforms``). Test keys work. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_connection(body, request_options=request_options))

    async def delete_connection(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionDeleted:
        """Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become
        ``disconnected`` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are
        then deleted. To reauthorize a connection, delete it and create a new one.

        Args:
            id_: Connection ID (``con_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The disconnected connection, plus ``locations_disconnected``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No connection with that ID in this
                workspace and mode (``resource_not_found``). More requests this minute than the plan allows for this
                key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and
                the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_connection(id_, request_options=request_options))

    async def list_connections(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ConnectionList:
        """Every connection of your workspace in the mode of your key, oldest first, including ``pending``,
        ``reauth_required`` and ``disconnected`` ones. Not paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All connections.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_connections(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncConnectionsWithRawResponse:
        return self._with_raw_response


class ConnectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_connect_link(
        self,
        *,
        body: V1ConnectLinksRequest | V1ConnectLinksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectLink, CreateConnectLinkErrorBody]:
        """A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API
        key. Connections made through it belong to your workspace and to the mode of the key that created the link, and
        carry ``metadata: {"via": "connect_link"}``. Valid for 7 days and reusable: treat it like a password-reset link.
        The body is optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/connect_links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ConnectLinksRequest | V1ConnectLinksRequestDict | None](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ConnectLink],
            error_mapper=create_connect_link_error_mapper,
            request_options=request_options,
        )

    def create_connection(
        self, body: ConnectionInput | ConnectionInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionCreated, CreateConnectionErrorBody]:
        """Connects one platform account and imports its locations. How depends on the platform (see ``GET
        /v1/platforms``): ``oauth`` platforms need ``redirect_url`` and return ``status: "pending"`` with an
        ``authorization_url`` for the owner; ``credentials`` platforms need ``credentials``, which Prisma tries against
        the platform before storing anything; ``listing_url`` platforms need the public ``listing_url`` of the listing.
        With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations
        over the plan limit are not created and are counted in ``locations_over_plan_limit``. Not idempotent: retrying
        creates a second connection.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/connections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConnectionInput | ConnectionInputDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ConnectionCreated],
            error_mapper=create_connection_error_mapper,
            request_options=request_options,
        )

    def delete_connection(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionDeleted, DeleteConnectionErrorBody]:
        """Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become
        ``disconnected`` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are
        then deleted. To reauthorize a connection, delete it and create a new one.

        Args:
            id_: Connection ID (``con_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/connections/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ConnectionDeleted],
            error_mapper=delete_connection_error_mapper,
            request_options=request_options,
        )

    def list_connections(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionList, ListConnectionsErrorBody]:
        """Every connection of your workspace in the mode of your key, oldest first, including ``pending``,
        ``reauth_required`` and ``disconnected`` ones. Not paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/connections"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ConnectionList],
            error_mapper=list_connections_error_mapper,
            request_options=request_options,
        )


class AsyncConnectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_connect_link(
        self,
        *,
        body: V1ConnectLinksRequest | V1ConnectLinksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectLink, CreateConnectLinkErrorBody]:
        """A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API
        key. Connections made through it belong to your workspace and to the mode of the key that created the link, and
        carry ``metadata: {"via": "connect_link"}``. Valid for 7 days and reusable: treat it like a password-reset link.
        The body is optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/connect_links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ConnectLinksRequest | V1ConnectLinksRequestDict | None](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ConnectLink],
            error_mapper=create_connect_link_error_mapper,
            request_options=request_options,
        )

    async def create_connection(
        self, body: ConnectionInput | ConnectionInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionCreated, CreateConnectionErrorBody]:
        """Connects one platform account and imports its locations. How depends on the platform (see ``GET
        /v1/platforms``): ``oauth`` platforms need ``redirect_url`` and return ``status: "pending"`` with an
        ``authorization_url`` for the owner; ``credentials`` platforms need ``credentials``, which Prisma tries against
        the platform before storing anything; ``listing_url`` platforms need the public ``listing_url`` of the listing.
        With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations
        over the plan limit are not created and are counted in ``locations_over_plan_limit``. Not idempotent: retrying
        creates a second connection.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/connections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConnectionInput | ConnectionInputDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ConnectionCreated],
            error_mapper=create_connection_error_mapper,
            request_options=request_options,
        )

    async def delete_connection(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionDeleted, DeleteConnectionErrorBody]:
        """Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become
        ``disconnected`` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are
        then deleted. To reauthorize a connection, delete it and create a new one.

        Args:
            id_: Connection ID (``con_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/connections/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ConnectionDeleted],
            error_mapper=delete_connection_error_mapper,
            request_options=request_options,
        )

    async def list_connections(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionList, ListConnectionsErrorBody]:
        """Every connection of your workspace in the mode of your key, oldest first, including ``pending``,
        ``reauth_required`` and ``disconnected`` ones. Not paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/connections"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ConnectionList],
            error_mapper=list_connections_error_mapper,
            request_options=request_options,
        )
